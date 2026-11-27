"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="pb-16 md:pb-20">
      <Reveal>
        <p className="label-mono text-accent">02 — Experience</p>
        <h2 className="section-title mt-3">Where I&apos;ve worked</h2>
      </Reveal>

      <ol className="mt-10 space-y-0">
        {experience.map((job, index) => (
          <Reveal key={`${job.company}-${job.range}`} delay={index * 0.05}>
            <li className="group relative border-t border-line py-8 last:border-b">
              <div className="grid gap-4 md:grid-cols-[9.5rem_1fr] md:gap-8">
                <p className="label-mono pt-1 text-faint">{job.range}</p>
                <div>
                  <h3 className="text-lg font-medium text-ink sm:text-xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-[15px] text-accent">
                    {job.company}
                    <span className="text-faint"> · {job.location}</span>
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((bullet, i) => (
                      <motion.li
                        key={bullet}
                        className="flex gap-3 text-[15px] leading-relaxed text-muted"
                        initial={reduce ? false : { opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-5% 0px" }}
                        transition={{
                          delay: 0.08 + i * 0.06,
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <span
                          className="mt-2 size-1 shrink-0 rounded-full bg-accent/80"
                          aria-hidden
                        />
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
