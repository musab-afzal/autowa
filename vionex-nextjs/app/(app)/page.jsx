import AutoShell, { CHART_SCRIPTS } from "@/components/autowa/AutoShell";
import DashboardTop from "@/components/autowa/DashboardTop";
import DashboardStats from "@/components/autowa/DashboardStats";
import RecentFilters from "@/components/autowa/RecentFilters";
import { requireUser } from "@/lib/auth";
import { listWhatsApps, maxWhatsApps } from "@/lib/whatsapp";
import { entitlements, filterLimit } from "@/lib/limits";
import { redirect } from "next/navigation";
import { listJobs } from "@/lib/filter";
import { fmtDate } from "@/lib/profile";

export const metadata = { title: "AutoWA — Dashboard" };

function QuotaStrip({ ent }) {
  if (ent.quota == null) return null;
  const pct = ent.quota ? Math.min(100, Math.round((ent.used / ent.quota) * 100)) : 100;
  const low = ent.remaining <= ent.quota * 0.1;
  return (
    <section className="card mb-4" aria-labelledby="quota-title">
      <div className="card-body">
        <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
          <span className="icon-box bg-cat-violet text-white rounded-circle" aria-hidden="true">
            <i data-lucide="filter" />
          </span>
          <div className="me-auto">
            <h2 id="quota-title" className="fs-5 fw-semibold text-title mb-0">
              Filter quota
            </h2>
            <p className="fs-md text-muted-2 mb-0">Numbers you can check on WhatsApp in your current plan.</p>
          </div>
          {low && <span className="badge-soft tint-warning">Running low — contact your administrator for more</span>}
        </div>
        <div className="row row-cols-1 row-cols-sm-3 g-2 mb-3">
          {[
            ["You can filter in total", ent.quota],
            ["Already filtered", ent.used],
            ["Numbers left", ent.remaining],
          ].map(([label, v], i) => (
            <div key={label} className="col">
              <div className={`p-3 rounded-3 ${i === 2 ? "tint-success" : "bg-soft"}`}>
                <span className="d-block fs-3 fw-bold text-title">{v.toLocaleString()}</span>
                <span className="fs-md text-muted-2">{label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="progress" style={{ height: 10 }} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Quota used">
          <div className={`progress-bar ${pct >= 90 ? "bg-danger" : ""}`} style={{ width: `${pct}%` }} />
        </div>
        <p className="fs-sm text-muted-2 mt-1 mb-0">{pct}% used</p>
      </div>
    </section>
  );
}

export default async function Page() {
  const user = await requireUser();
  if (user.role === "admin") redirect("/admin");
  const isAdmin = false;
  const ent = entitlements(user);

  let items = [];
  let offline = false;
  try {
    items = await listWhatsApps(user.id);
  } catch {
    offline = true;
  }

  const left = user.package_expires_at ? Math.ceil((new Date(user.package_expires_at).getTime() - Date.now()) / 86400000) : null;
  const plan = {
    name: isAdmin ? "Administrator" : user.package_name || "No package",
    note: isAdmin ? "Full access" : left == null ? "Ask your admin to assign a package" : left > 0 ? `Renews in ${left} day${left === 1 ? "" : "s"}` : "Expired",
  };
  const expires = {
    value: isAdmin ? "Never" : fmtDate(user.package_expires_at),
    note: left == null ? null : left > 0 ? `${left} day${left === 1 ? "" : "s"} left` : "Renew your package",
  };

  return (
    <AutoShell user={user} nav="dashboard" title="Dashboard" scripts={CHART_SCRIPTS}>
      <DashboardTop
        firstName={user.name.split(" ")[0]}
        plan={plan}
        isAdmin={isAdmin}
        initial={{ items, max: maxWhatsApps(user), offline }}
        limit={ent.generatorLimited ? ent.perList : null}
        expires={expires}
      />
      <QuotaStrip ent={ent} />
      <DashboardStats />
      <RecentFilters jobs={listJobs(user.id, 5)} bothResults={ent.bothResults} />
    </AutoShell>
  );
}
