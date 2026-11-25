import { withUser } from "@/lib/api";
import { getStats } from "@/lib/stats";

export const GET = withUser(async (req, user) => {
  const q = new URL(req.url).searchParams;
  return getStats(user.id, q.get("from"), q.get("to"));
});
