import { withUser } from "@/lib/api";
import { createList, listLists } from "@/lib/generator";

export const GET = withUser(async (_req, user) => ({ lists: listLists(user.id) }));

/* body: { countryCode, startNumber, increment, quantity, plus } — saves the list and returns it */
export const POST = withUser(
  async (req, user, _ctx, log) => {
    const b = await req.json().catch(() => ({}));
    const qty = Number(b.quantity);
    log.description = `Generate ${Number.isFinite(qty) ? qty.toLocaleString() : "?"} numbers from +${String(b.countryCode || "").replace(/\D/g, "")} ${String(b.startNumber || "").replace(/\D/g, "")}`;
    const l = createList(user, b);
    log.description = `List #${l.id}: ${l.quantity.toLocaleString()} numbers, ${l.first} → ${l.last} (increment ${l.increment})`;
    log.target = `List #${l.id}`;
    return l;
  },
  { category: "generator", action: "Generated a number list" },
);
