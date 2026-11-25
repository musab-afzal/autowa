/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Error Sections",
  description: "Vionex enterprise admin dashboard — twelve copy-ready error state sections, each one self-contained Bootstrap 5 markup with CSS variables, dark mode and RTL support built in.",
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
          Error Sections
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
              Error Sections
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== How to use these sections =====
         Twelve finished error states, each one plain markup with no script
         behind it. Everything between the "copy from here" markers is
         self-contained: drop it into a blank page and it keeps the theme,
         dark mode and RTL support on its own. */}
      <section className="mb-4" aria-labelledby="errSectionsIntro">
        <div className="card mb-3">
          <div className="card-body d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="min-w-0">
              <h2 id="errSectionsIntro" className="fs-5 fw-bold text-title mb-1">
                Twelve standalone error sections
              </h2>
              <p className="fs-md text-muted-2 mb-0">
                Copy any block between its
                {" "}
                <span className="fw-semibold">
                  copy from here
                </span>
                {" "}and{" "}
                <span className="fw-semibold">
                  copy to here
                </span>
                {" "}
                comments into a fresh page — no switcher, no page-specific CSS, no JavaScript to wire up.
              </p>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-2">
              <a
                href="/error-preview"
                className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
              >
                {" "}
                <i className="icon-18" data-lucide="eye" aria-hidden="true" />
                Live preview
                {" "}
              </a>
              <a href="/error-pages" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                {" "}
                <i className="icon-18 flip-rtl" data-lucide="corner-up-left" aria-hidden="true" />
                Back to catalogue
                {" "}
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body d-flex flex-wrap align-items-center gap-2">
            <span className="fs-md fw-medium text-muted-2 me-1">
              Jump to
            </span>
            <a href="#err-400" className="btn btn-outline-soft btn-sm rounded-pill text-nowrap">
              <bdi>
                400
              </bdi>
            </a>
            <a href="#err-401" className="btn btn-outline-soft btn-sm rounded-pill text-nowrap">
              <bdi>
                401
              </bdi>
            </a>
            <a href="#err-403" className="btn btn-outline-soft btn-sm rounded-pill text-nowrap">
              <bdi>
                403
              </bdi>
            </a>
            <a href="#err-404" className="btn btn-outline-soft btn-sm rounded-pill text-nowrap">
              <bdi>
                404
              </bdi>
            </a>
            <a href="#err-405" className="btn btn-outline-soft btn-sm rounded-pill text-nowrap">
              <bdi>
                405
              </bdi>
            </a>
            <a href="#err-408" className="btn btn-outline-soft btn-sm rounded-pill text-nowrap">
              <bdi>
                408
              </bdi>
            </a>
            <a href="#err-410" className="btn btn-outline-soft btn-sm rounded-pill text-nowrap">
              <bdi>
                410
              </bdi>
            </a>
            <a href="#err-429" className="btn btn-outline-soft btn-sm rounded-pill text-nowrap">
              <bdi>
                429
              </bdi>
            </a>
            <a href="#err-500" className="btn btn-outline-soft btn-sm rounded-pill text-nowrap">
              <bdi>
                500
              </bdi>
            </a>
            <a href="#err-502" className="btn btn-outline-soft btn-sm rounded-pill text-nowrap">
              <bdi>
                502
              </bdi>
            </a>
            <a href="#err-503" className="btn btn-outline-soft btn-sm rounded-pill text-nowrap">
              <bdi>
                503
              </bdi>
            </a>
            <a href="#err-504" className="btn btn-outline-soft btn-sm rounded-pill text-nowrap">
              <bdi>
                504
              </bdi>
            </a>
          </div>
        </div>
      </section>
      {/* ===== 400 &mdash; Bad Request ===== */}
      <section className="mb-4" id="err-400" aria-labelledby="err400Title">
        {/* Gallery label &mdash; leave this behind when you lift the block below */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
          <span className="fs-5 fw-bold text-title">
            <bdi>
              400
            </bdi>
            {" "}
            — Bad Request
          </span>
          <span className="badge-soft tint-rose text-nowrap">
            Client error ·
            {" "}
            <bdi>
              4xx
            </bdi>
          </span>
        </div>
        {/* ===== copy from here ===== */}
        <div className="card text-cat-rose bg-wash-current overflow-hidden">
          <div className="card-body d-flex align-items-center justify-content-center px-3 px-md-4 py-5">
            <div className="row justify-content-center w-100">
              <div className="col-12 col-md-10 col-lg-9 col-xxl-7 text-center">
                <span className="icon-box icon-box-xl tint-rose mx-auto mb-4" aria-hidden="true">
                  <i data-lucide="file-warning" />
                </span>
                <p className="display-1 fw-bold text-title lh-1 mb-3">
                  <bdi>
                    400
                  </bdi>
                </p>
                <h2 id="err400Title" className="fs-2 fw-bold text-title mb-3">
                  Bad Request
                </h2>
                <p className="fs-lg text-body-2 mb-2">
                  We couldn't read that request. Something sent with it was missing, malformed, or larger than we accept.
                </p>
                <p className="fs-md text-muted-2 mb-4">
                  Check the values you entered, then submit the form once more.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  <a href="/" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                    {" "}
                    <span>
                      Return to dashboard
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
          <span className="accent-edge-b text-cat-rose" aria-hidden="true" />
        </div>
        {/* ===== copy to here ===== */}
      </section>
      {/* ===== 401 &mdash; Unauthorized ===== */}
      <section className="mb-4" id="err-401" aria-labelledby="err401Title">
        {/* Gallery label &mdash; leave this behind when you lift the block below */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
          <span className="fs-5 fw-bold text-title">
            <bdi>
              401
            </bdi>
            {" "}
            — Unauthorized
          </span>
          <span className="badge-soft tint-amber text-nowrap">
            Client error ·
            {" "}
            <bdi>
              4xx
            </bdi>
          </span>
        </div>
        {/* ===== copy from here ===== */}
        <div className="card text-cat-amber bg-wash-current overflow-hidden">
          <div className="card-body d-flex align-items-center justify-content-center px-3 px-md-4 py-5">
            <div className="row justify-content-center w-100">
              <div className="col-12 col-md-10 col-lg-9 col-xxl-7 text-center">
                <span className="icon-box icon-box-xl tint-amber mx-auto mb-4" aria-hidden="true">
                  <i data-lucide="lock-keyhole" />
                </span>
                <p className="display-1 fw-bold text-title lh-1 mb-3">
                  <bdi>
                    401
                  </bdi>
                </p>
                <h2 id="err401Title" className="fs-2 fw-bold text-title mb-3">
                  Unauthorized
                </h2>
                <p className="fs-lg text-body-2 mb-2">
                  You're not signed in, or your session quietly expired while you were away.
                </p>
                <p className="fs-md text-muted-2 mb-4">
                  Signing in again issues a fresh token and returns you to the page you wanted.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  <a href="/login" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                    {" "}
                    <span>
                      Sign in again
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
          <span className="accent-edge-b text-cat-amber" aria-hidden="true" />
        </div>
        {/* ===== copy to here ===== */}
      </section>
      {/* ===== 403 &mdash; Forbidden ===== */}
      <section className="mb-4" id="err-403" aria-labelledby="err403Title">
        {/* Gallery label &mdash; leave this behind when you lift the block below */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
          <span className="fs-5 fw-bold text-title">
            <bdi>
              403
            </bdi>
            {" "}
            — Forbidden
          </span>
          <span className="badge-soft tint-orange text-nowrap">
            Client error ·
            {" "}
            <bdi>
              4xx
            </bdi>
          </span>
        </div>
        {/* ===== copy from here ===== */}
        <div className="card text-cat-orange bg-wash-current overflow-hidden">
          <div className="card-body d-flex align-items-center justify-content-center px-3 px-md-4 py-5">
            <div className="row justify-content-center w-100">
              <div className="col-12 col-md-10 col-lg-9 col-xxl-7 text-center">
                <span className="icon-box icon-box-xl tint-orange mx-auto mb-4" aria-hidden="true">
                  <i data-lucide="shield-x" />
                </span>
                <p className="display-1 fw-bold text-title lh-1 mb-3">
                  <bdi>
                    403
                  </bdi>
                </p>
                <h2 id="err403Title" className="fs-2 fw-bold text-title mb-3">
                  Forbidden
                </h2>
                <p className="fs-lg text-body-2 mb-2">
                  You're signed in, but your role in this workspace doesn't include access to that resource.
                </p>
                <p className="fs-md text-muted-2 mb-4">
                  A workspace owner can grant it from Settings — no support ticket needed.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  <a href="/settings" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                    {" "}
                    <span>
                      Request access
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
          <span className="accent-edge-b text-cat-orange" aria-hidden="true" />
        </div>
        {/* ===== copy to here ===== */}
      </section>
      {/* ===== 404 &mdash; Page Not Found ===== */}
      <section className="mb-4" id="err-404" aria-labelledby="err404Title">
        {/* Gallery label &mdash; leave this behind when you lift the block below */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
          <span className="fs-5 fw-bold text-title">
            <bdi>
              404
            </bdi>
            {" "}
            — Page Not Found
          </span>
          <span className="badge-soft tint-violet text-nowrap">
            Client error ·
            {" "}
            <bdi>
              4xx
            </bdi>
          </span>
        </div>
        {/* ===== copy from here ===== */}
        <div className="card text-cat-violet bg-wash-current overflow-hidden">
          <div className="card-body d-flex align-items-center justify-content-center px-3 px-md-4 py-5">
            <div className="row justify-content-center w-100">
              <div className="col-12 col-md-10 col-lg-9 col-xxl-7 text-center">
                <span className="icon-box icon-box-xl tint-violet mx-auto mb-4" aria-hidden="true">
                  <i data-lucide="map-pin-off" />
                </span>
                <p className="display-1 fw-bold text-title lh-1 mb-3">
                  <bdi>
                    404
                  </bdi>
                </p>
                <h2 id="err404Title" className="fs-2 fw-bold text-title mb-3">
                  Page Not Found
                </h2>
                <p className="fs-lg text-body-2 mb-2">
                  The page you asked for has moved, been renamed, or never existed at all.
                </p>
                <p className="fs-md text-muted-2 mb-4">
                  Head back to a dashboard you use every day, or search for it from the top bar.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  <a href="/" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                    {" "}
                    <span>
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
          <span className="accent-edge-b text-cat-violet" aria-hidden="true" />
        </div>
        {/* ===== copy to here ===== */}
      </section>
      {/* ===== 405 &mdash; Method Not Allowed ===== */}
      <section className="mb-4" id="err-405" aria-labelledby="err405Title">
        {/* Gallery label &mdash; leave this behind when you lift the block below */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
          <span className="fs-5 fw-bold text-title">
            <bdi>
              405
            </bdi>
            {" "}
            — Method Not Allowed
          </span>
          <span className="badge-soft tint-brand text-nowrap">
            Client error ·
            {" "}
            <bdi>
              4xx
            </bdi>
          </span>
        </div>
        {/* ===== copy from here ===== */}
        <div className="card text-cat-brand bg-wash-current overflow-hidden">
          <div className="card-body d-flex align-items-center justify-content-center px-3 px-md-4 py-5">
            <div className="row justify-content-center w-100">
              <div className="col-12 col-md-10 col-lg-9 col-xxl-7 text-center">
                <span className="icon-box icon-box-xl tint-brand mx-auto mb-4" aria-hidden="true">
                  <i data-lucide="ban" />
                </span>
                <p className="display-1 fw-bold text-title lh-1 mb-3">
                  <bdi>
                    405
                  </bdi>
                </p>
                <h2 id="err405Title" className="fs-2 fw-bold text-title mb-3">
                  Method Not Allowed
                </h2>
                <p className="fs-lg text-body-2 mb-2">
                  That endpoint exists, but it doesn't accept the kind of request that was just made.
                </p>
                <p className="fs-md text-muted-2 mb-4">
                  The response lists the methods it does accept — switch to one of those and retry.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  <a href="/" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                    {" "}
                    <span>
                      Return to dashboard
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
          <span className="accent-edge-b text-cat-brand" aria-hidden="true" />
        </div>
        {/* ===== copy to here ===== */}
      </section>
      {/* ===== 408 &mdash; Request Timeout ===== */}
      <section className="mb-4" id="err-408" aria-labelledby="err408Title">
        {/* Gallery label &mdash; leave this behind when you lift the block below */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
          <span className="fs-5 fw-bold text-title">
            <bdi>
              408
            </bdi>
            {" "}
            — Request Timeout
          </span>
          <span className="badge-soft tint-blue text-nowrap">
            Client error ·
            {" "}
            <bdi>
              4xx
            </bdi>
          </span>
        </div>
        {/* ===== copy from here ===== */}
        <div className="card text-cat-blue bg-wash-current overflow-hidden">
          <div className="card-body d-flex align-items-center justify-content-center px-3 px-md-4 py-5">
            <div className="row justify-content-center w-100">
              <div className="col-12 col-md-10 col-lg-9 col-xxl-7 text-center">
                <span className="icon-box icon-box-xl tint-blue mx-auto mb-4" aria-hidden="true">
                  <i data-lucide="timer-off" />
                </span>
                <p className="display-1 fw-bold text-title lh-1 mb-3">
                  <bdi>
                    408
                  </bdi>
                </p>
                <h2 id="err408Title" className="fs-2 fw-bold text-title mb-3">
                  Request Timeout
                </h2>
                <p className="fs-lg text-body-2 mb-2">
                  Your request took longer to reach us than the gateway was willing to wait.
                </p>
                <p className="fs-md text-muted-2 mb-4">
                  Nothing was saved. On a steadier connection a retry usually goes straight through.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  <a href="/" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                    {" "}
                    <span>
                      Return to dashboard
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
          <span className="accent-edge-b text-cat-blue" aria-hidden="true" />
        </div>
        {/* ===== copy to here ===== */}
      </section>
      {/* ===== 410 &mdash; Gone ===== */}
      <section className="mb-4" id="err-410" aria-labelledby="err410Title">
        {/* Gallery label &mdash; leave this behind when you lift the block below */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
          <span className="fs-5 fw-bold text-title">
            <bdi>
              410
            </bdi>
            {" "}
            — Gone
          </span>
          <span className="badge-soft tint-slate text-nowrap">
            Client error ·
            {" "}
            <bdi>
              4xx
            </bdi>
          </span>
        </div>
        {/* ===== copy from here ===== */}
        <div className="card text-cat-slate bg-wash-current overflow-hidden">
          <div className="card-body d-flex align-items-center justify-content-center px-3 px-md-4 py-5">
            <div className="row justify-content-center w-100">
              <div className="col-12 col-md-10 col-lg-9 col-xxl-7 text-center">
                <span className="icon-box icon-box-xl tint-slate mx-auto mb-4" aria-hidden="true">
                  <i data-lucide="link-2-off" />
                </span>
                <p className="display-1 fw-bold text-title lh-1 mb-3">
                  <bdi>
                    410
                  </bdi>
                </p>
                <h2 id="err410Title" className="fs-2 fw-bold text-title mb-3">
                  Gone
                </h2>
                <p className="fs-lg text-body-2 mb-2">
                  This resource was deliberately removed, and there's no forwarding address for it.
                </p>
                <p className="fs-md text-muted-2 mb-4">
                  The archive keeps a read-only copy if you still need what was here.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  <a href="/timeline" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                    {" "}
                    <span>
                      Browse the archive
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
          <span className="accent-edge-b text-cat-slate" aria-hidden="true" />
        </div>
        {/* ===== copy to here ===== */}
      </section>
      {/* ===== 429 &mdash; Too Many Requests ===== */}
      <section className="mb-4" id="err-429" aria-labelledby="err429Title">
        {/* Gallery label &mdash; leave this behind when you lift the block below */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
          <span className="fs-5 fw-bold text-title">
            <bdi>
              429
            </bdi>
            {" "}
            — Too Many Requests
          </span>
          <span className="badge-soft tint-cyan text-nowrap">
            Client error ·
            {" "}
            <bdi>
              4xx
            </bdi>
          </span>
        </div>
        {/* ===== copy from here ===== */}
        <div className="card text-cat-cyan bg-wash-current overflow-hidden">
          <div className="card-body d-flex align-items-center justify-content-center px-3 px-md-4 py-5">
            <div className="row justify-content-center w-100">
              <div className="col-12 col-md-10 col-lg-9 col-xxl-7 text-center">
                <span className="icon-box icon-box-xl tint-cyan mx-auto mb-4" aria-hidden="true">
                  <i data-lucide="gauge" />
                </span>
                <p className="display-1 fw-bold text-title lh-1 mb-3">
                  <bdi>
                    429
                  </bdi>
                </p>
                <h2 id="err429Title" className="fs-2 fw-bold text-title mb-3">
                  Too Many Requests
                </h2>
                <p className="fs-lg text-body-2 mb-2">
                  You've used up this plan's request allowance for the current window.
                </p>
                <p className="fs-md text-muted-2 mb-4">
                  The limit resets shortly, and a larger plan lifts the cap straight away.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  <a href="/pricing" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                    {" "}
                    <span>
                      {"View plans & limits"}
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
          <span className="accent-edge-b text-cat-cyan" aria-hidden="true" />
        </div>
        {/* ===== copy to here ===== */}
      </section>
      {/* ===== 500 &mdash; Internal Server Error ===== */}
      <section className="mb-4" id="err-500" aria-labelledby="err500Title">
        {/* Gallery label &mdash; leave this behind when you lift the block below */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
          <span className="fs-5 fw-bold text-title">
            <bdi>
              500
            </bdi>
            {" "}
            — Internal Server Error
          </span>
          <span className="badge-soft tint-danger text-nowrap">
            Server error ·
            {" "}
            <bdi>
              5xx
            </bdi>
          </span>
        </div>
        {/* ===== copy from here ===== */}
        <div className="card text-danger bg-wash-current overflow-hidden">
          <div className="card-body d-flex align-items-center justify-content-center px-3 px-md-4 py-5">
            <div className="row justify-content-center w-100">
              <div className="col-12 col-md-10 col-lg-9 col-xxl-7 text-center">
                <span className="icon-box icon-box-xl tint-danger mx-auto mb-4" aria-hidden="true">
                  <i data-lucide="server-crash" />
                </span>
                <p className="display-1 fw-bold text-title lh-1 mb-3">
                  <bdi>
                    500
                  </bdi>
                </p>
                <h2 id="err500Title" className="fs-2 fw-bold text-title mb-3">
                  Internal Server Error
                </h2>
                <p className="fs-lg text-body-2 mb-2">
                  Something broke on our side while we were handling your request. This one is on us.
                </p>
                <p className="fs-md text-muted-2 mb-4">
                  The incident is already logged. Sending us the request ID gets it looked at faster.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  <a href="/help-desk" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                    {" "}
                    <span>
                      Report this incident
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
          <span className="accent-edge-b text-danger" aria-hidden="true" />
        </div>
        {/* ===== copy to here ===== */}
      </section>
      {/* ===== 502 &mdash; Bad Gateway ===== */}
      <section className="mb-4" id="err-502" aria-labelledby="err502Title">
        {/* Gallery label &mdash; leave this behind when you lift the block below */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
          <span className="fs-5 fw-bold text-title">
            <bdi>
              502
            </bdi>
            {" "}
            — Bad Gateway
          </span>
          <span className="badge-soft tint-magenta text-nowrap">
            Server error ·
            {" "}
            <bdi>
              5xx
            </bdi>
          </span>
        </div>
        {/* ===== copy from here ===== */}
        <div className="card text-cat-magenta bg-wash-current overflow-hidden">
          <div className="card-body d-flex align-items-center justify-content-center px-3 px-md-4 py-5">
            <div className="row justify-content-center w-100">
              <div className="col-12 col-md-10 col-lg-9 col-xxl-7 text-center">
                <span className="icon-box icon-box-xl tint-magenta mx-auto mb-4" aria-hidden="true">
                  <i data-lucide="unplug" />
                </span>
                <p className="display-1 fw-bold text-title lh-1 mb-3">
                  <bdi>
                    502
                  </bdi>
                </p>
                <h2 id="err502Title" className="fs-2 fw-bold text-title mb-3">
                  Bad Gateway
                </h2>
                <p className="fs-lg text-body-2 mb-2">
                  A service behind this page answered with something the gateway couldn't use.
                </p>
                <p className="fs-md text-muted-2 mb-4">
                  These usually clear within a minute or two, so refreshing is safe.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  <a href="/help-desk" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                    {" "}
                    <span>
                      Check system status
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
          <span className="accent-edge-b text-cat-magenta" aria-hidden="true" />
        </div>
        {/* ===== copy to here ===== */}
      </section>
      {/* ===== 503 &mdash; Service Unavailable ===== */}
      <section className="mb-4" id="err-503" aria-labelledby="err503Title">
        {/* Gallery label &mdash; leave this behind when you lift the block below */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
          <span className="fs-5 fw-bold text-title">
            <bdi>
              503
            </bdi>
            {" "}
            — Service Unavailable
          </span>
          <span className="badge-soft tint-emerald text-nowrap">
            Server error ·
            {" "}
            <bdi>
              5xx
            </bdi>
          </span>
        </div>
        {/* ===== copy from here ===== */}
        <div className="card text-cat-emerald bg-wash-current overflow-hidden">
          <div className="card-body d-flex align-items-center justify-content-center px-3 px-md-4 py-5">
            <div className="row justify-content-center w-100">
              <div className="col-12 col-md-10 col-lg-9 col-xxl-7 text-center">
                <span className="icon-box icon-box-xl tint-emerald mx-auto mb-4" aria-hidden="true">
                  <i data-lucide="wrench" />
                </span>
                <p className="display-1 fw-bold text-title lh-1 mb-3">
                  <bdi>
                    503
                  </bdi>
                </p>
                <h2 id="err503Title" className="fs-2 fw-bold text-title mb-3">
                  Service Unavailable
                </h2>
                <p className="fs-lg text-body-2 mb-2">
                  We're briefly out of capacity, or a planned maintenance window is open right now.
                </p>
                <p className="fs-md text-muted-2 mb-4">
                  Nothing is lost. The status page carries live progress and when we expect to be back.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  <a href="/help-desk" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                    {" "}
                    <span>
                      Check maintenance status
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
          <span className="accent-edge-b text-cat-emerald" aria-hidden="true" />
        </div>
        {/* ===== copy to here ===== */}
      </section>
      {/* ===== 504 &mdash; Gateway Timeout ===== */}
      <section className="mb-4" id="err-504" aria-labelledby="err504Title">
        {/* Gallery label &mdash; leave this behind when you lift the block below */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
          <span className="fs-5 fw-bold text-title">
            <bdi>
              504
            </bdi>
            {" "}
            — Gateway Timeout
          </span>
          <span className="badge-soft tint-blue text-nowrap">
            Server error ·
            {" "}
            <bdi>
              5xx
            </bdi>
          </span>
        </div>
        {/* ===== copy from here ===== */}
        <div className="card text-cat-blue bg-wash-current overflow-hidden">
          <div className="card-body d-flex align-items-center justify-content-center px-3 px-md-4 py-5">
            <div className="row justify-content-center w-100">
              <div className="col-12 col-md-10 col-lg-9 col-xxl-7 text-center">
                <span className="icon-box icon-box-xl tint-blue mx-auto mb-4" aria-hidden="true">
                  <i data-lucide="hourglass" />
                </span>
                <p className="display-1 fw-bold text-title lh-1 mb-3">
                  <bdi>
                    504
                  </bdi>
                </p>
                <h2 id="err504Title" className="fs-2 fw-bold text-title mb-3">
                  Gateway Timeout
                </h2>
                <p className="fs-lg text-body-2 mb-2">
                  A service behind this page accepted your request but never answered in time.
                </p>
                <p className="fs-md text-muted-2 mb-4">
                  Retrying is safe — nothing was written before the gateway gave up waiting.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  <a href="/" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                    {" "}
                    <span>
                      Return to dashboard
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
          <span className="accent-edge-b text-cat-blue" aria-hidden="true" />
        </div>
        {/* ===== copy to here ===== */}
      </section>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}
