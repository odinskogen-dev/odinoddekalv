import Reveal from "@/components/Reveal";
import type { TimelineEntry } from "@/lib/types";

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative border-l border-ink/15">
      {entries.map((e, i) => (
        <Reveal as="li" key={i} delay={i * 0.04} className="relative pl-8 pb-10 last:pb-0">
          <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-blue bg-paper" />
          <span className="absolute -left-[3.5px] top-[9px] h-1.5 w-1.5 rounded-full bg-blue" />
          <p className="font-mono text-xs uppercase tracking-label text-blue">{e.year}</p>
          <h3 className="mt-2 text-xl font-medium tracking-tight text-ink">{e.title}</h3>
          <p className="mt-2 max-w-xl leading-relaxed text-ink/65">{e.description}</p>
        </Reveal>
      ))}
    </ol>
  );
}
