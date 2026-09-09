"use client";

import { createElement } from "react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/cn";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

type Tag = "div" | "ul" | "ol" | "dl";

export function Stagger({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: Tag;
}) {
  return createElement(
    motion[as] as typeof motion.div,
    {
      className: cn(className),
      variants: parent,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "0px 0px -10% 0px" },
    },
    children,
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: Tag | "li";
}) {
  return createElement(
    motion[as as Tag] as typeof motion.div,
    { className: cn(className), variants: child },
    children,
  );
}
