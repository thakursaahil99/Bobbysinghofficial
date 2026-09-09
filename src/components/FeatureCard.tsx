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
