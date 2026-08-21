import type { Metadata } from "next";
import Timeline from "@/components/Timeline";
import TypeLabel from "@/components/TypeLabel";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { getTimeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Story",
  description: "The story behind Odin Oddekalv — origin, responsibility, field work and the attempt to build for a living world.",
};

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={`block h-full w-full object-cover ${className}`} />;
}

export default function StoryPage() {
  const timeline = getTimeline();
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <TypeLabel index="02" accent>Story</TypeLabel>
          <h1 className="mt-5 max-w-5xl text-display-lg font-medium tracking-tight text-ink">Some people inherit businesses. Some inherit money. Some inherit questions.</h1>
          <p className="mt-8 max-w-3xl font-mono text-[0.68rem] uppercase leading-relaxed tracking-label text-ink/45">LOVE → THREAT → LOSS / RESPONSIBILITY → BUILD → TOGETHER</p>
        </Reveal>
      </header>

      <Reveal className="mx-auto mt-16 max-w-[1800px] md:mt-24 md:px-6">
        <figure>
          <div className="aspect-[16/9] overflow-hidden bg-ink md:aspect-[2/1]"><Photo src="/images/odin/faroe-field-walk.jpg" alt="Odin Oddekalv walking through a remote northern landscape" /></div>
          <figcaption className="container-editorial mt-3 font-mono text-[0.65rem] uppercase tracking-label text-ink/40">Field archive · ODIN_</figcaption>
        </figure>
      </Reveal>

      <section className="container-editorial mt-24 md:mt-32">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3"><p className="font-mono text-xs uppercase tracking-label text-ink/45">01 · LOVE</p></div>
          <div className="prose-editorial md:col-span-7">
            <p>I grew up close to coast, forest, weather and water. Nature was not something we travelled to see. It was the world around us.</p>
            <p>My father, Kurt Oddekalv, built his life around environmental action. I grew up close to that work too — the urgency, the conflict, the conviction that protecting nature required more than agreement.</p>
            <p>Before there was a mission, there was attachment.</p>
          </div>
        </Reveal>
      </section>

      <section className="container-editorial mt-24 md:mt-32">
        <Reveal className="grid gap-5 md:grid-cols-12">
          <figure className="md:col-span-8"><div className="aspect-[4/3] overflow-hidden"><Photo src="/images/odin/mulafossur.jpg" alt="Múlafossur, photographed by Odin Oddekalv" /></div><figcaption className="mt-3 font-mono text-[0.65rem] uppercase tracking-label text-ink/40">Múlafossur · Photograph by Odin Oddekalv</figcaption></figure>
          <div className="flex items-end md:col-span-4 md:pb-12 md:pl-8"><div><p className="font-mono text-xs uppercase tracking-label text-ink/45">02 · THREAT</p><p className="mt-5 text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">Love changes when you begin to see what can be lost.</p></div></div>
        </Reveal>
      </section>

      <section className="mx-auto mt-24 max-w-[1800px] bg-ink text-paper md:mt-36">
        <div className="grid md:grid-cols-12">
          <Reveal className="md:col-span-7"><div className="h-full min-h-[58svh]"><Photo src="/images/odin/faroe-portrait-02.jpg" alt="Odin Oddekalv in the field" /></div></Reveal>
          <Reveal className="flex items-center px-6 py-20 md:col-span-5 md:px-14 md:py-24">
            <div className="max-w-md">
              <p className="font-mono text-xs uppercase tracking-label text-paper/45">03 · LOSS / RESPONSIBILITY</p>
              <p className="mt-6 text-3xl font-medium leading-tight tracking-tight text-paper md:text-4xl">Loss did not give me an answer.</p>
              <p className="mt-5 text-lg leading-relaxed text-paper/60">It made the question impossible to ignore.</p>
              <blockquote className="mt-10 border-l border-blue pl-6 text-xl leading-relaxed text-paper/80">How do we secure the future of our species without destroying the living world we depend on?</blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial mt-24 md:mt-36">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3"><p className="font-mono text-xs uppercase tracking-label text-ink/45">04 · BUILD</p></div>
          <div className="prose-editorial md:col-span-7">
            <p>For a long time, environmental work mostly meant fighting what was going wrong. That fight matters.</p>
            <p>But the question that began to interest me more was harder: <strong>what do we build instead?</strong></p>
            <p>That direction now runs through 4PLANET, the main work, and P4NTHER, the cultural layer — alongside photography, writing and field work.</p>
          </div>
        </Reveal>
      </section>

      <Reveal className="mx-auto mt-24 max-w-[1800px] md:mt-36 md:px-6">
        <div className="aspect-[16/9] overflow-hidden bg-ink md:aspect-[2.1/1]"><Photo src="/images/odin/long-way-home.jpg" alt="Figures moving through a remote landscape, photographed by Odin Oddekalv" /></div>
      </Reveal>

      <section className="container-editorial mt-28">
        <TypeLabel accent>The path</TypeLabel>
        <h2 className="mb-12 mt-5 text-display-md font-medium tracking-tight text-ink">A question, followed.</h2>
        <Timeline entries={timeline} />
      </section>

      <section className="container-editorial mt-28 md:mt-36">
        <Reveal className="grid gap-10 border-y border-ink/10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4"><p className="font-mono text-xs uppercase tracking-label text-ink/45">05 · TOGETHER</p></div>
          <div className="md:col-span-8">
            <p className="max-w-3xl text-display-md font-medium tracking-tight text-ink">The story cannot end with one person.</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60">The work only matters if it becomes useful to other people, other species and the living systems we all depend on.</p>
            <CTA href="/projects" className="mt-8">See what I am building</CTA>
          </div>
        </Reveal>
      </section>

      <Reveal className="mx-auto mt-24 max-w-[1800px] md:mt-36 md:px-6">
        <figure><div className="aspect-[16/9] overflow-hidden md:aspect-[2.15/1]"><Photo src="/images/odin/hope-4planet.jpg" alt="Young participants in environmental action, photographed by Odin Oddekalv" /></div><figcaption className="container-editorial mt-3 font-mono text-[0.65rem] uppercase tracking-label text-ink/40">Photograph by Odin Oddekalv</figcaption></figure>
      </Reveal>
    </div>
  );
}
