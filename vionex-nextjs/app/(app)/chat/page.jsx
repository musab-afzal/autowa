/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Chat",
  description: "Vionex chat app — a three-pane team messenger with conversations, threaded messages and shared media, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Chat
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
              Chat
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Chat workspace ===== */}
      <section className="app-workspace d-flex flex-fill gap-3" aria-label="Team chat" data-chat-scope="">
        {/* ========== Pane 1 — conversations (drawer under xl) ========== */}
        <section
          className="offcanvas-xl offcanvas-start app-pane app-pane-lg d-flex flex-column"
          tabIndex="-1"
          id="chatListPane"
          aria-labelledby="chatListTitle"
        >
          <div className="offcanvas-body d-flex flex-fill min-h-0 p-3 p-xl-0 overflow-hidden" data-search-scope="">
            <div className="card flex-fill min-w-0 mb-0 overflow-hidden">
              <div className="p-3 border-b-soft flex-shrink-0">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <h2 id="chatListTitle" className="fs-5 fw-bold text-title mb-0 me-auto">
                    Messages
                  </h2>
                  <span className="badge-soft flex-shrink-0">
                    <bdi data-search-count="">
                      9
                    </bdi>
                  </span>
                  <button
                    type="button"
                    className="btn btn-primary btn-18 rounded-circle flex-shrink-0"
                    data-bs-toggle="modal"
                    data-bs-target="#chatNewModal"
                    aria-label="Start a new conversation"
                    title="Start a new conversation"
                  >
                    <i data-lucide="square-pen" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0 d-xl-none"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#chatListPane"
                    aria-label="Close conversations"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </div>
                <div className="field-icon mb-3">
                  <i className="icon-18" data-lucide="search" aria-hidden="true" />
                  {" "}
                  <label htmlFor="chatSearch" className="visually-hidden">
                    Search conversations
                  </label>
                  {" "}
                  <input
                    type="search"
                    className="form-control"
                    id="chatSearch"
                    name="chat-search"
                    placeholder={"Search people & groups"}
                    data-search-input=""
                  />
                </div>
                <div
                  className="nav nav-pills seg-toggle d-inline-flex flex-nowrap mw-100 gap-1 p-1 rounded-pill bg-soft overflow-x-auto scrollbar-none"
                  role="group"
                  aria-label="Filter conversations"
                >
                  <button type="button" className="nav-link active fw-semibold" data-filter="all" aria-pressed="true">
                    All
                  </button>
                  <button type="button" className="nav-link fw-semibold" data-filter="unread" aria-pressed="false">
                    Unread
                  </button>
                  <button type="button" className="nav-link fw-semibold" data-filter="groups" aria-pressed="false">
                    Groups
                  </button>
                  <button type="button" className="nav-link fw-semibold" data-filter="direct" aria-pressed="false">
                    Direct
                  </button>
                </div>
              </div>
              <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin p-2" data-chat-list="">
                <div data-chat-group="">
                  <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 mt-1 mb-1">
                    Pinned
                  </p>
                  <ul className="list-unstyled d-flex flex-column gap-1 mb-3">
                    <li data-filter-tags="groups">
                      <button
                        type="button"
                        aria-current="true"
                        className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start active"
                        data-chat-id="cw-design"
                        data-chat-name="Design Crew"
                        data-chat-meta="8 members · 5 online"
                        data-chat-type="group"
                        data-chat-initials="DC"
                        data-chat-tint="bg-grad-1"
                        data-chat-status="online"
                      >
                        <span className="avatar bg-grad-1 position-relative flex-shrink-0" aria-hidden="true">
                          DC
                          <span className="avatar-status" />
                        </span>
                        {" "}
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fw-semibold text-title text-truncate">
                              Design Crew
                            </span>
                            <bdi className="fs-xs text-muted-2 flex-shrink-0" data-chat-time="">
                              09:42
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-chat-preview="">
                              Meera: Shipping the new tokens today
                            </span>
                          </span>
                          {" "}
                        </span>
                      </button>
                    </li>
                    <li data-filter-tags="direct">
                      <button
                        type="button"
                        className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                        data-chat-id="cw-aarav"
                        data-chat-name="Aarav Shah"
                        data-chat-meta="Product Lead · Online"
                        data-chat-type="direct"
                        data-chat-avatar="/assets/images/avatar-1.png"
                        data-chat-status="online"
                      >
                        <span className="avatar position-relative flex-shrink-0">
                          <img src="/assets/images/avatar-1.png" width="40" height="40" alt="" />
                          <span className="avatar-status" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fw-semibold text-title text-truncate">
                              Aarav Shah
                            </span>
                            <bdi className="fs-xs text-muted-2 flex-shrink-0" data-chat-time="">
                              09:18
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-chat-preview="">
                              Sounds good — I'll review the spec tonight
                            </span>
                            <i className="icon-14 text-muted-2 flex-shrink-0" data-lucide="pin" aria-hidden="true" />
                          </span>
                          {" "}
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div data-chat-group="">
                  <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 mb-1">
                    All conversations
                  </p>
                  <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
                    <li data-filter-tags="direct unread">
                      <button
                        type="button"
                        className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                        data-chat-id="cw-meera"
                        data-chat-name="Meera Iyer"
                        data-chat-meta="Design Systems · Active 5m ago"
                        data-chat-type="direct"
                        data-chat-avatar="/assets/images/avatar-2.png"
                        data-chat-status="online"
                      >
                        <span className="avatar position-relative flex-shrink-0">
                          <img src="/assets/images/avatar-2.png" width="40" height="40" alt="" />
                          <span className="avatar-status" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fw-semibold text-title text-truncate">
                              Meera Iyer
                            </span>
                            <bdi className="fs-xs text-muted-2 flex-shrink-0" data-chat-time="">
                              08:55
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-chat-preview="">
                              Sent you the updated Figma link
                            </span>
                            <span className="badge-soft flex-shrink-0 px-2 py-0" data-chat-unread="">
                              <bdi>
                                1
                              </bdi>
                            </span>
                          </span>
                          {" "}
                        </span>
                      </button>
                    </li>
                    <li data-filter-tags="groups">
                      <button
                        type="button"
                        className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                        data-chat-id="cw-release"
                        data-chat-name="Release Room"
                        data-chat-meta="12 members · 3 online"
                        data-chat-type="group"
                        data-chat-initials="RR"
                        data-chat-tint="bg-grad-3"
                        data-chat-status="online"
                      >
                        <span className="avatar bg-grad-3 position-relative flex-shrink-0" aria-hidden="true">
                          RR
                          <span className="avatar-status" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fw-semibold text-title text-truncate">
                              Release Room
                            </span>
                            <bdi className="fs-xs text-muted-2 flex-shrink-0" data-chat-time="">
                              Yesterday
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-chat-preview="">
                              Kabir: v4.2 is queued for Friday
                            </span>
                          </span>
                          {" "}
                        </span>
                      </button>
                    </li>
                    <li data-filter-tags="direct">
                      <button
                        type="button"
                        className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                        data-chat-id="cw-kabir"
                        data-chat-name="Kabir Nair"
                        data-chat-meta="Platform · Away"
                        data-chat-type="direct"
                        data-chat-avatar="/assets/images/avatar-3.png"
                        data-chat-status="away"
                      >
                        <span className="avatar position-relative flex-shrink-0">
                          <img src="/assets/images/avatar-3.png" width="40" height="40" alt="" />
                          <span className="avatar-status away" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fw-semibold text-title text-truncate">
                              Kabir Nair
                            </span>
                            <bdi className="fs-xs text-muted-2 flex-shrink-0" data-chat-time="">
                              Yesterday
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-chat-preview="">
                              The migration finished without errors
                            </span>
                          </span>
                          {" "}
                        </span>
                      </button>
                    </li>
                    <li data-filter-tags="groups unread">
                      <button
                        type="button"
                        className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                        data-chat-id="cw-support"
                        data-chat-name="Support Escalations"
                        data-chat-meta="6 members · 2 online"
                        data-chat-type="group"
                        data-chat-initials="SE"
                        data-chat-tint="bg-grad-2"
                        data-chat-status="online"
                      >
                        <span className="avatar bg-grad-2 position-relative flex-shrink-0" aria-hidden="true">
                          SE
                          <span className="avatar-status" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fw-semibold text-title text-truncate">
                              Support Escalations
                            </span>
                            <bdi className="fs-xs text-muted-2 flex-shrink-0" data-chat-time="">
                              Tue
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-chat-preview="">
                              Nisha: Two tickets need a second look
                            </span>
                            <span className="badge-soft flex-shrink-0 px-2 py-0" data-chat-unread="">
                              <bdi>
                                5
                              </bdi>
                            </span>
                          </span>
                          {" "}
                        </span>
                      </button>
                    </li>
                    <li data-filter-tags="direct">
                      <button
                        type="button"
                        className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                        data-chat-id="cw-priya"
                        data-chat-name="Priya Nair"
                        data-chat-meta="Data Science · Offline"
                        data-chat-type="direct"
                        data-chat-avatar="/assets/images/avatar-4.png"
                        data-chat-status="offline"
                      >
                        <span className="avatar position-relative flex-shrink-0">
                          <img src="/assets/images/avatar-4.png" width="40" height="40" alt="" />
                          <span className="avatar-status offline" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fw-semibold text-title text-truncate">
                              Priya Nair
                            </span>
                            <bdi className="fs-xs text-muted-2 flex-shrink-0" data-chat-time="">
                              Mon
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-chat-preview="">
                              Thanks for the walkthrough today
                            </span>
                          </span>
                          {" "}
                        </span>
                      </button>
                    </li>
                    <li data-filter-tags="direct">
                      <button
                        type="button"
                        className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                        data-chat-id="cw-dev"
                        data-chat-name="Dev Sharma"
                        data-chat-meta="Mobile · Offline"
                        data-chat-type="direct"
                        data-chat-initials="DS"
                        data-chat-tint="bg-grad-6"
                        data-chat-status="offline"
                      >
                        <span className="avatar bg-grad-6 position-relative flex-shrink-0" aria-hidden="true">
                          DS
                          <span className="avatar-status offline" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fw-semibold text-title text-truncate">
                              Dev Sharma
                            </span>
                            <bdi className="fs-xs text-muted-2 flex-shrink-0" data-chat-time="">
                              12 Aug
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-chat-preview="">
                              Let's sync on the API contract
                            </span>
                          </span>
                          {" "}
                        </span>
                      </button>
                    </li>
                    <li data-filter-tags="groups">
                      <button
                        type="button"
                        className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                        data-chat-id="cw-ops"
                        data-chat-name={"Ops & Vendors"}
                        data-chat-meta="4 members · 1 online"
                        data-chat-type="group"
                        data-chat-initials="OV"
                        data-chat-tint="bg-grad-5"
                        data-chat-status="offline"
                      >
                        <span className="avatar bg-grad-5 position-relative flex-shrink-0" aria-hidden="true">
                          OV
                          <span className="avatar-status offline" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fw-semibold text-title text-truncate">
                              {"Ops & Vendors"}
                            </span>
                            <bdi className="fs-xs text-muted-2 flex-shrink-0" data-chat-time="">
                              9 Aug
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate" data-chat-preview="">
                              Renewal paperwork is signed off
                            </span>
                          </span>
                          {" "}
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="d-none text-center px-3 py-5" data-search-empty="">
                  <span className="notif-empty-icon" aria-hidden="true">
                    <i data-lucide="search-x" />
                  </span>
                  <p className="fw-semibold text-title mt-2 mb-1">
                    No conversations found
                  </p>
                  <p className="fs-md text-body-2 mb-3">
                    Nothing matches “
                    <bdi data-search-query="" />
                    ” in this filter.
                  </p>
                  <button type="button" className="btn btn-outline-soft btn-sm" data-search-clear="">
                    Clear search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========== Pane 2 — active conversation ========== */}
        <section className="card flex-fill min-w-0 mb-0 overflow-hidden" aria-labelledby="chatThreadTitle">
          {/* Thread header */}
          <div className="d-flex align-items-center gap-2 gap-md-3 p-3 border-b-soft flex-shrink-0">
            <button
              type="button"
              className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0 d-xl-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#chatListPane"
              aria-controls="chatListPane"
              aria-label="Show conversations"
            >
              <i className="flip-rtl" data-lucide="arrow-left" aria-hidden="true" />
            </button>
            <span
              data-chat-avatar-for="cw-design"
              className="avatar position-relative flex-shrink-0 bg-grad-1"
              aria-hidden="true"
            >
              DC
              <span className="avatar-status" />
            </span>
            <span
              data-chat-avatar-for="cw-aarav"
              className="avatar position-relative flex-shrink-0 d-none"
              aria-hidden="true"
            >
              <img src="/assets/images/avatar-1.png" width="40" height="40" alt="" />
              <span className="avatar-status" />
            </span>
            <span
              data-chat-avatar-for="cw-meera"
              className="avatar position-relative flex-shrink-0 d-none"
              aria-hidden="true"
            >
              <img src="/assets/images/avatar-2.png" width="40" height="40" alt="" />
              <span className="avatar-status" />
            </span>
            <span
              data-chat-avatar-for="cw-release"
              className="avatar position-relative flex-shrink-0 d-none bg-grad-3"
              aria-hidden="true"
            >
              RR
              <span className="avatar-status" />
            </span>
            <span
              data-chat-avatar-for="cw-kabir"
              className="avatar position-relative flex-shrink-0 d-none"
              aria-hidden="true"
            >
              <img src="/assets/images/avatar-3.png" width="40" height="40" alt="" />
              <span className="avatar-status away" />
            </span>
            <span
              data-chat-avatar-for="cw-support"
              className="avatar position-relative flex-shrink-0 d-none bg-grad-2"
              aria-hidden="true"
            >
              SE
              <span className="avatar-status" />
            </span>
            <span
              data-chat-avatar-for="cw-priya"
              className="avatar position-relative flex-shrink-0 d-none"
              aria-hidden="true"
            >
              <img src="/assets/images/avatar-4.png" width="40" height="40" alt="" />
              <span className="avatar-status offline" />
            </span>
            <span
              data-chat-avatar-for="cw-dev"
              className="avatar position-relative flex-shrink-0 d-none bg-grad-6"
              aria-hidden="true"
            >
              DS
              <span className="avatar-status offline" />
            </span>
            <span
              data-chat-avatar-for="cw-ops"
              className="avatar position-relative flex-shrink-0 d-none bg-grad-5"
              aria-hidden="true"
            >
              OV
              <span className="avatar-status offline" />
            </span>
            <div className="flex-grow-1 min-w-0">
              <h2 id="chatThreadTitle" className="fs-6 fw-bold text-title text-truncate mb-0" data-chat-out="name">
                Design Crew
              </h2>
              <p className="fs-xs text-muted-2 text-truncate mb-0">
                <bdi data-chat-out="meta">
                  8 members · 5 online
                </bdi>
              </p>
            </div>
            <div className="d-flex align-items-center gap-1 flex-shrink-0">
              <button
                type="button"
                className="btn btn-ghost btn-18 rounded-circle d-none d-sm-inline-flex"
                aria-label="Search this conversation"
                title="Search this conversation"
              >
                <i data-lucide="search" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-18 rounded-circle"
                aria-label="Start a voice call"
                title="Start a voice call"
              >
                <i data-lucide="phone" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-18 rounded-circle d-none d-sm-inline-flex"
                aria-label="Start a video call"
                title="Start a video call"
              >
                <i data-lucide="video" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-18 rounded-circle d-xxl-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#chatInfoPane"
                aria-controls="chatInfoPane"
                aria-label="Conversation details"
                title="Conversation details"
              >
                <i data-lucide="info" aria-hidden="true" />
              </button>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle"
                  id="chatThreadMenu"
                  data-bs-toggle="dropdown"
                  data-dd-fixed=""
                  data-bs-offset="0,8"
                  aria-expanded="false"
                  aria-label="More conversation actions"
                >
                  <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                </button>
                {" "}
                <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="chatThreadMenu">
                  <li>
                    <button type="button" className="dropdown-item">
                      <i data-lucide="pin" aria-hidden="true" />
                      Pin conversation
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item">
                      <i data-lucide="bell-off" aria-hidden="true" />
                      Mute notifications
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item">
                      <i data-lucide="mail-open" aria-hidden="true" />
                      Mark as unread
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
                      Delete conversation
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Message stream */}
          <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin p-3 p-md-4" data-chat-scroll="">
            {/* Every conversation's messages are written here, one list each.
               The default conversation (cw-design, the .active row in the
               list) ships VISIBLE, so this page is a finished screen with the
               scripts removed. Opening another conversation reveals its list
               and retires the rest (.d-none) — no message is ever rendered in
               script. */}
            <ol className="list-unstyled d-flex flex-column gap-3 mb-0" data-chat-stream="cw-design">
              <li className="align-self-center text-center">
                <span className="badge-soft flex-shrink-0">
                  <bdi>
                    Yesterday
                  </bdi>
                </span>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Aarav Shah
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      Reminder: the token freeze is Thursday. Anything not merged by then rides the next release.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      16:20
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="align-self-center text-center">
                <span className="badge-soft flex-shrink-0 tint-slate">
                  <bdi>
                    Meera Iyer added Kabir Nair to the group
                  </bdi>
                </span>
              </li>
              <li className="align-self-center text-center">
                <span className="badge-soft flex-shrink-0">
                  <bdi>
                    Today
                  </bdi>
                </span>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Meera Iyer
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      Morning! The colour tokens are rebuilt — dark-mode contrast is finally clean across all six presets.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      09:04
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm invisible flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <img
                      src="/assets/images/product-1.jpg"
                      width="560"
                      height="373"
                      className="d-block w-100 h-auto rounded-3 mb-2"
                      alt="Two models in autumn knitwear and a wool coat against a crimson backdrop"
                    />
                    <p className="fs-md mb-0">
                      And the autumn campaign hero is back from retouch, graded against the new palette:
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      09:05
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-out align-self-end flex-row-reverse">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-primary text-on-primary">
                    <p className="fs-md mb-0">
                      Both read so much better. Did the radius presets survive the rebuild?
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0 justify-content-end">
                    <bdi>
                      09:11
                    </bdi>
                    <i className="icon-12 text-brand" data-lucide="check-check" aria-hidden="true" />
                    <span className="visually-hidden">
                      Read
                    </span>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Kabir Nair
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <span className="d-block rounded-2 bg-plain text-body-2 px-2 py-1 mb-2">
                      {" "}
                      <span className="d-block fs-xs fw-semibold text-title">
                        You
                      </span>
                      {" "}
                      <span className="d-block fs-xs">
                        Did the radius presets survive the rebuild?
                      </span>
                      {" "}
                    </span>
                    <p className="fs-md mb-0">
                      They did — I re-ran the visual diff over 40 screens and only the stat cards moved, by 2px.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      09:18
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm invisible flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <span className="d-flex align-items-center gap-2 p-2 rounded-3 bg-plain">
                      <span className="icon-box icon-box-sm flex-shrink-0 tint-rose" aria-hidden="true">
                        <i data-lucide="file-text" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          radius-visual-diff.pdf
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            2.4 MB · PDF
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      09:19
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-out align-self-end flex-row-reverse">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-primary text-on-primary">
                    <p className="fs-md mb-0">
                      Perfect. I'll sign that off and we can ship the tokens today.
                    </p>
                  </div>
                  <p className="d-flex flex-wrap gap-1 mt-1 mb-0 justify-content-end">
                    <span className="badge-soft tint-slate fs-xs d-inline-flex align-items-center gap-1">
                      <span aria-hidden="true">
                        🎉
                      </span>
                      <bdi>
                        3
                      </bdi>
                    </span>
                    <span className="badge-soft tint-slate fs-xs d-inline-flex align-items-center gap-1">
                      <span aria-hidden="true">
                        👍
                      </span>
                      <bdi>
                        2
                      </bdi>
                    </span>
                  </p>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0 justify-content-end">
                    <bdi>
                      09:26
                    </bdi>
                    <i className="icon-12 text-brand" data-lucide="check-check" aria-hidden="true" />
                    <span className="visually-hidden">
                      Read
                    </span>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Meera Iyer
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      Shipping the new tokens today 🚀
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      09:42
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row msg-in align-self-start d-flex align-items-end gap-2">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                </span>
                <div className="msg-bubble d-flex align-items-center gap-1 px-3 py-2 bg-muted border-soft text-body-2">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="visually-hidden">
                    Meera Iyer is typing
                  </span>
                </div>
              </li>
            </ol>
            <ol className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-stream="cw-aarav">
              <li className="align-self-center text-center">
                <span className="badge-soft flex-shrink-0">
                  <bdi>
                    Today
                  </bdi>
                </span>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Aarav Shah
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      Do you have ten minutes to walk me through the analytics rework?
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      08:44
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-out align-self-end flex-row-reverse">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-primary text-on-primary">
                    <p className="fs-md mb-0">
                      Sure — after standup works. I'll bring the numbers from the last two sprints.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0 justify-content-end">
                    <bdi>
                      08:52
                    </bdi>
                    <i className="icon-12 text-brand" data-lucide="check-check" aria-hidden="true" />
                    <span className="visually-hidden">
                      Read
                    </span>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Aarav Shah
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <span className="d-flex align-items-center gap-2 p-2 rounded-3 bg-plain mb-2">
                      <span className="icon-box icon-box-sm flex-shrink-0 tint-blue" aria-hidden="true">
                        <i data-lucide="file-text" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          q4-product-spec.pdf
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            3.6 MB · PDF
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                    </span>
                    <p className="fs-md mb-0">
                      Ideal. I've dropped the spec here so you can mark it up beforehand.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      09:02
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-out align-self-end flex-row-reverse">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-primary text-on-primary">
                    <p className="fs-md mb-0">
                      Got it. I'll leave comments in the margins rather than editing the body.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0 justify-content-end">
                    <bdi>
                      09:10
                    </bdi>
                    <i className="icon-12 text-brand" data-lucide="check-check" aria-hidden="true" />
                    <span className="visually-hidden">
                      Read
                    </span>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Aarav Shah
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      Sounds good — I'll review the spec tonight.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      09:18
                    </bdi>
                  </p>
                </div>
              </li>
            </ol>
            {" "}
            <ol className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-stream="cw-meera">
              <li className="align-self-center text-center">
                <span className="badge-soft flex-shrink-0">
                  <bdi>
                    Today
                  </bdi>
                </span>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-out align-self-end flex-row-reverse">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-primary text-on-primary">
                    <p className="fs-md mb-0">
                      Is the component library ready for the handoff review?
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0 justify-content-end">
                    <bdi>
                      08:31
                    </bdi>
                    <i className="icon-12 text-brand" data-lucide="check-check" aria-hidden="true" />
                    <span className="visually-hidden">
                      Read
                    </span>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Meera Iyer
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      Almost — I renamed the last of the legacy layers this morning, so nothing reads as “Copy 3” any more.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      08:48
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm invisible flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <span className="d-flex align-items-center gap-2 p-2 rounded-3 bg-plain mb-2">
                      <span className="icon-box icon-box-sm flex-shrink-0 tint-violet" aria-hidden="true">
                        <i data-lucide="file-image" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          component-library-v4.fig
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            18 MB · Figma
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                    </span>
                    <p className="fs-md mb-0">
                      Here's the file, it opens straight on the handoff page.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      08:55
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-out align-self-end flex-row-reverse">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-primary text-on-primary">
                    <p className="fs-md mb-0">
                      Thank you — I'll circulate it before the review so nobody arrives cold.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0 justify-content-end">
                    <bdi>
                      09:01
                    </bdi>
                    <i className="icon-12" data-lucide="check" aria-hidden="true" />
                    <span className="visually-hidden">
                      Sent
                    </span>
                  </p>
                </div>
              </li>
            </ol>
            {" "}
            <ol className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-stream="cw-release">
              <li className="align-self-center text-center">
                <span className="badge-soft flex-shrink-0">
                  <bdi>
                    Yesterday
                  </bdi>
                </span>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Kabir Nair
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      Staging is green on all seven suites. No flakes in the last three runs.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      11:02
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Aarav Shah
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      Any migrations in this one?
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      11:20
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Kabir Nair
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <span className="d-block rounded-2 bg-plain text-body-2 px-2 py-1 mb-2">
                      {" "}
                      <span className="d-block fs-xs fw-semibold text-title">
                        Aarav Shah
                      </span>
                      {" "}
                      <span className="d-block fs-xs">
                        Any migrations in this one?
                      </span>
                      {" "}
                    </span>
                    <p className="fs-md mb-0">
                      Two, both additive. They can run ahead of the deploy without locking anything.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      11:24
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-out align-self-end flex-row-reverse">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-primary text-on-primary">
                    <p className="fs-md mb-0">
                      Then I'm happy to cut on Friday morning rather than Thursday night.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0 justify-content-end">
                    <bdi>
                      11:31
                    </bdi>
                    <i className="icon-12 text-brand" data-lucide="check-check" aria-hidden="true" />
                    <span className="visually-hidden">
                      Read
                    </span>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Kabir Nair
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <span className="d-flex align-items-center gap-2 p-2 rounded-3 bg-plain mb-2">
                      <span className="icon-box icon-box-sm flex-shrink-0 tint-emerald" aria-hidden="true">
                        <i data-lucide="file-spreadsheet" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          release-4.2-checklist.xlsx
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            240 KB · Sheet
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                    </span>
                    <p className="fs-md mb-0">
                      Agreed. Checklist is attached — I've ticked everything infrastructure owns.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      11:38
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm invisible flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      v4.2 is queued for Friday.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      17:45
                    </bdi>
                  </p>
                </div>
              </li>
            </ol>
            {" "}
            <ol className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-stream="cw-kabir">
              <li className="align-self-center text-center">
                <span className="badge-soft flex-shrink-0">
                  <bdi>
                    Yesterday
                  </bdi>
                </span>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-out align-self-end flex-row-reverse">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-primary text-on-primary">
                    <p className="fs-md mb-0">
                      How long is the read replica going to lag while the migration runs?
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0 justify-content-end">
                    <bdi>
                      14:05
                    </bdi>
                    <i className="icon-12 text-brand" data-lucide="check-check" aria-hidden="true" />
                    <span className="visually-hidden">
                      Read
                    </span>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Kabir Nair
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      Under a minute. It is additive, so nothing takes a write lock.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      14:22
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm invisible flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <span className="d-flex align-items-center gap-2 p-2 rounded-3 bg-plain mb-2">
                      <span className="icon-box icon-box-sm flex-shrink-0 tint-blue" aria-hidden="true">
                        <i data-lucide="file-text" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          migration-report.pdf
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            512 KB · PDF
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                    </span>
                    <p className="fs-md mb-0">
                      The migration finished without errors.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      18:10
                    </bdi>
                  </p>
                </div>
              </li>
            </ol>
            {" "}
            <ol className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-stream="cw-support">
              <li className="align-self-center text-center">
                <span className="badge-soft flex-shrink-0">
                  <bdi>
                    Tuesday
                  </bdi>
                </span>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0 bg-grad-4" aria-hidden="true">
                  NB
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Nisha Bose
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      Two accounts are reporting the export timing out on ranges longer than 90 days.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      10:12
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-out align-self-end flex-row-reverse">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-primary text-on-primary">
                    <p className="fs-md mb-0">
                      Do they share a workspace, or is it two unrelated tenants?
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0 justify-content-end">
                    <bdi>
                      10:30
                    </bdi>
                    <i className="icon-12 text-brand" data-lucide="check-check" aria-hidden="true" />
                    <span className="visually-hidden">
                      Read
                    </span>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0 bg-grad-4" aria-hidden="true">
                  NB
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Nisha Bose
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <span className="d-block rounded-2 bg-plain text-body-2 px-2 py-1 mb-2">
                      {" "}
                      <span className="d-block fs-xs fw-semibold text-title">
                        You
                      </span>
                      {" "}
                      <span className="d-block fs-xs">
                        Do they share a workspace, or is it two unrelated tenants?
                      </span>
                      {" "}
                    </span>
                    <p className="fs-md mb-0">
                      Unrelated. Both are on the enterprise plan though, so the export volume is similar.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      10:41
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm invisible flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <span className="d-flex align-items-center gap-2 p-2 rounded-3 bg-plain mb-2">
                      <span className="icon-box icon-box-sm flex-shrink-0 tint-emerald" aria-hidden="true">
                        <i data-lucide="file-spreadsheet" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          escalation-log-aug.xlsx
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            180 KB · Sheet
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                    </span>
                    <p className="fs-md mb-0">
                      Full log for the month, both cases are highlighted.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      10:55
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm invisible flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      Two tickets need a second look.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      16:04
                    </bdi>
                  </p>
                </div>
              </li>
            </ol>
            {" "}
            <ol className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-stream="cw-priya">
              <li className="align-self-center text-center">
                <span className="badge-soft flex-shrink-0">
                  <bdi>
                    Monday
                  </bdi>
                </span>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-out align-self-end flex-row-reverse">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-primary text-on-primary">
                    <p className="fs-md mb-0">
                      The forecast walkthrough was genuinely useful — the confidence bands finally clicked.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0 justify-content-end">
                    <bdi>
                      15:20
                    </bdi>
                    <i className="icon-12 text-brand" data-lucide="check-check" aria-hidden="true" />
                    <span className="visually-hidden">
                      Read
                    </span>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-4.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Priya Nair
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      Glad it landed. I'll write the assumptions up so the team has them in one place.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      15:44
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm invisible flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      Thanks for the walkthrough today.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      17:02
                    </bdi>
                  </p>
                </div>
              </li>
            </ol>
            {" "}
            <ol className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-stream="cw-dev">
              <li className="align-self-center text-center">
                <span className="badge-soft flex-shrink-0">
                  <bdi>
                    12 August
                  </bdi>
                </span>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0 bg-grad-6" aria-hidden="true">
                  DS
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Dev Sharma
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      The mobile client is still on the v1 payload. Is v2 stable enough to move to?
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      13:15
                    </bdi>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-out align-self-end flex-row-reverse">
                <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                  <img src="/assets/images/avatar-user.png" width="34" height="34" alt="" />
                </span>
                <div className="min-w-0">
                  <div className="msg-bubble px-3 py-2 bg-primary text-on-primary">
                    <p className="fs-md mb-0">
                      It is, but the pagination cursor changed shape. Worth half an hour on a call.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0 justify-content-end">
                    <bdi>
                      13:40
                    </bdi>
                    <i className="icon-12 text-brand" data-lucide="check-check" aria-hidden="true" />
                    <span className="visually-hidden">
                      Read
                    </span>
                  </p>
                </div>
              </li>
              <li className="msg-row d-flex align-items-end gap-2 msg-in align-self-start">
                <span className="avatar avatar-sm position-relative flex-shrink-0 bg-grad-6" aria-hidden="true">
                  DS
                </span>
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-title mb-1">
                    Dev Sharma
                  </p>
                  <div className="msg-bubble px-3 py-2 bg-muted border-soft text-body-2">
                    <p className="fs-md mb-0">
                      Let's sync on the API contract.
                    </p>
                  </div>
                  <p className="fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0">
                    <bdi>
                      13:52
                    </bdi>
                  </p>
                </div>
              </li>
            </ol>
          </div>
          {/* A message the reader sends is the one message this page does not
             ship with. Its shape still belongs to the HTML: the script stamps
             these templates and fills them. */}
          <template
            data-chat-message-template=""
            dangerouslySetInnerHTML={{ __html: "<li class=\"msg-row d-flex align-items-end gap-2 msg-out align-self-end flex-row-reverse\">\n              <span class=\"avatar avatar-sm position-relative flex-shrink-0\" aria-hidden=\"true\"><img src=\"/assets/images/avatar-user.png\" width=\"34\" height=\"34\" alt=\"\"></span>\n              <div class=\"min-w-0\">\n                <div class=\"msg-bubble px-3 py-2 bg-primary text-on-primary\">\n                  <p class=\"fs-md mb-0\" data-chat-text=\"\"></p>\n                </div>\n                <p class=\"fs-xs text-muted-2 d-flex align-items-center gap-1 mt-1 mb-0 justify-content-end\">\n                  <bdi></bdi>\n                  <i class=\"icon-12 text-brand\" data-lucide=\"check-check\" aria-hidden=\"true\"></i><span class=\"visually-hidden\">Read</span>\n                </p>\n              </div>\n            </li>" }}
          />
          <template
            data-chat-file-template=""
            dangerouslySetInnerHTML={{ __html: "<span class=\"d-flex align-items-center gap-2 p-2 rounded-3 bg-plain\">\n              <span class=\"icon-box icon-box-sm flex-shrink-0 tint-primary\" aria-hidden=\"true\"><i data-lucide=\"paperclip\"></i></span>\n              <span class=\"flex-grow-1 min-w-0\">\n                <span class=\"d-block fs-md fw-semibold text-title text-truncate\"></span>\n                <span class=\"d-block fs-xs text-muted-2 text-truncate\"><bdi></bdi></span>\n              </span>\n              <i class=\"icon-16 text-muted-2 flex-shrink-0\" data-lucide=\"download\" aria-hidden=\"true\"></i>\n            </span>" }}
          />
          {/* Composer */}
          <form className="p-3 border-t-soft flex-shrink-0" data-chat-form="" noValidate>
            <div className="d-flex align-items-center gap-2">
              <input
                type="file"
                className="d-none"
                id="chatAttachInput"
                name="attachments"
                multiple
                data-chat-attach-input=""
              />
              <button
                type="button"
                className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                data-chat-attach=""
                aria-label="Attach a file"
                title="Attach a file"
              >
                <i data-lucide="paperclip" aria-hidden="true" />
              </button>
              <div className="flex-grow-1 min-w-0">
                <label htmlFor="chatComposer" className="visually-hidden">
                  Write a message
                </label>
                {" "}
                <textarea
                  className="form-control textarea-grow rounded-4"
                  id="chatComposer"
                  name="message"
                  rows="1"
                  placeholder="Write a message…"
                  data-chat-input=""
                />
              </div>
              <button
                type="button"
                className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                aria-label="Record a voice note"
                title="Record a voice note"
              >
                <i data-lucide="mic" aria-hidden="true" />
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-18 rounded-circle flex-shrink-0"
                aria-label="Send message"
              >
                <i className="flip-rtl" data-lucide="send-horizontal" aria-hidden="true" />
              </button>
            </div>
            <p className="fs-xs text-muted-2 mt-2 mb-0 d-none d-md-block">
              Press
              {" "}
              <kbd>
                Enter
              </kbd>
              {" "}to send,{" "}
              <kbd>
                Shift
              </kbd>
              {" "}+{" "}
              <kbd>
                Enter
              </kbd>
              {" "}
              for a new line.
            </p>
          </form>
        </section>
        {/* ========== Pane 3 — conversation details (drawer under xxl) ========== */}
        <aside
          className="offcanvas-xxl offcanvas-end app-pane d-flex flex-column"
          tabIndex="-1"
          id="chatInfoPane"
          aria-labelledby="chatInfoTitle"
        >
          <div className="offcanvas-body d-flex flex-fill min-h-0 p-3 p-xxl-0 overflow-hidden">
            <div className="card flex-fill min-w-0 mb-0 overflow-hidden">
              <div className="d-flex align-items-center gap-2 p-3 border-b-soft flex-shrink-0">
                <h2 id="chatInfoTitle" className="fs-5 fw-bold text-title mb-0 me-auto">
                  Details
                </h2>
                <button
                  type="button"
                  className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0 d-xxl-none"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#chatInfoPane"
                  aria-label="Close details"
                >
                  <i data-lucide="x" aria-hidden="true" />
                </button>
              </div>
              <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin">
                {/* Identity */}
                <div className="text-center p-3 border-b-soft">
                  <span
                    data-chat-avatar-for="cw-design"
                    className="avatar avatar-xl position-relative flex-shrink-0 radius-lg mb-2 bg-grad-1"
                    aria-hidden="true"
                  >
                    DC
                    <span className="avatar-status" />
                  </span>
                  {" "}
                  <span
                    data-chat-avatar-for="cw-aarav"
                    className="avatar avatar-xl position-relative flex-shrink-0 radius-lg mb-2 d-none"
                    aria-hidden="true"
                  >
                    <img src="/assets/images/avatar-1.png" width="84" height="84" alt="" />
                    <span className="avatar-status" />
                  </span>
                  {" "}
                  <span
                    data-chat-avatar-for="cw-meera"
                    className="avatar avatar-xl position-relative flex-shrink-0 radius-lg mb-2 d-none"
                    aria-hidden="true"
                  >
                    <img src="/assets/images/avatar-2.png" width="84" height="84" alt="" />
                    <span className="avatar-status" />
                  </span>
                  {" "}
                  <span
                    data-chat-avatar-for="cw-release"
                    className="avatar avatar-xl position-relative flex-shrink-0 radius-lg mb-2 d-none bg-grad-3"
                    aria-hidden="true"
                  >
                    RR
                    <span className="avatar-status" />
                  </span>
                  {" "}
                  <span
                    data-chat-avatar-for="cw-kabir"
                    className="avatar avatar-xl position-relative flex-shrink-0 radius-lg mb-2 d-none"
                    aria-hidden="true"
                  >
                    <img src="/assets/images/avatar-3.png" width="84" height="84" alt="" />
                    <span className="avatar-status away" />
                  </span>
                  {" "}
                  <span
                    data-chat-avatar-for="cw-support"
                    className="avatar avatar-xl position-relative flex-shrink-0 radius-lg mb-2 d-none bg-grad-2"
                    aria-hidden="true"
                  >
                    SE
                    <span className="avatar-status" />
                  </span>
                  {" "}
                  <span
                    data-chat-avatar-for="cw-priya"
                    className="avatar avatar-xl position-relative flex-shrink-0 radius-lg mb-2 d-none"
                    aria-hidden="true"
                  >
                    <img src="/assets/images/avatar-4.png" width="84" height="84" alt="" />
                    <span className="avatar-status offline" />
                  </span>
                  {" "}
                  <span
                    data-chat-avatar-for="cw-dev"
                    className="avatar avatar-xl position-relative flex-shrink-0 radius-lg mb-2 d-none bg-grad-6"
                    aria-hidden="true"
                  >
                    DS
                    <span className="avatar-status offline" />
                  </span>
                  {" "}
                  <span
                    data-chat-avatar-for="cw-ops"
                    className="avatar avatar-xl position-relative flex-shrink-0 radius-lg mb-2 d-none bg-grad-5"
                    aria-hidden="true"
                  >
                    OV
                    <span className="avatar-status offline" />
                  </span>
                  <p className="fs-5 fw-bold text-title mb-1" data-chat-out="name">
                    Design Crew
                  </p>
                  <p className="fs-md text-body-2 mb-3">
                    <bdi data-chat-out="meta">
                      8 members · 5 online
                    </bdi>
                  </p>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    <button
                      type="button"
                      className="btn btn-primary-soft btn-18 rounded-circle"
                      aria-label="Start a voice call"
                      title="Call"
                    >
                      <i data-lucide="phone" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary-soft btn-18 rounded-circle"
                      aria-label="Start a video call"
                      title="Video"
                    >
                      <i data-lucide="video" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary-soft btn-18 rounded-circle"
                      aria-label="Add people to this conversation"
                      title="Add people"
                    >
                      <i data-lucide="user-round-plus" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary-soft btn-18 rounded-circle"
                      aria-label="Search this conversation"
                      title="Search"
                    >
                      <i data-lucide="search" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                {/* About */}
                <div className="p-3 border-b-soft">
                  <h3 className="fs-md fw-semibold text-uppercase text-muted-2 mb-2">
                    About
                  </h3>
                  <p className="fs-md text-body-2 mb-3" data-chat-about-for="cw-design">
                    Design system, brand and product UI. Critique every Thursday at 11:00, decisions land in the tokens repo the same day.
                  </p>
                  <p className="fs-md text-body-2 mb-3 d-none" data-chat-about-for="cw-aarav">
                    Product lead for the dashboard suite. Usually free for a call after 15:00.
                  </p>
                  {" "}
                  <p className="fs-md text-body-2 mb-3 d-none" data-chat-about-for="cw-meera">
                    Design systems lead. Owns the token pipeline and the component library.
                  </p>
                  {" "}
                  <p className="fs-md text-body-2 mb-3 d-none" data-chat-about-for="cw-release">
                    Ship coordination for every dashboard release. Cut days are Friday; hotfixes are announced here first.
                  </p>
                  {" "}
                  <p className="fs-md text-body-2 mb-3 d-none" data-chat-about-for="cw-kabir">
                    Platform and infrastructure. On call this week, so replies can lag during an incident.
                  </p>
                  {" "}
                  <p className="fs-md text-body-2 mb-3 d-none" data-chat-about-for="cw-support">
                    Second-line queue for anything the front desk cannot close. Escalate here with the ticket ID in the first line.
                  </p>
                  {" "}
                  <p className="fs-md text-body-2 mb-3 d-none" data-chat-about-for="cw-priya">
                    Data science. Owns the forecasting models behind the analytics dashboard.
                  </p>
                  {" "}
                  <p className="fs-md text-body-2 mb-3 d-none" data-chat-about-for="cw-dev">
                    Mobile engineering. Builds the companion app against the same API surface.
                  </p>
                  {" "}
                  <p className="fs-md text-body-2 mb-3 d-none" data-chat-about-for="cw-ops" />
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0" data-chat-rows-for="cw-design">
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="users" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Members
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            8 people
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="hash" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Channel
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            design-crew
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="calendar-days" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Created
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            14 Feb 2026
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-rows-for="cw-aarav">
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="briefcase" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Role
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            Product Lead
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="mail" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Email
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            aarav@vionex.com
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="clock" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Local time
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            09:42 (GMT+5:30)
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-rows-for="cw-meera">
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="briefcase" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Role
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            Design Systems
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="mail" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Email
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            meera@vionex.com
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="globe" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Location
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            Bengaluru, IN
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-rows-for="cw-release">
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="users" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Members
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            12 people
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="hash" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Channel
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            release-room
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="calendar-days" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Next cut
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            Friday, 4 Sep 2026
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-rows-for="cw-kabir">
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="briefcase" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Role
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            Platform
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="mail" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Email
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            kabir@vionex.com
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="clock" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Local time
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            09:42 (GMT+5:30)
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-rows-for="cw-support">
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="users" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Members
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            6 people
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="hash" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Channel
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            support-escalations
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="clock" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Response target
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            Under 2 hours
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-rows-for="cw-priya">
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="briefcase" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Role
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            Data Science
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="mail" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Email
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            priya@vionex.com
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="globe" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Location
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            Pune, IN
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-rows-for="cw-dev">
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="briefcase" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Role
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            Mobile
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="mail" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Email
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            dev@vionex.com
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                        <i data-lucide="clock" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          Local time
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            09:42 (GMT+5:30)
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-rows-for="cw-ops" />
                </div>
                {/* Preferences */}
                <div className="p-3 border-b-soft">
                  <h3 className="fs-md fw-semibold text-uppercase text-muted-2 mb-2">
                    Preferences
                  </h3>
                  <div className="form-check form-switch d-flex align-items-center justify-content-between gap-2 ps-0 mb-2">
                    <label className="form-check-label fs-md text-body-2 order-0" htmlFor="chatMuteToggle">
                      Mute notifications
                    </label>
                    {" "}
                    <input
                      className="form-check-input order-1 ms-0 mt-0 flex-shrink-0"
                      type="checkbox"
                      role="switch"
                      id="chatMuteToggle"
                    />
                  </div>
                  <div className="form-check form-switch d-flex align-items-center justify-content-between gap-2 ps-0 mb-2">
                    <label className="form-check-label fs-md text-body-2 order-0" htmlFor="chatPinToggle">
                      Pin to the top
                    </label>
                    {" "}
                    <input
                      className="form-check-input order-1 ms-0 mt-0 flex-shrink-0"
                      type="checkbox"
                      role="switch"
                      id="chatPinToggle"
                      defaultChecked
                    />
                  </div>
                  <div className="form-check form-switch d-flex align-items-center justify-content-between gap-2 ps-0 mb-0">
                    <label className="form-check-label fs-md text-body-2 order-0" htmlFor="chatReadToggle">
                      Send read receipts
                    </label>
                    {" "}
                    <input
                      className="form-check-input order-1 ms-0 mt-0 flex-shrink-0"
                      type="checkbox"
                      role="switch"
                      id="chatReadToggle"
                      defaultChecked
                    />
                  </div>
                </div>
                {/* Shared files */}
                <div className="p-3 border-b-soft" data-chat-section="files">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <h3 className="fs-md fw-semibold text-uppercase text-muted-2 mb-0 me-auto">
                      Shared files
                    </h3>
                    <a href="#" className="fs-md fw-medium text-brand text-nowrap">
                      See all
                    </a>
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0" data-chat-files-for="cw-design">
                    <li>
                      <a href="#" className="d-block" aria-label="Download radius-visual-diff.pdf">
                        {" "}
                        <span className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base">
                          <span className="icon-box icon-box-sm flex-shrink-0 tint-rose" aria-hidden="true">
                            <i data-lucide="file-text" />
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title text-truncate">
                              radius-visual-diff.pdf
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                2.4 MB · PDF · Today
                              </bdi>
                            </span>
                            {" "}
                          </span>
                          <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                        </span>
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block" aria-label="Download vionex-tokens-v4.xlsx">
                        {" "}
                        <span className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base">
                          <span className="icon-box icon-box-sm flex-shrink-0 tint-emerald" aria-hidden="true">
                            <i data-lucide="file-spreadsheet" />
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title text-truncate">
                              vionex-tokens-v4.xlsx
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                860 KB · Sheet · Yesterday
                              </bdi>
                            </span>
                            {" "}
                          </span>
                          <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                        </span>
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block" aria-label="Download dark-mode-audit.png">
                        {" "}
                        <span className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base">
                          <span className="icon-box icon-box-sm flex-shrink-0 tint-violet" aria-hidden="true">
                            <i data-lucide="file-image" />
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title text-truncate">
                              dark-mode-audit.png
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                1.1 MB · Image · 28 Aug
                              </bdi>
                            </span>
                            {" "}
                          </span>
                          <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                        </span>
                        {" "}
                      </a>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-files-for="cw-aarav">
                    <li>
                      <a href="#" className="d-block" aria-label="Download q4-product-spec.pdf">
                        {" "}
                        <span className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base">
                          <span className="icon-box icon-box-sm flex-shrink-0 tint-blue" aria-hidden="true">
                            <i data-lucide="file-text" />
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title text-truncate">
                              q4-product-spec.pdf
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                3.6 MB · PDF · Today
                              </bdi>
                            </span>
                            {" "}
                          </span>
                          <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                        </span>
                        {" "}
                      </a>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-files-for="cw-meera">
                    <li>
                      <a href="#" className="d-block" aria-label="Download component-library-v4.fig">
                        {" "}
                        <span className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base">
                          <span className="icon-box icon-box-sm flex-shrink-0 tint-violet" aria-hidden="true">
                            <i data-lucide="file-image" />
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title text-truncate">
                              component-library-v4.fig
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                18 MB · Figma · Today
                              </bdi>
                            </span>
                            {" "}
                          </span>
                          <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                        </span>
                        {" "}
                      </a>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-files-for="cw-release">
                    <li>
                      <a href="#" className="d-block" aria-label="Download release-4.2-checklist.xlsx">
                        {" "}
                        <span className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base">
                          <span className="icon-box icon-box-sm flex-shrink-0 tint-emerald" aria-hidden="true">
                            <i data-lucide="file-spreadsheet" />
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title text-truncate">
                              release-4.2-checklist.xlsx
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                240 KB · Sheet · Yesterday
                              </bdi>
                            </span>
                            {" "}
                          </span>
                          <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                        </span>
                        {" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block" aria-label="Download rollback-runbook.pdf">
                        {" "}
                        <span className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base">
                          <span className="icon-box icon-box-sm flex-shrink-0 tint-amber" aria-hidden="true">
                            <i data-lucide="file-text" />
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title text-truncate">
                              rollback-runbook.pdf
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                1.8 MB · PDF · 26 Aug
                              </bdi>
                            </span>
                            {" "}
                          </span>
                          <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                        </span>
                        {" "}
                      </a>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-files-for="cw-kabir">
                    <li>
                      <a href="#" className="d-block" aria-label="Download migration-report.pdf">
                        {" "}
                        <span className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base">
                          <span className="icon-box icon-box-sm flex-shrink-0 tint-blue" aria-hidden="true">
                            <i data-lucide="file-text" />
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title text-truncate">
                              migration-report.pdf
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                512 KB · PDF · Yesterday
                              </bdi>
                            </span>
                            {" "}
                          </span>
                          <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                        </span>
                        {" "}
                      </a>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-files-for="cw-support">
                    <li>
                      <a href="#" className="d-block" aria-label="Download escalation-log-aug.xlsx">
                        {" "}
                        <span className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft transition-base">
                          <span className="icon-box icon-box-sm flex-shrink-0 tint-emerald" aria-hidden="true">
                            <i data-lucide="file-spreadsheet" />
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title text-truncate">
                              escalation-log-aug.xlsx
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                180 KB · Sheet · Tue
                              </bdi>
                            </span>
                            {" "}
                          </span>
                          <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="download" aria-hidden="true" />
                        </span>
                        {" "}
                      </a>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-files-for="cw-priya" />
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-files-for="cw-dev" />
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-chat-files-for="cw-ops" />
                </div>
                {/* Shared media */}
                <div className="p-3 border-b-soft" data-chat-section="media">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <h3 className="fs-md fw-semibold text-uppercase text-muted-2 mb-0 me-auto">
                      Shared media
                    </h3>
                    <a href="#" className="fs-md fw-medium text-brand text-nowrap">
                      See all
                    </a>
                  </div>
                  <ul className="list-unstyled row row-cols-3 g-2 mb-0" data-chat-media-for="cw-design">
                    <li className="col">
                      <a href="#" className="d-block ratio ratio-1x1 rounded-3 overflow-hidden">
                        <img
                          src="/assets/images/inventory-1.jpg"
                          width="160"
                          height="160"
                          className="object-fit-cover"
                          alt="Pink high-top sneaker resting on an open hand"
                        />
                      </a>
                    </li>
                    <li className="col">
                      <a href="#" className="d-block ratio ratio-1x1 rounded-3 overflow-hidden">
                        <img
                          src="/assets/images/inventory-2.jpg"
                          width="160"
                          height="160"
                          className="object-fit-cover"
                          alt="Runner outdoors wearing white over-ear headphones"
                        />
                      </a>
                    </li>
                    <li className="col">
                      <a href="#" className="d-block ratio ratio-1x1 rounded-3 overflow-hidden">
                        <img
                          src="/assets/images/inventory-3.jpg"
                          width="160"
                          height="160"
                          className="object-fit-cover"
                          alt="Purple wireless headphones lit from below"
                        />
                      </a>
                    </li>
                    <li className="col">
                      <a href="#" className="d-block ratio ratio-1x1 rounded-3 overflow-hidden">
                        <img
                          src="/assets/images/inventory-4.jpg"
                          width="160"
                          height="160"
                          className="object-fit-cover"
                          alt="Toddler in a quilted winter coat and bobble hat"
                        />
                      </a>
                    </li>
                    <li className="col">
                      <a href="#" className="d-block ratio ratio-1x1 rounded-3 overflow-hidden">
                        <img
                          src="/assets/images/inventory-5.jpg"
                          width="160"
                          height="160"
                          className="object-fit-cover"
                          alt="Green leather handbag on a plain background"
                        />
                      </a>
                    </li>
                    <li className="col">
                      <a href="#" className="d-block ratio ratio-1x1 rounded-3 overflow-hidden">
                        <img
                          src="/assets/images/inventory-6.jpg"
                          width="160"
                          height="160"
                          className="object-fit-cover"
                          alt="Black and orange running shoe in profile"
                        />
                      </a>
                    </li>
                  </ul>
                  <ul className="list-unstyled row row-cols-3 g-2 mb-0 d-none" data-chat-media-for="cw-aarav" />
                  {" "}
                  <ul className="list-unstyled row row-cols-3 g-2 mb-0 d-none" data-chat-media-for="cw-meera">
                    <li className="col">
                      <a href="#" className="d-block ratio ratio-1x1 rounded-3 overflow-hidden">
                        <img
                          src="/assets/images/inventory-2.jpg"
                          width="160"
                          height="160"
                          className="object-fit-cover"
                          alt="Runner outdoors wearing white over-ear headphones"
                        />
                      </a>
                    </li>
                    <li className="col">
                      <a href="#" className="d-block ratio ratio-1x1 rounded-3 overflow-hidden">
                        <img
                          src="/assets/images/inventory-5.jpg"
                          width="160"
                          height="160"
                          className="object-fit-cover"
                          alt="Green leather handbag on a plain background"
                        />
                      </a>
                    </li>
                    <li className="col">
                      <a href="#" className="d-block ratio ratio-1x1 rounded-3 overflow-hidden">
                        <img
                          src="/assets/images/inventory-7.jpg"
                          width="160"
                          height="160"
                          className="object-fit-cover"
                          alt="Tan leather tote bag held against a plain wall"
                        />
                      </a>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled row row-cols-3 g-2 mb-0 d-none" data-chat-media-for="cw-release">
                    <li className="col">
                      <a href="#" className="d-block ratio ratio-1x1 rounded-3 overflow-hidden">
                        <img
                          src="/assets/images/inventory-8.jpg"
                          width="160"
                          height="160"
                          className="object-fit-cover"
                          alt="Blue high-top trainer under studio lighting"
                        />
                      </a>
                    </li>
                    <li className="col">
                      <a href="#" className="d-block ratio ratio-1x1 rounded-3 overflow-hidden">
                        <img
                          src="/assets/images/inventory-9.jpg"
                          width="160"
                          height="160"
                          className="object-fit-cover"
                          alt="Child in a grey hooded jumper holding a flower"
                        />
                      </a>
                    </li>
                    <li className="col">
                      <a href="#" className="d-block ratio ratio-1x1 rounded-3 overflow-hidden">
                        <img
                          src="/assets/images/inventory-3.jpg"
                          width="160"
                          height="160"
                          className="object-fit-cover"
                          alt="Purple wireless headphones lit from below"
                        />
                      </a>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled row row-cols-3 g-2 mb-0 d-none" data-chat-media-for="cw-kabir" />
                  {" "}
                  <ul className="list-unstyled row row-cols-3 g-2 mb-0 d-none" data-chat-media-for="cw-support" />
                  {" "}
                  <ul className="list-unstyled row row-cols-3 g-2 mb-0 d-none" data-chat-media-for="cw-priya" />
                  {" "}
                  <ul className="list-unstyled row row-cols-3 g-2 mb-0 d-none" data-chat-media-for="cw-dev" />
                  {" "}
                  <ul className="list-unstyled row row-cols-3 g-2 mb-0 d-none" data-chat-media-for="cw-ops" />
                </div>
                {/* Members */}
                <div className="p-3 border-b-soft" data-chat-section="members">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <h3 className="fs-md fw-semibold text-uppercase text-muted-2 mb-0 me-auto">
                      Members
                    </h3>
                    <button type="button" className="btn btn-ghost btn-sm px-2 py-1 fs-md fw-medium">
                      Manage
                    </button>
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0" data-chat-members-for="cw-design">
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                        <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                        <span className="avatar-status" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Meera Iyer
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Design Systems
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft flex-shrink-0 tint-slate fs-xs">
                        <bdi>
                          Owner
                        </bdi>
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                        <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                        <span className="avatar-status" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Aarav Shah
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Product Lead
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft flex-shrink-0 tint-slate fs-xs">
                        <bdi>
                          Admin
                        </bdi>
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                        <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                        <span className="avatar-status away" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Kabir Nair
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Platform
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-sm position-relative flex-shrink-0 bg-grad-4" aria-hidden="true">
                        NB
                        <span className="avatar-status" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Nisha Bose
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Customer Support
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-sm position-relative flex-shrink-0 bg-grad-6" aria-hidden="true">
                        DS
                        <span className="avatar-status offline" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Dev Sharma
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Mobile
                        </span>
                        {" "}
                      </span>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-members-for="cw-aarav" />
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-members-for="cw-meera" />
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-members-for="cw-release">
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                        <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                        <span className="avatar-status away" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Kabir Nair
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Platform
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft flex-shrink-0 tint-slate fs-xs">
                        <bdi>
                          Owner
                        </bdi>
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                        <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                        <span className="avatar-status" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Aarav Shah
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Product Lead
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                        <img src="/assets/images/avatar-4.png" width="34" height="34" alt="" />
                        <span className="avatar-status offline" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Priya Nair
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Data Science
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-sm position-relative flex-shrink-0 bg-grad-6" aria-hidden="true">
                        DS
                        <span className="avatar-status offline" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Dev Sharma
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Mobile
                        </span>
                        {" "}
                      </span>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-members-for="cw-kabir" />
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-members-for="cw-support">
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-sm position-relative flex-shrink-0 bg-grad-4" aria-hidden="true">
                        NB
                        <span className="avatar-status" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Nisha Bose
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Customer Support
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft flex-shrink-0 tint-slate fs-xs">
                        <bdi>
                          Owner
                        </bdi>
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                        <img src="/assets/images/avatar-4.png" width="34" height="34" alt="" />
                        <span className="avatar-status offline" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Priya Nair
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Data Science
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-sm position-relative flex-shrink-0" aria-hidden="true">
                        <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                        <span className="avatar-status" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Aarav Shah
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Product Lead
                        </span>
                        {" "}
                      </span>
                    </li>
                  </ul>
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-members-for="cw-priya" />
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-members-for="cw-dev" />
                  {" "}
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0 d-none" data-chat-members-for="cw-ops" />
                </div>
                {/* Safety */}
                <div className="p-3">
                  <h3 className="fs-md fw-semibold text-uppercase text-muted-2 mb-2">
                    Safety
                  </h3>
                  <div className="d-flex flex-column gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-soft d-flex align-items-center justify-content-center gap-2 hover-danger"
                    >
                      <i className="icon-18" data-lucide="ban" aria-hidden="true" />
                      {"Block & report"}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-soft d-flex align-items-center justify-content-center gap-2 hover-danger"
                    >
                      <i className="icon-18" data-lucide="trash-2" aria-hidden="true" />
                      Delete conversation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
      {/* ===== New conversation dialog ===== */}
      <div
        role="dialog"
        className="modal fade"
        id="chatNewModal"
        tabIndex="-1"
        aria-labelledby="chatNewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-b-soft">
              <div className="min-w-0">
                <h2 className="modal-title fs-5 fw-bold text-title mb-1" id="chatNewModalLabel">
                  New conversation
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Pick one teammate for a direct message, or several to open a group.
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body" data-search-scope="">
                <div className="field-icon mb-3">
                  <i className="icon-18" data-lucide="search" aria-hidden="true" />
                  {" "}
                  <label htmlFor="chatNewSearch" className="visually-hidden">
                    Search teammates
                  </label>
                  {" "}
                  <input
                    type="search"
                    className="form-control"
                    id="chatNewSearch"
                    name="teammate-search"
                    placeholder="Search teammates"
                    data-search-input=""
                  />
                </div>
                <fieldset className="mb-3">
                  <legend className="fs-md fw-semibold text-title mb-2">
                    Teammates
                  </legend>
                  <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
                    <li data-filter-tags="all">
                      <div className="form-check d-flex align-items-center gap-2 ps-0 p-2 rounded-3 tile-soft">
                        <span className="avatar avatar-sm position-relative flex-shrink-0">
                          <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                          <span className="avatar-status" />
                        </span>
                        {" "}
                        <label className="form-check-label flex-grow-1 min-w-0" htmlFor="chatPickMeera">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            Meera Iyer
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            Design Systems
                          </span>
                          {" "}
                        </label>
                        {" "}
                        <input
                          className="form-check-input flex-shrink-0 ms-0 mt-0"
                          type="checkbox"
                          defaultValue="meera"
                          name="teammates"
                          id="chatPickMeera"
                        />
                      </div>
                    </li>
                    <li data-filter-tags="all">
                      <div className="form-check d-flex align-items-center gap-2 ps-0 p-2 rounded-3 tile-soft">
                        <span className="avatar avatar-sm position-relative flex-shrink-0">
                          <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                          <span className="avatar-status away" />
                        </span>
                        {" "}
                        <label className="form-check-label flex-grow-1 min-w-0" htmlFor="chatPickKabir">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            Kabir Nair
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            Platform
                          </span>
                          {" "}
                        </label>
                        {" "}
                        <input
                          className="form-check-input flex-shrink-0 ms-0 mt-0"
                          type="checkbox"
                          defaultValue="kabir"
                          name="teammates"
                          id="chatPickKabir"
                        />
                      </div>
                    </li>
                    <li data-filter-tags="all">
                      <div className="form-check d-flex align-items-center gap-2 ps-0 p-2 rounded-3 tile-soft">
                        <span className="avatar avatar-sm position-relative flex-shrink-0">
                          <img src="/assets/images/avatar-4.png" width="34" height="34" alt="" />
                          <span className="avatar-status offline" />
                        </span>
                        {" "}
                        <label className="form-check-label flex-grow-1 min-w-0" htmlFor="chatPickPriya">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            Priya Nair
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            Data Science
                          </span>
                          {" "}
                        </label>
                        {" "}
                        <input
                          className="form-check-input flex-shrink-0 ms-0 mt-0"
                          type="checkbox"
                          defaultValue="priya"
                          name="teammates"
                          id="chatPickPriya"
                        />
                      </div>
                    </li>
                    <li data-filter-tags="all">
                      <div className="form-check d-flex align-items-center gap-2 ps-0 p-2 rounded-3 tile-soft">
                        <span className="avatar avatar-sm bg-grad-6 position-relative flex-shrink-0" aria-hidden="true">
                          DS
                          <span className="avatar-status offline" />
                        </span>
                        {" "}
                        <label className="form-check-label flex-grow-1 min-w-0" htmlFor="chatPickDev">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            Dev Sharma
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            Mobile
                          </span>
                          {" "}
                        </label>
                        {" "}
                        <input
                          className="form-check-input flex-shrink-0 ms-0 mt-0"
                          type="checkbox"
                          defaultValue="dev"
                          name="teammates"
                          id="chatPickDev"
                        />
                      </div>
                    </li>
                    <li data-filter-tags="all">
                      <div className="form-check d-flex align-items-center gap-2 ps-0 p-2 rounded-3 tile-soft">
                        <span className="avatar avatar-sm bg-grad-4 position-relative flex-shrink-0" aria-hidden="true">
                          NB
                          <span className="avatar-status" />
                        </span>
                        {" "}
                        <label className="form-check-label flex-grow-1 min-w-0" htmlFor="chatPickNisha">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            Nisha Bose
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            Customer Support
                          </span>
                          {" "}
                        </label>
                        {" "}
                        <input
                          className="form-check-input flex-shrink-0 ms-0 mt-0"
                          type="checkbox"
                          defaultValue="nisha"
                          name="teammates"
                          id="chatPickNisha"
                        />
                      </div>
                    </li>
                  </ul>
                  <p className="d-none fs-md text-body-2 text-center py-3 mb-0" data-search-empty="">
                    No teammate matches “
                    <bdi data-search-query="" />
                    ”.
                  </p>
                </fieldset>
                <div>
                  <label htmlFor="chatNewName" className="form-label fs-md fw-semibold text-title">
                    Group name
                    {" "}
                    <span className="fw-normal text-muted-2">
                      (optional)
                    </span>
                  </label>
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    id="chatNewName"
                    name="group-name"
                    placeholder="e.g. Q4 Launch Room"
                  />
                  <p className="fs-xs text-muted-2 mt-2 mb-0">
                    Naming the conversation turns it into a group everyone can rejoin later.
                  </p>
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Start conversation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}
