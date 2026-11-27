import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-site grid gap-6 py-8 md:grid-cols-3 md:gap-0">
        <div className="md:border-r md:border-line md:pr-6">
          <p className="label-mono text-faint">Drawn by</p>
          <p className="mt-2 text-[15px] text-muted">
            Designed &amp; developed by {site.name} © {year}
          </p>
        </div>
        <div className="md:border-r md:border-line md:px-6">
          <p className="label-mono text-faint">Location</p>
          <p className="mt-2 text-[15px] text-muted">{site.location}</p>
        </div>
        <div className="md:pl-6">
          <p className="label-mono text-faint">Return</p>
          <a
            href="#top"
            className="mt-2 inline-flex items-center gap-2 text-[15px] text-muted transition hover:text-accent"
          >
            Back to top
            <span className="inline-flex size-7 items-center justify-center border border-line-strong text-xs">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
