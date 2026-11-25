import { createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getDb } from "./db";
import { hashPassword, verifyPassword } from "./password";

export const SESSION_COOKIE = "autowa_session";
const REMEMBER_MS = 30 * 86400000; /* "keep me signed in" */
const SHORT_MS = 12 * 3600000;

const sha256 = (s) => createHash("sha256").update(s).digest("hex");

/* A throwaway hash so an unknown email costs the same time as a wrong password. */
let dummyHash;

/* Simple in-memory brake on password guessing: 5 failures per email per 15 minutes. */
const failures = globalThis.__autowaLoginFailures || (globalThis.__autowaLoginFailures = new Map());
const WINDOW_MS = 15 * 60000;
const MAX_FAILURES = 5;

export function isLockedOut(email) {
  const f = failures.get(email);
  if (!f) return false;
  if (Date.now() - f.first > WINDOW_MS) {
    failures.delete(email);
    return false;
  }
  return f.count >= MAX_FAILURES;
}

function recordFailure(email) {
  const f = failures.get(email);
  if (!f || Date.now() - f.first > WINDOW_MS) failures.set(email, { count: 1, first: Date.now() });
  else f.count += 1;
}

/* Returns the user row on success, or null. */
export function checkCredentials(email, password) {
  const key = String(email || "").trim().toLowerCase();
  const user = getDb().prepare("SELECT * FROM users WHERE email = ?").get(key);
  if (!user) {
    verifyPassword(password, (dummyHash ??= hashPassword("not-a-real-password")));
    recordFailure(key);
    return null;
  }
  if (!verifyPassword(String(password || ""), user.password_hash)) {
    recordFailure(key);
    return null;
  }
  failures.delete(key);
  return user;
}

export function createLoginSession(userId, remember) {
  const token = randomBytes(32).toString("hex");
  const maxAge = remember ? REMEMBER_MS : SHORT_MS;
  const expires = new Date(Date.now() + maxAge);
  const db = getDb();
  db.prepare("DELETE FROM auth_sessions WHERE expires_at < ?").run(new Date().toISOString());
  db.prepare("INSERT INTO auth_sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)").run(
    sha256(token),
    userId,
    expires.toISOString(),
  );
  db.prepare("UPDATE users SET last_login_at = ? WHERE id = ?").run(new Date().toISOString(), userId);
  return { token, expires, maxAge: Math.floor(maxAge / 1000) };
}

export function sessionCookieOptions(maxAge) {
  return {
    httpOnly: true,
    sameSite: "lax",
    /* HTTPS-only cookie. Defaults to on in production; set AUTOWA_COOKIE_SECURE=false
       while the site is served over plain http, or the browser drops the cookie. */
    secure: process.env.AUTOWA_COOKIE_SECURE
      ? process.env.AUTOWA_COOKIE_SECURE === "true"
      : process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
  };
}

export function destroyLoginSession(token) {
  if (token) getDb().prepare("DELETE FROM auth_sessions WHERE token_hash = ?").run(sha256(token));
}

function userFromToken(token) {
  if (!token) return null;
  const row = getDb()
    .prepare(
      `SELECT u.id, u.name, u.email, u.role, u.is_active, u.package_expires_at,
              u.countries AS user_countries, u.filter_quota AS user_filter_quota, u.quota_used, u.last_seen_at,
              u.generator_limit AS user_generator_limit,
              p.id AS package_id, p.name AS package_name,
              p.max_whatsapp_numbers, p.max_generated_numbers, p.speed_sec_per_10k,
              p.feature_generator, p.feature_multi_files, p.feature_both_results,
              p.countries AS package_countries, p.support, p.filter_quota AS package_filter_quota
         FROM auth_sessions s
         JOIN users u ON u.id = s.user_id
         LEFT JOIN packages p ON p.id = u.package_id
        WHERE s.token_hash = ? AND s.expires_at > ?`,
    )
    .get(sha256(token), new Date().toISOString());
  if (!row || !row.is_active) return null;
  /* "last seen" for the admin's active-users count — written at most once a minute */
  const now = Date.now();
  if (!row.last_seen_at || now - new Date(row.last_seen_at).getTime() > 60000) {
    getDb().prepare("UPDATE users SET last_seen_at = ? WHERE id = ?").run(new Date(now).toISOString(), row.id);
  }
  return { ...row };
}

/* The signed-in user for this request, or null. */
export async function getCurrentUser() {
  const store = await cookies();
  return userFromToken(store.get(SESSION_COOKIE)?.value);
}

/* For pages: sends anyone not signed in to /login. */
export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

export async function requireAdmin() {
  const user = await requireUser();
  if (user.role !== "admin") redirect("/");
  return user;
}
