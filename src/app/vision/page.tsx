import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid, ChipList } from "@/components/FeatureCard";
import { ParallaxImage } from "@/components/fx/Parallax";
import { ArrowLink, StatRow } from "@/components/primitives";
import { home } from "@/content/home";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "Bobby Singh — 20 years running institutional kitchens and cafés across India, first contract-food professional on Shark Tank India, and coach to the entrepreneurs building the industry.",
};

const philosophy =
  "Contract catering isn't just about food — it's about the experience around it. Standardised, high-quality dietary and F&B services should be a given across healthcare, corporate cafés and institutional facilities.";

const pillarIcons: Record<string, string> = {
  "Business coaching": "mentor",
  "Corporate café solutions": "cup",
  "Institutional food services": "building",
  "Contract-food consulting": "compass",
};

const trainingIcons: Record<string, string> = {
  "Practical training": "wrench",
  "Industry expertise": "award",
  "Career preparation": "briefcase",
};

export default function VisionPage() {
  return (
    <>
      <PageHero
        kicker="Vision"
        title="Contract food, treated as a craft."
        intro="Bobby Singh has spent two decades proving that institutional kitchens can run to a real standard — on cost, on compliance, and on the plate. The next two decades are about teaching it."
      />

      <Container className="mt-12">
        <Reveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <ParallaxImage
            src="/images/bobby-stage-bw.png"
            alt="Bobby Singh speaking"
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="aspect-[4/5] w-full rounded-[18px]"
            imgClassName="grayscale"
          />
          <div className="flex flex-col justify-center gap-6">
            <p className="text-lg leading-relaxed text-ink-2">
              {home.vision.body}
            </p>
            <p className="text-lg leading-relaxed text-ink-2">
              From Srinagar to Chennai, that has meant hospital diet-management
              systems, corporate cafés, university messes and industrial
              kitchens — built with the same attention whether they feed fifty
              people or fifty thousand.
            </p>
          </div>
        </Reveal>
      </Container>

      {/* pillars */}
      <section className="mt-24">
        <SectionHeading index="01" label="What Bobby does" />
        <Container className="mt-10">
          <FeatureGrid
            className="lg:grid-cols-2"
            items={home.vision.pillars.map((p) => ({
              icon: pillarIcons[p.title] ?? "spark",
              title: p.title,
              body: p.body,
            }))}
          />
        </Container>
      </section>

      {/* shark tank */}
      <section className="mt-24 px-gutter">
        <Container
          data-cursor-invert
          className="overflow-hidden rounded-[24px] bg-forest text-cream lg:grid lg:grid-cols-2"
        >
          <div className="relative min-h-[320px] lg:min-h-full">
            <ParallaxImage
              src="/images/bobby-sharktank.png"
              alt="Bobby Singh — Shark Tank India"
              sizes="(max-width: 1024px) 100vw, 720px"
              className="h-full min-h-[320px] w-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 sm:p-14">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-red-soft">
              <span className="rule-red" />
              Shark Tank India
            </p>
            <h2 className="display text-[clamp(1.9rem,3.6vw,2.8rem)] text-cream">
              The first of the industry on the tank.
            </h2>
            <p className="text-lg leading-relaxed text-cream/75">
              {home.sharkTank.body}
            </p>
            <div>
              <Link
                href="/events-media"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cream hoverline"
              >
                Watch the highlights
                <span aria-hidden className="text-red-soft">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* philosophy quote */}
      <section className="mt-24 bg-tint py-20">
        <Container>
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="rule-red" />
              Leadership philosophy
            </p>
            <blockquote className="mt-8 max-w-[26ch] font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
              &ldquo;{philosophy}&rdquo;
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* expertise & reach */}
      <section className="mt-24">
        <SectionHeading
          index="02"
          label="Expertise & reach"
          title="Where the work happens."
        />
        <Container className="mt-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mute">
                Contract kitchen services
              </p>
              <ChipList items={home.sectors} className="mt-5" />
            </Reveal>
            <Reveal delay={80}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mute">
                Café &amp; restaurant formats
              </p>
              <ChipList items={home.cafeFormats} className="mt-5" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* training */}
      <section className="mt-24">
        <SectionHeading
          index="03"
          label="Training & consultancy"
          title="IFO — Independent Food Operator"
          intro={home.training.body}
        />
        <Container className="mt-10">
          <FeatureGrid
            items={home.training.points.map((p) => ({
              icon: trainingIcons[p.title] ?? "spark",
              title: p.title,
              body: p.body,
            }))}
          />
          <div className="mt-10">
            <ArrowLink href="/ifo">Learn more about IFO</ArrowLink>
          </div>
        </Container>
      </section>

      <div className="mt-24 px-gutter">
        <Container className="rounded-[20px] bg-tint px-6 sm:px-10">
          <StatRow items={home.stats} className="!border-transparent" />
        </Container>
      </div>
    </>
  );
}
