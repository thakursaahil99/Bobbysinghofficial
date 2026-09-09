import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid, ChipList } from "@/components/FeatureCard";
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

export default async function ConsultancyPage({
  params,
}: PageProps<"/consultancies/[slug]">) {
  const { slug } = await params;
  const c = consultancies[slug];
  if (!c) notFound();

  const others = consultancySlugs.filter((s) => s !== slug);
  const num = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={c.title}
        intro={c.intro}
        aside={
          <a href="/contact" className="btn btn-solid lg:mt-8">
            Schedule a consultation
          </a>
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
      <section className="mt-24">
        <SectionHeading
          index="01"
          label="Leadership"
          title={c.leadTitle}
          intro={c.leadBody}
        />
        <Container className="mt-10">
          <FeatureGrid
            items={c.leadPoints.map((p, i) => ({
              badge: num(i),
              title: p.title,
              body: p.body,
            }))}
          />
        </Container>
      </section>

      {/* core expertise */}
      <section className="mt-24">
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

      {/* services */}
      <section className="mt-24">
        <SectionHeading index="03" label="Our services" intro={c.servicesIntro} />
        <Container className="mt-10">
          <FeatureGrid
            items={c.services.map((s, i) => ({
              badge: num(i),
              title: s.title,
              body: s.body,
            }))}
          />
        </Container>
      </section>

      {/* statement */}
      <section className="mt-24 px-gutter">
        <Container
          data-cursor-invert
          className="rounded-[24px] bg-forest px-8 py-16 text-cream sm:px-14 sm:py-20"
        >
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-red-soft">
              <span className="rule-red" />
              The approach
            </p>
            <blockquote className="mt-8 max-w-[24ch] font-display text-[clamp(1.9rem,4.2vw,3.25rem)] font-medium leading-[1.12] text-cream">
              &ldquo;{c.statement}&rdquo;
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* testimonials */}
      <section className="mt-24">
        <SectionHeading
          index="04"
          label="Success stories"
          title="Operators, in their own words."
        />
        <Container className="mt-10">
          <div className="grid gap-4 md:grid-cols-3">
            {c.testimonials.map((t, i) => (
              <Reveal key={t} delay={(i % 3) * 60}>
                <div
                  className={cn(
                    "lift flex h-full flex-col gap-5 rounded-[18px] p-8",
                    i % 2 === 0 ? "bg-tint" : "bg-forest-soft",
                  )}
                >
                  <span aria-hidden className="font-display text-4xl text-red">
                    &ldquo;
                  </span>
                  <p className="text-sm leading-relaxed text-ink-2">{t}</p>
                </div>
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
      <Container className="mt-24">
        <p className="eyebrow flex items-center gap-3">
          <span className="rule-red" />
          Other consultancies
        </p>
        <div className="mt-6 border-t border-line">
          {others.map((s) => (
            <Link
              key={s}
              href={`/consultancies/${s}`}
              className="group flex items-center justify-between border-b border-line py-6"
            >
              <span className="text-2xl text-ink transition-colors group-hover:text-red">
                {consultancies[s].kicker}
              </span>
              <span
                aria-hidden
                className="text-red transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
