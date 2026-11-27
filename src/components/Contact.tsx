"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";
import { Reveal } from "./Reveal";

const needs = [
  "Mobile app",
  "React Native build",
  "API integrations",
  "AI / realtime voice",
  "Something else",
] as const;

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [need, setNeed] = useState<(typeof needs)[number]>("Mobile app");
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
    const subject = encodeURIComponent(`Portfolio enquiry — ${need}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nNeed: ${need}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="pb-16 md:pb-24">
      <div className="container-site">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="label-mono text-accent">§06 Contact</span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <h2 className="mt-4 font-display text-[clamp(3.5rem,12vw,10.5rem)] leading-[0.86] tracking-[var(--tracking-display)]">
            Let&apos;s build
            <br />
            <span className="text-accent">something</span>
            <span className="text-ink">.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="max-w-md text-[15px] leading-relaxed text-muted sm:text-lg">
              Tell me what you&apos;re building — a mobile product, an
              integration, or a feature that needs to ship.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition hover:-translate-y-0.5"
            >
              Book a call
            </a>
            <p className="mt-3 label-mono text-faint">
              Reach out by email or WhatsApp
            </p>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 label-mono text-accent"
            >
              Chat on WhatsApp ↗
            </a>

            <div className="mt-10 space-y-6 border-t border-line pt-8">
              <div>
                <p className="label-mono text-faint">Email</p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-display text-xl tracking-tight sm:text-2xl"
                  >
                    {site.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="size-9 border border-line-strong label-mono text-faint transition hover:border-accent hover:text-accent"
                    aria-label="Copy email"
                  >
                    {copied ? "✓" : "⎘"}
                  </button>
                </div>
              </div>

              <div className="border-t border-line pt-6">
                <p className="label-mono text-faint">Location</p>
                <p className="mt-2 font-display text-xl tracking-tight">
                  {site.location}
                </p>
              </div>

              <div className="border-t border-line pt-6">
                <p className="label-mono text-faint">Elsewhere</p>
                <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-line py-2 font-mono text-[13px] text-muted transition hover:text-accent"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-line py-2 font-mono text-[13px] text-muted transition hover:text-accent"
                  >
                    WhatsApp ↗
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="border-b border-line py-2 font-mono text-[13px] text-muted transition hover:text-accent"
                  >
                    Phone ↗
                  </a>
                  <a
                    href={site.resumeUrl}
                    className="border-b border-line py-2 font-mono text-[13px] text-muted transition hover:text-accent"
                  >
                    Resume ↓
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="border border-line bg-surface"
              noValidate
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="label-mono text-faint">
                  Project enquiry ····· Form 01
                </span>
              </div>

              <div className="space-y-8 p-5 sm:p-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <label className="block">
                    <span className="label-mono text-faint">01 Name</span>
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-2 w-full border-0 border-b border-line bg-transparent py-2 text-ink outline-none transition focus:border-accent"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="label-mono text-faint">02 Email</span>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-2 w-full border-0 border-b border-line bg-transparent py-2 text-ink outline-none transition focus:border-accent"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>

                <fieldset>
                  <legend className="label-mono text-faint">
                    03 What do you need?
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {needs.map((item) => {
                      const active = need === item;
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setNeed(item)}
                          className={`border px-3 py-2 font-mono text-[11px] tracking-[0.06em] transition ${
                            active
                              ? "border-accent bg-accent text-accent-ink"
                              : "border-line-strong text-muted hover:border-accent hover:text-accent"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="label-mono text-faint">04 Message</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="mt-2 w-full resize-y border-0 border-b border-line bg-transparent py-2 text-ink outline-none transition focus:border-accent"
                    placeholder="A short note about the product or problem."
                  />
                </label>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="label-mono text-faint">
                    {sent
                      ? "Opening your email client…"
                      : "Replies go to the email you enter."}
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition hover:-translate-y-0.5"
                  >
                    Send message →
                  </button>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
