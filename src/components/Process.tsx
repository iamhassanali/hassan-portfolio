import { processSteps } from "@/lib/content";
import { Reveal } from "./Reveal";

const stepIcons = ["⌕", "⌖", "▲"];

export function Process() {
  return (
    <section id="process" className="pb-8 md:pb-12">
      <div className="container-site">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="label-mono text-accent">§04 Process</span>
            <span className="h-px flex-1 max-w-[60%] bg-line" />
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] tracking-[var(--tracking-display)]">
            How I work<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 max-w-[720px] text-[15px] leading-relaxed text-muted sm:text-lg">
            From clarifying requirements with clients to modular architecture,
            integrations, and production releases across iOS and Android.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="relative mb-10 hidden items-center md:flex">
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-accent/40" />
            <div className="relative z-10 flex w-full justify-between">
              {processSteps.map((s) => (
                <span
                  key={s.n}
                  className="size-3 rotate-45 border border-accent bg-bg"
                />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <article className="flex h-full flex-col border border-line bg-surface p-6">
                <div className="flex items-start justify-between">
                  <span className="label-mono text-accent">{step.n}</span>
                  <span className="text-accent" aria-hidden>
                    {stepIcons[i]}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {step.body}
                </p>
                <ul className="mt-auto space-y-2 border-t border-line pt-5">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[12px] tracking-[0.04em] text-muted"
                    >
                      <span className="text-accent">→</span> {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
