import { withAdmin } from "@/lib/api";
import { createUser, listUsers } from "@/lib/admin";

export const GET = withAdmin(async () => ({ users: listUsers() }));
export const POST = withAdmin(
  async (req, _actor, _ctx, log) => {
    const b = await req.json().catch(() => ({}));
    log.description = `Create user ${String(b.email || "").slice(0, 120)}`;
    const u = createUser(b);
    log.description = `Created ${u.role === "admin" ? "super admin" : "user"} ${u.name} (${u.email})${u.packageName ? `, plan ${u.packageName}` : ""}${
      u.generatorLimit != null ? `, generator limit ${u.generatorLimit.toLocaleString()}` : ""
    }${u.filterQuota != null ? `, filter quota ${u.filterQuota.toLocaleString()}` : ""}`;
    log.target = u.email;
    log.subjectUserId = u.id;
    return u;
  },
  { category: "users", action: "Created a user" },
);
