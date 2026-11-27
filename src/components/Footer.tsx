import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-line pt-8 pb-4 lg:hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-faint">
        <p>
          © {year} {site.name}
        </p>
        <a href="#about" className="transition hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
