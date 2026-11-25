import { withUser } from "@/lib/api";
import { startWhatsApp } from "@/lib/whatsapp";

export const POST = withUser(
  async (_req, user, ctx, log) => {
    const w = await startWhatsApp(user.id, (await ctx.params).id);
    log.description = `Started WhatsApp "${w.label}"${w.phone ? ` (+${w.phone})` : " to show a QR code"}`;
    log.target = w.label;
    return w;
  },
  { category: "whatsapp", action: "Started a WhatsApp" },
);
