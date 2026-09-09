import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoCard } from "@/components/VideoCard";
import { Icon } from "@/components/Icon";
import { SplitText } from "@/components/SplitText";
import { Marquee } from "@/components/fx/Marquee";
import { CountUp } from "@/components/fx/CountUp";
import { Magnetic } from "@/components/fx/Magnetic";
import { Tilt } from "@/components/fx/Tilt";
import { ArrowLink, CtaBlock } from "@/components/primitives";
import { cn } from "@/lib/cn";
import { consultancies } from "@/content/consultancies";
import { ifo } from "@/content/ifo";
import { events } from "@/content/events";
import { home } from "@/content/home";

const awardShots = [
  "/images/award-1.webp",
  "/images/award-2.webp",
  "/images/award-3.webp",
  "/images/award-4.webp",
  "/images/award-5.webp",
];

const serviceLinks: Record<string, string> = {
  "Business coaching": "/ifo",
  "Corporate café solutions": "/consultancies/corporate",
  "Institutional food services": "/consultancies/institutions",
  "Contract-food consulting": "/consultancies",
};

const consultancyImages: Record<string, string> = {
  healthcare: "/images/kitchen.webp",
  cafes: "/images/cgr-3.webp",
  corporate: "/images/cgr-2.webp",
  institutions: "/images/misc-1.jpg",
};

const trustMarks = [
  "Shark Tank India",
  "20+ years in the field",
  "1,200+ kitchens & cafés",
  "NABH-grade compliance",
];

const iconFor: Record<string, string> = {
  "Business coaching": "mentor",
  "Corporate café solutions": "cup",
  "Institutional food services": "building",
  "Contract-food consulting": "compass",
  "Sales & marketing": "megaphone",
  "Project openings": "key",
  "Business expansion": "expand",
  "Operations & supply chain": "truck",
  "Client relationships": "handshake",
  "Financial discipline": "coins",
  "Project mobilization": "rocket",
  "Menu management": "utensils",
  "Kitchen & café design": "layout",
  "Food safety & compliance": "shield",
  "Practical training": "wrench",
  "Industry expertise": "award",
  "Career preparation": "briefcase",
};

const accents = [
  { pane: "bg-red-soft", chip: "bg-red text-white", fg: "text-red-deep" },
  { pane: "bg-forest-soft", chip: "bg-forest text-cream", fg: "text-forest" },
  { pane: "bg-gold-soft", chip: "bg-gold text-white", fg: "text-gold" },
  { pane: "bg-plum-soft", chip: "bg-plum text-white", fg: "text-plum" },
];

const engagement = [
  {
    n: "01",
    icon: "compass",
    title: "Diagnose",
    body: "A hard look at the contract, the kitchen and the numbers — where margin leaks and where the risk sits.",
  },
  {
    n: "02",
    icon: "layout",
    title: "Design",
    body: "The operating model — menu, staffing, supply chain and compliance, costed to a number that works.",
  },
  {
    n: "03",
    icon: "rocket",
    title: "Mobilise",
    body: "Setup and launch, on time and on budget, without disrupting the client's service.",
  },
  {
    n: "04",
    icon: "handshake",
    title: "Hand over",
    body: "Systems, training and reviews until it runs to standard without Bobby in the room.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------- hero */}
      <section
        data-cursor-invert
        className="relative isolate overflow-hidden bg-ink text-cream"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-[36rem] w-[36rem] rounded-full bg-red/25 blur-[130px]"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46vw] max-w-[760px] lg:block">
          <Image
            src="/images/bobby-portrait.png"
            alt="Bobby Singh, Managing Director of Red Bean Hospitality"
            fill
            priority
            sizes="46vw"
            className="object-cover object-[center_12%] grayscale"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-ink)_6%,rgba(26,23,32,0.82)_24%,transparent_58%,transparent_78%,rgba(26,23,32,0.5))]"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(0deg,var(--color-ink)_2%,transparent_28%)]"
          />
        </div>

        <Container className="relative flex min-h-[93vh] flex-col justify-center py-28">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">
              <span className="inline-block h-px w-9 bg-red" />
              {home.hero.kicker}
            </p>
            <h1 className="mt-8 font-display text-[clamp(2.9rem,8.4vw,7rem)] font-medium leading-[0.9] tracking-[-0.04em]">
              <SplitText text="Contract food," />
              <span className="block">
                run <span className="text-red">properly.</span>
              </span>
            </h1>
            <p className="mt-9 max-w-lg text-lg leading-relaxed text-cream/70">
              {home.hero.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Magnetic>
                <Link href="/contact" data-cursor className="btn btn-accent">
                  Start a conversation
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
              </Magnetic>
              <Link
                href="/ifo"
                data-cursor
                className="ifo-badge group inline-flex items-center gap-2.5 rounded-full border border-red bg-red/20 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-red/30"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-80" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red" />
                </span>
                IFO — Independent Food Operator
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </Reveal>

          <Reveal
            delay={140}
            className="mt-16 flex max-w-xl flex-wrap gap-x-10 gap-y-4 border-t border-cream/15 pt-7 lg:max-w-[560px]"
          >
            {home.stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2.5">
                <span className="font-display text-2xl font-medium text-cream">
                  {s.value}
                </span>
                <span className="text-xs uppercase tracking-[0.1em] text-cream/50">
                  {s.label}
                </span>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ---------------------------------------------------- ticker */}
      <div
        data-cursor-invert
        className="border-y border-red-deep bg-red py-3.5 text-white"
      >
        <Marquee
          items={trustMarks}
          speed={52}
          separator="✳"
          separatorClassName="text-white/50"
          className="text-xs font-semibold uppercase tracking-[0.14em]"
        />
      </div>

      {/* ---------------------------------------------------- services */}
      <section className="mt-24">
        <SectionHeading
          index="01"
          label="What Bobby does"
          title="Four ways operators work with him."
        />
        <Container className="mt-12">
          <ol className="border-t border-line">
            {home.vision.pillars.map((p, i) => {
              const a = accents[i % accents.length];
              return (
                <Reveal as="li" key={p.title} delay={i * 60}>
                  <Link
                    href={serviceLinks[p.title] ?? "/consultancies"}
                    data-cursor="Open"
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-line py-7 transition-colors duration-300 hover:bg-paper-2/70 sm:gap-8 sm:py-9"
                  >
                    <span
                      className={cn(
                        "font-display text-[clamp(1.6rem,4vw,3rem)] font-medium tabular-nums leading-none opacity-35 transition-opacity duration-300 group-hover:opacity-100",
                        a.fg,
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="flex items-center gap-3 text-[clamp(1.35rem,3vw,2.3rem)] text-ink transition-transform duration-300 group-hover:translate-x-1">
                        <span
                          className={cn(
                            "hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:flex",
                            a.chip,
                          )}
                        >
                          <Icon name={iconFor[p.title]} className="h-4 w-4" />
                        </span>
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-2 sm:text-base">
                        {p.body}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className={cn(
                        "text-2xl transition-transform duration-300 group-hover:translate-x-1.5",
                        a.fg,
                      )}
                    >
                      &rarr;
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* ---------------------------------------------------- about */}
      <section className="mt-24 bg-tint py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <Reveal className="overflow-hidden rounded-[20px]">
            <div className="relative aspect-[5/6] w-full lg:aspect-[4/5]">
              <Image
                src="/images/bobby-stage-bw.png"
                alt="Bobby Singh speaking to a room of entrepreneurs"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_20%] grayscale"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow flex items-center gap-3">
              <span className="rule-red" />
              Meet Bobby Singh
            </p>
            <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.5rem)] text-ink">
              India&apos;s leading business coach for contract-food entrepreneurs.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-2">
              {home.vision.body}
            </p>
            <div className="mt-8">
              <ArrowLink href="/vision">Read the full story</ArrowLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------------------------------------------- shark tank */}
      <section className="mt-24 px-gutter">
        <Container data-cursor-invert className="overflow-hidden rounded-[24px] bg-forest text-cream lg:grid lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/bobby-sharktank.png"
              alt="Bobby Singh — Shark Tank India"
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 sm:p-14">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-red-soft">
              <span className="rule-red" />
              Shark Tank India
            </p>
            <h2 className="display text-[clamp(1.9rem,3.6vw,2.8rem)] text-cream">
              A national stage for an industry that rarely gets one.
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

      {/* ---------------------------------------------------- consultancies */}
      <section className="mt-24 bg-paper-2 py-20">
        <SectionHeading
          index="02"
          label="Consultancies"
          title="Four sectors, one operating standard."
        />
        <Container className="mt-12">
          <div className="grid gap-5 md:grid-cols-2">
            {Object.values(consultancies).map((c, i) => (
              <Reveal key={c.slug} delay={(i % 2) * 70}>
                <Link
                  href={`/consultancies/${c.slug}`}
                  data-cursor="Explore"
                  className="group relative block overflow-hidden rounded-[20px] bg-ink"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={consultancyImages[c.slug]}
                      alt={c.kicker}
                      fill
                      sizes="(max-width: 768px) 100vw, 680px"
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/5 transition-opacity duration-500 group-hover:opacity-95"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-cream sm:p-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-soft">
                        {c.kicker}
                      </p>
                      <h3 className="mt-2 font-display text-[clamp(1.35rem,2.4vw,2rem)] font-medium leading-tight">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm text-cream/65">
                        {c.stats[0].value} {c.stats[0].label}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="mb-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/40 text-lg transition-colors duration-300 group-hover:border-red group-hover:bg-red group-hover:text-white"
                    >
                      &rarr;
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- approach */}
      <section className="mt-24">
        <Container className="grid gap-x-12 gap-y-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span>03</span>
                <span className="rule-red" />
                <span>Core leadership expertise</span>
              </p>
              <h2 className="display mt-5 text-[clamp(2rem,4vw,3.25rem)] text-ink">
                How operations get transformed.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-2">
                The parts of the business that decide whether a contract works —
                strategy, launches, supply chain, compliance, margins.
              </p>
            </Reveal>
          </div>

          <ol className="border-t border-line">
            {[...home.leadership, ...home.framework].map((item, i) => {
              const a = accents[i % accents.length];
              return (
                <Reveal
                  as="li"
                  key={item.title}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-b border-line py-6 transition-colors duration-300 hover:bg-paper-2/70"
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                      a.chip,
                    )}
                  >
                    <Icon name={iconFor[item.title]} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg text-ink transition-transform duration-300 group-hover:translate-x-1">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-2">
                      {item.body}
                    </p>
                  </div>
                  <span className="font-display text-2xl font-medium text-line transition-colors duration-300 group-hover:text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* ---------------------------------------------------- engagement / process */}
      <section className="mt-24">
        <SectionHeading
          index="04"
          label="The engagement"
          title="From first call to hand-over."
          intro="A defined path — not an open-ended retainer. Every engagement is built to make itself unnecessary."
        />
        <Container className="mt-12">
          <div className="relative grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden
              className="absolute inset-x-0 top-7 hidden h-px bg-line lg:block"
            />
            {engagement.map((s, i) => {
              const a = accents[i % accents.length];
              return (
                <Reveal key={s.n} delay={i * 70} className="relative">
                  <span
                    className={cn(
                      "relative z-10 flex h-14 w-14 items-center justify-center rounded-full font-display text-base font-semibold",
                      a.chip,
                    )}
                  >
                    {s.n}
                  </span>
                  <div className="mt-6 flex items-center gap-2.5">
                    <Icon name={s.icon} className="h-5 w-5 text-red" />
                    <h3 className="text-xl text-ink">{s.title}</h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-2">
                    {s.body}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- media */}
      <section className="mt-24">
        <SectionHeading
          index="05"
          label="On camera"
          title="On stage, on air, on the record."
        />
        <Container className="mt-10">
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
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
          <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="mt-10">
            <ArrowLink href="/events-media">All events &amp; media</ArrowLink>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- formats marquee */}
      <div data-cursor-invert className="mt-24 border-y border-line bg-forest py-4 text-cream/85">
        <Marquee
          items={home.cafeFormats}
          speed={60}
          separator="/"
          className="text-sm font-medium uppercase tracking-[0.08em]"
        />
      </div>

      {/* ---------------------------------------------------- recognition */}
      <section className="mt-24">
        <SectionHeading
          index="06"
          label="Recognition"
          title="Awarded across healthcare F&B."
        />
        <Container className="mt-10">
          <div className="grid grid-cols-2 gap-3.5 md:grid-cols-3 lg:grid-cols-5">
            {awardShots.map((src) => (
              <Reveal key={src}>
                <Tilt max={6} scale={1.04}>
                  <div
                    data-cursor="View"
                    className="group relative aspect-[3/4] overflow-hidden rounded-[14px] border border-line bg-paper-2"
                  >
                    <Image
                      src={src}
                      alt="Award ceremony"
                      fill
                      sizes="(max-width: 768px) 50vw, 280px"
                      className="object-cover"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15"
                    />
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <ArrowLink href="/achievements">Awards &amp; recognition</ArrowLink>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- testimonial */}
      <section className="mt-24 px-gutter">
        <Container data-cursor-invert className="relative overflow-hidden rounded-[28px] bg-ink px-8 py-16 text-paper sm:px-16 sm:py-24">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-red/25 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-forest-2/40 blur-3xl"
          />
          <Reveal className="relative">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-red">
              <span className="rule-red" />
              From the Red Bean network
            </p>
            <blockquote className="mt-8 max-w-[26ch] font-display text-[clamp(1.8rem,4vw,3.1rem)] font-medium leading-[1.15] before:text-red before:content-['\201C'] after:text-red after:content-['\201D']">
              {ifo.stories[0].quote}
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-9 w-9 rounded-full bg-red/20 ring-1 ring-red/40" />
              <p className="text-sm text-paper/70">
                <span className="font-semibold text-paper">
                  {ifo.stories[0].name}
                </span>
                <br />
                {ifo.stories[0].role}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------------------------------------------- IFO */}
      <section className="mt-24 px-gutter">
        <Container className="rounded-[24px] bg-tint p-8 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="rule-red" />
                Training &amp; consultancy
              </p>
              <h2 className="display mt-4 text-[clamp(1.9rem,3.6vw,2.8rem)] text-ink">
                IFO — Independent Food Operator
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                {home.training.body}
              </p>
              <div className="mt-7">
                <Link href="/ifo" className="btn btn-accent">
                  Learn more about IFO
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
            </Reveal>
            <Reveal delay={80} className="flex flex-col gap-4">
              {home.training.points.map((p, i) => {
                const a = accents[i % accents.length];
                return (
                  <div
                    key={p.title}
                    className="flex items-start gap-4 rounded-[14px] bg-card p-5"
                  >
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                        a.chip,
                      )}
                    >
                      <Icon name={iconFor[p.title]} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base text-ink">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-2">
                        {p.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- impact */}
      <section data-cursor-invert className="mt-24 bg-red py-20 text-white">
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              <span className="inline-block h-px w-9 bg-white/70" />
              Impact
            </p>
            <p className="mt-5 font-display text-[clamp(4.5rem,13vw,9rem)] font-medium leading-[0.85] tracking-tight">
              <CountUp value="50–60" />
            </p>
            <p className="mt-4 max-w-[22ch] text-xl leading-snug text-white/90">
              people join our kitchens and cafés every single month.
            </p>
          </Reveal>
          <Reveal delay={80} className="grid gap-3 sm:grid-cols-2">
            {home.stats
              .filter((s) => s.value !== "50–60")
              .map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/12 p-5 backdrop-blur-sm"
                >
                  <span className="font-display text-3xl font-medium leading-none">
                    <CountUp value={s.value} />
                  </span>
                  <span className="mt-2 block text-sm text-white/75">
                    {s.label}
                  </span>
                </div>
              ))}
          </Reveal>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Work with Bobby Singh"
        title="Tell me what you're building."
        body="Coaching, a consultancy engagement, a speaking slot, or a first conversation — start here."
        actions={[
          { label: "Start a conversation", href: "/contact" },
          { label: "Explore IFO", href: "/ifo", variant: "ghost" },
        ]}
      />
    </>
  );
}
