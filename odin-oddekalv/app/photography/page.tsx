import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TypeLabel from "@/components/TypeLabel";

export const metadata: Metadata = {
  title: "Photography",
  description: "Selected photographs by Odin Oddekalv — field, people and the living world.",
};

const photos = [
  { src: "/images/odin/mulafossur.jpg", title: "Múlafossur", note: "Faroe Islands" },
  { src: "/images/odin/arctic-white-angel.jpg", title: "Arctic White Angel", note: "Field archive" },
  { src: "/images/odin/long-way-home.jpg", title: "The Long Way Home", note: "Field archive" },
  { src: "/images/odin/the-future.jpg", title: "The Future", note: "People / action" },
  { src: "/images/odin/hope-4planet.jpg", title: "Hope 4Planet", note: "People / action" },
];

export default function PhotographyPage() {
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <TypeLabel index="03" accent>Photography</TypeLabel>
          <h1 className="mt-5 max-w-5xl text-display-lg font-medium tracking-tight text-ink">The world, as I have seen it.</h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-ink/60">A tightly edited selection from the field archive. Every photograph on this page was made by Odin Oddekalv.</p>
        </Reveal>
      </header>

      <main className="mx-auto mt-20 max-w-[1800px] md:mt-28 md:px-6">
        <div className="space-y-24 md:space-y-36">
          {photos.map((photo, index) => (
            <Reveal key={photo.src}>
              <figure className={index % 2 === 0 ? "md:pr-[12vw]" : "md:pl-[12vw]"}>
                <div className="overflow-hidden bg-ink">
                  <img src={photo.src} alt={`${photo.title}, photographed by Odin Oddekalv`} className="block h-auto w-full" />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-6 px-5 font-mono text-[0.65rem] uppercase tracking-label text-ink/45 md:px-0">
                  <span>{String(index + 1).padStart(2, "0")} · {photo.title}</span>
                  <span>{photo.note}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </main>

      <section className="container-editorial mt-28 border-t border-ink/10 pt-12 md:mt-40">
        <div className="grid gap-8 md:grid-cols-12">
          <p className="font-mono text-xs uppercase tracking-label text-ink/45 md:col-span-4">Visual rule</p>
          <p className="max-w-xl text-xl leading-relaxed text-ink/70 md:col-span-7">Across this universe, images are either photographs I made or photographs of me. No stock world. No invented documentary record.</p>
        </div>
      </section>
    </div>
  );
}
