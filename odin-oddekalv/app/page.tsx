import Link from "next/link";
import Reveal from "@/components/Reveal";
import Media from "@/components/Media";

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[0.7rem] uppercase tracking-label text-ink/45">{children}</p>;
}

const relationship = ["LOVE", "UNDERSTANDING", "SOLUTIONS", "PARTICIPATION", "MORE LIFE"];
const howIWork = [
  ["01","STORY","Makes the living world visible, human and worth caring about."],
  ["02","ECOLOGICAL INTELLIGENCE","Makes relationships, dependencies and consequences easier to understand."],
  ["03","INNOVATION","Finds and develops better ways to solve real problems."],
  ["04","CULTURE","Makes ecological action more relevant, desirable and socially alive."],
  ["05","SYSTEMS & CAPITAL","Gives good ideas the partnerships, structure and capacity to last."],
];

export default function HomePage() {
  return (
    <>
      <section className="container-editorial grid items-center gap-12 pt-20 md:min-h-[88svh] md:grid-cols-12 md:gap-16 md:pt-24">
        <div className="md:col-span-7">
          <Label>ODIN ODDEKALV_ / NORWAY</Label>
          <h1 className="mt-8 font-medium text-ink [font-size:clamp(44px,7vw,104px)] [letter-spacing:-0.045em] [line-height:0.96]">ALT JEG ELSKER LEVER.</h1>
          <p className="mt-4 font-medium tracking-tight text-ink/55 [font-size:clamp(20px,2.4vw,32px)] [letter-spacing:-0.02em]">Everything I love is alive.</p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">I build culture, ecological intelligence and practical pathways that help people protect and strengthen the living world.</p>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/story" className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-label text-ink transition-colors hover:text-blue"><span className="link-underline">Read the story</span><span>→</span></Link>
            <a href="https://4planet.org" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-label text-blue"><span className="link-underline">Explore 4PLANET_</span><span>↗</span></a>
          </div>
        </div>
        <div className="md:col-span-5"><Media src="/images/hero.svg" alt="ODIN field archive visual." className="aspect-[4/5] w-full md:aspect-[3/4]" /></div>
      </section>

      <section className="container-editorial mt-28 md:mt-40">
        <div className="grid gap-12 md:grid-cols-12"><Label>Why I build</Label><Reveal className="md:col-span-8 md:col-start-5"><p className="max-w-2xl text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">I grew up close to the sea, the forest and a family life shaped by environmental responsibility. Nature was never a theme. It was part of the world we belonged to.</p><p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/65">After my father died, responsibility did not become clearer. It became unavoidable.</p><blockquote className="mt-10 max-w-xl border-l-2 border-blue pl-6 text-xl font-medium leading-relaxed text-ink">When you love something and see it under threat, you cannot only watch.</blockquote></Reveal></div>
      </section>

      <section className="container-editorial mt-28 md:mt-40">
        <Reveal><h2 className="max-w-4xl text-display-md font-medium leading-[1.1] tracking-tight text-ink">How can people and the living world flourish together?</h2><p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">Sustainability has never felt like a large enough ambition. Healthy living systems do more than endure. They create the conditions for more life.</p><p className="mt-12 font-medium tracking-tight text-ink [font-size:clamp(36px,5vw,72px)] [letter-spacing:-0.03em]">SYMBIOSIS</p><p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">Not a human society standing outside nature, but one that understands it is part of it — and learns to strengthen the living systems it depends on.</p><div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2">{relationship.map((step,i)=><span key={step} className="flex items-center gap-3"><span className="font-mono text-xs uppercase tracking-label text-ink/70">{step}</span>{i < relationship.length - 1 && <span className="font-mono text-blue/50">→</span>}</span>)}</div></Reveal>
      </section>

      <section className="container-editorial mt-28 md:mt-40">
        <Label>What I build</Label>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">The work moves from story and understanding to innovation, participation and real-world action.</p>
        <div className="mt-12 border-y border-ink/10">
          {[["01","4PLANET_","The main work — living planet intelligence and ecological action infrastructure."],["02","P4NTHER_","Culture, visual worlds, editorial work, film and creative experimentation."],["03","ODIN_","Writing, field observation, photography and the human origin layer behind the work."]].map(([n,title,copy]) => <Reveal key={n}><div className="grid gap-4 border-b border-ink/10 py-8 last:border-b-0 md:grid-cols-12"><span className="font-mono text-xs text-blue md:col-span-1">{n}</span><h3 className="text-2xl font-medium tracking-tight text-ink md:col-span-4">{title}</h3><p className="text-lg leading-relaxed text-ink/65 md:col-span-7">{copy}</p></div></Reveal>)}
        </div>
      </section>

      <section className="container-editorial mt-28 md:mt-40">
        <Label>How I work</Label>
        <div className="mt-10 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-5">{howIWork.map(([n,title,copy]) => <div key={n} className="flex h-full flex-col bg-paper p-6"><span className="font-mono text-xs text-blue">{n}</span><h3 className="mt-3 font-mono text-[0.7rem] uppercase tracking-label text-ink">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink/65">{copy}</p></div>)}</div>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">The aim is not to communicate concern more elegantly. It is to make better participation and better solutions easier to build.</p>
      </section>

      <section className="container-editorial mt-28 border-t border-ink/10 pt-16 md:mt-40 md:pt-24">
        <Reveal><p className="max-w-3xl text-display-md font-medium leading-[1.1] tracking-tight text-ink">We do not stand outside the living world. We are part of it.</p><p className="mt-10 font-mono text-sm uppercase tracking-label text-blue">For all that lives.</p></Reveal>
      </section>
    </>
  );
}
