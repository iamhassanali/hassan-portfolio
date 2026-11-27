"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

function TitleMarquee({
  index,
  reduce,
  className = "",
}: {
  index: number;
  reduce: boolean | null;
  className?: string;
}) {
  const roles = site.roles;
  const role = roles[index % roles.length];

  if (reduce) {
    return <p className={`text-lg text-accent ${className}`}>{roles[0]}</p>;
  }

  return (
    <div
      className={`relative h-[1.6em] overflow-hidden text-lg ${className}`}
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={role}
          className="absolute inset-x-0 text-accent"
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {role}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export function Sidebar() {
  const [active, setActive] = useState<string>("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % site.roles.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [reduce]);

  useEffect(() => {
    const ids = nav.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const panel = (
    <>
      <div>
        <p className="label-mono text-accent">Portfolio</p>
        <h1 className="mt-3 font-display text-[clamp(2.4rem,5vw,3.25rem)] leading-[0.95] tracking-[var(--tracking-display)] text-ink">
          {site.name}
        </h1>
        <TitleMarquee index={roleIndex} reduce={reduce} className="mt-3" />
        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-faint">
          {site.heroLead}
        </p>
      </div>

      <nav className="mt-10 hidden lg:block" aria-label="Section">
        <ul className="space-y-1">
          {nav.map((item, i) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`group flex items-center gap-3 py-2 text-sm transition ${
                    isActive ? "text-ink" : "text-faint hover:text-muted"
                  }`}>
                  <span
                    className={`h-px transition-all duration-300 ${
                      isActive
                        ? "w-10 bg-accent"
                        : "w-5 bg-line-strong group-hover:w-8"
                    }`}
                  />
                  <span className="label-mono tracking-[0.16em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink transition hover:-translate-y-0.5">
          Download resume
        </a>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center border border-line-strong px-4 py-2.5 text-sm text-muted transition hover:border-accent hover:text-accent">
          Email me
        </a>
      </div>

      <div className="mt-8 space-y-2 text-sm text-faint">
        <p>{site.location}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent">
            LinkedIn
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent">
            WhatsApp
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="transition hover:text-accent">
            {site.phone}
          </a>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="font-display text-lg tracking-[var(--tracking-display)]">
              {site.name}
            </p>
            <p className="text-xs text-faint">{site.roles[0]}</p>
          </div>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
            className="border border-line-strong px-3 py-2 text-xs uppercase tracking-[0.14em] text-muted">
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-nav" className="border-t border-line px-4 py-3">
            <ul className="grid grid-cols-2 gap-2">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2 text-sm ${
                      active === item.id ? "text-accent" : "text-muted"
                    }`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Desktop sticky sidebar */}
      <aside className="hidden lg:block lg:w-[var(--sidebar-w)] lg:shrink-0">
        <motion.div
          className="sticky top-0 flex h-screen flex-col justify-between py-16 pr-10"
          initial={reduce ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <div>{panel}</div>
          <p className="label-mono text-faint/70">
            © {new Date().getFullYear()} {site.initials}
          </p>
        </motion.div>
      </aside>

      {/* Mobile identity block (below header) */}
      <div className="border-b border-line px-4 py-10 lg:hidden">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
          {panel}
        </motion.div>
      </div>
    </>
  );
}
