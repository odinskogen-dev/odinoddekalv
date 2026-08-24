import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Photography",
  description: "The world, as Odin Oddekalv has seen it — a strict authored edit across landscape, life, people, movement and culture.",
};

const photos = [
  { src: "/images/odin/mulafossur.jpg", title: "Múlafossur", note: "Faroe Islands · place" },
  { src: "/images/odin/gold/lofoten-handshake.webp", title: "Lofoten Handshake", note: "Lofoten · human scale" },
  { src: "/images/odin/arctic-white-angel.jpg", title: "Arctic White Angel", note: "Non-human presence" },
  { src: "/images/odin/long-way-home.jpg", title: "The Long Way Home", note: "Passage" },
  { src: "/images/odin/the-future.jpg", title: "The Future", note: "People · action" },
  { src: "/images/odin/hope-4planet.jpg", title: "Hope 4Planet", note: "Possibility" },
  { src: "/images/odin/gold/napoleon.svg", title: "Napoleon", note: "Culture · looking" },
];

function Caption({ index, title, note, light = false }: { index: number; title: string; note: string; light?: boolean }) {
  return (
    <figcaption className={`mt-3 flex items-baseline justify-between gap-4 font-mono text-[0.6rem] uppercase tracking-label ${light ? "text-paper/42" : "text-ink/40"}`}>
      <span>{String(index + 1).padStart(2, "0")} · {title}</span>
      <span>{note}</span>
    </figcaption>
  );
}

function Photo({ index, className = "", aspect = "aspect-[4/3]" }: { index: number; className?: string; aspect?: string }) {
  const photo = photos[index];
  return (
    <figure className={className}>
      <div className={`${aspect} overflow-hidden bg-stone-100`}>
        <img src={photo.src} alt={`${photo.title}, photographed by Odin Oddekalv`} loading={index < 2 ? "eager" : "lazy"} className="h-full w-full object-cover transition-transform duration-700 ease-editorial hover:scale-[1.01]" />
      </div>
      <Caption index={index} title={photo.title} note={photo.note} />
    </figure>
  );
}

export default function PhotographyPage() {
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">PHOTOGRAPHY · SELECTED 07</p>
          <h1 className="mt-6 max-w-6xl font-medium tracking-tight text-ink [font-size:clamp(50px,8vw,112px)] [letter-spacing:-0.052em] [line-height:0.9]">THE WORLD,<br />AS I HAVE SEEN IT.</h1>
          <div className="mt-8 grid gap-7 border-t border-ink/10 pt-7 md:grid-cols-12">
            <p className="max-w-2xl text-xl leading-relaxed text-ink/58 md:col-span-7">Not a complete portfolio. A strict edit of images that do different jobs: establish place, make human scale visible, notice other life, hold a passage, document action and widen the world into culture.</p>
            <p className="font-mono text-[0.62rem] uppercase leading-relaxed tracking-label text-ink/38 md:col-span-4 md:col-start-9">Every photograph in this room was made by Odin Oddekalv. The edit will keep changing as the body of work grows.</p>
          </div>
        </Reveal>
      </header>

      <main className="mx-auto mt-16 max-w-[1800px] px-5 md:mt-24 md:px-6">
        <Reveal>
          <div className="grid gap-x-1 gap-y-16 md:grid-cols-12 md:gap-y-28">
            <Photo index={0} className="md:col-span-8" />
            <Photo index={1} className="md:col-span-4 md:mt-[13vw]" aspect="aspect-[3/4]" />
            <Photo index={2} className="md:col-span-4 md:col-start-2" aspect="aspect-[3/4]" />
            <Photo index={3} className="md:col-span-7 md:col-start-6 md:mt-24" aspect="aspect-[16/10]" />
            <Photo index={4} className="md:col-span-6" />
            <Photo index={5} className="md:col-span-5 md:col-start-8 md:mt-[9vw]" aspect="aspect-[4/5]" />
          </div>
        </Reveal>
      </main>

      <section className="mx-auto mt-24 max-w-[1800px] bg-ink px-5 py-16 text-paper md:mt-40 md:px-6 md:py-24">
        <Reveal className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <figure>
              <div className="aspect-[16/10] overflow-hidden bg-black">
                <img src={photos[6].src} alt="Napoleon, photographed by Odin Oddekalv" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <Caption index={6} title={photos[6].title} note={photos[6].note} light />
            </figure>
          </div>
          <div className="pb-1 md:col-span-3 md:col-start-10">
            <p className="font-mono text-[0.64rem] uppercase tracking-label text-paper/42">The cultural eye</p>
            <p className="mt-5 text-3xl font-medium leading-tight tracking-tight text-paper md:text-4xl">The living world is the subject. Culture is part of how we learn to see it.</p>
          </div>
        </Reveal>
      </section>

      <section className="container-editorial mt-24 md:mt-36">
        <Reveal className="grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-12">
          <div className="md:col-span-3"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">THE CAMERA</p></div>
          <div className="md:col-span-8">
            <p className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">Photography is not evidence that I was there. It is one way I learned to stay long enough to see.</p>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/56">The recurring image I keep finding is not untouched nature. It is relationship: a small human figure in a large place, an animal looking back, weather changing the terms, a road continuing beyond the frame.</p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
