import { NextResponse } from "next/server";
import { SESSION_COOKIE, destroyLoginSession, getCurrentUser } from "@/lib/auth";
import { logAudit } from "@/lib/audit";

export async function POST(request) {
  const user = await getCurrentUser();
  if (user) logAudit({ actor: user, request, category: "auth", action: "Signed out", description: "Signed out" });
  destroyLoginSession(request.cookies.get(SESSION_COOKIE)?.value);
  const res = NextResponse.redirect(new URL("/login", request.url), 303);
  res.cookies.set(SESSION_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
