import { withAdmin } from "@/lib/api";
import { createPlan, listPlans, planSummary } from "@/lib/admin";

export const GET = withAdmin(async () => ({ plans: listPlans() }));
export const POST = withAdmin(
  async (req, _actor, _ctx, log) => {
    const b = await req.json().catch(() => ({}));
    log.description = `Create plan ${String(b.name || "").slice(0, 40)}`;
    const p = createPlan(b);
    log.description = planSummary(p);
    log.target = p.name;
    return p;
  },
  { category: "plans", action: "Created a plan" },
);
