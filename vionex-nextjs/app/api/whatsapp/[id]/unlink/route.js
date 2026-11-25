import { withUser } from "@/lib/api";
import { unlinkWhatsApp } from "@/lib/whatsapp";

export const POST = withUser(
  async (_req, user, ctx, log) => {
    const w = await unlinkWhatsApp(user.id, (await ctx.params).id);
    const phone = w.phone || w.lastPhone;
    log.description = `Unlinked WhatsApp "${w.label}"${phone ? ` (+${phone})` : ""} from the phone`;
    log.target = w.label;
    return w;
  },
  { category: "whatsapp", action: "Unlinked a WhatsApp" },
);
