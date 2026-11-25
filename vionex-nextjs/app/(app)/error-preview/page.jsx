/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Error Preview",
  description: "Vionex enterprise admin dashboard — a single live preview page that renders any client or server error state, switched with jQuery, built with Bootstrap 5, CSS variables and a scalable design system.",
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
      navPage="error-pages"
    >
      {/* ===== Page header ===== */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="fs-4 fw-bold text-title mb-0">
          Error Preview
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item">
              Pages
            </li>
            <li className="breadcrumb-item">
              <a href="/error-pages">
                Error Pages
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Error Preview
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Live error state preview =====
         One stage, twelve records. Every string lives on the option element
         that carries it, and the shared [data-record-scope] module copies the
         selected one into the panel below — so the list and the rendering can
         never drift apart, and ?code=404 deep-links straight to a state. */}
      <section
        className="d-flex flex-column flex-grow-1 mb-4"
        aria-labelledby="errPreviewTitle"
        data-record-scope=""
        data-record-param="code"
      >
        {/* Preview chrome — not part of the state being previewed */}
        <div className="card flex-shrink-0 mb-3">
          <div className="card-body d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="d-flex flex-wrap align-items-center gap-2">
              <label htmlFor="errPreviewPick" className="fs-md fw-medium text-muted-2 mb-0">
                Previewing
              </label>
              <select className="form-select w-auto pe-5" id="errPreviewPick" name="errPreviewPick" defaultValue="404">
                <option
                  value="400"
                  data-record="400"
                  data-record-code="400"
                  data-record-title="Bad Request"
                  data-record-group="Client error · 4xx"
                  data-record-glyph="file-warning"
                  data-record-tint="tint-rose"
                  data-record-accent="text-cat-rose"
                  data-record-cta="Return to dashboard"
                  data-record-link="/"
                  data-record-message="We couldn't read that request. Something sent with it was missing, malformed, or larger than we accept."
                  data-record-hint="Check the values you entered, then submit the form once more."
                >
                  400 — Bad Request
                </option>
                <option
                  value="401"
                  data-record="401"
                  data-record-code="401"
                  data-record-title="Unauthorized"
                  data-record-group="Client error · 4xx"
                  data-record-glyph="lock-keyhole"
                  data-record-tint="tint-amber"
                  data-record-accent="text-cat-amber"
                  data-record-cta="Sign in again"
                  data-record-link="/login"
                  data-record-message="You're not signed in, or your session quietly expired while you were away."
                  data-record-hint="Signing in again issues a fresh token and returns you to the page you wanted."
                >
                  401 — Unauthorized
                </option>
                <option
                  value="403"
                  data-record="403"
                  data-record-code="403"
                  data-record-title="Forbidden"
                  data-record-group="Client error · 4xx"
                  data-record-glyph="shield-x"
                  data-record-tint="tint-orange"
                  data-record-accent="text-cat-orange"
                  data-record-cta="Request access"
                  data-record-link="/settings"
                  data-record-message="You're signed in, but your role in this workspace doesn't include access to that resource."
                  data-record-hint="A workspace owner can grant it from Settings — no support ticket needed."
                >
                  403 — Forbidden
                </option>
                <option
                  value="404"
                  data-record="404"
                  data-record-code="404"
                  data-record-title="Page Not Found"
                  data-record-group="Client error · 4xx"
                  data-record-glyph="map-pin-off"
                  data-record-tint="tint-violet"
                  data-record-accent="text-cat-violet"
                  data-record-cta="Back to dashboard"
                  data-record-link="/"
                  data-record-message="The page you asked for has moved, been renamed, or never existed at all."
                  data-record-hint="Head back to a dashboard you use every day, or search for it from the top bar."
                >
                  404 — Page Not Found
                </option>
                <option
                  value="405"
                  data-record="405"
                  data-record-code="405"
                  data-record-title="Method Not Allowed"
                  data-record-group="Client error · 4xx"
                  data-record-glyph="ban"
                  data-record-tint="tint-brand"
                  data-record-accent="text-cat-brand"
                  data-record-cta="Return to dashboard"
                  data-record-link="/"
                  data-record-message="That endpoint exists, but it doesn't accept the kind of request that was just made."
                  data-record-hint="The response lists the methods it does accept — switch to one of those and retry."
                >
                  405 — Method Not Allowed
                </option>
                <option
                  value="408"
                  data-record="408"
                  data-record-code="408"
                  data-record-title="Request Timeout"
                  data-record-group="Client error · 4xx"
                  data-record-glyph="timer-off"
                  data-record-tint="tint-blue"
                  data-record-accent="text-cat-blue"
                  data-record-cta="Return to dashboard"
                  data-record-link="/"
                  data-record-message="Your request took longer to reach us than the gateway was willing to wait."
                  data-record-hint="Nothing was saved. On a steadier connection a retry usually goes straight through."
                >
                  408 — Request Timeout
                </option>
                <option
                  value="410"
                  data-record="410"
                  data-record-code="410"
                  data-record-title="Gone"
                  data-record-group="Client error · 4xx"
                  data-record-glyph="link-2-off"
                  data-record-tint="tint-slate"
                  data-record-accent="text-cat-slate"
                  data-record-cta="Browse the archive"
                  data-record-link="/timeline"
                  data-record-message="This resource was deliberately removed, and there's no forwarding address for it."
                  data-record-hint="The archive keeps a read-only copy if you still need what was here."
                >
                  410 — Gone
                </option>
                <option
                  value="429"
                  data-record="429"
                  data-record-code="429"
                  data-record-title="Too Many Requests"
                  data-record-group="Client error · 4xx"
                  data-record-glyph="gauge"
                  data-record-tint="tint-cyan"
                  data-record-accent="text-cat-cyan"
                  data-record-cta={"View plans & limits"}
                  data-record-link="/pricing"
                  data-record-message="You've used up this plan's request allowance for the current window."
                  data-record-hint="The limit resets shortly, and a larger plan lifts the cap straight away."
                >
                  429 — Too Many Requests
                </option>
                <option
                  value="500"
                  data-record="500"
                  data-record-code="500"
                  data-record-title="Internal Server Error"
                  data-record-group="Server error · 5xx"
                  data-record-glyph="server-crash"
                  data-record-tint="tint-danger"
                  data-record-accent="text-danger"
                  data-record-cta="Report this incident"
                  data-record-link="/help-desk"
                  data-record-message="Something broke on our side while we were handling your request. This one is on us."
                  data-record-hint="The incident is already logged. Sending us the request ID gets it looked at faster."
                >
                  500 — Internal Server Error
                </option>
                <option
                  value="502"
                  data-record="502"
                  data-record-code="502"
                  data-record-title="Bad Gateway"
                  data-record-group="Server error · 5xx"
                  data-record-glyph="unplug"
                  data-record-tint="tint-magenta"
                  data-record-accent="text-cat-magenta"
                  data-record-cta="Check system status"
                  data-record-link="/help-desk"
                  data-record-message="A service behind this page answered with something the gateway couldn't use."
                  data-record-hint="These usually clear within a minute or two, so refreshing is safe."
                >
                  502 — Bad Gateway
                </option>
                <option
                  value="503"
                  data-record="503"
                  data-record-code="503"
                  data-record-title="Service Unavailable"
                  data-record-group="Server error · 5xx"
                  data-record-glyph="wrench"
                  data-record-tint="tint-emerald"
                  data-record-accent="text-cat-emerald"
                  data-record-cta="Check maintenance status"
                  data-record-link="/help-desk"
                  data-record-message="We're briefly out of capacity, or a planned maintenance window is open right now."
                  data-record-hint="Nothing is lost. The status page carries live progress and when we expect to be back."
                >
                  503 — Service Unavailable
                </option>
                <option
                  value="504"
                  data-record="504"
                  data-record-code="504"
                  data-record-title="Gateway Timeout"
                  data-record-group="Server error · 5xx"
                  data-record-glyph="hourglass"
                  data-record-tint="tint-blue"
                  data-record-accent="text-cat-blue"
                  data-record-cta="Return to dashboard"
                  data-record-link="/"
                  data-record-message="A service behind this page accepted your request but never answered in time."
                  data-record-hint="Retrying is safe — nothing was written before the gateway gave up waiting."
                >
                  504 — Gateway Timeout
                </option>
              </select>
              <span
                className="badge-soft tint-violet text-nowrap"
                data-record-class="tint"
                data-record-base="badge-soft text-nowrap"
              >
                <bdi data-record-out="group">
                  Client error · 4xx
                </bdi>
              </span>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-2">
              <a
                href="/error-sections"
                className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
              >
                {" "}
                <i className="icon-18" data-lucide="code" aria-hidden="true" />
                Copy-ready sections
                {" "}
              </a>
              <a
                href="/error-pages"
                className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
              >
                {" "}
                <i className="icon-18 flip-rtl" data-lucide="corner-up-left" aria-hidden="true" />
                Back to catalogue
                {" "}
              </a>
            </div>
          </div>
        </div>
        {/* Preview stage — everything inside is what a visitor would actually see */}
        <div
          className="card bg-wash-current text-cat-violet flex-grow-1"
          data-record-class="accent"
          data-record-base="card bg-wash-current flex-grow-1"
        >
          <div className="card-body d-flex align-items-center justify-content-center px-3 px-md-4 py-5">
            <div className="row justify-content-center w-100">
              <div className="col-12 col-md-10 col-lg-9 col-xxl-7 text-center">
                {/* Every glyph a record can show is written here; the record
                   switcher reveals the one whose name matches and retires the
                   rest with .d-none, so no icon is built in script. */}
                {" "}
                <span
                  className="icon-box icon-box-xl tint-violet mx-auto mb-4"
                  aria-hidden="true"
                  data-record-class="tint"
                  data-record-base="icon-box icon-box-xl mx-auto mb-4"
                  data-record-icon="glyph"
                >
                  <i className="d-none" data-record-icon-name="file-warning" data-lucide="file-warning" />
                  <i className="d-none" data-record-icon-name="lock-keyhole" data-lucide="lock-keyhole" />
                  <i className="d-none" data-record-icon-name="shield-x" data-lucide="shield-x" />
                  <i data-record-icon-name="map-pin-off" data-lucide="map-pin-off" />
                  <i className="d-none" data-record-icon-name="ban" data-lucide="ban" />
                  <i className="d-none" data-record-icon-name="timer-off" data-lucide="timer-off" />
                  <i className="d-none" data-record-icon-name="link-2-off" data-lucide="link-2-off" />
                  <i className="d-none" data-record-icon-name="gauge" data-lucide="gauge" />
                  <i className="d-none" data-record-icon-name="server-crash" data-lucide="server-crash" />
                  <i className="d-none" data-record-icon-name="unplug" data-lucide="unplug" />
                  <i className="d-none" data-record-icon-name="wrench" data-lucide="wrench" />
                  <i className="d-none" data-record-icon-name="hourglass" data-lucide="hourglass" />
                </span>
                <p className="display-1 fw-bold text-title lh-1 mb-3" aria-hidden="true">
                  <bdi data-record-out="code">
                    404
                  </bdi>
                </p>
                <h2 id="errPreviewTitle" className="fs-2 fw-bold text-title mb-3" data-record-out="title">
                  Page Not Found
                </h2>
                <p className="fs-lg text-body-2 mb-2" data-record-out="message">
                  The page you asked for has moved, been renamed, or never existed at all.
                </p>
                <p className="fs-md text-muted-2 mb-4" data-record-out="hint">
                  Head back to a dashboard you use every day, or search for it from the top bar.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  <a
                    href="/"
                    className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap"
                    data-record-href="link"
                  >
                    {" "}
                    <span data-record-out="cta">
                      Back to dashboard
                    </span>
                    {" "}
                    <i className="icon-18 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                    {" "}
                  </a>
                  <a
                    href="/"
                    className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
                    data-history-back=""
                  >
                    {" "}
                    <i className="icon-18 flip-rtl" data-lucide="corner-up-left" aria-hidden="true" />
                    Go back
                    {" "}
                  </a>
                </div>
                <p className="fs-md text-muted-2 mb-0">
                  Still stuck?
                  {" "}
                  <a href="/help-desk" className="fw-medium text-brand">
                    Contact support
                  </a>
                </p>
              </div>
            </div>
          </div>
          <span
            className="accent-edge-b text-cat-violet"
            aria-hidden="true"
            data-record-class="accent"
            data-record-base="accent-edge-b"
          />
        </div>
      </section>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}
