/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Buttons",
  description: "Vionex buttons — solid, soft, outline and ghost weights, sizes, icon buttons, groups, toggles, split menus and loading states, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Buttons
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
              Buttons
            </li>
          </ol>
        </nav>
      </div>
      <div className="row g-3 g-xl-4">
        {/* ===== Solid Buttons ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-solid">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-solid" className="fs-5 fw-bold text-title mb-1">
                  Solid Buttons
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  The filled set. Primary and Accent follow the active theme colour; the rest carry fixed semantic meaning.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary">
                  Primary
                </button>
                <button type="button" className="btn btn-accent">
                  Accent
                </button>
                <button type="button" className="btn btn-success">
                  Success
                </button>
                <button type="button" className="btn btn-danger">
                  Danger
                </button>
                <button type="button" className="btn btn-warning">
                  Warning
                </button>
                <button type="button" className="btn btn-info">
                  Info
                </button>
                <button type="button" className="btn btn-dark">
                  Dark
                </button>
                <button type="button" className="btn btn-light">
                  Light
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Soft & Ghost Buttons ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-soft">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-soft" className="fs-5 fw-bold text-title mb-1">
                  {"Soft & Ghost"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Quieter weights for secondary actions, toolbars and anywhere a solid fill would compete with the content.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary-soft">
                  Primary Soft
                </button>
                <button type="button" className="btn btn-accent-soft">
                  Accent Soft
                </button>
                <button type="button" className="btn btn-outline-soft">
                  Outline Soft
                </button>
                <button type="button" className="btn btn-ghost">
                  Ghost
                </button>
                <button type="button" className="btn btn-accent-ghost">
                  Accent Ghost
                </button>
                <button type="button" className="btn btn-ghost text-danger">
                  Ghost Danger
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Outline Buttons ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-outline">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-outline" className="fs-5 fw-bold text-title mb-1">
                  Outline Buttons
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Bordered variants that keep the surface visible — useful on cards, empty states and filter bars.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-outline-primary">
                  Primary
                </button>
                <button type="button" className="btn btn-outline-success">
                  Success
                </button>
                <button type="button" className="btn btn-outline-danger">
                  Danger
                </button>
                <button type="button" className="btn btn-outline-warning">
                  Warning
                </button>
                <button type="button" className="btn btn-outline-info">
                  Info
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Dark
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Button Sizes ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-sizes">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-sizes" className="fs-5 fw-bold text-title mb-1">
                  {"Sizes & Radius"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Three scales, each available with the default corner or as a pill.
                </p>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <button type="button" className="btn btn-primary btn-sm">
                  Small
                </button>
                <button type="button" className="btn btn-primary">
                  Default
                </button>
                <button type="button" className="btn btn-primary btn-lg">
                  Large
                </button>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <button type="button" className="btn btn-outline-soft btn-sm rounded-pill">
                  Small Pill
                </button>
                <button type="button" className="btn btn-outline-soft rounded-pill">
                  Default Pill
                </button>
                <button type="button" className="btn btn-outline-soft btn-lg rounded-pill">
                  Large Pill
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Buttons with Icons ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-with-icons">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-with-icons" className="fs-5 fw-bold text-title mb-1">
                  Buttons with Icons
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Icons sit before the label for objects and after it for movement.
                  {" "}
                  <code>
                    flip-rtl
                  </code>
                  {" "}
                  mirrors directional glyphs in RTL.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="plus" aria-hidden="true" />
                  New Project
                </button>
                <button type="button" className="btn btn-outline-soft d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="download" aria-hidden="true" />
                  Export
                </button>
                <button type="button" className="btn btn-ghost d-inline-flex align-items-center gap-2">
                  Continue
                  <i className="icon-18 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                </button>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary-soft d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="bell" aria-hidden="true" />
                  Alerts
                  {" "}
                  <span className="badge-soft">
                    <bdi>
                      12
                    </bdi>
                  </span>
                </button>
                <button type="button" className="btn btn-danger d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="trash-2" aria-hidden="true" />
                  Delete
                </button>
              </div>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <button type="button" className="btn btn-success d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="check" aria-hidden="true" />
                  Approve
                </button>
                <button type="button" className="btn btn-outline-soft d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="refresh-cw" aria-hidden="true" />
                  Retry
                </button>
                <button type="button" className="btn btn-outline-soft d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="filter" aria-hidden="true" />
                  Filter
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Icon Only Buttons ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-icon-only">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-icon-only" className="fs-5 fw-bold text-title mb-1">
                  Icon Only
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Square-tapped actions for dense toolbars. Every one carries an
                  {" "}
                  <code>
                    aria-label
                  </code>
                  , since there is no visible text to read.
                </p>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <button type="button" className="btn btn-ghost btn-18 rounded-circle" aria-label="Edit" title="Edit">
                  <i className="icon-18" data-lucide="pencil" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft btn-18 rounded-circle"
                  aria-label="Share"
                  title="Share"
                >
                  <i className="icon-18" data-lucide="share-2" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="btn btn-primary-soft btn-18 rounded-circle"
                  aria-label="Bookmark"
                  title="Bookmark"
                >
                  <i className="icon-18" data-lucide="bookmark" aria-hidden="true" />
                </button>
                <button type="button" className="btn btn-primary btn-18 rounded-circle" aria-label="Add" title="Add">
                  <i className="icon-18" data-lucide="plus" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle text-danger"
                  aria-label="Remove"
                  title="Remove"
                >
                  <i className="icon-18" data-lucide="trash-2" aria-hidden="true" />
                </button>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <button
                  type="button"
                  className="btn btn-outline-soft btn-18 rounded-3"
                  aria-label="Grid view"
                  title="Grid view"
                >
                  <i className="icon-18" data-lucide="layout-grid" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft btn-18 rounded-3"
                  aria-label="List view"
                  title="List view"
                >
                  <i className="icon-18" data-lucide="layout-list" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft btn-18 rounded-3"
                  aria-label="Board view"
                  title="Board view"
                >
                  <i className="icon-18" data-lucide="columns-3" aria-hidden="true" />
                </button>
              </div>
              {/* .icon-btn is the larger header-bar size, kept on its own row so
                 the 38px toolbar buttons above stay a uniform set */}
              <p className="fs-sm text-muted-2 mb-2">
                Header size —
                {" "}
                <code>
                  icon-btn
                </code>
              </p>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <button type="button" className="icon-btn transition-base" aria-label="Settings" title="Settings">
                  <i data-lucide="settings" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="icon-btn transition-base"
                  aria-label="Notifications"
                  title="Notifications"
                >
                  <i data-lucide="bell" aria-hidden="true" />
                </button>
                <button type="button" className="icon-btn transition-base" aria-label="Help" title="Help">
                  <i data-lucide="circle-help" aria-hidden="true" />
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Button Groups ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-groups">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-groups" className="fs-5 fw-bold text-title mb-1">
                  Button Groups
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Related actions joined into a single control, horizontally or stacked.
                </p>
              </div>
              <div className="btn-group mb-3" role="group" aria-label="Text alignment">
                <button type="button" className="btn btn-outline-soft" aria-label="Align left">
                  <i className="icon-18" data-lucide="align-left" aria-hidden="true" />
                </button>
                <button type="button" className="btn btn-outline-soft" aria-label="Align centre">
                  <i className="icon-18" data-lucide="align-center" aria-hidden="true" />
                </button>
                <button type="button" className="btn btn-outline-soft" aria-label="Align right">
                  <i className="icon-18" data-lucide="align-right" aria-hidden="true" />
                </button>
                <button type="button" className="btn btn-outline-soft" aria-label="Justify">
                  <i className="icon-18" data-lucide="align-justify" aria-hidden="true" />
                </button>
              </div>
              <div className="btn-toolbar gap-2 mb-3" role="toolbar" aria-label="Record actions">
                <div className="btn-group btn-group-sm" role="group" aria-label="History">
                  <button type="button" className="btn btn-outline-soft">
                    Undo
                  </button>
                  <button type="button" className="btn btn-outline-soft">
                    Redo
                  </button>
                </div>
                <div className="btn-group btn-group-sm" role="group" aria-label="Save">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button type="button" className="btn btn-primary-soft">
                    {"Save & Close"}
                  </button>
                </div>
              </div>
              <div className="btn-group-vertical" role="group" aria-label="Row actions">
                <button type="button" className="btn btn-outline-soft">
                  Duplicate
                </button>
                <button type="button" className="btn btn-outline-soft">
                  Move to archive
                </button>
                <button type="button" className="btn btn-outline-soft">
                  Delete permanently
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Toggle Buttons ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-toggle">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-toggle" className="fs-5 fw-bold text-title mb-1">
                  {"Toggles & Segments"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Checkbox and radio inputs styled as buttons, plus the pill segmented control used across the dashboards.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <input type="checkbox" className="btn-check" id="btnBold" defaultChecked />
                <label className="btn btn-outline-soft" htmlFor="btnBold">
                  Bold
                </label>
                <input type="checkbox" className="btn-check" id="btnItalic" />
                <label className="btn btn-outline-soft" htmlFor="btnItalic">
                  Italic
                </label>
                <input type="checkbox" className="btn-check" id="btnUnderline" />
                <label className="btn btn-outline-soft" htmlFor="btnUnderline">
                  Underline
                </label>
              </div>
              <div className="btn-group mb-3" role="group" aria-label="Billing period">
                <input type="radio" className="btn-check" name="btnBilling" id="btnBillMonthly" defaultChecked />
                <label className="btn btn-outline-soft" htmlFor="btnBillMonthly">
                  Monthly
                </label>
                <input type="radio" className="btn-check" name="btnBilling" id="btnBillQuarterly" />
                <label className="btn btn-outline-soft" htmlFor="btnBillQuarterly">
                  Quarterly
                </label>
                <input type="radio" className="btn-check" name="btnBilling" id="btnBillYearly" />
                <label className="btn btn-outline-soft" htmlFor="btnBillYearly">
                  Yearly
                </label>
              </div>
              {" "}
              <div
                className="nav nav-pills seg-toggle d-inline-flex flex-nowrap gap-1 p-1 mw-100 rounded-pill bg-soft overflow-x-auto scrollbar-none"
                role="group"
                aria-label="Report range"
              >
                <button type="button" className="nav-link active fw-semibold text-nowrap" aria-pressed="true">
                  Day
                </button>
                <button type="button" className="nav-link fw-semibold text-nowrap" aria-pressed="false">
                  Week
                </button>
                <button type="button" className="nav-link fw-semibold text-nowrap" aria-pressed="false">
                  Month
                </button>
                <button type="button" className="nav-link fw-semibold text-nowrap" aria-pressed="false">
                  Year
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Split & Dropdown Buttons ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-split">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-split" className="fs-5 fw-bold text-title mb-1">
                  {"Split & Dropdown"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  A default action with alternates tucked behind the caret. The full menu library lives on the
                  {" "}
                  <a href="/dropdowns" className="fw-medium text-brand">
                    Dropdowns
                  </a>
                  {" "}
                  page.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    id="btnDdSingle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
                  {" "}
                  <ul className="dropdown-menu p-2" aria-labelledby="btnDdSingle">
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="pencil" aria-hidden="true" />
                        Edit
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="copy" aria-hidden="true" />
                        Duplicate
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="share-2" aria-hidden="true" />
                        Share
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-outline-soft">
                    Save draft
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-soft dropdown-toggle dropdown-toggle-split"
                    id="btnDdSplit"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">
                      More save options
                    </span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="btnDdSplit">
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="send" aria-hidden="true" />
                        {"Save & publish"}
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="clock" aria-hidden="true" />
                        {"Save & schedule"}
                      </button>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button type="button" className="dropdown-item dropdown-item-danger">
                        <i data-lucide="x" aria-hidden="true" />
                        Discard
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropup">
                  <button
                    type="button"
                    className="btn btn-ghost dropdown-toggle"
                    id="btnDdUp"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort
                  </button>
                  {" "}
                  <ul className="dropdown-menu p-2" aria-labelledby="btnDdUp">
                    <li>
                      <button type="button" className="dropdown-item active" aria-current="true">
                        Newest first
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Oldest first
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        A – Z
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="fs-sm text-muted-2 mt-3 mb-2">
                Toggle sizes follow the trigger
              </p>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <div className="btn-group btn-group-sm">
                  <button type="button" className="btn btn-outline-soft">
                    Small
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-soft dropdown-toggle dropdown-toggle-split"
                    id="btnDdSplitSm"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">
                      More small options
                    </span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="btnDdSplitSm">
                    <li>
                      <button type="button" className="dropdown-item">
                        Duplicate
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Archive
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="btn-group btn-group-lg">
                  <button type="button" className="btn btn-outline-soft">
                    Large
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-soft dropdown-toggle dropdown-toggle-split"
                    id="btnDdSplitLg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">
                      More large options
                    </span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="btnDdSplitLg">
                    <li>
                      <button type="button" className="dropdown-item">
                        Duplicate
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Archive
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Button States ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-states">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-states" className="fs-5 fw-bold text-title mb-1">
                  States
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Active, disabled and in-flight. A busy button keeps its width so the layout never jumps.
                </p>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <button type="button" className="btn btn-primary active" aria-pressed="true">
                  Active
                </button>
                <button type="button" className="btn btn-primary" disabled>
                  Disabled
                </button>
                <button type="button" className="btn btn-outline-soft" disabled>
                  Outline Disabled
                </button>
                <a className="btn btn-ghost disabled" aria-disabled="true">
                  Link Disabled
                </a>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2" disabled>
                  <span className="spinner-border spinner-border-sm" aria-hidden="true" />
                  {" "}
                  <span role="status">
                    Saving…
                  </span>
                </button>
                <button type="button" className="btn btn-outline-soft d-inline-flex align-items-center gap-2" disabled>
                  <span className="spinner-grow spinner-grow-sm" aria-hidden="true" />
                  {" "}
                  <span role="status">
                    Syncing…
                  </span>
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Block Buttons ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-block">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-block" className="fs-5 fw-bold text-title mb-1">
                  Full Width
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Stacked on narrow screens, side by side from small up — the pattern used by every auth and checkout form.
                </p>
              </div>
              <div className="d-grid gap-2 mb-3">
                <button type="button" className="btn btn-primary btn-lg">
                  Create account
                </button>
                <button type="button" className="btn btn-outline-soft">
                  Maybe later
                </button>
              </div>
              <div className="d-grid d-sm-flex gap-2">
                <button type="button" className="btn btn-primary flex-sm-fill">
                  Confirm order
                </button>
                <button type="button" className="btn btn-outline-soft flex-sm-fill">
                  Back to cart
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Brand Buttons ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-brand">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-brand" className="fs-5 fw-bold text-title mb-1">
                  Provider Buttons
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Sign-in actions that carry a provider mark. The logo is real image content, so it keeps its colours in dark mode.
                </p>
              </div>
              <div className="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-outline-soft d-flex align-items-center justify-content-center gap-2"
                >
                  <img src="/assets/images/logo-google.svg" width="18" height="18" alt="" />
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft d-flex align-items-center justify-content-center gap-2"
                >
                  <img src="/assets/images/logo-facebook.svg" width="18" height="18" alt="" />
                  Continue with Facebook
                </button>
                <button type="button" className="btn btn-dark d-flex align-items-center justify-content-center gap-2">
                  <i className="icon-18" data-lucide="key-round" aria-hidden="true" />
                  Continue with SSO
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}
