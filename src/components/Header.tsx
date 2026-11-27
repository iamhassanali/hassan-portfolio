"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export function Header() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-16 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? "border-line bg-bg/85 backdrop-blur-md"
            : "border-transparent bg-bg/60 backdrop-blur-sm"
        }`}
      >
        <div className="container-site flex h-full items-center justify-between gap-4">
          <a
            href="#top"
            className="relative flex size-9 items-center justify-center border border-line-strong bg-surface font-mono text-[11px] font-medium tracking-widest text-ink"
            aria-label={`${site.name} home`}
          >
            {site.initials}
            <span className="absolute -bottom-px -right-px size-[5px] bg-accent" />
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="hidden items-center gap-2 text-faint transition-colors hover:text-ink md:inline-flex"
            title="Copy email"
          >
            <span className="font-mono text-[11px] tracking-[0.08em]">
              {site.email}
            </span>
            <span className="label-mono text-accent">
              {copied ? "COPIED" : "⎘"}
            </span>
          </button>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {nav.map((item, i) => {
              const current = active === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="group label-mono relative pb-1 text-muted transition-colors hover:text-ink"
                  aria-current={current ? "true" : undefined}
                >
                  <span className="text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>{" "}
                  <span className={current ? "text-ink" : undefined}>
                    {item.label}
                  </span>
                  <span
                    className={`absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 ${
                      current ? "scale-x-100" : ""
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="flex size-9 items-center justify-center border border-line-strong md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-4 bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-4 bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-xl md:hidden">
          <div className="container-site flex h-16 items-center justify-between">
            <span className="relative flex size-9 items-center justify-center border border-line-strong font-mono text-[11px]">
              {site.initials}
              <span className="absolute -bottom-px -right-px size-[5px] bg-accent" />
            </span>
            <button
              type="button"
              className="size-9 border border-line-strong"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
          <nav className="container-site mt-10 flex flex-col" aria-label="Mobile">
            {nav.map((item, i) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-line py-5"
              >
                <span className="label-mono text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-4xl tracking-[var(--tracking-display)]">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
          <div className="container-site mt-10 space-y-4">
            <button
              type="button"
              onClick={copyEmail}
              className="label-mono text-muted"
            >
              {site.email} · {copied ? "COPIED" : "COPY"}
            </button>
            <div className="flex gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex size-10 items-center justify-center border border-line-strong text-sm"
              >
                in
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex size-10 items-center justify-center border border-line-strong text-sm"
              >
                wa
              </a>
            </div>
            <a
              href={site.resumeUrl}
              className="inline-flex items-center gap-2 border border-accent px-4 py-2.5 label-mono text-accent"
            >
              Resume ↓
            </a>
          </div>
        </div>
      )}
    </>
  );
}
