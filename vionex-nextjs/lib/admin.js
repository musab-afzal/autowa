import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { randomBytes } from "node:crypto";
import { getDb } from "./db";
import { hashPassword } from "./password";
import { WaError, deleteWhatsApp } from "./whatsapp";
import { COUNTRIES, countryNames, parseCountries, serializeCountries } from "./countries";
import { normaliseRange } from "./stats";
import { GENERATOR_MAX } from "./limits";

/* Super admin data: system-wide statistics, operations, users and plans. */

const db = () => getDb();
const nowIso = () => new Date().toISOString();
const ACTIVE_MINUTES = 15;

function addDays(ymd, n) {
  const d = new Date(`${ymd}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

/* ----------------------------------------------------------- dashboard -- */

export function summary() {
  const one = (sql, ...a) => db().prepare(sql).get(...a);
  const since = new Date(Date.now() - 30 * 86400000).toISOString();
  const perf = one(
    "SELECT COALESCE(SUM(duration_ms), 0) AS ms, COALESCE(SUM(size), 0) AS n FROM filter_batches WHERE ok = 1 AND created_at >= ?",
    since,
  );
  return {
    numbersFiltered: one("SELECT COALESCE(SUM(checked), 0) AS n FROM filter_jobs").n,
    numbersOnWhatsApp: one("SELECT COALESCE(SUM(exists_count), 0) AS n FROM filter_jobs").n,
    numbersGenerated: one("SELECT COALESCE(SUM(quantity), 0) AS n FROM generator_logs").n,
    users: one("SELECT COUNT(*) AS n FROM users WHERE role = 'user'").n,
    activeAccounts: one("SELECT COUNT(*) AS n FROM users WHERE role = 'user' AND is_active = 1").n,
    admins: one("SELECT COUNT(*) AS n FROM users WHERE role = 'admin'").n,
    plans: one("SELECT COUNT(*) AS n FROM packages").n,
    activePlans: one("SELECT COUNT(*) AS n FROM packages WHERE is_active = 1").n,
    /* average WhatsApp response, last 30 days */
    secPer10k: perf.n ? (perf.ms / perf.n) * 10 : null, /* ms per number × 10,000 / 1,000 */
    numbersPerSec: perf.ms ? perf.n / (perf.ms / 1000) : null,
  };
}

/* Daily series for the graphs. userId = one user, or all users when empty. */
export function adminStats(fromIn, toIn, userId) {
  const { from, to } = normaliseRange(fromIn, toIn);
  const days = [];
  for (let d = from; d <= to; d = addDays(d, 1)) days.push(d);
  const uid = Number(userId) || null;
  const userSql = (col) => (uid ? ` AND ${col} = ${uid}` : "");

  const rows = (sql) => db().prepare(sql).all(from, to);
  const series = (list, key) => {
    const m = new Map(list.map((r) => [r.d, Number(r[key]) || 0]));
    return days.map((d) => m.get(d) || 0);
  };

  const gen = rows(
    `SELECT date(created_at, 'localtime') AS d, SUM(quantity) AS n FROM generator_logs
      WHERE date(created_at, 'localtime') BETWEEN ? AND ?${userSql("user_id")} GROUP BY d`,
  );
  const fil = rows(
    `SELECT date(n.checked_at, 'localtime') AS d, COUNT(*) AS n, SUM(n.result = 1) AS yes, SUM(n.result = 0) AS no
       FROM filter_numbers n JOIN filter_jobs j ON j.id = n.job_id
      WHERE n.checked_at IS NOT NULL AND date(n.checked_at, 'localtime') BETWEEN ? AND ?${userSql("j.user_id")} GROUP BY d`,
  );
  const signups = rows(
    `SELECT date(created_at, 'localtime') AS d, COUNT(*) AS n FROM users
      WHERE role = 'user' AND date(created_at, 'localtime') BETWEEN ? AND ? GROUP BY d`,
  );
  const perf = rows(
    `SELECT date(created_at, 'localtime') AS d, SUM(duration_ms) AS ms, SUM(size) AS n, COUNT(*) AS batches,
            SUM(ok = 0) AS failed
       FROM filter_batches WHERE date(created_at, 'localtime') BETWEEN ? AND ?${userSql("user_id")} GROUP BY d`,
  );
  const perfMap = new Map(perf.map((r) => [r.d, r]));

  return {
    from,
    to,
    days,
    generated: series(gen, "n"),
    filtered: series(fil, "n"),
    onWhatsApp: series(fil, "yes"),
    notOnWhatsApp: series(fil, "no"),
    newUsers: series(signups, "n"),
    /* seconds per 10,000 numbers and average batch response, per day (null = no filters that day) */
    secPer10k: days.map((d) => {
      const r = perfMap.get(d);
      return r && r.n ? Math.round((r.ms / r.n) * 10 * 10) / 10 : null;
    }),
    avgBatchMs: days.map((d) => {
      const r = perfMap.get(d);
      return r && r.batches ? Math.round(r.ms / r.batches) : null;
    }),
    failedBatches: days.map((d) => perfMap.get(d)?.failed || 0),
  };
}

export function operations() {
  const since = new Date(Date.now() - ACTIVE_MINUTES * 60000).toISOString();
  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString();
  const jobCols = `j.id, j.file_name AS fileName, j.total, j.checked, j.exists_count AS "exists", j.not_exists_count AS notExists,
                   j.status, j.message, j.created_at AS createdAt, u.id AS userId, u.name AS userName, u.email AS userEmail`;
  const activeUsers = db()
    .prepare(
      `SELECT id, name, email, role, last_seen_at AS lastSeenAt FROM users
        WHERE is_active = 1 AND last_seen_at >= ? ORDER BY last_seen_at DESC`,
    )
    .all(since);
  const running = db()
    .prepare(
      `SELECT ${jobCols} FROM filter_jobs j JOIN users u ON u.id = j.user_id
        WHERE j.status IN ('countdown', 'running') ORDER BY j.created_at`,
    )
    .all();
  const failed = db()
    .prepare(
      `SELECT ${jobCols} FROM filter_jobs j JOIN users u ON u.id = j.user_id
        WHERE j.status = 'stopped' AND j.created_at >= ? ORDER BY j.created_at DESC LIMIT 20`,
    )
    .all(weekAgo);
  const failedBatches = db()
    .prepare("SELECT COUNT(*) AS n FROM filter_batches WHERE ok = 0 AND created_at >= ?")
    .get(new Date(Date.now() - 86400000).toISOString()).n;
  /* sqlite rows have a null prototype; React needs plain objects to send them to the browser */
  const plain = (list) => list.map((r) => ({ ...r }));
  return { activeMinutes: ACTIVE_MINUTES, activeUsers: plain(activeUsers), running: plain(running), failed: plain(failed), failedBatches };
}

/* --------------------------------------------------------------- users -- */

const USER_COLS = `u.id, u.name, u.email, u.role, u.is_active AS isActive, u.package_id AS packageId,
  u.package_expires_at AS packageExpiresAt, u.countries, u.filter_quota AS filterQuota, u.quota_used AS quotaUsed, u.generator_limit AS generatorLimit,
  u.last_login_at AS lastLoginAt, u.last_seen_at AS lastSeenAt, u.created_at AS createdAt,
  p.name AS packageName, p.filter_quota AS planQuota, p.countries AS planCountries,
  (SELECT COUNT(*) FROM wa_sessions w WHERE w.user_id = u.id) AS whatsapps,
  (SELECT COALESCE(SUM(quantity), 0) FROM generator_logs g WHERE g.user_id = u.id) AS generated,
  (SELECT COALESCE(SUM(checked), 0) FROM filter_jobs f WHERE f.user_id = u.id) AS filtered`;

function shapeUser(r) {
  const countries = parseCountries(r.countries);
  const quota = r.filterQuota ?? r.planQuota ?? null;
  return {
    ...r,
    isActive: !!r.isActive,
    countries, /* null = inherits the plan's countries */
    effectiveCountries: countries ?? parseCountries(r.planCountries),
    quota: r.role === "admin" ? null : quota,
    quotaLeft: r.role === "admin" || quota == null ? null : Math.max(0, quota - r.quotaUsed),
  };
}

export function listUsers() {
  return db()
    .prepare(`SELECT ${USER_COLS} FROM users u LEFT JOIN packages p ON p.id = u.package_id ORDER BY u.id DESC`)
    .all()
    .map(shapeUser);
}

export function recentUsers(limit = 8) {
  return listUsers().slice(0, limit);
}

function getUserRow(id) {
  const r = db().prepare(`SELECT ${USER_COLS} FROM users u LEFT JOIN packages p ON p.id = u.package_id WHERE u.id = ?`).get(Number(id));
  if (!r) throw new WaError(404, "This user was not found.");
  return r;
}

function cleanUserInput(b, { creating }) {
  const out = {};
  const name = String(b.name ?? "").trim();
  const email = String(b.email ?? "").trim().toLowerCase();
  if (creating || b.name !== undefined) {
    if (name.length < 2 || name.length > 80) throw new WaError(400, "Enter a name of 2 to 80 characters.");
    out.name = name;
  }
  if (creating || b.email !== undefined) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) throw new WaError(400, "Enter a valid email address.");
    out.email = email;
  }
  if (creating || b.password) {
    const pw = String(b.password ?? "");
    if (pw.length < 8 || pw.length > 128) throw new WaError(400, "The password must be at least 8 characters.");
    out.password_hash = hashPassword(pw);
  }
  if (b.role !== undefined) {
    if (!["user", "admin"].includes(b.role)) throw new WaError(400, "Unknown role.");
    out.role = b.role;
  }
  if (b.packageId !== undefined) {
    const pid = b.packageId === null || b.packageId === "" ? null : Number(b.packageId);
    if (pid != null && !db().prepare("SELECT 1 FROM packages WHERE id = ?").get(pid)) throw new WaError(400, "Unknown plan.");
    out.package_id = pid;
  }
  if (b.packageExpiresAt !== undefined) {
    if (b.packageExpiresAt === null || b.packageExpiresAt === "") out.package_expires_at = null;
    else {
      const d = new Date(`${String(b.packageExpiresAt).slice(0, 10)}T23:59:59`);
      if (Number.isNaN(d.getTime())) throw new WaError(400, "Enter a valid expiry date.");
      out.package_expires_at = d.toISOString();
    }
  }
  if (b.countries !== undefined) out.countries = b.countries === null ? null : serializeCountries(b.countries);
  if (b.filterQuota !== undefined) {
    if (b.filterQuota === null || b.filterQuota === "") out.filter_quota = null;
    else {
      const q = Number(b.filterQuota);
      if (!Number.isInteger(q) || q < 0 || q > 1_000_000_000) throw new WaError(400, "The filter quota must be a whole number.");
      out.filter_quota = q;
    }
  }
  if (b.generatorLimit !== undefined) {
    if (b.generatorLimit === null || b.generatorLimit === "") out.generator_limit = null;
    else {
      const g = Number(b.generatorLimit);
      if (!Number.isInteger(g) || g < 1 || g > GENERATOR_MAX) {
        throw new WaError(400, `The number generator limit must be a whole number from 1 to ${GENERATOR_MAX.toLocaleString()} (or empty for no limit).`);
      }
      out.generator_limit = g;
    }
  }
  if (b.isActive !== undefined) out.is_active = b.isActive ? 1 : 0;
  return out;
}

function planExpiry(packageId) {
  if (!packageId) return null;
  const p = db().prepare("SELECT duration_days FROM packages WHERE id = ?").get(packageId);
  return new Date(Date.now() + (p?.duration_days || 30) * 86400000).toISOString();
}

export function createUser(body) {
  const v = cleanUserInput(body, { creating: true });
  if (db().prepare("SELECT 1 FROM users WHERE email = ?").get(v.email)) throw new WaError(409, "A user with this email already exists.");
  v.role ??= "user";
  v.is_active ??= 1;
  v.package_id ??= null;
  if (v.package_expires_at === undefined) v.package_expires_at = planExpiry(v.package_id);
  const cols = Object.keys(v);
  const info = db()
    .prepare(`INSERT INTO users (${cols.join(", ")}) VALUES (${cols.map(() => "?").join(", ")})`)
    .run(...cols.map((c) => v[c]));
  return shapeUser(getUserRow(info.lastInsertRowid));
}

function assertAnotherAdmin(exceptId) {
  const n = db().prepare("SELECT COUNT(*) AS n FROM users WHERE role = 'admin' AND is_active = 1 AND id != ?").get(exceptId).n;
  if (n === 0) throw new WaError(400, "There must always be at least one active super admin.");
}

/* Signs the user out everywhere and stops their running filters. */
function revokeAccess(userId) {
  db().prepare("DELETE FROM auth_sessions WHERE user_id = ?").run(userId);
  db()
    .prepare(
      "UPDATE filter_jobs SET status = 'cancelled', message = 'Stopped by the administrator.', finished_at = ? WHERE user_id = ? AND status IN ('countdown', 'running', 'stopped')",
    )
    .run(nowIso(), userId);
  const running = globalThis.__autowaFilterJobs;
  if (running) {
    for (const j of db().prepare("SELECT id FROM filter_jobs WHERE user_id = ?").all(userId)) {
      const s = running.get(j.id);
      if (s) s.cancelled = true;
    }
  }
}

export function updateUser(id, body, actor) {
  const current = getUserRow(id);
  const v = cleanUserInput(body, { creating: false });
  const self = current.id === actor.id;
  if (self && v.is_active === 0) throw new WaError(400, "You cannot disable your own account.");
  if (self && v.role === "user") throw new WaError(400, "You cannot remove your own super admin role.");
  if (current.role === "admin" && (v.role === "user" || v.is_active === 0)) assertAnotherAdmin(current.id);
  if (v.email && v.email !== current.email && db().prepare("SELECT 1 FROM users WHERE email = ? AND id != ?").get(v.email, current.id)) {
    throw new WaError(409, "A user with this email already exists.");
  }
  /* a new plan starts a new period: fresh expiry (unless given) and usage back to 0 */
  if (v.package_id !== undefined && v.package_id !== current.packageId) {
    if (v.package_expires_at === undefined) v.package_expires_at = planExpiry(v.package_id);
    v.quota_used = 0;
  }
  if (body.resetUsage) v.quota_used = 0;

  const cols = Object.keys(v);
  if (cols.length) {
    db()
      .prepare(`UPDATE users SET ${cols.map((c) => `${c} = ?`).join(", ")} WHERE id = ?`)
      .run(...cols.map((c) => v[c]), current.id);
  }
  if (v.is_active === 0 || v.password_hash) revokeAccess(current.id);
  return shapeUser(getUserRow(current.id));
}

export async function deleteUser(id, actor) {
  const u = getUserRow(id);
  if (u.id === actor.id) throw new WaError(400, "You cannot delete your own account.");
  if (u.role === "admin") assertAnotherAdmin(u.id);
  revokeAccess(u.id);
  /* unlink and remove their WhatsApp numbers from the engine (best effort) */
  for (const w of db().prepare("SELECT id FROM wa_sessions WHERE user_id = ?").all(u.id)) {
    await deleteWhatsApp(u.id, w.id).catch(() => {});
  }
  db().prepare("DELETE FROM users WHERE id = ?").run(u.id);
  return { ok: true };
}

/* --------------------------------------------------------------- plans -- */

function shapePlan(r) {
  return {
    id: r.id,
    name: r.name,
    description: r.description || "",
    price: r.price,
    currency: r.currency,
    durationDays: r.duration_days,
    speedSecPer10k: r.speed_sec_per_10k,
    perFilter: r.max_generated_numbers,
    filterQuota: r.filter_quota,
    maxWhatsApps: r.max_whatsapp_numbers,
    generator: !!r.feature_generator,
    multiFiles: !!r.feature_multi_files,
    bothResults: !!r.feature_both_results,
    countries: parseCountries(r.countries),
    support: r.support,
    isActive: !!r.is_active,
    sortOrder: r.sort_order,
    users: r.users ?? 0,
  };
}

export function listPlans() {
  return db()
    .prepare(
      `SELECT p.*, (SELECT COUNT(*) FROM users u WHERE u.package_id = p.id) AS users
         FROM packages p ORDER BY p.sort_order, p.price, p.id`,
    )
    .all()
    .map(shapePlan);
}

function getPlanRow(id) {
  const r = db()
    .prepare("SELECT p.*, (SELECT COUNT(*) FROM users u WHERE u.package_id = p.id) AS users FROM packages p WHERE p.id = ?")
    .get(Number(id));
  if (!r) throw new WaError(404, "This plan was not found.");
  return r;
}

const int = (v, label, min, max) => {
  const n = Number(v);
  if (!Number.isInteger(n) || n < min || n > max) throw new WaError(400, `${label} must be a whole number from ${min.toLocaleString()} to ${max.toLocaleString()}.`);
  return n;
};

function cleanPlanInput(b) {
  const name = String(b.name ?? "").trim();
  if (name.length < 2 || name.length > 40) throw new WaError(400, "Enter a plan name of 2 to 40 characters.");
  const price = Number(b.price);
  if (!Number.isFinite(price) || price < 0 || price > 1_000_000) throw new WaError(400, "Enter a valid price (0 for free).");
  const currency = String(b.currency || "USD").toUpperCase();
  if (!/^[A-Z]{3}$/.test(currency)) throw new WaError(400, "Use a 3-letter currency code, e.g. USD or PKR.");
  return {
    name,
    description: String(b.description ?? "").trim().slice(0, 200),
    price: Math.round(price * 100) / 100,
    currency,
    duration_days: int(b.durationDays, "Duration", 1, 3650),
    speed_sec_per_10k: int(b.speedSecPer10k, "Speed", 5, 3600),
    max_generated_numbers: int(b.perFilter, "Numbers per filter", 1000, 1_000_000),
    filter_quota: int(b.filterQuota, "Total filter quota", 1000, 1_000_000_000),
    max_whatsapp_numbers: int(b.maxWhatsApps, "WhatsApp numbers", 1, 500),
    feature_generator: b.generator ? 1 : 0,
    feature_multi_files: b.multiFiles ? 1 : 0,
    feature_both_results: b.bothResults ? 1 : 0,
    countries: b.countries === null ? null : serializeCountries(b.countries),
    support: String(b.support || "Email support").trim().slice(0, 60),
    is_active: b.isActive === false ? 0 : 1,
    sort_order: b.sortOrder === undefined || b.sortOrder === "" ? 0 : int(b.sortOrder, "Order", 0, 1000),
  };
}

export function createPlan(body) {
  const v = cleanPlanInput(body);
  if (db().prepare("SELECT 1 FROM packages WHERE name = ?").get(v.name)) throw new WaError(409, "A plan with this name already exists.");
  const cols = Object.keys(v);
  const info = db()
    .prepare(`INSERT INTO packages (${cols.join(", ")}) VALUES (${cols.map(() => "?").join(", ")})`)
    .run(...cols.map((c) => v[c]));
  return shapePlan(getPlanRow(info.lastInsertRowid));
}

export function updatePlan(id, body) {
  const current = getPlanRow(id);
  const v = cleanPlanInput(body);
  if (db().prepare("SELECT 1 FROM packages WHERE name = ? AND id != ?").get(v.name, current.id)) {
    throw new WaError(409, "A plan with this name already exists.");
  }
  const cols = Object.keys(v);
  db()
    .prepare(`UPDATE packages SET ${cols.map((c) => `${c} = ?`).join(", ")} WHERE id = ?`)
    .run(...cols.map((c) => v[c]), current.id);
  return shapePlan(getPlanRow(current.id));
}

export function deletePlan(id) {
  const p = getPlanRow(id);
  if (p.users > 0) {
    throw new WaError(400, `${p.users} user(s) are on this plan. Move them to another plan first, or deactivate the plan instead.`);
  }
  db().prepare("DELETE FROM packages WHERE id = ?").run(p.id);
  return { ok: true };
}

/* -------------------------------------------------------- report/backup -- */

export const REPORT_COLUMNS = [
  { key: "id", label: "ID", width: 6 },
  { key: "name", label: "Name", width: 22 },
  { key: "email", label: "Email", width: 28 },
  { key: "role", label: "Role", width: 12 },
  { key: "status", label: "Status", width: 10 },
  { key: "plan", label: "Plan", width: 14 },
  { key: "expires", label: "Plan expires", width: 14 },
  { key: "countries", label: "Countries", width: 24 },
  { key: "genLimit", label: "Generator limit / list", width: 16 },
  { key: "quota", label: "Filter quota", width: 14 },
  { key: "used", label: "Used", width: 12 },
  { key: "left", label: "Left", width: 12 },
  { key: "whatsapps", label: "WhatsApps", width: 10 },
  { key: "generated", label: "Generated", width: 12 },
  { key: "filtered", label: "Filtered", width: 12 },
  { key: "created", label: "Created", width: 14 },
  { key: "lastLogin", label: "Last login", width: 18 },
];

const day = (s) => (s ? new Date(/[zZ]$/.test(s) ? s : s.replace(" ", "T") + "Z").toISOString().slice(0, 10) : "");

export function usersReport() {
  return listUsers().map((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    role: u.role === "admin" ? "Super Admin" : "User",
    status: u.isActive ? "Active" : "Disabled",
    plan: u.role === "admin" ? "—" : u.packageName || "None",
    expires: u.role === "admin" ? "" : day(u.packageExpiresAt),
    countries: countryNames(u.effectiveCountries),
    genLimit: u.role === "admin" || u.generatorLimit == null ? "No limit" : u.generatorLimit,
    quota: u.quota == null ? "Unlimited" : u.quota,
    used: u.quotaUsed,
    left: u.quotaLeft == null ? "" : u.quotaLeft,
    whatsapps: u.whatsapps,
    generated: u.generated,
    filtered: u.filtered,
    created: day(u.createdAt),
    lastLogin: u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleString() : "Never",
  }));
}

/* A consistent copy of the AutoWA database (VACUUM INTO works while it is in use). */
export function backupDatabase() {
  const file = path.join(os.tmpdir(), `autowa-backup-${randomBytes(6).toString("hex")}.db`);
  db().prepare("VACUUM INTO ?").run(file);
  try {
    return fs.readFileSync(file);
  } finally {
    fs.rmSync(file, { force: true });
  }
}

export { COUNTRIES };

/* ----------------------------------------------------- audit descriptions -- */

export const getUser = (id) => shapeUser(getUserRow(id));
export const getPlan = (id) => shapePlan(getPlanRow(id));

const show = (v, empty = "none") => (v === null || v === undefined || v === "" ? empty : typeof v === "number" ? v.toLocaleString() : String(v));
const countriesText = (c) => (c == null ? "plan default" : c.length ? countryNames(c) : "none");

/* "plan Starter → Pro; disabled; password changed" */
export function describeUserChange(before, after, body = {}) {
  const out = [];
  const diff = (label, a, b, empty) => {
    if (show(a, empty) !== show(b, empty)) out.push(`${label} ${show(a, empty)} → ${show(b, empty)}`);
  };
  diff("name", before.name, after.name);
  diff("email", before.email, after.email);
  if (before.role !== after.role) out.push(after.role === "admin" ? "made super admin" : "role changed to user");
  if (before.isActive !== after.isActive) out.push(after.isActive ? "enabled" : "disabled");
  diff("plan", before.packageName, after.packageName);
  diff("plan expires", day(before.packageExpiresAt), day(after.packageExpiresAt));
  if (countriesText(before.countries) !== countriesText(after.countries)) out.push(`countries → ${countriesText(after.countries)}`);
  diff("filter quota", before.filterQuota, after.filterQuota, "plan default");
  diff("generator limit", before.generatorLimit, after.generatorLimit, "no limit");
  if (body.password) out.push("password changed");
  if (body.resetUsage || (before.quotaUsed && !after.quotaUsed)) out.push("filter usage reset to 0");
  return out.join("; ");
}

const PLAN_FIELDS = [
  ["name", "name"],
  ["description", "description"],
  ["price", "price"],
  ["currency", "currency"],
  ["durationDays", "duration (days)"],
  ["speedSecPer10k", "speed (sec / 10k)"],
  ["perFilter", "numbers per filter"],
  ["filterQuota", "filter quota"],
  ["maxWhatsApps", "WhatsApp numbers"],
  ["generator", "number generator"],
  ["multiFiles", "multiple files"],
  ["bothResults", "both results"],
  ["support", "support"],
  ["isActive", "active"],
  ["sortOrder", "order"],
];
const yn = (v) => (typeof v === "boolean" ? (v ? "yes" : "no") : v);

export function describePlanChange(before, after) {
  const out = PLAN_FIELDS.filter(([k]) => show(yn(before[k])) !== show(yn(after[k]))).map(
    ([k, label]) => `${label} ${show(yn(before[k]))} → ${show(yn(after[k]))}`,
  );
  const planCountries = (c) => (c == null ? "all" : c.length ? countryNames(c) : "none");
  if (planCountries(before.countries) !== planCountries(after.countries)) out.push(`countries → ${planCountries(after.countries)}`);
  return out.join("; ");
}

export const planSummary = (p) =>
  `${p.name}: ${p.price} ${p.currency} / ${p.durationDays} days, ${p.perFilter.toLocaleString()} per filter, quota ${p.filterQuota.toLocaleString()}, ${p.maxWhatsApps} WhatsApp(s)`;
