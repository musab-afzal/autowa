import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { backupDatabase } from "@/lib/admin";
import { logAudit } from "@/lib/audit";

/* Downloads a full copy of the AutoWA database (users, plans, lists, filters, history). */
export async function GET(request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.redirect(new URL("/login", request.url));
  if (user.role !== "admin") return NextResponse.json({ error: "Only a super admin can do this." }, { status: 403 });
  logAudit({ actor: user, request, category: "system", action: "Downloaded a database backup", description: "Full database backup (users, plans, lists, filters, audit log)" });
  const stamp = new Date().toISOString().replace(/[:T]/g, "-").slice(0, 16);
  return new NextResponse(backupDatabase(), {
    headers: {
      "Content-Type": "application/vnd.sqlite3",
      "Content-Disposition": `attachment; filename="autowa_backup_${stamp}.db"`,
      "Cache-Control": "no-store",
    },
  });
}
