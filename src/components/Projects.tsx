"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="pb-16 md:pb-20">
      <Reveal>
        <p className="label-mono text-accent">03 — Projects</p>
        <h2 className="section-title mt-3">Selected work</h2>
        <p className="mt-3 max-w-xl text-[15px] text-muted">
          Expand a project for problem, role, architecture, and stack.
        </p>
      </Reveal>

      <ul className="mt-10 divide-y divide-line border-y border-line">
        {projects.map((project, index) => {
          const open = openId === project.id;
          return (
            <Reveal key={project.id} delay={index * 0.04}>
              <li>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() =>
                    setOpenId((current) =>
                      current === project.id ? null : project.id,
                    )
                  }
                  className="flex w-full items-start justify-between gap-4 py-5 text-left transition hover:bg-accent-dim/40"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="label-mono text-faint">
                        {project.id}
                      </span>
                      <h3 className="text-lg font-medium text-ink sm:text-xl">
                        {project.name}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-faint">{project.domain}</p>
                    {!open && (
                      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
                        {project.blurb}
                      </p>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-line-strong px-2 py-0.5 text-xs text-faint"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    className={`mt-1 shrink-0 label-mono text-accent transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="detail"
                      initial={
                        reduce ? false : { height: 0, opacity: 0 }
                      }
                      animate={{ height: "auto", opacity: 1 }}
                      exit={
                        reduce
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-5 pb-6 pr-2 sm:pr-10">
                        <Detail label="Problem" body={project.problem} />
                        <Detail label="My role" body={project.role} />
                        <Detail
                          label="Architecture"
                          body={project.architecture}
                        />
                        <div>
                          <p className="label-mono text-faint">Stack</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                              <span
                                key={item}
                                className="bg-surface-2 px-2.5 py-1 text-xs text-muted"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        {project.playStore && (
                          <a
                            href={project.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 border border-line-strong px-3 py-2 text-sm text-muted transition hover:border-accent hover:text-accent"
                          >
                            View on Play Store
                            <span aria-hidden>↗</span>
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

function Detail({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="label-mono text-faint">{label}</p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{body}</p>
    </div>
  );
}
