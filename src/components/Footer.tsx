import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Magnetic } from "@/components/fx/Magnetic";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-[1400px] px-gutter">
        {/* call to action */}
        <div className="flex flex-col items-start gap-8 border-b border-line py-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow flex items-center gap-3">
              <span className="rule-red" />
              Have a project in mind?
            </p>
            <Link
              href="/contact"
              data-cursor
              className="group mt-5 flex items-center gap-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1] tracking-tight transition-colors hover:text-red"
            >
              Let&apos;s talk.
              <span
                aria-hidden
                className="text-red transition-transform duration-300 group-hover:translate-x-2"
              >
                &rarr;
              </span>
            </Link>
          </div>
          <Magnetic>
            <Link href="/contact" data-cursor className="btn btn-accent">
              Start a conversation
            </Link>
          </Magnetic>
        </div>

        {/* columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mute">
              Sitemap
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-2">
              {nav.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="hoverline">
                    {i.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="hoverline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mute">
              Social
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-2">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hoverline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mute">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hoverline [overflow-wrap:anywhere]"
                >
                  {site.email}
                </a>
              </li>
              {site.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mute">
              Office
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-2">
              {site.company}
              <br />
              {site.address.lines.join(", ")}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-line py-8 text-xs text-mute sm:flex-row">
          <p>© {new Date().getFullYear()} Bobby Singh. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hoverline">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hoverline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
