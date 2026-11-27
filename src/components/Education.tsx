import { education } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="pb-16 md:pb-20">
      <Reveal>
        <p className="label-mono text-accent">05 — Education</p>
        <h2 className="section-title mt-3">Education</h2>
        <div className="mt-8 border-y border-line py-6">
          <div className="grid gap-2 md:grid-cols-[9.5rem_1fr] md:gap-8">
            <p className="label-mono text-faint">{education.range}</p>
            <div>
              <h3 className="text-lg font-medium text-ink">
                {education.degree}
              </h3>
              <p className="mt-1 text-[15px] text-muted">
                {education.school}
                <span className="text-faint"> · {education.location}</span>
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
