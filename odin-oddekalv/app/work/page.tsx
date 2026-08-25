import type { Metadata } from "next";
import Link from "next/link";
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
    body: "4PLANET is my attempt to make ecological reality easier to understand before important choices are locked in — and to make useful action easier to find, trust, support and learn from.",
    proof: "The work is being developed through real places, species, decisions, field partners and public prototypes rather than as a theory in isolation.",
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

const principles = [
  ["01", "SEE REALITY", "Start with the strongest available evidence. Keep the source, uncertainty and what is still unknown visible."],
  ["02", "IMPROVE THE DECISION", "Make consequences and trade-offs easier to understand while the choice that creates them can still be changed."],
  ["03", "USE WHAT ALREADY WORKS", "Do not replace good science, field knowledge or solutions for the sake of owning them. Connect the strongest existing work."],
  ["04", "LEARN FROM THE RESULT", "Action is not proof. What happened afterwards should improve the next decision."],
] as const;

const notes = [
  ["Before the Decision Is Made", "/journal/before-the-decision-is-made"],
  ["Truth by Design", "/journal/truth-by-design"],
  ["A Future Worth Choosing", "/journal/future-worth-choosing"],
  ["Build One Good Model", "/journal/build-one-good-model"],
] as const;

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
          <div className="md:col-span-3">
            <p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">4PLANET · WHY</p>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <h2 className="max-w-5xl text-4xl font-medium leading-[0.98] tracking-tight text-ink md:text-6xl">The damage is often easiest to see when the decision is already history.</h2>
            <div className="mt-9 grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-relaxed text-ink/62">We already have extraordinary science, field knowledge, technology and people working on ecological problems. But what is known, what can be done and who can do it are still often separated from the moment a real decision is made.</p>
              <p className="text-lg leading-relaxed text-ink/62">I am not trying to build an organisation that owns every answer. I am trying to build better connective tissue between reality, choices, action and learning — an ecosystem for the ecosystem.</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14 border-t border-ink/10 md:mt-20">
          {principles.map(([number, title, body]) => (
            <div key={number} className="grid gap-4 border-b border-ink/10 py-7 md:grid-cols-12 md:items-baseline md:py-8">
              <span className="font-mono text-[0.62rem] text-blue md:col-span-1">{number}_</span>
              <h3 className="font-mono text-[0.66rem] uppercase tracking-label text-ink md:col-span-3">{title}</h3>
              <p className="max-w-3xl text-base leading-relaxed text-ink/58 md:col-span-6 md:col-start-6">{body}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-12 grid gap-8 md:grid-cols-12 md:mt-16">
          <div className="md:col-span-3">
            <p className="font-mono text-[0.64rem] uppercase tracking-label text-ink/42">THE THINKING BEHIND IT</p>
          </div>
          <div className="md:col-span-7 md:col-start-5">
            {notes.map(([title, href]) => (
              <Link key={href} href={href} className="group flex items-baseline justify-between gap-6 border-b border-ink/10 py-4 first:border-t">
                <span className="text-xl font-medium tracking-tight text-ink transition-colors group-hover:text-blue md:text-2xl">{title}</span>
                <span className="font-mono text-xs text-ink/35 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

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
