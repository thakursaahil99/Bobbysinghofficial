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
        <Container className="mt-10">
          <div className="grid gap-4 md:grid-cols-2">
            {contact.help.map((h, i) => (
              <Reveal key={h.title} delay={(i % 2) * 60}>
                <div className="card lift flex h-full flex-col gap-4 p-8">
                  <span
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl",
                      helpTone[i % helpTone.length],
                    )}
                  >
                    <Icon
                      name={helpIcons[i % helpIcons.length]}
                      className="h-5 w-5"
                    />
                  </span>
                  <h3 className="text-xl text-ink">{h.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-2">{h.body}</p>
                  <ul className="space-y-2 border-t border-line pt-4 text-sm text-ink-2">
                    {h.items.map((it) => (
                      <li key={it} className="flex gap-2.5">
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-red"
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-4 text-xs font-medium uppercase tracking-[0.1em] text-mute">
                    {h.meta}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
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
