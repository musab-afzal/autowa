import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import { hashPassword } from "./password";

/* AutoWA's own data: users, roles, packages, login sessions and which WhatsApp
   (OpenWA) session belongs to which user. The WhatsApp engine keeps its own
   database; this one only maps AutoWA users onto it. */

const DB_PATH = process.env.AUTOWA_DB_PATH || path.join(process.cwd(), "data", "autowa.db");

const SCHEMA = `
CREATE TABLE IF NOT EXISTS packages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  max_whatsapp_numbers INTEGER NOT NULL DEFAULT 1,
  max_generated_numbers INTEGER NOT NULL DEFAULT 10000,
  duration_days INTEGER NOT NULL DEFAULT 30,
  is_active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE COLLATE NOCASE,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  package_id INTEGER REFERENCES packages(id) ON DELETE SET NULL,
  package_expires_at TEXT,
  is_active INTEGER NOT NULL DEFAULT 1,
  last_login_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS auth_sessions (
  token_hash TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_auth_sessions_user ON auth_sessions(user_id);

CREATE TABLE IF NOT EXISTS wa_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  openwa_session_id TEXT NOT NULL UNIQUE,
  openwa_session_name TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_wa_sessions_user ON wa_sessions(user_id);

/* One row per WhatsApp login (a new connectedAt seen on a session). Kept when
   the WhatsApp is deleted, so the history survives. */
CREATE TABLE IF NOT EXISTS wa_login_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  wa_session_id INTEGER,
  label TEXT,
  phone TEXT,
  push_name TEXT,
  connected_at TEXT NOT NULL,
  UNIQUE (wa_session_id, connected_at)
);
CREATE INDEX IF NOT EXISTS idx_wa_login_events_user ON wa_login_events(user_id, connected_at);

CREATE TABLE IF NOT EXISTS generator_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  country_code TEXT NOT NULL,
  start_number TEXT NOT NULL,
  increment INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_generator_logs_user ON generator_logs(user_id, created_at);

/* Live Filter: one job per uploaded file, one row per number.
   result: NULL = not checked yet, 1 = on WhatsApp, 0 = not on WhatsApp, -1 = could not check */
CREATE TABLE IF NOT EXISTS filter_jobs (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  wa_session_id INTEGER NOT NULL,
  file_name TEXT NOT NULL,
  total INTEGER NOT NULL,
  invalid_count INTEGER NOT NULL DEFAULT 0,
  duplicate_count INTEGER NOT NULL DEFAULT 0,
  checked INTEGER NOT NULL DEFAULT 0,
  exists_count INTEGER NOT NULL DEFAULT 0,
  not_exists_count INTEGER NOT NULL DEFAULT 0,
  error_count INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'countdown',
  message TEXT,
  starts_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  finished_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_filter_jobs_user ON filter_jobs(user_id, created_at);

CREATE TABLE IF NOT EXISTS filter_numbers (
  job_id TEXT NOT NULL REFERENCES filter_jobs(id) ON DELETE CASCADE,
  idx INTEGER NOT NULL,
  number TEXT NOT NULL,
  result INTEGER,
  checked_at TEXT,
  PRIMARY KEY (job_id, idx)
);
CREATE INDEX IF NOT EXISTS idx_filter_numbers_result ON filter_numbers(job_id, result);
`;

/* Columns added after the first release. */
function addColumn(db, table, column, ddl) {
  const cols = db.prepare(`PRAGMA table_info(${table})`).all();
  if (cols.some((c) => c.name === column)) return false;
  db.exec(`ALTER TABLE ${table} ADD COLUMN ${ddl}`);
  return true;
}

function upgrade(db) {
  addColumn(db, "wa_sessions", "label", "label TEXT");
  db.exec("UPDATE wa_sessions SET label = 'WhatsApp ' || id WHERE label IS NULL OR label = ''");

  /* v4: package pricing, saved generator options, filters started from a generated list */
  addColumn(db, "packages", "price", "price REAL NOT NULL DEFAULT 0");
  addColumn(db, "packages", "currency", "currency TEXT NOT NULL DEFAULT 'USD'");
  addColumn(db, "packages", "sort_order", "sort_order INTEGER NOT NULL DEFAULT 0");
  addColumn(db, "generator_logs", "plus", "plus INTEGER NOT NULL DEFAULT 0");
  addColumn(db, "filter_jobs", "source_list_id", "source_list_id INTEGER");
  /* placeholder prices until the admin side manages packages */
  db.exec(`UPDATE packages SET price = 9, sort_order = 1 WHERE name = 'Starter' AND price = 0;
           UPDATE packages SET price = 29, sort_order = 2 WHERE name = 'Pro' AND price = 0;`);
  db.prepare(
    `INSERT OR IGNORE INTO packages (name, description, max_whatsapp_numbers, max_generated_numbers, duration_days, price, sort_order)
     VALUES ('Business', 'For agencies running many WhatsApp numbers.', 20, 500000, 30, 79, 3)`,
  ).run();

  /* v5: plan features managed by the super admin.
     speed_sec_per_10k = seconds a filter may take per 10,000 numbers (lower = faster plan)
     countries = JSON array of ISO codes, NULL = all countries
     filter_quota = total numbers a user may filter during the plan */
  const fresh = addColumn(db, "packages", "speed_sec_per_10k", "speed_sec_per_10k INTEGER NOT NULL DEFAULT 15");
  addColumn(db, "packages", "feature_generator", "feature_generator INTEGER NOT NULL DEFAULT 1");
  addColumn(db, "packages", "feature_multi_files", "feature_multi_files INTEGER NOT NULL DEFAULT 1");
  addColumn(db, "packages", "feature_both_results", "feature_both_results INTEGER NOT NULL DEFAULT 1");
  addColumn(db, "packages", "countries", "countries TEXT");
  addColumn(db, "packages", "support", "support TEXT NOT NULL DEFAULT 'Email support'");
  addColumn(db, "packages", "filter_quota", "filter_quota INTEGER NOT NULL DEFAULT 1000000");
  if (fresh) {
    /* starting tiers — the super admin edits these in Plans */
    db.exec(`
      UPDATE packages SET speed_sec_per_10k = 30, feature_multi_files = 0, feature_both_results = 0,
             max_generated_numbers = 50000, filter_quota = 200000, support = 'Email support' WHERE name = 'Starter';
      UPDATE packages SET speed_sec_per_10k = 20, max_generated_numbers = 200000, filter_quota = 1000000,
             support = 'Priority email support' WHERE name = 'Pro';
      UPDATE packages SET speed_sec_per_10k = 12, max_generated_numbers = 500000, filter_quota = 5000000,
             support = '24/7 priority support' WHERE name = 'Business';`);
  }

  /* v5: per-user overrides set by the super admin */
  addColumn(db, "users", "countries", "countries TEXT"); /* NULL = use the plan's countries */
  addColumn(db, "users", "filter_quota", "filter_quota INTEGER"); /* NULL = use the plan's quota */
  addColumn(db, "users", "quota_used", "quota_used INTEGER NOT NULL DEFAULT 0");
  addColumn(db, "users", "last_seen_at", "last_seen_at TEXT");
  addColumn(db, "filter_jobs", "blocked_count", "blocked_count INTEGER NOT NULL DEFAULT 0");
  addColumn(db, "filter_jobs", "speed_sec_per_10k", "speed_sec_per_10k INTEGER");
  /* v6: plans limit filtering only; generating has its own optional per-user limit (numbers per list) */
  addColumn(db, "users", "generator_limit", "generator_limit INTEGER"); /* NULL = no limit */
  addColumn(db, "filter_jobs", "limit_skipped", "limit_skipped INTEGER NOT NULL DEFAULT 0"); /* numbers over the plan limit, not checked */

  /* v5: timing of every WhatsApp lookup batch, for the system performance graphs */
  db.exec(`
    CREATE TABLE IF NOT EXISTS filter_batches (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      job_id TEXT,
      user_id INTEGER,
      size INTEGER NOT NULL,
      duration_ms INTEGER NOT NULL,
      ok INTEGER NOT NULL,
      created_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_filter_batches_at ON filter_batches(created_at);`);

  /* v7: audit log of every action. No foreign keys: rows outlive deleted users. */
  db.exec(`
    CREATE TABLE IF NOT EXISTS audit_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      actor_name TEXT,
      actor_email TEXT,
      actor_role TEXT,
      subject_user_id INTEGER,
      category TEXT NOT NULL,
      action TEXT NOT NULL,
      description TEXT NOT NULL,
      target TEXT,
      status TEXT NOT NULL DEFAULT 'success',
      ip TEXT,
      user_agent TEXT,
      created_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_audit_logs_user ON audit_logs(user_id, id);
    CREATE INDEX IF NOT EXISTS idx_audit_logs_subject ON audit_logs(subject_user_id, id);
    CREATE INDEX IF NOT EXISTS idx_audit_logs_at ON audit_logs(created_at);`);
}

function migrate(db) {
  upgrade(db);
  /* jobs that were running when the server stopped can be resumed by the user */
  db.prepare(
    "UPDATE filter_jobs SET status = 'stopped', message = 'The server restarted. Press Resume to continue.' WHERE status IN ('countdown', 'running')",
  ).run();
}

/* First-run data. Change these passwords after the first sign-in. */
export const SEED_ADMIN = { name: "AutoWA Admin", email: "admin@autowa.com", password: "Admin@2026" };
export const SEED_USER = { name: "Demo User", email: "user@autowa.com", password: "User@2026" };

function seed(db) {
  /* name is UNIQUE, so these only insert on a fresh database */
  const add = db.prepare(
    `INSERT OR IGNORE INTO packages (name, description, max_whatsapp_numbers, max_generated_numbers, duration_days, price, sort_order,
       speed_sec_per_10k, feature_multi_files, feature_both_results, filter_quota, support)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  );
  add.run("Starter", "One WhatsApp number, for getting started.", 1, 50000, 30, 9, 1, 30, 0, 0, 200000, "Email support");
  add.run("Pro", "Several WhatsApp numbers for growing teams.", 5, 200000, 30, 29, 2, 20, 1, 1, 1000000, "Priority email support");

  const { u } = db.prepare("SELECT COUNT(*) AS u FROM users").get();
  if (u === 0) {
    const starter = db.prepare("SELECT id, duration_days FROM packages WHERE name = 'Starter'").get();
    const expires = new Date(Date.now() + starter.duration_days * 86400000).toISOString();
    const add = db.prepare(
      "INSERT INTO users (name, email, password_hash, role, package_id, package_expires_at) VALUES (?, ?, ?, ?, ?, ?)",
    );
    add.run(SEED_ADMIN.name, SEED_ADMIN.email, hashPassword(SEED_ADMIN.password), "admin", null, null);
    add.run(SEED_USER.name, SEED_USER.email, hashPassword(SEED_USER.password), "user", starter.id, expires);
  }
}

function open() {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  const db = new DatabaseSync(DB_PATH);
  db.exec("PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON;");
  db.exec(SCHEMA);
  upgrade(db); /* columns first: seed() writes the newer ones */
  seed(db);
  migrate(db);
  return db;
}

/* Bump when SCHEMA changes, so a connection kept across dev hot reloads is upgraded. */
const SCHEMA_VERSION = 7;

/* One connection per server process (survives dev hot reloads). */
export function getDb() {
  if (!globalThis.__autowaDb) {
    globalThis.__autowaDb = open();
  } else if (globalThis.__autowaDbVersion !== SCHEMA_VERSION) {
    globalThis.__autowaDb.exec(SCHEMA);
    upgrade(globalThis.__autowaDb);
  }
  globalThis.__autowaDbVersion = SCHEMA_VERSION;
  return globalThis.__autowaDb;
}
