/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Email",
  description: "Vionex email app — mailboxes, a searchable message list and a full-width reading pane built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Email
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item">
              Apps
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Email
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Mail workspace ===== */}
      <section
        className="app-workspace d-flex flex-fill gap-3"
        aria-label="Mailbox"
        data-mail-scope=""
        data-search-scope=""
      >
        {/* ========== Pane 1 — mailboxes (drawer under xl) ========== */}
        <section
          className="offcanvas-xl offcanvas-start app-pane d-flex flex-column"
          tabIndex="-1"
          id="mailFolderPane"
          aria-labelledby="mailFolderTitle"
        >
          <div className="offcanvas-body d-flex flex-fill min-h-0 p-3 p-xl-0 overflow-hidden">
            <div className="card flex-fill min-w-0 mb-0 overflow-hidden">
              <div className="p-3 border-b-soft flex-shrink-0">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <h2 id="mailFolderTitle" className="fs-5 fw-bold text-title mb-0 me-auto">
                    Mailboxes
                  </h2>
                  <button
                    type="button"
                    className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0 d-xl-none"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#mailFolderPane"
                    aria-label="Close mailboxes"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  data-bs-toggle="modal"
                  data-bs-target="#mailComposeModal"
                >
                  <i className="icon-18" data-lucide="square-pen" aria-hidden="true" />
                  Compose
                </button>
              </div>
              <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin p-2">
                <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 mt-1 mb-1">
                  Folders
                </p>
                <ul className="list-unstyled d-flex flex-column gap-1 mb-3">
                  <li>
                    <button
                      type="button"
                      className="list-row-select active transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-filter="inbox"
                      aria-pressed="true"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="inbox" aria-hidden="true" />
                      {" "}
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate" data-mail-label="">
                        Inbox
                      </span>
                      {" "}
                      <span
                        className="badge-soft flex-shrink-0 px-2 py-0"
                        data-mail-count="inbox"
                        data-mail-count-unread=""
                      >
                        <bdi>
                          3
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-filter="unread"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="mail-open" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate" data-mail-label="">
                        Unread
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-mail-count="unread">
                        <bdi>
                          3
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-filter="starred"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="star" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate" data-mail-label="">
                        Starred
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-mail-count="starred">
                        <bdi>
                          3
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-filter="sent"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0 flip-rtl" data-lucide="send" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate" data-mail-label="">
                        Sent
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-mail-count="sent">
                        <bdi>
                          2
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-filter="drafts"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="file-text" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate" data-mail-label="">
                        Drafts
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-mail-count="drafts">
                        <bdi>
                          1
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-filter="archive"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="archive" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate" data-mail-label="">
                        Archive
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-mail-count="archive">
                        <bdi>
                          1
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-filter="spam"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="shield-alert" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate" data-mail-label="">
                        Spam
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-mail-count="spam">
                        <bdi>
                          1
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-filter="trash"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="trash-2" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate" data-mail-label="">
                        Trash
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-mail-count="trash">
                        <bdi>
                          1
                        </bdi>
                      </span>
                    </button>
                  </li>
                </ul>
                <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 mb-1">
                  Labels
                </p>
                <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-filter="work"
                      aria-pressed="false"
                    >
                      <span className="legend-dot bg-cat-violet flex-shrink-0 ms-1 me-1" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate" data-mail-label="">
                        Work
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-mail-count="work">
                        <bdi>
                          8
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-filter="finance"
                      aria-pressed="false"
                    >
                      <span className="legend-dot bg-cat-emerald flex-shrink-0 ms-1 me-1" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate" data-mail-label="">
                        Finance
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-mail-count="finance">
                        <bdi>
                          2
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-filter="travel"
                      aria-pressed="false"
                    >
                      <span className="legend-dot bg-cat-amber flex-shrink-0 ms-1 me-1" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate" data-mail-label="">
                        Travel
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-mail-count="travel">
                        <bdi>
                          1
                        </bdi>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="p-3 border-t-soft flex-shrink-0">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="hard-drive" aria-hidden="true" />
                  <span className="fs-md fw-semibold text-title me-auto">
                    Storage
                  </span>
                  <bdi className="fs-xs text-muted-2">
                    7.4 of 15 GB
                  </bdi>
                </div>
                <div
                  className="progress progress-sm"
                  role="progressbar"
                  aria-label="Mailbox storage used"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar w-50" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========== Pane 2 — message list / reading view ========== */}
        <section className="card flex-fill min-w-0 mb-0 overflow-hidden" aria-labelledby="mailListTitle">
          {/* ===== List view ===== */}
          <div className="d-flex flex-column flex-fill min-h-0" data-mail-view="list" data-bulk-scope="">
            <div className="p-3 border-b-soft flex-shrink-0">
              <div className="d-flex align-items-center gap-2 mb-3">
                <button
                  type="button"
                  className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0 d-xl-none"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mailFolderPane"
                  aria-controls="mailFolderPane"
                  aria-label="Show mailboxes"
                >
                  <i data-lucide="menu" aria-hidden="true" />
                </button>
                <h2
                  id="mailListTitle"
                  className="fs-5 fw-bold text-title text-truncate mb-0 me-auto"
                  data-mail-out="folder"
                >
                  Inbox
                </h2>
                <span className="badge-soft flex-shrink-0">
                  <bdi data-search-count="">
                    9
                  </bdi>
                </span>
                <div className="dropdown flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    id="mailListMenu"
                    data-bs-toggle="dropdown"
                    data-dd-fixed=""
                    data-bs-offset="0,8"
                    aria-expanded="false"
                    aria-label="More mailbox actions"
                  >
                    <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                  </button>
                  {" "}
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="mailListMenu">
                    <li>
                      <button type="button" className="dropdown-item" data-mail-action="read-all">
                        <i data-lucide="mail-check" aria-hidden="true" />
                        Mark all as read
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item" data-mail-action="select-unread">
                        <i data-lucide="mail-open" aria-hidden="true" />
                        Select unread
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item" data-mail-action="select-starred">
                        <i data-lucide="star" aria-hidden="true" />
                        Select starred
                      </button>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button type="button" className="dropdown-item" data-mail-action="select-none">
                        <i data-lucide="x" aria-hidden="true" />
                        Clear selection
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="field-icon mb-3">
                <i className="icon-18" data-lucide="search" aria-hidden="true" />
                {" "}
                <label htmlFor="mailSearch" className="visually-hidden">
                  Search mail
                </label>
                {" "}
                <input
                  type="search"
                  className="form-control"
                  id="mailSearch"
                  name="mail-search"
                  placeholder={"Search people, subjects & text"}
                  data-search-input=""
                />
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  className="form-check-input flex-shrink-0 mt-0 ms-1 me-1"
                  type="checkbox"
                  data-bulk-all=""
                  aria-label="Select all visible messages"
                />
                <div
                  className="nav nav-pills seg-toggle d-inline-flex flex-nowrap min-w-0 gap-1 p-1 rounded-pill bg-soft overflow-x-auto scrollbar-none"
                  role="group"
                  aria-label="Sort messages"
                >
                  <button
                    type="button"
                    className="nav-link active fw-semibold"
                    data-mail-sort="newest"
                    aria-pressed="true"
                  >
                    Newest
                  </button>
                  <button type="button" className="nav-link fw-semibold" data-mail-sort="oldest" aria-pressed="false">
                    Oldest
                  </button>
                  <button type="button" className="nav-link fw-semibold" data-mail-sort="unread" aria-pressed="false">
                    Unread first
                  </button>
                </div>
              </div>
            </div>
            {/* Bulk action bar — revealed by the selection module while rows are checked */}
            <div
              className="d-flex flex-wrap align-items-center gap-2 px-3 py-2 border-b-soft tint-primary flex-shrink-0 d-none"
              data-bulk-bar=""
              role="status"
            >
              <span className="d-inline-flex align-items-center gap-2 fs-md fw-semibold me-auto">
                <i className="icon-18" data-lucide="check-check" aria-hidden="true" />
                <bdi data-bulk-count="">
                  0
                </bdi>
                selected
              </span>
              <button
                type="button"
                className="btn btn-outline-soft btn-sm d-flex align-items-center gap-2"
                data-mail-action="read"
              >
                <i className="icon-16" data-lucide="mail-check" aria-hidden="true" />
                Mark read
              </button>
              <button
                type="button"
                className="btn btn-outline-soft btn-sm d-flex align-items-center gap-2"
                data-mail-action="unread"
              >
                <i className="icon-16" data-lucide="mail-open" aria-hidden="true" />
                Mark unread
              </button>
              <button
                type="button"
                className="btn btn-outline-soft btn-sm d-flex align-items-center gap-2"
                data-mail-action="archive"
              >
                <i className="icon-16" data-lucide="archive" aria-hidden="true" />
                Archive
              </button>
              <button
                type="button"
                className="btn btn-outline-soft btn-sm d-flex align-items-center gap-2 hover-danger"
                data-mail-action="delete"
              >
                <i className="icon-16" data-lucide="trash-2" aria-hidden="true" />
                Delete
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-18 rounded-circle"
                data-bulk-clear=""
                aria-label="Clear selection"
              >
                <i data-lucide="x" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin p-2">
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0" data-mail-list="">
                <li data-filter-tags="inbox unread starred work" data-mail-order="1">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the message from Meera Iyer"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex icon-fill text-cat-amber"
                      data-mail-star=""
                      aria-pressed="true"
                      aria-label="Remove star from this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-tokens"
                    >
                      <span className="avatar avatar-sm flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span
                            className="flex-grow-1 min-w-0 fs-md fw-bold text-title text-truncate"
                            data-mail-strong=""
                          >
                            Meera Iyer
                          </span>
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0"
                            data-lucide="paperclip"
                            aria-hidden="true"
                          />
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            09:42
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="fw-bold text-title" data-mail-strong="">
                              Design tokens v4 are ready for sign-off
                            </span>
                            {" "}
                            — dark-mode contrast is finally clean across all six presets.
                          </span>
                          <span className="badge-soft tint-violet flex-shrink-0 px-2 py-0 d-none d-lg-inline-block">
                            Work
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
                <li data-filter-tags="inbox unread work" data-mail-order="2">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the message from Aarav Shah"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                      data-mail-star=""
                      aria-pressed="false"
                      aria-label="Star this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-roadmap"
                    >
                      <span className="avatar avatar-sm flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span
                            className="flex-grow-1 min-w-0 fs-md fw-bold text-title text-truncate"
                            data-mail-strong=""
                          >
                            Aarav Shah
                          </span>
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            09:05
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="fw-bold text-title" data-mail-strong="">
                              Q4 roadmap review — agenda and pre-read
                            </span>
                            {" "}
                            — two decisions need an owner before Thursday.
                          </span>
                          <span className="badge-soft tint-violet flex-shrink-0 px-2 py-0 d-none d-lg-inline-block">
                            Work
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
                <li data-filter-tags="inbox finance" data-mail-order="3">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the message from Vionex Billing"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                      data-mail-star=""
                      aria-pressed="false"
                      aria-label="Star this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-invoice"
                    >
                      <span className="avatar avatar-sm bg-grad-5 flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        VB
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0 d-none"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-mail-strong="">
                            Vionex Billing
                          </span>
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0"
                            data-lucide="paperclip"
                            aria-hidden="true"
                          />
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            08:20
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="text-body-2" data-mail-strong="">
                              Invoice INV-2098 is ready to download
                            </span>
                            {" "}
                            — the August workspace subscription, paid automatically.
                          </span>
                          <span className="badge-soft tint-emerald flex-shrink-0 px-2 py-0 d-none d-lg-inline-block">
                            Finance
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
                <li data-filter-tags="inbox unread travel" data-mail-order="4">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the message from Nisha Bose"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                      data-mail-star=""
                      aria-pressed="false"
                      aria-label="Star this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-offsite"
                    >
                      <span className="avatar avatar-sm bg-grad-4 flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        NB
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span
                            className="flex-grow-1 min-w-0 fs-md fw-bold text-title text-truncate"
                            data-mail-strong=""
                          >
                            Nisha Bose
                          </span>
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0"
                            data-lucide="paperclip"
                            aria-hidden="true"
                          />
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            Yesterday
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="fw-bold text-title" data-mail-strong="">
                              Team offsite — flights and hotel confirmations
                            </span>
                            {" "}
                            — everything is booked for the 18th.
                          </span>
                          <span className="badge-soft tint-amber flex-shrink-0 px-2 py-0 d-none d-lg-inline-block">
                            Travel
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
                <li data-filter-tags="inbox work" data-mail-order="5">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the message from Kabir Nair"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                      data-mail-star=""
                      aria-pressed="false"
                      aria-label="Star this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-migration"
                    >
                      <span className="avatar avatar-sm flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0 d-none"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-mail-strong="">
                            Kabir Nair
                          </span>
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            Yesterday
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="text-body-2" data-mail-strong="">
                              Migration finished — post-mortem notes inside
                            </span>
                            {" "}
                            — zero errors, and we clawed back 40 minutes.
                          </span>
                          <span className="badge-soft tint-violet flex-shrink-0 px-2 py-0 d-none d-lg-inline-block">
                            Work
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
                <li data-filter-tags="inbox starred work" data-mail-order="6">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the message from Priya Nair"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex icon-fill text-cat-amber"
                      data-mail-star=""
                      aria-pressed="true"
                      aria-label="Remove star from this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-forecast"
                    >
                      <span className="avatar avatar-sm flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        <img src="/assets/images/avatar-4.png" width="34" height="34" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0 d-none"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-mail-strong="">
                            Priya Nair
                          </span>
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0"
                            data-lucide="paperclip"
                            aria-hidden="true"
                          />
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            Tue
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="text-body-2" data-mail-strong="">
                              Forecast model — what the confidence bands mean
                            </span>
                            {" "}
                            — the assumptions written up in one place, as promised.
                          </span>
                          <span className="badge-soft tint-violet flex-shrink-0 px-2 py-0 d-none d-lg-inline-block">
                            Work
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
                <li data-filter-tags="inbox" data-mail-order="7">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the message from Vionex Security"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                      data-mail-star=""
                      aria-pressed="false"
                      aria-label="Star this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-signin"
                    >
                      <span className="avatar avatar-sm bg-grad-3 flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        VS
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0 d-none"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-mail-strong="">
                            Vionex Security
                          </span>
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            Tue
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="text-body-2" data-mail-strong="">
                              New sign-in from a Windows device
                            </span>
                            {" "}
                            — Pune, India. If this was you, nothing to do.
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
                <li data-filter-tags="inbox work" data-mail-order="8">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the message from Dev Sharma"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                      data-mail-star=""
                      aria-pressed="false"
                      aria-label="Star this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-mobile"
                    >
                      <span className="avatar avatar-sm bg-grad-6 flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        DS
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0 d-none"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-mail-strong="">
                            Dev Sharma
                          </span>
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            Mon
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="text-body-2" data-mail-strong="">
                              Mobile client is still on the v1 payload
                            </span>
                            {" "}
                            — is v2 stable enough to move to this sprint?
                          </span>
                          <span className="badge-soft tint-violet flex-shrink-0 px-2 py-0 d-none d-lg-inline-block">
                            Work
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
                <li data-filter-tags="inbox finance" data-mail-order="9">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the message from Anika Rao"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                      data-mail-star=""
                      aria-pressed="false"
                      aria-label="Star this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-renewal"
                    >
                      <span className="avatar avatar-sm bg-grad-1 flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        AR
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0 d-none"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-mail-strong="">
                            Anika Rao
                          </span>
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0"
                            data-lucide="paperclip"
                            aria-hidden="true"
                          />
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            28 Aug
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="text-body-2" data-mail-strong="">
                              Vendor renewal paperwork — signature needed
                            </span>
                            {" "}
                            — the terms are unchanged from last year.
                          </span>
                          <span className="badge-soft tint-emerald flex-shrink-0 px-2 py-0 d-none d-lg-inline-block">
                            Finance
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
                <li data-filter-tags="sent starred work" data-mail-order="10">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the message to Meera Iyer"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex icon-fill text-cat-amber"
                      data-mail-star=""
                      aria-pressed="true"
                      aria-label="Remove star from this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-sent-tokens"
                    >
                      <span className="avatar avatar-sm flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0 d-none"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-mail-strong="">
                            To: Meera Iyer
                          </span>
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            Yesterday
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="text-body-2" data-mail-strong="">
                              Re: Design tokens v4 are ready for sign-off
                            </span>
                            {" "}
                            — sign-off from me, ship it with the Thursday release.
                          </span>
                          <span className="badge-soft tint-violet flex-shrink-0 px-2 py-0 d-none d-lg-inline-block">
                            Work
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
                <li data-filter-tags="sent work" data-mail-order="11">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the message to Aarav Shah"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                      data-mail-star=""
                      aria-pressed="false"
                      aria-label="Star this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-sent-status"
                    >
                      <span className="avatar avatar-sm flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0 d-none"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-mail-strong="">
                            To: Aarav Shah
                          </span>
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0"
                            data-lucide="paperclip"
                            aria-hidden="true"
                          />
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            Fri
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="text-body-2" data-mail-strong="">
                              Weekly status — week 35
                            </span>
                            {" "}
                            — shipped, in flight and blocked, in that order.
                          </span>
                          <span className="badge-soft tint-violet flex-shrink-0 px-2 py-0 d-none d-lg-inline-block">
                            Work
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
                <li data-filter-tags="drafts work" data-mail-order="12">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the draft to Aarav Shah"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                      data-mail-star=""
                      aria-pressed="false"
                      aria-label="Star this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-draft-roadmap"
                    >
                      <span className="avatar avatar-sm bg-grad-3 flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        RV
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0 d-none"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-mail-strong="">
                            Draft — To: Aarav Shah
                          </span>
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            Fri
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="text-body-2" data-mail-strong="">
                              Re: Q4 roadmap review — agenda and pre-read
                            </span>
                            {" "}
                            — happy to own the pricing decision, but I want to…
                          </span>
                          <span className="badge-soft tint-violet flex-shrink-0 px-2 py-0 d-none d-lg-inline-block">
                            Work
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
                <li data-filter-tags="archive" data-mail-order="13">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the message from Design Systems Weekly"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                      data-mail-star=""
                      aria-pressed="false"
                      aria-label="Star this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-news"
                    >
                      <span className="avatar avatar-sm bg-grad-2 flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        DW
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0 d-none"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-mail-strong="">
                            Design Systems Weekly
                          </span>
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            24 Aug
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="text-body-2" data-mail-strong="">
                              Issue 142 — tokens, theming and the cost of drift
                            </span>
                            {" "}
                            — three teams on what a rename really costs.
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
                <li data-filter-tags="spam" data-mail-order="14">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the message from Cloud Offers"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                      data-mail-star=""
                      aria-pressed="false"
                      aria-label="Star this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-promo"
                    >
                      <span className="avatar avatar-sm bg-grad-4 flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        CO
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0 d-none"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-mail-strong="">
                            Cloud Offers
                          </span>
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            22 Aug
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="text-body-2" data-mail-strong="">
                              Final notice: claim your free credits now
                            </span>
                            {" "}
                            — unverified sender, moved here automatically.
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
                <li data-filter-tags="trash" data-mail-order="15">
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-bulk-item=""
                      aria-label="Select the message from Office Admin"
                    />
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                      data-mail-star=""
                      aria-pressed="false"
                      aria-label="Star this message"
                    >
                      <i data-lucide="star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      data-mail-id="mx-lunch"
                    >
                      <span className="avatar avatar-sm bg-grad-5 flex-shrink-0 d-none d-md-grid" aria-hidden="true">
                        OA
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span
                            className="legend-dot legend-dot-sm bg-cat-brand flex-shrink-0 d-none"
                            data-mail-dot=""
                            aria-hidden="true"
                          />
                          <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-mail-strong="">
                            Office Admin
                          </span>
                          <bdi className="fs-xs text-muted-2 flex-shrink-0">
                            20 Aug
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                            <span className="text-body-2" data-mail-strong="">
                              Friday lunch order
                            </span>
                            {" "}
                            — last call for the sandwich count.
                          </span>
                        </span>
                        {" "}
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
              <div className="d-none text-center px-3 py-5" data-search-empty="">
                <span className="notif-empty-icon" aria-hidden="true">
                  <i data-lucide="search-x" />
                </span>
                <p className="fw-semibold text-title mt-2 mb-1">
                  No messages here
                </p>
                <p className="fs-md text-body-2 mb-3">
                  Try another mailbox, or clear the current search.
                </p>
                <button type="button" className="btn btn-outline-soft btn-sm" data-search-clear="">
                  Clear search
                </button>
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 px-3 py-2 border-t-soft flex-shrink-0">
              <p className="fs-xs text-muted-2 mb-0">
                Showing
                {" "}
                <bdi data-search-count="">
                  9
                </bdi>
                {" "}of{" "}
                <bdi data-search-total="">
                  15
                </bdi>
                {" "}
                messages
              </p>
              <p className="fs-xs text-muted-2 mb-0 d-none d-md-block">
                Synced
                {" "}
                <bdi>
                  2 minutes ago
                </bdi>
              </p>
            </div>
          </div>
          {/* ===== Reading view ===== */}
          <div className="d-flex flex-column flex-fill min-h-0 d-none" data-mail-view="read">
            <div className="d-flex align-items-center gap-2 p-3 border-b-soft flex-shrink-0">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0"
                data-mail-back=""
                aria-label="Back to the message list"
              >
                <i className="flip-rtl" data-lucide="arrow-left" aria-hidden="true" />
              </button>
              <div className="flex-grow-1 min-w-0">
                <h3 className="fs-6 fw-bold text-title text-truncate mb-0" data-mail-out="subject">
                  Message
                </h3>
                <p className="fs-xs text-muted-2 text-truncate mb-0">
                  <bdi data-mail-out="meta">
                    1 message
                  </bdi>
                </p>
              </div>
              <div className="d-flex align-items-center gap-1 flex-shrink-0">
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle"
                  data-mail-star=""
                  aria-pressed="false"
                  aria-label="Star this conversation"
                >
                  <i data-lucide="star" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle d-none d-sm-inline-flex"
                  data-mail-action="archive-open"
                  aria-label="Archive this conversation"
                  title="Archive"
                >
                  <i data-lucide="archive" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle"
                  data-mail-action="delete-open"
                  aria-label="Delete this conversation"
                  title="Delete"
                >
                  <i data-lucide="trash-2" aria-hidden="true" />
                </button>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    id="mailReadMenu"
                    data-bs-toggle="dropdown"
                    data-dd-fixed=""
                    data-bs-offset="0,8"
                    aria-expanded="false"
                    aria-label="More message actions"
                  >
                    <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                  </button>
                  {" "}
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="mailReadMenu">
                    <li>
                      <button type="button" className="dropdown-item" data-mail-action="unread-open">
                        <i data-lucide="mail-open" aria-hidden="true" />
                        Mark as unread
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item" data-mail-action="forward">
                        <i data-lucide="corner-up-right" aria-hidden="true" />
                        Forward
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item" data-mail-action="print">
                        <i data-lucide="printer" aria-hidden="true" />
                        Print
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin p-3 p-md-4" data-mail-scroll="">
              {/* Every conversation in the mailbox is written here, one block each.
                 Opening a message reveals its block and retires the rest (.d-none),
                 and the header above reads its subject, participant line and reply
                 target off the block itself — so no thread is rendered in script. */}
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-tokens"
                data-mail-subject="Design tokens v4 are ready for sign-off"
                data-mail-meta="3 messages · Meera Iyer, Ravisha V"
                data-mail-reply-to="Meera Iyer"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-violet">
                    Work
                  </span>
                  <span className="badge-soft tint-amber">
                    Needs sign-off
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-tokens-0"
                        aria-expanded="false"
                        aria-controls="mailBody-mx-tokens-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0" aria-hidden="true">
                          <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Meera Iyer
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              meera@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              me
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Yesterday 17:20
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse" id="mailBody-mx-tokens-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-2">
                          The colour tokens are rebuilt and dark-mode contrast is finally clean across all six presets — every body-size pairing clears 4.5:1 now, including the ones on the soft washes.
                        </p>
                        <p className="fs-md mb-0">
                          I re-ran the visual diff over 40 screens before sending this. Only the stat cards moved, and only by 2px.
                        </p>
                        <div className="border-t-soft pt-3 mt-3">
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                            <bdi>
                              1 attachment
                            </bdi>
                          </p>
                          <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-2 mb-0">
                            <li className="col">
                              <a
                                href="#"
                                className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base"
                                aria-label="Download radius-visual-diff.pdf"
                              >
                                <span className="icon-box icon-box-sm flex-shrink-0 tint-rose" aria-hidden="true">
                                  <i data-lucide="file-text" />
                                </span>
                                <span className="flex-grow-1 min-w-0">
                                  {" "}
                                  <span
                                    className="d-block fs-md fw-semibold text-title text-truncate"
                                    data-mail-file-name=""
                                  >
                                    radius-visual-diff.pdf
                                  </span>
                                  {" "}
                                  <span className="d-block fs-xs text-muted-2 text-truncate">
                                    <bdi data-mail-file-meta="">
                                      2.4 MB · PDF
                                    </bdi>
                                  </span>
                                  {" "}
                                </span>
                                <i
                                  className="icon-16 text-muted-2 flex-shrink-0"
                                  data-lucide="download"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-tokens-1"
                        aria-expanded="false"
                        aria-controls="mailBody-mx-tokens-1"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0" aria-hidden="true">
                          <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Ravisha V
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              ravisha@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              Meera Iyer
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Yesterday 18:02
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse" id="mailBody-mx-tokens-1">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-0">
                          Both read much better, and 2px on the stat cards is well inside tolerance. Sign-off from me — ship it with the Thursday release.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-tokens-2"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-tokens-2"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0" aria-hidden="true">
                          <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Meera Iyer
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              meera@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              me
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Today 09:42
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-tokens-2">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-2">
                          Then we're clear. I'll cut v4 into Thursday's release and update the tokens repo this afternoon.
                        </p>
                        <p className="fs-md mb-0">
                          Attached are the final token sheet and the dark-mode audit, so the change has a paper trail.
                        </p>
                        <div className="border-t-soft pt-3 mt-3">
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                            <bdi>
                              2 attachments
                            </bdi>
                          </p>
                          <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-2 mb-0">
                            <li className="col">
                              <a
                                href="#"
                                className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base"
                                aria-label="Download vionex-tokens-v4.xlsx"
                              >
                                <span className="icon-box icon-box-sm flex-shrink-0 tint-emerald" aria-hidden="true">
                                  <i data-lucide="file-spreadsheet" />
                                </span>
                                <span className="flex-grow-1 min-w-0">
                                  {" "}
                                  <span
                                    className="d-block fs-md fw-semibold text-title text-truncate"
                                    data-mail-file-name=""
                                  >
                                    vionex-tokens-v4.xlsx
                                  </span>
                                  {" "}
                                  <span className="d-block fs-xs text-muted-2 text-truncate">
                                    <bdi data-mail-file-meta="">
                                      860 KB · Sheet
                                    </bdi>
                                  </span>
                                  {" "}
                                </span>
                                <i
                                  className="icon-16 text-muted-2 flex-shrink-0"
                                  data-lucide="download"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li className="col">
                              <a
                                href="#"
                                className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base"
                                aria-label="Download dark-mode-audit.png"
                              >
                                <span className="icon-box icon-box-sm flex-shrink-0 tint-violet" aria-hidden="true">
                                  <i data-lucide="file-image" />
                                </span>
                                <span className="flex-grow-1 min-w-0">
                                  {" "}
                                  <span
                                    className="d-block fs-md fw-semibold text-title text-truncate"
                                    data-mail-file-name=""
                                  >
                                    dark-mode-audit.png
                                  </span>
                                  {" "}
                                  <span className="d-block fs-xs text-muted-2 text-truncate">
                                    <bdi data-mail-file-meta="">
                                      1.1 MB · Image
                                    </bdi>
                                  </span>
                                  {" "}
                                </span>
                                <i
                                  className="icon-16 text-muted-2 flex-shrink-0"
                                  data-lucide="download"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-roadmap"
                data-mail-subject="Q4 roadmap review — agenda and pre-read"
                data-mail-meta="2 messages · Aarav Shah"
                data-mail-reply-to="Aarav Shah"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-violet">
                    Work
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-roadmap-0"
                        aria-expanded="false"
                        aria-controls="mailBody-mx-roadmap-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0" aria-hidden="true">
                          <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Aarav Shah
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              aarav@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              me
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Yesterday 16:40
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse" id="mailBody-mx-roadmap-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-0">
                          Sending the agenda a day early so nobody reads it in the meeting. Two decisions need an owner before Thursday: the pricing tier split, and whether the mobile client ships against the v2 payload this quarter.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-roadmap-1"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-roadmap-1"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0" aria-hidden="true">
                          <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Aarav Shah
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              aarav@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              me
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Today 09:05
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-roadmap-1">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-2">
                          One more thing — I've moved the review to 14:00 so the platform team can join after the migration retro.
                        </p>
                        <p className="fs-md mb-0">
                          If you can only read one section, read the capacity table. Everything else follows from it.
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-invoice"
                data-mail-subject="Invoice INV-2098 is ready to download"
                data-mail-meta="1 message · Vionex Billing"
                data-mail-reply-to="Vionex Billing"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-emerald">
                    Finance
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-invoice-0"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-invoice-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0 bg-grad-5" aria-hidden="true">
                          VB
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Vionex Billing
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              billing@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              me
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Today 08:20
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-invoice-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-2">
                          Your August workspace subscription has been paid automatically with the card ending 4242. No action is needed.
                        </p>
                        <p className="fs-md mb-0">
                          {"The invoice is attached, and it is also available from Billing & Plans in your account settings."}
                        </p>
                        <div className="border-t-soft pt-3 mt-3">
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                            <bdi>
                              1 attachment
                            </bdi>
                          </p>
                          <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-2 mb-0">
                            <li className="col">
                              <a
                                href="#"
                                className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base"
                                aria-label="Download invoice-INV-2098.pdf"
                              >
                                <span className="icon-box icon-box-sm flex-shrink-0 tint-rose" aria-hidden="true">
                                  <i data-lucide="file-text" />
                                </span>
                                <span className="flex-grow-1 min-w-0">
                                  {" "}
                                  <span
                                    className="d-block fs-md fw-semibold text-title text-truncate"
                                    data-mail-file-name=""
                                  >
                                    invoice-INV-2098.pdf
                                  </span>
                                  {" "}
                                  <span className="d-block fs-xs text-muted-2 text-truncate">
                                    <bdi data-mail-file-meta="">
                                      128 KB · PDF
                                    </bdi>
                                  </span>
                                  {" "}
                                </span>
                                <i
                                  className="icon-16 text-muted-2 flex-shrink-0"
                                  data-lucide="download"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-offsite"
                data-mail-subject="Team offsite — flights and hotel confirmations"
                data-mail-meta="1 message · Nisha Bose"
                data-mail-reply-to="Nisha Bose"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-amber">
                    Travel
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-offsite-0"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-offsite-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0 bg-grad-4" aria-hidden="true">
                          NB
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Nisha Bose
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              nisha@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              me
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Yesterday 15:10
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-offsite-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-2">
                          Everything is booked for the 18th. Flights out on the Tuesday morning, back late on the Thursday, and the hotel is a ten-minute walk from the venue.
                        </p>
                        <p className="fs-md mb-0">
                          Please check the name on your booking matches your passport exactly and tell me today if it doesn't — changes are free until Friday.
                        </p>
                        <div className="border-t-soft pt-3 mt-3">
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                            <bdi>
                              2 attachments
                            </bdi>
                          </p>
                          <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-2 mb-0">
                            <li className="col">
                              <a
                                href="#"
                                className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base"
                                aria-label="Download offsite-flights.pdf"
                              >
                                <span className="icon-box icon-box-sm flex-shrink-0 tint-rose" aria-hidden="true">
                                  <i data-lucide="file-text" />
                                </span>
                                <span className="flex-grow-1 min-w-0">
                                  {" "}
                                  <span
                                    className="d-block fs-md fw-semibold text-title text-truncate"
                                    data-mail-file-name=""
                                  >
                                    offsite-flights.pdf
                                  </span>
                                  {" "}
                                  <span className="d-block fs-xs text-muted-2 text-truncate">
                                    <bdi data-mail-file-meta="">
                                      340 KB · PDF
                                    </bdi>
                                  </span>
                                  {" "}
                                </span>
                                <i
                                  className="icon-16 text-muted-2 flex-shrink-0"
                                  data-lucide="download"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li className="col">
                              <a
                                href="#"
                                className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base"
                                aria-label="Download hotel-confirmation.pdf"
                              >
                                <span className="icon-box icon-box-sm flex-shrink-0 tint-rose" aria-hidden="true">
                                  <i data-lucide="file-text" />
                                </span>
                                <span className="flex-grow-1 min-w-0">
                                  {" "}
                                  <span
                                    className="d-block fs-md fw-semibold text-title text-truncate"
                                    data-mail-file-name=""
                                  >
                                    hotel-confirmation.pdf
                                  </span>
                                  {" "}
                                  <span className="d-block fs-xs text-muted-2 text-truncate">
                                    <bdi data-mail-file-meta="">
                                      210 KB · PDF
                                    </bdi>
                                  </span>
                                  {" "}
                                </span>
                                <i
                                  className="icon-16 text-muted-2 flex-shrink-0"
                                  data-lucide="download"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-migration"
                data-mail-subject="Migration finished — post-mortem notes inside"
                data-mail-meta="2 messages · Kabir Nair, Ravisha V"
                data-mail-reply-to="Kabir Nair"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-violet">
                    Work
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-migration-0"
                        aria-expanded="false"
                        aria-controls="mailBody-mx-migration-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0" aria-hidden="true">
                          <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Kabir Nair
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              kabir@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              me
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Yesterday 07:55
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse" id="mailBody-mx-migration-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-2">
                          The migration finished at 03:40 with zero errors and no rollback. The cutover window was 40 minutes shorter than planned because the index rebuild ran in parallel this time.
                        </p>
                        <p className="fs-md mb-0">
                          One thing worth carrying forward: the pagination cursor changed shape, so anything still on the v1 payload needs a look before we retire it.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-migration-1"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-migration-1"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0" aria-hidden="true">
                          <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Ravisha V
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              ravisha@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              Kabir Nair
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Yesterday 09:30
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-migration-1">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-0">
                          Excellent result. I'll flag the cursor change to Dev — the mobile client is the last v1 consumer.
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-forecast"
                data-mail-subject="Forecast model — what the confidence bands mean"
                data-mail-meta="1 message · Priya Nair"
                data-mail-reply-to="Priya Nair"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-violet">
                    Work
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-forecast-0"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-forecast-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0" aria-hidden="true">
                          <img src="/assets/images/avatar-4.png" width="34" height="34" alt="" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Priya Nair
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              priya@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              me
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Tue 11:15
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-forecast-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-2">
                          As promised, the assumptions behind the forecast are written up in one place rather than scattered across notebooks.
                        </p>
                        <p className="fs-md mb-0">
                          The short version: the band is an 80% interval, not a best/worst case. A point landing outside it twice a quarter is expected, not a failure of the model.
                        </p>
                        <div className="border-t-soft pt-3 mt-3">
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                            <bdi>
                              1 attachment
                            </bdi>
                          </p>
                          <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-2 mb-0">
                            <li className="col">
                              <a
                                href="#"
                                className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base"
                                aria-label="Download forecast-assumptions.pdf"
                              >
                                <span className="icon-box icon-box-sm flex-shrink-0 tint-rose" aria-hidden="true">
                                  <i data-lucide="file-text" />
                                </span>
                                <span className="flex-grow-1 min-w-0">
                                  {" "}
                                  <span
                                    className="d-block fs-md fw-semibold text-title text-truncate"
                                    data-mail-file-name=""
                                  >
                                    forecast-assumptions.pdf
                                  </span>
                                  {" "}
                                  <span className="d-block fs-xs text-muted-2 text-truncate">
                                    <bdi data-mail-file-meta="">
                                      1.6 MB · PDF
                                    </bdi>
                                  </span>
                                  {" "}
                                </span>
                                <i
                                  className="icon-16 text-muted-2 flex-shrink-0"
                                  data-lucide="download"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-signin"
                data-mail-subject="New sign-in from a Windows device"
                data-mail-meta="1 message · Vionex Security"
                data-mail-reply-to="Vionex Security"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-slate">
                    Security
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-signin-0"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-signin-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0 bg-grad-3" aria-hidden="true">
                          VS
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Vionex Security
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              security@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              me
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Tue 08:02
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-signin-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-2">
                          A new sign-in to your Vionex account was recorded from a Windows device in Pune, India.
                        </p>
                        <p className="fs-md mb-0">
                          If this was you, there is nothing to do. If it wasn't, change your password and end the session from Settings → Security.
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-mobile"
                data-mail-subject="Mobile client is still on the v1 payload"
                data-mail-meta="1 message · Dev Sharma"
                data-mail-reply-to="Dev Sharma"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-violet">
                    Work
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-mobile-0"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-mobile-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0 bg-grad-6" aria-hidden="true">
                          DS
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Dev Sharma
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              dev@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              me
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Mon 13:15
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-mobile-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-2">
                          We're still reading the v1 payload on mobile. Is v2 stable enough to move to this sprint, or should I wait for the next release?
                        </p>
                        <p className="fs-md mb-0">
                          Happy to take half an hour on a call rather than trade messages about the cursor change.
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-renewal"
                data-mail-subject="Vendor renewal paperwork — signature needed"
                data-mail-meta="1 message · Anika Rao"
                data-mail-reply-to="Anika Rao"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-emerald">
                    Finance
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-renewal-0"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-renewal-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0 bg-grad-1" aria-hidden="true">
                          AR
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Anika Rao
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              anika@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              me
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        28 Aug 10:48
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-renewal-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-2">
                          The terms are unchanged from last year and legal has already reviewed them, so this only needs a signature to close.
                        </p>
                        <p className="fs-md mb-0">
                          The renewal date is the 30th of September, which gives us a comfortable margin.
                        </p>
                        <div className="border-t-soft pt-3 mt-3">
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                            <bdi>
                              1 attachment
                            </bdi>
                          </p>
                          <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-2 mb-0">
                            <li className="col">
                              <a
                                href="#"
                                className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base"
                                aria-label="Download renewal-2026-27.pdf"
                              >
                                <span className="icon-box icon-box-sm flex-shrink-0 tint-rose" aria-hidden="true">
                                  <i data-lucide="file-text" />
                                </span>
                                <span className="flex-grow-1 min-w-0">
                                  {" "}
                                  <span
                                    className="d-block fs-md fw-semibold text-title text-truncate"
                                    data-mail-file-name=""
                                  >
                                    renewal-2026-27.pdf
                                  </span>
                                  {" "}
                                  <span className="d-block fs-xs text-muted-2 text-truncate">
                                    <bdi data-mail-file-meta="">
                                      520 KB · PDF
                                    </bdi>
                                  </span>
                                  {" "}
                                </span>
                                <i
                                  className="icon-16 text-muted-2 flex-shrink-0"
                                  data-lucide="download"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-sent-tokens"
                data-mail-subject="Re: Design tokens v4 are ready for sign-off"
                data-mail-meta="1 message · Ravisha V"
                data-mail-reply-to="Meera Iyer"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-violet">
                    Work
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-sent-tokens-0"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-sent-tokens-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0" aria-hidden="true">
                          <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Ravisha V
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              ravisha@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              Meera Iyer
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Yesterday 18:02
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-sent-tokens-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-0">
                          Both read much better, and 2px on the stat cards is well inside tolerance. Sign-off from me — ship it with the Thursday release.
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-sent-status"
                data-mail-subject="Weekly status — week 35"
                data-mail-meta="1 message · Ravisha V"
                data-mail-reply-to="Aarav Shah"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-violet">
                    Work
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-sent-status-0"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-sent-status-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0" aria-hidden="true">
                          <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Ravisha V
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              ravisha@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              Aarav Shah
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Fri 17:30
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-sent-status-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-2">
                          Shipped: the token rebuild, the invoice export and the new empty states. In flight: the mobile v2 move and the help-desk triage rules.
                        </p>
                        <p className="fs-md mb-0">
                          Blocked: nothing this week, which is a first. The full breakdown is attached.
                        </p>
                        <div className="border-t-soft pt-3 mt-3">
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                            <bdi>
                              1 attachment
                            </bdi>
                          </p>
                          <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-2 mb-0">
                            <li className="col">
                              <a
                                href="#"
                                className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base"
                                aria-label="Download status-week-35.xlsx"
                              >
                                <span className="icon-box icon-box-sm flex-shrink-0 tint-emerald" aria-hidden="true">
                                  <i data-lucide="file-spreadsheet" />
                                </span>
                                <span className="flex-grow-1 min-w-0">
                                  {" "}
                                  <span
                                    className="d-block fs-md fw-semibold text-title text-truncate"
                                    data-mail-file-name=""
                                  >
                                    status-week-35.xlsx
                                  </span>
                                  {" "}
                                  <span className="d-block fs-xs text-muted-2 text-truncate">
                                    <bdi data-mail-file-meta="">
                                      94 KB · Sheet
                                    </bdi>
                                  </span>
                                  {" "}
                                </span>
                                <i
                                  className="icon-16 text-muted-2 flex-shrink-0"
                                  data-lucide="download"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-draft-roadmap"
                data-mail-subject="Re: Q4 roadmap review — agenda and pre-read"
                data-mail-meta="1 message · Ravisha V"
                data-mail-reply-to="Aarav Shah"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-slate">
                    Draft
                  </span>
                  <span className="badge-soft tint-violet">
                    Work
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-draft-roadmap-0"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-draft-roadmap-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0" aria-hidden="true">
                          <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Ravisha V
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              ravisha@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              Aarav Shah
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        Fri 12:04
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-draft-roadmap-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-0">
                          Happy to own the pricing decision, but I want the capacity table to reflect the migration savings before we commit to a tier split.
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-news"
                data-mail-subject="Issue 142 — tokens, theming and the cost of drift"
                data-mail-meta="1 message · Design Systems Weekly"
                data-mail-reply-to="Design Systems Weekly"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-slate">
                    Newsletter
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-news-0"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-news-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0 bg-grad-2" aria-hidden="true">
                          DW
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Design Systems Weekly
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              hello@dsweekly.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              me
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        24 Aug 06:00
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-news-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-2">
                          This week: three teams on what a token rename really costs once it has left the design file, and a short piece on why theming by inversion keeps failing in dark mode.
                        </p>
                        <p className="fs-md mb-0">
                          Also inside: a readable argument for fewer semantic colours, and the usual round-up of releases.
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-promo"
                data-mail-subject="Final notice: claim your free credits now"
                data-mail-meta="1 message · Cloud Offers"
                data-mail-reply-to="Cloud Offers"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-slate">
                    Spam
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-promo-0"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-promo-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0 bg-grad-4" aria-hidden="true">
                          CO
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Cloud Offers
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              promo@cloud-offers.example
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              me
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        22 Aug 23:41
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-promo-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-2">
                          This sender could not be verified and the message was moved here automatically. Links in it have been disabled.
                        </p>
                        <p className="fs-md mb-0">
                          If you know this sender, move the message back to your inbox to restore its links.
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              {" "}
              <div
                className="d-none"
                data-mail-conversation="mx-lunch"
                data-mail-subject="Friday lunch order"
                data-mail-meta="1 message · Office Admin"
                data-mail-reply-to="Office Admin"
              >
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3" data-mail-chips="">
                  <span className="badge-soft tint-slate">
                    Trash
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-mail-thread="">
                  <li className="border-theme rounded-3 bg-plain overflow-hidden" data-mail-message="">
                    <div className="d-flex align-items-center gap-2 gap-md-3 p-3">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mailBody-mx-lunch-0"
                        aria-expanded="true"
                        aria-controls="mailBody-mx-lunch-0"
                        className="d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                      >
                        <span className="avatar avatar-sm flex-shrink-0 bg-grad-5" aria-hidden="true">
                          OA
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-mail-from-name="">
                            Office Admin
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi data-mail-from-email="">
                              office@vionex.com
                            </bdi>
                            {" "}· to{" "}
                            <bdi data-mail-to="">
                              me
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="dd-caret icon-16 text-muted-2 flex-shrink-0"
                          data-lucide="chevron-down"
                          aria-hidden="true"
                        />
                      </button>
                      <bdi className="fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block" data-mail-time="">
                        20 Aug 09:12
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        data-mail-focus-reply=""
                        aria-label="Reply to this message"
                        title="Reply"
                      >
                        <i className="flip-rtl" data-lucide="reply" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="collapse show" id="mailBody-mx-lunch-0">
                      <div className="px-3 pb-3" data-mail-body="">
                        <p className="fs-md mb-0">
                          Last call for the sandwich count — reply by 11:00 and I'll place the order.
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            {/* A reply the reader sends is the one message this page does not ship
               with. Its shape still belongs to the HTML: the script stamps this
               template and fills it, rather than assembling a message of its own. */}
            <template
              data-mail-message-template=""
              dangerouslySetInnerHTML={{ __html: "<li class=\"border-theme rounded-3 bg-plain overflow-hidden\" data-mail-message=\"\">\n                <div class=\"d-flex align-items-center gap-2 gap-md-3 p-3\">\n                  <button type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#mailBody-TPL-0\" aria-expanded=\"true\" aria-controls=\"mailBody-TPL-0\" class=\"d-flex align-items-center gap-2 gap-md-3 flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start\">\n                    <span class=\"avatar avatar-sm flex-shrink-0\" aria-hidden=\"true\"><img src=\"/assets/images/avatar-user.png\" width=\"34\" height=\"34\" alt=\"\"></span>\n                    <span class=\"flex-grow-1 min-w-0\">\n                      <span class=\"d-block fs-md fw-semibold text-title text-truncate\" data-mail-from-name=\"\">Ravisha V</span>\n                      <span class=\"d-block fs-xs text-muted-2 text-truncate\"><bdi data-mail-from-email=\"\">ravisha@vionex.com</bdi> · to <bdi data-mail-to=\"\"></bdi></span>\n                    </span>\n                    <i class=\"dd-caret icon-16 text-muted-2 flex-shrink-0\" data-lucide=\"chevron-down\" aria-hidden=\"true\"></i>\n                  </button>\n                  <bdi class=\"fs-xs text-muted-2 flex-shrink-0 d-none d-sm-block\" data-mail-time=\"\"></bdi>\n                  <button type=\"button\" class=\"btn btn-ghost btn-18 rounded-circle flex-shrink-0\" data-mail-focus-reply=\"\" aria-label=\"Reply to this message\" title=\"Reply\"><i class=\"flip-rtl\" data-lucide=\"reply\" aria-hidden=\"true\"></i></button>\n                </div>\n                <div class=\"collapse show\" id=\"mailBody-TPL-0\">\n                  <div class=\"px-3 pb-3\" data-mail-body=\"\">\n                    <p class=\"fs-md mb-0\"></p>\n                  </div>\n                </div>\n              </li>" }}
            />
            {/* and the same for a file picked in the compose dialog */}
            <template
              data-mail-attach-template=""
              dangerouslySetInnerHTML={{ __html: "<li class=\"col\">\n                <a href=\"#\" class=\"d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base\" aria-label=\"Download \">\n                  <span class=\"icon-box icon-box-sm flex-shrink-0 tint-primary\" aria-hidden=\"true\"><i data-lucide=\"paperclip\"></i></span>\n                  <span class=\"flex-grow-1 min-w-0\">\n                    <span class=\"d-block fs-md fw-semibold text-title text-truncate\" data-mail-file-name=\"\"></span>\n                    <span class=\"d-block fs-xs text-muted-2 text-truncate\"><bdi data-mail-file-meta=\"\"></bdi></span>\n                  </span>\n                  <i class=\"icon-16 text-muted-2 flex-shrink-0\" data-lucide=\"download\" aria-hidden=\"true\"></i>\n                </a>\n              </li>" }}
            />
            <form className="p-3 border-t-soft flex-shrink-0" data-mail-reply="" noValidate>
              <p className="fs-xs text-muted-2 mb-2">
                Replying to
                {" "}
                <bdi className="fw-semibold text-title" data-mail-out="reply-to">
                  this conversation
                </bdi>
              </p>
              <div className="d-flex align-items-end gap-2">
                <div className="flex-grow-1 min-w-0">
                  <label htmlFor="mailReplyBody" className="visually-hidden">
                    Write a reply
                  </label>
                  {" "}
                  <textarea
                    className="form-control textarea-grow rounded-4"
                    id="mailReplyBody"
                    name="reply"
                    rows="1"
                    placeholder="Write a reply…"
                    data-mail-reply-input=""
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-18 rounded-circle flex-shrink-0"
                  aria-label="Send reply"
                >
                  <i className="flip-rtl" data-lucide="send-horizontal" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
      {/* ===== Compose dialog ===== */}
      <div
        role="dialog"
        className="modal fade"
        id="mailComposeModal"
        tabIndex="-1"
        aria-labelledby="mailComposeLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-b-soft">
              <div className="min-w-0">
                <h2 className="modal-title fs-5 fw-bold text-title mb-1" id="mailComposeLabel">
                  New message
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Sending as
                  {" "}
                  <bdi>
                    ravisha@vionex.com
                  </bdi>
                  .
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="mb-3">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <label htmlFor="mailComposeTo" className="form-label fs-md fw-semibold text-title mb-0 me-auto">
                      To
                    </label>
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm px-2 py-1 fs-md fw-medium"
                      data-bs-toggle="collapse"
                      data-bs-target="#mailComposeCopy"
                      aria-expanded="false"
                      aria-controls="mailComposeCopy"
                    >
                      {"Cc & Bcc"}
                    </button>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="mailComposeTo"
                    name="to"
                    placeholder="name@company.com, another@company.com"
                    multiple
                    required
                  />
                  {" "}
                  <div className="invalid-feedback">
                    Enter at least one valid email address.
                  </div>
                </div>
                <div className="collapse" id="mailComposeCopy">
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <label htmlFor="mailComposeCc" className="form-label fs-md fw-semibold text-title">
                        Cc
                      </label>
                      {" "}
                      <input
                        type="email"
                        className="form-control"
                        id="mailComposeCc"
                        name="cc"
                        placeholder="name@company.com"
                        multiple
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="mailComposeBcc" className="form-label fs-md fw-semibold text-title">
                        Bcc
                      </label>
                      {" "}
                      <input
                        type="email"
                        className="form-control"
                        id="mailComposeBcc"
                        name="bcc"
                        placeholder="name@company.com"
                        multiple
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="mailComposeSubject" className="form-label fs-md fw-semibold text-title">
                    Subject
                  </label>
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    id="mailComposeSubject"
                    name="subject"
                    placeholder="What is this about?"
                    required
                  />
                  {" "}
                  <div className="invalid-feedback">
                    Give the message a subject.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="mailComposeBody" className="form-label fs-md fw-semibold text-title">
                    Message
                  </label>
                  {" "}
                  <textarea
                    className="form-control rounded-4"
                    id="mailComposeBody"
                    name="body"
                    rows="8"
                    placeholder="Write your message…"
                    required
                  />
                  {" "}
                  <div className="invalid-feedback">
                    Write something before sending.
                  </div>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-2 mb-0 d-none" data-mail-attach-list="" />
              </div>
              <div className="modal-footer border-t-soft justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <input
                    type="file"
                    className="d-none"
                    id="mailComposeFiles"
                    name="attachments"
                    multiple
                    aria-label="Attach files to this message"
                    data-mail-attach-input=""
                  />
                  <button
                    type="button"
                    className="btn btn-outline-soft btn-18 rounded-circle"
                    data-mail-attach=""
                    aria-label="Attach files"
                    title="Attach files"
                  >
                    <i data-lucide="paperclip" aria-hidden="true" />
                  </button>
                  <span className="fs-xs text-muted-2 d-none d-sm-inline">
                    Up to 25 MB per message
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                    Discard
                  </button>
                  <button type="submit" className="btn btn-primary d-flex align-items-center gap-2">
                    <i className="icon-18" data-lucide="send-horizontal" aria-hidden="true" />
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}
