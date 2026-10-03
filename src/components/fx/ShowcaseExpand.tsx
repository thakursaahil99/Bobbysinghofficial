"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

type Props = {
  src: string;
  alt: string;
  kicker: string;
  title: string;
  body: string;
  link?: { href: string; label: string };
  imgPosition?: string;
};

/**
 * Pinned scroll scene: the image starts as an inset card and expands to fill
 * the viewport as you scroll, then the headline rises in over it.
 */
export function ShowcaseExpand(props: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <StaticShowcase {...props} />;
  return <AnimatedShowcase {...props} />;
}

function AnimatedShowcase({
  src,
  alt,
  kicker,
  title,
  body,
  link,
  imgPosition = "center 20%",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [start, setStart] = useState(62);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const set = () => setStart(mq.matches ? 86 : 62);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // spring keeps every derived value JS-driven (Motion would otherwise hand
  // opacity to a native scroll timeline that mis-measures this sticky scene)
  const p = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.0005,
  });

  const width = useTransform(p, [0, 0.55], [`${start}%`, "100%"]);
  const height = useTransform(p, [0, 0.55], ["64%", "100%"]);
  const radius = useTransform(p, [0, 0.55], [28, 0]);
  const scale = useTransform(p, [0, 0.6], [1.22, 1]);
  const shade = useTransform(p, [0.35, 0.7], [0, 1]);
  const textY = useTransform(p, [0.45, 0.8], [60, 0]);
  const textO = useTransform(p, [0.45, 0.75], [0, 1]);
  const chipO = useTransform(p, [0, 0.25], [1, 0]);

  return (
    <section ref={ref} className="relative h-[230vh]">
      <div className="sticky top-[72px] flex h-[calc(100svh-72px)] items-center justify-center overflow-hidden">
        <motion.div
          data-cursor-invert
          className="relative overflow-hidden bg-ink"
          style={{ width, height, borderRadius: radius }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 right-0 lg:left-[22%] lg:[mask-image:linear-gradient(90deg,transparent_0%,black_28%)]"
            style={{ scale }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: imgPosition }}
            />
          </motion.div>

          <motion.span
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(0deg,rgba(26,23,32,0.96)_8%,rgba(26,23,32,0.7)_45%,rgba(26,23,32,0.15)_85%)] lg:bg-[linear-gradient(90deg,rgba(26,23,32,0.92)_0%,rgba(26,23,32,0.55)_45%,rgba(26,23,32,0.1)_80%)]"
            style={{ opacity: shade }}
          />

          <motion.span
            className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-ink/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cream backdrop-blur-sm"
            style={{ opacity: chipO }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
            {kicker}
          </motion.span>

          <motion.div
            className="absolute inset-0 flex items-end px-6 pb-12 sm:px-16 lg:items-center lg:px-24 lg:pb-0"
            style={{ y: textY, opacity: textO }}
          >
            <div className="max-w-xl text-cream">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-red-soft">
                <span className="inline-block h-px w-9 bg-red" />
                {kicker}
              </p>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.035em]">
                {title}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75 sm:text-lg">
                {body}
              </p>
              {link && (
                <Link
                  href={link.href}
                  data-cursor
                  className="btn btn-accent mt-8"
                >
                  {link.label}
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StaticShowcase({
  src,
  alt,
  kicker,
  title,
  body,
  link,
  imgPosition = "center 20%",
}: Props) {
  return (
    <section className="mt-24 px-gutter">
      <div
        data-cursor-invert
        className="relative mx-auto h-[80vh] max-w-[1400px] overflow-hidden rounded-[24px] bg-ink"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: imgPosition }}
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(0deg,rgba(26,23,32,0.96)_8%,rgba(26,23,32,0.7)_45%,rgba(26,23,32,0.15)_85%)] lg:bg-[linear-gradient(90deg,rgba(26,23,32,0.92)_0%,rgba(26,23,32,0.55)_45%,rgba(26,23,32,0.1)_80%)]"
        />
        <div className="absolute inset-0 flex items-end px-6 pb-12 sm:px-16 lg:items-center lg:pb-0">
          <div className="max-w-xl text-cream">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-soft">
              {kicker}
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.6rem)] font-medium leading-[0.98]">
              {title}
            </h2>
            <p className="mt-6 max-w-md text-lg text-cream/75">{body}</p>
            {link && (
              <Link href={link.href} className="btn btn-accent mt-8">
                {link.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
