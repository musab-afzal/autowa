import ThemeHead from "@/components/ThemeHead";
import { siteMetadata } from "@/components/siteMetadata";

export const metadata = siteMetadata;

/* Root layout for the full-screen auth pages (login, register, lock screen...). */
export default function AuthLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="light" data-theme="cyan" suppressHydrationWarning>
      <ThemeHead />
      <body className="vh-100 h-dvh overflow-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
