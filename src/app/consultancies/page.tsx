import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

import { consultancies } from "@/content/consultancies";

const images: Record<string, string> = {
  healthcare: "/images/kitchen.webp",
  cafes: "/images/cgr-3.webp",
  corporate: "/images/cgr-2.webp",
  institutions: "/images/misc-1.jpg",
};

export const metadata: Metadata = {
  title: "Consultancies",
  description:
    "Contract food-service consulting across four sectors — healthcare, cafés & restaurants, corporate and institutions — to one operating standard.",
};

export default function ConsultanciesPage() {
  return (
    <>
      <PageHero
        kicker="Our Consultancies"
        title="Four sectors, one operating standard."
        intro="Two decades of running kitchens and cafés, distilled into sector-specific engagements. Pick the one closest to your operation."
      />

      <Container className="mt-10">
        <div className="grid gap-5 sm:grid-cols-2">
          {Object.values(consultancies).map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 60}>
              <Link
                href={`/consultancies/${c.slug}`}
                className="card lift group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={images[c.slug]}
                    alt={c.kicker}
                    fill
                    sizes="(max-width: 640px) 100vw, 640px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/95 px-3 py-1 text-xs font-semibold text-red">
                    {c.kicker}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-7">
                  <h2 className="text-2xl text-ink transition-colors group-hover:text-red">
                    {c.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-ink-2">{c.intro}</p>
                  <span className="mt-auto flex flex-wrap gap-2 pt-3">
                    {c.stats.slice(0, 3).map((s) => (
                      <span
                        key={s.label}
                        className="rounded-full bg-paper-2 px-3 py-1 text-xs font-medium text-ink-2"
                      >
                        {s.value} {s.label}
                      </span>
                    ))}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
