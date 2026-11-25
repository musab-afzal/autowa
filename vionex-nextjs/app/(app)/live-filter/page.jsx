import AutoShell, { CHART_SCRIPTS } from "@/components/autowa/AutoShell";
import LiveFilter from "@/components/autowa/LiveFilter";
import { requireUser } from "@/lib/auth";
import { filterLimit, listJobs } from "@/lib/filter";
import { listLists } from "@/lib/generator";
import { listWhatsApps } from "@/lib/whatsapp";
import { blockedReason, entitlements } from "@/lib/limits";
import { countryNames } from "@/lib/countries";

export const metadata = { title: "AutoWA — Live Filter" };

export default async function Page({ searchParams }) {
  const user = await requireUser();
  const { list } = await searchParams;
  const lists = listLists(user.id, 50);
  const preselect = lists.some((l) => String(l.id) === String(list)) ? Number(list) : null;
  const e = entitlements(user);
  const ent = {
    multiFiles: e.multiFiles,
    bothResults: e.bothResults,
    remaining: e.remaining,
    dialCodes: e.dialCodes,
    countriesLabel: e.countries ? countryNames(e.countries) : null,
    blocked: blockedReason(e),
  };
  const whatsapps = (await listWhatsApps(user.id).catch(() => [])).filter((w) => w.status === "ready");

  return (
    <AutoShell user={user} nav="live-filter" title="Live Filter" crumb="Live Filter" scripts={CHART_SCRIPTS}>
      <LiveFilter
        initialWhatsapps={whatsapps}
        initialJobs={listJobs(user.id)}
        limit={filterLimit(user)}
        lists={lists}
        preselectListId={preselect}
        ent={ent}
      />
    </AutoShell>
  );
}
