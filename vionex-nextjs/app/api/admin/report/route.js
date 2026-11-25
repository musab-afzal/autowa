import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { REPORT_COLUMNS, usersReport } from "@/lib/admin";
import { logAudit } from "@/lib/audit";
import { exportTable } from "@/lib/exporters";

/* Users report: ?format=xlsx|csv|pdf */
export async function GET(request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.redirect(new URL("/login", request.url));
  if (user.role !== "admin") return NextResponse.json({ error: "Only a super admin can do this." }, { status: 403 });
  const format = new URL(request.url).searchParams.get("format") || "xlsx";
  if (!["xlsx", "csv", "pdf"].includes(format)) return NextResponse.json({ error: "Unknown format." }, { status: 400 });
  const stamp = new Date().toISOString().slice(0, 10);
  logAudit({ actor: user, request, category: "system", action: "Downloaded users report", description: `Users report as ${format.toUpperCase()}` });
  return exportTable(REPORT_COLUMNS, usersReport(), format, `autowa_users_report_${stamp}`, "AutoWA — Users report");
}
