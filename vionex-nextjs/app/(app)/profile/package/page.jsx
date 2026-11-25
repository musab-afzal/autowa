import AutoShell from "@/components/autowa/AutoShell";
import { requireUser } from "@/lib/auth";
import { fmtDate, formatPrice, getPackages, getProfile } from "@/lib/profile";
import { maxWhatsApps } from "@/lib/whatsapp";
import { countryNames, parseCountries } from "@/lib/countries";

export const metadata = { title: "AutoWA — My Package" };

const ICONS = ["rocket", "zap", "building-2", "server"];
const TINTS = ["tint-emerald", "tint-brand", "tint-amber", "tint-slate"];

function Feature({ children, on = true }) {
  return (
    <li className={`d-flex align-items-start gap-2 ${on ? "" : "opacity-50"}`}>
      <i className={`icon-18 flex-shrink-0 ${on ? "text-cat-emerald" : "text-muted-2"}`} data-lucide={on ? "check" : "x"} aria-hidden="true" />
      <span className={`fs-md text-body-2 ${on ? "" : "text-decoration-line-through"}`}>{children}</span>
    </li>
  );
}

function countryLabel(json) {
  const list = parseCountries(json);
  if (!list) return "All countries";
  return list.length <= 3 ? countryNames(list) : `${list.length} countries`;
}

export default async function Page() {
  const user = await requireUser();
  const p = getProfile(user.id);
  const packages = getPackages();
  const isAdmin = p.role === "admin";
  const current = packages.find((k) => k.id === p.package_id);
  const daysLeft = p.package_expires_at ? Math.ceil((new Date(p.package_expires_at).getTime() - Date.now()) / 86400000) : null;
  const max = maxWhatsApps(user);
  const pct = Math.min(100, Math.round((p.usage.whatsapps / max) * 100));

  return (
    <AutoShell user={user} nav="package" title="My Package" crumb="My Package">
      {/* ===== Current package & usage ===== */}
      <section className="row g-3 mb-4">
        <div className="col-12 col-xl-5">
          <div className="on-dark bg-grad-theme d-flex flex-column justify-content-between gap-3 h-100 p-3 p-md-4 rounded-4">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
              <h2 className="d-flex align-items-center gap-2 fs-5 text-title mb-0">
                <span className="icon-box bg-white bg-opacity-25 rounded-circle" aria-hidden="true">
                  <i data-lucide="gem" />
                </span>
                Current package
              </h2>
              <span className={`badge-soft ${isAdmin || (daysLeft ?? 0) > 0 ? "tint-success" : "tint-danger"}`}>
                {isAdmin ? "Full access" : daysLeft == null ? "Not assigned" : daysLeft > 0 ? "Active" : "Expired"}
              </span>
            </div>
            <p className="d-flex flex-wrap align-items-baseline gap-2 mb-0">
              <span className="fs-1 fw-bold text-title lh-1">{isAdmin ? "Super Admin" : current?.name || "No package"}</span>
              {current && !isAdmin && (
                <span className="fs-md text-primary">
                  {formatPrice(current.price, current.currency)} / {current.duration_days} days
                </span>
              )}
            </p>
            <ul className="list-unstyled d-flex flex-wrap gap-3 fs-md text-primary mb-0">
              <li className="d-inline-flex align-items-center gap-2">
                <i className="icon-16" data-lucide="calendar-days" aria-hidden="true" />
                {isAdmin ? "Never expires" : p.package_expires_at ? `Expires ${fmtDate(p.package_expires_at)}` : "Ask your admin to assign a package"}
              </li>
              {!isAdmin && daysLeft != null && daysLeft > 0 && (
                <li className="d-inline-flex align-items-center gap-2">
                  <i className="icon-16" data-lucide="hourglass" aria-hidden="true" />
                  {daysLeft} day{daysLeft === 1 ? "" : "s"} left
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="col-12 col-xl-7">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="fs-5 fw-semibold text-title mb-3">Package usage</h2>
              <div className="mb-4">
                <div className="d-flex justify-content-between fs-md mb-1">
                  <span className="fw-semibold text-title">WhatsApp numbers</span>
                  <span className="text-muted-2">
                    {p.usage.whatsapps} of {max}
                  </span>
                </div>
                <div className="progress" style={{ height: 10 }} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                  <div className={`progress-bar ${pct >= 100 ? "bg-danger" : ""}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
              <div className="row row-cols-1 row-cols-sm-3 g-2">
                {[
                  ["filter", "Numbers per filter", (isAdmin ? 500000 : p.max_generated_numbers || 1000).toLocaleString()],
                  ["sparkles", "Numbers generated", p.usage.generated.toLocaleString()],
                  ["filter", "Numbers filtered", p.usage.checked.toLocaleString()],
                ].map(([icon, label, value]) => (
                  <div key={label} className="col">
                    <div className="p-3 rounded-3 bg-soft h-100">
                      <i className="icon-18 text-primary mb-2 d-block" data-lucide={icon} aria-hidden="true" />
                      <span className="d-block fs-5 fw-bold text-title">{value}</span>
                      <span className="fs-sm text-muted-2">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== All packages ===== */}
      <section className="mb-4" aria-labelledby="plansTitle">
        <div className="text-center mb-4">
          <h2 id="plansTitle" className="fs-3 fw-bold text-title mb-1">
            Packages & pricing
          </h2>
          <p className="text-body-2 mb-0">Need more WhatsApp numbers or bigger lists? Compare the packages below.</p>
        </div>
        <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 justify-content-center mb-0">
          {packages.map((k, i) => {
            const isCurrent = !isAdmin && k.id === p.package_id;
            return (
              <li key={k.id} className="col">
                <div className={`card position-relative h-100 ${isCurrent ? "ring-primary" : ""}`}>
                  {isCurrent && (
                    <span className="corner-tag position-absolute badge-soft tint-primary d-inline-flex align-items-center gap-1 px-3 py-2">
                      <i className="icon-12" data-lucide="circle-check" aria-hidden="true" /> Your package
                    </span>
                  )}
                  <div className="card-body d-flex flex-column">
                    <span className={`icon-box icon-box-lg ${TINTS[i % TINTS.length]} mb-3`} aria-hidden="true">
                      <i data-lucide={ICONS[i % ICONS.length]} />
                    </span>
                    <h3 className="fs-5 fw-bold text-title mb-1">{k.name}</h3>
                    <p className="fs-sm text-muted-2 mb-3">{k.description}</p>
                    <p className="d-flex flex-wrap align-items-baseline gap-1 mb-3">
                      <span className="display-5 fw-bold text-title lh-1">{formatPrice(k.price, k.currency)}</span>
                      {k.price > 0 && <span className="fs-md text-muted-2">/ {k.duration_days} days</span>}
                    </p>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                      <Feature>Speed: 10,000 numbers in ~{k.speed_sec_per_10k} seconds</Feature>
                      <Feature>{k.filter_quota.toLocaleString()} numbers to filter in total</Feature>
                      <Feature>Up to {k.max_generated_numbers.toLocaleString()} numbers per filter</Feature>
                      <Feature>
                        {k.max_whatsapp_numbers} WhatsApp number{k.max_whatsapp_numbers === 1 ? "" : "s"}
                      </Feature>
                      <Feature on={!!k.feature_generator}>Built-in number generator</Feature>
                      <Feature on={!!k.feature_multi_files}>Multiple files per filter</Feature>
                      <Feature on={!!k.feature_both_results}>Both results — on & not on WhatsApp</Feature>
                      <Feature>{countryLabel(k.countries)}</Feature>
                      <Feature on={k.support !== "No support"}>{k.support}</Feature>
                      <Feature>Valid for {k.duration_days} days</Feature>
                    </ul>
                    {isCurrent ? (
                      <span className="btn btn-outline-soft w-100 mt-auto disabled" aria-disabled="true">
                        Current package
                      </span>
                    ) : (
                      <p className="fs-sm text-muted-2 text-center mt-auto mb-0">Ask your administrator to switch to {k.name}.</p>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </AutoShell>
  );
}
