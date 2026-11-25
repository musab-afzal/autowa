import { withUser } from "@/lib/api";
import { deleteWhatsApp, getWhatsApp } from "@/lib/whatsapp";

export const GET = withUser(async (_req, user, ctx) => getWhatsApp(user.id, (await ctx.params).id));
export const DELETE = withUser(
  async (_req, user, ctx, log) => {
    const r = await deleteWhatsApp(user.id, (await ctx.params).id);
    log.description = `Deleted WhatsApp "${r.label}"${r.phone ? ` (+${r.phone})` : ""}`;
    log.target = r.label;
    return { ok: true };
  },
  { category: "whatsapp", action: "Deleted a WhatsApp" },
);
