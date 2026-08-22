import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Photography", description: "The world, as Odin Oddekalv has seen it — a strict edit from the photographic archive." };

const photos = [
  { src: "/images/odin/mulafossur.jpg", title: "Múlafossur", note: "Faroe Islands" },
  { src: "/images/odin/arctic-white-angel.jpg", title: "Arctic White Angel", note: "Living" },
  { src: "/images/odin/long-way-home.jpg", title: "The Long Way Home", note: "Field / passage" },
  { src: "/images/odin/the-future.jpg", title: "The Future", note: "People / action" },
];

function Caption({ index, title, note }: { index: number; title: string; note: string }) {
  return <figcaption className="mt-3 flex items-baseline justify-between gap-4 font-mono text-[0.6rem] uppercase tracking-label text-ink/40"><span>{String(index + 1).padStart(2, "0")} · {title}</span><span>{note}</span></figcaption>;
}

export default function PhotographyPage() {
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">PHOTOGRAPHY · SELECTED 04</p>
          <h1 className="mt-6 max-w-6xl font-medium tracking-tight text-ink [font-size:clamp(50px,8vw,112px)] [letter-spacing:-0.052em] [line-height:0.9]">THE WORLD,<br />AS I HAVE SEEN IT.</h1>
          <div className="mt-8 grid gap-6 border-t border-ink/10 pt-7 md:grid-cols-12">
            <p className="max-w-2xl text-xl leading-relaxed text-ink/58 md:col-span-7">Not a complete portfolio. Four images with different jobs: place, non-human presence, passage and human action.</p>
            <p className="font-mono text-[0.62rem] uppercase leading-relaxed tracking-label text-ink/38 md:col-span-4 md:col-start-9">Every photograph in this room was made by Odin Oddekalv.</p>
          </div>
        </Reveal>
      </header>

      <main className="mx-auto mt-16 max-w-[1800px] px-5 md:mt-24 md:px-6">
        <Reveal>
          <div className="grid gap-x-1 gap-y-12 md:grid-cols-12 md:gap-y-20">
            <figure className="md:col-span-8"><div className="aspect-[4/3] overflow-hidden bg-stone-100"><img src={photos[0].src} alt={`${photos[0].title}, photographed by Odin Oddekalv`} className="h-full w-full object-cover" /></div><Caption index={0} title={photos[0].title} note={photos[0].note} /></figure>
            <figure className="md:col-span-4 md:mt-[16vw]"><div className="aspect-[3/4] overflow-hidden bg-stone-100"><img src={photos[1].src} alt={`${photos[1].title}, photographed by Odin Oddekalv`} className="h-full w-full object-cover" /></div><Caption index={1} title={photos[1].title} note={photos[1].note} /></figure>
            <figure className="md:col-span-5 md:col-start-2"><div className="aspect-[4/5] overflow-hidden bg-stone-100"><img src={photos[2].src} alt={`${photos[2].title}, photographed by Odin Oddekalv`} className="h-full w-full object-cover" /></div><Caption index={2} title={photos[2].title} note={photos[2].note} /></figure>
            <figure className="md:col-span-6 md:col-start-7 md:mt-20"><div className="aspect-[4/3] overflow-hidden bg-stone-100"><img src={photos[3].src} alt={`${photos[3].title}, photographed by Odin Oddekalv`} className="h-full w-full object-cover" /></div><Caption index={3} title={photos[3].title} note={photos[3].note} /></figure>
          </div>
        </Reveal>
      </main>

      <section className="container-editorial mt-24 md:mt-32">
        <Reveal className="grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-12">
          <div className="md:col-span-3"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">THE CAMERA</p></div>
          <div className="md:col-span-8"><p className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">Photography is not evidence that I was there. It is one way I learned to stay long enough to see.</p></div>
        </Reveal>
      </section>
    </div>
  );
}
