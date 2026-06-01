import Media from "@/components/Media";
import TypeLabel from "@/components/TypeLabel";
import { indexLabel } from "@/lib/utils";
import type { Expedition } from "@/lib/types";

export default function ExpeditionCard({
  expedition,
  i = 0,
}: {
  expedition: Expedition;
  i?: number;
}) {
  return (
    <article className="group">
      <Media
        src={expedition.images[0]}
        alt={expedition.title}
        className="aspect-[3/2] w-full"
        imgClassName="group-hover:scale-[1.03]"
      />
      <div className="mt-5">
        <div className="flex items-center gap-3">
          <TypeLabel index={indexLabel(i)} accent>
            {expedition.theme}
          </TypeLabel>
          <span className="font-mono text-[0.7rem] uppercase tracking-label text-ink/40">
            {expedition.year}
          </span>
        </div>
        <h3 className="mt-3 text-2xl font-medium tracking-tight text-ink">
          {expedition.title}
        </h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-label text-ink/45">
          {expedition.location}
        </p>
        <p className="mt-3 max-w-md leading-relaxed text-ink/65">
          {expedition.description}
        </p>
      </div>
    </article>
  );
}
