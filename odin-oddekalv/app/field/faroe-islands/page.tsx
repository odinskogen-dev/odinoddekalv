import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Field 001 — Faroe Islands / Whales",
  description: "A field story from the Faroe Islands: landscape, witnessing a whale hunt, and the ecological role of whales.",
};

function Source({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="link-underline text-ink hover:text-blue">{children}</a>;
}

function Caption({ children }: { children: React.ReactNode }) {
  return <figcaption className="container-editorial mt-3 font-mono text-[0.62rem] uppercase tracking-label text-ink/38">{children}</figcaption>;
}

export default function FaroeFieldPage() {
  return (
    <article className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.67rem] uppercase tracking-label text-ink/45"><span className="text-blue">FIELD 001</span><span>FAROE ISLANDS · 2022</span><span>WHALES / WITNESS</span></div>
          <h1 className="mt-7 max-w-6xl font-medium tracking-tight text-ink [font-size:clamp(48px,8vw,112px)] [letter-spacing:-0.052em] [line-height:0.9]">MORE WHALES,<br />NOT FEWER.</h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink/58">I went to the Faroe Islands with a camera. I came home with a harder question about beauty, belonging, tradition and the lives we choose to protect.</p>
        </Reveal>
      </header>

      <Reveal className="mx-auto mt-16 max-w-[1800px] md:mt-24 md:px-6"><figure><div className="aspect-[4/3] overflow-hidden md:aspect-[2.05/1]"><img src="/images/odin/mulafossur.jpg" alt="Múlafossur in the Faroe Islands, photographed by Odin Oddekalv" className="h-full w-full object-cover" /></div><Caption>Múlafossur · Faroe Islands · Photograph by Odin Oddekalv</Caption></figure></Reveal>

      <section className="container-editorial mt-24 md:mt-36"><Reveal className="grid gap-10 md:grid-cols-12"><div className="md:col-span-3"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">ARRIVAL</p></div><div className="md:col-span-7"><p className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">A place can be beautiful without being simple.</p><div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink/62"><p>The first thing the islands did was overwhelm the frame. Cliffs, weather, grass, roads and small settlements make human scale feel temporary.</p><p>That matters to what came later. I do not want to flatten the Faroe Islands into a single controversial event. People live here. Traditions belong to communities. Landscapes hold memory.</p><p>And none of that removes the animal from the story.</p></div></div></Reveal></section>

      <Reveal className="mx-auto mt-20 max-w-[1800px] md:mt-32 md:px-6"><figure><div className="aspect-[4/3] overflow-hidden md:aspect-[2.05/1]"><img src="/images/odin/gold/volcanic-void.webp" alt="A small figure in a volcanic Faroe landscape, photographed by Odin Oddekalv" className="h-full w-full object-cover" /></div><Caption>Volcanic Void · Faroe Islands · Photograph by Odin Oddekalv</Caption></figure></Reveal>

      <section className="container-editorial mt-24 md:mt-36"><Reveal className="grid gap-10 md:grid-cols-12"><div className="md:col-span-3"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">WITNESS</p></div><div className="prose-editorial md:col-span-7"><p>In 2022 I witnessed a whale hunt. The archive contains people, landscape and images that are much harder to look at.</p><p>I do not want graphic photographs to do the thinking for us. Shock can make an image impossible to ignore and still leave the larger question untouched.</p><p>My own conclusion is not neutral: I want oceans with more whales in them, not fewer.</p></div></Reveal></section>

      <Reveal className="mx-auto mt-20 max-w-[1800px] md:mt-32 md:px-6"><div className="grid gap-px bg-ink/10 md:grid-cols-2"><figure className="bg-paper"><div className="aspect-[4/3] overflow-hidden"><img src="/images/odin/long-way-home.jpg" alt="Figures moving through a remote landscape, photographed by Odin Oddekalv" className="h-full w-full object-cover" /></div></figure><figure className="bg-paper"><div className="aspect-[4/3] overflow-hidden"><img src="/images/odin/faroe-field-walk.jpg" alt="Odin moving through a Faroe field landscape" className="h-full w-full object-cover" /></div></figure></div></Reveal>

      <section className="container-editorial mt-24 md:mt-36"><Reveal className="grid gap-10 md:grid-cols-12"><div className="md:col-span-3"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">WHAT SCIENCE ADDS</p></div><div className="md:col-span-7"><p className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">A whale is not only an animal in an ocean. It is part of what the ocean does.</p><div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/62"><p>Research has shown that marine mammals can recycle nutrients toward sunlit surface waters, where those nutrients can support primary productivity. The process is often described as the <em>whale pump</em>.</p><p>More recent work shows that different cetacean communities move and recycle different nutrient mixtures, making whales active participants in nutrient movement rather than only top predators.</p><p>NOAA also describes several pathways through which whales participate in carbon cycling: carbon stored in their bodies, whale falls at the seafloor and nutrient transport that can support phytoplankton. The exact global magnitude remains an active research question; the ecological role should not be reduced to one dramatic carbon number.</p></div><div className="mt-10 border-t border-ink/10 pt-6 font-mono text-[0.67rem] uppercase leading-loose tracking-label text-ink/50"><p>RESEARCH 01 · <Source href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0013255">Roman & McCarthy — The Whale Pump, PLOS ONE</Source></p><p>RESEARCH 02 · <Source href="https://www.nature.com/articles/s41467-023-41532-y">Nature Communications — cetaceans and nutrient cycling</Source></p><p>RESEARCH 03 · <Source href="https://www.fisheries.noaa.gov/feature-story/whales-and-carbon-sequestration-can-whales-store-carbon">NOAA Fisheries — whales and carbon sequestration</Source></p></div></div></Reveal></section>

      <section className="mx-auto mt-24 max-w-[1800px] bg-ink text-paper md:mt-40"><div className="container-editorial grid min-h-[70svh] items-center gap-12 py-20 md:grid-cols-12 md:py-28"><Reveal className="md:col-span-4"><p className="font-mono text-[0.67rem] uppercase tracking-label text-paper/45">THE RETURN</p></Reveal><Reveal className="md:col-span-7 md:col-start-6"><p className="text-4xl font-medium leading-[0.98] tracking-tight text-paper md:text-6xl">The landscape, the people and the whale belong in the same frame.</p><p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/58">That is the part I keep returning to. Ecological questions become less abstract when species are understood through relationships — with habitats, food, culture, economics and one another. The argument gets harder. It also gets more useful.</p></Reveal></div></section>

      <section className="container-editorial mt-24 md:mt-36"><Reveal className="grid gap-10 border-y border-ink/10 py-14 md:grid-cols-12"><div className="md:col-span-3"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">FIELD NOTE</p></div><div className="md:col-span-7"><p className="text-2xl font-medium leading-snug tracking-tight text-ink md:text-4xl">Witness first. Research second. Action only after both.</p><p className="mt-6 max-w-xl text-base leading-relaxed text-ink/55">The most graphic part of the 2022 archive remains outside this public edit. It should only appear where the context is strong enough to carry it without turning violence into decoration.</p><div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-label"><Link href="/photography" className="link-underline">Photography</Link><Link href="/field" className="link-underline">All field notes</Link><a href="https://4planet.org" target="_blank" rel="noreferrer" className="link-underline">4PLANET →</a></div></div></Reveal></section>
    </article>
  );
}
