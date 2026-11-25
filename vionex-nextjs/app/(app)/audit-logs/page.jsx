import { redirect } from "next/navigation";
import AutoShell from "@/components/autowa/AutoShell";
import AuditLog from "@/components/autowa/AuditLog";
import { requireUser } from "@/lib/auth";
import { AUDIT_CATEGORIES, listAudit } from "@/lib/audit";

export const metadata = { title: "AutoWA — Audit Logs" };

export default async function Page() {
  const user = await requireUser();
  if (user.role === "admin") redirect("/admin/audit-logs");
  return (
    <AutoShell user={user} nav="audit-logs" title="Audit Logs" crumb="Audit Logs">
      <AuditLog initial={listAudit(user)} categories={AUDIT_CATEGORIES} />
    </AutoShell>
  );
}
