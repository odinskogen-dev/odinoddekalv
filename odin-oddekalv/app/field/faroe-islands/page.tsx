import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Operation: Bloody Fjords × Sea Shepherd",
  description: "A photographic field story from Sea Shepherd's Operation Bloody Fjords in the Faroe Islands, 2022.",
};

function Source({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="link-underline text-ink hover:text-blue">{children}</a>;
}

function Caption({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <figcaption className={`mt-3 font-mono text-[0.62rem] uppercase tracking-label ${light ? "text-paper/38" : "text-ink/38"}`}>{children}</figcaption>;
}

function FullImage({ src, alt, caption, position = "object-center" }: { src: string; alt: string; caption: string; position?: string }) {
  return (
    <Reveal className="mx-auto mt-20 max-w-[1800px] md:mt-32 md:px-6">
      <figure>
        <div className="overflow-hidden bg-stone-100"><img src={src} alt={alt} loading="lazy" className={`block h-auto w-full ${position}`} /></div>
        <div className="container-editorial md:px-0"><Caption>{caption}</Caption></div>
      </figure>
    </Reveal>
  );
}

export default function FaroeFieldPage() {
  return (
    <article className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.67rem] uppercase tracking-label text-ink/45"><span className="text-blue">FIELD 001</span><span>FAROE ISLANDS · 2022</span><span>SEA SHEPHERD</span></div>
          <h1 className="mt-7 max-w-6xl font-medium tracking-tight text-ink [font-size:clamp(44px,7vw,102px)] [letter-spacing:-0.052em] [line-height:0.9]">OPERATION:<br />BLOODY FJORDS<br /><span className="text-blue">× SEA SHEPHERD</span></h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink/58">In 2022 I joined Sea Shepherd's Faroe Islands campaign with a camera. The assignment was simple to describe and much harder to experience: document what happens when the grindadráp reaches the shore.</p>
        </Reveal>
      </header>

      <Reveal className="mx-auto mt-16 max-w-[1800px] md:mt-24 md:px-6">
        <figure><img src="/images/odin/mulafossur.jpg" alt="Múlafossur in the Faroe Islands, photographed by Odin Oddekalv" className="block h-auto w-full" /><div className="container-editorial md:px-0"><Caption>Múlafossur · Faroe Islands · Photograph by Odin Oddekalv</Caption></div></figure>
      </Reveal>

      <section className="container-editorial mt-24 md:mt-36">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">ARRIVAL</p></div>
          <div className="md:col-span-7"><p className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">A place can be beautiful without being simple.</p><div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink/62"><p>The islands are dramatic before anything happens: cliffs, weather, grass, villages and open water. Human scale feels temporary.</p><p>That matters because I do not want to flatten the Faroe Islands into one event. People live here. Traditions have histories. Landscapes hold memory.</p><p>And none of that removes the animal from the story.</p></div></div>
        </Reveal>
      </section>

      <Reveal className="mx-auto mt-20 max-w-[1800px] px-5 md:mt-32 md:px-6">
        <div className="grid gap-1 md:grid-cols-12">
          <figure className="md:col-span-7"><img src="/images/odin/gold/village-life.webp" alt="A village in the Faroe Islands, photographed by Odin Oddekalv" className="block h-auto w-full" /><Caption>Village life · Faroe Islands · 2022</Caption></figure>
          <figure className="md:col-span-5 md:mt-24"><img src="/images/odin/gold/volcanic-void.webp" alt="A small figure in a Faroe landscape, photographed by Odin Oddekalv" className="block h-auto w-full" /><Caption>Scale · Faroe Islands · 2022</Caption></figure>
        </div>
      </Reveal>

      <section className="container-editorial mt-24 md:mt-36">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">THE OPERATION</p></div>
          <div className="md:col-span-7"><p className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">The job was to witness, document and make the event harder to look away from.</p><div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink/62"><p>Operation Bloody Fjords is Sea Shepherd's campaign against the hunting of pilot whales and dolphins in the Faroe Islands. By 2022, the campaign relied heavily on land-based volunteers and media teams documenting the hunts.</p><p>I was there as a photographer. The photographs below are part of that record.</p></div><p className="mt-8 font-mono text-[0.66rem] uppercase leading-relaxed tracking-label text-ink/42">CONTENT NOTE · The following section contains documentary photographs of dead and injured cetaceans.</p></div>
        </Reveal>
      </section>

      <FullImage src="/images/odin/gold/we-will-tell.webp" alt="People gathering along a Faroe shoreline during a grindadráp, photographed by Odin Oddekalv" caption="The shoreline · Operation Bloody Fjords · 2022" />

      <Reveal className="mx-auto mt-20 max-w-[1800px] px-5 md:mt-32 md:px-6">
        <div className="grid gap-1 md:grid-cols-2">
          <figure><img src="/images/odin/gold/the-grind.webp" alt="A grindadráp shoreline in the Faroe Islands, photographed by Odin Oddekalv" className="block h-auto w-full" /><Caption>The grind · Faroe Islands · 2022</Caption></figure>
          <figure><img src="/images/odin/gold/storming-beach.webp" alt="Pilot whales and people on a Faroe beach during a grindadráp, photographed by Odin Oddekalv" className="block h-auto w-full" /><Caption>After the drive · Faroe Islands · 2022</Caption></figure>
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-20 max-w-[1800px] px-5 md:mt-32 md:px-6">
        <div className="grid gap-1 md:grid-cols-12 md:items-start">
          <figure className="md:col-span-7"><img src="/images/odin/gold/not-all-tradition.webp" alt="Pilot whales at the waterline during a grindadráp, photographed by Odin Oddekalv" className="block h-auto w-full" /><Caption>At the waterline · Faroe Islands · 2022</Caption></figure>
          <figure className="md:col-span-5 md:mt-24"><img src="/images/odin/gold/end-whaling.webp" alt="Close documentary photograph of a pilot whale, photographed by Odin Oddekalv" className="block h-auto w-full" /><Caption>Pilot whale · Faroe Islands · 2022</Caption></figure>
        </div>
      </Reveal>

      <FullImage src="/images/odin/gold/tears-and-flowers.webp" alt="A Faroe shoreline after a whale hunt, photographed by Odin Oddekalv" caption="The shoreline after the hunt · Faroe Islands · 2022" />

      <section className="container-editorial mt-24 md:mt-36">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">WHAT IT LEFT ME WITH</p></div>
          <div className="prose-editorial md:col-span-7"><p>Graphic photographs are powerful, but they can also make the violence do all the thinking for us.</p><p>My conclusion is clear: I want oceans with more whales in them, not fewer. The harder question is why that matters beyond the individual animal.</p></div>
        </Reveal>
      </section>

      <section className="container-editorial mt-24 md:mt-36">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">WHAT SCIENCE ADDS</p></div>
          <div className="md:col-span-7"><p className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">A whale is not only an animal in an ocean. It is part of what the ocean does.</p><div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/62"><p>Research has shown that marine mammals can recycle nutrients toward sunlit surface waters, where those nutrients can support primary productivity. The process is often described as the <em>whale pump</em>.</p><p>More recent work shows that cetaceans can move and recycle nutrient mixtures through marine systems. NOAA also describes several pathways through which whales participate in carbon cycling, including carbon stored in their bodies, whale falls and nutrient transport that can support phytoplankton.</p><p>The exact global magnitude is still being studied. I think the important point is simpler: whales are participants in living ocean systems, not isolated objects moving through them.</p></div><div className="mt-10 border-t border-ink/10 pt-6 font-mono text-[0.67rem] uppercase leading-loose tracking-label text-ink/50"><p>CAMPAIGN · <Source href="https://www.seashepherdglobal.org/latest-news/14th-faroes-campaign/">Sea Shepherd — 2022 Faroe Islands campaign</Source></p><p>RESEARCH 01 · <Source href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0013255">Roman & McCarthy — The Whale Pump, PLOS ONE</Source></p><p>RESEARCH 02 · <Source href="https://www.nature.com/articles/s41467-023-41532-y">Nature Communications — cetaceans and nutrient cycling</Source></p><p>RESEARCH 03 · <Source href="https://www.fisheries.noaa.gov/feature-story/whales-and-carbon-sequestration-can-whales-store-carbon">NOAA Fisheries — whales and carbon sequestration</Source></p></div></div>
        </Reveal>
      </section>

      <section className="mx-auto mt-24 max-w-[1800px] bg-ink text-paper md:mt-40">
        <div className="container-editorial grid min-h-[62svh] items-center gap-12 py-20 md:grid-cols-12 md:py-28"><Reveal className="md:col-span-4"><p className="font-mono text-[0.67rem] uppercase tracking-label text-paper/45">THE RETURN</p></Reveal><Reveal className="md:col-span-7 md:col-start-6"><p className="text-4xl font-medium leading-[0.98] tracking-tight text-paper md:text-6xl">The landscape, the people and the whale belong in the same frame.</p><p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/58">Ecological questions become less abstract when species are understood through relationships — with habitats, food, culture, economics and one another. That does not make the argument easier. It makes it more complete.</p></Reveal></div>
      </section>

      <section className="container-editorial mt-24 md:mt-36">
        <Reveal className="grid gap-10 border-y border-ink/10 py-14 md:grid-cols-12"><div className="md:col-span-3"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">FIELD NOTE</p></div><div className="md:col-span-7"><p className="text-2xl font-medium leading-snug tracking-tight text-ink md:text-4xl">See what happened. Then ask what it means.</p><p className="mt-6 max-w-xl text-base leading-relaxed text-ink/55">That is the standard I want for field work on this site: photographs first, context around them, research where claims need it, and room to change my mind when better evidence arrives.</p><div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-label"><Link href="/photography" className="link-underline">Photography</Link><Link href="/field" className="link-underline">All field notes</Link><a href="https://4planet.org" target="_blank" rel="noreferrer" className="link-underline">4PLANET →</a></div></div></Reveal>
      </section>
    </article>
  );
}
