import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Field", description: "Field stories from places, encounters and environmental work." };

export default function FieldPage() {
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">FIELD · 02</p>
          <h1 className="mt-6 max-w-6xl font-medium tracking-tight text-ink [font-size:clamp(54px,9vw,126px)] [letter-spacing:-0.055em] [line-height:0.88]">GO OUTSIDE.<br />LOOK CLOSER.</h1>
          <p className="mt-9 max-w-2xl text-xl leading-relaxed text-ink/58">Places change what a question looks like. These are stories from being there — what I saw, what I photographed, and what I learned afterwards.</p>
        </Reveal>
      </header>

      <main className="mx-auto mt-20 max-w-[1800px] md:mt-28 md:px-6">
        <Reveal>
          <article className="border-y border-ink/10 bg-paper">
            <Link href="/field/faroe-islands" className="group grid md:grid-cols-12">
              <div className="overflow-hidden bg-ink md:col-span-7">
                <div className="aspect-[4/3] md:aspect-[16/10]"><img src="/images/odin/gold/storming-beach.webp" alt="A whale hunt on a Faroe beach, photographed by Odin Oddekalv" className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.015]" /></div>
              </div>
              <div className="flex items-center px-6 py-10 md:col-span-5 md:px-12 md:py-14">
                <div className="max-w-lg">
                  <div className="flex items-center gap-4 font-mono text-[0.62rem] uppercase tracking-label"><span className="text-blue">FIELD 001</span><span className="text-ink/35">FAROE ISLANDS · 2022</span></div>
                  <h2 className="mt-6 text-4xl font-medium leading-[0.98] tracking-tight text-ink transition-colors group-hover:text-blue md:text-6xl">Operation: Bloody Fjords × Sea Shepherd</h2>
                  <p className="mt-6 text-base leading-relaxed text-ink/55">A photographic field story from the Faroe Islands — landscape, people, the grindadráp, and what the ecological importance of whales adds to the argument.</p>
                  <p className="mt-8 font-mono text-xs uppercase tracking-label text-ink">Enter →</p>
                </div>
              </div>
            </Link>
          </article>
        </Reveal>
      </main>

      <section className="container-editorial mt-28 md:mt-40">
        <Reveal className="grid gap-10 border-y border-ink/10 py-14 md:grid-cols-12">
          <p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45 md:col-span-4">MORE FIELD STORIES</p>
          <div className="md:col-span-7">
            <p className="text-2xl font-medium leading-snug tracking-tight text-ink md:text-4xl">I will add them when the material is strong enough.</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/56">No placeholder expeditions. A field story belongs here when the photographs, context and writing can carry it properly.</p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
