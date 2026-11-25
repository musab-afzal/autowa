import AutoShell from "@/components/autowa/AutoShell";
import WhatsAppManager from "@/components/autowa/WhatsAppManager";
import { requireUser } from "@/lib/auth";
import { listWhatsApps, maxWhatsApps } from "@/lib/whatsapp";

export const metadata = { title: "AutoWA — Login to WhatsApp" };

export default async function Page() {
  const user = await requireUser();
  /* rendered on the server, so the list is on screen with the page (no loading step) */
  let items = [];
  let error = "";
  try {
    items = await listWhatsApps(user.id);
  } catch (e) {
    error = e.message;
  }
  return (
    <AutoShell user={user} nav="whatsapp" title="Login to WhatsApp" crumb="Login to WhatsApp">
      <WhatsAppManager initialItems={items} initialMax={maxWhatsApps(user)} initialError={error} />
    </AutoShell>
  );
}
