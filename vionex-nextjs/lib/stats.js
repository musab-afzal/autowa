import { getDb } from "./db";

/* Daily statistics for the dashboard. Dates are YYYY-MM-DD in the server's local time. */

const MAX_DAYS = 366;
const DAY = /^\d{4}-\d{2}-\d{2}$/;

export function localDate(d = new Date()) {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function addDays(ymd, n) {
  const d = new Date(`${ymd}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

/* Validated [from, to] — defaults to the last 30 days, at most a year. */
export function normaliseRange(from, to) {
  const today = localDate();
  let t = DAY.test(to || "") ? to : today;
  let f = DAY.test(from || "") ? from : addDays(t, -29);
  if (f > t) [f, t] = [t, f];
  if (addDays(f, MAX_DAYS - 1) < t) f = addDays(t, -(MAX_DAYS - 1));
  return { from: f, to: t };
}

function series(days, rows, key) {
  const map = new Map(rows.map((r) => [r.d, Number(r[key]) || 0]));
  return days.map((d) => map.get(d) || 0);
}

export function getStats(userId, fromIn, toIn) {
  const { from, to } = normaliseRange(fromIn, toIn);
  const days = [];
  for (let d = from; d <= to; d = addDays(d, 1)) days.push(d);
  const db = getDb();

  const gen = db
    .prepare(
      `SELECT date(created_at, 'localtime') AS d, SUM(quantity) AS numbers, COUNT(*) AS files
         FROM generator_logs WHERE user_id = ? AND date(created_at, 'localtime') BETWEEN ? AND ? GROUP BY d`,
    )
    .all(userId, from, to);

  const logins = db
    .prepare(
      `SELECT date(connected_at, 'localtime') AS d, COUNT(*) AS n
         FROM wa_login_events WHERE user_id = ? AND date(connected_at, 'localtime') BETWEEN ? AND ? GROUP BY d`,
    )
    .all(userId, from, to);

  const filtered = db
    .prepare(
      `SELECT date(n.checked_at, 'localtime') AS d,
              SUM(n.result = 1) AS yes, SUM(n.result = 0) AS no, SUM(n.result = -1) AS err
         FROM filter_numbers n JOIN filter_jobs j ON j.id = n.job_id
        WHERE j.user_id = ? AND n.checked_at IS NOT NULL AND date(n.checked_at, 'localtime') BETWEEN ? AND ?
        GROUP BY d`,
    )
    .all(userId, from, to);

  const recentLogins = db
    .prepare(
      `SELECT label, phone, push_name AS pushName, connected_at AS connectedAt
         FROM wa_login_events WHERE user_id = ? AND date(connected_at, 'localtime') BETWEEN ? AND ?
        ORDER BY connected_at DESC LIMIT 10`,
    )
    .all(userId, from, to);

  const s = {
    from,
    to,
    days,
    generated: series(days, gen, "numbers"),
    files: series(days, gen, "files"),
    logins: series(days, logins, "n"),
    onWhatsApp: series(days, filtered, "yes"),
    notOnWhatsApp: series(days, filtered, "no"),
    recentLogins,
  };
  const sum = (a) => a.reduce((x, y) => x + y, 0);
  s.totals = {
    generated: sum(s.generated),
    files: sum(s.files),
    logins: sum(s.logins),
    onWhatsApp: sum(s.onWhatsApp),
    notOnWhatsApp: sum(s.notOnWhatsApp),
  };
  return s;
}
