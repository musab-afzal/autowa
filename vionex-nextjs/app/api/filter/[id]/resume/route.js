import { withUser } from "@/lib/api";
import { resumeJob } from "@/lib/filter";

export const POST = withUser(
  async (_req, user, ctx, log) => {
    const j = await resumeJob(user.id, (await ctx.params).id);
    log.description = `Resumed the filter of ${j.fileName} at ${j.checked.toLocaleString()} of ${j.total.toLocaleString()} numbers`;
    log.target = j.fileName;
    return j;
  },
  { category: "filter", action: "Resumed a filter" },
);
