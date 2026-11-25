/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Think Longer",
  description: "Think Longer — an extended-reasoning AI assistant workspace built with Bootstrap 5, CSS variables and the Vionex design system.",
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
          Think Longer
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
              Think Longer
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Think Longer workspace ===== */}
      <section className="app-workspace d-flex flex-fill gap-3" aria-label="Think Longer assistant">
        {/* ========== Pane 1 — saved chats (drawer under xl) ========== */}
        <section
          className="offcanvas-xl offcanvas-start app-pane app-pane-lg d-flex flex-column"
          tabIndex="-1"
          id="thinkListPane"
          aria-labelledby="thinkListTitle"
        >
          <div className="offcanvas-body d-flex flex-fill min-h-0 p-3 p-xl-0 overflow-hidden" data-search-scope="">
            <div className="card flex-fill min-w-0 mb-0 overflow-hidden">
              <div className="px-3 pt-4 pb-3 flex-shrink-0">
                <div className="d-flex align-items-center gap-2 mb-4">
                  <h2 id="thinkListTitle" className="fs-5 fw-semibold text-title mb-0 me-auto">
                    Chats
                  </h2>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                    aria-label="Start a new chat"
                    title="Start a new chat"
                  >
                    <i data-lucide="square-pen" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-xl-none"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#thinkListPane"
                    aria-label="Close chats"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </div>
                <div className="field-icon mb-3">
                  <i className="icon-18" data-lucide="search" aria-hidden="true" />
                  {" "}
                  <label htmlFor="thinkSearch" className="visually-hidden">
                    Search chats
                  </label>
                  {" "}
                  <input
                    type="search"
                    className="form-control"
                    id="thinkSearch"
                    name="think-search"
                    placeholder="Search chats"
                    data-search-input=""
                  />
                </div>
                <div
                  className="nav nav-pills seg-toggle d-inline-flex flex-nowrap mw-100 gap-1 p-1 rounded-pill bg-soft overflow-x-auto scrollbar-none"
                  role="group"
                  aria-label="Filter chats"
                >
                  <button type="button" className="nav-link active fw-medium" data-filter="all" aria-pressed="true">
                    All
                  </button>
                  <button type="button" className="nav-link fw-medium" data-filter="pinned" aria-pressed="false">
                    Pinned
                  </button>
                  <button type="button" className="nav-link fw-medium" data-filter="archived" aria-pressed="false">
                    Archived
                  </button>
                </div>
              </div>
              <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin px-2 pb-4">
                <p className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked px-3 mb-2">
                  Recent
                </p>
                <ul className="list-unstyled mb-0">
                  <li data-filter-tags="open pinned">
                    <button
                      type="button"
                      aria-current="true"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 px-3 py-2 border-0 rounded-3 text-start active"
                    >
                      <span className="flex-grow-1 min-w-0 fs-lg text-truncate">
                        Pricing model for the EU tier
                      </span>
                      {" "}
                      <bdi className="fs-xs text-muted-2 flex-shrink-0">
                        09:42
                      </bdi>
                    </button>
                  </li>
                  <li data-filter-tags="open pinned">
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 px-3 py-2 border-0 rounded-3 text-start"
                    >
                      <span className="flex-grow-1 min-w-0 fs-lg text-truncate">
                        Retry backoff keeps hammering the queue
                      </span>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0">
                        08:20
                      </bdi>
                    </button>
                  </li>
                  <li data-filter-tags="open">
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 px-3 py-2 border-0 rounded-3 text-start"
                    >
                      <span className="flex-grow-1 min-w-0 fs-lg text-truncate">
                        Rewrite the onboarding email
                      </span>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0">
                        07:55
                      </bdi>
                    </button>
                  </li>
                  <li data-filter-tags="open">
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 px-3 py-2 border-0 rounded-3 text-start"
                    >
                      <span className="flex-grow-1 min-w-0 fs-lg text-truncate">
                        Postgres or ClickHouse for the events table
                      </span>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0">
                        Yesterday
                      </bdi>
                    </button>
                  </li>
                  <li data-filter-tags="open">
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 px-3 py-2 border-0 rounded-3 text-start"
                    >
                      <span className="flex-grow-1 min-w-0 fs-lg text-truncate">
                        Summarise the Q3 board deck
                      </span>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0">
                        Yesterday
                      </bdi>
                    </button>
                  </li>
                  <li data-filter-tags="open">
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 px-3 py-2 border-0 rounded-3 text-start"
                    >
                      <span className="flex-grow-1 min-w-0 fs-lg text-truncate">
                        Threat model for the public API
                      </span>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0">
                        Tue
                      </bdi>
                    </button>
                  </li>
                  <li data-filter-tags="archived">
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 px-3 py-2 border-0 rounded-3 text-start"
                    >
                      <span className="flex-grow-1 min-w-0 fs-lg text-truncate">
                        Refactor plan for the billing service
                      </span>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0">
                        Mon
                      </bdi>
                    </button>
                  </li>
                  <li data-filter-tags="archived">
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 px-3 py-2 border-0 rounded-3 text-start"
                    >
                      <span className="flex-grow-1 min-w-0 fs-lg text-truncate">
                        Explain the CAP theorem simply
                      </span>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0">
                        12 Aug
                      </bdi>
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
        {/* ========== Pane 2 — the open chat ========== */}
        <section className="card flex-fill min-w-0 mb-0 overflow-hidden" aria-labelledby="thinkThreadTitle">
          <div className="d-flex align-items-center gap-2 px-3 px-md-4 py-3 border-b-soft flex-shrink-0">
            <button
              type="button"
              className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-xl-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#thinkListPane"
              aria-controls="thinkListPane"
              aria-label="Show chats"
            >
              <i className="flip-rtl" data-lucide="arrow-left" aria-hidden="true" />
            </button>
            <div className="flex-grow-1 min-w-0">
              <h2 id="thinkThreadTitle" className="fs-5 fw-semibold text-title text-truncate mb-0">
                Pricing model for the EU tier
              </h2>
              <p className="fs-md text-muted-2 text-truncate mb-0">
                <bdi>
                  Extended reasoning · 1m 36s of thinking
                </bdi>
              </p>
            </div>
            <button
              type="button"
              className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
              aria-label="Share this chat"
              title="Share this chat"
            >
              <i data-lucide="share-2" aria-hidden="true" />
            </button>
            <div className="dropdown flex-shrink-0">
              <button
                type="button"
                className="btn btn-ghost btn-18 rounded-circle"
                id="thinkThreadMenu"
                data-bs-toggle="dropdown"
                data-dd-fixed=""
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="More chat actions"
              >
                <i data-lucide="ellipsis-vertical" aria-hidden="true" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="thinkThreadMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="pin" aria-hidden="true" />
                    Pin chat
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="pencil" aria-hidden="true" />
                    Rename
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" aria-hidden="true" />
                    Export as Markdown
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="archive" aria-hidden="true" />
                    Archive
                  </button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button type="button" className="dropdown-item dropdown-item-danger">
                    <i data-lucide="trash-2" aria-hidden="true" />
                    Delete chat
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* Conversation. The column is capped with the Bootstrap grid rather
             than a width of ours, so the measure stays readable on a wide
             screen and goes full-bleed on a narrow one. */}
          <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin px-3 px-md-4 py-5">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-xxl-10">
                <ol className="list-unstyled d-flex flex-column gap-5 mb-0">
                  {/* Turn 1 — the reader asks */}
                  <li className="msg-row msg-out align-self-end">
                    <div className="msg-bubble px-4 py-3 bg-soft text-body-2">
                      <p className="lh-lg mb-0">
                        We open the EU region next quarter. Should the Growth tier be priced per seat or per workspace? Take your time and show me the reasoning.
                      </p>
                    </div>
                  </li>
                  {/* Turn 1 — the assistant answers */}
                  <li>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="icon-box icon-box-sm rounded-circle border-soft text-brand" aria-hidden="true">
                        <i data-lucide="sparkles" />
                      </span>
                      <span className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked">
                        Vionex
                      </span>
                    </div>
                    <button
                      className="btn btn-ghost btn-sm rounded-pill d-inline-flex align-items-center gap-2 px-2 mb-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#thinkTrace1"
                      aria-expanded="false"
                      aria-controls="thinkTrace1"
                    >
                      <span className="fs-lg text-muted-2">
                        Thought for
                        {" "}
                        <bdi>
                          1m 12s
                        </bdi>
                      </span>
                      <i className="icon-14" data-lucide="chevron-down" aria-hidden="true" />
                    </button>
                    {" "}
                    <div className="collapse" id="thinkTrace1">
                      <div className="bg-soft rounded-4 p-4 mb-4">
                        <p className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked mb-3">
                          Reasoning
                        </p>
                        <p className="fs-lg lh-lg text-muted-2 mb-3">
                          Per seat and per workspace differ in one thing that matters: who feels the cost of adding a teammate. Everything else follows from that.
                        </p>
                        <p className="fs-lg lh-lg text-muted-2 mb-3">
                          Three of the five EU competitors moved off per-seat in the last two years, and all three cited procurement friction rather than revenue.
                        </p>
                        <p className="fs-lg lh-lg text-muted-2 mb-3">
                          Modelled the last twelve months of accounts. Per workspace, the top decile pays about 19% less than today; the median pays 6% more.
                        </p>
                        <p className="fs-lg lh-lg text-muted-2 mb-3">
                          A seat count that changes mid-period has to be reconciled across 27 VAT regimes. Finance quoted roughly a day a month to keep that clean.
                        </p>
                        <p className="fs-lg lh-lg text-muted-2 mb-0">
                          So: a workspace base plus a soft seat band keeps the procurement story simple without handing our largest accounts a discount they never asked for.
                        </p>
                      </div>
                    </div>
                    <div id="thinkAnswer1">
                      <p className="lh-lg text-body-2">
                        Price the Growth tier
                        {" "}
                        <strong className="text-title">
                          per workspace, with a seat band
                        </strong>
                        {" "}
                        rather than a pure per-seat line. Per seat is easier to model and harder to sell: in the EU your buyer is usually procurement, and a number that moves every month is a number they have to re-approve every month.
                      </p>
                      <h3 className="fs-5 fw-semibold text-title mt-5 mb-3">
                        What the numbers say
                      </h3>
                      <div className="table-responsive">
                        <table className="table align-middle mb-0">
                          <caption className="visually-hidden">
                            Modelled annual revenue per account by pricing model
                          </caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                Account size
                              </th>
                              <th scope="col" className="text-end">
                                Per seat
                              </th>
                              <th scope="col" className="text-end">
                                Per workspace
                              </th>
                              <th scope="col" className="text-end">
                                Change
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" className="fw-medium">
                                Small (1–9 seats)
                              </th>
                              <td className="text-end">
                                <bdi>
                                  €1,080
                                </bdi>
                              </td>
                              <td className="text-end">
                                <bdi>
                                  €1,188
                                </bdi>
                              </td>
                              <td className="text-end text-success">
                                <bdi>
                                  +10%
                                </bdi>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="fw-medium">
                                Mid (10–49 seats)
                              </th>
                              <td className="text-end">
                                <bdi>
                                  €5,400
                                </bdi>
                              </td>
                              <td className="text-end">
                                <bdi>
                                  €5,724
                                </bdi>
                              </td>
                              <td className="text-end text-success">
                                <bdi>
                                  +6%
                                </bdi>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="fw-medium">
                                Large (50+ seats)
                              </th>
                              <td className="text-end">
                                <bdi>
                                  €21,600
                                </bdi>
                              </td>
                              <td className="text-end">
                                <bdi>
                                  €17,496
                                </bdi>
                              </td>
                              <td className="text-end text-danger">
                                <bdi>
                                  −19%
                                </bdi>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h3 className="fs-5 fw-semibold text-title mt-5 mb-3">
                        Recommendation
                      </h3>
                      <ol className="lh-lg text-body-2 ps-3 mb-4">
                        <li className="mb-3">
                          Publish one workspace price per month, quoted excluding VAT, with the country rate applied at checkout.
                        </li>
                        <li className="mb-3">
                          Include
                          {" "}
                          <bdi>
                            25
                          </bdi>
                          {" "}seats. Above that, add a band rather than a per-head charge —{" "}
                          <bdi>
                            26–60
                          </bdi>
                          ,
                          {" "}
                          <bdi>
                            61–120
                          </bdi>
                          , then a conversation.
                        </li>
                        <li className="mb-3">
                          Keep annual billing at ten months. It is the only discount procurement asks for by name.
                        </li>
                        <li>
                          Grandfather existing per-seat accounts for a full renewal cycle so nobody discovers the change from an invoice.
                        </li>
                      </ol>
                      <p className="fs-lg lh-lg text-muted-2 mb-0">
                        The band is what protects the top-decile figure above. Without it the model hands your largest accounts a
                        {" "}
                        <bdi>
                          19%
                        </bdi>
                        {" "}
                        cut for doing nothing, which is the one outcome finance will not sign off.
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-1 mt-4" data-vote-group="">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        data-copy="#thinkAnswer1"
                        title="Copy answer"
                        aria-live="polite"
                      >
                        <span data-copy-label="">
                          <i className="icon-16" data-lucide="copy" aria-hidden="true" />
                          <span className="visually-hidden">
                            Copy answer
                          </span>
                        </span>
                        {" "}
                        <span className="d-none" data-copy-done="">
                          <i className="icon-16" data-lucide="check" aria-hidden="true" />
                          <span className="visually-hidden">
                            Copied
                          </span>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        aria-label="Think again"
                        title="Think again"
                      >
                        <i className="icon-16" data-lucide="refresh-cw" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        data-vote="up"
                        aria-label="Helpful answer"
                        title="Helpful"
                      >
                        <i className="icon-16" data-lucide="thumbs-up" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        data-vote="down"
                        aria-label="Unhelpful answer"
                        title="Not helpful"
                      >
                        <i className="icon-16" data-lucide="thumbs-down" aria-hidden="true" />
                      </button>
                      <span className="fs-md text-muted-2 ms-2 d-none" data-vote-thanks="">
                        Thanks — noted.
                      </span>
                    </div>
                  </li>
                  {/* Turn 2 — the reader asks */}
                  <li className="msg-row msg-out align-self-end">
                    <div className="msg-bubble px-4 py-3 bg-soft text-body-2">
                      <p className="lh-lg mb-0">
                        Give me the band rule as code so I can drop it into the billing service.
                      </p>
                    </div>
                  </li>
                  {/* Turn 2 — the assistant answers */}
                  <li>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="icon-box icon-box-sm rounded-circle border-soft text-brand" aria-hidden="true">
                        <i data-lucide="sparkles" />
                      </span>
                      <span className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked">
                        Vionex
                      </span>
                    </div>
                    <button
                      className="btn btn-ghost btn-sm rounded-pill d-inline-flex align-items-center gap-2 px-2 mb-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#thinkTrace2"
                      aria-expanded="false"
                      aria-controls="thinkTrace2"
                    >
                      <span className="fs-lg text-muted-2">
                        Thought for
                        {" "}
                        <bdi>
                          24s
                        </bdi>
                      </span>
                      <i className="icon-14" data-lucide="chevron-down" aria-hidden="true" />
                    </button>
                    {" "}
                    <div className="collapse" id="thinkTrace2">
                      <div className="bg-soft rounded-4 p-4 mb-4">
                        <p className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked mb-3">
                          Reasoning
                        </p>
                        <p className="fs-lg lh-lg text-muted-2 mb-3">
                          Edge cases first: zero seats, exactly 25, exactly 120, and one above the top band. Only the last needs a human, so it returns null rather than a price.
                        </p>
                        <p className="fs-lg lh-lg text-muted-2 mb-3">
                          A sorted table read top-down beats a chain of conditionals — a new band is then one row, not a new branch.
                        </p>
                        <p className="fs-lg lh-lg text-muted-2 mb-0">
                          Seat counts arrive from the provisioning webhook, so a non-integer or negative value has to fail loudly rather than fall through to the base price.
                        </p>
                      </div>
                    </div>
                    <div id="thinkAnswer2">
                      <p className="lh-lg text-body-2">
                        One sorted table, read top-down. Adding a band later is a new row rather than a new branch, and anything above the top band deliberately returns
                        {" "}
                        <code>
                          null
                        </code>
                        {" "}
                        so the caller routes it to sales instead of quietly under-charging.
                      </p>
                      <div className="bg-app border-soft rounded-4 overflow-hidden mt-4">
                        <div className="d-flex align-items-center justify-content-between px-3 py-2 border-b-soft">
                          <span className="fs-sm text-muted-2 font-monospace">
                            pricing/bands.js
                          </span>
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle"
                            data-copy="#thinkCodeBands"
                            title="Copy code"
                            aria-live="polite"
                          >
                            <span data-copy-label="">
                              <i className="icon-16" data-lucide="copy" aria-hidden="true" />
                              <span className="visually-hidden">
                                Copy code
                              </span>
                            </span>
                            {" "}
                            <span className="d-none" data-copy-done="">
                              <i className="icon-16" data-lucide="check" aria-hidden="true" />
                              <span className="visually-hidden">
                                Copied
                              </span>
                            </span>
                          </button>
                        </div>
                        <div className="d-flex overflow-x-auto">
                          <div
                            className="text-muted-2 text-end px-3 py-3 font-monospace fs-sm lh-lg user-select-none"
                            aria-hidden="true"
                          >
                            1
                            <br />
                            2
                            <br />
                            3
                            <br />
                            4
                            <br />
                            5
                            <br />
                            6
                            <br />
                            7
                            <br />
                            8
                            <br />
                            9
                            <br />
                            10
                            <br />
                            11
                            <br />
                            12
                          </div>
                          <pre
                            id="thinkCodeBands"
                            className="flex-grow-1 m-0 px-3 py-3 font-monospace fs-sm lh-lg text-body"
                          >
                            <span className="text-primary-soft">
                              {"const"}
                            </span>
                            {" BANDS = [\n  { maxSeats: "}
                            <span className="text-warning">
                              {"25"}
                            </span>
                            {",  cents: "}
                            <span className="text-warning">
                              {"9900"}
                            </span>
                            {"  },\n  { maxSeats: "}
                            <span className="text-warning">
                              {"60"}
                            </span>
                            {",  cents: "}
                            <span className="text-warning">
                              {"17900"}
                            </span>
                            {" },\n  { maxSeats: "}
                            <span className="text-warning">
                              {"120"}
                            </span>
                            {", cents: "}
                            <span className="text-warning">
                              {"29900"}
                            </span>
                            {" },\n]\n\n"}
                            <span className="text-primary-soft">
                              {"export function"}
                            </span>
                            {" workspacePrice(seats) {\n  "}
                            <span className="text-primary-soft">
                              {"if"}
                            </span>
                            {" (!Number.isInteger(seats) || seats < "}
                            <span className="text-warning">
                              {"1"}
                            </span>
                            {")\n    "}
                            <span className="text-primary-soft">
                              {"throw new"}
                            </span>
                            {" RangeError("}
                            <span className="text-success">
                              {"'seats must be a positive integer'"}
                            </span>
                            {")\n  "}
                            <span className="text-primary-soft">
                              {"const"}
                            </span>
                            {" band = BANDS.find(b => seats <= b.maxSeats)\n  "}
                            <span className="text-primary-soft">
                              {"return"}
                            </span>
                            {" band ? band.cents : "}
                            <span className="text-danger">
                              {"null"}
                            </span>
                            {"   "}
                            <span className="text-muted-2">
                              {"// null => talk to sales"}
                            </span>
                            {"\n}"}
                          </pre>
                        </div>
                      </div>
                      <p className="fs-lg lh-lg text-muted-2 mt-4 mb-0">
                        Prices are held in cents so nothing rounds twice, and VAT stays out of this function entirely — it belongs at checkout, where the billing country is actually known.
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-1 mt-4" data-vote-group="">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        data-copy="#thinkAnswer2"
                        title="Copy answer"
                        aria-live="polite"
                      >
                        <span data-copy-label="">
                          <i className="icon-16" data-lucide="copy" aria-hidden="true" />
                          <span className="visually-hidden">
                            Copy answer
                          </span>
                        </span>
                        {" "}
                        <span className="d-none" data-copy-done="">
                          <i className="icon-16" data-lucide="check" aria-hidden="true" />
                          <span className="visually-hidden">
                            Copied
                          </span>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        aria-label="Think again"
                        title="Think again"
                      >
                        <i className="icon-16" data-lucide="refresh-cw" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        data-vote="up"
                        aria-label="Helpful answer"
                        title="Helpful"
                      >
                        <i className="icon-16" data-lucide="thumbs-up" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        data-vote="down"
                        aria-label="Unhelpful answer"
                        title="Not helpful"
                      >
                        <i className="icon-16" data-lucide="thumbs-down" aria-hidden="true" />
                      </button>
                      <span className="fs-md text-muted-2 ms-2 d-none" data-vote-thanks="">
                        Thanks — noted.
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* Composer: the one surface on the page that carries a shadow. */}
          <div className="px-3 px-md-4 pb-4 flex-shrink-0">
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-xxl-10">
                <form noValidate>
                  <div className="border-soft rounded-4 shadow-sm p-2">
                    <label htmlFor="thinkComposer" className="visually-hidden">
                      Ask a question
                    </label>
                    {" "}
                    <textarea
                      className="form-control border-0 bg-transparent px-2 pt-2"
                      id="thinkComposer"
                      name="message"
                      rows="2"
                      placeholder="Ask anything…"
                    />
                    <div className="d-flex align-items-center gap-1 mt-1">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        aria-label="Attach a file"
                        title="Attach a file"
                      >
                        <i data-lucide="paperclip" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                        aria-label="Search the web while answering"
                        title="Search the web"
                      >
                        <i data-lucide="globe" aria-hidden="true" />
                      </button>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-ghost btn-sm rounded-pill d-inline-flex align-items-center gap-2 px-2"
                          id="thinkEffortMenu"
                          data-bs-toggle="dropdown"
                          data-dd-fixed=""
                          data-bs-offset="0,8"
                          aria-expanded="false"
                        >
                          <span className="fs-md text-muted-2">
                            Extended
                          </span>
                          <i className="icon-14" data-lucide="chevron-down" aria-hidden="true" />
                        </button>
                        {" "}
                        <ul className="dropdown-menu p-2" aria-labelledby="thinkEffortMenu">
                          <li>
                            <button type="button" className="dropdown-item">
                              Standard
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              Extended
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              Maximum
                            </button>
                          </li>
                        </ul>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-18 rounded-circle flex-shrink-0 ms-auto"
                        aria-label="Send message"
                      >
                        <i className="flip-rtl" data-lucide="send-horizontal" aria-hidden="true" />
                      </button>
                    </div>
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
