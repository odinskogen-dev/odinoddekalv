import Link from "next/link";
import Reveal from "@/components/Reveal";

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[0.7rem] uppercase tracking-label text-ink/45">{children}</p>;
}

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={`block h-full w-full object-cover ${className}`} />;
}

export default function HomePage() {
  return (
    <>
      <section className="container-editorial flex min-h-[82svh] flex-col justify-center py-24 md:py-28">
        <Label>NORWAY · NATURE · CULTURE · SYSTEMS</Label>
        <h1 className="mt-8 font-medium text-ink [font-size:clamp(58px,8vw,118px)] [letter-spacing:-0.05em] [line-height:0.94]">ODIN ODDEKALV<span className="text-blue">_</span></h1>
        <p className="mt-8 max-w-2xl font-medium tracking-tight text-ink [font-size:clamp(22px,3vw,40px)] [letter-spacing:-0.03em] [line-height:1.05]">Founder, storyteller and builder.</p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/60">Working on how people can better understand, protect and strengthen the living world.</p>
        <div className="mt-10 max-w-2xl border-t border-ink/10 pt-8">
          <p className="font-mono text-sm leading-relaxed text-ink/65">A question has followed me for most of my life:</p>
          <p className="mt-3 max-w-2xl text-xl font-medium leading-snug tracking-tight text-ink md:text-2xl">How do we secure the future of our species without destroying the living world we depend on?</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-9 gap-y-3">
          {[["01","Read the story","/story"],["02","Selected photography","/photography"],["03","Current work","/projects"]].map(([i,label,href]) => (
            <Link key={href} href={href} className="group inline-flex items-baseline gap-2.5"><span className="font-mono text-xs text-blue">{i}_</span><span className="link-underline text-sm tracking-tight text-ink transition-colors group-hover:text-blue">{label}</span></Link>
          ))}
        </div>
      </section>

      <Reveal className="mx-auto mt-4 w-full max-w-[1800px] px-0 md:px-6">
        <figure>
          <div className="aspect-[16/9] overflow-hidden bg-ink md:aspect-[2.15/1]">
            <Photo src="/images/odin/faroe-portrait-02.jpg" alt="Odin Oddekalv in the field" className="object-center" />
          </div>
          <figcaption className="container-editorial mt-3 flex justify-between gap-6 font-mono text-[0.65rem] uppercase tracking-label text-ink/40"><span>Field archive</span><span>ODIN_</span></figcaption>
        </figure>
      </Reveal>

      <section className="container-editorial mt-28 md:mt-40">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <Label>The story</Label>
            <p className="mt-4 font-mono text-[0.68rem] uppercase leading-relaxed tracking-label text-ink/40">LOVE → THREAT → LOSS / RESPONSIBILITY → BUILD → TOGETHER</p>
          </div>
          <Reveal className="md:col-span-8 md:col-start-5">
            <div className="space-y-5 text-xl leading-relaxed text-ink/80 md:text-2xl">
              <p>I grew up close to a living world that was never scenery. It was home.</p>
              <p>Environmental work, conflict and responsibility were also part of that world from the beginning.</p>
              <p className="text-ink">The question now is not only what we fight. It is what we build.</p>
            </div>
            <Link href="/story" className="group mt-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-label text-ink transition-colors hover:text-blue"><span className="link-underline">Enter the story</span><span>→</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-[1800px] md:mt-40">
        <Reveal className="grid md:grid-cols-12">
          <figure className="md:col-span-8">
            <div className="aspect-[4/3] overflow-hidden bg-ink"><Photo src="/images/odin/mulafossur.jpg" alt="Múlafossur in the Faroe Islands, photographed by Odin Oddekalv" /></div>
            <figcaption className="mt-3 px-5 font-mono text-[0.65rem] uppercase tracking-label text-ink/40 md:px-0">Múlafossur · Photograph by Odin Oddekalv</figcaption>
          </figure>
          <div className="flex items-end px-5 pt-16 md:col-span-4 md:px-12 md:pb-16 md:pt-0">
            <div>
              <Label>The world I see</Label>
              <p className="mt-5 max-w-sm text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">The living world is not a backdrop.</p>
              <p className="mt-4 max-w-sm leading-relaxed text-ink/60">Photography is one way I have learned to look closely enough to notice what is there — and what is disappearing.</p>
              <Link href="/photography" className="group mt-7 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-label text-ink transition-colors hover:text-blue"><span className="link-underline">Selected photography</span><span>→</span></Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-editorial mt-28 md:mt-40">
        <Label>Current work</Label>
        <div className="mt-10 border-t border-ink/10">
          {[["4PLANET_","The main work.","A system being built to make ecological action easier to understand, trust, support and follow.","In development"],["P4NTHER_","The cultural layer.","A distinct creative world for ideas that need to move through culture.","Developing cultural layer"]].map(([name,role,desc,status]) => (
            <Reveal key={name}><article className="grid gap-x-10 gap-y-3 border-b border-ink/10 py-9 md:grid-cols-12"><div className="md:col-span-4"><h3 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">{name}</h3><p className="mt-2 text-ink/55">{role}</p></div><div className="md:col-span-8"><p className="max-w-xl text-lg leading-relaxed text-ink/75">{desc}</p><p className="mt-4 inline-block border border-ink/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-label text-ink/55">{status}</p></div></article></Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-[1800px] bg-ink text-paper md:mt-40">
        <div className="grid md:grid-cols-2">
          <Reveal className="min-h-[52svh] md:min-h-[70svh]"><Photo src="/images/odin/long-way-home.jpg" alt="Two figures crossing a remote landscape, photographed by Odin Oddekalv" /></Reveal>
          <Reveal className="flex items-center px-6 py-20 md:px-16 md:py-24">
            <div className="max-w-lg">
              <p className="font-mono text-[0.7rem] uppercase tracking-label text-paper/45">Origin text</p>
              <h2 className="mt-6 font-medium tracking-tight text-paper [font-size:clamp(38px,5vw,72px)] [letter-spacing:-0.04em] [line-height:0.98]">ALT JEG ELSKER LEVER.</h2>
              <p className="mt-5 text-xl text-paper/65">Everything I Love Is Alive.</p>
              <p className="mt-5 max-w-md leading-relaxed text-paper/60">A key text about love, loss, belonging and why the work became necessary.</p>
              <Link href="/manifest" className="group mt-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-label text-paper transition-colors hover:text-blue"><span className="link-underline">Read the text</span><span>→</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial mt-28 md:mt-40">
        <Reveal className="grid gap-5 md:grid-cols-12">
          <figure className="md:col-span-7"><div className="aspect-[4/3] overflow-hidden"><Photo src="/images/odin/arctic-white-angel.jpg" alt="White horse in a northern landscape, photographed by Odin Oddekalv" /></div></figure>
          <figure className="md:col-span-5"><div className="aspect-[4/3] overflow-hidden"><Photo src="/images/odin/the-future.jpg" alt="Young participant in environmental field work, photographed by Odin Oddekalv" /></div></figure>
        </Reveal>
        <div className="mt-6 grid gap-8 md:grid-cols-12"><div className="md:col-span-7"><Label>Field / people / life</Label></div><p className="max-w-md text-lg leading-relaxed text-ink/60 md:col-span-5">Not a moodboard. A record of places, people and encounters that belong to the story.</p></div>
      </section>

      <section className="container-editorial mt-24 border-t border-ink/10 pt-16 md:mt-36 md:pt-20"><Label>Contact</Label><Reveal className="mt-8 grid gap-10 md:grid-cols-12"><p className="text-2xl font-medium leading-snug tracking-tight text-ink md:col-span-7 md:text-3xl">For partnerships, institutions, media and relevant conversations.</p><div className="md:col-span-5"><p className="max-w-sm border-l-2 border-blue/40 pl-5 font-mono text-sm leading-relaxed text-ink/60">Direct contact through the current ODIN / 4PLANET channels.</p><Link href="/contact" className="group mt-6 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-label text-ink transition-colors hover:text-blue"><span className="link-underline">Contact</span><span>→</span></Link></div></Reveal></section>
    </>
  );
}
