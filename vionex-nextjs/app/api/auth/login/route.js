import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  checkCredentials,
  createLoginSession,
  isLockedOut,
  sessionCookieOptions,
} from "@/lib/auth";
import { getDb } from "@/lib/db";
import { logAudit } from "@/lib/audit";

/* failed sign-ins are logged against the account they tried (if it exists) */
function failed(request, email, description) {
  const u = getDb().prepare("SELECT id, name, email, role FROM users WHERE email = ?").get(email);
  logAudit({
    actor: u ? { ...u } : null,
    actorEmail: email,
    request,
    category: "auth",
    action: "Sign-in failed",
    description: u ? description : `${description} (no account with ${email})`,
    status: "failed",
  });
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");

  if (!email || !password) {
    return NextResponse.json({ error: "Enter your email and password." }, { status: 400 });
  }
  if (isLockedOut(email)) {
    failed(request, email.slice(0, 120), "Blocked: too many failed attempts");
    return NextResponse.json(
      { error: "Too many failed attempts. Please wait 15 minutes and try again." },
      { status: 429 },
    );
  }

  const user = checkCredentials(email, password);
  if (!user) {
    failed(request, email.slice(0, 120), "Wrong email or password");
    return NextResponse.json({ error: "The email or password is incorrect." }, { status: 401 });
  }
  if (!user.is_active) {
    logAudit({ actor: user, request, category: "auth", action: "Sign-in failed", description: "The account is disabled", status: "failed" });
    return NextResponse.json(
      { error: "Your account is disabled. Please contact the administrator." },
      { status: 403 },
    );
  }

  const remember = body.remember !== false;
  const session = createLoginSession(user.id, remember);
  logAudit({ actor: user, request, category: "auth", action: "Signed in", description: remember ? "Signed in (kept signed in for 30 days)" : "Signed in" });
  const res = NextResponse.json({ ok: true, role: user.role });
  res.cookies.set(SESSION_COOKIE, session.token, sessionCookieOptions(session.maxAge));
  return res;
}
