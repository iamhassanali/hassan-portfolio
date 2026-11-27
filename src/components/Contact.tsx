"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent("Portfolio enquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="pb-8 md:pb-12">
      <Reveal>
        <p className="label-mono text-accent">06 — Contact</p>
        <h2 className="section-title mt-3">Let&apos;s talk</h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
          Building a mobile product, need React Native help, or want to
          collaborate? Reach out — I usually reply within a day.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition hover:-translate-y-0.5"
            >
              {site.email}
            </a>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="border border-line-strong px-4 py-2.5 text-sm text-muted transition hover:border-accent hover:text-accent"
              >
                {copied ? "Copied" : "Copy email"}
              </button>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-line-strong px-4 py-2.5 text-sm text-muted transition hover:border-accent hover:text-accent"
              >
                WhatsApp
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-line-strong px-4 py-2.5 text-sm text-muted transition hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-sm text-faint">
              {site.phone} · {site.location}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="label-mono text-faint">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="mt-2 w-full border border-line bg-surface px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-faint focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="label-mono text-faint">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full border border-line bg-surface px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-faint focus:border-accent"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="label-mono text-faint">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-2 w-full resize-y border border-line bg-surface px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-faint focus:border-accent"
                placeholder="What are you building?"
              />
            </div>
            <button
              type="submit"
              className="bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition hover:-translate-y-0.5"
            >
              {sent ? "Opening mail…" : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
