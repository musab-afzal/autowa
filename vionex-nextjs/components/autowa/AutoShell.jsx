import AppShell from "@/components/AppShell";
import Sidebar from "./Sidebar";
import Header from "./Header";

/* Every scripted AutoWA page loads the same theme layer. */
export const SHELL_SCRIPTS = [
  "/assets/js/jquery.min.js",
  "/assets/js/bootstrap.bundle.min.js",
  "/assets/js/lucide.min.js",
  "/assets/js/dashboard.js",
];

/* Pages with charts also load ApexCharts (before dashboard.js, like the theme). */
export const CHART_SCRIPTS = [...SHELL_SCRIPTS.slice(0, 3), "/assets/js/apexcharts.min.js", SHELL_SCRIPTS[3]];

function Footer() {
  return (
    <footer className="app-footer text-center fs-md text-muted-2 pt-3 mt-auto">
      © {new Date().getFullYear()} AutoWA. All rights reserved.
    </footer>
  );
}

/* The Vionex app shell with AutoWA's sidebar, header and footer.
   `nav` = key of the current page (sidebar highlight). */
export default function AutoShell({ user, nav, title, crumb, children, scripts = SHELL_SCRIPTS }) {
  return (
    <AppShell
      scripts={scripts}
      sidebar={<Sidebar user={user} nav={nav} />}
      header={<Header user={user} />}
      topnav={<></>}
      footer={<Footer />}
    >
      {title && (
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
          <h1 className="fs-4 fw-bold text-title mb-0">{title}</h1>
          <nav aria-label="breadcrumb" className="d-none d-md-block">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              {crumb && (
                <li className="breadcrumb-item active" aria-current="page">
                  {crumb}
                </li>
              )}
            </ol>
          </nav>
        </div>
      )}
      {children}
    </AppShell>
  );
}
