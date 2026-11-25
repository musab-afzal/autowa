/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Calendar",
  description: "Vionex calendar app — month, week, day and agenda views with drag-and-drop scheduling, built with Bootstrap 5, FullCalendar and a scalable design system.",
};

const scripts = [
    "/assets/js/jquery.min.js",
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/lucide.min.js",
    "/assets/js/apexcharts.min.js",
    "/assets/js/fullcalendar.min.js",
    "/assets/js/dashboard.js",
    "/assets/js/charts.js",
    "/assets/js/calendar.js",
  ];

export default function Page() {
  return (
    <AppShell
      scripts={scripts}
    >
      {/* ===== Page header ===== */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="fs-4 fw-bold text-title mb-0">
          Calendar
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
              Calendar
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Calendar workspace ===== */}
      <section className="app-workspace d-flex flex-fill gap-3" aria-label="Calendar" data-cal-scope="">
        {/* ========== Pane 1 — navigator (drawer under xl) ========== */}
        <section
          className="offcanvas-xl offcanvas-start app-pane d-flex flex-column"
          tabIndex="-1"
          id="calendarSidePane"
          aria-labelledby="calendarSideTitle"
        >
          <div className="offcanvas-body d-flex flex-fill min-h-0 p-3 p-xl-0 overflow-hidden">
            <div className="card flex-fill min-w-0 mb-0 overflow-hidden">
              <div className="p-3 border-b-soft flex-shrink-0">
                <h2 id="calendarSideTitle" className="visually-hidden">
                  Calendar navigation
                </h2>
                <div className="d-flex align-items-center gap-1 mb-2">
                  <span className="fs-6 fw-bold text-title me-auto" data-cal-mini-title="">
                    —
                  </span>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm px-2 py-1"
                    data-cal-mini-nav="prev"
                    aria-label="Previous month"
                  >
                    <i className="icon-16 flip-rtl" data-lucide="chevron-left" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm px-2 py-1"
                    data-cal-mini-nav="next"
                    aria-label="Next month"
                  >
                    <i className="icon-16 flip-rtl" data-lucide="chevron-right" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0 ms-1 d-xl-none"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#calendarSidePane"
                    aria-label="Close the navigator"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </div>
                <div className="calendar-surface calendar-mini" data-cal-mini="" />
              </div>
              <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin p-3">
                <h3 className="fs-md fw-semibold text-uppercase text-muted-2 mb-2">
                  Categories
                </h3>
                <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
                  <li>
                    <div className="form-check d-flex align-items-center gap-2 ps-2 p-2 rounded-3 tile-soft">
                      <span className="legend-dot bg-cat-violet flex-shrink-0" aria-hidden="true" />
                      {" "}
                      <label className="form-check-label flex-grow-1 min-w-0 fs-md text-truncate" htmlFor="calCatWork">
                        Work
                      </label>
                      {" "}
                      <span className="fs-xs text-muted-2 flex-shrink-0" data-cal-cat-count="work">
                        <bdi>
                          0
                        </bdi>
                      </span>
                      {" "}
                      <input
                        className="form-check-input flex-shrink-0 ms-0 mt-0"
                        type="checkbox"
                        id="calCatWork"
                        data-cal-category="work"
                        defaultChecked
                      />
                    </div>
                  </li>
                  <li>
                    <div className="form-check d-flex align-items-center gap-2 ps-2 p-2 rounded-3 tile-soft">
                      <span className="legend-dot bg-cat-blue flex-shrink-0" aria-hidden="true" />
                      {" "}
                      <label
                        className="form-check-label flex-grow-1 min-w-0 fs-md text-truncate"
                        htmlFor="calCatMeeting"
                      >
                        Meetings
                      </label>
                      {" "}
                      <span className="fs-xs text-muted-2 flex-shrink-0" data-cal-cat-count="meeting">
                        <bdi>
                          0
                        </bdi>
                      </span>
                      {" "}
                      <input
                        className="form-check-input flex-shrink-0 ms-0 mt-0"
                        type="checkbox"
                        id="calCatMeeting"
                        data-cal-category="meeting"
                        defaultChecked
                      />
                    </div>
                  </li>
                  <li>
                    <div className="form-check d-flex align-items-center gap-2 ps-2 p-2 rounded-3 tile-soft">
                      <span className="legend-dot bg-cat-emerald flex-shrink-0" aria-hidden="true" />
                      {" "}
                      <label
                        className="form-check-label flex-grow-1 min-w-0 fs-md text-truncate"
                        htmlFor="calCatPersonal"
                      >
                        Personal
                      </label>
                      {" "}
                      <span className="fs-xs text-muted-2 flex-shrink-0" data-cal-cat-count="personal">
                        <bdi>
                          0
                        </bdi>
                      </span>
                      {" "}
                      <input
                        className="form-check-input flex-shrink-0 ms-0 mt-0"
                        type="checkbox"
                        id="calCatPersonal"
                        data-cal-category="personal"
                        defaultChecked
                      />
                    </div>
                  </li>
                  <li>
                    <div className="form-check d-flex align-items-center gap-2 ps-2 p-2 rounded-3 tile-soft">
                      <span className="legend-dot bg-cat-rose flex-shrink-0" aria-hidden="true" />
                      {" "}
                      <label
                        className="form-check-label flex-grow-1 min-w-0 fs-md text-truncate"
                        htmlFor="calCatDeadline"
                      >
                        Deadlines
                      </label>
                      {" "}
                      <span className="fs-xs text-muted-2 flex-shrink-0" data-cal-cat-count="deadline">
                        <bdi>
                          0
                        </bdi>
                      </span>
                      {" "}
                      <input
                        className="form-check-input flex-shrink-0 ms-0 mt-0"
                        type="checkbox"
                        id="calCatDeadline"
                        data-cal-category="deadline"
                        defaultChecked
                      />
                    </div>
                  </li>
                  <li>
                    <div className="form-check d-flex align-items-center gap-2 ps-2 p-2 rounded-3 tile-soft">
                      <span className="legend-dot bg-cat-amber flex-shrink-0" aria-hidden="true" />
                      {" "}
                      <label
                        className="form-check-label flex-grow-1 min-w-0 fs-md text-truncate"
                        htmlFor="calCatTravel"
                      >
                        Travel
                      </label>
                      {" "}
                      <span className="fs-xs text-muted-2 flex-shrink-0" data-cal-cat-count="travel">
                        <bdi>
                          0
                        </bdi>
                      </span>
                      {" "}
                      <input
                        className="form-check-input flex-shrink-0 ms-0 mt-0"
                        type="checkbox"
                        id="calCatTravel"
                        data-cal-category="travel"
                        defaultChecked
                      />
                    </div>
                  </li>
                  <li>
                    <div className="form-check d-flex align-items-center gap-2 ps-2 p-2 rounded-3 tile-soft">
                      <span className="legend-dot bg-cat-cyan flex-shrink-0" aria-hidden="true" />
                      {" "}
                      <label
                        className="form-check-label flex-grow-1 min-w-0 fs-md text-truncate"
                        htmlFor="calCatHoliday"
                      >
                        Holidays
                      </label>
                      {" "}
                      <span className="fs-xs text-muted-2 flex-shrink-0" data-cal-cat-count="holiday">
                        <bdi>
                          0
                        </bdi>
                      </span>
                      {" "}
                      <input
                        className="form-check-input flex-shrink-0 ms-0 mt-0"
                        type="checkbox"
                        id="calCatHoliday"
                        data-cal-category="holiday"
                        defaultChecked
                      />
                    </div>
                  </li>
                </ul>
                <p className="fs-xs text-muted-2 mt-3 mb-0">
                  Drag an event to move it, or drag its edge to change how long it runs.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ========== Pane 2 — the calendar ========== */}
        <section className="card flex-fill min-w-0 mb-0 overflow-hidden" aria-labelledby="calendarTitle">
          <div className="d-flex flex-wrap align-items-center gap-2 p-3 border-b-soft flex-shrink-0">
            <button
              type="button"
              className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0 d-xl-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#calendarSidePane"
              aria-controls="calendarSidePane"
              aria-label="Show the calendar navigator"
            >
              <i data-lucide="menu" aria-hidden="true" />
            </button>
            <div className="d-flex align-items-center gap-1 flex-shrink-0">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                data-cal-nav="prev"
                aria-label="Previous period"
              >
                <i className="flip-rtl" data-lucide="chevron-left" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                data-cal-nav="next"
                aria-label="Next period"
              >
                <i className="flip-rtl" data-lucide="chevron-right" aria-hidden="true" />
              </button>
              <button type="button" className="btn btn-outline-soft btn-sm ms-1" data-cal-nav="today">
                Today
              </button>
            </div>
            <h2
              id="calendarTitle"
              className="fs-5 fw-bold text-title text-truncate min-w-0 mb-0 me-auto"
              data-cal-title=""
              aria-live="polite"
            >
              Calendar
            </h2>
            <div
              className="nav nav-pills seg-toggle d-inline-flex flex-nowrap min-w-0 gap-1 p-1 rounded-pill bg-soft overflow-x-auto scrollbar-none"
              role="group"
              aria-label="Calendar view"
            >
              <button
                type="button"
                className="nav-link active fw-semibold"
                data-cal-view="dayGridMonth"
                aria-pressed="true"
              >
                Month
              </button>
              <button type="button" className="nav-link fw-semibold" data-cal-view="timeGridWeek" aria-pressed="false">
                Week
              </button>
              <button type="button" className="nav-link fw-semibold" data-cal-view="timeGridDay" aria-pressed="false">
                Day
              </button>
              <button type="button" className="nav-link fw-semibold" data-cal-view="listMonth" aria-pressed="false">
                List
              </button>
            </div>
            <button
              type="button"
              className="btn btn-primary d-flex align-items-center gap-2 flex-shrink-0"
              data-cal-new=""
            >
              <i className="icon-18" data-lucide="plus" aria-hidden="true" />
              New event
            </button>
          </div>
          <div className="calendar-surface flex-fill min-h-0 p-2 p-md-3" data-cal-mount="" />
        </section>
      </section>
      {/* ===== The diary =====
         Every event the calendar opens with is written here, one item each.
         calendar.js reads this list and hands it to FullCalendar; nothing
         about the diary lives in script. The list is hidden because the
         calendar above IS its presentation, and each day is given as an
         OFFSET from the Monday of the week the page is opened in, so the
         month on screen is always populated. */}
      <ul className="d-none" data-cal-events="" aria-hidden="true">
        <li
          data-cal-title="Team standup"
          data-cal-day="0"
          data-cal-category="meeting"
          data-cal-from="09:30"
          data-cal-to="10:00"
          data-cal-location="Huddle room"
        />
        <li
          data-cal-title="Design review — tokens v4"
          data-cal-day="0"
          data-cal-category="work"
          data-cal-from="11:00"
          data-cal-to="12:00"
          data-cal-location="Studio"
          data-cal-note="Walk through the rebuilt colour tokens and sign off dark-mode contrast."
        />
        <li
          data-cal-title="1:1 with Aarav"
          data-cal-day="0"
          data-cal-category="meeting"
          data-cal-from="15:00"
          data-cal-to="15:30"
          data-cal-location="Room 4"
        />
        <li
          data-cal-title="Sprint planning"
          data-cal-day="1"
          data-cal-category="work"
          data-cal-from="10:00"
          data-cal-to="11:30"
          data-cal-location="Room 2"
          data-cal-note="Scope the release and give the two open decisions an owner."
        />
        <li
          data-cal-title="Client call — Northwind"
          data-cal-day="1"
          data-cal-category="meeting"
          data-cal-from="16:00"
          data-cal-to="17:00"
          data-cal-location="Video"
        />
        <li
          data-cal-title="Team standup"
          data-cal-day="2"
          data-cal-category="meeting"
          data-cal-from="09:30"
          data-cal-to="10:00"
          data-cal-location="Huddle room"
        />
        <li
          data-cal-title="Platform migration window"
          data-cal-day="2"
          data-cal-category="work"
          data-cal-from="22:00"
          data-cal-to="02:00"
          data-cal-to-day="3"
          data-cal-location="Remote"
          data-cal-note="Cutover with the index rebuild running in parallel."
        />
        <li
          data-cal-title="Q4 roadmap review"
          data-cal-day="3"
          data-cal-category="work"
          data-cal-from="14:00"
          data-cal-to="15:30"
          data-cal-location="Room 1"
        />
        <li
          data-cal-title="Dentist"
          data-cal-day="3"
          data-cal-category="personal"
          data-cal-from="18:15"
          data-cal-to="19:00"
          data-cal-location="Kothrud"
        />
        <li
          data-cal-title="Team standup"
          data-cal-day="4"
          data-cal-category="meeting"
          data-cal-from="09:30"
          data-cal-to="10:00"
          data-cal-location="Huddle room"
        />
        <li
          data-cal-title="Token freeze"
          data-cal-day="4"
          data-cal-category="deadline"
          data-cal-all-day=""
          data-cal-note="Anything not merged by end of day rides the next release."
        />
        <li
          data-cal-title="Sprint retro"
          data-cal-day="4"
          data-cal-category="work"
          data-cal-from="16:30"
          data-cal-to="17:15"
          data-cal-location="Room 2"
        />
        <li
          data-cal-title="Weekend away"
          data-cal-day="5"
          data-cal-category="personal"
          data-cal-all-day=""
          data-cal-end-day="7"
        />
        <li
          data-cal-title="Design Systems Conf"
          data-cal-day="8"
          data-cal-category="travel"
          data-cal-all-day=""
          data-cal-end-day="11"
          data-cal-location="Bengaluru"
          data-cal-note="Three days of talks; the tokens session is on the second morning."
        />
        <li
          data-cal-title="Flight BLR — PNQ"
          data-cal-day="10"
          data-cal-category="travel"
          data-cal-from="19:40"
          data-cal-to="21:15"
          data-cal-location="Terminal 1"
        />
        <li data-cal-title="Invoice run" data-cal-day="12" data-cal-category="deadline" data-cal-all-day="" />
        <li
          data-cal-title="Interview — platform engineer"
          data-cal-day="12"
          data-cal-category="meeting"
          data-cal-from="11:00"
          data-cal-to="12:00"
          data-cal-location="Room 4"
        />
        <li
          data-cal-title="Release 4.2"
          data-cal-day="13"
          data-cal-category="work"
          data-cal-from="15:00"
          data-cal-to="16:00"
          data-cal-location="Remote"
        />
        <li data-cal-title="Company holiday" data-cal-day="18" data-cal-category="holiday" data-cal-all-day="" />
        <li
          data-cal-title="Offsite planning workshop"
          data-cal-day="-3"
          data-cal-category="work"
          data-cal-from="13:00"
          data-cal-to="16:00"
          data-cal-location="Room 1"
        />
        <li
          data-cal-title="Quarterly review"
          data-cal-day="-5"
          data-cal-category="work"
          data-cal-from="10:00"
          data-cal-to="12:00"
          data-cal-location="Board room"
        />
      </ul>
      {/* What the list and day views show when a range holds nothing. */}
      <template
        data-cal-empty=""
        dangerouslySetInnerHTML={{ __html: "<div class=\"text-center px-3 py-5\">\n          <span class=\"notif-empty-icon\" aria-hidden=\"true\"><i data-lucide=\"calendar-off\"></i></span>\n          <p class=\"fw-semibold text-title mt-2 mb-1\">Nothing scheduled</p>\n          <p class=\"fs-md text-body-2 mb-0\">Pick a slot in the month or week view to add the first event.</p>\n        </div>" }}
      />
      {/* ===== Event dialog — details and the add/edit form share it ===== */}
      <div
        role="dialog"
        className="modal fade"
        id="calendarEventModal"
        tabIndex="-1"
        aria-labelledby="calendarEventLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-b-soft">
              <div className="min-w-0">
                <h2
                  className="modal-title fs-5 fw-bold text-title mb-1"
                  id="calendarEventLabel"
                  data-cal-dialog-title=""
                  data-cal-label-view="Event details"
                  data-cal-label-edit="Edit event"
                  data-cal-label-new="New event"
                >
                  New event
                </h2>
                <p
                  className="fs-md text-body-2 mb-0"
                  data-cal-dialog-sub=""
                  data-cal-label-view="Move it in the calendar, change the details, or take it off."
                  data-cal-label-edit="Change any of the details and save."
                  data-cal-label-new="Block out the time and give it a category."
                >
                  Block out the time and give it a category.
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            {/* ===== Details ===== */}
            <div className="d-none" data-cal-panel="view">
              <div className="modal-body">
                <div className="d-flex align-items-start gap-3 mb-4">
                  <span className="icon-box icon-box-lg tint-primary flex-shrink-0" aria-hidden="true">
                    <i data-lucide="calendar-days" />
                  </span>
                  <div className="min-w-0">
                    <p className="fs-5 fw-bold text-title mb-1" data-cal-out="title">
                      Event
                    </p>
                    <span className="badge-soft" data-cal-out="category">
                      Work
                    </span>
                  </div>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  <li className="d-flex align-items-start gap-2">
                    <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                      <i data-lucide="clock" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        When
                      </span>
                      {" "}
                      <span className="d-block fs-md text-body-2">
                        <bdi data-cal-out="when">
                          —
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2 d-none" data-cal-row="location">
                    <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                      <i data-lucide="map-pin" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        Where
                      </span>
                      {" "}
                      <span className="d-block fs-md text-body-2" data-cal-out="location">
                        —
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2 d-none" data-cal-row="description">
                    <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                      <i data-lucide="align-left" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        Notes
                      </span>
                      {" "}
                      <span className="d-block fs-md text-body-2" data-cal-out="description">
                        —
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="modal-footer border-t-soft justify-content-between">
                <button
                  type="button"
                  className="btn btn-outline-soft hover-danger d-flex align-items-center gap-2"
                  data-cal-delete=""
                >
                  <i className="icon-16" data-lucide="trash-2" aria-hidden="true" />
                  {" "}
                  <span data-cal-delete-label="">
                    Delete
                  </span>
                  {" "}
                  <span className="d-none" data-cal-delete-confirm="">
                    Press again to delete
                  </span>
                </button>
                <div className="d-flex align-items-center gap-2">
                  <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" className="btn btn-primary d-flex align-items-center gap-2" data-cal-edit="">
                    <i className="icon-18" data-lucide="pencil" aria-hidden="true" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
            {/* ===== Add / edit form ===== */}
            <form className="d-none" data-cal-panel="edit" data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="calEventTitle" className="form-label fs-md fw-semibold text-title">
                    Title
                  </label>
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    id="calEventTitle"
                    name="title"
                    placeholder="What is happening?"
                    required
                  />
                  {" "}
                  <div className="invalid-feedback">
                    Give the event a title.
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-12 col-sm-6">
                    <label htmlFor="calEventCategory" className="form-label fs-md fw-semibold text-title">
                      Category
                    </label>
                    <div className="d-flex align-items-center gap-2">
                      <span className="legend-dot bg-cat-violet flex-shrink-0" data-cal-cat-dot="" aria-hidden="true" />
                      <select className="form-select" id="calEventCategory" name="category">
                        <option value="work">
                          Work
                        </option>
                        <option value="meeting">
                          Meeting
                        </option>
                        <option value="personal">
                          Personal
                        </option>
                        <option value="deadline">
                          Deadline
                        </option>
                        <option value="travel">
                          Travel
                        </option>
                        <option value="holiday">
                          Holiday
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 d-flex align-items-end">
                    <div className="form-check form-switch d-flex align-items-center justify-content-between gap-2 ps-0 w-100 pb-2 mb-0">
                      <label className="form-check-label fs-md text-body-2 order-0" htmlFor="calEventAllDay">
                        All-day event
                      </label>
                      {" "}
                      <input
                        className="form-check-input order-1 ms-0 mt-0 flex-shrink-0"
                        type="checkbox"
                        role="switch"
                        id="calEventAllDay"
                        name="allday"
                      />
                    </div>
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-12 col-sm-6">
                    <label htmlFor="calEventStartDate" className="form-label fs-md fw-semibold text-title">
                      Starts
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="calEventStartDate" name="start-date" required />
                    {" "}
                    <div className="invalid-feedback">
                      Pick a start date.
                    </div>
                  </div>
                  <div className="col-12 col-sm-6" data-cal-time-field="">
                    <label htmlFor="calEventStartTime" className="form-label fs-md fw-semibold text-title">
                      Start time
                    </label>
                    {" "}
                    <input type="time" className="form-control" id="calEventStartTime" name="start-time" required />
                    {" "}
                    <div className="invalid-feedback">
                      Pick a start time.
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label htmlFor="calEventEndDate" className="form-label fs-md fw-semibold text-title">
                      Ends
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="calEventEndDate" name="end-date" required />
                    {" "}
                    <div className="invalid-feedback">
                      The event has to end after it starts.
                    </div>
                  </div>
                  <div className="col-12 col-sm-6" data-cal-time-field="">
                    <label htmlFor="calEventEndTime" className="form-label fs-md fw-semibold text-title">
                      End time
                    </label>
                    {" "}
                    <input type="time" className="form-control" id="calEventEndTime" name="end-time" />
                    {" "}
                    <div className="invalid-feedback">
                      The event has to end after it starts.
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="calEventLocation" className="form-label fs-md fw-semibold text-title">
                    Location
                    {" "}
                    <span className="fw-normal text-muted-2">
                      (optional)
                    </span>
                  </label>
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    id="calEventLocation"
                    name="location"
                    placeholder="Room, address or a call link"
                  />
                </div>
                <div>
                  <label htmlFor="calEventNotes" className="form-label fs-md fw-semibold text-title">
                    Notes
                    {" "}
                    <span className="fw-normal text-muted-2">
                      (optional)
                    </span>
                  </label>
                  {" "}
                  <textarea
                    className="form-control rounded-4"
                    id="calEventNotes"
                    name="notes"
                    rows="3"
                    placeholder="Agenda, links or anything worth remembering"
                  />
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary d-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="check" aria-hidden="true" />
                  <span data-cal-save-label="" data-cal-label-edit="Save changes" data-cal-label-new="Create event">
                    Create event
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
