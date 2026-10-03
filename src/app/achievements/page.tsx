import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { StatRow } from "@/components/primitives";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "20+ years in institutional and healthcare food services — awards, recognition and the numbers behind Red Bean Hospitality.",
};

const facts = [
  { k: "Sector", v: "Healthcare, Corporate & Institutes" },
  { k: "Founded", v: "2008" },
  { k: "Team strength", v: "350+ employees" },
  { k: "Client retention", v: "95%" },
  { k: "Headquarters", v: "Chandigarh, India" },
];

const awards = [
  "Best Healthcare Food Service Provider — India Hospitality Awards 2024",
  "Innovation in Institutional Catering — F&B Leadership Summit 2023",
  "Hospital Kitchen Excellence Award — NABH 2022",
  "Entrepreneur of the Year (North India), F&B — 2022",
  "Sustainability Champion — Corporate Food Excellence Awards 2021",
];

const bigNumbers = [
  { value: "1,200+", label: "Cafés & kitchens served" },
  { value: "350+", label: "Kitchen setups executed" },
  { value: "95%", label: "Retention & satisfaction" },
  { value: "20+", label: "Years of excellence" },
];

const gallery = [
  "/images/award-1.webp",
  "/images/award-2.webp",
  "/images/award-3.webp",
  "/images/award-4.webp",
  "/images/award-5.webp",
];

const awardTone = [
  "bg-red text-white",
  "bg-forest text-cream",
  "bg-gold text-white",
  "bg-plum text-white",
];
const awardText = ["text-red", "text-forest", "text-gold", "text-plum"];

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        kicker="Achievements"
        title="Leading the institutional and healthcare food revolution."
        intro="Two decades in institutional and healthcare food services — hospital diet-management systems, café setups and industrial food operations that put innovation, hygiene and taste on the same plate, at scale."
      />

      <Container className="mt-10">
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {facts.map((f) => (
            <div key={f.k} className="card flex flex-col gap-2 p-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-mute">
                {f.k}
              </dt>
              <dd className="font-display text-lg font-medium leading-snug text-ink">
                {f.v}
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* awards */}
      <section className="mt-24">
        <SectionHeading
          index="01"
          label="Awards & recognition"
          title="Recognised by the industry."
        />
        <Container className="mt-12">
          <ol className="border-t border-line">
            {awards.map((a, i) => {
              const [title, org = ""] = a.split(" — ");
              const year = org.match(/\d{4}/)?.[0] ?? a.match(/\d{4}/)?.[0];
              const orgName = org.replace(/,?\s*\d{4}\s*$/, "").trim();
              return (
                <Reveal
                  as="li"
                  key={a}
                  delay={(i % 4) * 60}
                  className="group grid grid-cols-[auto_1fr] items-center gap-5 border-b border-line py-7 transition-colors duration-300 hover:bg-paper-2/70 sm:grid-cols-[120px_auto_1fr] sm:gap-8"
                >
                  <span
                    className={cn(
                      "hidden font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-none sm:block",
                      awardText[i % awardText.length],
                    )}
                  >
                    {year}
                  </span>
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
                      awardTone[i % awardTone.length],
                    )}
                  >
                    <Icon name="award" className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[clamp(1.15rem,2.2vw,1.6rem)] leading-snug text-ink transition-transform duration-300 group-hover:translate-x-1">
                      {title}
                    </h3>
                    {(orgName || year) && (
                      <p className="mt-1.5 text-sm text-mute">
                        {orgName}
                        {year && <span className="sm:hidden"> · {year}</span>}
                      </p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* gallery */}
      <section className="mt-24">
        <SectionHeading
          index="02"
          label="On the stage"
          title="Recognition, in the room."
        />
        <Container className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <Reveal
                key={src}
                delay={(i % 3) * 60}
                className={cn(
                  i === 0 && "sm:col-span-2 sm:row-span-2",
                  i === gallery.length - 1 && gallery.length % 3 === 2 && "lg:col-span-2",
                )}
              >
                <div
                  className={cn(
                    "group relative w-full overflow-hidden rounded-[16px] border border-line",
                    i === 0 ? "aspect-[16/10]" : "aspect-[4/3]",
                    i === gallery.length - 1 &&
                      gallery.length % 3 === 2 &&
                      "lg:aspect-auto lg:h-full",
                  )}
                >
                  <Image
                    src={src}
                    alt="Award ceremony"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 460px"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* big numbers */}
      <section className="mt-24">
        <SectionHeading
          index="03"
          label="By the numbers"
          title="Two decades, in figures."
        />
        <div className="mt-6 px-gutter">
          <Container className="rounded-[20px] bg-tint px-6 sm:px-10">
            <StatRow items={bigNumbers} className="!border-transparent" />
          </Container>
        </div>
      </section>
    </>
  );
}
