"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";

/**
 * Words fill in one by one as the block scrolls through the viewport —
 * the reading follows the scroll. Static (fully lit) for reduced motion.
 */
export function ScrollText({
  text,
  className,
  as: Tag = "p",
  dim = 0.16,
}: {
  text: string;
  className?: string;
  as?: "p" | "blockquote" | "h2";
  dim?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: raw } = useScroll({
    target: ref,
    offset: ["start 0.88", "end 0.45"],
  });
  // JS-driven (see ShowcaseExpand) + a touch of smoothing
  const scrollYProgress = useSpring(raw, {
    stiffness: 260,
    damping: 45,
    restDelta: 0.0005,
  });
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {words.map((w, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} dim={dim}>
            {w}
          </Word>
        );
      })}
    </Tag>
  );
}

function Word({
  children,
  progress,
  range,
  dim,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  dim: number;
}) {
  const opacity = useTransform(progress, range, [dim, 1]);
  return (
    <span aria-hidden className="mr-[0.25em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
