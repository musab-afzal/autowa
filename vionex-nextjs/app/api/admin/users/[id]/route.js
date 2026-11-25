import { withAdmin } from "@/lib/api";
import { deleteUser, describeUserChange, getUser, updateUser } from "@/lib/admin";

export const PATCH = withAdmin(
  async (req, actor, ctx, log) => {
    const id = (await ctx.params).id;
    const body = await req.json().catch(() => ({}));
    const before = getUser(id);
    log.subjectUserId = before.id;
    log.target = before.email;
    log.description = `${before.name} (${before.email})`;
    const after = updateUser(id, body, actor);
    const changes = describeUserChange(before, after, body);
    if (before.isActive !== after.isActive) log.action = after.isActive ? "Enabled a user" : "Disabled a user";
    log.description = `${before.name} (${before.email}): ${changes || "no changes"}`;
    return after;
  },
  { category: "users", action: "Updated a user" },
);
export const DELETE = withAdmin(
  async (_req, actor, ctx, log) => {
    const u = getUser((await ctx.params).id);
    log.subjectUserId = u.id;
    log.target = u.email;
    log.description = `${u.name} (${u.email})${u.packageName ? `, plan ${u.packageName}` : ""}`;
    return deleteUser(u.id, actor);
  },
  { category: "users", action: "Deleted a user" },
);
