"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { getLenis } from "@/components/fx/SmoothScroll";
import { site } from "@/lib/site";

const STORAGE_KEY = "bs-lead-popup-seen";
const DELAY_MS = 3000;

const field =
  "w-full rounded-[10px] border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-red placeholder:text-mute";
const labelCls =
  "text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-mute";

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // open once per session, 3s after load
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (seen) return;
    const t = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  // scroll lock + esc + focus while open
  useEffect(() => {
    if (!open) return;
    const lenis = getLenis();
    lenis?.stop();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const focusT = setTimeout(() => firstFieldRef.current?.focus(), 120);
    return () => {
      lenis?.start();
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      clearTimeout(focusT);
    };
  }, [open, close]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Website enquiry",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={close}
            aria-hidden
            data-cursor-invert
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-popup-title"
            className="relative w-full max-w-[440px] overflow-hidden rounded-[20px] border border-line bg-card p-7 shadow-[var(--shadow-lift)] sm:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              data-cursor
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink"
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-3.5 w-3.5">
                <path
                  d="M3 3l10 10M13 3L3 13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {sent ? (
              <div className="py-4">
                <p className="font-display text-xl text-ink">
                  Thanks — your email is ready to send.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">
                  If nothing opened, write to{" "}
                  <a href={`mailto:${site.email}`} className="hoverline text-ink">
                    {site.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="btn btn-solid mt-6 w-full justify-center"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <p className="eyebrow flex items-center gap-3">
                  <span className="rule-red" />
                  Get in touch
                </p>
                <h2
                  id="lead-popup-title"
                  className="display mt-3 text-[1.6rem] text-ink"
                >
                  Talk to Bobby&apos;s team.
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  Leave your details and we&apos;ll get back within 24 hours.
                </p>
                <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                  <label className="grid gap-1.5">
                    <span className={labelCls}>Full name *</span>
                    <input
                      ref={firstFieldRef}
                      name="name"
                      required
                      className={field}
                    />
                  </label>
                  <label className="grid gap-1.5">
                    <span className={labelCls}>Email *</span>
                    <input
                      name="email"
                      type="email"
                      required
                      className={field}
                    />
                  </label>
                  <label className="grid gap-1.5">
                    <span className={labelCls}>Phone</span>
                    <input name="phone" className={field} />
                  </label>
                  <label className="grid gap-1.5">
                    <span className={labelCls}>Message *</span>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      className={field}
                    />
                  </label>
                  <button
                    type="submit"
                    data-cursor
                    className="btn btn-accent mt-1 w-full justify-center"
                  >
                    Send message
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
