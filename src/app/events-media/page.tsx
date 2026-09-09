import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoCard } from "@/components/VideoCard";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";

import { events } from "@/content/events";

export const metadata: Metadata = {
  title: "Events & Media",
  description:
    "Workshops, keynotes, podcast appearances and media featuring Bobby Singh on hospital kitchens, café businesses and the contract-food industry.",
};

const speakTone = [
  "bg-red text-white",
  "bg-forest text-cream",
  "bg-gold text-white",
  "bg-plum text-white",
];

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
        <Container className="mt-10">
          <div className="grid gap-4 md:grid-cols-3">
            {events.speaking.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 60}>
                <div className="card lift flex h-full flex-col gap-4 p-7">
                  <span
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl",
                      speakTone[i % speakTone.length],
                    )}
                  >
                    <Icon name="calendar" className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg text-ink">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-2">{s.topic}</p>
                  <dl className="mt-auto space-y-1.5 border-t border-line pt-4 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-mute">Venue</dt>
                      <dd className="text-right text-ink-2">{s.venue}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-mute">Date</dt>
                      <dd className="text-right text-ink-2">{s.date}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-mute">Audience</dt>
                      <dd className="text-right text-ink-2">{s.audience}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
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
            <blockquote className="mt-8 max-w-[28ch] font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-medium leading-[1.12] text-cream">
              &ldquo;{events.philosophy}&rdquo;
            </blockquote>
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
        <SectionHeading index="04" label="Podcast" />
        <Container className="mt-10">
          <Reveal className="flex flex-col gap-6 rounded-[20px] bg-tint p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-plum text-white">
                <Icon name="mentor" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mute">
                  {events.podcast.show}
                </p>
                <h3 className="mt-2 max-w-[24ch] font-display text-2xl text-ink">
                  {events.podcast.title}
                </h3>
                <p className="mt-2 text-sm text-ink-2">
                  {events.podcast.date} · {events.podcast.length} ·{" "}
                  {events.podcast.platforms}
                </p>
              </div>
            </div>
            <a
              href={events.podcast.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid shrink-0"
            >
              Listen now
            </a>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
