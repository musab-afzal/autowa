import { withAdmin } from "@/lib/api";
import { adminStats, summary } from "@/lib/admin";

/* ?from=YYYY-MM-DD&to=YYYY-MM-DD&userId=… (empty = all users) */
export const GET = withAdmin(async (req) => {
  const q = new URL(req.url).searchParams;
  return { summary: summary(), series: adminStats(q.get("from"), q.get("to"), q.get("userId")) };
});
