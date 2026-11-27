import { site } from "@/lib/content";

export function SideRails() {
  return (
    <>
      <aside
        className="pointer-events-none fixed bottom-8 left-5 z-40 hidden flex-col items-center gap-4 lg:flex"
        aria-label="Social links"
      >
        <span className="mb-1 size-1.5 rotate-45 border border-accent" />
        <span className="h-10 w-px bg-line-strong" />
        <div className="pointer-events-auto flex flex-col items-center gap-3">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-mono text-muted transition-colors hover:text-accent"
            title="LinkedIn"
          >
            in
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-mono text-muted transition-colors hover:text-accent"
            title="WhatsApp"
          >
            wa
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-[11px] font-mono text-muted transition-colors hover:text-accent"
            title="Email"
          >
            @
          </a>
        </div>
      </aside>

      <aside className="pointer-events-none fixed bottom-8 right-5 z-40 hidden lg:block">
        <a
          href={site.resumeUrl}
          className="pointer-events-auto label-mono inline-flex items-center gap-2 text-muted transition-colors hover:text-accent [writing-mode:vertical-rl]"
        >
          Resume{" "}
          <span className="text-accent" aria-hidden>
            ↓
          </span>
        </a>
      </aside>
    </>
  );
}
