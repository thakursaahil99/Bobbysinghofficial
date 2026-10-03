import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ParallaxImage } from "@/components/fx/Parallax";
import { CtaBlock } from "@/components/primitives";
import { cn } from "@/lib/cn";

import { consultancies } from "@/content/consultancies";

const images: Record<string, string> = {
  healthcare: "/images/kitchen.webp",
  cafes: "/images/cgr-3.webp",
  corporate: "/images/cgr-2.webp",
  institutions: "/images/misc-1.jpg",
};

const tone = ["text-red", "text-forest", "text-gold", "text-plum"];

export const metadata: Metadata = {
  title: "Consultancies",
  description:
    "Contract food-service consulting across four sectors — healthcare, cafés & restaurants, corporate and institutions — to one operating standard.",
};

export default function ConsultanciesPage() {
  return (
    <>
      <PageHero
        kicker="Our Consultancies"
        title="Four sectors, one operating standard."
        intro="Two decades of running kitchens and cafés, distilled into sector-specific engagements. Pick the one closest to your operation."
      />

      <Container className="mt-12 flex flex-col gap-24 lg:gap-32">
        {Object.values(consultancies).map((c, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={c.slug}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              <Reveal className={cn(flip && "lg:order-2")}>
                <Link
                  href={`/consultancies/${c.slug}`}
                  data-cursor="Explore"
                  className="group block overflow-hidden rounded-[22px]"
                >
                  <ParallaxImage
                    src={images[c.slug]}
                    alt={c.kicker}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="aspect-[4/3] w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </Link>
              </Reveal>

              <Reveal delay={80} className={cn(flip && "lg:order-1")}>
                <p className="eyebrow flex items-center gap-3">
                  <span className={tone[i % tone.length]}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rule-red" />
                  <span>{c.kicker}</span>
                </p>
                <h2 className="display mt-5 text-[clamp(2rem,4vw,3.25rem)] text-ink">
                  {c.title}
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-2">
                  {c.intro}
                </p>

                <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-6">
                  {c.stats.slice(0, 3).map((s) => (
                    <div key={s.label}>
                      <dt className="sr-only">{s.label}</dt>
                      <dd>
                        <span
                          className={cn(
                            "block font-display text-[clamp(1.5rem,2.6vw,2.2rem)] font-medium leading-none",
                            tone[i % tone.length],
                          )}
                        >
                          {s.value}
                        </span>
                        <span className="mt-2 block text-xs leading-snug text-mute">
                          {s.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>

                <Link
                  href={`/consultancies/${c.slug}`}
                  data-cursor
                  className="btn btn-solid mt-8"
                >
                  Explore {c.kicker}
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
              </Reveal>
            </article>
          );
        })}
      </Container>

      <CtaBlock
        eyebrow="Not sure which fits?"
        title="Tell me about your site."
        body="Hospital, campus, office or café — a first conversation is enough to know where to start."
        actions={[
          { label: "Start a conversation", href: "/contact" },
          { label: "Explore IFO", href: "/ifo", variant: "ghost" },
        ]}
      />
    </>
  );
}
