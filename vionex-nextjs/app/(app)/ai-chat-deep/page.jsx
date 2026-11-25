/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Deep Research",
  description: "Deep Research — a cited, source-backed AI research workspace built with Bootstrap 5, CSS variables and the Vionex design system.",
};

const scripts = [
    "/assets/js/jquery.min.js",
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/lucide.min.js",
    "/assets/js/apexcharts.min.js",
    "/assets/js/dashboard.js",
    "/assets/js/charts.js",
  ];

export default function Page() {
  return (
    <AppShell
      scripts={scripts}
    >
      {/* ===== Page header ===== */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="fs-4 fw-bold text-title mb-0">
          Deep Research
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item">
              AI Assistant
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Deep Research
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Deep Research workspace ===== */}
      <section className="app-workspace d-flex flex-fill gap-3" aria-label="Deep Research workspace">
        {/* ========== Pane 1 — research runs (drawer under xl) ========== */}
        <section
          className="offcanvas-xl offcanvas-start app-pane app-pane-lg d-flex flex-column"
          tabIndex="-1"
          id="deepListPane"
          aria-labelledby="deepListTitle"
        >
          <div className="offcanvas-body d-flex flex-fill min-h-0 p-3 p-xl-0 overflow-hidden" data-search-scope="">
            <div className="card flex-fill min-w-0 mb-0 overflow-hidden">
              <div className="px-3 pt-4 pb-3 flex-shrink-0">
                <div className="d-flex align-items-center gap-2 mb-4">
                  <h2 id="deepListTitle" className="fs-5 fw-semibold text-title mb-0 me-auto">
                    Research
                  </h2>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                    aria-label="Start new research"
                    title="Start new research"
                  >
                    <i data-lucide="plus" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-xl-none"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#deepListPane"
                    aria-label="Close research list"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </div>
                <div className="field-icon mb-3">
                  <i className="icon-18" data-lucide="search" aria-hidden="true" />
                  {" "}
                  <label htmlFor="deepSearch" className="visually-hidden">
                    Search research runs
                  </label>
                  {" "}
                  <input
                    type="search"
                    className="form-control"
                    id="deepSearch"
                    name="deep-search"
                    placeholder="Search topics"
                    data-search-input=""
                  />
                </div>
                <div
                  className="nav nav-pills seg-toggle d-inline-flex flex-nowrap mw-100 gap-1 p-1 rounded-pill bg-soft overflow-x-auto scrollbar-none"
                  role="group"
                  aria-label="Filter research runs"
                >
                  <button type="button" className="nav-link active fw-medium" data-filter="all" aria-pressed="true">
                    All
                  </button>
                  <button type="button" className="nav-link fw-medium" data-filter="running" aria-pressed="false">
                    Running
                  </button>
                  <button type="button" className="nav-link fw-medium" data-filter="done" aria-pressed="false">
                    Done
                  </button>
                </div>
              </div>
              <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin px-2 pb-4">
                <p className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked px-3 mb-2">
                  This month
                </p>
                <ul className="list-unstyled mb-0">
                  <li data-filter-tags="done">
                    <button
                      type="button"
                      aria-current="true"
                      className="list-row-select transition-base w-100 d-block px-3 py-2 border-0 rounded-3 text-start active"
                    >
                      <span className="d-block fs-lg text-truncate">
                        Impact of the EU AI Act on mid-market SaaS
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2 mt-1">
                        <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                        <span className="fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Completed · 42 sources · 8m 12s
                          </bdi>
                        </span>
                      </span>
                    </button>
                  </li>
                  <li data-filter-tags="running">
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-block px-3 py-2 border-0 rounded-3 text-start"
                    >
                      <span className="d-block fs-lg text-truncate">
                        Grid-scale storage economics, 2024–2026
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2 mt-1">
                        <span className="legend-dot legend-dot-sm bg-cat-amber" aria-hidden="true" />
                        <span className="fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Running · 18 of 40 sources
                          </bdi>
                        </span>
                      </span>
                    </button>
                  </li>
                  <li data-filter-tags="running">
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-block px-3 py-2 border-0 rounded-3 text-start"
                    >
                      <span className="d-block fs-lg text-truncate">
                        Peer review of the retention cohort study
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2 mt-1">
                        <span className="legend-dot legend-dot-sm bg-cat-amber" aria-hidden="true" />
                        <span className="fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Running · 9 of 25 sources
                          </bdi>
                        </span>
                      </span>
                    </button>
                  </li>
                  <li data-filter-tags="done">
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-block px-3 py-2 border-0 rounded-3 text-start"
                    >
                      <span className="d-block fs-lg text-truncate">
                        Who is actually buying vertical AI agents
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2 mt-1">
                        <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                        <span className="fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Completed · 36 sources · 6m 40s
                          </bdi>
                        </span>
                      </span>
                    </button>
                  </li>
                  <li data-filter-tags="done">
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-block px-3 py-2 border-0 rounded-3 text-start"
                    >
                      <span className="d-block fs-lg text-truncate">
                        Seed-to-Series-A benchmarks in the Nordics
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2 mt-1">
                        <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                        <span className="fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Completed · 51 sources · 11m 05s
                          </bdi>
                        </span>
                      </span>
                    </button>
                  </li>
                  <li data-filter-tags="done">
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-block px-3 py-2 border-0 rounded-3 text-start"
                    >
                      <span className="d-block fs-lg text-truncate">
                        Supply-chain attacks on package registries
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2 mt-1">
                        <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                        <span className="fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Completed · 29 sources · 5m 18s
                          </bdi>
                        </span>
                      </span>
                    </button>
                  </li>
                  <li data-filter-tags="done">
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-block px-3 py-2 border-0 rounded-3 text-start"
                    >
                      <span className="d-block fs-lg text-truncate">
                        Does spaced repetition survive contact with adults
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2 mt-1">
                        <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                        <span className="fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Completed · 23 sources · 4m 02s
                          </bdi>
                        </span>
                      </span>
                    </button>
                  </li>
                </ul>
                <p className="fs-lg text-muted-2 text-center py-5 mb-0 d-none" data-search-empty="">
                  Nothing matches that search.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ========== Pane 2 — the open research run ========== */}
        <section
          className="card flex-fill min-w-0 mb-0 overflow-hidden"
          aria-labelledby="deepRunTitle"
          data-view-switch=""
        >
          <div className="px-3 px-md-4 py-3 border-b-soft flex-shrink-0">
            <div className="d-flex align-items-center gap-2 mb-3">
              <button
                type="button"
                className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-xl-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#deepListPane"
                aria-controls="deepListPane"
                aria-label="Show research list"
              >
                <i className="flip-rtl" data-lucide="arrow-left" aria-hidden="true" />
              </button>
              <div className="flex-grow-1 min-w-0">
                <h2 id="deepRunTitle" className="fs-5 fw-semibold text-title text-truncate mb-0">
                  Impact of the EU AI Act on mid-market SaaS
                </h2>
                <p className="fs-md text-muted-2 text-truncate mb-0">
                  <bdi>
                    Completed 03 Sep 2026 · 42 sources · 64 claims
                  </bdi>
                </p>
              </div>
              <button
                type="button"
                className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                aria-label="Share this research"
                title="Share this research"
              >
                <i data-lucide="share-2" aria-hidden="true" />
              </button>
              <div className="dropdown flex-shrink-0">
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle"
                  id="deepRunMenu"
                  data-bs-toggle="dropdown"
                  data-dd-fixed=""
                  data-bs-offset="0,8"
                  aria-expanded="false"
                  aria-label="More research actions"
                >
                  <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                </button>
                {" "}
                <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="deepRunMenu">
                  <li>
                    <button type="button" className="dropdown-item">
                      <i data-lucide="download" aria-hidden="true" />
                      Export as PDF
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item">
                      <i data-lucide="file-text" aria-hidden="true" />
                      Export as Markdown
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item">
                      <i data-lucide="refresh-cw" aria-hidden="true" />
                      Run again with more sources
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item">
                      <i data-lucide="bookmark" aria-hidden="true" />
                      Save to library
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button type="button" className="dropdown-item dropdown-item-danger">
                      <i data-lucide="trash-2" aria-hidden="true" />
                      Delete research
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="nav nav-pills seg-toggle d-inline-flex flex-nowrap mw-100 gap-1 p-1 rounded-pill bg-soft overflow-x-auto scrollbar-none"
              role="group"
              aria-label="Research view"
            >
              <button type="button" className="nav-link active fw-medium" data-view-target="report" aria-pressed="true">
                Report
              </button>
              <button type="button" className="nav-link fw-medium" data-view-target="sources" aria-pressed="false">
                Sources
              </button>
              <button type="button" className="nav-link fw-medium" data-view-target="activity" aria-pressed="false">
                Activity
              </button>
            </div>
          </div>
          <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin px-3 px-md-4 py-5">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-xxl-10">
                {/* ===== Report ===== */}
                <div data-view-panel="report">
                  <div className="bg-soft rounded-4 p-4 mb-5">
                    <p className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked mb-2">
                      Brief
                    </p>
                    <p className="lh-lg text-body-2 mb-0">
                      What does the EU AI Act actually require of a mid-market SaaS vendor selling into the EU, what will it cost in the first year, and what has to happen before the next launch?
                    </p>
                  </div>
                  <h3 className="fs-4 fw-semibold text-title mb-3">
                    Key findings
                  </h3>
                  <ol className="lh-lg text-body-2 ps-3 mb-5">
                    <li className="mb-3">
                      Most mid-market SaaS lands in the
                      {" "}
                      <strong className="text-title">
                        limited-risk
                      </strong>
                      {" "}
                      tier, where the obligation is transparency rather than conformity assessment.
                      <sup>
                        <a href="#deepSource1" className="text-brand text-decoration-none">
                          1
                        </a>
                      </sup>
                    </li>
                    <li className="mb-3">
                      The trap is Article 25: ship a feature that materially changes a third-party model's purpose and you become the
                      {" "}
                      <strong className="text-title">
                        provider
                      </strong>
                      , not the deployer.
                      <sup>
                        <a href="#deepSource2" className="text-brand text-decoration-none">
                          2
                        </a>
                      </sup>
                    </li>
                    <li className="mb-3">
                      First-year cost clusters at
                      {" "}
                      <bdi>
                        €65,000–€180,000
                      </bdi>
                      , and roughly two thirds of it is documentation work rather than engineering.
                      <sup>
                        <a href="#deepSource3" className="text-brand text-decoration-none">
                          3
                        </a>
                      </sup>
                    </li>
                    <li>
                      Two of the four harmonised standards vendors cite in their marketing are still drafts, so “standards-aligned” claims are currently unverifiable.
                      <sup>
                        <a href="#deepSource4" className="text-brand text-decoration-none">
                          4
                        </a>
                      </sup>
                    </li>
                  </ol>
                  <h3 className="fs-4 fw-semibold text-title mb-3">
                    Where the obligations actually land
                  </h3>
                  <p className="lh-lg text-body-2">
                    Classification is done per
                    {" "}
                    <em>
                      system
                    </em>
                    , not per company, and the tier decides everything that follows. A support summariser and a CV-ranking feature can sit in the same product and land in different tiers, which is why a single company-wide answer is usually wrong.
                    <sup>
                      <a href="#deepSource1" className="text-brand text-decoration-none">
                        1
                      </a>
                    </sup>
                  </p>
                  <div className="table-responsive mb-5">
                    <table className="table align-middle mb-0">
                      <caption className="visually-hidden">
                        Obligation tiers and what each requires
                      </caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            Tier
                          </th>
                          <th scope="col">
                            Typical feature
                          </th>
                          <th scope="col">
                            What is required
                          </th>
                          <th scope="col" className="text-end">
                            Deadline
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" className="fw-medium">
                            High
                          </th>
                          <td>
                            CV ranking, credit scoring
                          </td>
                          <td>
                            Conformity assessment, logging, human oversight
                          </td>
                          <td className="text-end">
                            <bdi>
                              02 Aug 2026
                            </bdi>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="fw-medium">
                            Limited
                          </th>
                          <td>
                            Chat assistants, summarisers
                          </td>
                          <td>
                            Disclosure that the output is machine-generated
                          </td>
                          <td className="text-end">
                            <bdi>
                              02 Aug 2026
                            </bdi>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="fw-medium">
                            Minimal
                          </th>
                          <td>
                            Spam filters, search ranking
                          </td>
                          <td>
                            Voluntary codes only
                          </td>
                          <td className="text-end">
                            —
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 className="fs-4 fw-semibold text-title mb-3">
                    What it costs
                  </h3>
                  <p className="lh-lg text-body-2">
                    Survey data across 240 vendors puts first-year compliance at
                    {" "}
                    <bdi>
                      €65,000
                    </bdi>
                    {" "}for a limited-risk product and up to{" "}
                    <bdi>
                      €180,000
                    </bdi>
                    {" "}
                    where a single high-risk feature drags the whole assessment with it.
                    <sup>
                      <a href="#deepSource3" className="text-brand text-decoration-none">
                        3
                      </a>
                    </sup>
                    {" "}
                    The figures are self-reported, so the upper tail is soft — but the split is consistent everywhere: documentation, technical files and post-market monitoring outweigh code changes roughly two to one.
                    <sup>
                      <a href="#deepSource6" className="text-brand text-decoration-none">
                        6
                      </a>
                    </sup>
                  </p>
                  <ul className="lh-lg text-body-2 ps-3 mb-5">
                    <li className="mb-3">
                      <strong className="text-title">
                        Documentation
                      </strong>
                      {" "}
                      — technical file, risk register, data-governance notes. Ongoing, not one-off.
                    </li>
                    <li className="mb-3">
                      <strong className="text-title">
                        Engineering
                      </strong>
                      {" "}
                      — output labelling, log retention, an oversight path a human can actually use.
                    </li>
                    <li>
                      <strong className="text-title">
                        Legal review
                      </strong>
                      {" "}
                      — one pass on classification, one on the DPA and sub-processor chain.
                    </li>
                  </ul>
                  <h3 className="fs-4 fw-semibold text-title mb-3">
                    What to do before the next launch
                  </h3>
                  <ol className="lh-lg text-body-2 ps-3 mb-5">
                    <li className="mb-3">
                      Classify every AI-touching feature separately and write the reasoning down. The reasoning is the artefact an authority asks for, not the conclusion.
                      <sup>
                        <a href="#deepSource1" className="text-brand text-decoration-none">
                          1
                        </a>
                      </sup>
                    </li>
                    <li className="mb-3">
                      Check Article 25 against your own fine-tuning and prompt-chaining. This is where mid-market vendors become providers without noticing.
                      <sup>
                        <a href="#deepSource2" className="text-brand text-decoration-none">
                          2
                        </a>
                      </sup>
                    </li>
                    <li className="mb-3">
                      Confirm which supervisory authority applies in your launch countries — eleven member states have designated one, the rest default to their DPA.
                      <sup>
                        <a href="#deepSource5" className="text-brand text-decoration-none">
                          5
                        </a>
                      </sup>
                    </li>
                    <li>
                      Hold off on “standards-aligned” marketing until the two draft standards are published.
                      <sup>
                        <a href="#deepSource4" className="text-brand text-decoration-none">
                          4
                        </a>
                      </sup>
                    </li>
                  </ol>
                  <div className="pt-4 border-t-soft">
                    <p className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked mb-2">
                      Confidence
                    </p>
                    <p className="fs-lg lh-lg text-muted-2 mb-0">
                      High on obligations, medium on cost. Every obligation above traces to the consolidated text or Commission guidance. The cost range rests on one self-reported survey and a working paper whose three case studies are all larger than mid-market, so treat it as an order of magnitude rather than a budget.
                      <sup>
                        <a href="#deepSource3" className="text-brand text-decoration-none">
                          3
                        </a>
                      </sup>
                      <sup>
                        <a href="#deepSource6" className="text-brand text-decoration-none">
                          6
                        </a>
                      </sup>
                    </p>
                  </div>
                </div>
                {/* ===== Sources ===== */}
                {" "}
                <div className="d-none" data-view-panel="sources">
                  <div className="d-flex flex-wrap align-items-baseline gap-2 mb-2">
                    <h3 className="fs-4 fw-semibold text-title mb-0 me-auto">
                      Sources read
                    </h3>
                    <span className="fs-xs text-muted-2">
                      <bdi>
                        4 primary · 3 secondary · 1 tertiary
                      </bdi>
                    </span>
                  </div>
                  <ol className="list-unstyled mb-4">
                    <li id="deepSource1" className="d-flex gap-3 py-4 border-b-soft">
                      <span className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked flex-shrink-0 pt-1">
                        <bdi>
                          01
                        </bdi>
                      </span>
                      <div className="flex-grow-1 min-w-0">
                        <div className="d-flex align-items-baseline gap-3">
                          <a
                            href="#"
                            className="flex-grow-1 min-w-0 fw-medium text-title text-truncate text-decoration-none"
                          >
                            Regulation (EU) 2024/1689 — consolidated text
                          </a>
                          <span className="fs-xs text-muted-2 flex-shrink-0">
                            <bdi>
                              Primary · 9 cites
                            </bdi>
                          </span>
                        </div>
                        <p className="fs-xs text-muted-2 text-truncate mb-2">
                          <bdi>
                            eur-lex.europa.eu · 12 Mar 2026
                          </bdi>
                        </p>
                        <p className="fs-lg lh-lg text-body-2 mb-0">
                          The Act itself. Articles 6 and 51 carry the classification tests every other source paraphrases.
                        </p>
                      </div>
                    </li>
                    <li id="deepSource2" className="d-flex gap-3 py-4 border-b-soft">
                      <span className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked flex-shrink-0 pt-1">
                        <bdi>
                          02
                        </bdi>
                      </span>
                      <div className="flex-grow-1 min-w-0">
                        <div className="d-flex align-items-baseline gap-3">
                          <a
                            href="#"
                            className="flex-grow-1 min-w-0 fw-medium text-title text-truncate text-decoration-none"
                          >
                            Guidance on general-purpose AI obligations
                          </a>
                          <span className="fs-xs text-muted-2 flex-shrink-0">
                            <bdi>
                              Primary · 6 cites
                            </bdi>
                          </span>
                        </div>
                        <p className="fs-xs text-muted-2 text-truncate mb-2">
                          <bdi>
                            digital-strategy.ec.europa.eu · 04 Feb 2026
                          </bdi>
                        </p>
                        <p className="fs-lg lh-lg text-body-2 mb-0">
                          Commission guidance on where a deployer becomes a provider — the distinction most product teams get wrong.
                        </p>
                      </div>
                    </li>
                    <li id="deepSource3" className="d-flex gap-3 py-4 border-b-soft">
                      <span className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked flex-shrink-0 pt-1">
                        <bdi>
                          03
                        </bdi>
                      </span>
                      <div className="flex-grow-1 min-w-0">
                        <div className="d-flex align-items-baseline gap-3">
                          <a
                            href="#"
                            className="flex-grow-1 min-w-0 fw-medium text-title text-truncate text-decoration-none"
                          >
                            Mid-market compliance costs: a survey of 240 vendors
                          </a>
                          <span className="fs-xs text-muted-2 flex-shrink-0">
                            <bdi>
                              Secondary · 5 cites
                            </bdi>
                          </span>
                        </div>
                        <p className="fs-xs text-muted-2 text-truncate mb-2">
                          <bdi>
                            cepr.org · 28 Jan 2026
                          </bdi>
                        </p>
                        <p className="fs-lg lh-lg text-body-2 mb-0">
                          Survey data behind the €65k–€180k first-year estimate. Self-reported, so treat the tail with care.
                        </p>
                      </div>
                    </li>
                    <li id="deepSource4" className="d-flex gap-3 py-4 border-b-soft">
                      <span className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked flex-shrink-0 pt-1">
                        <bdi>
                          04
                        </bdi>
                      </span>
                      <div className="flex-grow-1 min-w-0">
                        <div className="d-flex align-items-baseline gap-3">
                          <a
                            href="#"
                            className="flex-grow-1 min-w-0 fw-medium text-title text-truncate text-decoration-none"
                          >
                            Harmonised standards status tracker
                          </a>
                          <span className="fs-xs text-muted-2 flex-shrink-0">
                            <bdi>
                              Primary · 4 cites
                            </bdi>
                          </span>
                        </div>
                        <p className="fs-xs text-muted-2 text-truncate mb-2">
                          <bdi>
                            cencenelec.eu · 19 Feb 2026
                          </bdi>
                        </p>
                        <p className="fs-lg lh-lg text-body-2 mb-0">
                          Which standards are published and which are still drafts. Two of the four cited in vendor marketing are not final.
                        </p>
                      </div>
                    </li>
                    <li id="deepSource5" className="d-flex gap-3 py-4 border-b-soft">
                      <span className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked flex-shrink-0 pt-1">
                        <bdi>
                          05
                        </bdi>
                      </span>
                      <div className="flex-grow-1 min-w-0">
                        <div className="d-flex align-items-baseline gap-3">
                          <a
                            href="#"
                            className="flex-grow-1 min-w-0 fw-medium text-title text-truncate text-decoration-none"
                          >
                            National supervisory authorities: designation status
                          </a>
                          <span className="fs-xs text-muted-2 flex-shrink-0">
                            <bdi>
                              Secondary · 3 cites
                            </bdi>
                          </span>
                        </div>
                        <p className="fs-xs text-muted-2 text-truncate mb-2">
                          <bdi>
                            aiact-tracker.eu · 22 Feb 2026
                          </bdi>
                        </p>
                        <p className="fs-lg lh-lg text-body-2 mb-0">
                          Eleven member states had named an authority at the time of writing; the rest default to their DPA.
                        </p>
                      </div>
                    </li>
                    <li id="deepSource6" className="d-flex gap-3 py-4 border-b-soft">
                      <span className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked flex-shrink-0 pt-1">
                        <bdi>
                          06
                        </bdi>
                      </span>
                      <div className="flex-grow-1 min-w-0">
                        <div className="d-flex align-items-baseline gap-3">
                          <a
                            href="#"
                            className="flex-grow-1 min-w-0 fw-medium text-title text-truncate text-decoration-none"
                          >
                            Conformity assessment in practice: three case studies
                          </a>
                          <span className="fs-xs text-muted-2 flex-shrink-0">
                            <bdi>
                              Secondary · 3 cites
                            </bdi>
                          </span>
                        </div>
                        <p className="fs-xs text-muted-2 text-truncate mb-2">
                          <bdi>
                            ssrn.com · 09 Dec 2025
                          </bdi>
                        </p>
                        <p className="fs-lg lh-lg text-body-2 mb-0">
                          Working paper. Useful for the timeline estimate, though all three cases are German and larger than mid-market.
                        </p>
                      </div>
                    </li>
                    <li id="deepSource7" className="d-flex gap-3 py-4 border-b-soft">
                      <span className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked flex-shrink-0 pt-1">
                        <bdi>
                          07
                        </bdi>
                      </span>
                      <div className="flex-grow-1 min-w-0">
                        <div className="d-flex align-items-baseline gap-3">
                          <a
                            href="#"
                            className="flex-grow-1 min-w-0 fw-medium text-title text-truncate text-decoration-none"
                          >
                            SaaS vendors delay EU launches over Act uncertainty
                          </a>
                          <span className="fs-xs text-muted-2 flex-shrink-0">
                            <bdi>
                              Tertiary · 1 cite
                            </bdi>
                          </span>
                        </div>
                        <p className="fs-xs text-muted-2 text-truncate mb-2">
                          <bdi>
                            sifted.eu · 17 Feb 2026
                          </bdi>
                        </p>
                        <p className="fs-lg lh-lg text-body-2 mb-0">
                          Trade reporting. Corroborates the procurement-friction claim but adds no primary data.
                        </p>
                      </div>
                    </li>
                    <li id="deepSource8" className="d-flex gap-3 py-4">
                      <span className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked flex-shrink-0 pt-1">
                        <bdi>
                          08
                        </bdi>
                      </span>
                      <div className="flex-grow-1 min-w-0">
                        <div className="d-flex align-items-baseline gap-3">
                          <a
                            href="#"
                            className="flex-grow-1 min-w-0 fw-medium text-title text-truncate text-decoration-none"
                          >
                            Enforcement penalty schedule, annexed
                          </a>
                          <span className="fs-xs text-muted-2 flex-shrink-0">
                            <bdi>
                              Primary · 2 cites
                            </bdi>
                          </span>
                        </div>
                        <p className="fs-xs text-muted-2 text-truncate mb-2">
                          <bdi>
                            eur-lex.europa.eu · 12 Mar 2026
                          </bdi>
                        </p>
                        <p className="fs-lg lh-lg text-body-2 mb-0">
                          Annex to the Act. The 3% / 1.5% of global turnover figures come from here, not from commentary.
                        </p>
                      </div>
                    </li>
                  </ol>
                  <p className="fs-lg lh-lg text-muted-2 mb-0">
                    A further
                    {" "}
                    <bdi>
                      34
                    </bdi>
                    {" "}
                    documents were opened and discarded — mostly commentary that restated one of the sources above without adding data.
                  </p>
                </div>
                {" "}
                {/* ===== Activity ===== */}
                {" "}
                <div className="d-none" data-view-panel="activity">
                  <div className="d-flex flex-wrap align-items-baseline gap-2 mb-4">
                    <h3 className="fs-4 fw-semibold text-title mb-0 me-auto">
                      How this run was carried out
                    </h3>
                    <span className="fs-xs text-muted-2">
                      <bdi>
                        6 steps · 8m 12s
                      </bdi>
                    </span>
                  </div>
                  <ol className="timeline timeline-sm list-unstyled mb-0">
                    <li className="timeline-item pb-5">
                      <span
                        className="timeline-node icon-box icon-box-sm rounded-circle bg-soft border-soft text-muted-2"
                        aria-hidden="true"
                      >
                        <i data-lucide="target" />
                      </span>
                      <div className="d-flex flex-wrap align-items-baseline gap-2 mb-1">
                        <h3 className="fs-6 fw-semibold text-title mb-0">
                          Question refined
                        </h3>
                        <bdi className="fs-xs text-muted-2">
                          1m
                        </bdi>
                      </div>
                      <p className="fs-lg lh-lg text-body-2 mb-0">
                        Narrowed “impact on SaaS” to obligations, cost and timeline for vendors under 250 staff selling into the EU.
                      </p>
                    </li>
                    {" "}
                    <li className="timeline-item pb-5">
                      <span
                        className="timeline-node icon-box icon-box-sm rounded-circle bg-soft border-soft text-muted-2"
                        aria-hidden="true"
                      >
                        <i data-lucide="list-tree" />
                      </span>
                      <div className="d-flex flex-wrap align-items-baseline gap-2 mb-1">
                        <h3 className="fs-6 fw-semibold text-title mb-0">
                          Search plan drafted
                        </h3>
                        <bdi className="fs-xs text-muted-2">
                          1m
                        </bdi>
                      </div>
                      <p className="fs-lg lh-lg text-body-2 mb-0">
                        Eleven queries across the legal text, Commission guidance, standards bodies and trade press, deliberately weighted to primary sources.
                      </p>
                    </li>
                    {" "}
                    <li className="timeline-item pb-5">
                      <span
                        className="timeline-node icon-box icon-box-sm rounded-circle bg-soft border-soft text-muted-2"
                        aria-hidden="true"
                      >
                        <i data-lucide="globe" />
                      </span>
                      <div className="d-flex flex-wrap align-items-baseline gap-2 mb-1">
                        <h3 className="fs-6 fw-semibold text-title mb-0">
                          Sources gathered
                        </h3>
                        <bdi className="fs-xs text-muted-2">
                          3m 20s
                        </bdi>
                      </div>
                      <p className="fs-lg lh-lg text-body-2 mb-0">
                        Read 42 documents, discarded 17 for being commentary on commentary. Two paywalled papers were replaced with their preprints.
                      </p>
                    </li>
                    {" "}
                    <li className="timeline-item pb-5">
                      <span
                        className="timeline-node icon-box icon-box-sm rounded-circle bg-soft border-soft text-muted-2"
                        aria-hidden="true"
                      >
                        <i data-lucide="scan-search" />
                      </span>
                      <div className="d-flex flex-wrap align-items-baseline gap-2 mb-1">
                        <h3 className="fs-6 fw-semibold text-title mb-0">
                          Claims extracted
                        </h3>
                        <bdi className="fs-xs text-muted-2">
                          1m 45s
                        </bdi>
                      </div>
                      <p className="fs-lg lh-lg text-body-2 mb-0">
                        Pulled 64 individual claims and tagged each with the source that carries it, so every figure in the report traces back to a document.
                      </p>
                    </li>
                    {" "}
                    <li className="timeline-item pb-5">
                      <span
                        className="timeline-node icon-box icon-box-sm rounded-circle bg-soft border-soft text-muted-2"
                        aria-hidden="true"
                      >
                        <i data-lucide="scale" />
                      </span>
                      <div className="d-flex flex-wrap align-items-baseline gap-2 mb-1">
                        <h3 className="fs-6 fw-semibold text-title mb-0">
                          Contradictions resolved
                        </h3>
                        <bdi className="fs-xs text-muted-2">
                          40s
                        </bdi>
                      </div>
                      <p className="fs-lg lh-lg text-body-2 mb-0">
                        Three sources disagreed on the deadline for high-risk systems. Went with the consolidated text over the two trackers.
                      </p>
                    </li>
                    {" "}
                    <li className="timeline-item pb-0">
                      <span
                        className="timeline-node icon-box icon-box-sm rounded-circle bg-soft border-soft text-muted-2"
                        aria-hidden="true"
                      >
                        <i data-lucide="notebook-pen" />
                      </span>
                      <div className="d-flex flex-wrap align-items-baseline gap-2 mb-1">
                        <h3 className="fs-6 fw-semibold text-title mb-0">
                          Report composed
                        </h3>
                        <bdi className="fs-xs text-muted-2">
                          1m 27s
                        </bdi>
                      </div>
                      <p className="fs-lg lh-lg text-body-2 mb-0">
                        Drafted, then re-checked every citation marker against the source list before returning.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* Follow-up */}
          <div className="px-3 px-md-4 pb-4 flex-shrink-0">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-xxl-10">
                <form noValidate>
                  <div className="d-flex align-items-center gap-2 border-soft rounded-pill shadow-sm ps-4 pe-2 py-2">
                    <label htmlFor="deepFollowUp" className="visually-hidden">
                      Ask a follow-up about this research
                    </label>
                    <input
                      type="text"
                      className="form-control border-0 bg-transparent px-0"
                      id="deepFollowUp"
                      name="follow-up"
                      placeholder="Ask a follow-up — grounded in these 42 sources"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary btn-18 rounded-circle flex-shrink-0"
                      aria-label="Send follow-up"
                    >
                      <i className="flip-rtl" data-lucide="send-horizontal" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    <button type="button" className="btn btn-outline-soft btn-sm rounded-pill">
                      Which features are high risk?
                    </button>
                    <button type="button" className="btn btn-outline-soft btn-sm rounded-pill d-none d-md-inline-block">
                      Draft the disclosure copy
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}
