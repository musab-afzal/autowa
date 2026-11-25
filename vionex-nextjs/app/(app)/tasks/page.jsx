/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Tasks",
  description: "Vionex tasks app — a searchable task list and a drag-and-drop status board with priorities, due dates and assignees, built with Bootstrap 5, CSS variables and a scalable design system.",
};

const scripts = [
    "/assets/js/jquery.min.js",
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/lucide.min.js",
    "/assets/js/apexcharts.min.js",
    "/assets/js/sortable.min.js",
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
          Tasks
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
              Tasks
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Task workspace ===== */}
      <section className="app-workspace d-flex flex-fill gap-3" aria-label="Task manager" data-task-scope="">
        {/* ========== Pane 1 — views &amp; projects (drawer under xl) ========== */}
        <section
          className="offcanvas-xl offcanvas-start app-pane d-flex flex-column"
          tabIndex="-1"
          id="taskSidePane"
          aria-labelledby="taskSideTitle"
        >
          <div className="offcanvas-body d-flex flex-fill min-h-0 p-3 p-xl-0 overflow-hidden">
            <div className="card flex-fill min-w-0 mb-0 overflow-hidden">
              <div className="p-3 border-b-soft flex-shrink-0">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <h2 id="taskSideTitle" className="fs-5 fw-bold text-title mb-0 me-auto">
                    Workspace
                  </h2>
                  <button
                    type="button"
                    className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0 d-xl-none"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#taskSidePane"
                    aria-label="Close the workspace"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  data-task-new=""
                >
                  <i className="icon-18" data-lucide="plus" aria-hidden="true" />
                  New task
                </button>
              </div>
              <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin p-2">
                <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 mt-1 mb-1">
                  Views
                </p>
                <ul className="list-unstyled d-flex flex-column gap-1 mb-3">
                  <li>
                    <button
                      type="button"
                      className="list-row-select active transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-task-view="all"
                      aria-pressed="true"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="list-todo" aria-hidden="true" />
                      {" "}
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        All tasks
                      </span>
                      {" "}
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-task-count="view-all">
                        <bdi>
                          0
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-task-view="today"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="sun" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Due today
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-task-count="view-today">
                        <bdi>
                          0
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-task-view="upcoming"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="calendar-clock" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Upcoming
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-task-count="view-upcoming">
                        <bdi>
                          0
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-task-view="overdue"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="triangle-alert" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Overdue
                      </span>
                      <span className="badge-soft tint-danger flex-shrink-0 px-2 py-0" data-task-count="view-overdue">
                        <bdi>
                          0
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-task-view="completed"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="circle-check-big" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Completed
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-task-count="view-completed">
                        <bdi>
                          0
                        </bdi>
                      </span>
                    </button>
                  </li>
                </ul>
                <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 mb-1">
                  Projects
                </p>
                <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
                  <li>
                    <button
                      type="button"
                      className="list-row-select active transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-task-project="all"
                      aria-pressed="true"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="layers" aria-hidden="true" />
                      {" "}
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        All projects
                      </span>
                      {" "}
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-task-count="project-all">
                        <bdi>
                          0
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-task-project="website"
                      aria-pressed="false"
                    >
                      <span className="legend-dot bg-cat-violet flex-shrink-0 ms-1 me-1" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Website Redesign
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-task-count="project-website">
                        <bdi>
                          0
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-task-project="mobile"
                      aria-pressed="false"
                    >
                      <span className="legend-dot bg-cat-blue flex-shrink-0 ms-1 me-1" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Mobile App
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-task-count="project-mobile">
                        <bdi>
                          0
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-task-project="design"
                      aria-pressed="false"
                    >
                      <span className="legend-dot bg-cat-emerald flex-shrink-0 ms-1 me-1" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Design System
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-task-count="project-design">
                        <bdi>
                          0
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-task-project="growth"
                      aria-pressed="false"
                    >
                      <span className="legend-dot bg-cat-amber flex-shrink-0 ms-1 me-1" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Growth Campaign
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-task-count="project-growth">
                        <bdi>
                          0
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-task-project="ops"
                      aria-pressed="false"
                    >
                      <span className="legend-dot bg-cat-rose flex-shrink-0 ms-1 me-1" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Platform Ops
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-task-count="project-ops">
                        <bdi>
                          0
                        </bdi>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="p-3 border-t-soft flex-shrink-0">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i
                    className="icon-16 text-muted-2 flex-shrink-0"
                    data-lucide="chart-no-axes-column"
                    aria-hidden="true"
                  />
                  <span className="fs-md fw-semibold text-title me-auto">
                    Progress
                  </span>
                  <bdi className="fs-xs text-muted-2">
                    <span data-task-out="done-count">
                      0
                    </span>
                    {" "}of{" "}
                    <span data-task-out="total-count">
                      0
                    </span>
                    {" "}
                    done
                  </bdi>
                </div>
                <div
                  className="progress progress-sm"
                  role="progressbar"
                  aria-label="Tasks completed"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  data-task-progress=""
                >
                  <div className="progress-bar" data-task-progress-bar="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========== Pane 2 — the task surface (list ⇄ board) ========== */}
        <section
          className="card flex-fill min-w-0 mb-0 overflow-hidden"
          aria-labelledby="taskSurfaceTitle"
          data-view-switch=""
        >
          <div className="p-3 border-b-soft flex-shrink-0">
            <div className="d-flex align-items-center gap-2 mb-3">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0 d-xl-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#taskSidePane"
                aria-controls="taskSidePane"
                aria-label="Show views and projects"
              >
                <i data-lucide="menu" aria-hidden="true" />
              </button>
              <h2
                id="taskSurfaceTitle"
                className="fs-5 fw-bold text-title text-truncate mb-0 me-auto"
                data-task-out="heading"
              >
                All tasks
              </h2>
              <span className="badge-soft flex-shrink-0">
                <bdi data-task-out="shown">
                  0
                </bdi>
              </span>
              <div
                className="nav nav-pills seg-toggle d-inline-flex flex-nowrap min-w-0 gap-1 p-1 rounded-pill bg-soft overflow-x-auto scrollbar-none flex-shrink-0"
                role="group"
                aria-label="Task view"
              >
                <button
                  type="button"
                  className="nav-link active fw-semibold d-flex align-items-center gap-2"
                  data-view-target="list"
                  aria-pressed="true"
                >
                  <i className="icon-16" data-lucide="layout-list" aria-hidden="true" />
                  <span className="d-none d-sm-inline">
                    List
                  </span>
                </button>
                <button
                  type="button"
                  className="nav-link fw-semibold d-flex align-items-center gap-2"
                  data-view-target="board"
                  aria-pressed="false"
                >
                  <i className="icon-16" data-lucide="square-kanban" aria-hidden="true" />
                  <span className="d-none d-sm-inline">
                    Board
                  </span>
                </button>
              </div>
              <div className="dropdown flex-shrink-0">
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle"
                  id="taskListMenu"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  data-dd-fixed=""
                  data-bs-offset="0,8"
                  aria-expanded="false"
                  aria-label="More task actions"
                >
                  <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                </button>
                {" "}
                <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskListMenu">
                  <li>
                    <button type="button" className="dropdown-item" data-task-action="reset">
                      <i data-lucide="rotate-ccw" aria-hidden="true" />
                      Reset filters
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item" data-task-action="complete-visible">
                      <i data-lucide="check-check" aria-hidden="true" />
                      Complete every visible task
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button type="button" className="dropdown-item dropdown-item-danger" data-task-action="clear-done">
                      <i data-lucide="trash-2" aria-hidden="true" />
                      <span data-task-remove-label="">
                        Delete completed tasks
                      </span>
                      <span className="d-none" data-task-remove-confirm="">
                        Press again to delete
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-2">
              <div className="field-icon flex-grow-1 min-w-0">
                <i className="icon-18" data-lucide="search" aria-hidden="true" />
                {" "}
                <label htmlFor="taskSearch" className="visually-hidden">
                  Search tasks
                </label>
                {" "}
                <input
                  type="search"
                  className="form-control"
                  id="taskSearch"
                  name="task-search"
                  placeholder={"Search titles, notes & projects"}
                  data-task-search=""
                />
              </div>
              <label htmlFor="taskFilterPriority" className="visually-hidden">
                Filter by priority
              </label>
              <select
                className="form-select w-auto pe-5 flex-shrink-0"
                id="taskFilterPriority"
                data-task-filter="priority"
              >
                <option value="all">
                  Any priority
                </option>
                <option value="urgent">
                  Urgent
                </option>
                <option value="high">
                  High
                </option>
                <option value="medium">
                  Medium
                </option>
                <option value="low">
                  Low
                </option>
              </select>
              <label htmlFor="taskFilterAssignee" className="visually-hidden">
                Filter by assignee
              </label>
              <select
                className="form-select w-auto pe-5 flex-shrink-0"
                id="taskFilterAssignee"
                data-task-filter="assignee"
              >
                <option value="all">
                  Anyone
                </option>
                <option value="ravisha">
                  Ravisha V
                </option>
                <option value="meera">
                  Meera Iyer
                </option>
                <option value="aarav">
                  Aarav Shah
                </option>
                <option value="kabir">
                  Kabir Nair
                </option>
                <option value="priya">
                  Priya Nair
                </option>
                <option value="dev">
                  Dev Sharma
                </option>
                <option value="nisha">
                  Nisha Bose
                </option>
              </select>
              <div className="dropdown flex-shrink-0">
                <button
                  type="button"
                  className="btn btn-outline-soft d-flex align-items-center gap-2"
                  id="taskSortMenu"
                  data-bs-toggle="dropdown"
                  data-dd-fixed=""
                  data-bs-offset="0,8"
                  aria-expanded="false"
                >
                  <i className="icon-16" data-lucide="arrow-up-down" aria-hidden="true" />
                  {" "}
                  <span className="visually-hidden">
                    Sort by
                  </span>
                  {" "}
                  <span className="d-none d-lg-inline fs-md" data-task-out="sort">
                    Due date
                  </span>
                </button>
                {" "}
                <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskSortMenu">
                  <li>
                    <button type="button" className="dropdown-item" data-task-sort="due">
                      <i data-lucide="calendar-days" aria-hidden="true" />
                      Due date
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item" data-task-sort="priority">
                      <i data-lucide="flag" aria-hidden="true" />
                      Priority
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item" data-task-sort="title">
                      <i data-lucide="align-left" aria-hidden="true" />
                      Title A–Z
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item" data-task-sort="created">
                      <i data-lucide="clock" aria-hidden="true" />
                      Recently added
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ===== List view ===== */}
          <div className="d-flex flex-column flex-fill min-h-0" data-view-panel="list">
            <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin p-2">
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0" data-task-list="">
                <li
                  data-task-row="tk-12"
                  data-task-status="todo"
                  data-task-priority="medium"
                  data-task-of-project="design"
                  data-task-assignee="meera"
                  data-task-due-offset="-2"
                  data-task-created="12"
                  data-task-notes="Two variants are still referenced by the old marketing pages."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Retire the legacy button variants"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-blue"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title"
                          data-task-title=""
                        >
                          Retire the legacy button variants
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Design System
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-danger"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Tue, Sep 1
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            0/0
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-slate"
                      data-task-status-badge=""
                    >
                      To Do
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid"
                      role="img"
                      title="Meera Iyer"
                      aria-label="Assigned to Meera Iyer"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-12"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Retire the legacy button variants"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-12">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="todo"
                            aria-current="true"
                          >
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="progress">
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="done">
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-3"
                  data-task-status="review"
                  data-task-priority="urgent"
                  data-task-of-project="website"
                  data-task-assignee="kabir"
                  data-task-due-offset="-1"
                  data-task-created="3"
                  data-task-notes="The drawer sits under the status bar on notched devices."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Fix the mobile nav overlap on iOS"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-red"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title"
                          data-task-title=""
                        >
                          Fix the mobile nav overlap on iOS
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Website Redesign
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-danger"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Yesterday
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            2/2
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-amber"
                      data-task-status-badge=""
                    >
                      In Review
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid"
                      role="img"
                      title="Kabir Nair"
                      aria-label="Assigned to Kabir Nair"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-3"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Fix the mobile nav overlap on iOS"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-3">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="todo">
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="progress">
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="review"
                            aria-current="true"
                          >
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="done">
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-16"
                  data-task-status="todo"
                  data-task-priority="urgent"
                  data-task-of-project="ops"
                  data-task-assignee="ravisha"
                  data-task-due-offset="-1"
                  data-task-created="16"
                  data-task-notes="Quarterly rotation — coordinate with the mobile release."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Rotate the production API keys"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-red"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title"
                          data-task-title=""
                        >
                          Rotate the production API keys
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Platform Ops
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-danger"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Yesterday
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            0/0
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-slate"
                      data-task-status-badge=""
                    >
                      To Do
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid"
                      role="img"
                      title="Ravisha V"
                      aria-label="Assigned to Ravisha V"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-user.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-16"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Rotate the production API keys"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-16">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="todo"
                            aria-current="true"
                          >
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="progress">
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="done">
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-6"
                  data-task-status="todo"
                  data-task-priority="urgent"
                  data-task-of-project="mobile"
                  data-task-assignee="kabir"
                  data-task-due-offset="0"
                  data-task-created="6"
                  data-task-notes="Only on devices upgraded from 13 — the cache migration runs twice."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Crash on cold start (Android 14)"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-red"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title"
                          data-task-title=""
                        >
                          Crash on cold start (Android 14)
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Mobile App
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Today
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            0/0
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-slate"
                      data-task-status-badge=""
                    >
                      To Do
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid"
                      role="img"
                      title="Kabir Nair"
                      aria-label="Assigned to Kabir Nair"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-6"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Crash on cold start (Android 14)"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-6">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="todo"
                            aria-current="true"
                          >
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="progress">
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="done">
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-1"
                  data-task-status="progress"
                  data-task-priority="high"
                  data-task-of-project="website"
                  data-task-assignee="meera"
                  data-task-due-offset="0"
                  data-task-created="1"
                  data-task-notes="Final copy is signed off — swap the placeholder art and re-run the contrast check."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Ship the new pricing page hero"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-amber"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title"
                          data-task-title=""
                        >
                          Ship the new pricing page hero
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Website Redesign
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Today
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            2/3
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-blue"
                      data-task-status-badge=""
                    >
                      In Progress
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid"
                      role="img"
                      title="Meera Iyer"
                      aria-label="Assigned to Meera Iyer"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-1"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Ship the new pricing page hero"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-1">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="todo">
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="progress"
                            aria-current="true"
                          >
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="done">
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-17"
                  data-task-status="progress"
                  data-task-priority="high"
                  data-task-of-project="ops"
                  data-task-assignee="kabir"
                  data-task-due-offset="1"
                  data-task-created="17"
                  data-task-notes="Page on two consecutive failures, not on the first."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Set up uptime alerts for the EU region"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-amber"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title"
                          data-task-title=""
                        >
                          Set up uptime alerts for the EU region
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Platform Ops
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Tomorrow
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            1/2
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-blue"
                      data-task-status-badge=""
                    >
                      In Progress
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid"
                      role="img"
                      title="Kabir Nair"
                      aria-label="Assigned to Kabir Nair"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-17"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Set up uptime alerts for the EU region"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-17">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="todo">
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="progress"
                            aria-current="true"
                          >
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="done">
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-9"
                  data-task-status="progress"
                  data-task-priority="medium"
                  data-task-of-project="design"
                  data-task-assignee="meera"
                  data-task-due-offset="1"
                  data-task-created="9"
                  data-task-notes="Every token pair has to clear 4.5:1 across all six presets."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Dark-mode contrast audit"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-blue"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title"
                          data-task-title=""
                        >
                          Dark-mode contrast audit
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Design System
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Tomorrow
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            2/4
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-blue"
                      data-task-status-badge=""
                    >
                      In Progress
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid"
                      role="img"
                      title="Meera Iyer"
                      aria-label="Assigned to Meera Iyer"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-9"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Dark-mode contrast audit"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-9">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="todo">
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="progress"
                            aria-current="true"
                          >
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="done">
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-13"
                  data-task-status="todo"
                  data-task-priority="high"
                  data-task-of-project="growth"
                  data-task-assignee="nisha"
                  data-task-due-offset="2"
                  data-task-created="13"
                  data-task-notes="Five sends over three weeks, with a hold-out group."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Q4 launch email sequence"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-amber"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title"
                          data-task-title=""
                        >
                          Q4 launch email sequence
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Growth Campaign
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Sat, Sep 5
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            1/2
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-slate"
                      data-task-status-badge=""
                    >
                      To Do
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid bg-grad-4"
                      role="img"
                      title="Nisha Bose"
                      aria-label="Assigned to Nisha Bose"
                      data-task-avatar=""
                    >
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        width="28"
                        height="28"
                        alt=""
                        className="d-none"
                        data-task-avatar-img=""
                      />
                      <span data-task-avatar-initials="">
                        NB
                      </span>
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-13"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Q4 launch email sequence"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-13">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="todo"
                            aria-current="true"
                          >
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="progress">
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="done">
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-7"
                  data-task-status="review"
                  data-task-priority="medium"
                  data-task-of-project="mobile"
                  data-task-assignee="nisha"
                  data-task-due-offset="2"
                  data-task-created="7"
                  data-task-notes="Ask after the second session, never on first launch."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Push notification opt-in flow"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-blue"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title"
                          data-task-title=""
                        >
                          Push notification opt-in flow
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Mobile App
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Sat, Sep 5
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            0/0
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-amber"
                      data-task-status-badge=""
                    >
                      In Review
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid bg-grad-4"
                      role="img"
                      title="Nisha Bose"
                      aria-label="Assigned to Nisha Bose"
                      data-task-avatar=""
                    >
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        width="28"
                        height="28"
                        alt=""
                        className="d-none"
                        data-task-avatar-img=""
                      />
                      <span data-task-avatar-initials="">
                        NB
                      </span>
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-7"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Push notification opt-in flow"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-7">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="todo">
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="progress">
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="review"
                            aria-current="true"
                          >
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="done">
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-2"
                  data-task-status="todo"
                  data-task-priority="medium"
                  data-task-of-project="website"
                  data-task-assignee="priya"
                  data-task-due-offset="3"
                  data-task-created="2"
                  data-task-notes="Three screens, plain language, no more than 40 words each."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Rewrite the onboarding copy"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-blue"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title"
                          data-task-title=""
                        >
                          Rewrite the onboarding copy
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Website Redesign
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Sun, Sep 6
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            0/0
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-slate"
                      data-task-status-badge=""
                    >
                      To Do
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid"
                      role="img"
                      title="Priya Nair"
                      aria-label="Assigned to Priya Nair"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-2"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Rewrite the onboarding copy"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-2">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="todo"
                            aria-current="true"
                          >
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="progress">
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="done">
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-11"
                  data-task-status="review"
                  data-task-priority="high"
                  data-task-of-project="design"
                  data-task-assignee="ravisha"
                  data-task-due-offset="4"
                  data-task-created="11"
                  data-task-notes="Adds 24 glyphs and drops the four nobody used."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Publish icon set v3"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-amber"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title"
                          data-task-title=""
                        >
                          Publish icon set v3
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Design System
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Mon, Sep 7
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            0/0
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-amber"
                      data-task-status-badge=""
                    >
                      In Review
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid"
                      role="img"
                      title="Ravisha V"
                      aria-label="Assigned to Ravisha V"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-user.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-11"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Publish icon set v3"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-11">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="todo">
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="progress">
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="review"
                            aria-current="true"
                          >
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="done">
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-5"
                  data-task-status="progress"
                  data-task-priority="high"
                  data-task-of-project="mobile"
                  data-task-assignee="aarav"
                  data-task-due-offset="5"
                  data-task-created="5"
                  data-task-notes="Queue the writes locally and replay them once the app is back online."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Offline mode for the task list"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-amber"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title"
                          data-task-title=""
                        >
                          Offline mode for the task list
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Mobile App
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Tue, Sep 8
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            1/3
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-blue"
                      data-task-status-badge=""
                    >
                      In Progress
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid"
                      role="img"
                      title="Aarav Shah"
                      aria-label="Assigned to Aarav Shah"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-5"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Offline mode for the task list"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-5">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="todo">
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="progress"
                            aria-current="true"
                          >
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="done">
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-14"
                  data-task-status="progress"
                  data-task-priority="medium"
                  data-task-of-project="growth"
                  data-task-assignee="priya"
                  data-task-due-offset="6"
                  data-task-created="14"
                  data-task-notes="Two variants, a fortnight, decided on activation not clicks."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete A/B test the signup headline"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-blue"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title"
                          data-task-title=""
                        >
                          A/B test the signup headline
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Growth Campaign
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Wed, Sep 9
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            0/0
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-blue"
                      data-task-status-badge=""
                    >
                      In Progress
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid"
                      role="img"
                      title="Priya Nair"
                      aria-label="Assigned to Priya Nair"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-14"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for A/B test the signup headline"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-14">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="todo">
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="progress"
                            aria-current="true"
                          >
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="done">
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-10"
                  data-task-status="todo"
                  data-task-priority="low"
                  data-task-of-project="design"
                  data-task-assignee="priya"
                  data-task-due-offset="8"
                  data-task-created="10"
                  data-task-notes="One page with the ramp, the rules and two worked examples."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Document the new spacing scale"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-slate"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title"
                          data-task-title=""
                        >
                          Document the new spacing scale
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Design System
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Fri, Sep 11
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            0/0
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-slate"
                      data-task-status-badge=""
                    >
                      To Do
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid"
                      role="img"
                      title="Priya Nair"
                      aria-label="Assigned to Priya Nair"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-10"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Document the new spacing scale"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-10">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="todo"
                            aria-current="true"
                          >
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="progress">
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="done">
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-18"
                  data-task-status="done"
                  data-task-priority="low"
                  data-task-of-project="ops"
                  data-task-assignee="dev"
                  data-task-due-offset="-8"
                  data-task-created="18"
                  data-task-notes="Cold storage, with the retention tag set to five years."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      defaultChecked
                      data-task-done=""
                      aria-label="Reopen Archive the 2025 build artefacts"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-slate"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-muted-2 text-decoration-line-through"
                          data-task-title=""
                        >
                          Archive the 2025 build artefacts
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Platform Ops
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Wed, Aug 26
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            0/0
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-emerald"
                      data-task-status-badge=""
                    >
                      Done
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid bg-grad-6"
                      role="img"
                      title="Dev Sharma"
                      aria-label="Assigned to Dev Sharma"
                      data-task-avatar=""
                    >
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        width="28"
                        height="28"
                        alt=""
                        className="d-none"
                        data-task-avatar-img=""
                      />
                      <span data-task-avatar-initials="">
                        DS
                      </span>
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-18"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Archive the 2025 build artefacts"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-18">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="todo">
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="progress">
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="done"
                            aria-current="true"
                          >
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-8"
                  data-task-status="done"
                  data-task-priority="low"
                  data-task-of-project="mobile"
                  data-task-assignee="dev"
                  data-task-due-offset="-6"
                  data-task-created="8"
                  data-task-notes="Nothing breaking; the changelog is mostly performance work."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      defaultChecked
                      data-task-done=""
                      aria-label="Reopen Bump the SDK to 4.2"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-slate"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-muted-2 text-decoration-line-through"
                          data-task-title=""
                        >
                          Bump the SDK to 4.2
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Mobile App
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Fri, Aug 28
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            0/0
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-emerald"
                      data-task-status-badge=""
                    >
                      Done
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid bg-grad-6"
                      role="img"
                      title="Dev Sharma"
                      aria-label="Assigned to Dev Sharma"
                      data-task-avatar=""
                    >
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        width="28"
                        height="28"
                        alt=""
                        className="d-none"
                        data-task-avatar-img=""
                      />
                      <span data-task-avatar-initials="">
                        DS
                      </span>
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-8"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Bump the SDK to 4.2"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-8">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="todo">
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="progress">
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="done"
                            aria-current="true"
                          >
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-4"
                  data-task-status="done"
                  data-task-priority="low"
                  data-task-of-project="website"
                  data-task-assignee="dev"
                  data-task-due-offset="-4"
                  data-task-created="4"
                  data-task-notes="Everything above the fold should come in under 180 KB."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      defaultChecked
                      data-task-done=""
                      aria-label="Reopen Compress and re-export the hero imagery"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-slate"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-muted-2 text-decoration-line-through"
                          data-task-title=""
                        >
                          Compress and re-export the hero imagery
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Website Redesign
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Sun, Aug 30
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            0/0
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-emerald"
                      data-task-status-badge=""
                    >
                      Done
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid bg-grad-6"
                      role="img"
                      title="Dev Sharma"
                      aria-label="Assigned to Dev Sharma"
                      data-task-avatar=""
                    >
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        width="28"
                        height="28"
                        alt=""
                        className="d-none"
                        data-task-avatar-img=""
                      />
                      <span data-task-avatar-initials="">
                        DS
                      </span>
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-4"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Compress and re-export the hero imagery"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-4">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="todo">
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="progress">
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="done"
                            aria-current="true"
                          >
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li
                  data-task-row="tk-15"
                  data-task-status="done"
                  data-task-priority="low"
                  data-task-of-project="growth"
                  data-task-assignee="nisha"
                  data-task-due-offset="-3"
                  data-task-created="15"
                  data-task-notes="Swap in the two customers who went live last quarter."
                >
                  <div className="list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      defaultChecked
                      data-task-done=""
                      aria-label="Reopen Refresh the case-study deck"
                    />
                    <button
                      type="button"
                      data-task-open=""
                      className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="legend-dot legend-dot-sm flex-shrink-0 bg-cat-slate"
                          data-task-prio-dot=""
                          aria-hidden="true"
                        />
                        <span
                          className="flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-muted-2 text-decoration-line-through"
                          data-task-title=""
                        >
                          Refresh the case-study deck
                        </span>
                      </span>
                      <span className="d-flex align-items-center gap-2 gap-md-3 mt-1">
                        <span className="fs-xs text-muted-2 text-truncate" data-task-project-label="">
                          Growth Campaign
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                          data-task-due-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Mon, Aug 31
                          </bdi>
                        </span>
                        <span
                          className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                          data-task-sub-chip=""
                        >
                          <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                          <bdi>
                            0/0
                          </bdi>
                        </span>
                      </span>
                    </button>
                    <span
                      className="badge-soft flex-shrink-0 d-none d-md-inline-block tint-emerald"
                      data-task-status-badge=""
                    >
                      Done
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 d-none d-sm-grid bg-grad-4"
                      role="img"
                      title="Nisha Bose"
                      aria-label="Assigned to Nisha Bose"
                      data-task-avatar=""
                    >
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        width="28"
                        height="28"
                        alt=""
                        className="d-none"
                        data-task-avatar-img=""
                      />
                      <span data-task-avatar-initials="">
                        NB
                      </span>
                    </span>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="taskRowMenu-tk-15"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Refresh the case-study deck"
                      >
                        <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskRowMenu-tk-15">
                        <li>
                          <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1">
                            Move to
                          </p>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="todo">
                            <i data-lucide="circle-dashed" aria-hidden="true" />
                            To Do
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="progress">
                            <i data-lucide="circle-dot-dashed" aria-hidden="true" />
                            In Progress
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-status-set="review">
                            <i data-lucide="eye" aria-hidden="true" />
                            In Review
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="dropdown-item"
                            data-task-status-set="done"
                            aria-current="true"
                          >
                            <i data-lucide="circle-check-big" aria-hidden="true" />
                            Done
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-task-edit="">
                            <i data-lucide="pencil" aria-hidden="true" />
                            Edit details
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger" data-task-remove="">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            <span>
                              <span data-task-remove-label="">
                                Delete task
                              </span>
                              <span className="d-none" data-task-remove-confirm="">
                                Press again to delete
                              </span>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="d-none text-center px-3 py-5" data-task-empty="list">
                <span className="notif-empty-icon" aria-hidden="true">
                  <i data-lucide="search-x" />
                </span>
                <p className="fw-semibold text-title mt-2 mb-1">
                  Nothing to show here
                </p>
                <p className="fs-md text-body-2 mb-3">
                  No task matches this view, search or filter.
                </p>
                <button type="button" className="btn btn-outline-soft btn-sm" data-task-action="reset">
                  Reset filters
                </button>
              </div>
            </div>
          </div>
          {/* ===== Board view ===== */}
          <div
            className="d-flex gap-3 flex-fill min-h-0 overflow-x-auto scrollbar-thin p-3 d-none"
            data-view-panel="board"
          >
            <section
              className="scroll-col d-flex flex-column min-h-0 bg-soft rounded-3 p-2"
              aria-labelledby="taskColTodo"
            >
              <div className="d-flex align-items-center gap-2 px-2 py-1 mb-1">
                <span className="legend-dot bg-cat-slate flex-shrink-0" aria-hidden="true" />
                <h3 id="taskColTodo" className="fs-md fw-bold text-title text-truncate mb-0 me-auto">
                  To Do
                </h3>
                <span className="badge-soft flex-shrink-0 px-2 py-0" data-task-count="status-todo">
                  <bdi>
                    0
                  </bdi>
                </span>
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                  data-task-new=""
                  data-task-status="todo"
                  aria-label="Add a task to To Do"
                >
                  <i data-lucide="plus" aria-hidden="true" />
                </button>
              </div>
              <ul
                className="list-unstyled d-flex flex-column gap-2 flex-fill min-h-0 overflow-y-auto scrollbar-thin p-1 mb-0"
                data-task-col="todo"
              >
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-12">
                  <span className="accent-edge-b text-cat-blue" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-blue" data-task-prio-badge="">
                      Medium
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Design System
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title"
                  >
                    Retire the legacy button variants
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Retire the legacy button variants"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-danger"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Tue, Sep 1
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        0/0
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto"
                      role="img"
                      title="Meera Iyer"
                      aria-label="Assigned to Meera Iyer"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                  </div>
                </li>
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-16">
                  <span className="accent-edge-b text-cat-red" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-danger" data-task-prio-badge="">
                      Urgent
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Platform Ops
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title"
                  >
                    Rotate the production API keys
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Rotate the production API keys"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-danger"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Yesterday
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        0/0
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto"
                      role="img"
                      title="Ravisha V"
                      aria-label="Assigned to Ravisha V"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-user.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                  </div>
                </li>
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-6">
                  <span className="accent-edge-b text-cat-red" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-danger" data-task-prio-badge="">
                      Urgent
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Mobile App
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title"
                  >
                    Crash on cold start (Android 14)
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Crash on cold start (Android 14)"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Today
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        0/0
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto"
                      role="img"
                      title="Kabir Nair"
                      aria-label="Assigned to Kabir Nair"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                  </div>
                </li>
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-13">
                  <span className="accent-edge-b text-cat-amber" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-amber" data-task-prio-badge="">
                      High
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Growth Campaign
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title"
                  >
                    Q4 launch email sequence
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Q4 launch email sequence"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Sat, Sep 5
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        1/2
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto bg-grad-4"
                      role="img"
                      title="Nisha Bose"
                      aria-label="Assigned to Nisha Bose"
                      data-task-avatar=""
                    >
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        width="28"
                        height="28"
                        alt=""
                        className="d-none"
                        data-task-avatar-img=""
                      />
                      <span data-task-avatar-initials="">
                        NB
                      </span>
                    </span>
                  </div>
                </li>
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-2">
                  <span className="accent-edge-b text-cat-blue" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-blue" data-task-prio-badge="">
                      Medium
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Website Redesign
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title"
                  >
                    Rewrite the onboarding copy
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Rewrite the onboarding copy"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Sun, Sep 6
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        0/0
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto"
                      role="img"
                      title="Priya Nair"
                      aria-label="Assigned to Priya Nair"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                  </div>
                </li>
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-10">
                  <span className="accent-edge-b text-cat-slate" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-slate" data-task-prio-badge="">
                      Low
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Design System
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title"
                  >
                    Document the new spacing scale
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Document the new spacing scale"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Fri, Sep 11
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        0/0
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto"
                      role="img"
                      title="Priya Nair"
                      aria-label="Assigned to Priya Nair"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                  </div>
                </li>
                <li
                  className="border border-dashed rounded-3 p-3 text-center fs-xs text-muted-2 d-none"
                  data-task-placeholder=""
                >
                  Nothing here yet
                </li>
              </ul>
            </section>
            <section
              className="scroll-col d-flex flex-column min-h-0 bg-soft rounded-3 p-2"
              aria-labelledby="taskColProgress"
            >
              <div className="d-flex align-items-center gap-2 px-2 py-1 mb-1">
                <span className="legend-dot bg-cat-blue flex-shrink-0" aria-hidden="true" />
                <h3 id="taskColProgress" className="fs-md fw-bold text-title text-truncate mb-0 me-auto">
                  In Progress
                </h3>
                <span className="badge-soft flex-shrink-0 px-2 py-0" data-task-count="status-progress">
                  <bdi>
                    0
                  </bdi>
                </span>
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                  data-task-new=""
                  data-task-status="progress"
                  aria-label="Add a task to In Progress"
                >
                  <i data-lucide="plus" aria-hidden="true" />
                </button>
              </div>
              <ul
                className="list-unstyled d-flex flex-column gap-2 flex-fill min-h-0 overflow-y-auto scrollbar-thin p-1 mb-0"
                data-task-col="progress"
              >
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-1">
                  <span className="accent-edge-b text-cat-amber" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-amber" data-task-prio-badge="">
                      High
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Website Redesign
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title"
                  >
                    Ship the new pricing page hero
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Ship the new pricing page hero"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Today
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        2/3
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto"
                      role="img"
                      title="Meera Iyer"
                      aria-label="Assigned to Meera Iyer"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                  </div>
                </li>
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-17">
                  <span className="accent-edge-b text-cat-amber" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-amber" data-task-prio-badge="">
                      High
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Platform Ops
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title"
                  >
                    Set up uptime alerts for the EU region
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Set up uptime alerts for the EU region"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Tomorrow
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        1/2
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto"
                      role="img"
                      title="Kabir Nair"
                      aria-label="Assigned to Kabir Nair"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                  </div>
                </li>
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-9">
                  <span className="accent-edge-b text-cat-blue" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-blue" data-task-prio-badge="">
                      Medium
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Design System
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title"
                  >
                    Dark-mode contrast audit
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Dark-mode contrast audit"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Tomorrow
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        2/4
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto"
                      role="img"
                      title="Meera Iyer"
                      aria-label="Assigned to Meera Iyer"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                  </div>
                </li>
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-5">
                  <span className="accent-edge-b text-cat-amber" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-amber" data-task-prio-badge="">
                      High
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Mobile App
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title"
                  >
                    Offline mode for the task list
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Offline mode for the task list"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Tue, Sep 8
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        1/3
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto"
                      role="img"
                      title="Aarav Shah"
                      aria-label="Assigned to Aarav Shah"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                  </div>
                </li>
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-14">
                  <span className="accent-edge-b text-cat-blue" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-blue" data-task-prio-badge="">
                      Medium
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Growth Campaign
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title"
                  >
                    A/B test the signup headline
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete A/B test the signup headline"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Wed, Sep 9
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        0/0
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto"
                      role="img"
                      title="Priya Nair"
                      aria-label="Assigned to Priya Nair"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                  </div>
                </li>
                <li
                  className="border border-dashed rounded-3 p-3 text-center fs-xs text-muted-2 d-none"
                  data-task-placeholder=""
                >
                  Nothing here yet
                </li>
              </ul>
            </section>
            <section
              className="scroll-col d-flex flex-column min-h-0 bg-soft rounded-3 p-2"
              aria-labelledby="taskColReview"
            >
              <div className="d-flex align-items-center gap-2 px-2 py-1 mb-1">
                <span className="legend-dot bg-cat-amber flex-shrink-0" aria-hidden="true" />
                <h3 id="taskColReview" className="fs-md fw-bold text-title text-truncate mb-0 me-auto">
                  In Review
                </h3>
                <span className="badge-soft flex-shrink-0 px-2 py-0" data-task-count="status-review">
                  <bdi>
                    0
                  </bdi>
                </span>
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                  data-task-new=""
                  data-task-status="review"
                  aria-label="Add a task to In Review"
                >
                  <i data-lucide="plus" aria-hidden="true" />
                </button>
              </div>
              <ul
                className="list-unstyled d-flex flex-column gap-2 flex-fill min-h-0 overflow-y-auto scrollbar-thin p-1 mb-0"
                data-task-col="review"
              >
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-3">
                  <span className="accent-edge-b text-cat-red" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-danger" data-task-prio-badge="">
                      Urgent
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Website Redesign
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title"
                  >
                    Fix the mobile nav overlap on iOS
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Fix the mobile nav overlap on iOS"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-danger"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Yesterday
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        2/2
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto"
                      role="img"
                      title="Kabir Nair"
                      aria-label="Assigned to Kabir Nair"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                  </div>
                </li>
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-7">
                  <span className="accent-edge-b text-cat-blue" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-blue" data-task-prio-badge="">
                      Medium
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Mobile App
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title"
                  >
                    Push notification opt-in flow
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Push notification opt-in flow"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Sat, Sep 5
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        0/0
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto bg-grad-4"
                      role="img"
                      title="Nisha Bose"
                      aria-label="Assigned to Nisha Bose"
                      data-task-avatar=""
                    >
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        width="28"
                        height="28"
                        alt=""
                        className="d-none"
                        data-task-avatar-img=""
                      />
                      <span data-task-avatar-initials="">
                        NB
                      </span>
                    </span>
                  </div>
                </li>
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-11">
                  <span className="accent-edge-b text-cat-amber" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-amber" data-task-prio-badge="">
                      High
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Design System
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title"
                  >
                    Publish icon set v3
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      data-task-done=""
                      aria-label="Complete Publish icon set v3"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Mon, Sep 7
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        0/0
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto"
                      role="img"
                      title="Ravisha V"
                      aria-label="Assigned to Ravisha V"
                      data-task-avatar=""
                    >
                      <img src="/assets/images/avatar-user.png" width="28" height="28" alt="" data-task-avatar-img="" />
                      <span className="d-none" data-task-avatar-initials="" />
                    </span>
                  </div>
                </li>
                <li
                  className="border border-dashed rounded-3 p-3 text-center fs-xs text-muted-2 d-none"
                  data-task-placeholder=""
                >
                  Nothing here yet
                </li>
              </ul>
            </section>
            <section
              className="scroll-col d-flex flex-column min-h-0 bg-soft rounded-3 p-2"
              aria-labelledby="taskColDone"
            >
              <div className="d-flex align-items-center gap-2 px-2 py-1 mb-1">
                <span className="legend-dot bg-cat-emerald flex-shrink-0" aria-hidden="true" />
                <h3 id="taskColDone" className="fs-md fw-bold text-title text-truncate mb-0 me-auto">
                  Done
                </h3>
                <span className="badge-soft flex-shrink-0 px-2 py-0" data-task-count="status-done">
                  <bdi>
                    0
                  </bdi>
                </span>
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                  data-task-new=""
                  data-task-status="done"
                  aria-label="Add a task to Done"
                >
                  <i data-lucide="plus" aria-hidden="true" />
                </button>
              </div>
              <ul
                className="list-unstyled d-flex flex-column gap-2 flex-fill min-h-0 overflow-y-auto scrollbar-thin p-1 mb-0"
                data-task-col="done"
              >
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-18">
                  <span className="accent-edge-b text-cat-slate" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-slate" data-task-prio-badge="">
                      Low
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Platform Ops
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-muted-2 text-decoration-line-through"
                  >
                    Archive the 2025 build artefacts
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      defaultChecked
                      data-task-done=""
                      aria-label="Reopen Archive the 2025 build artefacts"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Wed, Aug 26
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        0/0
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto bg-grad-6"
                      role="img"
                      title="Dev Sharma"
                      aria-label="Assigned to Dev Sharma"
                      data-task-avatar=""
                    >
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        width="28"
                        height="28"
                        alt=""
                        className="d-none"
                        data-task-avatar-img=""
                      />
                      <span data-task-avatar-initials="">
                        DS
                      </span>
                    </span>
                  </div>
                </li>
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-8">
                  <span className="accent-edge-b text-cat-slate" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-slate" data-task-prio-badge="">
                      Low
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Mobile App
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-muted-2 text-decoration-line-through"
                  >
                    Bump the SDK to 4.2
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      defaultChecked
                      data-task-done=""
                      aria-label="Reopen Bump the SDK to 4.2"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Fri, Aug 28
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        0/0
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto bg-grad-6"
                      role="img"
                      title="Dev Sharma"
                      aria-label="Assigned to Dev Sharma"
                      data-task-avatar=""
                    >
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        width="28"
                        height="28"
                        alt=""
                        className="d-none"
                        data-task-avatar-img=""
                      />
                      <span data-task-avatar-initials="">
                        DS
                      </span>
                    </span>
                  </div>
                </li>
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-4">
                  <span className="accent-edge-b text-cat-slate" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-slate" data-task-prio-badge="">
                      Low
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Website Redesign
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-muted-2 text-decoration-line-through"
                  >
                    Compress and re-export the hero imagery
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      defaultChecked
                      data-task-done=""
                      aria-label="Reopen Compress and re-export the hero imagery"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Sun, Aug 30
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        0/0
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto bg-grad-6"
                      role="img"
                      title="Dev Sharma"
                      aria-label="Assigned to Dev Sharma"
                      data-task-avatar=""
                    >
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        width="28"
                        height="28"
                        alt=""
                        className="d-none"
                        data-task-avatar-img=""
                      />
                      <span data-task-avatar-initials="">
                        DS
                      </span>
                    </span>
                  </div>
                </li>
                <li className="drag-item position-relative bg-plain border rounded-3 p-3" data-task-card="tk-15">
                  <span className="accent-edge-b text-cat-slate" data-task-accent="" aria-hidden="true" />
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-slate" data-task-prio-badge="">
                      Low
                    </span>
                    <span className="fs-xs text-muted-2 text-truncate ms-auto" data-task-project-label="">
                      Growth Campaign
                    </span>
                  </div>
                  <button
                    type="button"
                    data-task-open=""
                    data-task-title=""
                    className="d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-muted-2 text-decoration-line-through"
                  >
                    Refresh the case-study deck
                  </button>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input flex-shrink-0 mt-0"
                      type="checkbox"
                      defaultChecked
                      data-task-done=""
                      aria-label="Reopen Refresh the case-study deck"
                    />
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2"
                      data-task-due-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Mon, Aug 31
                      </bdi>
                    </span>
                    <span
                      className="d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none"
                      data-task-sub-chip=""
                    >
                      <i className="icon-14 flex-shrink-0" data-lucide="list-checks" aria-hidden="true" />
                      <bdi>
                        0/0
                      </bdi>
                    </span>
                    <span
                      className="avatar avatar-xs flex-shrink-0 ms-auto bg-grad-4"
                      role="img"
                      title="Nisha Bose"
                      aria-label="Assigned to Nisha Bose"
                      data-task-avatar=""
                    >
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        width="28"
                        height="28"
                        alt=""
                        className="d-none"
                        data-task-avatar-img=""
                      />
                      <span data-task-avatar-initials="">
                        NB
                      </span>
                    </span>
                  </div>
                </li>
                <li
                  className="border border-dashed rounded-3 p-3 text-center fs-xs text-muted-2 d-none"
                  data-task-placeholder=""
                >
                  Nothing here yet
                </li>
              </ul>
            </section>
          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 px-3 py-2 border-t-soft flex-shrink-0">
            <p className="fs-xs text-muted-2 mb-0">
              Showing
              {" "}
              <bdi data-task-out="shown">
                0
              </bdi>
              {" "}of{" "}
              <bdi data-task-out="total-count">
                0
              </bdi>
              {" "}
              tasks
            </p>
            <p className="fs-xs text-muted-2 mb-0 d-none" data-view-panel="board">
              Drag a card between columns to change its status
            </p>
          </div>
        </section>
      </section>
      {/* ===== Task details drawer ===== */}
      <div
        role="dialog"
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="taskDetailPane"
        aria-labelledby="taskDetailTitle"
      >
        <div className="offcanvas-header align-items-start gap-2 border-b-soft">
          <div className="min-w-0">
            <span className="badge-soft tint-slate" data-task-out="detail-status">
              To Do
            </span>
            <h2
              className="offcanvas-title fs-5 fw-bold text-title mt-2 mb-0"
              id="taskDetailTitle"
              data-task-out="detail-title"
            >
              Task
            </h2>
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body d-flex flex-column gap-4">
          <button
            type="button"
            className="btn btn-outline-soft w-100 d-flex align-items-center justify-content-center gap-2"
            data-task-detail-toggle=""
          >
            <i className="icon-18" data-lucide="circle-check-big" aria-hidden="true" />
            {" "}
            <span
              data-task-out="detail-toggle"
              data-task-label-open="Mark as complete"
              data-task-label-done="Mark as not done"
            >
              Mark as complete
            </span>
          </button>
          <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
            <li className="d-flex align-items-start gap-2">
              <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                <i data-lucide="calendar-days" />
              </span>
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs text-muted-2">
                  Due
                </span>
                {" "}
                <span className="d-block fs-md text-body-2">
                  <bdi data-task-out="detail-due">
                    —
                  </bdi>
                </span>
                {" "}
              </span>
            </li>
            <li className="d-flex align-items-start gap-2">
              <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                <i data-lucide="user-round" />
              </span>
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs text-muted-2">
                  Assignee
                </span>
                {" "}
                <span className="d-block fs-md text-body-2" data-task-out="detail-assignee">
                  —
                </span>
                {" "}
              </span>
            </li>
            <li className="d-flex align-items-start gap-2">
              <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                <i data-lucide="folder" />
              </span>
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs text-muted-2">
                  Project
                </span>
                {" "}
                <span className="d-block fs-md text-body-2" data-task-out="detail-project">
                  —
                </span>
                {" "}
              </span>
            </li>
          </ul>
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <label htmlFor="taskDetailStatus" className="form-label fs-md fw-semibold text-title">
                Status
              </label>
              {" "}
              <select className="form-select" id="taskDetailStatus" data-task-set="status">
                <option value="todo">
                  To Do
                </option>
                <option value="progress">
                  In Progress
                </option>
                <option value="review">
                  In Review
                </option>
                <option value="done">
                  Done
                </option>
              </select>
            </div>
            <div className="col-12 col-sm-6">
              <label htmlFor="taskDetailPriority" className="form-label fs-md fw-semibold text-title">
                Priority
              </label>
              {" "}
              <select className="form-select" id="taskDetailPriority" data-task-set="priority">
                <option value="urgent">
                  Urgent
                </option>
                <option value="high">
                  High
                </option>
                <option value="medium">
                  Medium
                </option>
                <option value="low">
                  Low
                </option>
              </select>
            </div>
          </div>
          <div>
            <h3 className="fs-md fw-semibold text-title mb-2">
              Description
            </h3>
            <p className="fs-md text-body-2 mb-0" data-task-out="detail-notes">
              No description yet.
            </p>
          </div>
          <div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <h3 className="fs-md fw-semibold text-title mb-0 me-auto">
                Subtasks
              </h3>
              <span className="fs-xs text-muted-2">
                <bdi data-task-out="detail-subtasks">
                  0 of 0
                </bdi>
              </span>
            </div>
            <div className="mb-3" data-task-subtasks="">
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-1">
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-1-0"
                    defaultChecked
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-1-0">
                    Export the hero art at 2x
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Export the hero art at 2x"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-1-1"
                    defaultChecked
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-1-1">
                    Wire the plan toggle
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Wire the plan toggle"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-1-2"
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-1-2">
                    Dark-mode pass
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Dark-mode pass"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li className="fs-md text-muted-2 d-none" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-2">
                <li className="fs-md text-muted-2" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-3">
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-3-0"
                    defaultChecked
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-3-0">
                    Reproduce on iOS 17
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Reproduce on iOS 17"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-3-1"
                    defaultChecked
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-3-1">
                    Patch the safe-area inset
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Patch the safe-area inset"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li className="fs-md text-muted-2 d-none" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-4">
                <li className="fs-md text-muted-2" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-5">
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-5-0"
                    defaultChecked
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-5-0">
                    Local queue
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Local queue"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-5-1"
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-5-1">
                    Replay on reconnect
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Replay on reconnect"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-5-2"
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-5-2">
                    Conflict rules
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Conflict rules"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li className="fs-md text-muted-2 d-none" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-6">
                <li className="fs-md text-muted-2" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-7">
                <li className="fs-md text-muted-2" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-8">
                <li className="fs-md text-muted-2" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-9">
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-9-0"
                    defaultChecked
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-9-0">
                    Surfaces
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Surfaces"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-9-1"
                    defaultChecked
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-9-1">
                    Status colours
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Status colours"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-9-2"
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-9-2">
                    Chart palette
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Chart palette"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-9-3"
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-9-3">
                    Write up the fixes
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Write up the fixes"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li className="fs-md text-muted-2 d-none" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-10">
                <li className="fs-md text-muted-2" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-11">
                <li className="fs-md text-muted-2" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-12">
                <li className="fs-md text-muted-2" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-13">
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-13-0"
                    defaultChecked
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-13-0">
                    Outline the sequence
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Outline the sequence"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-13-1"
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-13-1">
                    Draft sends 1–3
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Draft sends 1–3"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li className="fs-md text-muted-2 d-none" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-14">
                <li className="fs-md text-muted-2" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-15">
                <li className="fs-md text-muted-2" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-16">
                <li className="fs-md text-muted-2" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-17">
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-17-0"
                    defaultChecked
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-17-0">
                    Probe endpoints
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Probe endpoints"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li
                  className="check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft"
                  data-task-subtask-row=""
                >
                  <input
                    className="form-check-input flex-shrink-0 mt-0"
                    type="checkbox"
                    id="taskSub-tk-17-1"
                    data-task-subtask=""
                  />
                  <label className="form-check-label flex-grow-1 min-w-0 fs-md" htmlFor="taskSub-tk-17-1">
                    Escalation policy
                  </label>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger"
                    data-task-subtask-remove=""
                    aria-label="Remove subtask Escalation policy"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </li>
                <li className="fs-md text-muted-2 d-none" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0 d-none" data-task-subtasks-for="tk-18">
                <li className="fs-md text-muted-2" data-task-subtask-none="">
                  No subtasks yet.
                </li>
              </ul>
            </div>
            {/* The one structure the reader can add to the page. Kept as a
               <template> so the shape of a subtask row still lives in the
               HTML and the script only stamps a copy of it. */}
            {" "}
            <template
              data-task-subtasks-template=""
              dangerouslySetInnerHTML={{ __html: "<ul class=\"list-unstyled d-flex flex-column gap-1 mb-0 d-none\" data-task-subtasks-for=\"\">\n                <li class=\"fs-md text-muted-2\" data-task-subtask-none=\"\">No subtasks yet.</li>\n              </ul>" }}
            />
            {" "}
            <template
              data-task-subtask-template=""
              dangerouslySetInnerHTML={{ __html: "<li class=\"check-strike d-flex align-items-center gap-2 p-2 rounded-3 tile-soft\" data-task-subtask-row=\"\">\n                <input class=\"form-check-input flex-shrink-0 mt-0\" type=\"checkbox\" data-task-subtask=\"\">\n                <label class=\"form-check-label flex-grow-1 min-w-0 fs-md\"></label>\n                <button type=\"button\" class=\"btn btn-ghost btn-18 rounded-circle flex-shrink-0 hover-danger\" data-task-subtask-remove=\"\" aria-label=\"Remove subtask\"><i data-lucide=\"x\" aria-hidden=\"true\"></i></button>\n              </li>" }}
            />
            <form className="d-flex align-items-center gap-2" data-task-subtask-form="" noValidate>
              <div className="flex-grow-1 min-w-0">
                <label htmlFor="taskSubtaskInput" className="visually-hidden">
                  Add a subtask
                </label>
                {" "}
                <input
                  type="text"
                  className="form-control"
                  id="taskSubtaskInput"
                  name="subtask"
                  placeholder="Add a subtask…"
                  maxLength="120"
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0"
                aria-label="Add subtask"
              >
                <i data-lucide="plus" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between gap-2 p-3 border-t-soft flex-shrink-0">
          <button
            type="button"
            className="btn btn-outline-soft hover-danger d-flex align-items-center gap-2"
            data-task-remove=""
          >
            <i className="icon-16" data-lucide="trash-2" aria-hidden="true" />
            {" "}
            <span data-task-remove-label="">
              Delete
            </span>
            {" "}
            <span className="d-none" data-task-remove-confirm="">
              Press again to delete
            </span>
          </button>
          <button type="button" className="btn btn-primary d-flex align-items-center gap-2" data-task-edit="">
            <i className="icon-18" data-lucide="pencil" aria-hidden="true" />
            Edit task
          </button>
        </div>
      </div>
      {/* A task the reader creates is the one row this page does not ship with.
         Its shape still belongs to the HTML: the script stamps these templates
         and fills them, rather than assembling a row of its own. */}
      <template
        data-task-row-template=""
        dangerouslySetInnerHTML={{ __html: "<li data-task-row=\"\" data-task-status=\"todo\" data-task-priority=\"medium\" data-task-of-project=\"website\" data-task-assignee=\"ravisha\" data-task-due-offset=\"0\" data-task-created=\"0\" data-task-notes=\"\">\n          <div class=\"list-row-select transition-base d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3\">\n            <input class=\"form-check-input flex-shrink-0 mt-0\" type=\"checkbox\" data-task-done=\"\" aria-label=\"Complete \">\n            <button type=\"button\" data-task-open=\"\" class=\"d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start\">\n              <span class=\"d-flex align-items-center gap-2\">\n                <span class=\"legend-dot legend-dot-sm flex-shrink-0 bg-cat-blue\" data-task-prio-dot=\"\" aria-hidden=\"true\"></span>\n                <span class=\"flex-grow-1 min-w-0 fs-md fw-semibold text-truncate text-title\" data-task-title=\"\"></span>\n              </span>\n              <span class=\"d-flex align-items-center gap-2 gap-md-3 mt-1\">\n                <span class=\"fs-xs text-muted-2 text-truncate\" data-task-project-label=\"\">Website Redesign</span>\n                <span class=\"d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2\" data-task-due-chip=\"\">\n                  <i class=\"icon-14 flex-shrink-0\" data-lucide=\"calendar-days\" aria-hidden=\"true\"></i><bdi>Today</bdi>\n                </span>\n                <span class=\"d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none\" data-task-sub-chip=\"\">\n                  <i class=\"icon-14 flex-shrink-0\" data-lucide=\"list-checks\" aria-hidden=\"true\"></i><bdi>0/0</bdi>\n                </span>\n              </span>\n            </button>\n            <span class=\"badge-soft flex-shrink-0 d-none d-md-inline-block tint-slate\" data-task-status-badge=\"\">To\n              Do</span>\n            <span class=\"avatar avatar-xs flex-shrink-0 d-none d-sm-grid\" role=\"img\" title=\"Ravisha V\" aria-label=\"Assigned to Ravisha V\" data-task-avatar=\"\">\n              <img src=\"/assets/images/avatar-user.png\" width=\"28\" height=\"28\" alt=\"\" data-task-avatar-img=\"\">\n              <span class=\"d-none\" data-task-avatar-initials=\"\"></span></span>\n            <div class=\"dropdown flex-shrink-0\">\n              <button type=\"button\" class=\"btn btn-ghost btn-18 rounded-circle\" id=\"taskRowMenu-\" data-bs-toggle=\"dropdown\" data-bs-auto-close=\"outside\" data-dd-fixed=\"\" data-bs-offset=\"0,8\" aria-expanded=\"false\" aria-label=\"More actions for \"><i data-lucide=\"ellipsis-vertical\" aria-hidden=\"true\"></i></button>\n              <ul class=\"dropdown-menu dropdown-menu-end p-2\" aria-labelledby=\"taskRowMenu-\">\n                <li>\n                  <p class=\"fs-xs fw-semibold text-uppercase text-muted-2 px-2 pt-1 mb-1\">Move to</p>\n                </li>\n                <li><button type=\"button\" class=\"dropdown-item\" data-task-status-set=\"todo\" aria-current=\"true\"><i data-lucide=\"circle-dashed\" aria-hidden=\"true\"></i>To Do</button></li>\n                <li><button type=\"button\" class=\"dropdown-item\" data-task-status-set=\"progress\"><i data-lucide=\"circle-dot-dashed\" aria-hidden=\"true\"></i>In Progress</button></li>\n                <li><button type=\"button\" class=\"dropdown-item\" data-task-status-set=\"review\"><i data-lucide=\"eye\" aria-hidden=\"true\"></i>In Review</button></li>\n                <li><button type=\"button\" class=\"dropdown-item\" data-task-status-set=\"done\"><i data-lucide=\"circle-check-big\" aria-hidden=\"true\"></i>Done</button></li>\n                <li>\n                  <hr class=\"dropdown-divider\">\n                </li>\n                <li><button type=\"button\" class=\"dropdown-item\" data-task-edit=\"\"><i data-lucide=\"pencil\" aria-hidden=\"true\"></i>Edit details</button></li>\n                <li><button type=\"button\" class=\"dropdown-item dropdown-item-danger\" data-task-remove=\"\"><i data-lucide=\"trash-2\" aria-hidden=\"true\"></i><span><span data-task-remove-label=\"\">Delete\n                        task</span><span class=\"d-none\" data-task-remove-confirm=\"\">Press again to\n                        delete</span></span></button></li>\n              </ul>\n            </div>\n          </div>\n        </li>" }}
      />
      <template
        data-task-card-template=""
        dangerouslySetInnerHTML={{ __html: "<li class=\"drag-item position-relative bg-plain border rounded-3 p-3\" data-task-card=\"\">\n          <span class=\"accent-edge-b text-cat-blue\" data-task-accent=\"\" aria-hidden=\"true\"></span>\n          <div class=\"d-flex align-items-center gap-2 mb-2\">\n            <span class=\"badge-soft fs-xs px-2 py-0 flex-shrink-0 tint-blue\" data-task-prio-badge=\"\">Medium</span>\n            <span class=\"fs-xs text-muted-2 text-truncate ms-auto\" data-task-project-label=\"\">Website Redesign</span>\n          </div>\n          <button type=\"button\" data-task-open=\"\" data-task-title=\"\" class=\"d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold text-title\"></button>\n          <div class=\"d-flex align-items-center gap-2\">\n            <input class=\"form-check-input flex-shrink-0 mt-0\" type=\"checkbox\" data-task-done=\"\" aria-label=\"Complete \">\n            <span class=\"d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2\" data-task-due-chip=\"\">\n              <i class=\"icon-14 flex-shrink-0\" data-lucide=\"calendar-days\" aria-hidden=\"true\"></i><bdi>Today</bdi>\n            </span>\n            <span class=\"d-inline-flex align-items-center gap-1 fs-xs text-nowrap text-muted-2 d-none\" data-task-sub-chip=\"\">\n              <i class=\"icon-14 flex-shrink-0\" data-lucide=\"list-checks\" aria-hidden=\"true\"></i><bdi>0/0</bdi>\n            </span>\n            <span class=\"avatar avatar-xs flex-shrink-0 ms-auto\" role=\"img\" title=\"Ravisha V\" aria-label=\"Assigned to Ravisha V\" data-task-avatar=\"\">\n              <img src=\"/assets/images/avatar-user.png\" width=\"28\" height=\"28\" alt=\"\" data-task-avatar-img=\"\">\n              <span class=\"d-none\" data-task-avatar-initials=\"\"></span></span>\n          </div>\n        </li>" }}
      />
      {/* ===== Add / edit dialog — one form serves both ===== */}
      <div
        role="dialog"
        className="modal fade"
        id="taskFormModal"
        tabIndex="-1"
        aria-labelledby="taskFormLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-b-soft">
              <div className="min-w-0">
                <h2
                  className="modal-title fs-5 fw-bold text-title mb-1"
                  id="taskFormLabel"
                  data-task-out="dialog-title"
                  data-task-label-new="New task"
                  data-task-label-edit="Edit task"
                >
                  New task
                </h2>
                <p
                  className="fs-md text-body-2 mb-0"
                  data-task-out="dialog-sub"
                  data-task-label-new="Give it an owner and a date so it lands in the right column."
                  data-task-label-edit="Change the details, move it to another column, or hand it over."
                >
                  Give it an owner and a date so it lands in the right column.
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="taskFormTitle" className="form-label fs-md fw-semibold text-title">
                    Title
                  </label>
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    id="taskFormTitle"
                    name="title"
                    placeholder="What needs doing?"
                    maxLength="120"
                    required
                  />
                  {" "}
                  <div className="invalid-feedback">
                    Give the task a title.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="taskFormNotes" className="form-label fs-md fw-semibold text-title">
                    Description
                    {" "}
                    <span className="fw-normal text-muted-2">
                      (optional)
                    </span>
                  </label>
                  {" "}
                  <textarea
                    className="form-control rounded-4"
                    id="taskFormNotes"
                    name="notes"
                    rows="3"
                    placeholder="Context, links or the definition of done"
                  />
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-12 col-sm-6">
                    <label htmlFor="taskFormStatus" className="form-label fs-md fw-semibold text-title">
                      Status
                    </label>
                    {" "}
                    <select className="form-select" id="taskFormStatus" name="status">
                      <option value="todo">
                        To Do
                      </option>
                      <option value="progress">
                        In Progress
                      </option>
                      <option value="review">
                        In Review
                      </option>
                      <option value="done">
                        Done
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label htmlFor="taskFormPriority" className="form-label fs-md fw-semibold text-title">
                      Priority
                    </label>
                    <div className="d-flex align-items-center gap-2">
                      <span
                        className="legend-dot bg-cat-blue flex-shrink-0"
                        data-task-priority-dot=""
                        aria-hidden="true"
                      />
                      <select className="form-select" id="taskFormPriority" name="priority">
                        <option value="urgent">
                          Urgent
                        </option>
                        <option value="high">
                          High
                        </option>
                        <option value="medium">
                          Medium
                        </option>
                        <option value="low">
                          Low
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <label htmlFor="taskFormDue" className="form-label fs-md fw-semibold text-title">
                      Due date
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="taskFormDue" name="due" required />
                    {" "}
                    <div className="invalid-feedback">
                      Pick a due date.
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label htmlFor="taskFormProject" className="form-label fs-md fw-semibold text-title">
                      Project
                    </label>
                    {" "}
                    <select className="form-select" id="taskFormProject" name="project">
                      <option value="website">
                        Website Redesign
                      </option>
                      <option value="mobile">
                        Mobile App
                      </option>
                      <option value="design">
                        Design System
                      </option>
                      <option value="growth">
                        Growth Campaign
                      </option>
                      <option value="ops">
                        Platform Ops
                      </option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="taskFormAssignee" className="form-label fs-md fw-semibold text-title">
                      Assignee
                    </label>
                    {" "}
                    <select className="form-select" id="taskFormAssignee" name="assignee">
                      <option value="ravisha" data-task-avatar-src="/assets/images/avatar-user.png">
                        Ravisha V
                      </option>
                      <option value="meera" data-task-avatar-src="/assets/images/avatar-2.png">
                        Meera Iyer
                      </option>
                      <option value="aarav" data-task-avatar-src="/assets/images/avatar-1.png">
                        Aarav Shah
                      </option>
                      <option value="kabir" data-task-avatar-src="/assets/images/avatar-3.png">
                        Kabir Nair
                      </option>
                      <option value="priya" data-task-avatar-src="/assets/images/avatar-4.png">
                        Priya Nair
                      </option>
                      <option value="dev" data-task-initials="DS" data-task-tint="bg-grad-6">
                        Dev Sharma
                      </option>
                      <option value="nisha" data-task-initials="NB" data-task-tint="bg-grad-4">
                        Nisha Bose
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary d-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="check" aria-hidden="true" />
                  <span
                    data-task-out="dialog-submit"
                    data-task-label-new="Create task"
                    data-task-label-edit="Save changes"
                  >
                    Create task
                  </span>
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
