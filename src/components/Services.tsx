"use client";

import { useState } from "react";
import { about, services } from "@/lib/content";
import { Reveal } from "./Reveal";

const icons = ["</>", "⌘", "▣"];

export function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="about" className="pb-8 md:pb-12">
      <div className="container-site">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="label-mono text-accent">§01 {about.sectionLabel}</span>
            <span className="h-px flex-1 max-w-[60%] bg-line" />
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] tracking-[var(--tracking-display)]">
            {about.heading}
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-6 max-w-[720px] text-[15px] leading-relaxed text-muted sm:text-lg">
            {about.body}
          </p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
          {services.map((svc, i) => {
            const expanded = open === i;
            return (
              <Reveal key={svc.code} delay={i * 0.08}>
                <article className="flex h-full flex-col border border-line bg-surface">
                  <div className="flex items-center justify-between border-b border-line px-4 py-2">
                    <span className="label-mono text-faint">
                      |——— {String(i + 1).padStart(2, "0")} ———|
                    </span>
                    <span className="label-mono text-faint">{svc.code}</span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex size-10 items-center justify-center border border-accent text-accent">
                      {icons[i]}
                    </div>
                    <h3 className="mt-5 font-display text-[1.75rem] leading-tight tracking-tight">
                      {svc.title}
                    </h3>
                    <p className="mt-2 font-mono text-[12px] tracking-[0.04em] text-accent">
                      {svc.subtitle}
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted">
                      {svc.body}
                    </p>

                    <div className="mt-auto pt-6">
                      <div className="flex items-center justify-between border-t border-line pt-4">
                        <span className="label-mono text-faint">
                          Skillset & tools ({String(svc.tools.length).padStart(2, "0")})
                        </span>
                        <button
                          type="button"
                          aria-expanded={expanded}
                          onClick={() => setOpen(expanded ? null : i)}
                          className="flex size-7 items-center justify-center border border-line-strong text-ink transition hover:border-accent hover:text-accent"
                        >
                          {expanded ? "×" : "+"}
                        </button>
                      </div>
                      {expanded && (
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {svc.tools.map((tool) => (
                            <li
                              key={tool}
                              className="border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                            >
                              {tool}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 border-t border-line text-center">
                    <span className="label-mono border-r border-line py-2.5 text-faint">
                      Sheet {String(i + 1).padStart(2, "0")}/03
                    </span>
                    <span className="label-mono border-r border-line py-2.5 text-faint">
                      Scale 1:1
                    </span>
                    <span className="label-mono py-2.5 text-faint">Rev. A</span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
