import Sidebar from "@/components/shell/Sidebar";
import Header from "@/components/shell/Header";
import TopNav from "@/components/shell/TopNav";
import Footer from "@/components/shell/Footer";
import Customizer from "@/components/shell/Customizer";
import VendorScripts from "@/components/VendorScripts";

/* The dashboard chrome shared by every app page.
   Each piece can be overridden per page (a few original pages ship a slightly
   different header/sidebar); `after` holds page-level modals/offcanvases that
   live outside <main> in the original markup. */
export default function AppShell({
  children,
  scripts,
  navPage,
  sidebar,
  header,
  topnav,
  footer,
  customizer,
  after,
}) {
  return (
    <>
      {sidebar ?? <Sidebar />}
      <div className="app-main d-flex flex-column">
        {header ?? <Header />}
        {topnav ?? <TopNav />}
        <main
          className="app-content flex-fill overflow-y-auto scrollbar-thin d-flex flex-column"
          id="main-content"
          tabIndex="-1"
        >
          {children}
          {footer ?? <Footer />}
        </main>
      </div>
      {customizer ?? <Customizer />}
      {after}
      <VendorScripts scripts={scripts} navPage={navPage} />
    </>
  );
}
