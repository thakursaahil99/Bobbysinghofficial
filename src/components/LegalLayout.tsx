import { Container } from "./Container";
import { PageHero } from "./PageHero";
import { site } from "@/lib/site";
import { lastUpdated } from "@/content/legal";

type Section = { h: string; p?: string[]; list?: string[] };

export function LegalLayout({
  kicker,
  title,
  intro,
  sections,
}: {
  kicker: string;
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <>
      <PageHero
        kicker={kicker}
        title={title}
        intro={intro}
        aside={
          <p className="mt-4 text-sm text-mute">
            Last updated: {lastUpdated}
          </p>
        }
      />

      <Container className="mt-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_2.4fr]">
          <nav className="hidden self-start lg:block lg:sticky lg:top-28">
            <ol className="space-y-2 text-sm text-mute">
              {sections.map((s, i) => (
                <li key={s.h}>
                  <a href={`#s${i}`} className="hoverline">
                    {String(i + 1).padStart(2, "0")} — {s.h}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="divide-y divide-line border-t border-line">
            {sections.map((s, i) => (
              <section key={s.h} id={`s${i}`} className="scroll-mt-28 py-10">
                <h2 className="flex items-baseline gap-4 text-2xl">
                  <span className="font-display text-lg text-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.h}
                </h2>
                <div className="mt-5 space-y-4 pl-9">
                  {s.p?.map((para) => (
                    <p
                      key={para}
                      className="max-w-[68ch] text-sm leading-relaxed text-ink-2"
                    >
                      {para}
                    </p>
                  ))}
                  {s.list && (
                    <ul className="max-w-[68ch] space-y-2 text-sm leading-relaxed text-ink-2">
                      {s.list.map((li) => (
                        <li key={li} className="flex gap-3">
                          <span className="text-red">—</span>
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            <section className="py-10">
              <h2 className="flex items-baseline gap-4 text-2xl">
                <span className="font-display text-lg text-mute">
                  {String(sections.length + 1).padStart(2, "0")}
                </span>
                Contact
              </h2>
              <div className="mt-5 space-y-1 pl-9 text-sm leading-relaxed text-ink-2">
                <p>
                  <a href={`mailto:${site.email}`} className="hoverline">
                    {site.email}
                  </a>
                </p>
                <p>{site.phones[0]}</p>
                <p className="pt-2">
                  {site.company}
                  <br />
                  {site.address.lines.join(", ")}
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
