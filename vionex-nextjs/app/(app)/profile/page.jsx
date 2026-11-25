import AutoShell from "@/components/autowa/AutoShell";
import { requireUser } from "@/lib/auth";
import { fmtDate, getProfile } from "@/lib/profile";
import { maxWhatsApps } from "@/lib/whatsapp";
import { filterLimit } from "@/lib/limits";

export const metadata = { title: "AutoWA — My Profile" };

function initials(name) {
  return String(name || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function Field({ icon, label, children }) {
  return (
    <div className="col-12 col-md-6">
      <div className="d-flex align-items-start gap-3 p-3 rounded-3 bg-soft h-100">
        <span className="icon-box bg-muted rounded-circle flex-shrink-0" aria-hidden="true">
          <i data-lucide={icon} />
        </span>
        <span className="lh-sm min-w-0">
          <span className="d-block fs-sm text-muted-2 mb-1">{label}</span>
          <span className="d-block fw-semibold text-title text-break">{children}</span>
        </span>
      </div>
    </div>
  );
}

function Usage({ icon, tint, label, value }) {
  return (
    <div className="col">
      <div className="d-flex align-items-center gap-3 p-3 rounded-4 bg-soft h-100">
        <span className={`icon-box ${tint} text-white rounded-circle`} aria-hidden="true">
          <i data-lucide={icon} />
        </span>
        <span className="lh-sm">
          <span className="d-block fs-4 fw-bold text-title">{Number(value).toLocaleString()}</span>
          <span className="d-block fs-md text-muted-2">{label}</span>
        </span>
      </div>
    </div>
  );
}

export default async function Page() {
  const user = await requireUser();
  const p = getProfile(user.id);
  const isAdmin = p.role === "admin";

  return (
    <AutoShell user={user} nav="profile" title="My Profile" crumb="My Profile">
      {/* ===== Identity ===== */}
      <section className="on-dark bg-nav rounded-3 flex-shrink-0 p-3 p-md-4 mb-4">
        <div className="d-flex flex-wrap align-items-center gap-3 gap-md-4">
          <span
            className="avatar bg-grad-theme text-white fw-bold d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
            style={{ width: 80, height: 80, fontSize: 28 }}
            aria-hidden="true"
          >
            {initials(p.name)}
          </span>
          <div className="me-auto min-w-0">
            <h2 className="text-title mb-1 text-break">{p.name}</h2>
            <p className="fw-medium text-primary mb-2 text-break">{p.email}</p>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge-soft bg-white bg-opacity-25 border-glass text-title">{isAdmin ? "Super Admin" : "User"}</span>
              <span className={`badge-soft ${p.is_active ? "tint-success" : "tint-danger"}`}>{p.is_active ? "Active" : "Disabled"}</span>
            </div>
          </div>
          <a href="/profile/package" className="btn btn-accent d-inline-flex align-items-center gap-2">
            <i className="icon-18" data-lucide="gem" aria-hidden="true" /> My Package
          </a>
        </div>
      </section>

      <div className="row g-3 mb-4">
        {/* ===== Details (read-only) ===== */}
        <div className="col-12 col-xxl-7">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                <h2 className="fs-5 fw-semibold text-title mb-0">Profile details</h2>
                <span className="badge-soft tint-info d-inline-flex align-items-center gap-1">
                  <i className="icon-14" data-lucide="lock" aria-hidden="true" /> Read only
                </span>
              </div>
              <div className="row g-3">
                <Field icon="user-round" label="Full name">
                  {p.name}
                </Field>
                <Field icon="mail" label="Email address">
                  {p.email}
                </Field>
                <Field icon="shield-check" label="Role">
                  {isAdmin ? "Super Admin" : "User"}
                </Field>
                <Field icon="badge-check" label="Account status">
                  {p.is_active ? "Active" : "Disabled"}
                </Field>
                <Field icon="calendar-plus" label="Member since">
                  {fmtDate(p.created_at)}
                </Field>
                <Field icon="clock" label="Last sign-in">
                  {fmtDate(p.last_login_at, true)}
                </Field>
              </div>
              <p className="fs-md text-muted-2 mt-3 mb-0">
                <i className="icon-14 me-1" data-lucide="info" aria-hidden="true" />
                To change your details or password, contact your AutoWA administrator.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Package summary ===== */}
        <div className="col-12 col-xxl-5">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h2 className="fs-5 fw-semibold text-title mb-3">Package</h2>
              <div className="row g-3 mb-3">
                <Field icon="gem" label="Current package">
                  {isAdmin ? "Super Admin" : p.package_name || "No package"}
                </Field>
                <Field icon="calendar-clock" label="Expires">
                  {isAdmin ? "Never" : fmtDate(p.package_expires_at)}
                </Field>
                <Field icon="message-circle" label="WhatsApp numbers">
                  {p.usage.whatsapps} of {maxWhatsApps(user)} used
                </Field>
                <Field icon="filter" label="Numbers per filter">
                  {filterLimit(user).toLocaleString()}
                </Field>
                <Field icon="list-ordered" label="Number generator limit">
                  {user.role === "admin" || user.user_generator_limit == null ? "No limit" : `${user.user_generator_limit.toLocaleString()} per list`}
                </Field>
              </div>
              <a href="/profile/package" className="btn btn-outline-soft mt-auto align-self-start d-inline-flex align-items-center gap-2">
                View packages <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Usage ===== */}
      <section className="mb-4">
        <h2 className="fs-5 fw-semibold text-title mb-3">Your activity</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3">
          <Usage icon="list-ordered" tint="bg-cat-amber" label={`Numbers generated · ${p.usage.lists} list(s)`} value={p.usage.generated} />
          <Usage icon="filter" tint="bg-cat-blue" label={`Numbers filtered · ${p.usage.filters} filter(s)`} value={p.usage.checked} />
          <Usage icon="user-check" tint="bg-cat-emerald" label="Found on WhatsApp" value={p.usage.onWhatsApp} />
          <Usage icon="log-in" tint="bg-cat-violet" label="WhatsApp logins" value={p.usage.logins} />
        </div>
      </section>
    </AutoShell>
  );
}
