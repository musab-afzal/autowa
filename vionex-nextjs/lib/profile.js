import { getDb } from "./db";

/* Read-only account data for the Profile pages. */

export function getProfile(userId) {
  const db = getDb();
  const u = db
    .prepare(
      `SELECT u.id, u.name, u.email, u.role, u.is_active, u.created_at, u.last_login_at, u.package_expires_at,
              p.id AS package_id, p.name AS package_name, p.price, p.currency, p.duration_days,
              p.max_whatsapp_numbers, p.max_generated_numbers
         FROM users u LEFT JOIN packages p ON p.id = u.package_id WHERE u.id = ?`,
    )
    .get(userId);

  const one = (sql) => db.prepare(sql).get(userId);
  const usage = {
    whatsapps: one("SELECT COUNT(*) AS n FROM wa_sessions WHERE user_id = ?").n,
    lists: one("SELECT COUNT(*) AS n FROM generator_logs WHERE user_id = ?").n,
    generated: one("SELECT COALESCE(SUM(quantity), 0) AS n FROM generator_logs WHERE user_id = ?").n,
    filters: one("SELECT COUNT(*) AS n FROM filter_jobs WHERE user_id = ?").n,
    checked: one("SELECT COALESCE(SUM(checked), 0) AS n FROM filter_jobs WHERE user_id = ?").n,
    onWhatsApp: one("SELECT COALESCE(SUM(exists_count), 0) AS n FROM filter_jobs WHERE user_id = ?").n,
    logins: one("SELECT COUNT(*) AS n FROM wa_login_events WHERE user_id = ?").n,
  };
  return { ...u, usage };
}

export function getPackages() {
  return getDb().prepare("SELECT * FROM packages WHERE is_active = 1 ORDER BY sort_order, price, id").all();
}

export function formatPrice(price, currency = "USD") {
  if (!price) return "Free";
  try {
    return new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 2 }).format(price);
  } catch {
    return `${price} ${currency}`;
  }
}

/* SQLite datetime('now') is UTC without a zone; ISO strings already carry one. */
export function toDate(s) {
  if (!s) return null;
  return new Date(/[zZ]|[+-]\d\d:?\d\d$/.test(s) ? s : s.replace(" ", "T") + "Z");
}

export function fmtDate(s, withTime = false) {
  const d = toDate(s);
  if (!d) return "—";
  return withTime
    ? d.toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
