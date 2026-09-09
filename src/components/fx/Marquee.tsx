"use client";

import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/cn";

/** CSS marquee that skews and stretches with scroll velocity. */
export function Marquee({
  items,
  speed = 40,
  className,
  separator = "·",
  separatorClassName = "text-red",
}: {
  items: string[];
  speed?: number;
  className?: string;
  separator?: string;
  separatorClassName?: string;
}) {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { stiffness: 90, damping: 40, mass: 0.5 });
  const skew = useTransform(smooth, [-2500, 0, 2500], [-6, 0, 6], {
    clamp: true,
  });
  const stretch = useTransform(smooth, [-2500, 0, 2500], [1.05, 1, 1.05], {
    clamp: true,
  });

  const row = (
    <div className="flex shrink-0 items-center" aria-hidden>
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6">{it}</span>
          <span className={separatorClassName}>{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <motion.div
      className={cn("flex overflow-hidden", className)}
      style={{ skewX: skew, scaleY: stretch }}
    >
      <div
        className="flex animate-[marquee_linear_infinite] will-change-transform"
        style={{ animationDuration: `${speed}s` }}
      >
        {row}
        {row}
      </div>
    </motion.div>
  );
}
