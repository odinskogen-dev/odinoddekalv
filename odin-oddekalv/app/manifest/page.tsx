import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TypeLabel from "@/components/TypeLabel";

export const metadata: Metadata = {
  title: "Everything I Love Is Alive",
  description: "Odin Oddekalv on love, loss, belonging and building for a living world.",
};

export default function ManifestPage() {
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <TypeLabel index="01" accent>Origin text</TypeLabel>
          <h1 className="mt-7 max-w-5xl font-medium text-ink [font-size:clamp(52px,8vw,116px)] [letter-spacing:-0.055em] [line-height:0.9]">ALT JEG ELSKER LEVER.</h1>
          <p className="mt-8 max-w-3xl text-2xl font-medium tracking-tight text-ink/65 md:text-4xl">Everything I Love Is Alive.</p>
        </Reveal>
      </header>

      <section className="container-editorial mt-20 md:mt-28">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3"><p className="font-mono text-xs uppercase tracking-label text-ink/45">LOVE / THREAT / RESPONSIBILITY</p></div>
          <div className="space-y-7 text-xl leading-relaxed text-ink/80 md:col-span-7 md:text-2xl">
            <p>I work with photography, film and text at the meeting point between people, nature, loss and belonging.</p>
            <p>Environmental crises are usually described through numbers, policy and conflict. I am interested in how they are experienced in actual places, bodies and relationships — and how love for the living world can exist alongside grief, responsibility, conflict and hope.</p>
            <p className="text-ink">The living world was never a backdrop to me. It was the world I belonged to.</p>
          </div>
        </Reveal>
      </section>

      <section className="container-editorial mt-24 md:mt-32">
        <Reveal className="border-y border-ink/10 py-14 md:py-18">
          <p className="max-w-4xl font-medium tracking-tight text-ink [font-size:clamp(32px,5vw,68px)] [letter-spacing:-0.04em] [line-height:1]">Everything I love is alive.<br />Everything I love is under threat.<br /><span className="text-blue">Therefore I build.</span></p>
        </Reveal>
      </section>

      <section className="container-editorial mt-24 md:mt-32">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3"><p className="font-mono text-xs uppercase tracking-label text-ink/45">THE INHERITANCE</p></div>
          <div className="space-y-7 text-lg leading-relaxed text-ink/75 md:col-span-7 md:text-xl">
            <p>Environmental responsibility has been part of my life since I was young. My father, Kurt Oddekalv, is part of that origin — but inheritance is not the same as imitation.</p>
            <p>After his death, the task was not to copy his activism. It was to decide what responsibility looked like in my own generation and in my own language.</p>
            <p>Photography became an observation tool. Culture became a way to move ideas. Systems became a way to turn concern into something people can understand and use.</p>
          </div>
        </Reveal>
      </section>

      <section className="container-editorial mt-24 md:mt-32">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3"><p className="font-mono text-xs uppercase tracking-label text-ink/45">THE WORK</p></div>
          <div className="space-y-7 text-lg leading-relaxed text-ink/75 md:col-span-7 md:text-xl">
            <p>I am interested in work that can hold contradictions open: beauty and destruction, closeness and power, hope and loss.</p>
            <p>The same movement now runs through what I build: from attention to understanding, from understanding to participation, and from participation to practical systems for a living world.</p>
            <p className="text-2xl font-medium tracking-tight text-ink md:text-3xl">For all that lives.</p>
            <Link href="/work" className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-label text-ink transition-colors hover:text-blue"><span className="link-underline">See what I am building</span><span>→</span></Link>
          </div>
        </Reveal>
      </section>

      <section className="container-editorial mt-20 md:mt-28">
        <Reveal className="max-w-reading border-t border-ink/10 pt-8 md:ml-[25%]">
          <img src="/images/odin/odin-signature-blue.webp" alt="Odin" className="h-auto w-[8.5rem]" />
          <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-label text-ink/35">Odin Oddekalv · Norway</p>
        </Reveal>
      </section>
    </div>
  );
}
