"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";

export type SectorPanel = {
  href: string;
  kicker: string;
  title: string;
  stat: string;
  image: string;
};

const ease = "ease-[cubic-bezier(0.16,1,0.3,1)]";

/**
 * Desktop: four photo panels side by side — hovering (or focusing) one
 * expands it, revealing the full photo and details, while the rest collapse
 * to labelled strips. Mobile: stacked photo cards.
 */
export function SectorPanels({ items }: { items: SectorPanel[] }) {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="hidden h-[clamp(480px,64vh,620px)] gap-3 lg:flex">
        {items.map((it, i) => {
          const on = active === i;
          return (
            <Link
              key={it.href}
              href={it.href}
              data-cursor="Explore"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={cn(
                "group relative min-w-0 basis-0 overflow-hidden rounded-[22px] bg-ink outline-offset-4 transition-[flex-grow] duration-700",
                ease,
              )}
              style={{ flexGrow: on ? 4.2 : 1 }}
            >
              <Image
                src={it.image}
                alt={it.kicker}
                fill
                sizes="(max-width: 1400px) 60vw, 820px"
                className={cn(
                  "object-cover transition-[transform,filter] duration-[1100ms]",
                  ease,
                  on ? "scale-100 grayscale-0" : "scale-110 grayscale",
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "absolute inset-0 transition-colors duration-700",
                  on
                    ? "bg-gradient-to-t from-ink/95 via-ink/35 to-transparent"
                    : "bg-ink/55",
                )}
              />

              {/* number — always visible */}
              <span className="absolute left-6 top-6 font-display text-sm font-medium text-cream/70">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* collapsed label */}
              <span
                className={cn(
                  "absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.16em] text-cream transition-opacity duration-300 [writing-mode:vertical-rl] rotate-180",
                  on ? "opacity-0" : "opacity-100 delay-200",
                )}
              >
                {it.kicker}
              </span>

              {/* expanded content */}
              <div
                className={cn(
                  "absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-8 text-cream transition-all duration-500",
                  on
                    ? "translate-y-0 opacity-100 delay-200"
                    : "pointer-events-none translate-y-6 opacity-0",
                )}
              >
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-soft">
                    {it.kicker}
                  </p>
                  <h3 className="mt-3 max-w-[18ch] font-display text-[clamp(1.7rem,2.6vw,2.5rem)] font-medium leading-[1.05]">
                    {it.title}
                  </h3>
                  <p className="mt-3 text-sm text-cream/70">{it.stat}</p>
                </div>
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red text-lg text-white transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* mobile / tablet */}
      <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
        {items.map((it, i) => (
          <Link
            key={it.href}
            href={it.href}
            className="group relative block overflow-hidden rounded-[20px] bg-ink"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={it.image}
                alt={it.kicker}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
              />
            </div>
            <span className="absolute left-5 top-5 font-display text-sm text-cream/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-soft">
                {it.kicker}
              </p>
              <h3 className="mt-2 font-display text-xl font-medium leading-tight">
                {it.title}
              </h3>
              <p className="mt-1.5 text-sm text-cream/70">{it.stat}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
