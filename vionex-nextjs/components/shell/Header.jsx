/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
export default function Header() {
  return (
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
                      Mark replied to your report “Q2 Token Spend”.
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
  );
}
