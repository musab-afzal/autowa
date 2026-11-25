import AutoShell from "@/components/autowa/AutoShell";
import AuditLog from "@/components/autowa/AuditLog";
import { requireAdmin } from "@/lib/auth";
import { AUDIT_CATEGORIES, auditUsers, listAudit } from "@/lib/audit";

export const metadata = { title: "AutoWA — Audit Logs" };

export default async function Page() {
  const admin = await requireAdmin();
  return (
    <AutoShell user={admin} nav="admin-audit" title="Audit Logs" crumb="Audit Logs">
      <AuditLog admin initial={listAudit(admin)} categories={AUDIT_CATEGORIES} users={auditUsers()} />
    </AutoShell>
  );
}
