import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureList, ChipList } from "@/components/FeatureCard";
import { ParallaxImage } from "@/components/fx/Parallax";
import { ContactStrip, StatRow } from "@/components/primitives";
import { cn } from "@/lib/cn";
import { consultancies } from "@/content/consultancies";
import { consultancySlugs, site } from "@/lib/site";

export function generateStaticParams() {
  return consultancySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/consultancies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = consultancies[slug];
  if (!c) return {};
  return { title: c.metaTitle, description: c.metaDescription };
}

const otherImages: Record<string, string> = {
  healthcare: "/images/kitchen.webp",
  cafes: "/images/cgr-3.webp",
  corporate: "/images/cgr-2.webp",
  institutions: "/images/misc-1.jpg",
};

export default async function ConsultancyPage({
  params,
}: PageProps<"/consultancies/[slug]">) {
  const { slug } = await params;
  const c = consultancies[slug];
  if (!c) notFound();

  const others = consultancySlugs.filter((s) => s !== slug);

  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={c.title}
        intro={c.intro}
        aside={
          <Link href="/contact" data-cursor className="btn btn-accent lg:mt-8">
            Schedule a consultation
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
        }
      />

      <Container className="mt-10">
        <Reveal>
          <ParallaxImage
            src={c.image}
            alt={c.kicker}
            priority
            sizes="100vw"
            className="aspect-[16/9] w-full rounded-[20px] md:aspect-[21/8]"
          />
        </Reveal>
      </Container>

      <section className="mt-10 px-gutter">
        <Container className="rounded-[20px] bg-tint px-6 sm:px-10">
          <StatRow items={c.stats} className="!border-transparent" />
        </Container>
      </section>

      {/* leadership */}
      <section className="mt-28">
        <SectionHeading
          index="01"
          label="Leadership"
          title={c.leadTitle}
          intro={c.leadBody}
        />
        <Container className="mt-12">
          <FeatureList
            items={c.leadPoints.map((p) => ({
              title: p.title,
              body: p.body,
            }))}
          />
        </Container>
      </section>

      {/* core expertise */}
      <section className="mt-28 bg-paper-2 py-20">
        <SectionHeading
          index="02"
          label="Core expertise"
          title={c.expertiseTitle}
          intro={c.expertiseIntro}
        />
        <Container className="mt-10">
          <ChipList items={c.expertise} />
        </Container>
      </section>

      {/* services — sticky heading, list scrolls */}
      <section className="mt-28">
        <Container className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span>03</span>
                <span className="rule-red" />
                <span>Our services</span>
              </p>
              <h2 className="display mt-5 text-[clamp(2rem,4vw,3.25rem)] text-ink">
                Everything the contract needs.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-2">
                {c.servicesIntro}
              </p>
              <Link
                href="/contact"
                data-cursor
                className="btn btn-solid mt-8"
              >
                Talk about your site
              </Link>
            </Reveal>
          </div>
          <FeatureList
            items={c.services.map((s) => ({
              title: s.title,
              body: s.body,
            }))}
          />
        </Container>
      </section>

      {/* statement */}
      <section className="mt-28 px-gutter">
        <Container
          data-cursor-invert
          className="relative overflow-hidden rounded-[28px] bg-forest px-8 py-16 text-cream sm:px-16 sm:py-24"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red/20 blur-3xl"
          />
          <Reveal className="relative">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-red-soft">
              <span className="rule-red" />
              The approach
            </p>
            <blockquote className="mt-8 max-w-[24ch] font-display text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.1] text-cream before:text-red-soft before:content-['\201C'] after:text-red-soft after:content-['\201D']">
              {c.statement}
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* testimonials */}
      <section className="mt-28">
        <SectionHeading
          index="04"
          label="Success stories"
          title="Operators, in their own words."
        />
        <Container className="mt-12">
          <div className="grid gap-4 md:grid-cols-3">
            {c.testimonials.map((t, i) => (
              <Reveal key={t} delay={(i % 3) * 60}>
                <figure
                  className={cn(
                    "lift flex h-full flex-col gap-5 rounded-[20px] p-8 sm:p-9",
                    i % 3 === 0
                      ? "bg-tint"
                      : i % 3 === 1
                        ? "bg-forest-soft"
                        : "bg-gold-soft",
                  )}
                >
                  <span
                    aria-hidden
                    className="font-display text-5xl leading-none text-red"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="font-display text-lg leading-snug text-ink">
                    {t}
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-mute">
            Video testimonials available on request and across our channels.
          </p>
        </Container>
      </section>

      <ContactStrip phones={site.phones} email={site.email} site={site.companySite} />

      {/* other consultancies */}
      <section className="mt-28">
        <SectionHeading label="Other consultancies" title="Explore the other sectors." />
        <Container className="mt-10">
          <div className="grid gap-4 md:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s} delay={i * 70}>
                <Link
                  href={`/consultancies/${s}`}
                  data-cursor="Explore"
                  className="group relative block overflow-hidden rounded-[20px] bg-ink"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={otherImages[s]}
                      alt={consultancies[s].kicker}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/5"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-cream">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-soft">
                        {consultancies[s].kicker}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-medium leading-tight">
                        {consultancies[s].title}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/40 transition-colors duration-300 group-hover:border-red group-hover:bg-red group-hover:text-white"
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
    </>
  );
}
