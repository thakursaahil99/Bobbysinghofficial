"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

/** Splits "1,200+" into prefix-number-suffix and counts the number up in view. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });

  const parsed = useMemo(() => {
    const m = value.match(/^(\D*)([\d,.]+)(.*)$/);
    if (!m) return null;
    return {
      prefix: m[1],
      suffix: m[3],
      target: Number(m[2].replace(/,/g, "")),
      decimals: m[2].includes(".") ? 1 : 0,
    };
  }, [value]);

  const [display, setDisplay] = useState(
    parsed ? `${parsed.prefix}0${parsed.suffix}` : value,
  );

  useEffect(() => {
    if (!parsed || !inView) return;
    const controls = animate(0, parsed.target, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) =>
        setDisplay(
          parsed.prefix +
            v.toLocaleString("en-US", {
              minimumFractionDigits: parsed.decimals,
              maximumFractionDigits: parsed.decimals,
            }) +
            parsed.suffix,
        ),
    });
    return () => controls.stop();
  }, [inView, parsed]);

  return (
    <span ref={ref} className="tabular-nums">
      {parsed ? display : value}
    </span>
  );
}
