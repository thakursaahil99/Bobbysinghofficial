"use client";

import { useState } from "react";
import { contact } from "@/content/contact";
import { site } from "@/lib/site";

const field =
  "w-full min-w-0 border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-sm text-ink outline-none transition-colors focus:border-red placeholder:text-mute [color-scheme:dark]";
const labelCls = "font-mono text-[0.68rem] uppercase tracking-[0.14em] text-mute";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Company: ${get("company")}`,
      `Title: ${get("title")}`,
      `Inquiry: ${get("inquiry")}`,
      `Event date: ${get("date")}`,
      `Budget: ${get("budget")}`,
      `Preferred contact: ${get("method")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Website enquiry — ${get("inquiry") || "General"}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-card p-10">
        <p className="font-display text-2xl">Thanks — your email client is open.</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">
          If nothing happened, write to{" "}
          <a href={`mailto:${site.email}`} className="hoverline">
            {site.email}
          </a>{" "}
          directly. Typical response within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn btn-ghost mt-6"
        >
          Back to form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 [&_label]:min-w-0">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className={labelCls}>Full name *</span>
          <input name="name" required className={field} />
        </label>
        <label className="grid gap-2">
          <span className={labelCls}>Email address *</span>
          <input name="email" type="email" required className={field} />
        </label>
        <label className="grid gap-2">
          <span className={labelCls}>Phone number</span>
          <input name="phone" className={field} />
        </label>
        <label className="grid gap-2">
          <span className={labelCls}>Company / organisation</span>
          <input name="company" className={field} />
        </label>
        <label className="grid gap-2">
          <span className={labelCls}>Your title / position</span>
          <input name="title" className={field} />
        </label>
        <label className="grid gap-2">
          <span className={labelCls}>Type of inquiry *</span>
          <select name="inquiry" required defaultValue="" className={field}>
            <option value="" disabled>
              Select inquiry type
            </option>
            {contact.inquiryTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className={labelCls}>Event / meeting date</span>
          <input name="date" type="date" className={field} />
        </label>
        <label className="grid gap-2">
          <span className={labelCls}>Budget range</span>
          <select name="budget" defaultValue="" className={field}>
            <option value="">Select budget range</option>
            {contact.budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2">
        <span className={labelCls}>Message *</span>
        <textarea name="message" required rows={5} className={field} />
      </label>

      <fieldset className="grid gap-3">
        <legend className={labelCls}>Preferred contact method *</legend>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {contact.contactMethods.map((m, i) => (
            <label key={m} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="method"
                value={m}
                required
                defaultChecked={i === 0}
                className="accent-[var(--color-red)]"
              />
              {m}
            </label>
          ))}
        </div>
      </fieldset>

      <button type="submit" className="btn btn-solid mt-2 justify-center sm:w-fit">
        Send message
      </button>
    </form>
  );
}
