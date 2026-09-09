"use client";

import { createElement } from "react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/cn";

const variants: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

type Tag = "div" | "section" | "ol" | "ul" | "dl" | "li" | "span";

export function Reveal({
  children,
  className,
  delay = 0,
  plain = false,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** render a static wrapper (no animation) */
  plain?: boolean;
  as?: Tag;
}) {
  if (plain) {
    return createElement(as, { className: cn(className) }, children);
  }
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ delay: delay / 1000 }}
    >
      {children}
    </M>
  );
}
