import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Press / Bio",
  description: "Verified short bio, current work, selected portrait and contact for Odin Oddekalv.",
};

export default function PressPage() {
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">PRESS / BIO</p>
          <h1 className="mt-6 max-w-6xl font-medium tracking-tight text-ink [font-size:clamp(52px,8.5vw,120px)] [letter-spacing:-0.055em] [line-height:0.88]">ODIN<br />ODDEKALV<span className="text-blue">_</span></h1>
          <p className="mt-9 max-w-2xl text-xl leading-relaxed text-ink/58">The short, factual version for journalists, collaborators, talks and institutional use.</p>
        </Reveal>
      </header>

      <main className="container-editorial mt-16 md:mt-24">
        <Reveal className="grid gap-10 md:grid-cols-12 md:items-start">
          <figure className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-stone-100"><img src="/images/odin/odin-field.jpg" alt="Odin Oddekalv in the field" className="h-full w-full object-cover" /></div>
            <figcaption className="mt-3 font-mono text-[0.62rem] uppercase tracking-label text-ink/38">Selected portrait · ODIN_ archive</figcaption>
          </figure>
          <div className="md:col-span-6 md:col-start-7">
            <p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">SHORT BIO</p>
            <p className="mt-6 text-2xl font-medium leading-snug tracking-tight text-ink md:text-4xl">Odin Oddekalv is a Norwegian founder, photographer and storyteller working across nature, culture and systems.</p>
            <p className="mt-7 text-lg leading-relaxed text-ink/60">He is the founder of 4PLANET, a living-planet intelligence and action system in development, and works through photography, writing and field projects to explore how humans can thrive without weakening the living systems we depend on.</p>
            <p className="mt-5 text-lg leading-relaxed text-ink/60">His environmental origin is personal as well as professional: he grew up close to the work of his father, Norwegian environmental activist Kurt Oddekalv. The current work is not continuation by imitation, but an attempt to translate responsibility into a different generation, language and set of tools.</p>
          </div>
        </Reveal>

        <Reveal className="mt-20 border-t border-ink/10 md:mt-28">
          <div className="grid gap-8 border-b border-ink/10 py-8 md:grid-cols-12"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45 md:col-span-3">CURRENT WORK</p><div className="md:col-span-8 md:col-start-5"><p className="text-xl leading-relaxed text-ink/70">4PLANET_ · living-planet intelligence / action<br />P4NTHER_ · cultural layer<br />ODIN_ · photography / writing / field stories</p></div></div>
          <div className="grid gap-8 border-b border-ink/10 py-8 md:grid-cols-12"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45 md:col-span-3">PUBLIC THEMES</p><div className="md:col-span-8 md:col-start-5"><p className="text-xl leading-relaxed text-ink/70">Living systems · ecological action · nature and culture · storytelling · environmental inheritance · technology for understanding nature · building 4PLANET</p></div></div>
          <div className="grid gap-8 border-b border-ink/10 py-8 md:grid-cols-12"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45 md:col-span-3">CONTACT</p><div className="md:col-span-8 md:col-start-5"><a href="mailto:odin@4planet.org" className="text-2xl font-medium tracking-tight text-ink link-underline hover:text-blue">odin@4planet.org</a></div></div>
        </Reveal>
      </main>

      <section className="container-editorial mt-20 md:mt-28"><Reveal className="max-w-3xl"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">PRESS RULE</p><p className="mt-6 text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">Use the shortest accurate version that serves the story.</p><p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/58">No inflated founder labels. No borrowed authority from family history. The work should carry the weight.</p></Reveal></section>
    </div>
  );
}
