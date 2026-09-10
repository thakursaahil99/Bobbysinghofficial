"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type Mode = "idle" | "link" | "text";

const TEXT_SEL =
  "p, h1, h2, h3, h4, blockquote, figcaption, dd, dt, [data-cursor='text']";
const LINK_SEL =
  "a, button, [data-cursor], input, textarea, select, [role='button'], summary";

/**
 * Cursor built to a high bar: a near-instant dot + a lightly trailing ring,
 * an I-beam over real text, a press bounce, a clean fade in/out, and it flips
 * from ink to white over any section marked `data-cursor-invert` so it stays
 * crisp on light, colour and dark alike. Disabled for touch and reduced-motion.
 */
export function Cursor() {
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState<Mode>("idle");
  const [invert, setInvert] = useState(false);
  const [down, setDown] = useState(false);
  const [shown, setShown] = useState(false);
  const seen = useRef(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dotX = useSpring(x, { stiffness: 1700, damping: 55, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 1700, damping: 55, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 480, damping: 34, mass: 0.55 });
  const ringY = useSpring(y, { stiffness: 480, damping: 34, mass: 0.55 });

  useEffect(() => {
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    setReady(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!seen.current) seen.current = true;
      setShown(true);
      const t = e.target as HTMLElement | null;
      const onLink = !!t?.closest(LINK_SEL);
      setMode(onLink ? "link" : t?.closest(TEXT_SEL) ? "text" : "idle");
      setInvert(!!t?.closest("[data-cursor-invert]"));
    };
    const leave = () => setShown(false);
    const enter = () => seen.current && setShown(true);
    const dn = () => setDown(true);
    const up = () => setDown(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);
    window.addEventListener("blur", leave);
    window.addEventListener("pointerdown", dn);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
      window.removeEventListener("blur", leave);
      window.removeEventListener("pointerdown", dn);
      window.removeEventListener("pointerup", up);
    };
  }, [x, y]);

  if (!ready) return null;

  const press = down ? 0.82 : 1;
  const c = invert ? "255,255,255" : "26,23,32";

  // opposite-colour halo so the cursor keeps contrast on any background
  const halo = invert ? "0,0,0" : "255,255,255";
  const dotShadow = `0 0 0 1px rgba(${halo},0.55), 0 1px 4px rgba(0,0,0,0.35)`;

  const dot =
    mode === "text"
      ? { width: 2, height: 22, borderRadius: 2, opacity: 1 }
      : mode === "link"
        ? { width: 5, height: 5, borderRadius: 999, opacity: 0.9 }
        : { width: 7, height: 7, borderRadius: 999, opacity: 1 };

  const ring =
    mode === "text"
      ? { width: 0, height: 0, opacity: 0 }
      : mode === "link"
        ? { width: 44, height: 44, opacity: 1 }
        : { width: 28, height: 28, opacity: 1 };

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[200]"
      style={{ opacity: shown ? 1 : 0, transition: "opacity 0.25s ease" }}
    >
      <motion.div
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          x: dotX,
          y: dotY,
          backgroundColor: `rgb(${c})`,
          boxShadow: dotShadow,
        }}
        animate={{ ...dot, scale: press }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.4 }}
      />
      <motion.div
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          border: `1.5px solid rgba(${c},${invert ? 0.72 : 0.8})`,
          boxShadow: `0 0 0 1px rgba(${halo},0.28)`,
        }}
        animate={{ ...ring, scale: press }}
        transition={{ type: "spring", stiffness: 340, damping: 26, mass: 0.5 }}
      />
    </div>
  );
}
