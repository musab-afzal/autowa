import { randomUUID } from "node:crypto";
import { getDb } from "./db";
import { openwa, OpenWAError } from "./openwa";
import { requireReadySession, WaError } from "./whatsapp";
import { blockedReason, entitlements, filterLimit } from "./limits";
import { numberAllowed } from "./countries";
import { digits, parseNumberText } from "./numbers";
import { listNumbers } from "./generator";
import { logAudit } from "./audit";

export { filterLimit };

/* Live Filter: checks every number of a file or generated list against WhatsApp.
   Fast method: numbers are sent to WhatsApp in batches (one query per batch),
   not one by one. A job runs in the background of the AutoWA server, so it
   keeps going if the user leaves the page; the page polls its progress. */

export const COUNTDOWN_SECONDS = 10;
const BATCH_SIZE = 200; /* numbers per WhatsApp query */
const MIN_PAUSE_MS = 150; /* minimum breathing room between queries */
const MAX_FILE_CHARS = 5_000_000;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const now = () => new Date().toISOString();

/* jobId -> { cancelled } for jobs running in this process */
const running = globalThis.__autowaFilterJobs || (globalThis.__autowaFilterJobs = new Map());

function publicJob(j) {
  if (!j) return null;
  const startsIn = Math.max(0, Math.ceil((new Date(j.starts_at).getTime() - Date.now()) / 1000));
  return {
    id: j.id,
    waId: j.wa_session_id,
    fileName: j.file_name,
    listId: j.source_list_id,
    total: j.total,
    invalid: j.invalid_count,
    duplicates: j.duplicate_count,
    blocked: j.blocked_count || 0,
    limitSkipped: j.limit_skipped || 0,
    checked: j.checked,
    exists: j.exists_count,
    notExists: j.not_exists_count,
    errors: j.error_count,
    status: j.status,
    message: j.message,
    startsIn: j.status === "countdown" ? startsIn : 0,
    createdAt: j.created_at,
    startedAt: j.starts_at,
    finishedAt: j.finished_at,
  };
}

function getJobRow(userId, jobId) {
  const j = getDb().prepare("SELECT * FROM filter_jobs WHERE id = ? AND user_id = ?").get(String(jobId), userId);
  if (!j) throw new WaError(404, "This filter job was not found.");
  return j;
}

export function getJob(userId, jobId) {
  return publicJob(getJobRow(userId, jobId));
}

export function listJobs(userId, limit = 10) {
  return getDb()
    .prepare("SELECT * FROM filter_jobs WHERE user_id = ? ORDER BY created_at DESC LIMIT ?")
    .all(userId, limit)
    .map(publicJob);
}

/* source: { listId } for a generated list, or { files: [{ name, text }] } for uploaded file(s)
   ({ text, fileName } is still accepted for a single file). */
export async function createJob(user, waId, source) {
  const ent = entitlements(user);
  const blocked = blockedReason(ent);
  if (blocked) throw new WaError(403, blocked);
  if (getDb().prepare("SELECT 1 FROM filter_jobs WHERE user_id = ? AND status IN ('countdown','running')").get(user.id)) {
    throw new WaError(409, "A filter is already running. Wait for it to finish, or stop it first.");
  }

  let numbers;
  let invalid = 0;
  let duplicates = 0;
  let fileName;
  let listId = null;

  if (source.listId) {
    const { list, numbers: raw } = listNumbers(user.id, source.listId);
    ({ numbers, invalid, duplicates } = parseNumberText(raw.map(digits).join("\n")));
    fileName = `Generated list #${list.id} (+${list.countryCode} ${list.startNumber}, ${list.quantity.toLocaleString()} numbers)`;
    listId = list.id;
  } else {
    const files = Array.isArray(source.files) ? source.files : [{ name: source.fileName, text: source.text }];
    if (files.length === 0) throw new WaError(400, "Choose a file to filter.");
    if (files.length > 1 && !ent.multiFiles) throw new WaError(403, "Your plan allows one file per filter. Upload a single file.");
    if (files.length > 20) throw new WaError(400, "Upload at most 20 files at a time.");
    const text = files.map((f) => (typeof f.text === "string" ? f.text : "")).join("\n");
    if (!text.trim()) throw new WaError(400, "The file is empty.");
    if (text.length > MAX_FILE_CHARS) throw new WaError(400, "The files are too large (max 5 MB in total).");
    ({ numbers, invalid, duplicates } = parseNumberText(text));
    const names = files.map((f) => String(f.name || "numbers.txt"));
    fileName = (names.length === 1 ? names[0] : `${names.length} files (${names.join(", ")})`).slice(0, 120);
  }

  /* numbers outside the user's allowed countries are left out */
  let blockedCount = 0;
  if (ent.dialCodes) {
    const allowed = numbers.filter((n) => numberAllowed(n, ent.dialCodes));
    blockedCount = numbers.length - allowed.length;
    numbers = allowed;
  }

  await requireReadySession(user.id, waId);
  if (numbers.length === 0) {
    throw new WaError(400, blockedCount ? "None of these numbers are in your allowed countries." : "No valid phone numbers were found.");
  }
  /* the plan limits filtering, not the list: check the allowed amount, skip the rest */
  const allowed = Math.min(filterLimit(user), ent.remaining ?? Infinity);
  if (allowed <= 0) {
    throw new WaError(403, "You have no numbers left to filter in your plan. Please contact your administrator.");
  }
  const limitSkipped = Math.max(0, numbers.length - allowed);
  if (limitSkipped) numbers = numbers.slice(0, allowed);

  const db = getDb();
  const id = randomUUID();
  const startsAt = new Date(Date.now() + COUNTDOWN_SECONDS * 1000).toISOString();
  db.exec("BEGIN");
  try {
    db.prepare(
      `INSERT INTO filter_jobs (id, user_id, wa_session_id, file_name, source_list_id, total, invalid_count, duplicate_count,
         blocked_count, limit_skipped, speed_sec_per_10k, status, starts_at, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'countdown', ?, ?)`,
    ).run(id, user.id, Number(waId), fileName, listId, numbers.length, invalid, duplicates, blockedCount, limitSkipped, ent.speedSecPer10k, startsAt, now());
    const add = db.prepare("INSERT INTO filter_numbers (job_id, idx, number) VALUES (?, ?, ?)");
    numbers.forEach((n, i) => add.run(id, i, n));
    db.exec("COMMIT");
  } catch (e) {
    db.exec("ROLLBACK");
    throw e;
  }

  const state = { cancelled: false };
  running.set(id, state);
  setTimeout(() => runJob(id, user.id, state), COUNTDOWN_SECONDS * 1000);
  return getJob(user.id, id);
}

export function cancelJob(userId, jobId) {
  const j = getJobRow(userId, jobId);
  const state = running.get(j.id);
  if (state) state.cancelled = true;
  if (["countdown", "running", "stopped"].includes(j.status)) {
    getDb()
      .prepare("UPDATE filter_jobs SET status = 'cancelled', message = 'Cancelled by you.', finished_at = ? WHERE id = ?")
      .run(now(), j.id);
  }
  return getJob(userId, jobId);
}

export async function resumeJob(userId, jobId) {
  const j = getJobRow(userId, jobId);
  if (j.status !== "stopped") throw new WaError(400, "Only a stopped filter can be resumed.");
  await requireReadySession(userId, j.wa_session_id);
  const state = { cancelled: false };
  running.set(j.id, state);
  getDb().prepare("UPDATE filter_jobs SET status = 'running', message = NULL WHERE id = ?").run(j.id);
  runJob(j.id, userId, state);
  return getJob(userId, jobId);
}

export function deleteJob(userId, jobId) {
  const j = getJobRow(userId, jobId);
  const state = running.get(j.id);
  if (state) state.cancelled = true;
  getDb().prepare("DELETE FROM filter_jobs WHERE id = ?").run(j.id);
  return { ok: true };
}

export const RESULT_KINDS = { exists: 1, "not-exists": 0, errors: -1 };

/* Numbers of one result group, for the download files. */
export function jobNumbers(userId, jobId, kind) {
  const j = getJobRow(userId, jobId);
  const list = getDb()
    .prepare("SELECT number FROM filter_numbers WHERE job_id = ? AND result = ? ORDER BY idx")
    .all(j.id, RESULT_KINDS[kind])
    .map((r) => r.number);
  return { job: j, list };
}

/* ---------------------------------------------------------------- worker -- */

class StopJob extends Error {}

function stopFor(e) {
  if (e.status === 409 || e.status === 404) {
    return new StopJob("The WhatsApp used for this filter disconnected. Reconnect it, then press Resume.");
  }
  if (e.status === 503 && /not reachable/.test(e.message)) {
    return new StopJob("The WhatsApp engine stopped responding. Press Resume when it is running again.");
  }
  return null;
}

/* One batch → Map(number → 1 | 0 | -1). Retries when WhatsApp does not answer. */
async function checkBatch(openwaId, numbers) {
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const r = await openwa(`/sessions/${openwaId}/contacts/check-bulk`, {
        method: "POST",
        body: { numbers },
        timeoutMs: 60000,
      });
      const yes = new Set(r.exists);
      return new Map(numbers.map((n) => [n, yes.has(n) ? 1 : 0]));
    } catch (e) {
      if (!(e instanceof OpenWAError)) throw e;
      const stop = stopFor(e);
      if (stop) throw stop;
      if (e.status === 429) {
        await sleep(3000); /* engine rate limit: wait without using up an attempt */
        attempt--;
        continue;
      }
      await sleep(1500 * (attempt + 1)); /* 503 / 504: WhatsApp did not answer — try again */
    }
  }
  return new Map(numbers.map((n) => [n, -1]));
}

async function runJob(jobId, userId, state) {
  const db = getDb();
  const job = db.prepare("SELECT * FROM filter_jobs WHERE id = ?").get(jobId);
  if (!job || state.cancelled || !["countdown", "running"].includes(job.status)) {
    running.delete(jobId);
    return;
  }

  const stop = (message) => {
    const r = db.prepare("UPDATE filter_jobs SET status = 'stopped', message = ? WHERE id = ? AND status = 'running'").run(message, jobId);
    if (r.changes) {
      const j = db.prepare("SELECT checked, total FROM filter_jobs WHERE id = ?").get(jobId);
      logAudit({
        actorId: userId,
        category: "filter",
        action: "Filter stopped",
        description: `${job.file_name}: stopped at ${j.checked.toLocaleString()} of ${j.total.toLocaleString()} numbers — ${message}`,
        target: job.file_name,
        status: "failed",
      });
    }
  };

  let openwaId;
  try {
    db.prepare("UPDATE filter_jobs SET status = 'running', message = NULL WHERE id = ?").run(jobId);
    ({ openwaId } = await requireReadySession(userId, job.wa_session_id));
  } catch (e) {
    stop(e.message);
    running.delete(jobId);
    return;
  }

  const pending = db
    .prepare("SELECT idx, number FROM filter_numbers WHERE job_id = ? AND result IS NULL ORDER BY idx")
    .all(jobId);
  const save = db.prepare("UPDATE filter_numbers SET result = ?, checked_at = ? WHERE job_id = ? AND idx = ?");
  const bump = db.prepare(
    `UPDATE filter_jobs SET checked = checked + ?,
       exists_count = exists_count + ?, not_exists_count = not_exists_count + ?, error_count = error_count + ?
     WHERE id = ?`,
  );

  const logBatch = db.prepare(
    "INSERT INTO filter_batches (job_id, user_id, size, duration_ms, ok, created_at) VALUES (?, ?, ?, ?, ?, ?)",
  );
  const useQuota = db.prepare("UPDATE users SET quota_used = quota_used + ? WHERE id = ?");
  /* plan speed: a batch may not finish faster than its share of "N seconds per 10,000 numbers" */
  const secPer10k = job.speed_sec_per_10k || 15;

  try {
    for (let i = 0; i < pending.length && !state.cancelled; i += BATCH_SIZE) {
      const batch = pending.slice(i, i + BATCH_SIZE);
      const started = Date.now();
      const results = await checkBatch(openwaId, batch.map((b) => b.number));
      const took = Date.now() - started;
      if (state.cancelled) break;
      const at = now();
      let yes = 0;
      let no = 0;
      let err = 0;
      db.exec("BEGIN");
      for (const b of batch) {
        const r = results.get(b.number) ?? -1;
        save.run(r, at, jobId, b.idx);
        if (r === 1) yes++;
        else if (r === 0) no++;
        else err++;
      }
      bump.run(batch.length, yes, no, err, jobId);
      useQuota.run(yes + no, userId); /* only numbers that got an answer count against the quota */
      logBatch.run(jobId, userId, batch.length, took, err === batch.length ? 0 : 1, at);
      db.exec("COMMIT");
      if (i + BATCH_SIZE < pending.length) {
        const target = (secPer10k * 1000 * batch.length) / 10000;
        await sleep(Math.max(MIN_PAUSE_MS, target - took));
      }
    }
  } catch (e) {
    if (db.isTransaction) db.exec("ROLLBACK");
    running.delete(jobId);
    if (!(e instanceof StopJob)) console.error("[live-filter]", e);
    stop(e instanceof StopJob ? e.message : "Something went wrong while checking. Press Resume to continue.");
    return;
  }

  running.delete(jobId);
  if (state.cancelled) return;
  const done = db.prepare("UPDATE filter_jobs SET status = 'completed', finished_at = ? WHERE id = ? AND status = 'running'").run(now(), jobId);
  if (done.changes) {
    const j = db.prepare("SELECT * FROM filter_jobs WHERE id = ?").get(jobId);
    logAudit({
      actorId: userId,
      category: "filter",
      action: "Filter completed",
      description: `${j.file_name}: checked ${j.checked.toLocaleString()} numbers — ${j.exists_count.toLocaleString()} on WhatsApp, ${j.not_exists_count.toLocaleString()} not on WhatsApp${j.error_count ? `, ${j.error_count.toLocaleString()} could not be checked` : ""}`,
      target: j.file_name,
    });
  }
}
