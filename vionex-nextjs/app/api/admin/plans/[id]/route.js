import { withAdmin } from "@/lib/api";
import { deletePlan, describePlanChange, getPlan, updatePlan } from "@/lib/admin";

export const PATCH = withAdmin(
  async (req, _actor, ctx, log) => {
    const id = (await ctx.params).id;
    const before = getPlan(id);
    log.target = before.name;
    log.description = `Plan ${before.name}`;
    const after = updatePlan(id, await req.json().catch(() => ({})));
    log.description = `Plan ${before.name}: ${describePlanChange(before, after) || "no changes"}`;
    return after;
  },
  { category: "plans", action: "Updated a plan" },
);
export const DELETE = withAdmin(
  async (_req, _actor, ctx, log) => {
    const p = getPlan((await ctx.params).id);
    log.target = p.name;
    log.description = `Plan ${p.name}`;
    return deletePlan(p.id);
  },
  { category: "plans", action: "Deleted a plan" },
);
