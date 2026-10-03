"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";

type Step = { n: string; icon: string; title: string; body: string };

const tone = [
  { card: "bg-red text-white", sub: "text-white/75", num: "text-white/25" },
  { card: "bg-forest text-cream", sub: "text-cream/70", num: "text-cream/20" },
  { card: "bg-gold text-white", sub: "text-white/80", num: "text-white/25" },
  { card: "bg-ink text-cream", sub: "text-cream/65", num: "text-cream/15" },
];

/**
 * Pinned horizontal-scroll story: on desktop the section holds while the
 * step cards glide sideways with vertical scroll. Mobile / reduced motion
 * get a plain vertical list.
 */
export function HorizontalSteps({
  eyebrow,
  title,
  intro,
  steps,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  steps: Step[];
}) {
  const reduce = useReducedMotion();
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const set = () => setDesktop(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  if (!desktop || reduce) {
    return (
      <section className="mt-28 px-gutter">
        <div className="mx-auto max-w-[1400px]">
          <Heading eyebrow={eyebrow} title={title} intro={intro} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {steps.map((s, i) => (
              <StepCard key={s.n} s={s} i={i} className="min-h-[300px]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return <PinnedTrack eyebrow={eyebrow} title={title} intro={intro} steps={steps} />;
}

function PinnedTrack({
  eyebrow,
  title,
  intro,
  steps,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  steps: Step[];
}) {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      const t = trackRef.current;
      if (!t) return;
      setDistance(Math.max(0, t.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const p = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 32,
    restDelta: 0.0005,
  });
  const x = useTransform(p, [0, 1], [0, -distance]);
  const bar = useTransform(p, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative mt-28" style={{ height: "320vh" }}>
      <div className="sticky top-[72px] flex h-[calc(100svh-72px)] flex-col justify-center overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex w-max items-stretch gap-6 pl-[var(--spacing-gutter)] pr-[12vw]"
          style={{ x }}
        >
          <div className="flex w-[34vw] max-w-[460px] shrink-0 flex-col justify-center pr-8">
            <Heading eyebrow={eyebrow} title={title} intro={intro} />
            <p className="mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-mute">
              Keep scrolling
              <span aria-hidden className="text-red">
                &rarr;
              </span>
            </p>
          </div>
          {steps.map((s, i) => (
            <StepCard
              key={s.n}
              s={s}
              i={i}
              className="h-[min(62vh,560px)] w-[min(40vw,520px)] shrink-0"
            />
          ))}
        </motion.div>

        <div className="mx-[var(--spacing-gutter)] mt-10 h-[3px] overflow-hidden rounded-full bg-line">
          <motion.div className="h-full bg-red" style={{ width: bar }} />
        </div>
      </div>
    </section>
  );
}

function Heading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div>
      <p className="eyebrow flex items-center gap-3">
        <span className="rule-red" />
        {eyebrow}
      </p>
      <h2 className="display mt-5 text-[clamp(2.1rem,4vw,3.6rem)] leading-[1.02] text-ink">
        {title}
      </h2>
      <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-2 sm:text-lg">
        {intro}
      </p>
    </div>
  );
}

function StepCard({
  s,
  i,
  className,
}: {
  s: Step;
  i: number;
  className?: string;
}) {
  const t = tone[i % tone.length];
  return (
    <article
      data-cursor-invert
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-[26px] p-8 sm:p-10",
        t.card,
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-4 -top-10 font-display text-[clamp(9rem,16vw,15rem)] font-medium leading-none tracking-[-0.06em]",
          t.num,
        )}
      >
        {s.n}
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
        <Icon name={s.icon} className="h-6 w-6" />
      </span>
      <div className="relative">
        <p className={cn("text-xs font-semibold uppercase tracking-[0.18em]", t.sub)}>
          Step {s.n}
        </p>
        <h3 className="mt-3 font-display text-[clamp(2rem,3.4vw,3rem)] font-medium leading-none tracking-[-0.03em]">
          {s.title}
        </h3>
        <p className={cn("mt-5 max-w-sm text-base leading-relaxed", t.sub)}>
          {s.body}
        </p>
      </div>
    </article>
  );
}
