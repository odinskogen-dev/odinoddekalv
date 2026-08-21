import Link from "next/link";
import Reveal from "@/components/Reveal";
import Media from "@/components/Media";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.7rem] uppercase tracking-label text-ink/45">
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="container-editorial flex min-h-[82svh] flex-col justify-center py-24 md:py-28">
        <Label>NORWAY · NATURE · CULTURE · SYSTEMS</Label>
        <h1 className="mt-8 font-medium text-ink [font-size:clamp(58px,8vw,118px)] [letter-spacing:-0.05em] [line-height:0.94]">
          ODIN ODDEKALV<span className="text-blue">_</span>
        </h1>
        <p className="mt-8 max-w-2xl font-medium tracking-tight text-ink [font-size:clamp(22px,3vw,40px)] [letter-spacing:-0.03em] [line-height:1.05]">
          Founder, writer and builder.
        </p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/60">
          Working on how people can better understand, protect and strengthen the living world.
        </p>
        <div className="mt-10 max-w-2xl border-t border-ink/10 pt-8">
          <p className="font-mono text-sm leading-relaxed text-ink/65">
            I am building 4PLANET as a practical answer to a question that has followed me for most of my life:
          </p>
          <p className="mt-3 max-w-xl text-lg font-medium leading-snug tracking-tight text-ink md:text-xl">
            How can human societies live well without weakening the living systems they depend on?
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-9 gap-y-3">
          {[
            ["01", "Read the story", "/story"],
            ["02", "Current work", "/projects"],
            ["03", "Notes", "/journal"],
          ].map(([i, label, href]) => (
            <Link key={href} href={href} className="group inline-flex items-baseline gap-2.5">
              <span className="font-mono text-xs text-blue">{i}_</span>
              <span className="link-underline text-sm tracking-tight text-ink transition-colors group-hover:text-blue">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-editorial mt-24 md:mt-36">
        <div className="grid gap-12 md:grid-cols-12">
          <Label>The story</Label>
          <Reveal className="md:col-span-8 md:col-start-5">
            <div className="-mt-6 space-y-5 text-xl leading-relaxed text-ink/80 md:mt-0 md:text-2xl">
              <p>I grew up close to the coast, the forest and a family life shaped by environmental responsibility.</p>
              <p>Nature was never a theme. It was part of the world we belonged to.</p>
              <p className="text-ink">The work I am building now begins with a simple conviction: what we love, we must learn to understand well enough to protect.</p>
            </div>
            <Link href="/story" className="group mt-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-label text-ink transition-colors hover:text-blue">
              <span className="link-underline">Read the story</span><span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial mt-24 md:mt-36">
        <Label>Current work</Label>
        <div className="mt-10 border-t border-ink/10">
          {[
            ["4PLANET_", "The main work.", "A system being built to make ecological action easier to understand, trust, support and follow.", "In development"],
            ["P4NTHER_", "The cultural layer.", "A quiet studio and future platform for ideas that need to move through culture.", "Developing cultural layer"],
          ].map(([name, role, desc, status]) => (
            <Reveal key={name}>
              <article className="grid gap-x-10 gap-y-3 border-b border-ink/10 py-9 md:grid-cols-12">
                <div className="md:col-span-4"><h3 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">{name}</h3><p className="mt-2 text-ink/55">{role}</p></div>
                <div className="md:col-span-8"><p className="max-w-xl text-lg leading-relaxed text-ink/75">{desc}</p><p className="mt-4 inline-block border border-ink/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-label text-ink/55">{status}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-editorial mt-24 md:mt-36">
        <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
          <Media src="/images/odin/archive/grassroof-cabin-storm.jpg" alt="A grass-roofed coastal cabin in stormy weather." className="aspect-[3/2] w-full md:col-span-8" />
          <div className="md:col-span-4 md:pb-2">
            <p className="font-mono text-[0.7rem] uppercase tracking-label text-blue">NORWAY · COAST</p>
            <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-label text-ink/45">PERSONAL ARCHIVE</p>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">The work has to remain close to what it is trying to protect.</p>
          </div>
        </Reveal>
      </section>

      <section className="container-editorial mt-24 md:mt-36">
        <Reveal className="max-w-2xl border-t border-ink/10 pt-10">
          <Label>A personal essay</Label>
          <h2 className="mt-5 text-2xl font-medium tracking-tight text-ink md:text-3xl">EVERYTHING I LOVE IS ALIVE.</h2>
          <p className="mt-3 text-ink/60">On love, loss and the decision to build for a living world.</p>
        </Reveal>
      </section>

      <section className="container-editorial mt-24 border-t border-ink/10 pt-16 md:mt-36 md:pt-20">
        <Label>Contact</Label>
        <Reveal className="mt-8 grid gap-10 md:grid-cols-12">
          <p className="text-2xl font-medium leading-snug tracking-tight text-ink md:col-span-7 md:text-3xl">For partnerships, institutions, media and relevant conversations.</p>
          <p className="max-w-sm border-l-2 border-blue/40 pl-5 font-mono text-sm leading-relaxed text-ink/60 md:col-span-5">Direct contact through the current ODIN / 4PLANET channels.</p>
        </Reveal>
      </section>
    </>
  );
}
