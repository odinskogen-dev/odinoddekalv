import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Story",
  description: "The life behind the question — love, threat, loss, responsibility, building and the work still ahead.",
};

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`font-mono text-[0.67rem] uppercase tracking-label ${light ? "text-paper/45" : "text-ink/45"}`}>{children}</p>;
}

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} loading="lazy" className={`block h-full w-full object-cover ${className}`} />;
}

export default function StoryPage() {
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <Label>STORY · 01</Label>
          <h1 className="mt-6 max-w-6xl font-medium tracking-tight text-ink [font-size:clamp(48px,7.5vw,104px)] [letter-spacing:-0.05em] [line-height:0.92]">
            SOME PEOPLE INHERIT<br />ANSWERS.<br /><span className="text-blue">I INHERITED A QUESTION.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-ink/58 md:text-2xl">This is not a finished biography. It is the path that made the work necessary.</p>
        </Reveal>
      </header>

      <Reveal className="mx-auto mt-16 max-w-[1800px] md:mt-24 md:px-6">
        <div className="min-h-[72svh] overflow-hidden bg-ink md:min-h-[86svh]"><Photo src="/images/odin/faroe-portrait-02.jpg" alt="Odin Oddekalv in the field" /></div>
      </Reveal>

      <section className="container-editorial mt-24 md:mt-40">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3"><Label>01 · LOVE</Label></div>
          <div className="md:col-span-7 md:col-start-5">
            <p className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">The attachment came before the argument.</p>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink/62">
              <p>I grew up close to coast, forest, weather, animals and water. Nature was not a subject we visited. It was the world around us.</p>
              <p>My father, Kurt Oddekalv, built his life around environmental action. I grew up close to that work too — the urgency, conflict and belief that caring only matters when it changes what you do.</p>
              <p>Long before I had a theory about any of it, I knew I loved what was alive.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal className="mx-auto mt-20 max-w-[1800px] md:mt-32 md:px-6">
        <figure>
          <div className="aspect-[4/3] overflow-hidden md:aspect-[2.05/1]"><Photo src="/images/odin/universe03/storms-end.jpg" alt="A Faroese coastal settlement under a storm, photographed by Odin Oddekalv" /></div>
          <figcaption className="container-editorial mt-3 font-mono text-[0.62rem] uppercase tracking-label text-ink/38">Storms End · Photograph by Odin Oddekalv</figcaption>
        </figure>
      </Reveal>

      <section className="container-editorial mt-24 md:mt-40">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3"><Label>02 · THREAT</Label></div>
          <div className="md:col-span-7 md:col-start-5">
            <p className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">Love becomes political when you understand what can disappear.</p>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink/62">
              <p>The same world that felt permanent as a child began to look much less permanent when I got close enough to environmental work to see the systems acting on it.</p>
              <p>Pollution. Extraction. Waste. Violence made ordinary by habit. Good intentions without consequences.</p>
              <p>The more I photographed, the less useful it felt to describe nature as scenery.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal className="mx-auto mt-20 max-w-[1800px] md:mt-32 md:px-6">
        <div className="grid gap-px bg-ink/10 md:grid-cols-2">
          <figure className="bg-paper"><div className="aspect-[4/3] overflow-hidden"><Photo src="/images/odin/universe03/samuel.jpg" alt="A lone figure crossing a black shore, photographed by Odin Oddekalv" /></div></figure>
          <figure className="bg-paper"><div className="aspect-[4/3] overflow-hidden"><Photo src="/images/odin/universe03/im-hungry.jpg" alt="Two horses in the wind, photographed by Odin Oddekalv" /></div></figure>
        </div>
      </Reveal>

      <section className="mx-auto mt-24 max-w-[1800px] bg-ink text-paper md:mt-40">
        <div className="container-editorial grid min-h-[86svh] items-center gap-12 py-20 md:grid-cols-12 md:py-28">
          <Reveal className="md:col-span-4"><Label light>03 · LOSS</Label></Reveal>
          <Reveal className="md:col-span-7 md:col-start-6">
            <p className="font-medium tracking-tight [font-size:clamp(42px,6vw,82px)] [letter-spacing:-0.045em] [line-height:0.94]">Then the question became personal in a different way.</p>
            <div className="mt-9 max-w-xl space-y-5 text-lg leading-relaxed text-paper/58">
              <p>Losing my father did not give me clarity. It removed the person who had made environmental responsibility feel like a permanent fact of life.</p>
              <p>I did not want to become a copy of him. But I could not pretend the inheritance had disappeared either.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial mt-24 md:mt-40">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3"><Label>04 · RESPONSIBILITY</Label></div>
          <div className="md:col-span-7 md:col-start-5">
            <p className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">What do you do with what you inherit?</p>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink/62">
              <p>That became the real turning point. Not whether to care. How to make caring useful in my own generation.</p>
              <p>Photography taught me to look longer. Communication taught me that facts do not move by themselves. Culture taught me that people need reasons to feel part of a future. Building taught me that criticism is incomplete if nothing better exists on the other side of it.</p>
            </div>
            <blockquote className="mt-12 max-w-2xl border-l-2 border-blue pl-6 text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">How can humans thrive without destroying the living systems our future depends on?</blockquote>
          </div>
        </Reveal>
      </section>

      <Reveal className="mx-auto mt-20 max-w-[1800px] md:mt-32 md:px-6">
        <figure>
          <div className="aspect-[16/9] overflow-hidden md:aspect-[2.1/1]"><Photo src="/images/odin/universe03/moonwalk.jpg" alt="Two figures crossing a black landscape, photographed by Odin Oddekalv" /></div>
          <figcaption className="container-editorial mt-3 font-mono text-[0.62rem] uppercase tracking-label text-ink/38">Moonwalk · Photograph by Odin Oddekalv</figcaption>
        </figure>
      </Reveal>

      <section className="container-editorial mt-24 md:mt-40">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3"><Label>05 · BUILD</Label></div>
          <div className="md:col-span-7 md:col-start-5">
            <p className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">Fighting destruction matters. I became obsessed with what comes after the fight.</p>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink/62">
              <p>What systems would make ecological reality easier to understand? What would make action easier to trust? What would make participation feel less like sacrifice and more like belonging to a living world?</p>
              <p>4PLANET is the main attempt to answer that through work: intelligence, stories, tools, missions and real actors connected to real places.</p>
              <p>P4NTHER is the cultural layer. Photography and writing remain ways of seeing whether the systems still touch reality.</p>
            </div>
            <Link href="/work" className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ink transition-colors hover:text-blue"><span className="link-underline">What I am building</span><span>→</span></Link>
          </div>
        </Reveal>
      </section>

      <Reveal className="mx-auto mt-20 max-w-[1800px] md:mt-32 md:px-6">
        <div className="aspect-[16/9] overflow-hidden md:aspect-[2.1/1]"><Photo src="/images/odin/long-way-home.jpg" alt="People moving through a remote landscape, photographed by Odin Oddekalv" /></div>
      </Reveal>

      <section className="container-editorial mt-24 md:mt-40">
        <Reveal className="grid gap-12 border-y border-ink/10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-3"><Label>06 · TOGETHER</Label></div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-4xl font-medium leading-[0.98] tracking-tight text-ink md:text-6xl">A story about one person is too small for the problem.</p>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/58">The work becomes meaningful only when it connects researchers, field organisations, builders, communities and people who simply decide they want to help. The arc has to move from I to we.</p>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-label"><Link href="/field" className="link-underline">Enter the field</Link><Link href="/work" className="link-underline">See the work</Link><Link href="/archive" className="link-underline">Open the archive</Link></div>
          </div>
        </Reveal>
      </section>

      <section className="container-editorial mt-28 md:mt-44">
        <Reveal className="max-w-5xl">
          <Label>Open ending</Label>
          <p className="mt-6 font-medium tracking-tight text-ink [font-size:clamp(42px,7vw,96px)] [letter-spacing:-0.05em] [line-height:0.92]">THE FILM IS NOT FINISHED.</p>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink/55">Neither is the work.</p>
        </Reveal>
      </section>
    </div>
  );
}
