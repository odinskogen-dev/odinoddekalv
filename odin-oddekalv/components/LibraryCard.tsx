import type { LibraryItem } from "@/lib/types";

export default function LibraryCard({ item }: { item: LibraryItem }) {
  return (
    <article className="group border-t border-ink/10 py-6 transition-colors hover:border-blue">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium tracking-tight text-ink">
          {item.title}
        </h3>
        <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-label text-ink/40">
          {item.type}
        </span>
      </div>
      <p className="mt-1 font-mono text-xs uppercase tracking-label text-blue/80">
        {item.creator}
      </p>
      <p className="mt-3 leading-relaxed text-ink/65">{item.note}</p>
    </article>
  );
}
