import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoCard } from "@/components/VideoCard";
import { ScrollText } from "@/components/fx/ScrollText";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";

import { events } from "@/content/events";

export const metadata: Metadata = {
  title: "Events & Media",
  description:
    "Workshops, keynotes, podcast appearances and media featuring Bobby Singh on hospital kitchens, café businesses and the contract-food industry.",
};

const speakTone = ["text-red", "text-forest", "text-gold", "text-plum"];

export default function EventsPage() {
  return (
    <>
      <PageHero kicker={events.kicker} title={events.title} intro={events.intro} />

      {/* featured video */}
      <section className="mt-12">
        <SectionHeading index="01" label="Featured" title="Milestones and moments." />
        <Container className="mt-10">
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
            {events.featured.map((v) => (
              <Reveal key={v.title}>
                <VideoCard
                  href={v.href}
                  thumb={v.thumb}
                  title={v.title}
                  note={v.note}
                  meta={v.views}
                  length={v.length}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* speaking */}
      <section className="mt-24">
        <SectionHeading
          index="02"
          label="Speaking engagements"
          title="Keynotes and industry events."
        />
        <Container className="mt-12">
          <ol className="border-t border-line">
            {events.speaking.map((s, i) => {
              const [d, m, y] = s.date.split(" ");
              return (
                <Reveal
                  as="li"
                  key={s.title}
                  delay={i * 60}
                  className="group grid gap-5 border-b border-line py-8 transition-colors duration-300 hover:bg-paper-2/70 md:grid-cols-[170px_1fr_240px] md:gap-10 md:py-10"
                >
                  <div className="flex items-baseline gap-3 md:block">
                    <p
                      className={cn(
                        "font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-none",
                        speakTone[i % speakTone.length],
                      )}
                    >
                      {y ? `${d} ${m.slice(0, 3)}` : s.date}
                    </p>
                    {y && (
                      <p className="text-sm font-medium text-mute md:mt-2">{y}</p>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[clamp(1.2rem,2.2vw,1.65rem)] text-ink transition-transform duration-300 group-hover:translate-x-1">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-base leading-relaxed text-ink-2">
                      {s.topic}
                    </p>
                  </div>
                  <dl className="grid grid-cols-2 gap-4 text-sm md:grid-cols-1 md:gap-3">
                    <div>
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-mute">
                        Venue
                      </dt>
                      <dd className="mt-1 text-ink">{s.venue}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-mute">
                        Audience
                      </dt>
                      <dd className="mt-1 text-ink">{s.audience}</dd>
                    </div>
                  </dl>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* philosophy */}
      <section data-cursor-invert className="mt-24 bg-forest py-20 text-cream">
        <Container>
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-red-soft">
              <span className="rule-red" />
              Leadership philosophy
            </p>
            <ScrollText
              as="blockquote"
              text={`“${events.philosophy}”`}
              dim={0.22}
              className="mt-8 max-w-[26ch] font-display text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.1] text-cream"
            />
          </Reveal>
        </Container>
      </section>

      {/* insight videos */}
      <section className="mt-24">
        <SectionHeading
          index="03"
          label="Watch our insights"
          title="Short, practical, on the channel."
        />
        <Container className="mt-10">
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {events.insights.map((v) => (
              <Reveal key={v.id}>
                <VideoCard
                  href={v.href}
                  thumb={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  title={v.title}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* podcast */}
      <section className="mt-24">
        <SectionHeading index="04" label="Podcast" title="On the mic." />
        <Container className="mt-10">
          <Reveal>
            <div
              data-cursor-invert
              className="relative flex flex-col gap-8 overflow-hidden rounded-[24px] bg-ink p-8 text-cream sm:p-12 md:flex-row md:items-end md:justify-between"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -left-16 -top-20 h-72 w-72 rounded-full bg-plum/40 blur-3xl"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-red/25 blur-3xl"
              />
              <div className="relative flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-plum text-white">
                  <Icon name="megaphone" className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-soft">
                    {events.podcast.show}
                  </p>
                  <h3 className="mt-3 max-w-[22ch] font-display text-[clamp(1.6rem,3vw,2.4rem)] font-medium leading-[1.1] text-cream">
                    {events.podcast.title}
                  </h3>
                  <p className="mt-3 text-sm text-cream/65">
                    {events.podcast.date} · {events.podcast.length} ·{" "}
                    {events.podcast.platforms}
                  </p>
                </div>
              </div>
              <a
                href={events.podcast.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                className="btn btn-accent relative shrink-0 self-start md:self-auto"
              >
                Listen now
                <svg viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
