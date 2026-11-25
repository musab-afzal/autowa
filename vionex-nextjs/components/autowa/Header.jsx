/* AutoWA top bar: menu toggles, theme controls and the signed-in user's menu. */

function initials(name) {
  return (
    String(name || "?")
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join("") || "?"
  );
}

export default function Header({ user }) {
  const roleLabel = user.role === "admin" ? "Super Admin" : "User";
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
        <span className="vr d-none d-md-block opacity-25" />

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
            <span
              className="avatar radius-md bg-grad-theme text-white fw-bold d-inline-flex align-items-center justify-content-center"
              aria-hidden="true"
            >
              {initials(user.name)}
            </span>
            <span className="d-none d-xl-block lh-sm text-start pe-1">
              <span className="d-block fs-md text-muted-2">Hey, Welcome!</span>
              <span className="d-block fw-medium text-title">{user.name}</span>
            </span>
            <i data-lucide="chevron-down" className="d-none d-xl-block dd-caret icon-18" />
          </a>
          <div className="dropdown-menu dropdown-menu-end profile-menu p-0">
            <div className="d-flex align-items-center gap-3 p-3 bg-soft border-b-soft">
              <span
                className="avatar avatar-lg radius-md bg-grad-theme text-white fw-bold d-inline-flex align-items-center justify-content-center"
                aria-hidden="true"
              >
                {initials(user.name)}
              </span>
              <span className="lh-sm overflow-hidden">
                <span className="d-block fw-semibold text-title text-truncate">{user.name}</span>
                <span className="d-block fs-md text-body-2 text-truncate">{user.email}</span>
                <span className="badge-soft d-inline-block mt-1">{roleLabel}</span>
              </span>
            </div>
            <div className="p-2">
              <a href="/profile" className="dropdown-item">
                <i data-lucide="circle-user-round" />
                My Profile
              </a>
              <a href="/profile/package" className="dropdown-item">
                <i data-lucide="gem" />
                My Package
              </a>
              <a href="/whatsapp" className="dropdown-item">
                <i data-lucide="qr-code" />
                Login to WhatsApp
              </a>
            </div>
            <div className="dropdown-divider" />
            <form className="p-2" method="post" action="/api/auth/logout">
              <button type="submit" className="dropdown-item dropdown-item-danger">
                <i data-lucide="log-out" />
                Log out
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
