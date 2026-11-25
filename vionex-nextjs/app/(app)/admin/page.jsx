import AutoShell, { CHART_SCRIPTS } from "@/components/autowa/AutoShell";
import AdminActions from "@/components/autowa/admin/AdminActions";
import AdminCharts from "@/components/autowa/admin/AdminCharts";
import AdminOperations from "@/components/autowa/admin/AdminOperations";
import { requireAdmin } from "@/lib/auth";
import { listUsers, operations, summary } from "@/lib/admin";
import { fmtDate } from "@/lib/profile";

export const metadata = { title: "AutoWA — Super Admin" };

function Box({ wash, iconBg, icon, title, value, note }) {
  return (
    <div className="col">
      <div className={`position-relative overflow-hidden h-100 p-3 rounded-4 ${wash}`}>
        <img src="/assets/images/burst-art.svg" alt="" className="card-watermark position-absolute top-0 pe-none" />
        <div className="position-relative d-flex flex-column gap-3 h-100">
          <div className="d-flex flex-column gap-2">
            <span className={`icon-box ${iconBg} text-white rounded-circle`} aria-hidden="true">
              <i data-lucide={icon} />
            </span>
            <h3 className="fs-5 fw-medium text-primary mb-0">{title}</h3>
          </div>
          <div className="d-flex flex-column gap-1">
            <span className="fs-2 fw-bold text-title">
              <bdi>{value}</bdi>
            </span>
            {note && <span className="fs-md text-muted-2">{note}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

function compact(n) {
  return new Intl.NumberFormat("en", { notation: n >= 100000 ? "compact" : "standard", maximumFractionDigits: 1 }).format(n);
}

export default async function Page() {
  const admin = await requireAdmin();
  const s = summary();
  const users = listUsers();
  const recent = users.slice(0, 8);

  return (
    <AutoShell user={admin} nav="admin" title="Super Admin Dashboard" crumb="Super Admin" scripts={CHART_SCRIPTS}>
      {/* ===== Welcome ===== */}
      <section className="on-dark bg-nav rounded-3 overflow-hidden flex-shrink-0 p-3 p-md-4 mb-4" aria-labelledby="welcome-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div>
            <h2 id="welcome-title" className="text-title mb-1">
              Welcome back, {admin.name.split(" ")[0]} <span aria-hidden="true">👋</span>
            </h2>
            <p className="fw-medium text-primary mb-0">
              {s.users.toLocaleString()} users · {s.activePlans} active plans · {compact(s.numbersFiltered)} numbers filtered so far
            </p>
          </div>
          <AdminActions />
        </div>
      </section>

      {/* ===== Key figures ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">Key figures</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3">
          <Box
            wash="bg-wash-brand"
            iconBg="bg-cat-violet"
            icon="filter"
            title="Total numbers filtered"
            value={compact(s.numbersFiltered)}
            note={`${compact(s.numbersOnWhatsApp)} on WhatsApp · ${compact(s.numbersGenerated)} generated`}
          />
          <Box
            wash="bg-wash-emerald"
            iconBg="bg-cat-emerald"
            icon="gauge"
            title="Avg filter response"
            value={s.secPer10k == null ? "—" : `${s.secPer10k.toFixed(1)}s`}
            note={s.secPer10k == null ? "No filters yet" : `per 10,000 numbers · ≈${Math.round(s.numbersPerSec).toLocaleString()} numbers/s (30 days)`}
          />
          <Box
            wash="bg-wash-blue"
            iconBg="bg-cat-blue"
            icon="users-round"
            title="Total users"
            value={s.users.toLocaleString()}
            note={`${s.activeAccounts} active · ${s.users - s.activeAccounts} disabled · ${s.admins} super admin(s)`}
          />
          <Box
            wash="bg-wash-amber"
            iconBg="bg-cat-amber"
            icon="gem"
            title="Total plans"
            value={s.plans}
            note={`${s.activePlans} active · ${s.plans - s.activePlans} inactive`}
          />
        </div>
      </section>

      {/* ===== Graphs ===== */}
      <AdminCharts users={users.filter((u) => u.role === "user").map((u) => ({ id: u.id, name: u.name, email: u.email }))} />

      {/* ===== Recent users ===== */}
      <section className="card mb-4">
        <div className="card-body">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
            <h2 className="fs-5 fw-semibold text-title mb-0">Recent users</h2>
            <a href="/admin/users" className="btn btn-sm btn-outline-soft d-inline-flex align-items-center gap-1">
              Manage users <i className="icon-14 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
            </a>
          </div>
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">User</th>
                  <th scope="col">Plan</th>
                  <th scope="col" className="text-end">Filter quota left</th>
                  <th scope="col" className="text-end">Filtered</th>
                  <th scope="col">Status</th>
                  <th scope="col">Joined</th>
                  <th scope="col">Last login</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((u) => (
                  <tr key={u.id}>
                    <td>
                      <span className="fw-medium text-title">{u.name}</span>
                      {u.role === "admin" && <span className="badge-soft tint-primary ms-2">Super Admin</span>}
                      <span className="d-block fs-sm text-muted-2">{u.email}</span>
                    </td>
                    <td>{u.role === "admin" ? "—" : u.packageName || <span className="text-muted-2">None</span>}</td>
                    <td className="text-end">{u.quotaLeft == null ? "Unlimited" : u.quotaLeft.toLocaleString()}</td>
                    <td className="text-end">{u.filtered.toLocaleString()}</td>
                    <td>
                      <span className={`badge-soft ${u.isActive ? "tint-success" : "tint-danger"}`}>{u.isActive ? "Active" : "Disabled"}</span>
                    </td>
                    <td className="text-nowrap">{fmtDate(u.createdAt)}</td>
                    <td className="text-nowrap">{u.lastLoginAt ? fmtDate(u.lastLoginAt, true) : <span className="text-muted-2">Never</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== Operations ===== */}
      <AdminOperations initial={operations()} />
    </AutoShell>
  );
}
