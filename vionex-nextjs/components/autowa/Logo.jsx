/* AutoWA brand marks. The brand colour is fixed (#1CCBE5) so the logo looks
   the same in every colour theme and in light / dark mode. */

export const BRAND_COLOR = "#1CCBE5";

export function LogoMark({ size = 36, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* chat bubble */}
      <path
        fill={BRAND_COLOR}
        d="M18 2C9.16 2 2 8.72 2 17c0 3.02.96 5.83 2.6 8.18L2.5 33l8.2-2.3A16.9 16.9 0 0 0 18 32c8.84 0 16-6.72 16-15S26.84 2 18 2Z"
      />
      {/* bolt = automation */}
      <path fill="#FFFFFF" d="M19.6 7.5 11.5 18.6h5.6l-1.9 9.9 8.9-12.3h-5.9l1.4-8.7Z" />
    </svg>
  );
}

export function Wordmark({ className = "" }) {
  return (
    <span className={`d-inline-flex align-items-center gap-2 fw-bold fs-4 lh-1 ${className}`}>
      <LogoMark size={28} />
      <span style={{ color: BRAND_COLOR }}>AutoWA</span>
    </span>
  );
}
