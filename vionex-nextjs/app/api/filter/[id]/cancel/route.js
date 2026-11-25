import { withUser } from "@/lib/api";
import { cancelJob } from "@/lib/filter";

export const POST = withUser(
  async (_req, user, ctx, log) => {
    const j = cancelJob(user.id, (await ctx.params).id);
    log.description = `Stopped the filter of ${j.fileName} after ${j.checked.toLocaleString()} of ${j.total.toLocaleString()} numbers`;
    log.target = j.fileName;
    return j;
  },
  { category: "filter", action: "Cancelled a filter" },
);
