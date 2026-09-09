"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Magnetic } from "@/components/fx/Magnetic";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems = nav as NavItem[];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // homepage hero is dark — ride on top of it transparent until the user scrolls
  const onDark = pathname === "/" && !scrolled && !open;

  return (
    <header
      data-cursor-invert={onDark || undefined}
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        onDark
          ? "border-transparent bg-ink text-cream"
          : scrolled || open
            ? "border-line bg-paper/90 text-ink backdrop-blur-md"
            : "border-transparent bg-paper text-ink",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-gutter">
        <Link href="/" className="flex shrink-0 flex-col gap-1 leading-none">
          <span className="whitespace-nowrap font-display text-[1.05rem] font-semibold leading-none tracking-tight">
            Bobby Singh
          </span>
          <span
            className={cn(
              "hidden whitespace-nowrap text-[0.6rem] font-medium uppercase leading-none tracking-[0.11em] sm:block",
              onDark ? "text-cream/55" : "text-mute",
            )}
          >
            {site.kicker}
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  "relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  onDark
                    ? isActive(item.href)
                      ? "text-cream"
                      : "text-cream/65 hover:text-cream"
                    : isActive(item.href)
                      ? "text-ink"
                      : "text-ink-2 hover:text-ink",
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-red" />
                )}
                {item.children && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    className="mt-0.5 text-mute"
                    aria-hidden
                  >
                    <path
                      d="M2 3.5L5 6.5L8 3.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </Link>

              {item.children && (
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="card min-w-[220px] overflow-hidden p-1.5 shadow-[var(--shadow-card)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-[10px] px-3 py-2 text-sm text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Magnetic>
              <Link
                href="/contact"
                data-cursor
                className={cn("btn", onDark ? "btn-accent" : "btn-solid")}
              >
                Get in touch
              </Link>
            </Magnetic>
          </div>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border lg:hidden",
              onDark ? "border-cream/30" : "border-line",
            )}
          >
            <span className="relative flex h-3 w-4 flex-col justify-between">
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-transform duration-300",
                  open && "translate-y-[5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-opacity duration-300",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-transform duration-300",
                  open && "-translate-y-[5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* mobile panel */}
      <div
        className={cn(
          "overflow-hidden border-t border-line bg-paper transition-[max-height] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          open ? "max-h-[80vh]" : "max-h-0 border-t-transparent",
        )}
      >
        <nav className="flex flex-col gap-1 px-gutter py-5">
          {[{ label: "Home", href: "/" } as NavItem, ...navItems].map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "block py-2.5 text-lg font-medium",
                  isActive(item.href) ? "text-ink" : "text-ink-2",
                )}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="mb-1 ml-3 flex flex-col border-l border-line pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="py-1.5 text-sm text-ink-2"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="btn btn-solid mt-4 w-full">
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
