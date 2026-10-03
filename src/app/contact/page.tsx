import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Accordion } from "@/components/Accordion";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";
import { contact } from "@/content/contact";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Bobby Singh for business coaching, workshops, speaking engagements, partnerships or a contract-catering consultation.",
};

const direct = "grid gap-1";

const helpTone = [
  "bg-red text-white",
  "bg-forest text-cream",
  "bg-gold text-white",
  "bg-plum text-white",
];
const helpIcons = ["mentor", "megaphone", "briefcase", "users"];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker={contact.kicker}
        title={contact.title}
        intro={contact.intro}
        aside={<p className="mt-4 text-sm text-mute">{contact.note}</p>}
      />

      {/* how I can help */}
      <section className="mt-12">
        <SectionHeading
          index="01"
          label="How I can help"
          title="Ways to work together."
        />
        <Container className="mt-12">
          <ol className="border-t border-line">
            {contact.help.map((h, i) => (
              <Reveal
                as="li"
                key={h.title}
                delay={(i % 4) * 60}
                className="grid gap-6 border-b border-line py-9 lg:grid-cols-[auto_1fr_1.1fr] lg:gap-12 lg:py-12"
              >
                <span
                  className={cn(
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl",
                    helpTone[i % helpTone.length],
                  )}
                >
                  <Icon
                    name={helpIcons[i % helpIcons.length]}
                    className="h-6 w-6"
                  />
                </span>
                <div>
                  <p className="font-display text-sm text-mute">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-[clamp(1.4rem,2.6vw,2rem)] text-ink">
                    {h.title}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-ink-2">
                    {h.body}
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-mute">
                    {h.meta}
                  </p>
                </div>
                <ul className="flex flex-wrap content-start gap-2">
                  {h.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm text-ink-2"
                    >
                      <Icon name="check" className="h-3.5 w-3.5 text-red" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* form + direct */}
      <section className="mt-28">
        <SectionHeading index="02" label="Get in touch" title="Send a message." />
        <Container className="mt-12">
          <div className="grid gap-14 [&>*]:min-w-0 lg:grid-cols-[1.5fr_1fr]">
            <Reveal>
              <ContactForm />
            </Reveal>
            <Reveal delay={80} className="flex flex-col gap-8 self-start rounded-[18px] bg-tint p-8">
              <p className="eyebrow flex items-center gap-3">
                <span className="rule-red" />
                Direct
              </p>
              <div className={direct}>
                <span className="text-xs uppercase tracking-[0.12em] text-mute">
                  Email
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="font-display text-xl [overflow-wrap:anywhere] hoverline"
                >
                  {site.email}
                </a>
                <span className="text-xs text-mute">Within 24 hours</span>
              </div>
              <div className={direct}>
                <span className="text-xs uppercase tracking-[0.12em] text-mute">
                  Phone
                </span>
                {site.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="font-display text-xl"
                  >
                    {p}
                  </a>
                ))}
                <span className="text-xs text-mute">{site.hours}</span>
              </div>
              <div className={direct}>
                <span className="text-xs uppercase tracking-[0.12em] text-mute">
                  LinkedIn
                </span>
                <a
                  href={site.socials[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xl hoverline"
                >
                  in/bobby-singh
                </a>
                <span className="text-xs text-mute">Within 48 hours</span>
              </div>
              <div className={direct}>
                <span className="text-xs uppercase tracking-[0.12em] text-mute">
                  Office
                </span>
                <p className="text-sm leading-relaxed text-ink-2">
                  {site.company}
                  <br />
                  {site.address.lines.join(", ")}
                </p>
                <span className="text-xs text-mute">By appointment only</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* faq */}
      <section className="mt-28">
        <SectionHeading index="03" label="Frequently asked" />
        <Container className="mt-10">
          <Accordion items={contact.faqs} />
        </Container>
      </section>
    </>
  );
}
