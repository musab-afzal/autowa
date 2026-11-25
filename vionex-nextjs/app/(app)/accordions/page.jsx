/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Accordions",
  description: "Vionex accordions — basic, flush, always-open, separated, nested and native disclosure variants with rich panel content, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Accordions
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item">
              Components
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Accordions
            </li>
          </ol>
        </nav>
      </div>
      <div className="row g-3 g-xl-4">
        {/* ===== Basic Accordion ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-basic">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-basic" className="fs-5 fw-bold text-title mb-1">
                  Basic Accordion
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  One panel at a time.
                  {" "}
                  <code>
                    data-bs-parent
                  </code>
                  {" "}
                  is what closes the previous one as the next opens.
                </p>
              </div>
              <div className="accordion" id="acBasic">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acBasicH1">
                    <button
                      className="accordion-button fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acBasicC1"
                      aria-expanded="true"
                      aria-controls="acBasicC1"
                    >
                      What is included in the workspace?
                    </button>
                  </h3>
                  <div id="acBasicC1" className="accordion-collapse collapse show" data-bs-parent="#acBasic">
                    <div className="accordion-body fs-md text-body-2">
                      Every dashboard in the suite, unlimited saved views and the full component library. Seats are counted per person, not per device.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acBasicH2">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acBasicC2"
                      aria-expanded="false"
                      aria-controls="acBasicC2"
                    >
                      How is usage measured?
                    </button>
                  </h3>
                  <div id="acBasicC2" className="accordion-collapse collapse" data-bs-parent="#acBasic">
                    <div className="accordion-body fs-md text-body-2">
                      By active seats at the end of each billing period. Adding someone mid-month is prorated; removing them credits the remainder.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acBasicH3">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acBasicC3"
                      aria-expanded="false"
                      aria-controls="acBasicC3"
                    >
                      Can I export my data?
                    </button>
                  </h3>
                  <div id="acBasicC3" className="accordion-collapse collapse" data-bs-parent="#acBasic">
                    <div className="accordion-body fs-md text-body-2">
                      At any time, in CSV or JSON, with no rate limit. An export of the whole workspace usually completes within a few minutes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Flush Accordion ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-flush">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-flush" className="fs-5 fw-bold text-title mb-1">
                  Flush
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Drops the outer border and radius so the rows sit directly on the card — the right choice inside a panel that already has an edge.
                </p>
              </div>
              <div className="accordion accordion-flush" id="acFlush">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acFlushH1">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acFlushC1"
                      aria-expanded="false"
                      aria-controls="acFlushC1"
                    >
                      {"Shipping & delivery"}
                    </button>
                  </h3>
                  <div id="acFlushC1" className="accordion-collapse collapse" data-bs-parent="#acFlush">
                    <div className="accordion-body fs-md text-body-2">
                      Orders placed before
                      {" "}
                      <bdi>
                        14:00
                      </bdi>
                      {" "}
                      ship the same working day. Tracking arrives by email as soon as the parcel is scanned.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acFlushH2">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acFlushC2"
                      aria-expanded="false"
                      aria-controls="acFlushC2"
                    >
                      {"Returns & refunds"}
                    </button>
                  </h3>
                  <div id="acFlushC2" className="accordion-collapse collapse" data-bs-parent="#acFlush">
                    <div className="accordion-body fs-md text-body-2">
                      Unopened items can be returned within
                      {" "}
                      <bdi>
                        30 days
                      </bdi>
                      . Refunds land back on the original payment method within a week.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acFlushH3">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acFlushC3"
                      aria-expanded="false"
                      aria-controls="acFlushC3"
                    >
                      Warranty cover
                    </button>
                  </h3>
                  <div id="acFlushC3" className="accordion-collapse collapse" data-bs-parent="#acFlush">
                    <div className="accordion-body fs-md text-body-2">
                      Two years against manufacturing defects, extendable to five on registration.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acFlushH4">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acFlushC4"
                      aria-expanded="false"
                      aria-controls="acFlushC4"
                    >
                      International orders
                    </button>
                  </h3>
                  <div id="acFlushC4" className="accordion-collapse collapse" data-bs-parent="#acFlush">
                    <div className="accordion-body fs-md text-body-2">
                      We ship to
                      {" "}
                      <bdi>
                        34
                      </bdi>
                      {" "}
                      countries. Duties are calculated at checkout so nothing is owed on delivery.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acFlushH5">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acFlushC5"
                      aria-expanded="false"
                      aria-controls="acFlushC5"
                    >
                      {"Bulk & trade pricing"}
                    </button>
                  </h3>
                  <div id="acFlushC5" className="accordion-collapse collapse" data-bs-parent="#acFlush">
                    <div className="accordion-body fs-md text-body-2">
                      Discounts start at
                      {" "}
                      <bdi>
                        25 units
                      </bdi>
                      {" "}
                      and are applied automatically once a trade account is verified.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Always Open ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-open">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-open" className="fs-5 fw-bold text-title mb-1">
                  Always Open
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Leave
                  {" "}
                  <code>
                    data-bs-parent
                  </code>
                  {" "}
                  off and every panel works independently — better when the reader wants to compare two sections.
                </p>
              </div>
              <div className="accordion" id="acOpen">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acOpenH1">
                    <button
                      className="accordion-button fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acOpenC1"
                      aria-expanded="true"
                      aria-controls="acOpenC1"
                    >
                      Personal details
                    </button>
                  </h3>
                  <div id="acOpenC1" className="accordion-collapse collapse show">
                    <div className="accordion-body fs-md text-body-2">
                      Name, preferred pronouns and the timezone used when scheduling anything on your behalf.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acOpenH2">
                    <button
                      className="accordion-button fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acOpenC2"
                      aria-expanded="true"
                      aria-controls="acOpenC2"
                    >
                      Notification preferences
                    </button>
                  </h3>
                  <div id="acOpenC2" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      <div className="form-check form-switch mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="acNotifEmail"
                          defaultChecked
                        />
                        {" "}
                        <label className="form-check-label fs-md" htmlFor="acNotifEmail">
                          Email digests
                        </label>
                      </div>
                      <div className="form-check form-switch mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="acNotifPush"
                          defaultChecked
                        />
                        {" "}
                        <label className="form-check-label fs-md" htmlFor="acNotifPush">
                          Push notifications
                        </label>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="acNotifSms" />
                        {" "}
                        <label className="form-check-label fs-md" htmlFor="acNotifSms">
                          SMS alerts
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Accordion with Icons ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-icons">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-icons" className="fs-5 fw-bold text-title mb-1">
                  {"With Icons & Meta"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  A tinted glyph and a status pill make a long list scannable before anything is opened.
                </p>
              </div>
              <div className="accordion" id="acIcons">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acIconsH1">
                    <button
                      className="accordion-button fw-semibold gap-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acIconsC1"
                      aria-expanded="true"
                      aria-controls="acIconsC1"
                    >
                      <span className="icon-box icon-box-sm tint-emerald" aria-hidden="true">
                        <i data-lucide="shield-check" />
                      </span>
                      <span className="flex-grow-1 text-start">
                        Security review
                      </span>
                      <span className="badge-soft tint-emerald text-nowrap">
                        Passed
                      </span>
                    </button>
                  </h3>
                  <div id="acIconsC1" className="accordion-collapse collapse show" data-bs-parent="#acIcons">
                    <div className="accordion-body fs-md text-body-2">
                      All
                      {" "}
                      <bdi>
                        42
                      </bdi>
                      {" "}checks cleared on{" "}
                      <bdi>
                        28 August 2026
                      </bdi>
                      . The next scheduled review runs at the end of the quarter.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acIconsH2">
                    <button
                      className="accordion-button collapsed fw-semibold gap-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acIconsC2"
                      aria-expanded="false"
                      aria-controls="acIconsC2"
                    >
                      <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                        <i data-lucide="gauge" />
                      </span>
                      <span className="flex-grow-1 text-start">
                        Performance budget
                      </span>
                      <span className="badge-soft tint-amber text-nowrap">
                        At risk
                      </span>
                    </button>
                  </h3>
                  <div id="acIconsC2" className="accordion-collapse collapse" data-bs-parent="#acIcons">
                    <div className="accordion-body fs-md text-body-2">
                      The dashboard bundle is
                      {" "}
                      <bdi>
                        18 KB
                      </bdi>
                      {" "}
                      over budget after the latest chart additions. Splitting the export module would recover most of it.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acIconsH3">
                    <button
                      className="accordion-button collapsed fw-semibold gap-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acIconsC3"
                      aria-expanded="false"
                      aria-controls="acIconsC3"
                    >
                      <span className="icon-box icon-box-sm tint-rose" aria-hidden="true">
                        <i data-lucide="triangle-alert" />
                      </span>
                      <span className="flex-grow-1 text-start">
                        Accessibility audit
                      </span>
                      <span className="badge-soft tint-rose text-nowrap">
                        Blocked
                      </span>
                    </button>
                  </h3>
                  <div id="acIconsC3" className="accordion-collapse collapse" data-bs-parent="#acIcons">
                    <div className="accordion-body fs-md text-body-2">
                      Waiting on a screen-reader licence before the final pass can be signed off.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Separated Accordion ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-separated">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-separated" className="fs-5 fw-bold text-title mb-1">
                  Separated Cards
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Each row is its own rounded card with a gap between. Heavier, but it reads clearly on a busy page.
                </p>
              </div>
              <div className="accordion accordion-flush d-flex flex-column gap-2" id="acSep">
                <div className="accordion-item border-soft rounded-4 overflow-hidden">
                  <h3 className="accordion-header" id="acSepH1">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acSepC1"
                      aria-expanded="false"
                      aria-controls="acSepC1"
                    >
                      Step 1 — Connect a data source
                    </button>
                  </h3>
                  <div id="acSepC1" className="accordion-collapse collapse" data-bs-parent="#acSep">
                    <div className="accordion-body fs-md text-body-2">
                      Point Vionex at a warehouse, a spreadsheet or a live API. Read-only credentials are enough for everything on the dashboards.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-soft rounded-4 overflow-hidden">
                  <h3 className="accordion-header" id="acSepH2">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acSepC2"
                      aria-expanded="false"
                      aria-controls="acSepC2"
                    >
                      Step 2 — Map your fields
                    </button>
                  </h3>
                  <div id="acSepC2" className="accordion-collapse collapse" data-bs-parent="#acSep">
                    <div className="accordion-body fs-md text-body-2">
                      Match each column to a metric once. Later imports reuse the same mapping unless the schema changes.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-soft rounded-4 overflow-hidden">
                  <h3 className="accordion-header" id="acSepH3">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acSepC3"
                      aria-expanded="false"
                      aria-controls="acSepC3"
                    >
                      Step 3 — Invite the team
                    </button>
                  </h3>
                  <div id="acSepC3" className="accordion-collapse collapse" data-bs-parent="#acSep">
                    <div className="accordion-body fs-md text-body-2">
                      Send invitations by email or share a join link. Roles can be changed at any time from Settings.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-soft rounded-4 overflow-hidden">
                  <h3 className="accordion-header" id="acSepH4">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acSepC4"
                      aria-expanded="false"
                      aria-controls="acSepC4"
                    >
                      Step 4 — Build your first dashboard
                    </button>
                  </h3>
                  <div id="acSepC4" className="accordion-collapse collapse" data-bs-parent="#acSep">
                    <div className="accordion-body fs-md text-body-2">
                      Start from a template or an empty canvas. Anything you build can be saved as a view and shared with a link.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Nested Accordion ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-nested">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-nested" className="fs-5 fw-bold text-title mb-1">
                  Nested
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  An accordion inside an accordion body. The inner group needs its own parent id, or opening a child would close its own container.
                </p>
              </div>
              <div className="accordion" id="acNested">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acNestedH1">
                    <button
                      className="accordion-button fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acNestedC1"
                      aria-expanded="true"
                      aria-controls="acNestedC1"
                    >
                      {"Billing & invoices"}
                    </button>
                  </h3>
                  <div id="acNestedC1" className="accordion-collapse collapse show" data-bs-parent="#acNested">
                    <div className="accordion-body">
                      <p className="fs-md text-body-2 mb-3">
                        Everything about how the workspace is charged.
                      </p>
                      <div className="accordion accordion-flush" id="acNestedInner">
                        <div className="accordion-item">
                          <h4 className="accordion-header" id="acNestedInnerH1">
                            <button
                              className="accordion-button collapsed fw-semibold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#acNestedInnerC1"
                              aria-expanded="false"
                              aria-controls="acNestedInnerC1"
                            >
                              Payment methods
                            </button>
                          </h4>
                          <div
                            id="acNestedInnerC1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#acNestedInner"
                          >
                            <div className="accordion-body fs-md text-body-2">
                              Cards, direct debit and bank transfer on annual plans.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h4 className="accordion-header" id="acNestedInnerH2">
                            <button
                              className="accordion-button collapsed fw-semibold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#acNestedInnerC2"
                              aria-expanded="false"
                              aria-controls="acNestedInnerC2"
                            >
                              {"Tax & VAT"}
                            </button>
                          </h4>
                          <div
                            id="acNestedInnerC2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#acNestedInner"
                          >
                            <div className="accordion-body fs-md text-body-2">
                              Add a VAT number in Settings and it appears on every future invoice.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acNestedH2">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acNestedC2"
                      aria-expanded="false"
                      aria-controls="acNestedC2"
                    >
                      {"Security & access"}
                    </button>
                  </h3>
                  <div id="acNestedC2" className="accordion-collapse collapse" data-bs-parent="#acNested">
                    <div className="accordion-body fs-md text-body-2">
                      Single sign-on, enforced two-factor and IP allow-lists are available on Enterprise.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Rich Content ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-rich">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-rich" className="fs-5 fw-bold text-title mb-1">
                  Rich Panels
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  A panel is an ordinary container — tables, lists and controls all sit inside it without extra styling.
                </p>
              </div>
              <div className="accordion" id="acRich">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acRichH1">
                    <button
                      className="accordion-button fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acRichC1"
                      aria-expanded="true"
                      aria-controls="acRichC1"
                    >
                      Order summary
                    </button>
                  </h3>
                  <div id="acRichC1" className="accordion-collapse collapse show" data-bs-parent="#acRich">
                    <div className="accordion-body">
                      <div className="table-responsive">
                        <table className="table table-sm align-middle mb-0">
                          <caption className="visually-hidden">
                            Items in this order
                          </caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                Item
                              </th>
                              <th scope="col" className="text-end">
                                Qty
                              </th>
                              <th scope="col" className="text-end">
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" className="fw-medium">
                                Business plan
                              </th>
                              <td className="text-end">
                                <bdi>
                                  25
                                </bdi>
                              </td>
                              <td className="text-end">
                                <bdi>
                                  $1,225.00
                                </bdi>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="fw-medium">
                                Extra storage
                              </th>
                              <td className="text-end">
                                <bdi>
                                  2
                                </bdi>
                              </td>
                              <td className="text-end">
                                <bdi>
                                  $40.00
                                </bdi>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="fw-medium">
                                Onboarding
                              </th>
                              <td className="text-end">
                                <bdi>
                                  1
                                </bdi>
                              </td>
                              <td className="text-end">
                                <bdi>
                                  $500.00
                                </bdi>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="acRichH2">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#acRichC2"
                      aria-expanded="false"
                      aria-controls="acRichC2"
                    >
                      Delivery contacts
                    </button>
                  </h3>
                  <div id="acRichC2" className="accordion-collapse collapse" data-bs-parent="#acRich">
                    <div className="accordion-body">
                      <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                        <li className="d-flex align-items-center gap-3">
                          <span className="avatar avatar-sm">
                            <img src="/assets/images/avatar-1.png" width="32" height="32" alt="" />
                          </span>
                          <div className="min-w-0 flex-grow-1">
                            <p className="fs-md fw-semibold text-title text-truncate mb-0">
                              Kabir Nair
                            </p>
                            <p className="fs-sm text-muted-2 text-truncate mb-0">
                              Primary contact
                            </p>
                          </div>
                          <button type="button" className="btn btn-ghost btn-sm">
                            Email
                          </button>
                        </li>
                        <li className="d-flex align-items-center gap-3">
                          <span className="avatar avatar-sm">
                            <img src="/assets/images/avatar-4.png" width="32" height="32" alt="" />
                          </span>
                          <div className="min-w-0 flex-grow-1">
                            <p className="fs-md fw-semibold text-title text-truncate mb-0">
                              Dev Sharma
                            </p>
                            <p className="fs-sm text-muted-2 text-truncate mb-0">
                              Warehouse
                            </p>
                          </div>
                          <button type="button" className="btn btn-ghost btn-sm">
                            Email
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Native Disclosure ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-details">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-details" className="fs-5 fw-bold text-title mb-1">
                  Native Disclosure
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  <code>
                    {"<details>"}
                  </code>
                  {" "}
                  gives the same open-and-close behaviour with no JavaScript at all. Reach for it when the content is plain prose.
                </p>
              </div>
              <details className="border-soft rounded-4 p-3 mb-2">
                <summary className="fs-md fw-semibold text-title">
                  Where is my API key stored?
                </summary>
                <p className="fs-md text-body-2 mt-2 mb-0">
                  Hashed at rest and shown in full only once, at the moment it is created. Losing it means rotating rather than recovering.
                </p>
              </details>
              <details className="border-soft rounded-4 p-3 mb-2" open>
                <summary className="fs-md fw-semibold text-title">
                  Does a rotation break live integrations?
                </summary>
                <p className="fs-md text-body-2 mt-2 mb-0">
                  Yes — immediately. Issue the replacement first, move your integrations across, then revoke the old key.
                </p>
              </details>
              <details className="border-soft rounded-4 p-3 mb-0">
                <summary className="fs-md fw-semibold text-title">
                  Can I scope a key to one dashboard?
                </summary>
                <p className="fs-md text-body-2 mt-2 mb-0">
                  On Business and above. Scoped keys are read-only and cannot create or delete anything.
                </p>
              </details>
            </div>
          </section>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}
