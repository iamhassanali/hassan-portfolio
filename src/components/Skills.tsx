import { skillGroups } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="pb-16 md:pb-20">
      <Reveal>
        <p className="label-mono text-accent">04 — Skills</p>
        <h2 className="section-title mt-3">Tools &amp; stack</h2>
      </Reveal>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 0.06}>
            <div>
              <h3 className="label-mono text-faint">{group.label}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-2.5 py-1.5 text-sm text-muted transition hover:border-accent/50 hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
