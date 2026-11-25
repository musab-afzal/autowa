import AutoShell from "@/components/autowa/AutoShell";
import PlansManager from "@/components/autowa/admin/PlansManager";
import { requireAdmin } from "@/lib/auth";
import { listPlans } from "@/lib/admin";

export const metadata = { title: "AutoWA — Plans" };

export default async function Page() {
  const admin = await requireAdmin();
  return (
    <AutoShell user={admin} nav="admin-plans" title="Plans" crumb="Plans">
      <PlansManager initialPlans={listPlans()} />
    </AutoShell>
  );
}
