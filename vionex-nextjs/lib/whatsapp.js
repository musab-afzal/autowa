import { randomBytes } from "node:crypto";
import { getDb } from "./db";
import { openwa, OpenWAError } from "./openwa";
import { logAudit } from "./audit";

/* Every helper here is scoped to one AutoWA user: a WhatsApp is addressed by
   AutoWA's own wa_sessions.id and is only found if it belongs to that user. */

const RUNNING = new Set(["initializing", "qr_ready", "authenticating", "ready"]);
const ADMIN_MAX = 50;

export class WaError extends OpenWAError {}

export function maxWhatsApps(user) {
  return user.role === "admin" ? ADMIN_MAX : user.max_whatsapp_numbers || 1;
}

function rows(userId) {
  return getDb().prepare("SELECT * FROM wa_sessions WHERE user_id = ? ORDER BY id").all(userId);
}

function getRow(userId, id) {
  const row = getDb().prepare("SELECT * FROM wa_sessions WHERE id = ? AND user_id = ?").get(Number(id), userId);
  if (!row) throw new WaError(404, "This WhatsApp was not found.");
  return row;
}

/* A new connectedAt on a ready session = one WhatsApp login. */
function recordLogin(row, s) {
  if (s.status !== "ready" || !s.connectedAt) return;
  const info = getDb()
    .prepare(
      `INSERT OR IGNORE INTO wa_login_events (user_id, wa_session_id, label, phone, push_name, connected_at)
       VALUES (?, ?, ?, ?, ?, ?)`,
    )
    .run(row.user_id, row.id, row.label, s.phone || null, s.pushName || null, new Date(s.connectedAt).toISOString());
  if (info.changes) {
    logAudit({
      actorId: row.user_id,
      category: "whatsapp",
      action: "WhatsApp connected",
      description: `WhatsApp "${row.label}" connected${s.phone ? ` as +${s.phone}` : ""}${s.pushName ? ` (${s.pushName})` : ""}`,
      target: row.label,
    });
  }
}

function shape(row, s) {
  if (s) recordLogin(row, s);
  return {
    id: row.id,
    label: row.label || `WhatsApp ${row.id}`,
    createdAt: row.created_at,
    status: s ? s.status : "missing",
    /* a number is "linked" only while connected; after it is removed from the phone
       (or logged out) the engine reports disconnected and it becomes the last number */
    phone: s?.status === "ready" ? s.phone || null : null,
    lastPhone: s?.status !== "ready" ? s?.phone || null : null,
    pushName: s?.status === "ready" ? s?.pushName || null : null,
    connectedAt: s?.status === "ready" ? s?.connectedAt || null : null,
    lastError: s?.lastError || null,
    engineLoaded: !!s?.engineLoaded,
  };
}

async function fetchSession(row) {
  try {
    return await openwa(`/sessions/${row.openwa_session_id}`);
  } catch (e) {
    if (e instanceof OpenWAError && e.status === 404) return null;
    throw e;
  }
}

export async function listWhatsApps(userId) {
  const list = rows(userId);
  if (list.length === 0) return [];
  /* one call for all sessions, then match by id */
  const all = await openwa("/sessions");
  const byId = new Map(all.map((s) => [s.id, s]));
  return list.map((r) => shape(r, byId.get(r.openwa_session_id)));
}

export async function getWhatsApp(userId, id) {
  const row = getRow(userId, id);
  return shape(row, await fetchSession(row));
}

async function start(row) {
  try {
    return await openwa(`/sessions/${row.openwa_session_id}/start`, { method: "POST" });
  } catch (e) {
    /* 400 = already started */
    if (!(e instanceof OpenWAError && e.status === 400)) throw e;
    return fetchSession(row);
  }
}

export async function addWhatsApp(user, label) {
  if (rows(user.id).length >= maxWhatsApps(user)) {
    throw new WaError(403, `Your package allows ${maxWhatsApps(user)} WhatsApp number(s). Delete one or upgrade your package.`);
  }
  const name = `autowa-u${user.id}-${randomBytes(4).toString("hex")}`;
  const s = await openwa("/sessions", { method: "POST", body: { name } });
  const info = getDb()
    .prepare("INSERT INTO wa_sessions (user_id, openwa_session_id, openwa_session_name, label) VALUES (?, ?, ?, ?)")
    .run(user.id, s.id, s.name, label || null);
  const row = getRow(user.id, info.lastInsertRowid);
  if (!label) {
    getDb().prepare("UPDATE wa_sessions SET label = ? WHERE id = ?").run(`WhatsApp ${row.id}`, row.id);
    row.label = `WhatsApp ${row.id}`;
  }
  return shape(row, await start(row));
}

/* Starts (or restarts) a WhatsApp so it reconnects or shows a fresh QR code.
   If the engine lost the session, a new one is created under the same AutoWA id. */
export async function startWhatsApp(userId, id) {
  const row = getRow(userId, id);
  let s = await fetchSession(row);
  if (!s) {
    const name = `autowa-u${userId}-${randomBytes(4).toString("hex")}`;
    s = await openwa("/sessions", { method: "POST", body: { name } });
    getDb()
      .prepare("UPDATE wa_sessions SET openwa_session_id = ?, openwa_session_name = ? WHERE id = ?")
      .run(s.id, s.name, row.id);
    row.openwa_session_id = s.id;
  }
  if (!RUNNING.has(s.status) || !s.engineLoaded) s = await start(row);
  return shape(row, s);
}

export async function getWhatsAppQr(userId, id) {
  const row = getRow(userId, id);
  try {
    return await openwa(`/sessions/${row.openwa_session_id}/qr`);
  } catch (e) {
    if (e instanceof OpenWAError && e.status === 400) return { qrCode: null, status: null };
    throw e;
  }
}

export async function requestPairingCode(userId, id, phoneNumber) {
  const row = getRow(userId, id);
  return openwa(`/sessions/${row.openwa_session_id}/pairing-code`, { method: "POST", body: { phoneNumber } });
}

/* Unlinks the device from the phone. If it is not running there is nothing to unlink. */
export async function unlinkWhatsApp(userId, id) {
  const row = getRow(userId, id);
  try {
    return shape(row, await openwa(`/sessions/${row.openwa_session_id}/logout`, { method: "POST" }));
  } catch (e) {
    if (e instanceof OpenWAError && e.status === 400) return shape(row, await fetchSession(row));
    throw e;
  }
}

/* Unlinks (best effort) and removes the WhatsApp from the engine and from AutoWA. */
export async function deleteWhatsApp(userId, id) {
  const row = getRow(userId, id);
  const s = await fetchSession(row);
  if (s?.status === "ready") {
    await openwa(`/sessions/${row.openwa_session_id}/logout`, { method: "POST" }).catch(() => {});
  }
  if (s) {
    try {
      await openwa(`/sessions/${row.openwa_session_id}`, { method: "DELETE" });
    } catch (e) {
      if (!(e instanceof OpenWAError && e.status === 404)) throw e;
    }
  }
  getDb().prepare("DELETE FROM wa_sessions WHERE id = ?").run(row.id);
  return { ok: true, label: row.label || `WhatsApp ${row.id}`, phone: s?.phone || null };
}

/* The OpenWA session id for a user's WhatsApp, after checking it is connected. */
export async function requireReadySession(userId, id) {
  const row = getRow(userId, id);
  const s = await fetchSession(row);
  if (!s || s.status !== "ready") {
    throw new WaError(409, `${row.label || "This WhatsApp"} is not connected. Connect it first on the Login to WhatsApp page.`);
  }
  return { row, openwaId: row.openwa_session_id, phone: s.phone };
}
