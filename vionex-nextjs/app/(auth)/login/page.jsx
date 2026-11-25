import { redirect } from "next/navigation";
import VendorScripts from "@/components/VendorScripts";
import LoginForm from "@/components/autowa/LoginForm";
import { Wordmark } from "@/components/autowa/Logo";
import { getCurrentUser } from "@/lib/auth";

export const metadata = {
  title: "AutoWA — Sign In",
  description: "Sign in to AutoWA, your WhatsApp automation workspace.",
};

const scripts = [
  "/assets/js/jquery.min.js",
  "/assets/js/bootstrap.bundle.min.js",
  "/assets/js/lucide.min.js",
  "/assets/js/dashboard.js",
];

const FEATURES = [
  { icon: "qr-code", title: "Link WhatsApp in seconds", text: "Scan a QR code from your phone and your number is ready to use." },
  { icon: "list-ordered", title: "Number generator", text: "Build sequential number lists and download them as a text file." },
  { icon: "shield-check", title: "Your own private workspace", text: "Each account sees only its own WhatsApp numbers and data." },
];

export default async function Page() {
  if (await getCurrentUser()) redirect("/");

  return (
    <>
      <div className="row g-0 h-100">
        {/* ========== FORM COLUMN ========== */}
        <main
          className="col-12 col-lg-6 col-xxl-5 order-lg-last d-flex flex-column h-100 overflow-y-auto scrollbar-thin p-3 p-sm-4 p-xl-5"
          id="main-content"
        >
          <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
            <a href="/login" className="d-lg-none text-decoration-none" aria-label="AutoWA">
              <Wordmark />
            </a>
            <button
              type="button"
              className="icon-btn transition-base ms-auto"
              data-action="toggle-mode"
              aria-label="Toggle light and dark mode"
              title="Toggle light and dark mode"
            >
              <i data-lucide="moon" data-mode-icon="" />
            </button>
          </div>

          <div className="measure-sm w-100 mx-auto my-auto py-4">
            <h1 className="fs-2 fw-bold text-title mb-2">Welcome back</h1>
            <p className="fs-lg text-body-2 mb-4">
              Sign in to AutoWA to manage your WhatsApp numbers and tools.
            </p>
            <LoginForm />
            <p className="fs-md text-body-2 text-center mt-4 mb-0">
              Need an account? Contact your AutoWA administrator.
            </p>
          </div>

          <p className="fs-sm text-muted-2 text-center mb-0">© {new Date().getFullYear()} AutoWA</p>
        </main>

        {/* ========== BRAND PANEL ========== */}
        <aside className="col-lg-6 col-xxl-7 order-lg-first on-dark bg-grad-theme panel-aura position-relative d-none d-lg-flex flex-column justify-content-between h-100 overflow-y-auto scrollbar-none gap-4 p-4 p-xl-5">
          <a href="/login" className="position-relative text-decoration-none" aria-label="AutoWA">
            <Wordmark className="fs-3" />
          </a>
          <div className="position-relative measure-lg">
            <span className="badge-soft bg-white bg-opacity-25 border-glass text-title d-inline-flex align-items-center gap-2 mb-3">
              <i className="icon-14" data-lucide="sparkles" aria-hidden="true" />
              WhatsApp automation, in one place
            </span>
            <h2 className="display-6 fw-bold text-title mb-3">Everything you do on WhatsApp, on one screen.</h2>
            <p className="fs-lg text-primary mb-4">
              Connect your number, prepare your contact lists and keep your workspace organised — AutoWA does the
              heavy lifting so you can focus on your customers.
            </p>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              {FEATURES.map((f) => (
                <li key={f.title} className="d-flex align-items-start gap-3">
                  <span className="icon-box bg-white bg-opacity-25 flex-shrink-0" aria-hidden="true">
                    <i data-lucide={f.icon} />
                  </span>
                  <span>
                    <span className="d-block fw-semibold text-title">{f.title}</span>
                    <span className="d-block fs-md text-primary">{f.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="position-relative fs-md text-primary mb-0">Secure sign-in · Private workspaces</p>
        </aside>
      </div>
      <VendorScripts scripts={scripts} />
    </>
  );
}
