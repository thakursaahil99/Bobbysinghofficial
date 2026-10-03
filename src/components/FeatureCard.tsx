import Link from "next/link";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

const chipTone = [
  "bg-red text-white",
  "bg-forest text-cream",
  "bg-gold text-white",
  "bg-plum text-white",
];

const dotTone = ["bg-red", "bg-forest", "bg-gold", "bg-plum"];

const listTone = [
  { chip: "bg-red text-white", fg: "text-red" },
  { chip: "bg-forest text-cream", fg: "text-forest" },
  { chip: "bg-gold text-white", fg: "text-gold" },
  { chip: "bg-plum text-white", fg: "text-plum" },
];

/** Icon/number tile + title + body, in a lifting card. */
export function FeatureCard({
  i = 0,
  icon,
  badge,
  title,
  body,
  className,
}: {
  i?: number;
  icon?: string;
  badge?: string;
  title: string;
  body?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("card lift flex h-full gap-4 p-6", className)}>
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-sm font-semibold",
          chipTone[i % chipTone.length],
        )}
      >
        {icon ? <Icon name={icon} className="h-5 w-5" /> : badge}
      </span>
      <div>
        <h3 className="text-base text-ink">{title}</h3>
        {body && (
          <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{body}</p>
        )}
      </div>
    </div>
  );
}

/** Wrapping pill list with a small cycling colour dot per item. */
export function ChipList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2.5", className)}>
      {items.map((it, i) => (
        <li
          key={it}
          className="flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm text-ink-2"
        >
          <span
            className={cn(
              "h-1.5 w-1.5 shrink-0 rounded-full",
              dotTone[i % dotTone.length],
            )}
          />
          {it}
        </li>
      ))}
    </ul>
  );
}

/**
 * Editorial numbered list — ghost number, colour icon chip, large title,
 * one-line body, optional arrow link. The homepage "services" pattern,
 * reusable across pages instead of boxed card grids.
 */
export function FeatureList({
  items,
  className,
}: {
  items: {
    icon?: string;
    title: string;
    body?: React.ReactNode;
    href?: string;
  }[];
  className?: string;
}) {
  return (
    <ol className={cn("border-t border-line", className)}>
      {items.map((it, i) => {
        const t = listTone[i % listTone.length];
        const linked = !!it.href;
        const row = cn(
          "group grid items-start gap-4 border-b border-line py-6 sm:gap-7 sm:py-8",
          linked
            ? "grid-cols-[auto_1fr_auto] transition-colors duration-300 hover:bg-paper-2/70"
            : "grid-cols-[auto_1fr]",
        );
        const inner = (
          <>
            <span
              className={cn(
                "font-display text-[clamp(1.4rem,3.4vw,2.5rem)] font-medium tabular-nums leading-none opacity-35 transition-opacity duration-300",
                linked && "group-hover:opacity-100",
                t.fg,
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h3
                className={cn(
                  "flex items-center gap-3 text-[clamp(1.15rem,2.2vw,1.6rem)] text-ink",
                  linked &&
                    "transition-transform duration-300 group-hover:translate-x-1",
                )}
              >
                {it.icon && (
                  <span
                    className={cn(
                      "hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:flex",
                      t.chip,
                    )}
                  >
                    <Icon name={it.icon} className="h-4 w-4" />
                  </span>
                )}
                {it.title}
              </h3>
              {it.body && (
                <div className="mt-2 max-w-xl text-sm leading-relaxed text-ink-2 sm:text-base">
                  {it.body}
                </div>
              )}
            </div>
            {linked && (
              <span
                aria-hidden
                className={cn(
                  "pt-1 text-xl transition-transform duration-300 group-hover:translate-x-1.5",
                  t.fg,
                )}
              >
                &rarr;
              </span>
            )}
          </>
        );
        return (
          <Reveal as="li" key={it.title} delay={(i % 4) * 60}>
            {linked ? (
              <Link href={it.href!} data-cursor className={row}>
                {inner}
              </Link>
            ) : (
              <div className={row}>{inner}</div>
            )}
          </Reveal>
        );
      })}
    </ol>
  );
}

/** Grid of FeatureCards from a list, with staggered reveal. */
export function FeatureGrid({
  items,
  className,
}: {
  items: { icon?: string; badge?: string; title: string; body?: React.ReactNode }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((it, i) => (
        <Reveal key={it.title} delay={(i % 3) * 60}>
          <FeatureCard
            i={i}
            icon={it.icon}
            badge={it.badge}
            title={it.title}
            body={it.body}
          />
        </Reveal>
      ))}
    </div>
  );
}
