import { withUser } from "@/lib/api";
import { getWhatsAppQr } from "@/lib/whatsapp";

export const GET = withUser(async (_req, user, ctx) => getWhatsAppQr(user.id, (await ctx.params).id));
