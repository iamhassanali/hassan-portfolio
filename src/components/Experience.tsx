"use client";

import { education, experience } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="pb-8 md:pb-12">
      <div className="container-site">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="label-mono text-accent">§02 Revision log</span>
            <span className="h-px flex-1 max-w-[60%] bg-line" />
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] tracking-[var(--tracking-display)]">
            Experience<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div className="mb-4 hidden grid-cols-[180px_minmax(0,1fr)_minmax(0,1.1fr)] gap-6 label-mono text-faint md:grid">
            <span>Rev · Date</span>
            <span>Role</span>
            <span>Notes</span>
          </div>

          <ol className="relative space-y-0">
            <span
              className="pointer-events-none absolute top-3 bottom-3 left-[5px] w-px bg-line md:left-[7px]"
              aria-hidden
            />
            {experience.map((job) => (
              <li
                key={job.rev}
                className="relative grid gap-4 border-t border-line py-8 md:grid-cols-[180px_minmax(0,1fr)_minmax(0,1.1fr)] md:gap-6"
              >
                <span
                  className="absolute top-10 left-0 size-2.5 rotate-45 border border-accent bg-bg md:top-11"
                  aria-hidden
                />
                <div className="pl-8 md:pl-10">
                  <p className="label-mono text-accent">Rev {job.rev}</p>
                  <p className="mt-1 font-display text-3xl tracking-tight whitespace-nowrap md:text-[2.5rem]">
                    {job.date}
                  </p>
                  <p className="mt-1 label-mono text-faint">{job.range}</p>
                </div>
                <div className="pl-8 md:pl-0">
                  <h3 className="font-display text-xl tracking-tight md:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-mono text-[13px] text-accent">
                    {job.company}
                  </p>
                  <p className="mt-1 label-mono text-faint">{job.location}</p>
                </div>
                <p className="pl-8 text-[15px] leading-relaxed text-muted md:pl-0">
                  {job.notes}
                </p>
              </li>
            ))}

            <li className="relative grid gap-4 border-t border-line py-8 md:grid-cols-[180px_minmax(0,1fr)_minmax(0,1.1fr)] md:gap-6">
              <span
                className="absolute top-10 left-0 size-2.5 rotate-45 border border-accent bg-bg"
                aria-hidden
              />
              <div className="pl-8 md:pl-10">
                <p className="label-mono text-accent">Education</p>
                <p className="mt-1 font-display text-2xl tracking-tight md:text-3xl">
                  {education.range.slice(0, 4)}–{education.range.slice(-4)}
                </p>
              </div>
              <div className="pl-8 md:pl-0">
                <h3 className="font-display text-xl tracking-tight md:text-2xl">
                  {education.degree}
                </h3>
                <p className="mt-1 font-mono text-[13px] text-accent">
                  {education.school}
                </p>
                <p className="mt-1 label-mono text-faint">
                  {education.location} · {education.range}
                </p>
              </div>
              <p className="pl-8 text-[15px] leading-relaxed text-muted md:pl-0">
                {education.degree} · {education.school}
              </p>
            </li>
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
