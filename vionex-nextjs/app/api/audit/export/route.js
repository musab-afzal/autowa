import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { AUDIT_EXPORT_COLUMNS, auditExportRows, filtersFrom, logAudit } from "@/lib/audit";
import { exportTable } from "@/lib/exporters";

/* ?format=xlsx|csv|pdf + the same filters as the list */
export async function GET(request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.redirect(new URL("/login", request.url));
  const q = new URL(request.url).searchParams;
  const format = q.get("format") || "xlsx";
  if (!["xlsx", "csv", "pdf"].includes(format)) return NextResponse.json({ error: "Unknown format." }, { status: 400 });
  const rows = auditExportRows(user, filtersFrom(q));
  logAudit({ actor: user, request, category: "system", action: "Exported the audit log", description: `${rows.length.toLocaleString()} entries as ${format.toUpperCase()}` });
  const stamp = new Date().toISOString().slice(0, 10);
  return exportTable(AUDIT_EXPORT_COLUMNS, rows, format, `autowa_audit_log_${stamp}`, "AutoWA — Audit log");
}
