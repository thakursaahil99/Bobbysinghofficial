"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { cn } from "@/lib/cn";

export function Parallax({
  children,
  className,
  distance = 70,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance / 2, -distance / 2]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/** Cover image that drifts within an overflow-hidden frame as it scrolls. */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  priority,
  sizes = "100vw",
  amount = 14,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-amount}%`, `${amount}%`],
  );
  const y = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });
  const inset = amount + 4;

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="will-change-transform"
        style={{
          y,
          position: "absolute",
          top: `-${inset}%`,
          left: `-${inset}%`,
          right: `-${inset}%`,
          bottom: `-${inset}%`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imgClassName)}
        />
      </motion.div>
    </div>
  );
}
