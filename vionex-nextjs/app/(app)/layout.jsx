import ThemeHead from "@/components/ThemeHead";
import { siteMetadata } from "@/components/siteMetadata";

export const metadata = siteMetadata;

/* Root layout for every dashboard page (sidebar + header shell). */
export default function AppLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="light" data-theme="cyan" suppressHydrationWarning>
      <ThemeHead />
      <body className="app-shell vh-100 overflow-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
