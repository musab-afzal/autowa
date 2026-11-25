import { withUser } from "@/lib/api";
import { filtersFrom, listAudit } from "@/lib/audit";

/* ?q&category&status&from&to&page (&userId for a super admin) — users only get their own rows */
export const GET = withUser(async (req, user) => listAudit(user, filtersFrom(new URL(req.url).searchParams)));
