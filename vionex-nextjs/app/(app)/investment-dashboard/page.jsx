/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — AI Dashboard",
  description: "Vionex enterprise admin dashboard — AI operations overview built with Bootstrap 5, CSS variables and a scalable design system.",
};

const scripts = [
    "/assets/js/jquery.min.js",
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/lucide.min.js",
    "/assets/js/apexcharts.min.js",
    "/assets/js/jsvectormap.min.js",
    "/assets/js/jsvectormap-world.js",
    "/assets/js/maps.js",
    "/assets/js/dashboard.js",
    "/assets/js/charts.js",
  ];

export default function Page() {
  return (
    <AppShell
      scripts={scripts}
      header={
      <>
        <header className="app-header on-dark d-flex align-items-center gap-2 gap-md-3 px-3 px-lg-4 flex-shrink-0">
          <button
            type="button"
            className="icon-btn transition-base d-lg-none"
            data-action="toggle-sidebar"
            aria-label="Toggle menu"
          >
            <i data-lucide="menu" />
          </button>
          <button
            type="button"
            className="icon-btn transition-base header-expand"
            data-action="toggle-sidebar"
            aria-label="Expand sidebar"
            title="Expand sidebar"
          >
            <i data-lucide="panel-left-open" />
          </button>
          <div className="header-search d-none d-sm-block" role="search">
            <i data-lucide="search" />
            {" "}
            <input type="search" id="globalSearch" name="q" placeholder="Global search" aria-label="Global search" />
            {" "}
            <kbd>
              ⌘ F
            </kbd>
          </div>
          <div className="d-flex align-items-center gap-2 gap-md-3 ms-auto">
            <button
              type="button"
              className="icon-btn transition-base"
              data-bs-toggle="offcanvas"
              data-bs-target="#customizer"
              aria-controls="customizer"
              aria-label="Theme settings"
            >
              <i data-lucide="settings" />
            </button>
            <button
              type="button"
              className="icon-btn transition-base d-none d-sm-inline-flex"
              data-action="toggle-mode"
              aria-label="Toggle theme"
            >
              <i data-lucide="moon" data-mode-icon="" />
            </button>
            {/* ========== NOTIFICATION CENTER ========== */}
            <div className="dropdown">
              <button
                className="icon-btn transition-base"
                type="button"
                id="notifToggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                data-bs-offset="0,10"
                aria-expanded="false"
                aria-label="Notifications, 3 unread"
              >
                <i data-lucide="bell" />
                <span className="notif-count" data-notif-count="">
                  3
                </span>
              </button>
              {" "}
              <div className="dropdown-menu dropdown-menu-end notif-menu p-0">
                <div className="d-flex align-items-center justify-content-between p-3 border-b-soft">
                  <span className="d-flex align-items-center gap-2">
                    <span className="fw-semibold text-title">
                      Notifications
                    </span>
                    <span className="badge-soft" data-notif-pill="">
                      3 New
                    </span>
                  </span>
                  <button className="btn btn-ghost btn-sm px-2 py-1" type="button" data-action="notif-read-all">
                    Mark all read
                  </button>
                </div>
                <div className="notif-body overflow-y-auto p-2 scrollbar-thin" data-notif-body="">
                  <div className="notif-state d-none" data-notif-loading="">
                    <span className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">
                        Loading…
                      </span>
                    </span>
                    <p className="fs-md text-body-2 mb-0 mt-2">
                      Loading notifications…
                    </p>
                  </div>
                  {" "}
                  <div className="notif-state d-none" data-notif-empty="">
                    <span className="notif-empty-icon">
                      <i data-lucide="bell-off" />
                    </span>
                    <p className="fw-semibold text-title mb-1 mt-2">
                      You're all caught up
                    </p>
                    <p className="fs-md text-body-2 mb-0">
                      No new notifications right now.
                    </p>
                  </div>
                  <div className="notif-list d-flex flex-column" data-notif-list="">
                    <a href="#" className="notif-item unread">
                      <span className="feed-icon tint-success">
                        <i data-lucide="circle-check-big" />
                      </span>
                      <span className="notif-content d-flex flex-column">
                        <span className="notif-title">
                          Model deployed
                        </span>
                        <span className="notif-text">
                          GPT-4o fine-tune v3 is live in production.
                        </span>
                        <span className="notif-time">
                          <i data-lucide="clock" />
                          2 min ago
                        </span>
                      </span>
                      <span className="notif-unread-dot" role="img" aria-label="Unread" />
                    </a>
                    <a href="#" className="notif-item unread">
                      <span className="feed-icon tint-primary">
                        <i data-lucide="user-round-plus" />
                      </span>
                      <span className="notif-content d-flex flex-column">
                        <span className="notif-title">
                          New team member
                        </span>
                        <span className="notif-text">
                          Priya Nair joined the AI Research workspace.
                        </span>
                        <span className="notif-time">
                          <i data-lucide="clock" />
                          25 min ago
                        </span>
                      </span>
                      <span className="notif-unread-dot" role="img" aria-label="Unread" />
                    </a>
                    <a href="#" className="notif-item unread">
                      <span className="feed-icon tint-warning">
                        <i data-lucide="triangle-alert" />
                      </span>
                      <span className="notif-content d-flex flex-column">
                        <span className="notif-title">
                          GPU quota almost full
                        </span>
                        <span className="notif-text">
                          You've used 92% of this month's compute budget.
                        </span>
                        <span className="notif-time">
                          <i data-lucide="clock" />
                          1 hour ago
                        </span>
                      </span>
                      <span className="notif-unread-dot" role="img" aria-label="Unread" />
                    </a>
                    <a href="#" className="notif-item">
                      <span className="feed-icon tint-info">
                        <i data-lucide="message-square" />
                      </span>
                      <span className="notif-content d-flex flex-column">
                        <span className="notif-title">
                          New comment
                        </span>
                        <span className="notif-text">
                          Mark replied to your report "Token Spend".
                        </span>
                        <span className="notif-time">
                          <i data-lucide="clock" />
                          Yesterday
                        </span>
                      </span>
                      <span className="notif-unread-dot" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="notif-foot p-2">
                  <a href="#" className="d-flex align-items-center justify-content-center gap-2 fw-medium">
                    View all notifications
                    <i data-lucide="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <span className="vr d-none d-md-block opacity-25" />
            {/* ========== PROFILE MENU ========== */}
            <div className="dropdown">
              <a
                href="#"
                className="header-user d-flex align-items-center gap-2 p-1 rounded-pill transition-base"
                id="profileToggle"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-offset="0,10"
                aria-expanded="false"
                aria-label="Open profile menu"
              >
                <span className="avatar radius-md">
                  <img src="/assets/images/avatar-user.png" width="45" height="45" alt="Ravisha V" />
                </span>
                <span className="d-none d-xl-block lh-sm text-start pe-1">
                  {" "}
                  <span className="d-block fs-md text-muted-2">
                    Hey, Welcome!
                  </span>
                  {" "}
                  <span className="d-block fw-medium text-title">
                    Ravisha V
                  </span>
                  {" "}
                </span>
                <i data-lucide="chevron-down" className="d-none d-xl-block dd-caret icon-18" />
              </a>
              {" "}
              <div className="dropdown-menu dropdown-menu-end profile-menu p-0">
                <div className="d-flex align-items-center gap-3 p-3 bg-soft border-b-soft">
                  <span className="avatar avatar-lg radius-md">
                    <img src="/assets/images/avatar-user.png" width="56" height="56" alt="" />
                  </span>
                  <span className="lh-sm overflow-hidden">
                    {" "}
                    <span className="d-block fw-semibold text-title text-truncate">
                      Ravisha V
                    </span>
                    {" "}
                    <span className="d-block fs-md text-body-2 text-truncate">
                      ravisha@vionex.com
                    </span>
                    {" "}
                    <span className="badge-soft d-inline-block mt-1">
                      Administrator
                    </span>
                    {" "}
                  </span>
                </div>
                <div className="p-2">
                  <a href="/user-profile" className="dropdown-item">
                    <i data-lucide="user-round" />
                    My Profile
                  </a>
                  {" "}
                  <a href="/settings" className="dropdown-item">
                    <i data-lucide="settings" />
                    Account Settings
                  </a>
                  {" "}
                  <a href="/pricing" className="dropdown-item">
                    <i data-lucide="wallet" />
                    {"Billing & Plans"}
                  </a>
                  {" "}
                  <a href="#" className="dropdown-item">
                    <i data-lucide="life-buoy" />
                    {"Help & Support"}
                  </a>
                </div>
                <div className="dropdown-divider" />
                <div className="p-2">
                  <a href="/login" className="dropdown-item dropdown-item-danger">
                    <i data-lucide="log-out" />
                    Log out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    }
    >
      {/* ===== Page header ===== */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="fs-4 fw-bold text-title mb-0">
          AI Dashboard
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              AI Dashboard
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Dashboard sections go here ===== */}
      {/* ===== Market ticker, portfolio summary & key metrics ===== */}
      <section
        className="on-dark bg-nav-strong rounded-3 overflow-hidden flex-shrink-0 mb-4"
        aria-labelledby="investor-greeting"
      >
        <div className="bg-nav-deep border-b-soft">
          <div className="marquee marquee-fade">
            <ul className="marquee-track list-unstyled d-flex align-items-stretch mb-0" aria-label="Live market data">
              <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    {"S&P 500"}
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      5,842.34
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    +0.83%
                  </bdi>
                </span>
              </li>
              <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    NASDAQ
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      18,402
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    +1.15%
                  </bdi>
                </span>
              </li>
              <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    DOW
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      43,218
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    +0.31%
                  </bdi>
                </span>
              </li>
              <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    VIX
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      14.82
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-rose border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    -5.23%
                  </bdi>
                </span>
              </li>
              <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    Gold
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      $2,418
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    +0.44%
                  </bdi>
                </span>
              </li>
              <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    BTC
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      $68,240
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    +2.81%
                  </bdi>
                </span>
              </li>
              <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    ETH
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      $3,840
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    +1.62%
                  </bdi>
                </span>
              </li>
              <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    EUR/USD
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      1.0842
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-rose border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    -0.12%
                  </bdi>
                </span>
              </li>
              {/* Second copy — the marquee keyframes travel -50%, so the track
                 has to hold exactly two copies for the loop to be seamless.
                 Hidden from assistive tech so the list is announced once. */}
              <li
                className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
                aria-hidden="true"
              >
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    {"S&P 500"}
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      5,842.34
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    +0.83%
                  </bdi>
                </span>
              </li>
              <li
                className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
                aria-hidden="true"
              >
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    NASDAQ
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      18,402
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    +1.15%
                  </bdi>
                </span>
              </li>
              <li
                className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
                aria-hidden="true"
              >
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    DOW
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      43,218
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    +0.31%
                  </bdi>
                </span>
              </li>
              <li
                className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
                aria-hidden="true"
              >
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    VIX
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      14.82
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-rose border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    -5.23%
                  </bdi>
                </span>
              </li>
              <li
                className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
                aria-hidden="true"
              >
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    Gold
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      $2,418
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    +0.44%
                  </bdi>
                </span>
              </li>
              <li
                className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
                aria-hidden="true"
              >
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    BTC
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      $68,240
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    +2.81%
                  </bdi>
                </span>
              </li>
              <li
                className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
                aria-hidden="true"
              >
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    ETH
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      $3,840
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    +1.62%
                  </bdi>
                </span>
              </li>
              <li
                className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
                aria-hidden="true"
              >
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                    EUR/USD
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-bold text-primary text-truncate">
                    <bdi>
                      1.0842
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-rose border-current flex-shrink-0 fs-xs fw-bold">
                  <bdi>
                    -0.12%
                  </bdi>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-3 p-md-4">
          <div className="row g-4">
            <div className="col-12 col-xxl-6">
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <span className="badge-soft tint-violet border-current d-inline-flex align-items-center gap-2">
                  {" "}
                  <i className="icon-12" data-lucide="sparkles" aria-hidden="true" />
                  AI Executive Overview • August 2026
                  {" "}
                </span>
                <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-2">
                  {" "}
                  <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                  {" "}
                  <bdi>
                    Portfolio Health: 98.4%
                  </bdi>
                  {" "}
                </span>
              </div>
              <h2 id="investor-greeting" className="fs-2 fw-bold text-title mb-2">
                <bdi>
                  Good Morning, Alex
                  {" "}
                  <span aria-hidden="true">
                    👋
                  </span>
                </bdi>
              </h2>
              <p className="fs-md text-primary mb-4">
                Portfolio up
                {" "}
                <bdi>
                  +$71,280 (+29.6%)
                </bdi>
                {" "}YTD ·{" "}
                <bdi>
                  6
                </bdi>
                {" "}
                positions · Last sync 2 min ago
              </p>
              <div className="bg-grad-theme border-theme rounded-4 p-4 mb-4">
                <span className="d-block fs-xs fw-semibold text-uppercase text-primary">
                  Total Portfolio
                </span>
                {" "}
                <span className="d-flex flex-wrap align-items-baseline gap-2 mt-2">
                  <span className="fs-2 fw-bold text-title lh-1">
                    <bdi>
                      $312,480
                    </bdi>
                  </span>
                  <span className="d-inline-flex align-items-center gap-1 fs-md fw-bold text-cat-emerald">
                    <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                    <bdi>
                      +$71,280 (+29.6%)
                    </bdi>
                  </span>
                </span>
                {" "}
                <span
                  className="progress mt-3"
                  role="progressbar"
                  aria-label="Progress toward portfolio goal"
                  aria-valuenow="62"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span className="progress-bar bg-accent" style={{ width: "62%" }} />
                </span>
                {" "}
                <span className="d-flex flex-wrap align-items-center justify-content-between gap-2 fs-xs text-primary mt-2">
                  <bdi>
                    $0
                  </bdi>
                  <bdi>
                    Goal $500K · 62%
                  </bdi>
                </span>
              </div>
              <ul className="list-unstyled row row-cols-2 row-cols-sm-3 row-cols-xl-5 g-3 mb-0">
                <li className="col">
                  <a
                    href="#"
                    className="bg-grad-5 d-flex flex-column align-items-center justify-content-center gap-2 h-100 p-3 rounded-4 text-title text-decoration-none transition-base hover-lift"
                  >
                    <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                      <i data-lucide="plus" />
                    </span>
                    <span className="fs-5 fw-medium">
                      Buy
                    </span>
                  </a>
                </li>
                <li className="col">
                  <a
                    href="#"
                    className="bg-grad-crimson d-flex flex-column align-items-center justify-content-center gap-2 h-100 p-3 rounded-4 text-title text-decoration-none transition-base hover-lift"
                  >
                    <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                      <i data-lucide="minus" />
                    </span>
                    <span className="fs-5 fw-medium">
                      Sell
                    </span>
                  </a>
                </li>
                <li className="col">
                  <a
                    href="#"
                    className="bg-grad-3 d-flex flex-column align-items-center justify-content-center gap-2 h-100 p-3 rounded-4 text-title text-decoration-none transition-base hover-lift"
                  >
                    <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                      <i className="flip-rtl" data-lucide="arrow-down-left" />
                    </span>
                    <span className="fs-5 fw-medium">
                      Deposit
                    </span>
                  </a>
                </li>
                <li className="col">
                  <a
                    href="#"
                    className="bg-grad-bronze d-flex flex-column align-items-center justify-content-center gap-2 h-100 p-3 rounded-4 text-title text-decoration-none transition-base hover-lift"
                  >
                    <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                      <i className="flip-rtl" data-lucide="arrow-up-right" />
                    </span>
                    <span className="fs-5 fw-medium">
                      Withdraw
                    </span>
                  </a>
                </li>
                <li className="col">
                  <a
                    href="#"
                    className="bg-grad-1 d-flex flex-column align-items-center justify-content-center gap-2 h-100 p-3 rounded-4 text-title text-decoration-none transition-base hover-lift"
                  >
                    <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                      <i data-lucide="pie-chart" />
                    </span>
                    <span className="fs-5 fw-medium">
                      Portfolio
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-xxl-6">
              <ul className="list-unstyled row row-cols-1 row-cols-md-2 g-3 mb-0">
                <li className="col">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column gap-2">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <h3 className="fs-md fw-medium text-muted-2 mb-0">
                          <a href="#" className="stretched-link text-reset text-decoration-none">
                            Total Returns
                          </a>
                        </h3>
                        <i className="icon-12 flip-rtl text-muted-2" data-lucide="chevron-right" aria-hidden="true" />
                      </div>
                      <div className="d-flex flex-wrap align-items-baseline gap-2">
                        <span className="fs-4 fw-bold text-title">
                          <bdi>
                            +12.4%
                          </bdi>
                        </span>
                        <span className="badge-soft tint-emerald fs-xs fw-bold">
                          <bdi>
                            +$12.4k
                          </bdi>
                        </span>
                      </div>
                      <p className="fs-md text-primary mb-0">
                        <bdi>
                          Net change across all holdings.
                        </bdi>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column gap-2">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <h3 className="fs-md fw-medium text-muted-2 mb-0">
                          <a href="#" className="stretched-link text-reset text-decoration-none">
                            Dividends
                          </a>
                        </h3>
                        <i className="icon-12 flip-rtl text-muted-2" data-lucide="chevron-right" aria-hidden="true" />
                      </div>
                      <div className="d-flex flex-wrap align-items-baseline gap-2">
                        <span className="fs-4 fw-bold text-title">
                          <bdi>
                            $1,240
                          </bdi>
                        </span>
                        <span className="badge-soft tint-amber fs-xs fw-bold">
                          <bdi>
                            Yield 2.8%
                          </bdi>
                        </span>
                      </div>
                      <p className="fs-md text-primary mb-0">
                        <bdi>
                          Estimated annual dividend income.
                        </bdi>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column gap-2">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <h3 className="fs-md fw-medium text-muted-2 mb-0">
                          <a href="#" className="stretched-link text-reset text-decoration-none">
                            Risk Score
                          </a>
                        </h3>
                        <i className="icon-12 flip-rtl text-muted-2" data-lucide="chevron-right" aria-hidden="true" />
                      </div>
                      <div className="d-flex flex-wrap align-items-baseline gap-2">
                        <span className="fs-4 fw-bold text-title">
                          <bdi>
                            6/10
                          </bdi>
                        </span>
                        <span className="badge-soft tint-amber fs-xs fw-bold">
                          Moderate
                        </span>
                      </div>
                      <p className="fs-md text-primary mb-0">
                        <bdi>
                          Volatility + concentration risk.
                        </bdi>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column gap-2">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <h3 className="fs-md fw-medium text-muted-2 mb-0">
                          <a href="#" className="stretched-link text-reset text-decoration-none">
                            Holdings
                          </a>
                        </h3>
                        <i className="icon-12 flip-rtl text-muted-2" data-lucide="chevron-right" aria-hidden="true" />
                      </div>
                      <div className="d-flex flex-wrap align-items-baseline gap-2">
                        <span className="fs-4 fw-bold text-title">
                          <bdi>
                            18
                          </bdi>
                        </span>
                        <span className="badge-soft tint-emerald fs-xs fw-bold">
                          <bdi>
                            7 winners
                          </bdi>
                        </span>
                      </div>
                      <p className="fs-md text-primary mb-0">
                        <bdi>
                          Stocks + ETFs in your portfolio.
                        </bdi>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column gap-2">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <h3 className="fs-md fw-medium text-muted-2 mb-0">
                          <a href="#" className="stretched-link text-reset text-decoration-none">
                            Market Cap
                          </a>
                        </h3>
                        <i className="icon-12 flip-rtl text-muted-2" data-lucide="chevron-right" aria-hidden="true" />
                      </div>
                      <div className="d-flex flex-wrap align-items-baseline gap-2">
                        <span className="fs-4 fw-bold text-title">
                          <bdi>
                            62% Large
                          </bdi>
                        </span>
                        <span className="badge-soft tint-emerald fs-xs fw-bold">
                          <bdi>
                            24% Mid
                          </bdi>
                        </span>
                      </div>
                      <p className="fs-md text-primary mb-0">
                        <bdi>
                          Large cap exposure vs mid/small cap.
                        </bdi>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column gap-2">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <h3 className="fs-md fw-medium text-muted-2 mb-0">
                          <a href="#" className="stretched-link text-reset text-decoration-none">
                            Top Holding
                          </a>
                        </h3>
                        <i className="icon-12 flip-rtl text-muted-2" data-lucide="chevron-right" aria-hidden="true" />
                      </div>
                      <div className="d-flex flex-wrap align-items-baseline gap-2">
                        <span className="fs-4 fw-bold text-title">
                          AAPL
                        </span>
                        <span className="badge-soft tint-emerald fs-xs fw-bold">
                          <bdi>
                            +4.1%
                          </bdi>
                        </span>
                      </div>
                      <p className="fs-md text-primary mb-0">
                        <bdi>
                          Largest position by market value.
                        </bdi>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Portfolio KPIs ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Key portfolio metrics
        </h2>
        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 g-3 mb-0">
          <li className="col">
            <div className="card overflow-hidden h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <h3 className="d-flex align-items-center gap-2 min-w-0 fs-6 fw-semibold text-title mb-0">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="wallet" />
                    </span>
                    <span className="text-truncate">
                      Portfolio Value
                    </span>
                  </h3>
                  <div className="dropdown flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-dd-fixed=""
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="More actions for Portfolio Value"
                    >
                      <i data-lucide="ellipsis" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye" />
                          View report
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="download" />
                          Export data
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="refresh-cw" />
                          Refresh
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                  <div className="min-w-0">
                    <p className="fs-2 fw-bold text-title text-truncate lh-1 mb-2">
                      <bdi>
                        $1,284,520
                      </bdi>
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-1 px-2">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +18.4%
                        </bdi>
                        {" "}
                      </span>
                      <span className="fs-sm text-muted-2">
                        vs last month
                      </span>
                    </div>
                  </div>
                  <div id="invPortfolioValueSpark" className="chart-inline" />
                </div>
              </div>
              <span className="accent-edge-b text-cat-emerald" aria-hidden="true" />
            </div>
          </li>
          <li className="col">
            <div className="card overflow-hidden h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <h3 className="d-flex align-items-center gap-2 min-w-0 fs-6 fw-semibold text-title mb-0">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="trending-up" />
                    </span>
                    <span className="text-truncate">
                      Total Returns
                    </span>
                  </h3>
                  <div className="dropdown flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-dd-fixed=""
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="More actions for Total Returns"
                    >
                      <i data-lucide="ellipsis" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye" />
                          View report
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="download" />
                          Export data
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="refresh-cw" />
                          Refresh
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                  <div className="min-w-0">
                    <p className="fs-2 fw-bold text-title text-truncate lh-1 mb-2">
                      <bdi>
                        +18.4%
                      </bdi>
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-1 px-2">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +$186,230
                        </bdi>
                        {" "}
                      </span>
                      <span className="fs-sm text-muted-2">
                        {"net P&L"}
                      </span>
                    </div>
                  </div>
                  <div id="invTotalReturnsSpark" className="chart-inline" />
                </div>
              </div>
              <span className="accent-edge-b text-cat-emerald" aria-hidden="true" />
            </div>
          </li>
          <li className="col">
            <div className="card overflow-hidden h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <h3 className="d-flex align-items-center gap-2 min-w-0 fs-6 fw-semibold text-title mb-0">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="percent" />
                    </span>
                    <span className="text-truncate">
                      Dividend Yield
                    </span>
                  </h3>
                  <div className="dropdown flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-dd-fixed=""
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="More actions for Dividend Yield"
                    >
                      <i data-lucide="ellipsis" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye" />
                          View report
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="download" />
                          Export data
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="refresh-cw" />
                          Refresh
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                  <div className="min-w-0">
                    <p className="fs-2 fw-bold text-title text-truncate lh-1 mb-2">
                      <bdi>
                        $12,840
                      </bdi>
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-1 px-2">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                        <bdi>
                          +2.1%
                        </bdi>
                        {" "}
                      </span>
                      <span className="fs-sm text-muted-2">
                        yield
                      </span>
                    </div>
                  </div>
                  <div id="invDividendYieldSpark" className="chart-inline" />
                </div>
              </div>
              <span className="accent-edge-b text-cat-emerald" aria-hidden="true" />
            </div>
          </li>
          <li className="col">
            <div className="card overflow-hidden h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <h3 className="d-flex align-items-center gap-2 min-w-0 fs-6 fw-semibold text-title mb-0">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="layers" />
                    </span>
                    <span className="text-truncate">
                      Active Holdings
                    </span>
                  </h3>
                  <div className="dropdown flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-dd-fixed=""
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="More actions for Active Holdings"
                    >
                      <i data-lucide="ellipsis" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye" />
                          View report
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="download" />
                          Export data
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="refresh-cw" />
                          Refresh
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                  <div className="min-w-0">
                    <p className="fs-2 fw-bold text-title text-truncate lh-1 mb-2">
                      <bdi>
                        47
                      </bdi>
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-1 px-2">
                        {" "}
                        <i className="icon-12" data-lucide="plus" aria-hidden="true" />
                        <bdi>
                          +3
                        </bdi>
                        {" "}
                      </span>
                      <span className="fs-sm text-muted-2">
                        positions
                      </span>
                    </div>
                  </div>
                  <div id="invHoldingsSpark" className="chart-inline" />
                </div>
              </div>
              <span className="accent-edge-b text-cat-emerald" aria-hidden="true" />
            </div>
          </li>
          <li className="col">
            <div className="card overflow-hidden h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <h3 className="d-flex align-items-center gap-2 min-w-0 fs-6 fw-semibold text-title mb-0">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="bar-chart-2" />
                    </span>
                    <span className="text-truncate">
                      {"Net P&L"}
                    </span>
                  </h3>
                  <div className="dropdown flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-dd-fixed=""
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="More actions for Net P and L"
                    >
                      <i data-lucide="ellipsis" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye" />
                          View report
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="download" />
                          Export data
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="refresh-cw" />
                          Refresh
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                  <div className="min-w-0">
                    <p className="fs-2 fw-bold text-title text-truncate lh-1 mb-2">
                      <bdi>
                        +$186,230
                      </bdi>
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-1 px-2">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                        <bdi>
                          +12.1%
                        </bdi>
                        {" "}
                      </span>
                      <span className="fs-sm text-muted-2">
                        YTD
                      </span>
                    </div>
                  </div>
                  <div id="invNetPnlSpark" className="chart-inline" />
                </div>
              </div>
              <span className="accent-edge-b text-cat-emerald" aria-hidden="true" />
            </div>
          </li>
        </ul>
      </section>
      {/* ===== Portfolio performance & asset allocation ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Portfolio performance and asset allocation
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-8">
            <div className="d-flex flex-column gap-3 h-100">
              <div className="card flex-grow-1">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                    <h3 className="fs-5 fw-bold text-title mb-0">
                      Portfolio Performance
                    </h3>
                    <div
                      className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                      role="group"
                      aria-label="Portfolio performance time range"
                    >
                      <button type="button" className="nav-link fw-semibold">
                        1M
                      </button>
                      <button type="button" className="nav-link active fw-semibold">
                        3M
                      </button>
                      <button type="button" className="nav-link fw-semibold">
                        1Y
                      </button>
                    </div>
                  </div>
                  <div id="invPortfolioPerformanceChart" className="chart-area flex-grow-1" />
                  <div className="bg-plain border-theme rounded-3 p-3 mt-3">
                    <ul className="list-unstyled row row-cols-2 row-cols-lg-4 g-3 mb-0">
                      <li className="col">
                        <div className="bg-success-soft border-theme d-flex flex-column gap-2 h-100 p-3 rounded-3">
                          <h4 className="d-flex align-items-center gap-2 min-w-0 fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                            <i className="icon-12 text-cat-emerald" data-lucide="trending-up" aria-hidden="true" />
                            <span>
                              Day High
                            </span>
                          </h4>
                          <p className="fs-6 fw-bold text-cat-emerald text-truncate mb-0">
                            <bdi>
                              $314,826
                            </bdi>
                          </p>
                        </div>
                      </li>
                      <li className="col">
                        <div className="bg-danger-soft border-theme d-flex flex-column gap-2 h-100 p-3 rounded-3">
                          <h4 className="d-flex align-items-center gap-2 min-w-0 fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                            <i className="icon-12 text-cat-red" data-lucide="trending-down" aria-hidden="true" />
                            <span>
                              Day Low
                            </span>
                          </h4>
                          <p className="fs-6 fw-bold text-cat-red text-truncate mb-0">
                            <bdi>
                              $309,648
                            </bdi>
                          </p>
                        </div>
                      </li>
                      <li className="col">
                        <div className="bg-soft border-theme d-flex flex-column gap-2 h-100 p-3 rounded-3">
                          <h4 className="d-flex align-items-center gap-2 min-w-0 fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                            <i className="icon-12" data-lucide="folder" aria-hidden="true" />
                            <span>
                              Open Positions
                            </span>
                          </h4>
                          <p className="fs-6 fw-bold text-title text-truncate mb-0">
                            <bdi>
                              24 assets
                            </bdi>
                          </p>
                        </div>
                      </li>
                      <li className="col">
                        <div className="bg-success-soft border-theme d-flex flex-column gap-2 h-100 p-3 rounded-3">
                          <h4 className="d-flex align-items-center gap-2 min-w-0 fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                            <i
                              className="icon-12 flip-rtl text-cat-emerald"
                              data-lucide="arrow-up-right"
                              aria-hidden="true"
                            />
                            <span>
                              {"Unrealized P&L"}
                            </span>
                          </h4>
                          <p className="fs-6 fw-bold text-cat-emerald text-truncate mb-0">
                            <bdi>
                              +$71,280
                            </bdi>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h3 className="visually-hidden">
                    Market overview
                  </h3>
                  <ul className="list-unstyled row row-cols-2 row-cols-md-3 row-cols-xl-5 g-3 mb-0">
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                        <h4 className="fs-xs fw-semibold text-uppercase text-muted-2 text-truncate mb-0">
                          {"S&P 500"}
                        </h4>
                        <p className="fs-5 fw-bold text-title text-truncate mb-0">
                          <bdi>
                            4,587.20
                          </bdi>
                        </p>
                        <p className="d-flex align-items-center gap-1 fs-md fw-bold text-cat-emerald mb-0">
                          <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +1.2%
                          </bdi>
                        </p>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                        <h4 className="fs-xs fw-semibold text-uppercase text-muted-2 text-truncate mb-0">
                          NASDAQ
                        </h4>
                        <p className="fs-5 fw-bold text-title text-truncate mb-0">
                          <bdi>
                            14,230.45
                          </bdi>
                        </p>
                        <p className="d-flex align-items-center gap-1 fs-md fw-bold text-cat-emerald mb-0">
                          <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +0.8%
                          </bdi>
                        </p>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                        <h4 className="fs-xs fw-semibold text-uppercase text-muted-2 text-truncate mb-0">
                          Dow Jones
                        </h4>
                        <p className="fs-5 fw-bold text-title text-truncate mb-0">
                          <bdi>
                            35,120.60
                          </bdi>
                        </p>
                        <p className="d-flex align-items-center gap-1 fs-md fw-bold text-cat-red mb-0">
                          <i className="icon-12" data-lucide="trending-down" aria-hidden="true" />
                          <bdi>
                            -0.3%
                          </bdi>
                        </p>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                        <h4 className="fs-xs fw-semibold text-uppercase text-muted-2 text-truncate mb-0">
                          Bitcoin
                        </h4>
                        <p className="fs-5 fw-bold text-title text-truncate mb-0">
                          <bdi>
                            $67,450
                          </bdi>
                        </p>
                        <p className="d-flex align-items-center gap-1 fs-md fw-bold text-cat-emerald mb-0">
                          <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +2.5%
                          </bdi>
                        </p>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                        <h4 className="fs-xs fw-semibold text-uppercase text-muted-2 text-truncate mb-0">
                          Gold
                        </h4>
                        <p className="fs-5 fw-bold text-title text-truncate mb-0">
                          <bdi>
                            $2,340
                          </bdi>
                        </p>
                        <p className="d-flex align-items-center gap-1 fs-md fw-bold text-cat-emerald mb-0">
                          <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +0.1%
                          </bdi>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Asset Allocation
                    </h3>
                    <p className="fs-md text-muted-2 mb-0">
                      Premium investment dashboard
                    </p>
                  </div>
                  <span className="badge-soft tint-amber border-current d-inline-flex align-items-center gap-2 flex-shrink-0 fs-xs fw-bold">
                    {" "}
                    <span className="legend-dot legend-dot-sm bg-cat-amber" aria-hidden="true" />
                    Rebalance
                    {" "}
                  </span>
                </div>
                <hr className="border-t-soft opacity-100 my-0" />
                <div>
                  <div className="position-relative">
                    <div id="invAssetAllocationChart" className="chart-area" />
                    <span className="chart-center">
                      <span className="d-block fs-xs fw-medium text-muted-2">
                        Total Portfolio
                      </span>
                      <span className="d-block fs-5 fw-bold text-title">
                        <bdi>
                          $5.00M
                        </bdi>
                      </span>
                    </span>
                  </div>
                  <p className="fs-xs text-muted-2 text-center mt-2 mb-0">
                    {"Last updated: Today, 09:41\u00a0AM"}
                  </p>
                </div>
                <hr className="border-t-soft opacity-100 my-0" />
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="bg-plain border-theme d-flex align-items-center gap-3 px-3 py-2 rounded-3">
                    <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                    <span className="d-flex flex-column gap-1 flex-grow-1 min-w-0">
                      <span className="d-flex align-items-center gap-2">
                        <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                          US Equities
                        </span>
                        <span className="flex-shrink-0 fs-md fw-bold text-title">
                          <bdi>
                            42%
                          </bdi>
                        </span>
                        <span
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="US Equities share of portfolio"
                          aria-valuenow="42"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-blue" style={{ width: "42%" }} />
                        </span>
                      </span>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          $2.10M
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center gap-3 px-3 py-2 rounded-3">
                    <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="d-flex flex-column gap-1 flex-grow-1 min-w-0">
                      <span className="d-flex align-items-center gap-2">
                        <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                          Bonds
                        </span>
                        <span className="flex-shrink-0 fs-md fw-bold text-title">
                          <bdi>
                            22%
                          </bdi>
                        </span>
                        <span
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="Bonds share of portfolio"
                          aria-valuenow="22"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-emerald" style={{ width: "22%" }} />
                        </span>
                      </span>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          $1.10M
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center gap-3 px-3 py-2 rounded-3">
                    <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                    <span className="d-flex flex-column gap-1 flex-grow-1 min-w-0">
                      <span className="d-flex align-items-center gap-2">
                        <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                          Real Estate
                        </span>
                        <span className="flex-shrink-0 fs-md fw-bold text-title">
                          <bdi>
                            16%
                          </bdi>
                        </span>
                        <span
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="Real Estate share of portfolio"
                          aria-valuenow="16"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-violet" style={{ width: "16%" }} />
                        </span>
                      </span>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          $800k
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center gap-3 px-3 py-2 rounded-3">
                    <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                    <span className="d-flex flex-column gap-1 flex-grow-1 min-w-0">
                      <span className="d-flex align-items-center gap-2">
                        <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                          Crypto
                        </span>
                        <span className="flex-shrink-0 fs-md fw-bold text-title">
                          <bdi>
                            10%
                          </bdi>
                        </span>
                        <span
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="Crypto share of portfolio"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "10%" }} />
                        </span>
                      </span>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          $500k
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center gap-3 px-3 py-2 rounded-3">
                    <span className="legend-dot bg-cat-slate" aria-hidden="true" />
                    <span className="d-flex flex-column gap-1 flex-grow-1 min-w-0">
                      <span className="d-flex align-items-center gap-2">
                        <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                          Cash
                        </span>
                        <span className="flex-shrink-0 fs-md fw-bold text-title">
                          <bdi>
                            10%
                          </bdi>
                        </span>
                        <span
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="Cash share of portfolio"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-slate" style={{ width: "10%" }} />
                        </span>
                      </span>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          $500k
                        </bdi>
                      </span>
                    </span>
                  </li>
                </ul>
                <hr className="border-t-soft opacity-100 my-0 mt-auto" />
                <ul className="list-unstyled row row-cols-2 row-cols-sm-3 g-2 mb-0">
                  <li className="col">
                    <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-2 rounded-3">
                      <h4 className="fs-xs fw-semibold text-muted-2 mb-0">
                        Risk Score
                      </h4>
                      <p className="fs-md fw-bold text-title text-truncate mb-0">
                        <bdi>
                          6.2/10
                        </bdi>
                      </p>
                      <p className="fs-xs text-muted-2 mb-0">
                        Moderate
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-2 rounded-3">
                      <h4 className="fs-xs fw-semibold text-muted-2 mb-0">
                        Diversification
                      </h4>
                      <p className="fs-md fw-bold text-title text-truncate mb-0">
                        <bdi>
                          84%
                        </bdi>
                      </p>
                      <p className="fs-xs text-muted-2 mb-0">
                        Good
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-2 rounded-3">
                      <h4 className="fs-xs fw-semibold text-muted-2 mb-0">
                        YTD Return
                      </h4>
                      <p className="fs-md fw-bold text-cat-emerald text-truncate mb-0">
                        <bdi>
                          +8.4%
                        </bdi>
                      </p>
                      <p className="fs-xs text-muted-2 mb-0">
                        vs Benchmark
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Wealth overview & market movers ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Wealth overview and market movers
        </h2>
        <div className="row g-4">
          <div className="col-12 col-xxl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-4 fw-bold text-title mb-0">
                    Wealth Overview
                  </h3>
                  <button type="button" className="btn btn-accent-soft btn-sm rounded-pill fw-semibold">
                    View Details
                  </button>
                </div>
                <div>
                  <p className="display-5 fw-bold text-title lh-1 mb-3">
                    <bdi>
                      $248,750
                    </bdi>
                  </p>
                  <p className="d-flex flex-wrap align-items-center gap-2 mb-0">
                    <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-2 fs-md fw-bold">
                      {" "}
                      <i className="icon-14" data-lucide="trending-up" aria-hidden="true" />
                      <bdi>
                        +12.4% YTD
                      </bdi>
                      {" "}
                    </span>
                    <span className="fs-sm text-muted-2">
                      <bdi>
                        vs benchmark +9.1%
                      </bdi>
                    </span>
                  </p>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-3 flex-grow-1 mb-0">
                  <li className="col">
                    <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                      <h4 className="fs-sm fw-semibold text-muted-2 mb-0">
                        Total Invested
                      </h4>
                      <p className="fs-5 fw-bold text-title text-truncate mb-0">
                        <bdi>
                          $210,000
                        </bdi>
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                      <h4 className="fs-sm fw-semibold text-muted-2 mb-0">
                        {"Unrealized P&L"}
                      </h4>
                      <p className="fs-5 fw-bold text-cat-emerald text-truncate mb-0">
                        <bdi>
                          +$38,750
                        </bdi>
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                      <h4 className="fs-sm fw-semibold text-muted-2 mb-0">
                        Dividend Income
                      </h4>
                      <p className="fs-5 fw-bold text-title text-truncate mb-0">
                        <bdi>
                          $4,280
                        </bdi>
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                      <h4 className="fs-sm fw-semibold text-muted-2 mb-0">
                        XIRR
                      </h4>
                      <p className="fs-5 fw-bold text-title text-truncate mb-0">
                        <bdi>
                          18.2%
                        </bdi>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Market Movers
                  </h3>
                  <span className="fs-sm fw-semibold text-muted-2">
                    Today
                  </span>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                    <h4 className="fs-5 fw-bold text-body-2 mb-2">
                      Top gainers
                    </h4>
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      <li className="bg-plain border-theme d-flex flex-column gap-2 p-3 rounded-3">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-flex align-items-start gap-2 min-w-0">
                            <span className="legend-dot bg-cat-emerald mt-1" aria-hidden="true" />
                            <span className="d-flex flex-column min-w-0 lh-sm">
                              <span className="fs-5 fw-bold text-title text-truncate">
                                Reliance
                              </span>
                              <span className="fs-md text-muted-2 text-truncate">
                                RELIANCE
                              </span>
                              <span className="fs-6 fw-semibold text-body-2 text-truncate">
                                <bdi>
                                  ₹2,450
                                </bdi>
                              </span>
                            </span>
                          </span>
                          <span className="badge-soft tint-emerald flex-shrink-0 fs-sm fw-bold">
                            <bdi>
                              +3.2%
                            </bdi>
                          </span>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                          <div id="invMoverRelianceSpark" className="chart-inline-lg" />
                          <div className="d-flex flex-wrap align-items-center gap-2 fs-xs">
                            <span className="bg-soft border-theme d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill">
                              <span className="fw-semibold text-muted-2">
                                Vol
                              </span>
                              <span className="fw-bold text-title">
                                <bdi>
                                  2.1M
                                </bdi>
                              </span>
                            </span>
                            <span className="bg-soft border-theme d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill">
                              <span className="fw-semibold text-muted-2">
                                MCap
                              </span>
                              <span className="fw-bold text-title">
                                <bdi>
                                  ₹2.4T
                                </bdi>
                              </span>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-column gap-2 p-3 rounded-3">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-flex align-items-start gap-2 min-w-0">
                            <span className="legend-dot bg-cat-emerald mt-1" aria-hidden="true" />
                            <span className="d-flex flex-column min-w-0 lh-sm">
                              <span className="fs-5 fw-bold text-title text-truncate">
                                TCS
                              </span>
                              <span className="fs-md text-muted-2 text-truncate">
                                Tata Consultancy
                              </span>
                              <span className="fs-6 fw-semibold text-body-2 text-truncate">
                                <bdi>
                                  ₹2,450
                                </bdi>
                              </span>
                            </span>
                          </span>
                          <span className="badge-soft tint-emerald flex-shrink-0 fs-sm fw-bold">
                            <bdi>
                              +3.2%
                            </bdi>
                          </span>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                          <div id="invMoverTcsSpark" className="chart-inline-lg" />
                          <div className="d-flex flex-wrap align-items-center gap-2 fs-xs">
                            <span className="bg-soft border-theme d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill">
                              <span className="fw-semibold text-muted-2">
                                Vol
                              </span>
                              <span className="fw-bold text-title">
                                <bdi>
                                  2.1M
                                </bdi>
                              </span>
                            </span>
                            <span className="bg-soft border-theme d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill">
                              <span className="fw-semibold text-muted-2">
                                MCap
                              </span>
                              <span className="fw-bold text-title">
                                <bdi>
                                  ₹2.4T
                                </bdi>
                              </span>
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h4 className="fs-5 fw-bold text-body-2 mb-2">
                      Top losers
                    </h4>
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      <li className="bg-plain border-theme d-flex flex-column gap-2 p-3 rounded-3">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-flex align-items-start gap-2 min-w-0">
                            <span className="legend-dot bg-cat-orange mt-1" aria-hidden="true" />
                            <span className="d-flex flex-column min-w-0 lh-sm">
                              <span className="fs-5 fw-bold text-title text-truncate">
                                HDFC
                              </span>
                              <span className="fs-md text-muted-2 text-truncate">
                                HDFCBANK
                              </span>
                              <span className="fs-6 fw-semibold text-body-2 text-truncate">
                                <bdi>
                                  ₹1,680
                                </bdi>
                              </span>
                            </span>
                          </span>
                          <span className="badge-soft tint-amber flex-shrink-0 fs-sm fw-bold">
                            <bdi>
                              -1.5%
                            </bdi>
                          </span>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                          <div id="invMoverHdfcSpark" className="chart-inline-lg" />
                          <div className="d-flex flex-wrap align-items-center gap-2 fs-xs">
                            <span className="bg-soft border-theme d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill">
                              <span className="fw-semibold text-muted-2">
                                Vol
                              </span>
                              <span className="fw-bold text-title">
                                <bdi>
                                  3.4M
                                </bdi>
                              </span>
                            </span>
                            <span className="bg-soft border-theme d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill">
                              <span className="fw-semibold text-muted-2">
                                MCap
                              </span>
                              <span className="fw-bold text-title">
                                <bdi>
                                  ₹0.9T
                                </bdi>
                              </span>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-column gap-2 p-3 rounded-3">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-flex align-items-start gap-2 min-w-0">
                            <span className="legend-dot bg-cat-orange mt-1" aria-hidden="true" />
                            <span className="d-flex flex-column min-w-0 lh-sm">
                              <span className="fs-5 fw-bold text-title text-truncate">
                                IRFC
                              </span>
                              <span className="fs-md text-muted-2 text-truncate">
                                Indian Railway
                              </span>
                              <span className="fs-6 fw-semibold text-body-2 text-truncate">
                                <bdi>
                                  ₹1,680
                                </bdi>
                              </span>
                            </span>
                          </span>
                          <span className="badge-soft tint-amber flex-shrink-0 fs-sm fw-bold">
                            <bdi>
                              -1.5%
                            </bdi>
                          </span>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                          <div id="invMoverIrfcSpark" className="chart-inline-lg" />
                          <div className="d-flex flex-wrap align-items-center gap-2 fs-xs">
                            <span className="bg-soft border-theme d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill">
                              <span className="fw-semibold text-muted-2">
                                Vol
                              </span>
                              <span className="fw-bold text-title">
                                <bdi>
                                  3.4M
                                </bdi>
                              </span>
                            </span>
                            <span className="bg-soft border-theme d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill">
                              <span className="fw-semibold text-muted-2">
                                MCap
                              </span>
                              <span className="fw-bold text-title">
                                <bdi>
                                  ₹0.9T
                                </bdi>
                              </span>
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Top holdings & SIP investment planner ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Top holdings and SIP investment planner
        </h2>
        <div className="row g-4">
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Top Holdings
                  </h3>
                  <span className="fs-sm fw-semibold text-muted-2">
                    By current value
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 flex-grow-1 mb-0">
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-sm tint-blue fw-bold" aria-hidden="true">
                        A
                      </span>
                      <span className="d-flex flex-column min-w-0 lh-sm">
                        <span className="fs-md fw-bold text-title text-truncate">
                          Apple
                        </span>
                        <span className="fs-sm text-muted-2 text-truncate">
                          AAPL
                        </span>
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $42,500
                        </bdi>
                      </span>
                      <span className="badge-soft tint-emerald fs-sm fw-bold">
                        <bdi>
                          +2.3%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-sm tint-violet fw-bold" aria-hidden="true">
                        M
                      </span>
                      <span className="d-flex flex-column min-w-0 lh-sm">
                        <span className="fs-md fw-bold text-title text-truncate">
                          Microsoft
                        </span>
                        <span className="fs-sm text-muted-2 text-truncate">
                          MSFT
                        </span>
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $38,200
                        </bdi>
                      </span>
                      <span className="badge-soft tint-emerald fs-sm fw-bold">
                        <bdi>
                          +1.8%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-sm tint-amber fw-bold" aria-hidden="true">
                        N
                      </span>
                      <span className="d-flex flex-column min-w-0 lh-sm">
                        <span className="fs-md fw-bold text-title text-truncate">
                          NVIDIA
                        </span>
                        <span className="fs-sm text-muted-2 text-truncate">
                          NVDA
                        </span>
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $28,900
                        </bdi>
                      </span>
                      <span className="badge-soft tint-emerald fs-sm fw-bold">
                        <bdi>
                          +5.1%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-sm tint-rose fw-bold" aria-hidden="true">
                        A
                      </span>
                      <span className="d-flex flex-column min-w-0 lh-sm">
                        <span className="fs-md fw-bold text-title text-truncate">
                          Amazon
                        </span>
                        <span className="fs-sm text-muted-2 text-truncate">
                          AMZN
                        </span>
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $22,400
                        </bdi>
                      </span>
                      <span className="badge-soft tint-amber fs-sm fw-bold">
                        <bdi>
                          -0.4%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-sm tint-rose fw-bold" aria-hidden="true">
                        A
                      </span>
                      <span className="d-flex flex-column min-w-0 lh-sm">
                        <span className="fs-md fw-bold text-title text-truncate">
                          Amazon
                        </span>
                        <span className="fs-sm text-muted-2 text-truncate">
                          AMZN
                        </span>
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $22,400
                        </bdi>
                      </span>
                      <span className="badge-soft tint-amber fs-sm fw-bold">
                        <bdi>
                          -0.4%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-sm tint-blue fw-bold" aria-hidden="true">
                        G
                      </span>
                      <span className="d-flex flex-column min-w-0 lh-sm">
                        <span className="fs-md fw-bold text-title text-truncate">
                          Google
                        </span>
                        <span className="fs-sm text-muted-2 text-truncate">
                          GOOGL
                        </span>
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $18,750
                        </bdi>
                      </span>
                      <span className="badge-soft tint-emerald fs-sm fw-bold">
                        <bdi>
                          +1.2%
                        </bdi>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-4 fw-bold text-title mb-0">
                    SIP Investment Planner
                  </h3>
                  <span className="badge-soft tint-emerald border-current fs-sm fw-bold">
                    On track
                  </span>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-3 mb-0">
                  <li className="col">
                    <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                      <h4 className="fs-xs fw-normal text-muted-2 mb-0">
                        Total SIP Amount (Monthly)
                      </h4>
                      <p className="fs-3 fw-bold text-title text-truncate mb-0">
                        <bdi>
                          ₹5,000
                        </bdi>
                      </p>
                      <p className="fs-xs text-cat-emerald mb-0">
                        <bdi>
                          +12% vs last month
                        </bdi>
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-info-soft border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                      <h4 className="fs-xs fw-normal text-muted-2 mb-0">
                        Next SIP Installment
                      </h4>
                      <p className="fs-3 fw-bold text-cat-blue text-truncate mb-0">
                        <bdi>
                          15 Aug 2026
                        </bdi>
                      </p>
                      <p className="fs-xs text-muted-2 mb-0">
                        Auto-debit from your bank
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                      <h4 className="fs-xs fw-normal text-muted-2 mb-0">
                        SIP Summary
                      </h4>
                      <p className="fs-3 fw-bold text-title text-truncate mb-0">
                        <bdi>
                          4
                        </bdi>
                      </p>
                      <p className="fs-xs text-muted-2 mb-0">
                        Active SIPs
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto">
                  <h4 className="fs-6 fw-bold text-title mb-0">
                    Your SIPs
                  </h4>
                  <button type="button" className="btn btn-accent-soft btn-sm rounded-pill fw-semibold">
                    View All
                  </button>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <caption className="visually-hidden">
                      Your active systematic investment plans
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          Fund Name
                        </th>
                        <th scope="col" className="text-end">
                          Monthly Amount
                        </th>
                        <th scope="col" className="text-end">
                          Next Installment
                        </th>
                        <th scope="col" className="text-end">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="d-flex align-items-center gap-3 min-w-0">
                            <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                            <span className="d-flex flex-column min-w-0 lh-sm">
                              <span className="fs-md fw-semibold text-title">
                                Quant Large Cap Fund Direct Plan
                              </span>
                              <span className="fs-xs text-muted-2">
                                Equity · Large Cap
                              </span>
                            </span>
                          </span>
                        </td>
                        <td className="text-end">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              ₹2,000
                            </bdi>
                          </span>
                        </td>
                        <td className="text-end">
                          <span className="fs-md fw-semibold text-title">
                            <bdi>
                              15 Aug 2026
                            </bdi>
                          </span>
                        </td>
                        <td className="text-end">
                          <span className="badge-soft tint-emerald fs-xs fw-bold">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="d-flex align-items-center gap-3 min-w-0">
                            <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                            <span className="d-flex flex-column min-w-0 lh-sm">
                              <span className="fs-md fw-semibold text-title">
                                Parag Parikh Flexi Cap Fund
                              </span>
                              <span className="fs-xs text-muted-2">
                                Equity · Flexi Cap
                              </span>
                            </span>
                          </span>
                        </td>
                        <td className="text-end">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              ₹1,500
                            </bdi>
                          </span>
                        </td>
                        <td className="text-end">
                          <span className="fs-md fw-semibold text-title">
                            <bdi>
                              15 Aug 2026
                            </bdi>
                          </span>
                        </td>
                        <td className="text-end">
                          <span className="badge-soft tint-emerald fs-xs fw-bold">
                            Active
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="d-flex align-items-center gap-3 min-w-0">
                            <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                            <span className="d-flex flex-column min-w-0 lh-sm">
                              <span className="fs-md fw-semibold text-title">
                                ICICI Prudential Corporate Bond Fund
                              </span>
                              <span className="fs-xs text-muted-2">
                                Debt · Corporate Bond
                              </span>
                            </span>
                          </span>
                        </td>
                        <td className="text-end">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              ₹500
                            </bdi>
                          </span>
                        </td>
                        <td className="text-end">
                          <span className="fs-md fw-semibold text-title">
                            <bdi>
                              15 Aug 2026
                            </bdi>
                          </span>
                        </td>
                        <td className="text-end">
                          <span className="badge-soft tint-emerald fs-xs fw-bold">
                            Active
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Recent transactions ===== */}
      <section className="mb-4" aria-labelledby="transactions-title">
        <h2 id="transactions-title" className="visually-hidden">
          Recent transactions
        </h2>
        <div className="card bg-glass">
          <div className="card-body" data-bulk-scope="">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
              <h3 className="fs-5 fw-bold text-title mb-0">
                Recent Transactions
              </h3>
              <div className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-2">
                <div className="header-search min-w-0" role="search">
                  <i data-lucide="search" />
                  {" "}
                  <input
                    type="search"
                    id="transactionSearch"
                    name="transaction-q"
                    placeholder="Search files..."
                    aria-label="Search transactions"
                  />
                  {" "}
                  <kbd className="d-none d-sm-block">
                    ⌘ F
                  </kbd>
                </div>
                <div className="dropdown flex-grow-1 flex-sm-grow-0">
                  <button
                    type="button"
                    className="btn btn-accent w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                    id="transactionExport"
                    data-bs-toggle="dropdown"
                    data-bs-offset="0,8"
                    aria-expanded="false"
                  >
                    <i className="icon-20" data-lucide="download" aria-hidden="true" />
                    Export
                    {" "}
                    <i className="dd-caret icon-18" data-lucide="chevron-down" aria-hidden="true" />
                  </button>
                  {" "}
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="transactionExport">
                    <li>
                      <button type="button" className="dropdown-item">
                        Export as CSV
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Export as Excel
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Export as PDF
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropdown flex-grow-1 flex-sm-grow-0">
                  <button
                    type="button"
                    className="btn btn-primary w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                    id="transactionShare"
                    data-bs-toggle="dropdown"
                    data-bs-offset="0,8"
                    aria-expanded="false"
                  >
                    <i className="icon-20" data-lucide="link" aria-hidden="true" />
                    Share
                    {" "}
                    <i className="dd-caret icon-18" data-lucide="chevron-down" aria-hidden="true" />
                  </button>
                  {" "}
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="transactionShare">
                    <li>
                      <button type="button" className="dropdown-item">
                        Copy link
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Invite by email
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Embed report
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Bulk action bar — revealed by the selection module while rows are checked */}
            {" "}
            <div
              className="d-flex flex-wrap align-items-center justify-content-between gap-2 px-3 py-2 mb-3 rounded-2 tint-primary d-none"
              data-bulk-bar=""
              role="status"
            >
              <span className="d-inline-flex align-items-center gap-2 fs-md fw-semibold">
                <i className="icon-18" data-lucide="check-check" aria-hidden="true" />
                <span data-bulk-count="">
                  0
                </span>
                selected
              </span>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <button
                  type="button"
                  className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
                >
                  <i className="icon-18" data-lucide="download" aria-hidden="true" />
                  Export
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
                >
                  <i className="icon-18" data-lucide="archive" aria-hidden="true" />
                  Archive
                </button>
                <button type="button" className="btn btn-danger d-inline-flex align-items-center gap-2 text-nowrap">
                  <i className="icon-18" data-lucide="trash-2" aria-hidden="true" />
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle"
                  data-bulk-clear=""
                  aria-label="Clear selection"
                >
                  <i data-lucide="x" />
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle mb-0">
                <caption className="visually-hidden">
                  Recent platform transactions
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="transactionSelectAll"
                        data-bulk-all=""
                        aria-label="Select all rows"
                      />
                    </th>
                    <th scope="col">
                      Invoice Number
                    </th>
                    <th scope="col">
                      Client
                    </th>
                    <th scope="col">
                      Total
                    </th>
                    <th scope="col">
                      Payment Status
                    </th>
                    <th scope="col">
                      Transaction Date
                    </th>
                    <th scope="col">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        defaultChecked
                        aria-label="Select invoice INV-48275910384"
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title text-uppercase">
                        <bdi>
                          INV-48275910384
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                          SR
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Sofia Ramirez
                          </span>
                          <span className="fs-xs text-muted-2">
                            sofia.ramirez@innovatech.com
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $3,750.00
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-success">
                        Completed
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        Sep 28, 2025
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open invoice INV-48275910384"
                        >
                          <i data-lucide="external-link" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-48275910384"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" />
                                View details
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="rotate-ccw" />
                                Refund
                              </button>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-1" />
                            </li>
                            <li>
                              <button type="button" className="dropdown-item dropdown-item-danger">
                                <i data-lucide="trash-2" />
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-48275910385"
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title text-uppercase">
                        <bdi>
                          INV-48275910385
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                          KS
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Kai Sato
                          </span>
                          <span className="fs-xs text-muted-2">
                            kai.sato@innovatech.com
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $3,750.00
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-warning">
                        Pending
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        Sep 28, 2025
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open invoice INV-48275910385"
                        >
                          <i data-lucide="external-link" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-48275910385"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" />
                                View details
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="rotate-ccw" />
                                Refund
                              </button>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-1" />
                            </li>
                            <li>
                              <button type="button" className="dropdown-item dropdown-item-danger">
                                <i data-lucide="trash-2" />
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-48275910386"
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title text-uppercase">
                        <bdi>
                          INV-48275910386
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                          JD
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Jordan Davis
                          </span>
                          <span className="fs-xs text-muted-2">
                            jordan.davis@innovatech.com
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $3,750.00
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-danger">
                        Failed
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        Sep 28, 2025
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open invoice INV-48275910386"
                        >
                          <i data-lucide="external-link" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-48275910386"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" />
                                View details
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="rotate-ccw" />
                                Refund
                              </button>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-1" />
                            </li>
                            <li>
                              <button type="button" className="dropdown-item dropdown-item-danger">
                                <i data-lucide="trash-2" />
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-48275910387"
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title text-uppercase">
                        <bdi>
                          INV-48275910387
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-6" aria-hidden="true">
                          PK
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Priya Kapoor
                          </span>
                          <span className="fs-xs text-muted-2">
                            sophia@techcorp.io
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $3,750.00
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-success">
                        Completed
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        Sep 28, 2025
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open invoice INV-48275910387"
                        >
                          <i data-lucide="external-link" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-48275910387"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" />
                                View details
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="rotate-ccw" />
                                Refund
                              </button>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-1" />
                            </li>
                            <li>
                              <button type="button" className="dropdown-item dropdown-item-danger">
                                <i data-lucide="trash-2" />
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
              <span className="fs-md text-muted-2">
                Showing 1–4 of 8 results
              </span>
              <nav aria-label="Recent transactions pagination">
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous page">
                      <i className="flip-rtl" data-lucide="chevron-left" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next page">
                      <i className="flip-rtl" data-lucide="chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Geographic reach & real-time users ===== */}
      <section className="mb-4" aria-labelledby="geography-title">
        <h2 id="geography-title" className="visually-hidden">
          Geographic reach and real-time users
        </h2>
        <div className="row g-3">
          {/* Geographic analytics */}
          <div className="col-12 col-xxl-6">
            <div className="card bg-glass h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Geographic Analytics
                  </h3>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <button type="button" className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap">
                      <i className="icon-20" data-lucide="chart-column" aria-hidden="true" />
                      Revenue
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap"
                    >
                      <i className="icon-20" data-lucide="users-round" aria-hidden="true" />
                      Users
                    </button>
                  </div>
                </div>
                <div
                  id="geoAnalyticsMap"
                  className="map-area"
                  role="img"
                  aria-label="World map shaded by share of traffic per country"
                />
                <div className="bg-plain border-theme mt-3 p-3 rounded-3">
                  <h4 className="fs-5 fw-bold text-title mb-3">
                    Top Regions
                  </h4>
                  <ul className="d-flex flex-column gap-3 mb-0">
                    <li className="d-flex flex-wrap align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <img src="/assets/images/flag-us.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <span className="fs-6 fw-medium text-body-2">
                          United States
                        </span>
                      </span>
                      <div
                        className="progress progress-lg flex-grow-1"
                        role="progressbar"
                        aria-label="United States share of traffic"
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-blue" style={{ width: "35%" }}>
                          35%
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <img src="/assets/images/flag-ca.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <span className="fs-6 fw-medium text-body-2">
                          Canada
                        </span>
                      </span>
                      <div
                        className="progress progress-lg flex-grow-1"
                        role="progressbar"
                        aria-label="Canada share of traffic"
                        aria-valuenow="26"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-blue" style={{ width: "26%" }}>
                          26%
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <img src="/assets/images/flag-fr.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <span className="fs-6 fw-medium text-body-2">
                          France
                        </span>
                      </span>
                      <div
                        className="progress progress-lg flex-grow-1"
                        role="progressbar"
                        aria-label="France share of traffic"
                        aria-valuenow="18"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-blue" style={{ width: "18%" }}>
                          18%
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <img src="/assets/images/flag-it.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <span className="fs-6 fw-medium text-body-2">
                          Italy
                        </span>
                      </span>
                      <div
                        className="progress progress-lg flex-grow-1"
                        role="progressbar"
                        aria-label="Italy share of traffic"
                        aria-valuenow="14"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-blue" style={{ width: "14%" }}>
                          14%
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <img src="/assets/images/flag-au.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <span className="fs-6 fw-medium text-body-2">
                          Australia
                        </span>
                      </span>
                      <div
                        className="progress progress-lg flex-grow-1"
                        role="progressbar"
                        aria-label="Australia share of traffic"
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-blue" style={{ width: "10%" }}>
                          10%
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <img src="/assets/images/flag-in.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <span className="fs-6 fw-medium text-body-2">
                          India
                        </span>
                      </span>
                      <div
                        className="progress progress-lg flex-grow-1"
                        role="progressbar"
                        aria-label="India share of traffic"
                        aria-valuenow="7"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-blue" style={{ width: "7%" }}>
                          7%
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Real-time users */}
          <div className="col-12 col-xxl-6">
            <div className="card bg-glass h-100">
              <div className="card-body d-flex justify-content-between flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Real-Time Users
                  </h3>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <span className="badge-soft tint-success d-inline-flex align-items-center gap-2">
                      {" "}
                      <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                      Live
                      {" "}
                    </span>
                    <button type="button" className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap">
                      <i className="icon-20" data-lucide="download" aria-hidden="true" />
                      Report
                    </button>
                  </div>
                </div>
                <div className="text-center my-4">
                  <p className="display-1 fw-bold text-cat-emerald lh-1 mb-2">
                    <bdi>
                      1,370
                    </bdi>
                  </p>
                  <p className="fs-4 text-muted-2 mb-0">
                    Active Users Last 48 Hours
                  </p>
                </div>
                <div id="realTimeUsersChart" className="chart-area" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}
