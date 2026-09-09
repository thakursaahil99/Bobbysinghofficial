import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid, ChipList } from "@/components/FeatureCard";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";

import { ifo } from "@/content/ifo";

export const metadata: Metadata = {
  title: "IFO — Independent Food Operator",
  description:
    "The IFO programme by Bobby Singh — become an Independent Food Operator on two systems, SAP (Sales Auto Pilot) and KAP (Kitchen Auto Pilot). Partner and Foundation tracks.",
};

const systemTone = [
  { tile: "bg-red text-white", pane: "bg-red-soft" },
  { tile: "bg-forest text-cream", pane: "bg-forest-soft" },
];

const trackTone = [
  {
    pane: "bg-ink text-cream",
    chip: "bg-red text-white",
    tick: "text-red",
    line: "border-cream/15",
    body: "text-cream/75",
  },
  {
    pane: "bg-tint text-ink",
    chip: "bg-forest text-cream",
    tick: "text-forest",
    line: "border-line",
    body: "text-ink-2",
  },
];

const sectorIcons: Record<string, string> = {
  Corporate: "building",
  Hospitals: "heart",
  Institutions: "cap",
  Industries: "factory",
};

const phaseTone = [
  "bg-red text-white",
  "bg-forest text-cream",
  "bg-gold text-white",
  "bg-plum text-white",
];

export default function IfoPage() {
  return (
    <>
      <PageHero
        kicker={ifo.kicker}
        title={ifo.title}
        intro={ifo.intro}
        aside={
          <div className="flex flex-wrap gap-4 lg:mt-8">
            <a href="/contact" className="btn btn-solid">
              Apply for the programme
            </a>
            <a href="/contact" className="btn btn-ghost">
              Ask a question
            </a>
          </div>
        }
      />

      {/* what IFO stands for */}
      <section className="mt-16 px-gutter">
        <Container className="grid gap-8 rounded-[24px] bg-paper-2 p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
          <Reveal className="flex gap-2">
            {ifo.acronym.short.split("").map((l) => (
              <span
                key={l}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red font-display text-3xl font-semibold text-white sm:h-20 sm:w-20 sm:text-4xl"
              >
                {l}
              </span>
            ))}
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-[clamp(1.6rem,3vw,2.4rem)] text-ink">
              {ifo.acronym.full}
            </h2>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-2">
              {ifo.acronym.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* the two systems */}
      <section className="mt-24">
        <SectionHeading
          index="01"
          label="The two systems"
          title="SAP and KAP."
          intro="Every IFO is built on two operating systems — one for winning and keeping work, one for running the kitchen."
        />
        <Container className="mt-10">
          <div className="grid gap-4 md:grid-cols-2">
            {ifo.systems.map((s, i) => {
              const t = systemTone[i % systemTone.length];
              return (
                <Reveal key={s.code} delay={i * 80}>
                  <div
                    className={cn(
                      "flex h-full flex-col gap-5 rounded-[20px] p-8",
                      t.pane,
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "flex h-14 w-14 items-center justify-center rounded-2xl font-display text-xl font-semibold",
                          t.tile,
                        )}
                      >
                        {s.code}
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mute">
                          {s.code}
                        </p>
                        <h3 className="text-xl text-ink">{s.name}</h3>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-ink-2">{s.body}</p>
                    <ul className="mt-1 grid gap-2 border-t border-line pt-4 text-sm text-ink-2 sm:grid-cols-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-2.5">
                          <Icon
                            name="check"
                            className="mt-0.5 h-4 w-4 shrink-0 text-red"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* two ways in */}
      <section className="mt-24">
        <SectionHeading
          index="02"
          label="Two ways in"
          title="Partner, or Foundation."
          intro="Come on board as a Red Bean Consultant with a coach and a site, or take the four-month course on its own."
        />
        <Container className="mt-10">
          <div className="grid gap-4 [&>*]:min-w-0 lg:grid-cols-2">
            {ifo.tracks.map((tr, i) => {
              const t = trackTone[i % trackTone.length];
              return (
                <Reveal key={tr.name} delay={i * 80}>
                  <div
                    className={cn(
                      "flex h-full flex-col gap-5 rounded-[22px] p-8 sm:p-10",
                      t.pane,
                    )}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-semibold",
                          t.chip,
                        )}
                      >
                        {tr.tag}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] opacity-70">
                        {tr.price}
                      </span>
                    </div>
                    <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.1rem)] font-medium">
                      {tr.name}
                    </h3>
                    <p className={cn("text-sm leading-relaxed", t.body)}>
                      {tr.body}
                    </p>
                    <ul
                      className={cn(
                        "mt-1 flex flex-col gap-2.5 border-t pt-5 text-sm",
                        t.line,
                      )}
                    >
                      {tr.includes.map((inc) => (
                        <li key={inc} className="flex gap-2.5">
                          <Icon
                            name="check"
                            className={cn("mt-0.5 h-4 w-4 shrink-0", t.tick)}
                          />
                          {inc}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-4">
                      <Link
                        href="/contact"
                        data-cursor
                        className={cn(
                          "btn",
                          i === 0 ? "btn-accent" : "btn-solid",
                        )}
                      >
                        {tr.cta}
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
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* sectors */}
      <section className="mt-24">
        <SectionHeading
          index="03"
          label="Four key sectors"
          title="Master the industries you'll serve."
        />
        <Container className="mt-10">
          <FeatureGrid
            className="lg:grid-cols-4"
            items={ifo.sectors.map((s) => ({
              icon: sectorIcons[s.title] ?? "spark",
              title: s.title,
              body: s.body,
            }))}
          />
        </Container>
      </section>

      {/* curriculum */}
      <section className="mt-24">
        <SectionHeading
          index="04"
          label="The Foundation curriculum"
          title="Four months, structured."
          intro="The IFO Foundation course, week by week — the same ground the Partner track covers in more depth."
        />
        <Container className="mt-10">
          <div className="grid gap-4 md:grid-cols-2">
            {ifo.curriculum.map((m, i) => (
              <Reveal key={m.phase} delay={(i % 2) * 60}>
                <div className="card lift flex h-full flex-col gap-4 p-7">
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-semibold",
                        phaseTone[i % phaseTone.length],
                      )}
                    >
                      {m.phase}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-mute">
                      {m.when}
                    </span>
                  </div>
                  <h3 className="text-xl text-ink">{m.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-2">{m.body}</p>
                  <ul className="mt-1 space-y-2 border-t border-line pt-4 text-sm text-ink-2">
                    {m.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5">
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-red"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* benefits */}
      <section className="mt-24">
        <SectionHeading
          index="05"
          label="What you get"
          title="Not just a course."
          intro="IFO is a complete transformation journey — personal and professional — with Red Bean behind you."
        />
        <Container className="mt-10">
          <ChipList items={ifo.benefits} />
        </Container>
      </section>

      {/* what makes it different */}
      <section className="mt-24">
        <SectionHeading index="06" label="What makes IFO different" />
        <Container className="mt-10">
          <ChipList items={ifo.different} />
        </Container>
      </section>

      {/* stories */}
      <section className="mt-24">
        <SectionHeading
          index="07"
          label="Success stories"
          title="From the Red Bean network."
        />
        <Container className="mt-10">
          <div className="grid gap-4 md:grid-cols-2">
            {ifo.stories.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <div
                  className={cn(
                    "lift flex h-full flex-col gap-5 rounded-[18px] p-9",
                    i % 2 === 0 ? "bg-tint" : "bg-forest-soft",
                  )}
                >
                  <span
                    aria-hidden
                    className="font-display text-5xl leading-none text-red"
                  >
                    &ldquo;
                  </span>
                  <p className="font-display text-lg leading-snug text-ink">
                    {s.quote}
                  </p>
                  <div className="mt-auto">
                    <p className="text-sm font-semibold text-ink">{s.name}</p>
                    <p className="text-xs uppercase tracking-[0.12em] text-mute">
                      {s.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-24 px-gutter">
        <Container className="relative aspect-[16/7] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/images/cgr-bg.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/55" />
          <div className="absolute inset-0 flex items-center p-8 sm:p-14">
            <p className="max-w-[24ch] font-display text-[clamp(1.75rem,4vw,3rem)] font-medium text-white">
              {ifo.band}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
