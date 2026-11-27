type Props = {
  from: string;
  to: string;
};

export function SectionDivider({ from, to }: Props) {
  return (
    <div
      className="container-site flex items-center gap-3 py-10 md:py-14"
      aria-hidden
    >
      <span className="label-mono text-faint shrink-0">§{from}</span>
      <span className="h-px flex-1 bg-line relative">
        <span className="absolute left-0 top-1/2 size-[5px] -translate-y-1/2 border border-line-strong" />
        <span className="absolute right-0 top-1/2 size-[5px] -translate-y-1/2 border border-line-strong" />
        <span className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-accent" />
      </span>
      <span className="label-mono text-faint shrink-0">§{to}</span>
    </div>
  );
}
