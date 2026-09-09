import { cn } from "@/lib/cn";

/** Simple 24×24 line icons, stroke = currentColor. */
const paths: Record<string, React.ReactNode> = {
  mentor: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
    </>
  ),
  cup: (
    <>
      <path d="M4 8h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M16 9h2.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M7 3.5v1.5M11 3v2" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V5l7-2 7 2v16" />
      <path d="M3 21h18" />
      <path d="M9 9h0M9 13h0M15 9h0M15 13h0M10.5 21v-3h3v3" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 10v4a1 1 0 0 0 1 1h2l8 4V5L7 9H5a1 1 0 0 0-1 1Z" />
      <path d="M18 8a4 4 0 0 1 0 8" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h9M17 12v4M20 12v3" />
    </>
  ),
  expand: (
    <>
      <path d="M4 9V4h5M20 15v5h-5M20 9V4h-5M4 15v5h5" />
    </>
  ),
  truck: (
    <>
      <path d="M2 7h11v9H2zM13 10h4l3 3v3h-7" />
      <circle cx="6" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  handshake: (
    <>
      <path d="m3 12 3-3 5 4 2-1 3 2 3-3" />
      <path d="M3 12v4h3M21 10v6h-3M11 13l1.5 1.5a1.5 1.5 0 0 0 2-2" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="9" cy="7" rx="5" ry="2.5" />
      <path d="M4 7v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V7" />
      <path d="M10 15.5c.7 1.2 2.6 2 5 2 2.8 0 5-1.1 5-2.5v-5" />
      <path d="M14 10.2c2.7-.1 5-1.1 6-2.4" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3c3 1.5 5 5 5 9l-3 3h-4l-3-3c0-4 2-7.5 5-9Z" />
      <circle cx="12" cy="10" r="1.6" />
      <path d="M9 17c-1.5.5-2.5 2-2.5 4 2 0 3.5-1 4-2.5M15 17c1.5.5 2.5 2 2.5 4-2 0-3.5-1-4-2.5" />
    </>
  ),
  utensils: (
    <>
      <path d="M7 3v8M5 3v8M9 3v8M7 11v10" />
      <path d="M16 3c-1.7 0-3 2-3 5s1.3 4 3 4v9" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.5 6a4 4 0 0 0-5.2 5.2l-5 5L6 19l5-5A4 4 0 0 0 16.2 9" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m9 13-2 8 5-3 5 3-2-8" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.3-9-8.5C1.5 8 3.5 4.5 7 4.5c2 0 3.5 1.2 5 3 1.5-1.8 3-3 5-3 3.5 0 5.5 3.5 4 7-2 4.2-9 8.5-9 8.5Z" />
  ),
  cap: (
    <>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" />
      <path d="M6 11v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5M22 9v5" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V10l6 4V10l6 4V6l6 3v12H3Z" />
      <path d="M7 21v-4M12 21v-4M17 21v-4" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M16 6.5a3 3 0 0 1 0 5.5M21 20c0-2.6-1.4-4.5-3.5-5.2" />
    </>
  ),
};

export function Icon({
  name,
  className,
}: {
  name: keyof typeof paths | string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", className)}
      aria-hidden
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}
