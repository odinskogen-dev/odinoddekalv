import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description: "What Odin Oddekalv is building in response — 4PLANET, P4NTHER and a body of documentary work.",
};

const work = [
  {
    index: "01",
    title: "4PLANET_",
    role: "THE MAIN WORK",
    href: "https://4planet.org",
    body: "A living-planet intelligence and action system being built to make nature easier to understand, support and act for — connecting species, ecosystems, problems, solutions, actors and action.",
    proof: "Live systems, prototypes, field partnerships and an expanding body of ecological intelligence.",
  },
  {
    index: "02",
    title: "P4NTHER_",
    role: "THE CULTURAL LAYER",
    href: "https://p4nther.no",
    body: "A creative world for ideas that need to move through identity, art direction, storytelling and culture rather than explanation alone.",
    proof: "Identity, visual systems, creative direction and cultural experiments in development.",
  },
  {
    index: "03",
    title: "ODIN_",
    role: "THE BODY OF WORK",
    href: "/story",
    body: "Photography, field notes, essays and future films that keep the systems close to lived reality — and make the reasons behind the work legible without turning the person into the subject of everything.",
    proof: "Field archive, photography, writing and the unfinished story you are inside now.",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">WORK · 04</p>
          <h1 className="mt-6 max-w-6xl font-medium tracking-tight text-ink [font-size:clamp(54px,9vw,126px)] [letter-spacing:-0.055em] [line-height:0.88]">THEREFORE<br />I BUILD.</h1>
          <p className="mt-9 max-w-2xl text-xl leading-relaxed text-ink/58">The story only matters if something real exists on the other side of it.</p>
        </Reveal>
      </header>

      <main className="container-editorial mt-20 md:mt-28">
        <div className="border-t border-ink/10">
          {work.map((item) => {
            const external = item.href.startsWith("http");
            return (
              <Reveal key={item.index}>
                <article className="grid gap-8 border-b border-ink/10 py-12 md:grid-cols-12 md:py-16">
                  <div className="md:col-span-2"><p className="font-mono text-[0.65rem] text-blue">{item.index}_</p><p className="mt-2 font-mono text-[0.62rem] uppercase tracking-label text-ink/38">{item.role}</p></div>
                  <div className="md:col-span-4"><h2 className="text-4xl font-medium tracking-tight text-ink md:text-6xl">{item.title}</h2></div>
                  <div className="md:col-span-5 md:col-start-8">
                    <p className="text-lg leading-relaxed text-ink/65">{item.body}</p>
                    <p className="mt-5 border-l border-blue/40 pl-5 text-sm leading-relaxed text-ink/48">{item.proof}</p>
                    {external ? <a href={item.href} target="_blank" rel="noreferrer" className="group mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ink hover:text-blue"><span className="link-underline">Open</span><span>↗</span></a> : <Link href={item.href} className="group mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ink hover:text-blue"><span className="link-underline">Open</span><span>→</span></Link>}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </main>

      <Reveal className="mx-auto mt-24 max-w-[1800px] bg-ink text-paper md:mt-36">
        <div className="container-editorial flex min-h-[58svh] items-center py-20">
          <div className="max-w-4xl"><p className="font-mono text-[0.67rem] uppercase tracking-label text-paper/45">THE TEST</p><p className="mt-7 text-4xl font-medium leading-tight tracking-tight md:text-6xl">If the work cannot survive without the story, the story is doing too much.</p><p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/55">ODIN_ should make the reasons legible. 4PLANET has to prove the response.</p></div>
        </div>
      </Reveal>
    </div>
  );
}
