import { withUser } from "@/lib/api";
import { addWhatsApp, listWhatsApps, maxWhatsApps } from "@/lib/whatsapp";

export const GET = withUser(async (_req, user) => ({
  max: maxWhatsApps(user),
  items: await listWhatsApps(user.id),
}));

export const POST = withUser(
  async (req, user, _ctx, log) => {
    const body = await req.json().catch(() => ({}));
    const label = String(body.label || "").trim().slice(0, 40);
    log.description = label ? `Add WhatsApp "${label}"` : "Add a WhatsApp";
    const w = await addWhatsApp(user, label);
    log.description = `Added WhatsApp "${w.label}" and opened its QR code`;
    log.target = w.label;
    return w;
  },
  { category: "whatsapp", action: "Added a WhatsApp" },
);
