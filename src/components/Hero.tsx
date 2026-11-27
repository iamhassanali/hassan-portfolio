"use client";

import { useEffect, useState } from "react";
import { heroDiagrams, site } from "@/lib/content";

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = site.roles[index % site.roles.length];
    const speed = deleting ? 28 : 55;

    if (!deleting && text === full) {
      const pause = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(pause);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % site.roles.length);
      return;
    }

    const t = setTimeout(() => {
      setText(
        deleting
          ? full.slice(0, Math.max(0, text.length - 1))
          : full.slice(0, text.length + 1),
      );
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <p className="mt-5 font-mono text-[13px] tracking-[0.04em]">
      <span className="text-faint">role: </span>
      <span className="text-accent">{text}</span>
      <span
        className="ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.18em] bg-accent align-baseline animate-caret"
        aria-hidden
      />
    </p>
  );
}

function SystemDiagram({ figIndex }: { figIndex: number }) {
  const fig = heroDiagrams[figIndex % heroDiagrams.length];
  const positions = [
    { x: 18, y: 22 },
    { x: 68, y: 18 },
    { x: 16, y: 68 },
    { x: 70, y: 72 },
  ];

  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden border border-line bg-surface/60 blueprint-grid">
      <div className="pointer-events-none absolute -left-[15vw] -top-[18vh] size-[60vh] rounded-full bg-slate-glow/30 blur-[100px] animate-drift-a" />
      <div className="pointer-events-none absolute -right-[12vw] -bottom-[25vh] size-[70vh] rounded-full bg-accent/10 blur-[90px] animate-drift-b" />

      <div className="absolute left-3 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] label-mono text-faint sm:block">
        3 TIERS · 5 NODES
      </div>

      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {positions.map((p, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={p.x + 10}
            y2={p.y + 6}
            stroke="var(--color-line-strong)"
            strokeWidth="0.35"
          />
        ))}
        {positions.map((p, i) => (
          <circle
            key={`dot-${i}`}
            r="0.7"
            fill="var(--color-accent)"
            opacity="0.85"
          >
            <animateMotion
              dur={`${2.8 + i * 0.4}s`}
              repeatCount="indefinite"
              path={`M50,50 L${p.x + 10},${p.y + 6}`}
            />
          </circle>
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 w-[min(42%,160px)] -translate-x-1/2 -translate-y-1/2 border border-accent bg-surface-2/90 p-3 shadow-[0_0_12px_var(--color-accent)]">
        <p className="font-display text-sm tracking-tight text-ink sm:text-base">
          {fig.hub}
        </p>
        <p className="label-mono mt-1 text-accent">hub</p>
      </div>

      {fig.nodes.map((node, i) => (
        <div
          key={node.id}
          className="absolute z-10 w-[min(38%,140px)] border border-line bg-surface/80 p-2.5 backdrop-blur-sm sm:p-3"
          style={{
            left: `${positions[i].x}%`,
            top: `${positions[i].y}%`,
          }}
        >
          <p className="font-display text-[13px] leading-tight tracking-tight text-ink sm:text-sm">
            {node.label}
          </p>
          <p className="label-mono mt-1 text-faint">{node.sub}</p>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  const [fig, setFig] = useState(0);
  const current = heroDiagrams[fig % heroDiagrams.length];

  return (
    <section
      id="top"
      className="relative min-h-[100svh] pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="font-display text-2xl text-muted sm:text-3xl">
            Hi, I&apos;m
          </p>
          <h1 className="mt-2 font-display text-[clamp(3.75rem,15vw,9.5rem)] font-semibold leading-[0.86] tracking-[var(--tracking-display)] text-ink">
            Hassan
            <br />
            Ali<span className="text-accent">.</span>
          </h1>

          <div className="mt-6 flex max-w-[660px] items-center gap-3">
            <span className="h-px w-3 bg-line-strong" />
            <p className="label-mono flex-1 text-center text-faint">
              Idea → Architecture → Production
            </p>
            <span className="h-px w-3 bg-line-strong" />
          </div>

          <Typewriter />

          <p className="mt-6 max-w-[560px] text-[15px] leading-relaxed text-muted sm:text-lg">
            {site.heroLead}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_var(--color-accent-dim),0_12px_40px_-8px_var(--color-accent)]"
            >
              <span aria-hidden>▣</span> Book a call
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 border border-line-strong px-5 py-3 text-sm text-ink transition hover:border-ink"
            >
              See my work{" "}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 label-mono text-accent transition hover:underline"
          >
            Chat on WhatsApp ↗
          </a>
        </div>

        <div className="lg:col-span-6 xl:col-span-6">
          <SystemDiagram figIndex={fig} />
          <div className="mt-3 flex items-center justify-between gap-4">
            <p className="label-mono text-faint">
              FIG. {current.fig} — {current.title}
            </p>
            <button
              type="button"
              onClick={() => setFig((f) => (f + 1) % heroDiagrams.length)}
              className="label-mono text-muted transition hover:text-accent"
            >
              ↻ Next system
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="label-mono text-faint">Scroll</span>
        <span className="h-8 w-px bg-accent animate-scroll-cue" />
      </div>
    </section>
  );
}
