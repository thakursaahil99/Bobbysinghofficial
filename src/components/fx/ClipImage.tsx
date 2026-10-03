"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/cn";

/**
 * Image that "opens" from a small inset window to full frame as it enters
 * the viewport, zooming out as it does, then drifts with scroll.
 */
export function ClipImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  radius = 22,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  radius?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{ borderRadius: radius }}
      initial={
        reduce
          ? false
          : { clipPath: `inset(16% 14% 16% 14% round ${radius}px)` }
      }
      whileInView={{ clipPath: `inset(0% 0% 0% 0% round ${radius}px)` }}
      viewport={{ once: false, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="absolute inset-[-8%]"
        style={reduce ? undefined : { y: drift }}
        initial={reduce ? false : { scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      </motion.div>
    </motion.div>
  );
}
