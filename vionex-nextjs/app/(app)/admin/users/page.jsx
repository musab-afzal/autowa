import AutoShell from "@/components/autowa/AutoShell";
import UsersManager from "@/components/autowa/admin/UsersManager";
import { requireAdmin } from "@/lib/auth";
import { listPlans, listUsers } from "@/lib/admin";

export const metadata = { title: "AutoWA — User Management" };

export default async function Page() {
  const admin = await requireAdmin();
  return (
    <AutoShell user={admin} nav="admin-users" title="User Management" crumb="Users">
      <UsersManager initialUsers={listUsers()} plans={listPlans()} meId={admin.id} />
    </AutoShell>
  );
}
