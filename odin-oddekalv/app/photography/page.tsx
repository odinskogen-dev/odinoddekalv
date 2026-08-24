import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Photography",
  description: "The world, as Odin Oddekalv has seen it — an authored photographic edit across landscape, life, people, movement and culture.",
};

const photos = [
  { src: "/images/odin/mulafossur.jpg", title: "Múlafossur", note: "Faroe Islands" },
  { src: "/images/odin/gold/volcanic-void.webp", title: "Volcanic Void", note: "Faroe Islands" },
  { src: "/images/odin/gold/samuel.webp", title: "Samuel", note: "People" },
  { src: "/images/odin/gold/im-hungry.webp", title: "I’m Hungry", note: "Other life" },
  { src: "/images/odin/gold/girson-nmg.webp", title: "Girson NMG", note: "Culture" },
  { src: "/images/odin/gold/unstad-arctic-surf.webp", title: "Unstad Arctic Surf", note: "Lofoten" },
  { src: "/images/odin/gold/snohette.webp", title: "Snøhette", note: "Field" },
  { src: "/images/odin/gold/village-life.webp", title: "Village Life", note: "Faroe Islands" },
  { src: "/images/odin/gold/seacabin.webp", title: "Sea Cabin", note: "North" },
  { src: "/images/odin/gold/lofoten-mid-summer.webp", title: "Mid-Summer", note: "Lofoten" },
  { src: "/images/odin/gold/lofoten-handshake.webp", title: "Lofoten Handshake", note: "People" },
  { src: "/images/odin/gold/napoleon.webp", title: "Napoleon", note: "Culture" },
  { src: "/images/odin/arctic-white-angel.jpg", title: "Arctic White Angel", note: "Living" },
  { src: "/images/odin/long-way-home.jpg", title: "The Long Way Home", note: "Passage" },
  { src: "/images/odin/gold/aksel-canggu.webp", title: "Canggu", note: "Night / culture" },
];

function Caption({ index, title, note }: { index: number; title: string; note: string }) {
  return <figcaption className="mt-3 flex items-baseline justify-between gap-4 font-mono text-[0.6rem] uppercase tracking-label text-ink/40"><span>{String(index + 1).padStart(2, "0")} · {title}</span><span>{note}</span></figcaption>;
}

function Photo({ index, className = "" }: { index: number; className?: string }) {
  const photo = photos[index];
  return <figure className={className}><div className="overflow-hidden bg-stone-100"><img src={photo.src} alt={`${photo.title}, photographed by Odin Oddekalv`} loading={index < 2 ? "eager" : "lazy"} className="block h-auto w-full transition-transform duration-700 ease-editorial hover:scale-[1.006]" /></div><Caption index={index} title={photo.title} note={photo.note} /></figure>;
}

export default function PhotographyPage() {
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">PHOTOGRAPHY · SELECTED 15</p>
          <h1 className="mt-6 max-w-6xl font-medium tracking-tight text-ink [font-size:clamp(50px,8vw,112px)] [letter-spacing:-0.052em] [line-height:0.9]">THE WORLD,<br />AS I HAVE SEEN IT.</h1>
          <div className="mt-8 grid gap-7 border-t border-ink/10 pt-7 md:grid-cols-12">
            <p className="max-w-2xl text-xl leading-relaxed text-ink/58 md:col-span-7">Places, people, animals, weather, action and culture. A small selection from a much larger archive.</p>
            <p className="font-mono text-[0.62rem] uppercase leading-relaxed tracking-label text-ink/38 md:col-span-4 md:col-start-9">Every photograph in this room was made by Odin Oddekalv.</p>
          </div>
        </Reveal>
      </header>

      <main className="mx-auto mt-16 max-w-[1800px] px-5 md:mt-24 md:px-6">
        <Reveal><div className="grid gap-x-1 gap-y-16 md:grid-cols-12 md:gap-y-28">
          <Photo index={0} className="md:col-span-8" />
          <Photo index={1} className="md:col-span-4 md:mt-28" />
          <Photo index={2} className="md:col-span-5 md:col-start-2" />
          <Photo index={3} className="md:col-span-5 md:col-start-7 md:mt-20" />
          <Photo index={4} className="md:col-span-7" />
          <Photo index={5} className="md:col-span-5 md:mt-24" />
          <Photo index={6} className="md:col-span-5 md:col-start-2" />
          <Photo index={7} className="md:col-span-6 md:col-start-7 md:mt-16" />
          <Photo index={8} className="md:col-span-7" />
          <Photo index={9} className="md:col-span-5 md:mt-24" />
          <Photo index={10} className="md:col-span-5 md:col-start-2" />
          <Photo index={11} className="md:col-span-6 md:col-start-7 md:mt-20" />
          <Photo index={12} className="md:col-span-5" />
          <Photo index={13} className="md:col-span-7 md:mt-20" />
          <Photo index={14} className="md:col-span-6 md:col-start-4" />
        </div></Reveal>
      </main>

      <section className="container-editorial mt-24 md:mt-36">
        <Reveal className="grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-12">
          <div className="md:col-span-3"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">THE CAMERA</p></div>
          <div className="md:col-span-8"><p className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">Photography taught me to look longer.</p><p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/56">The images I return to are rarely about untouched nature. They are about relationship: a person becoming small in a landscape, an animal looking back, weather changing the terms, culture colliding with place.</p></div>
        </Reveal>
      </section>
    </div>
  );
}
