"use client";

import { projects } from "@/lib/content";
import { Reveal } from "./Reveal";

function MiniDiagram({
  hub,
  nodes,
  caption,
  id,
}: {
  hub: string;
  nodes: readonly string[];
  caption: string;
  id: string;
}) {
  const spots = [
    { left: "10%", top: "14%" },
    { left: "58%", top: "12%" },
    { left: "8%", top: "60%" },
    { left: "56%", top: "62%" },
  ];

  return (
    <div className="overflow-hidden border border-line bg-surface/70">
      <div className="relative aspect-[604/558] blueprint-grid sm:aspect-[5/4]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[60px]" />
        <svg
          className="absolute inset-0 size-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          {spots.map((s, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={parseFloat(s.left) + 12}
              y2={parseFloat(s.top) + 8}
              stroke="var(--color-line-strong)"
              strokeWidth="0.35"
            />
          ))}
        </svg>
        <div className="absolute left-1/2 top-1/2 z-10 w-[36%] max-w-[150px] -translate-x-1/2 -translate-y-1/2 border border-accent bg-surface-2/90 p-3">
          <p className="font-display text-sm font-semibold tracking-tight">
            {hub}
          </p>
          <p className="label-mono mt-1 text-accent">core</p>
        </div>
        {nodes.slice(0, 4).map((n, i) => (
          <div
            key={n}
            className="absolute z-10 w-[34%] max-w-[130px] border border-line bg-surface/85 p-2.5"
            style={spots[i]}
          >
            <p className="font-display text-[12px] font-medium leading-snug tracking-tight sm:text-[13px]">
              {n}
            </p>
          </div>
        ))}
        <span className="absolute bottom-3 left-3 label-mono text-faint">
          {nodes.length} nodes
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
        <p className="label-mono truncate text-faint">{caption}</p>
        <p className="label-mono shrink-0 text-accent">PRJ-{id}</p>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="work" className="pb-8 md:pb-12">
      <div className="container-site">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="label-mono text-accent">§03 Case studies</span>
            <span className="h-px flex-1 max-w-[60%] bg-line" />
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] tracking-[var(--tracking-display)]">
            Selected work<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 max-w-[720px] text-[15px] leading-relaxed text-muted sm:text-lg">
            Mobile products across IoT, blockchain, logistics, healthcare, and
            booking — shipped with React Native and production integrations.
          </p>
        </Reveal>

        <div className="mt-14 space-y-20">
          {projects.map((project, index) => (
            <Reveal key={project.id}>
              <article className="border-t border-line pt-12">
                <div className="grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <p
                      className="font-display text-[clamp(4rem,10vw,6.5rem)] leading-none tracking-tight text-transparent [-webkit-text-stroke:1px_var(--color-line-strong)]"
                      aria-hidden
                    >
                      {project.id}
                    </p>
                    <h3 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 label-mono text-accent">
                      {project.domain}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, ti) => (
                        <span
                          key={tag}
                          className={`border px-2.5 py-1 label-mono ${
                            ti === 0
                              ? "border-accent text-accent"
                              : "border-line-strong text-muted"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-[15px] leading-relaxed text-muted">
                      {project.blurb}
                    </p>
                    {project.play && (
                      <p className="mt-4 label-mono text-faint">
                        Google Play: {project.play}
                      </p>
                    )}
                  </div>

                  <div className="lg:col-span-8">
                    <MiniDiagram
                      hub={project.diagram.hub}
                      nodes={project.diagram.nodes}
                      caption={project.diagram.caption}
                      id={project.id}
                    />

                    <dl className="mt-6 space-y-0 border-t border-line">
                      {[
                        ["Problem", project.problem],
                        ["My role", project.role],
                        ["Architecture", project.architecture],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="grid gap-2 border-b border-line py-4 sm:grid-cols-[130px_minmax(0,1fr)]"
                        >
                          <dt className="label-mono text-faint">{label}</dt>
                          <dd className="text-[15px] leading-relaxed text-muted">
                            {value}
                          </dd>
                        </div>
                      ))}
                      <div className="grid gap-2 border-b border-line py-4 sm:grid-cols-[130px_minmax(0,1fr)]">
                        <dt className="label-mono text-faint">Stack</dt>
                        <dd className="flex flex-wrap gap-2">
                          {project.stack.map((s) => (
                            <span
                              key={s}
                              className="border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                            >
                              {s}
                            </span>
                          ))}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                {index < projects.length - 1 ? null : null}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="group flex flex-col justify-between gap-4 border border-line bg-surface px-6 py-8 sm:flex-row sm:items-center sm:px-10">
            <div>
              <p className="label-mono text-faint">
                {String(projects.length).padStart(2, "0")} projects · from the
                resume
              </p>
              <p className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">
                Selected mobile work
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-display text-xl text-accent transition group-hover:gap-3"
            >
              Let&apos;s talk{" "}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
