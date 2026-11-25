import { withUser } from "@/lib/api";
import { OpenWAError } from "@/lib/openwa";
import { requestPairingCode } from "@/lib/whatsapp";

export const POST = withUser(
  async (req, user, ctx, log) => {
    const body = await req.json().catch(() => ({}));
    const phone = String(body.phoneNumber || "").replace(/\D/g, "");
    if (!/^[0-9]{6,15}$/.test(phone)) {
      throw new OpenWAError(400, "Enter your full number with country code, digits only (e.g. 923001234567).");
    }
    log.description = `Requested a pairing code for +${phone}`;
    return requestPairingCode(user.id, (await ctx.params).id, phone);
  },
  { category: "whatsapp", action: "Requested a pairing code" },
);
