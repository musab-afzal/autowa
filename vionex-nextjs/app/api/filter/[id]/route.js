import { withUser } from "@/lib/api";
import { deleteJob, getJob } from "@/lib/filter";

export const GET = withUser(async (_req, user, ctx) => getJob(user.id, (await ctx.params).id));
export const DELETE = withUser(
  async (_req, user, ctx, log) => {
    const j = getJob(user.id, (await ctx.params).id);
    log.description = `Deleted the filter of ${j.fileName} and its results`;
    log.target = j.fileName;
    return deleteJob(user.id, j.id);
  },
  { category: "filter", action: "Deleted a filter" },
);
