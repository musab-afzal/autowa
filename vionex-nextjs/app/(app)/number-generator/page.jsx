import AutoShell from "@/components/autowa/AutoShell";
import NumberGenerator from "@/components/autowa/NumberGenerator";
import { requireUser } from "@/lib/auth";
import { blockedReason, entitlements } from "@/lib/limits";
import { listLists } from "@/lib/generator";
import { countryByCode } from "@/lib/countries";

export const metadata = { title: "AutoWA — Number Generator" };

/* allowed countries → one option per dialling code ("+1 United States, Canada…") */
function dialOptions(codes) {
  if (!codes) return null;
  const byDial = new Map();
  for (const c of codes) {
    const country = countryByCode(c);
    if (!country) continue;
    byDial.set(country.dial, [...(byDial.get(country.dial) || []), country.name]);
  }
  return [...byDial].map(([dial, names]) => ({ dial, label: names.join(", ") })).sort((a, b) => a.label.localeCompare(b.label));
}

export default async function Page() {
  const user = await requireUser();
  const ent = entitlements(user);
  const locked = blockedReason(ent) || (!ent.generator ? "The built-in number generator is not included in your plan." : null);

  return (
    <AutoShell user={user} nav="number-generator" title="Number Generator" crumb="Number Generator">
      {locked ? (
        <div className="card">
          <div className="card-body d-flex flex-column align-items-center text-center gap-3 py-5">
            <span className="icon-box bg-muted rounded-circle" style={{ width: 72, height: 72 }} aria-hidden="true">
              <i data-lucide="lock" />
            </span>
            <p className="fs-5 fw-bold text-title mb-0">Number Generator is not available</p>
            <p className="text-body-2 mb-0">{locked}</p>
            <a href="/profile/package" className="btn btn-primary">
              See packages
            </a>
          </div>
        </div>
      ) : (
        <NumberGenerator limit={ent.perList} initialLists={listLists(user.id)} allowedDials={dialOptions(ent.countries)} />
      )}
    </AutoShell>
  );
}
