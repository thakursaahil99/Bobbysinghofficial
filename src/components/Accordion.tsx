"use client";

import { useState } from "react";

export function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-baseline justify-between gap-6 py-6 text-left"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-display text-lg text-mute">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg">{it.q}</span>
              </span>
              <span
                aria-hidden
                className="shrink-0 text-xl leading-none text-red"
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div
              className="grid transition-all duration-300"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <p className="max-w-[62ch] pb-6 pl-9 text-sm leading-relaxed text-ink-2">
                  {it.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
