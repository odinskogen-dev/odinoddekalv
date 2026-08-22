import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Photography",
  description: "The world, as Odin Oddekalv has seen it — a strict edit from the photographic archive.",
};

const photos = [
  { src: "/images/odin/universe03/storms-end.jpg", title: "Storms End", note: "Place / weather" },
  { src: "/images/odin/arctic-white-angel.jpg", title: "Arctic White Angel", note: "Living" },
  { src: "/images/odin/universe03/im-hungry.jpg", title: "I’m hungry", note: "Living / relation" },
  { src: "/images/odin/universe03/samuel.jpg", title: "Samuel", note: "Place / figure" },
  { src: "/images/odin/mulafossur.jpg", title: "Múlafossur", note: "Faroe Islands" },
  { src: "/images/odin/universe03/lofoten-handshake.jpg", title: "Lofoten Handshake", note: "Human / coast" },
  { src: "/images/odin/universe03/moonwalk.jpg", title: "Moonwalk", note: "Open ending" },
  { src: "/images/odin/long-way-home.jpg", title: "The Long Way Home", note: "Field / passage" },
  { src: "/images/odin/universe03/village-life.jpg", title: "Village Life", note: "Human scale / place" },
];

export default function PhotographyPage() {
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">PHOTOGRAPHY · 03</p>
          <h1 className="mt-6 max-w-6xl font-medium tracking-tight text-ink [font-size:clamp(50px,8vw,112px)] [letter-spacing:-0.052em] [line-height:0.9]">THE WORLD,<br />AS I HAVE SEEN IT.</h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink/58">Not a complete portfolio. A strict edit of images that changed, clarified or complicated the way I look at the living world.</p>
          <p className="mt-5 font-mono text-[0.64rem] uppercase tracking-label text-ink/38">Every photograph in this room was made by Odin Oddekalv.</p>
        </Reveal>
      </header>

      <main className="mx-auto mt-20 max-w-[1800px] md:mt-28 md:px-6">
        <div className="space-y-24 md:space-y-40">
          {photos.map((photo, index) => (
            <Reveal key={photo.src}>
              <figure className={index % 3 === 1 ? "md:pl-[15vw]" : index % 3 === 2 ? "md:pr-[18vw]" : ""}>
                <div className="overflow-hidden bg-stone-100"><img src={photo.src} alt={`${photo.title}, photographed by Odin Oddekalv`} loading="lazy" className="block h-auto w-full" /></div>
                <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-3 px-5 font-mono text-[0.62rem] uppercase tracking-label text-ink/42 md:px-0">
                  <span>{String(index + 1).padStart(2, "0")} · {photo.title}</span><span>{photo.note}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </main>

      <section className="container-editorial mt-28 md:mt-44">
        <Reveal className="grid gap-10 border-y border-ink/10 py-14 md:grid-cols-12 md:py-18">
          <div className="md:col-span-4"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">THE CAMERA</p></div>
          <div className="md:col-span-7">
            <p className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">Photography is not evidence that I was there. It is one way I learned to stay long enough to see.</p>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/58">The archive moves between living beings, people, coastlines, pressure, absurdity, culture and moments that resist a clean conclusion.</p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
