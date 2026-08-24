import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description: "The work Odin Oddekalv is building now — 4PLANET and P4NTHER.",
};

const work = [
  {
    index: "01",
    title: "4PLANET_",
    role: "THE MAIN WORK",
    href: "https://4planet.org",
    body: "I am building 4PLANET to make the living world easier to understand — and useful action easier to find, trust and support. It connects places, species, problems, solutions and the people already doing something about them.",
    proof: "Live products, field cases, data integrations and partnerships are being built and tested in public.",
  },
  {
    index: "02",
    title: "P4NTHER_",
    role: "CULTURE / CREATIVE",
    href: "https://p4nther.no",
    body: "P4NTHER is where I explore the cultural side of change: identity, images, stories and ideas that can move through culture when facts alone are not enough.",
    proof: "Visual systems, creative direction and cultural experiments in development.",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">WORK · 04</p>
          <h1 className="mt-6 max-w-6xl font-medium tracking-tight text-ink [font-size:clamp(54px,9vw,126px)] [letter-spacing:-0.055em] [line-height:0.88]">THEREFORE<br />I BUILD.</h1>
          <p className="mt-9 max-w-2xl text-xl leading-relaxed text-ink/58">Caring is the beginning. The useful question is what we can make, improve or support because of it.</p>
        </Reveal>
      </header>

      <main className="container-editorial mt-20 md:mt-28">
        <div className="border-t border-ink/10">
          {work.map((item) => (
            <Reveal key={item.index}>
              <article className="grid gap-8 border-b border-ink/10 py-12 md:grid-cols-12 md:py-16">
                <div className="md:col-span-2">
                  <p className="font-mono text-[0.65rem] text-blue">{item.index}_</p>
                  <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-label text-ink/38">{item.role}</p>
                </div>
                <div className="md:col-span-4"><h2 className="text-4xl font-medium tracking-tight text-ink md:text-6xl">{item.title}</h2></div>
                <div className="md:col-span-5 md:col-start-8">
                  <p className="text-lg leading-relaxed text-ink/65">{item.body}</p>
                  <p className="mt-5 border-l border-blue/40 pl-5 text-sm leading-relaxed text-ink/48">{item.proof}</p>
                  <a href={item.href} target="_blank" rel="noreferrer" className="group mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ink hover:text-blue"><span className="link-underline">Open</span><span>↗</span></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </main>

      <section className="container-editorial mt-24 md:mt-36">
        <Reveal className="grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-12">
          <p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45 md:col-span-3">WHY THESE</p>
          <div className="md:col-span-7 md:col-start-5">
            <p className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">One builds the system. One works on how the ideas travel.</p>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/58">Photography, writing and field stories live throughout this site. They are part of how I look, learn and communicate — not separate projects competing for attention.</p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
