"use client";

import { createElement } from "react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/cn";

const container: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger / 1000, delayChildren: 0.04 },
  }),
};

const word: Variants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div";

export function SplitText({
  text,
  as = "span",
  className,
  stagger = 38,
}: {
  text: string;
  as?: Tag;
  className?: string;
  stagger?: number;
  start?: number;
}) {
  const words = text.split(" ");
  return createElement(
    motion[as] as typeof motion.span,
    {
      className: cn("block", className),
      variants: container,
      custom: stagger,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "0px 0px -8% 0px" },
    },
    words.map((w, i) => (
      <span
        key={i}
        className="inline-flex overflow-hidden pb-[0.12em] align-bottom"
      >
        <motion.span variants={word} className="inline-block">
          {w}
        </motion.span>
        {i < words.length - 1 ? " " : null}
      </span>
    )),
  );
}
