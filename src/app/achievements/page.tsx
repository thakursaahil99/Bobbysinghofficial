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
            <div key={f.k} className="card flex flex-col gap-1.5 p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-mute">
                {f.k}
              </dt>
              <dd className="text-sm text-ink">{f.v}</dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* awards */}
      <section className="mt-24">
        <SectionHeading index="01" label="Awards & recognition" />
        <Container className="mt-10">
          <ol className="grid gap-4 sm:grid-cols-2">
            {awards.map((a, i) => (
              <Reveal key={a} delay={(i % 2) * 60}>
                <li className="card lift flex h-full items-start gap-4 p-6">
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                      awardTone[i % awardTone.length],
                    )}
                  >
                    <Icon name="award" className="h-5 w-5" />
                  </span>
                  <p className="text-base leading-snug text-ink">{a}</p>
                </li>
              </Reveal>
            ))}
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
                className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
              >
                <div
                  className={cn(
                    "group relative w-full overflow-hidden rounded-[16px] border border-line",
                    i === 0 ? "aspect-[16/10]" : "aspect-[4/3]",
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
        <SectionHeading index="03" label="By the numbers" />
        <div className="mt-6 px-gutter">
          <Container className="rounded-[20px] bg-tint px-6 sm:px-10">
            <StatRow items={bigNumbers} className="!border-transparent" />
          </Container>
        </div>
      </section>
    </>
  );
}
