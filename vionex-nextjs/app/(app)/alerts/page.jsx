/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Alerts",
  description: "Vionex alerts — contextual and dismissible messages, soft banners, accent callouts, toasts and empty states, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Alerts
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
              Alerts
            </li>
          </ol>
        </nav>
      </div>
      <div className="row g-3 g-xl-4">
        {/* ===== Contextual Alerts ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-contextual">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-contextual" className="fs-5 fw-bold text-title mb-1">
                  Contextual Alerts
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  The eight Bootstrap tones. Each one recolours itself for dark mode without any extra markup.
                </p>
              </div>
              <div className="alert alert-primary mb-2" role="alert">
                A primary alert — use it for neutral product news.
              </div>
              <div className="alert alert-success mb-2" role="alert">
                A success alert — the operation completed.
              </div>
              <div className="alert alert-warning mb-2" role="alert">
                A warning alert — check this before continuing.
              </div>
              <div className="alert alert-danger mb-2" role="alert">
                A danger alert — something needs fixing now.
              </div>
              <div className="alert alert-info mb-2" role="alert">
                An info alert — helpful context, nothing urgent.
              </div>
              <div className="alert alert-secondary mb-2" role="alert">
                A secondary alert — quiet, low-priority notes.
              </div>
              <div className="alert alert-light mb-2" role="alert">
                A light alert — minimal emphasis.
              </div>
              <div className="alert alert-dark mb-0" role="alert">
                A dark alert — strong emphasis on pale surfaces.
              </div>
            </div>
          </section>
        </div>
        {/* ===== Alerts with Icons ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-icons">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-icons" className="fs-5 fw-bold text-title mb-1">
                  With Icons
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  A glyph makes the tone readable at a glance — and readable at all for anyone who cannot separate the colours.
                </p>
              </div>
              <div className="alert alert-success d-flex align-items-start gap-2 mb-2" role="alert">
                <i className="icon-18 flex-shrink-0" data-lucide="circle-check" aria-hidden="true" />
                <span>
                  Your changes have been published to production.
                </span>
              </div>
              <div className="alert alert-warning d-flex align-items-start gap-2 mb-2" role="alert">
                <i className="icon-18 flex-shrink-0" data-lucide="triangle-alert" aria-hidden="true" />
                <span>
                  Your trial ends in
                  {" "}
                  <bdi>
                    3 days
                  </bdi>
                  . Add a payment method to stay on Pro.
                </span>
              </div>
              <div className="alert alert-danger d-flex align-items-start gap-2 mb-2" role="alert">
                <i className="icon-18 flex-shrink-0" data-lucide="circle-x" aria-hidden="true" />
                <span>
                  We couldn't reach the payment provider. No card was charged.
                </span>
              </div>
              <div className="alert alert-info d-flex align-items-start gap-2 mb-2" role="alert">
                <i className="icon-18 flex-shrink-0" data-lucide="info" aria-hidden="true" />
                <span>
                  Scheduled maintenance runs on Sunday between
                  {" "}
                  <bdi>
                    02:00
                  </bdi>
                  {" "}and{" "}
                  <bdi>
                    04:00 UTC
                  </bdi>
                  .
                </span>
              </div>
              <div className="alert alert-primary d-flex align-items-start gap-2 mb-2" role="alert">
                <i className="icon-18 flex-shrink-0" data-lucide="sparkles" aria-hidden="true" />
                <span>
                  Saved views are now available on every dashboard in the suite.
                </span>
              </div>
              <div className="alert alert-secondary d-flex align-items-start gap-2 mb-0" role="alert">
                <i className="icon-18 flex-shrink-0" data-lucide="clock" aria-hidden="true" />
                <span>
                  This export was generated
                  {" "}
                  <bdi>
                    6 hours ago
                  </bdi>
                  {" "}
                  and may be out of date.
                </span>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Dismissible Alerts ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-dismissible">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-dismissible" className="fs-5 fw-bold text-title mb-1">
                  Dismissible
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  A close button retires the message. Keep
                  {" "}
                  <code>
                    fade show
                  </code>
                  {" "}
                  on the alert so it leaves with a transition rather than vanishing.
                </p>
              </div>
              <div className="alert alert-primary alert-dismissible fade show mb-2" role="alert">
                <span>
                  A new workspace theme is available in Settings.
                </span>
                {" "}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
              </div>
              {" "}
              <div
                className="alert alert-success alert-dismissible fade show d-flex align-items-start gap-2 mb-2"
                role="alert"
              >
                <i className="icon-18 flex-shrink-0" data-lucide="circle-check" aria-hidden="true" />
                {" "}
                <span>
                  Invoice
                  {" "}
                  <bdi>
                    INV-2026-0148
                  </bdi>
                  {" "}
                  was sent to Maya Fernandes.
                </span>
                {" "}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
              </div>
              {" "}
              <div
                className="alert alert-danger alert-dismissible fade show d-flex align-items-start gap-2 mb-2"
                role="alert"
              >
                <i className="icon-18 flex-shrink-0" data-lucide="circle-x" aria-hidden="true" />
                {" "}
                <span>
                  Two of
                  {" "}
                  <bdi>
                    14
                  </bdi>
                  {" "}
                  rows failed to import and were skipped.
                </span>
                {" "}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
              </div>
              {" "}
              <div className="alert alert-warning alert-dismissible fade show mb-0" role="alert">
                <div className="d-flex align-items-start gap-2">
                  <i className="icon-18 flex-shrink-0" data-lucide="triangle-alert" aria-hidden="true" />
                  <span>
                    Your API key expires in
                    {" "}
                    <bdi>
                      7 days
                    </bdi>
                    . Rotate it before integrations start failing.
                  </span>
                </div>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <button type="button" className="btn btn-warning btn-sm">
                    Rotate key
                  </button>
                  <button type="button" className="btn btn-ghost btn-sm">
                    Remind me later
                  </button>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
              </div>
            </div>
          </section>
        </div>
        {/* ===== Alerts with Actions ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-actions">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-actions" className="fs-5 fw-bold text-title mb-1">
                  {"Title, Body & Actions"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  When the message asks for a decision, give it a heading and put the choices inside the alert.
                </p>
              </div>
              <div className="alert alert-warning mb-2" role="alert">
                <h3 className="alert-heading fs-5 fw-bold mb-1">
                  Storage almost full
                </h3>
                <p className="fs-md mb-3">
                  You've used
                  {" "}
                  <bdi>
                    94.2 GB
                  </bdi>
                  {" "}of your{" "}
                  <bdi>
                    100 GB
                  </bdi>
                  {" "}
                  allowance. Uploads stop once the limit is reached.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <button type="button" className="btn btn-warning btn-sm">
                    Upgrade storage
                  </button>
                  <button type="button" className="btn btn-ghost btn-sm">
                    Manage files
                  </button>
                </div>
              </div>
              <div className="alert alert-danger mb-0" role="alert">
                <h3 className="alert-heading fs-5 fw-bold mb-1">
                  Delete this workspace?
                </h3>
                <p className="fs-md mb-3">
                  Every dashboard, report and saved view inside it will be removed. This cannot be undone.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <button type="button" className="btn btn-danger btn-sm">
                    Delete workspace
                  </button>
                  <button type="button" className="btn btn-ghost btn-sm">
                    Keep it
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Soft Banners ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-soft">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-soft" className="fs-5 fw-bold text-title mb-1">
                  Soft Banners
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  The theme-native tone: a wash background, a tinted icon box and body text that follows the surface rather than the alert palette.
                </p>
              </div>
              <div className="d-flex align-items-start gap-3 bg-wash-emerald rounded-4 p-3 mb-2" role="status">
                <span className="icon-box tint-emerald" aria-hidden="true">
                  <i data-lucide="rocket" />
                </span>
                <div className="min-w-0">
                  <p className="fs-md fw-semibold text-title mb-1">
                    Deployment finished
                  </p>
                  <p className="fs-md text-body-2 mb-0">
                    Release
                    {" "}
                    <bdi>
                      v4.2.0
                    </bdi>
                    {" "}
                    is live on all regions.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3 bg-wash-amber rounded-4 p-3 mb-2" role="status">
                <span className="icon-box tint-amber" aria-hidden="true">
                  <i data-lucide="clock" />
                </span>
                <div className="min-w-0">
                  <p className="fs-md fw-semibold text-title mb-1">
                    Approval pending
                  </p>
                  <p className="fs-md text-body-2 mb-0">
                    Two expense reports are waiting on your sign-off.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3 bg-wash-violet rounded-4 p-3 mb-0" role="status">
                <span className="icon-box tint-violet" aria-hidden="true">
                  <i data-lucide="sparkles" />
                </span>
                <div className="min-w-0">
                  <p className="fs-md fw-semibold text-title mb-1">
                    Assistant is smarter
                  </p>
                  <p className="fs-md text-body-2 mb-0">
                    Summaries now cover the whole quarter, not just the last month.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Accent Border Alerts ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-accent">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-accent" className="fs-5 fw-bold text-title mb-1">
                  Accent Rule
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  A coloured edge instead of a filled panel. Quiet enough to sit inside a form or a long document.
                </p>
              </div>
              <div
                className="d-flex align-items-start gap-3 bg-soft border-start border-4 border-success rounded-3 p-3 mb-2"
                role="status"
              >
                <i className="icon-18 text-success flex-shrink-0" data-lucide="circle-check" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="fs-md fw-semibold text-title mb-1">
                    Verified
                  </p>
                  <p className="fs-md text-body-2 mb-0">
                    This domain's DNS records are configured correctly.
                  </p>
                </div>
              </div>
              <div
                className="d-flex align-items-start gap-3 bg-soft border-start border-4 border-warning rounded-3 p-3 mb-2"
                role="status"
              >
                <i className="icon-18 text-warning flex-shrink-0" data-lucide="triangle-alert" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="fs-md fw-semibold text-title mb-1">
                    Partially configured
                  </p>
                  <p className="fs-md text-body-2 mb-0">
                    The SPF record is missing, so some mail may be marked as spam.
                  </p>
                </div>
              </div>
              <div
                className="d-flex align-items-start gap-3 bg-soft border-start border-4 border-danger rounded-3 p-3 mb-0"
                role="status"
              >
                <i className="icon-18 text-danger flex-shrink-0" data-lucide="circle-x" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="fs-md fw-semibold text-title mb-1">
                    Not connected
                  </p>
                  <p className="fs-md text-body-2 mb-0">
                    We can't verify ownership until the TXT record resolves.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Toasts ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-toasts">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-toasts" className="fs-5 fw-bold text-title mb-1">
                  Toasts
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Transient confirmations that stack in a corner. Shown here in place so the styling is visible without triggering one.
                </p>
              </div>
              <div className="d-flex flex-column gap-2" aria-live="polite" aria-atomic="true">
                <div className="toast show w-100" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="toast-header">
                    <span className="icon-box icon-box-sm tint-primary me-2" aria-hidden="true">
                      <i data-lucide="bell" />
                    </span>
                    <strong className="me-auto fs-md text-title">
                      Vionex
                    </strong>
                    <small className="text-muted-2">
                      <bdi>
                        just now
                      </bdi>
                    </small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
                  </div>
                  <div className="toast-body fs-md">
                    Your report is ready to download.
                  </div>
                </div>
                <div className="toast show w-100" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="toast-header">
                    <span className="icon-box icon-box-sm tint-emerald me-2" aria-hidden="true">
                      <i data-lucide="circle-check" />
                    </span>
                    <strong className="me-auto fs-md text-title">
                      Saved
                    </strong>
                    <small className="text-muted-2">
                      <bdi>
                        2 min ago
                      </bdi>
                    </small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
                  </div>
                  <div className="toast-body fs-md">
                    All
                    {" "}
                    <bdi>
                      18
                    </bdi>
                    {" "}
                    rows were written successfully.
                  </div>
                </div>
                <div className="toast show w-100" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="toast-header">
                    <span className="icon-box icon-box-sm tint-rose me-2" aria-hidden="true">
                      <i data-lucide="circle-x" />
                    </span>
                    <strong className="me-auto fs-md text-title">
                      Upload failed
                    </strong>
                    <small className="text-muted-2">
                      <bdi>
                        9 min ago
                      </bdi>
                    </small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
                  </div>
                  <div className="toast-body fs-md">
                    <p className="mb-2">
                      <bdi>
                        2
                      </bdi>
                      {" "}of{" "}
                      <bdi>
                        14
                      </bdi>
                      {" "}
                      files were rejected by the server.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <button type="button" className="btn btn-primary btn-sm">
                        Retry
                      </button>
                      <button type="button" className="btn btn-ghost btn-sm" data-bs-dismiss="toast">
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
                <div className="toast show w-100" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="d-flex">
                    <div className="toast-body fs-md">
                      Copied the share link to your clipboard.
                    </div>
                    <button
                      type="button"
                      className="btn-close me-2 m-auto"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Status Callouts ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-callouts">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-callouts" className="fs-5 fw-bold text-title mb-1">
                  {"Progress & Empty States"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Longer-lived messages: work in flight, and the page that has nothing to show yet.
                </p>
              </div>
              <div className="d-flex align-items-start gap-3 bg-soft rounded-4 p-3 mb-3" role="status">
                <span className="icon-box tint-primary" aria-hidden="true">
                  <i data-lucide="cloud-upload" />
                </span>
                <div className="min-w-0 flex-grow-1">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                    <p className="fs-md fw-semibold text-title mb-0">
                      Uploading
                      {" "}
                      <bdi>
                        3 files
                      </bdi>
                    </p>
                    <span className="fs-sm text-muted-2">
                      <bdi>
                        75%
                      </bdi>
                    </span>
                  </div>
                  <div
                    className="progress progress-sm"
                    role="progressbar"
                    aria-label="Upload progress"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar progress-bar-striped progress-bar-animated w-75" />
                  </div>
                </div>
              </div>
              <div className="text-center border-soft border-dashed rounded-4 p-4">
                <span className="icon-box icon-box-xl tint-slate mx-auto mb-3" aria-hidden="true">
                  <i data-lucide="inbox" />
                </span>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Nothing here yet
                </h3>
                <p className="fs-md text-muted-2 measure-sm mx-auto mb-3">
                  Once your first campaign starts collecting responses, they'll appear in this list.
                </p>
                <button type="button" className="btn btn-primary btn-sm d-inline-flex align-items-center gap-2">
                  <i className="icon-16" data-lucide="plus" aria-hidden="true" />
                  New campaign
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
