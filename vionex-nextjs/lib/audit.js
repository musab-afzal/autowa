import { getDb } from "./db";

/* Audit log: one row per action, for users and super admins.
   The actor's name / email / role are copied into the row, so the history stays
   readable after a user is renamed or deleted. subject_user_id is the account an
   action was done to (e.g. an admin changing a user's plan), so that user sees it too. */

export const AUDIT_CATEGORIES = {
  auth: "Sign-in",
  whatsapp: "WhatsApp",
  generator: "Number Generator",
  filter: "Live Filter",
  users: "Users",
  plans: "Plans",
  system: "System",
};

export const AUDIT_PAGE_SIZE = 25;

/* IP + browser of a request (works behind a proxy that sets X-Forwarded-For). */
export function clientInfo(request) {
  if (!request?.headers) return { ip: null, userAgent: null };
  const h = request.headers;
  const ip = (h.get("x-forwarded-for") || "").split(",")[0].trim() || h.get("x-real-ip") || null;
  return { ip: ip === "::1" || ip === "::ffff:127.0.0.1" ? "127.0.0.1" : ip, userAgent: (h.get("user-agent") || "").slice(0, 300) || null };
}

const actorById = (id) => (id ? getDb().prepare("SELECT id, name, email, role FROM users WHERE id = ?").get(id) : null);

/* Never throws: a failed log write must not break the action itself.
   actor: a user object (or { id } / null); request: for IP and browser (omit for background events). */
export function logAudit({ actor, actorId, actorEmail, request, category, action, description, target, status = "success", subjectUserId }) {
  try {
    const a = actor?.name ? actor : actorById(actor?.id ?? actorId);
    const { ip, userAgent } = clientInfo(request);
    getDb()
      .prepare(
        `INSERT INTO audit_logs (user_id, actor_name, actor_email, actor_role, subject_user_id, category, action, description, target,
           status, ip, user_agent, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        a?.id ?? null,
        a?.name ?? null,
        a?.email ?? actorEmail ?? null,
        a?.role ?? null,
        subjectUserId ?? a?.id ?? null,
        category,
        action,
        String(description || action).slice(0, 1000),
        target == null ? null : String(target).slice(0, 200),
        status,
        request ? ip : "system",
        userAgent,
        new Date().toISOString(),
      );
  } catch (e) {
    console.error("[audit]", e);
  }
}

/* ---------------------------------------------------------------- reading -- */

/* Filters: q (text), category, status, userId (admin only), from / to (YYYY-MM-DD, local days).
   A user sees what they did and what was done to their account; an admin sees everything. */
function where(viewer, f) {
  const parts = [];
  const args = [];
  if (viewer.role !== "admin") {
    parts.push("(l.user_id = ? OR l.subject_user_id = ?)");
    args.push(viewer.id, viewer.id);
  } else if (Number(f.userId)) {
    parts.push("(l.user_id = ? OR l.subject_user_id = ?)");
    args.push(Number(f.userId), Number(f.userId));
  }
  if (f.category && Object.hasOwn(AUDIT_CATEGORIES, f.category)) {
    parts.push("l.category = ?");
    args.push(f.category);
  }
  if (f.status === "success" || f.status === "failed") {
    parts.push("l.status = ?");
    args.push(f.status);
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(f.from || "")) {
    parts.push("date(l.created_at, 'localtime') >= ?");
    args.push(f.from);
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(f.to || "")) {
    parts.push("date(l.created_at, 'localtime') <= ?");
    args.push(f.to);
  }
  const q = String(f.q || "").trim().slice(0, 100);
  if (q) {
    parts.push("(l.action LIKE ? OR l.description LIKE ? OR l.actor_name LIKE ? OR l.actor_email LIKE ? OR l.target LIKE ? OR l.ip LIKE ?)");
    const like = `%${q.replace(/[%_]/g, (c) => `\\${c}`)}%`;
    args.push(like, like, like, like, like, like);
  }
  return { sql: parts.length ? `WHERE ${parts.join(" AND ")}`.replace(/LIKE \?/g, "LIKE ? ESCAPE '\\'") : "", args };
}

const COLS = `l.id, l.user_id AS userId, l.actor_name AS actorName, l.actor_email AS actorEmail, l.actor_role AS actorRole,
  l.subject_user_id AS subjectUserId, s.name AS subjectName, l.category, l.action, l.description, l.target, l.status,
  l.ip, l.user_agent AS userAgent, l.created_at AS createdAt`;

export function filtersFrom(searchParams) {
  const g = (k) => searchParams.get(k) || "";
  return { q: g("q"), category: g("category"), status: g("status"), userId: g("userId"), from: g("from"), to: g("to"), page: g("page") };
}

export function listAudit(viewer, f = {}) {
  const { sql, args } = where(viewer, f);
  const total = getDb().prepare(`SELECT COUNT(*) AS n FROM audit_logs l ${sql}`).get(...args).n;
  const pages = Math.max(1, Math.ceil(total / AUDIT_PAGE_SIZE));
  const page = Math.min(pages, Math.max(1, Number(f.page) || 1));
  const items = getDb()
    .prepare(`SELECT ${COLS} FROM audit_logs l LEFT JOIN users s ON s.id = l.subject_user_id ${sql} ORDER BY l.id DESC LIMIT ? OFFSET ?`)
    .all(...args, AUDIT_PAGE_SIZE, (page - 1) * AUDIT_PAGE_SIZE)
    .map((r) => ({ ...r }));
  /* quick counts for the summary cards (same filters, ignoring the status one) */
  const base = where(viewer, { ...f, status: "" });
  const counts = getDb()
    .prepare(`SELECT COUNT(*) AS total, COALESCE(SUM(l.status = 'failed'), 0) AS failed,
                     COALESCE(SUM(date(l.created_at, 'localtime') = date('now', 'localtime')), 0) AS today
                FROM audit_logs l ${base.sql}`)
    .get(...base.args);
  return { items, total, page, pages, pageSize: AUDIT_PAGE_SIZE, counts: { ...counts } };
}

export const AUDIT_EXPORT_COLUMNS = [
  { key: "id", label: "ID", width: 8 },
  { key: "time", label: "Date & time", width: 20 },
  { key: "user", label: "User", width: 22 },
  { key: "email", label: "Email", width: 26 },
  { key: "role", label: "Role", width: 12 },
  { key: "category", label: "Category", width: 16 },
  { key: "action", label: "Action", width: 24 },
  { key: "description", label: "Details", width: 60 },
  { key: "status", label: "Status", width: 10 },
  { key: "ip", label: "IP address", width: 16 },
];

const EXPORT_MAX = 50000;

export function auditExportRows(viewer, f = {}) {
  const { sql, args } = where(viewer, f);
  return getDb()
    .prepare(`SELECT ${COLS} FROM audit_logs l LEFT JOIN users s ON s.id = l.subject_user_id ${sql} ORDER BY l.id DESC LIMIT ?`)
    .all(...args, EXPORT_MAX)
    .map((r) => ({
      id: r.id,
      time: new Date(r.createdAt).toLocaleString("en-GB"),
      user: r.actorName || "Unknown",
      email: r.actorEmail || "",
      role: r.actorRole === "admin" ? "Super Admin" : r.actorRole === "user" ? "User" : "",
      category: AUDIT_CATEGORIES[r.category] || r.category,
      action: r.action,
      description: r.description,
      status: r.status === "failed" ? "Failed" : "Success",
      ip: r.ip || "",
    }));
}

/* People who appear in the log, for the admin's user filter. */
export function auditUsers() {
  return getDb()
    .prepare("SELECT id, name, email, role FROM users ORDER BY role, name")
    .all()
    .map((r) => ({ ...r }));
}
