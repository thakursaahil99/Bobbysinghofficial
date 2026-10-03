import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureList, ChipList } from "@/components/FeatureCard";
import { ClipImage } from "@/components/fx/ClipImage";
import { ScrollText } from "@/components/fx/ScrollText";
import { ShowcaseExpand } from "@/components/fx/ShowcaseExpand";
import { StatRow } from "@/components/primitives";
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

const pillarLinks: Record<string, string> = {
  "Business coaching": "/ifo",
  "Corporate café solutions": "/consultancies/corporate",
  "Institutional food services": "/consultancies/institutions",
  "Contract-food consulting": "/consultancies",
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

      {/* story */}
      <Container className="mt-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <ClipImage
            src="/images/bobby-stage-bw.png"
            alt="Bobby Singh speaking to a room of operators"
            className="aspect-[4/5] w-full"
            imgClassName="grayscale"
          />
          <Reveal delay={80}>
            <p className="eyebrow flex items-center gap-3">
              <span className="rule-red" />
              The story
            </p>
            <p className="mt-6 font-display text-[clamp(1.45rem,2.6vw,2.1rem)] font-medium leading-[1.25] tracking-[-0.015em] text-ink">
              {home.vision.body}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
              From Srinagar to Chennai, that has meant hospital
              diet-management systems, corporate cafés, university messes and
              industrial kitchens — built with the same attention whether they
              feed fifty people or fifty thousand.
            </p>
          </Reveal>
        </div>
      </Container>

      {/* pillars */}
      <section className="mt-28">
        <SectionHeading
          index="01"
          label="What Bobby does"
          title="Four ways to work with him."
        />
        <Container className="mt-12">
          <FeatureList
            items={home.vision.pillars.map((p) => ({
              icon: pillarIcons[p.title] ?? "spark",
              title: p.title,
              body: p.body,
              href: pillarLinks[p.title],
            }))}
          />
        </Container>
      </section>

      {/* shark tank */}
      <div className="mt-24">
        <ShowcaseExpand
          src="/images/bobby-sharktank.png"
          alt="Bobby Singh — Shark Tank India"
          kicker="Shark Tank India"
          title="The first of the industry on the tank."
          body={home.sharkTank.body}
          link={{ href: "/events-media", label: "Watch the highlights" }}
          imgPosition="center 40%"
        />
      </div>

      {/* philosophy quote */}
      <section className="mt-28 bg-tint py-24">
        <Container>
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="rule-red" />
              Leadership philosophy
            </p>
            <ScrollText
              as="blockquote"
              text={`“${philosophy}”`}
              className="mt-8 max-w-[24ch] font-display text-[clamp(2rem,4.6vw,3.6rem)] font-medium leading-[1.1] tracking-[-0.03em] text-ink"
            />
          </Reveal>
        </Container>
      </section>

      {/* expertise & reach */}
      <section className="mt-28">
        <SectionHeading
          index="02"
          label="Expertise & reach"
          title="Where the work happens."
        />
        <Container className="mt-12">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mute">
                Contract kitchen services
              </p>
              <ul className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-display text-[clamp(1.6rem,3.2vw,2.6rem)] font-medium leading-tight tracking-[-0.02em] text-ink">
                {home.sectors.map((s, i) => (
                  <li key={s} className="flex items-baseline gap-4">
                    {s}
                    {i < home.sectors.length - 1 && (
                      <span aria-hidden className="text-red">
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mute">
                Café &amp; restaurant formats
              </p>
              <ChipList items={home.cafeFormats} className="mt-6" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* training */}
      <section className="mt-28">
        <SectionHeading
          index="03"
          label="Training & consultancy"
          title="IFO — Independent Food Operator"
          intro={home.training.body}
        />
        <Container className="mt-12">
          <FeatureList
            items={home.training.points.map((p) => ({
              icon: trainingIcons[p.title] ?? "spark",
              title: p.title,
              body: p.body,
            }))}
          />
          <div className="mt-10">
            <Link href="/ifo" data-cursor className="btn btn-accent">
              Explore the IFO programme
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
          </div>
        </Container>
      </section>

      <div className="mt-28 px-gutter">
        <Container className="rounded-[20px] bg-tint px-6 sm:px-10">
          <StatRow items={home.stats} className="!border-transparent" />
        </Container>
      </div>
    </>
  );
}
