import { LogoMark, Wordmark } from "./Logo";
import { getDb } from "@/lib/db";
import { maxWhatsApps } from "@/lib/whatsapp";

/* AutoWA sidebar (Vionex markup).
   - Rail: the logo and one icon per page — each icon IS a link, so nothing needs two clicks
     and the collapsed sidebar still navigates.
   - Panel: the whole menu in one list, grouped under section titles, with a collapsible
     Profile submenu, and a plan / usage card + the signed-in user at the bottom.
   `nav` is the key of the current page, for the active highlight. */

const SECTIONS = [
  { title: "Overview", links: [{ key: "dashboard", href: "/", icon: "layout-dashboard", label: "Dashboard" }] },
  { title: "WhatsApp", links: [{ key: "whatsapp", href: "/whatsapp", icon: "qr-code", label: "Login to WhatsApp" }] },
  {
    title: "Tools",
    links: [
      { key: "number-generator", href: "/number-generator", icon: "list-ordered", label: "Number Generator" },
      { key: "live-filter", href: "/live-filter", icon: "filter", label: "Live Filter" },
    ],
  },
  {
    title: "Account",
    links: [
      {
        key: "profile-group",
        icon: "circle-user-round",
        label: "Profile",
        children: [
          { key: "profile", href: "/profile", label: "My Profile" },
          { key: "package", href: "/profile/package", label: "My Package" },
        ],
      },
      { key: "audit-logs", href: "/audit-logs", icon: "scroll-text", label: "Audit Logs" },
    ],
  },
];

const RAIL = [
  { key: "dashboard", href: "/", icon: "layout-dashboard", label: "Dashboard" },
  { key: "whatsapp", href: "/whatsapp", icon: "qr-code", label: "Login to WhatsApp" },
  { key: "number-generator", href: "/number-generator", icon: "list-ordered", label: "Number Generator" },
  { key: "live-filter", href: "/live-filter", icon: "filter", label: "Live Filter" },
  { key: "profile", href: "/profile", icon: "circle-user-round", label: "Profile", also: ["package"] },
  { key: "audit-logs", href: "/audit-logs", icon: "scroll-text", label: "Audit Logs" },
];

/* Super admins: their own area first, then the tools (for testing) and their profile. */
const ADMIN_SECTIONS = [
  {
    title: "Super Admin",
    links: [
      { key: "admin", href: "/admin", icon: "layout-dashboard", label: "Dashboard" },
      { key: "admin-users", href: "/admin/users", icon: "users-round", label: "Users" },
      { key: "admin-plans", href: "/admin/plans", icon: "gem", label: "Plans" },
      { key: "admin-audit", href: "/admin/audit-logs", icon: "scroll-text", label: "Audit Logs" },
    ],
  },
  {
    title: "Tools",
    links: [
      { key: "whatsapp", href: "/whatsapp", icon: "qr-code", label: "Login to WhatsApp" },
      { key: "number-generator", href: "/number-generator", icon: "list-ordered", label: "Number Generator" },
      { key: "live-filter", href: "/live-filter", icon: "filter", label: "Live Filter" },
    ],
  },
  { title: "Account", links: [{ key: "profile", href: "/profile", icon: "circle-user-round", label: "My Profile" }] },
];

const ADMIN_RAIL = [
  { key: "admin", href: "/admin", icon: "layout-dashboard", label: "Admin dashboard" },
  { key: "admin-users", href: "/admin/users", icon: "users-round", label: "Users" },
  { key: "admin-plans", href: "/admin/plans", icon: "gem", label: "Plans" },
  { key: "admin-audit", href: "/admin/audit-logs", icon: "scroll-text", label: "Audit Logs" },
  { key: "live-filter", href: "/live-filter", icon: "filter", label: "Live Filter" },
  { key: "profile", href: "/profile", icon: "circle-user-round", label: "My Profile" },
];

const LINK = "sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap";

function initials(name) {
  return (
    String(name || "?")
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join("") || "?"
  );
}

function NavLinks({ nav, sections }) {
  return sections.map((s) => (
    <div key={s.title} className="mb-3">
      <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">{s.title}</p>
      {s.links.map((l) => {
        if (!l.children) {
          return (
            <a key={l.key} href={l.href} className={`${LINK}${nav === l.key ? " active" : ""}`} aria-current={nav === l.key ? "page" : undefined}>
              <i data-lucide={l.icon} />
              <span>{l.label}</span>
            </a>
          );
        }
        const open = l.children.some((c) => c.key === nav);
        return (
          <div key={l.key}>
            <button
              type="button"
              className={`${LINK} sidebar-parent w-100 border-0 bg-transparent text-start${open ? " menu-open" : " collapsed"}`}
              data-bs-toggle="collapse"
              data-bs-target={`#sm-${l.key}`}
              aria-expanded={open}
              aria-controls={`sm-${l.key}`}
            >
              <i data-lucide={l.icon} />
              <span>{l.label}</span>
              <i data-lucide="chevron-right" className="sidebar-caret ms-auto" />
            </button>
            <div className={`collapse sidebar-submenu${open ? " show" : ""}`} id={`sm-${l.key}`}>
              {l.children.map((c) => (
                <a key={c.key} href={c.href} className={`${LINK} sidebar-child${nav === c.key ? " active" : ""}`} aria-current={nav === c.key ? "page" : undefined}>
                  <span>{c.label}</span>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  ));
}

export default function Sidebar({ user, nav }) {
  const used = getDb().prepare("SELECT COUNT(*) AS n FROM wa_sessions WHERE user_id = ?").get(user.id).n;
  const max = maxWhatsApps(user);
  const pct = Math.min(100, Math.round((used / max) * 100));
  const isAdmin = user.role === "admin";
  const plan = isAdmin ? "Super Admin" : user.package_name || "No package";
  const daysLeft = user.package_expires_at ? Math.ceil((new Date(user.package_expires_at).getTime() - Date.now()) / 86400000) : null;

  return (
    <>
      <a
        href="#main-content"
        className="visually-hidden-focusable position-absolute top-0 start-0 z-3 m-2 px-3 py-2 rounded-3 shadow bg-body text-body"
      >
        Skip to main content
      </a>
      <div className="sidebar-backdrop" data-action="toggle-sidebar" />
      <aside className="app-sidebar d-flex">
        {/* ===== Rail: one link per page ===== */}
        <div className="sidebar-rail d-flex flex-column align-items-center flex-shrink-0 gap-3 py-3 overflow-hidden position-relative">
          <span className="rail-shape" />
          <a className="logo-rail position-relative flex-shrink-0" href="/" aria-label="AutoWA home">
            <LogoMark size={36} className="rail-logo" />
          </a>
          <nav className="position-relative my-auto w-100 min-h-0 d-flex flex-column align-items-center gap-3 py-2 overflow-y-auto scrollbar-thin" aria-label="Quick links">
            {(isAdmin ? ADMIN_RAIL : RAIL).map((r) => {
              const active = nav === r.key || r.also?.includes(nav);
              return (
                <a
                  key={r.key}
                  href={r.href}
                  className={`rail-btn transition-base d-inline-flex align-items-center justify-content-center${active ? " active" : ""}`}
                  aria-label={r.label}
                  title={r.label}
                  aria-current={active ? "page" : undefined}
                >
                  <i data-lucide={r.icon} />
                </a>
              );
            })}
          </nav>
          <form method="post" action="/api/auth/logout" className="position-relative flex-shrink-0">
            <button type="submit" className="rail-btn transition-base" aria-label="Log out" title="Log out">
              <i data-lucide="log-out" />
            </button>
          </form>
        </div>

        {/* ===== Panel: the full menu ===== */}
        <div className="sidebar-panel d-flex flex-column overflow-hidden">
          <div className="app-brand d-flex align-items-center justify-content-between gap-2 flex-shrink-0 px-2 px-sm-3 pt-4 pb-3">
            <a href="/" className="brand-name text-decoration-none" aria-label="AutoWA">
              <Wordmark />
            </a>
            <button
              type="button"
              className="brand-collapse d-flex align-items-center justify-content-center flex-shrink-0"
              data-action="toggle-sidebar"
              aria-label="Collapse sidebar"
            >
              <i data-lucide="panel-left-close" />
            </button>
          </div>

          <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin px-2 px-sm-3">
            <nav className="sidebar-nav is-active" data-menu="main" aria-label="Main menu">
              <NavLinks nav={nav} sections={isAdmin ? ADMIN_SECTIONS : SECTIONS} />
            </nav>
          </div>

          {/* ===== Plan & usage ===== */}
          <div className="flex-shrink-0 px-2 px-sm-3 pb-3 pt-2">
            <a href={isAdmin ? "/admin/plans" : "/profile/package"} className="on-dark bg-grad-theme d-block rounded-4 p-3 mb-2 text-decoration-none">
              <span className="d-flex align-items-center justify-content-between gap-2 mb-2">
                <span className="d-inline-flex align-items-center gap-2 fw-semibold text-title">
                  <i className="icon-16" data-lucide="gem" aria-hidden="true" />
                  {plan}
                </span>
                {!isAdmin && daysLeft != null && (
                  <span className="fs-xs text-primary text-nowrap">{daysLeft > 0 ? `${daysLeft}d left` : "Expired"}</span>
                )}
              </span>
              <span className="d-flex justify-content-between fs-xs text-primary mb-1">
                <span>WhatsApp numbers</span>
                <span>
                  {used} / {max}
                </span>
              </span>
              <span className="progress d-flex bg-white bg-opacity-25" style={{ height: 6 }} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="WhatsApp numbers used">
                <span className="progress-bar bg-white" style={{ width: `${pct}%` }} />
              </span>
            </a>
            <div className="d-flex align-items-center gap-2 p-2 rounded-3 bg-soft">
              <span className="avatar radius-md bg-grad-theme text-white fw-bold d-inline-flex align-items-center justify-content-center flex-shrink-0" aria-hidden="true">
                {initials(user.name)}
              </span>
              <a href="/profile" className="lh-sm overflow-hidden text-decoration-none me-auto">
                <span className="d-block fw-semibold text-title text-truncate">{user.name}</span>
                <span className="d-block fs-xs text-muted-2 text-truncate">{user.email}</span>
              </a>
              <form method="post" action="/api/auth/logout">
                <button type="submit" className="btn btn-ghost btn-sm rounded-circle p-1" aria-label="Log out" title="Log out">
                  <i className="icon-18" data-lucide="log-out" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
