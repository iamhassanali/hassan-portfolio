import { techStack } from "@/lib/content";
import { Reveal } from "./Reveal";

export function TechStack() {
  return (
    <section id="stack" className="pb-8 md:pb-12">
      <div className="container-site">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="label-mono text-accent">§05 Toolbox</span>
            <span className="h-px flex-1 max-w-[60%] bg-line" />
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] tracking-[var(--tracking-display)]">
            Tech stack<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <ul className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5"
              >
                <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                <span className="font-mono text-[12px] tracking-[0.06em] text-ink">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
