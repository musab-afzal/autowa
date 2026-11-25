import { NextResponse } from "next/server";
import { getCurrentUser } from "./auth";
import { OpenWAError } from "./openwa";
import { logAudit } from "./audit";

/* Super admin only: 401 when signed out, 403 for everyone else. */
export function withAdmin(handler, audit) {
  return withUser((request, user, ctx, log) => {
    if (user.role !== "admin") throw new OpenWAError(403, "Only a super admin can do this.");
    return handler(request, user, ctx, log);
  }, audit);
}

/* Wraps a route handler: 401 when nobody is signed in, JSON errors otherwise.
   audit = { category, action }: the call is written to the audit log, as a success
   or as a failure with the error. The handler fills in `log` (4th argument):
   log.description, log.target, log.subjectUserId, log.action (to rename it), log.skip. */
export function withUser(handler, audit) {
  return async (request, ctx) => {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });
    const log = {};
    const write = (status, error) => {
      if (!audit || log.skip) return;
      const description = error ? (log.description ? `${log.description} — ${error}` : error) : log.description;
      logAudit({
        actor: user,
        request,
        category: audit.category,
        action: log.action || audit.action,
        description: description || log.action || audit.action,
        target: log.target,
        subjectUserId: log.subjectUserId,
        status,
      });
    };
    try {
      const result = await handler(request, user, ctx, log);
      write("success");
      return NextResponse.json(result);
    } catch (e) {
      if (e instanceof OpenWAError) {
        write("failed", e.message);
        return NextResponse.json({ error: e.message, code: e.code }, { status: e.status >= 500 ? 502 : e.status });
      }
      console.error(e);
      write("failed", "Unexpected error");
      return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
    }
  };
}
