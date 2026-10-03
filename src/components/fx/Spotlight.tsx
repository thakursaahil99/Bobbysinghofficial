"use client";

import { useEffect, useRef } from "react";

/**
 * A soft glow that follows the pointer across its parent section.
 * Drop inside any `relative` container; desktop + motion-OK only.
 */
export function Spotlight({
  color = "216,53,42",
  size = 620,
  strength = 0.22,
}: {
  color?: string;
  size?: number;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (
      !el ||
      !host ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    const loop = () => {
      // ease toward the pointer for a smooth, weighted follow
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.setProperty("--sx", `${cx}px`);
      el.style.setProperty("--sy", `${cy}px`);
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0;
      }
    };
    const move = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      el.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const leave = () => {
      el.style.opacity = "0";
    };
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    return () => {
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-700"
      style={{
        background: `radial-gradient(${size}px circle at var(--sx, 50%) var(--sy, 50%), rgba(${color},${strength}), transparent 65%)`,
      }}
    />
  );
}
