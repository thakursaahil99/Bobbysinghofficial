import Link from "next/link";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { CountUp } from "./fx/CountUp";
import { Magnetic } from "./fx/Magnetic";
import { cn } from "@/lib/cn";

export function ArrowLink({
  href,
  children,
  external,
  className,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  const cls = cn(
    "group inline-flex items-center gap-2 text-sm font-semibold text-ink",
    className,
  );
  const inner = (
    <>
      <span className="hoverline">{children}</span>
      <span
        aria-hidden
        className="text-red transition-transform duration-300 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Stat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <span className="rule-red mb-2" />
      <span className="font-display text-[clamp(2.35rem,4vw,3.4rem)] font-medium leading-none tracking-tight text-ink">
        <CountUp value={value} />
      </span>
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-2">
        {label}
      </span>
    </div>
  );
}

export function StatRow({
  items,
  className,
}: {
  items: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "grid gap-x-8 gap-y-10 border-y border-line py-12 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {items.map((it) => (
        <Stat key={it.label} value={it.value} label={it.label} />
      ))}
    </Reveal>
  );
}

export function CtaBlock({
  eyebrow,
  title,
  body,
  actions,
}: {
  eyebrow?: string;
  title: string;
  body?: React.ReactNode;
  actions: { label: string; href: string; variant?: "solid" | "ghost" }[];
}) {
  return (
    <section className="mt-28 px-gutter">
      <Container
        data-cursor-invert
        className="relative isolate overflow-hidden rounded-[28px] bg-ink px-8 py-16 text-paper sm:px-14 sm:py-24"
      >
        <div
          aria-hidden
          className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-red/30 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-forest-2/40 blur-3xl"
        />
        <Reveal className="flex flex-col gap-6">
          {eyebrow && (
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-red">
              <span className="rule-red" />
              {eyebrow}
            </p>
          )}
          <h2 className="display max-w-[16ch] text-[clamp(2rem,4.5vw,3.5rem)] text-paper">
            {title}
          </h2>
          {body && (
            <p className="measure text-lg leading-relaxed text-paper/75">
              {body}
            </p>
          )}
          <div className="mt-2 flex flex-wrap gap-3">
            {actions.map((a) => (
              <Magnetic key={a.href + a.label}>
                <Link
                  href={a.href}
                  data-cursor
                  className={cn(
                    "btn border-paper",
                    a.variant === "ghost"
                      ? "bg-transparent text-paper hover:bg-paper hover:text-ink"
                      : "bg-paper text-ink hover:bg-red hover:border-red hover:text-white",
                  )}
                >
                  {a.label}
                  {a.variant !== "ghost" && (
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>
              </Magnetic>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function ContactStrip({
  phones,
  email,
  site: siteUrl,
}: {
  phones: string[];
  email: string;
  site?: string;
}) {
  return (
    <Container className="mt-28">
      <div className="grid gap-8 border-y border-line py-14 [&>div]:min-w-0 sm:grid-cols-2 lg:grid-cols-[1fr_1.3fr_1fr]">
        <div>
          <p className="eyebrow">Phone</p>
          <div className="mt-3 space-y-1 font-display text-lg text-ink">
            {phones.map((p) => (
              <a
                key={p}
                href={`tel:${p.replace(/\s/g, "")}`}
                className="block hoverline"
              >
                {p}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Email</p>
          <a
            href={`mailto:${email}`}
            className="mt-3 block font-display text-lg [overflow-wrap:anywhere] text-ink hoverline"
          >
            {email}
          </a>
        </div>
        {siteUrl && (
          <div>
            <p className="eyebrow">Online</p>
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block font-display text-lg text-ink hoverline"
            >
              redbeanhospitality.com
            </a>
          </div>
        )}
      </div>
    </Container>
  );
}
