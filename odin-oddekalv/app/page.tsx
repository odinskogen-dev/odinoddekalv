import Link from "next/link";
import Reveal from "@/components/Reveal";

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`font-mono text-[0.68rem] uppercase tracking-label ${light ? "text-paper/45" : "text-ink/45"}`}>{children}</p>;
}

function Photo({ src, alt, className = "", loading = "lazy" }: { src: string; alt: string; className?: string; loading?: "lazy" | "eager" }) {
  return <img src={src} alt={alt} loading={loading} className={`block h-full w-full object-cover ${className}`} />;
}

const rooms = [
  ["01", "Story", "The life behind the question.", "/story"],
  ["02", "Field", "Places, encounters and what the world changes in the work.", "/field"],
  ["03", "Work", "What I am building in response.", "/work"],
  ["04", "Notes", "Essays, observations and unfinished thinking.", "/journal"],
];

const selected = [
  { src: "/images/odin/mulafossur.jpg", title: "Múlafossur", note: "Faroe Islands" },
  { src: "/images/odin/arctic-white-angel.jpg", title: "Arctic White Angel", note: "Living" },
  { src: "/images/odin/long-way-home.jpg", title: "The Long Way Home", note: "Passage" },
  { src: "/images/odin/the-future.jpg", title: "The Future", note: "Action" },
];

export default function HomePage() {
  return (
    <>
      <section className="container-editorial flex min-h-[78svh] flex-col justify-center py-20 md:min-h-[82svh] md:py-24">
        <Reveal>
          <Label>ODIN ODDEKALV · NORWAY · FIELD / CULTURE / SYSTEMS</Label>
          <h1 className="mt-8 font-medium text-ink [font-size:clamp(58px,9vw,132px)] [letter-spacing:-0.055em] [line-height:0.88]">ODIN<br />ODDEKALV<span className="text-blue">_</span></h1>
          <p className="mt-9 max-w-3xl font-medium tracking-tight text-ink [font-size:clamp(25px,3.4vw,46px)] [letter-spacing:-0.035em] [line-height:1.04]">The living world came first.<br />The work followed.</p>
        </Reveal>
        <Reveal delay={0.08} className="mt-10 grid gap-6 border-t border-ink/10 pt-7 md:grid-cols-12">
          <div className="md:col-span-3"><Label>The question</Label></div>
          <div className="md:col-span-7 md:col-start-6"><p className="max-w-2xl text-xl leading-relaxed text-ink/72 md:text-2xl">How can humans thrive without destroying the living systems our future depends on?</p></div>
        </Reveal>
      </section>

      <Reveal className="mx-auto max-w-[1800px] px-0 md:px-6">
        <figure>
          <div className="relative min-h-[64svh] overflow-hidden bg-ink md:min-h-[76svh]"><Photo src="/images/odin/faroe-portrait-02.jpg" alt="Odin Oddekalv in a remote northern valley" className="absolute inset-0" loading="eager" /></div>
          <figcaption className="container-editorial mt-3 flex flex-wrap justify-between gap-2 font-mono text-[0.62rem] uppercase tracking-label text-ink/38"><span>ODIN_ · Field portrait</span><span>Faroe Islands</span></figcaption>
        </figure>
      </Reveal>

      <section className="container-editorial mt-24 md:mt-32">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3"><Label>Origin</Label></div>
          <div className="md:col-span-8 md:col-start-5">
            <p className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">Some people inherit businesses. Some inherit money. I inherited a question.</p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-relaxed text-ink/60">I grew up close to nature and close to environmental action. My father, Kurt Oddekalv, spent his life fighting environmental destruction.</p>
              <div><p className="text-lg leading-relaxed text-ink/60">Losing him did not hand me a mission. It made me decide what responsibility would look like in my own language.</p><Link href="/story" className="group mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ink transition-colors hover:text-blue"><span className="link-underline">Enter the story</span><span>→</span></Link></div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-24 max-w-[1800px] bg-ink text-paper md:mt-32">
        <div className="grid md:grid-cols-12">
          <Reveal className="md:col-span-7"><div className="aspect-[4/3] h-full min-h-[52svh] overflow-hidden md:aspect-auto"><Photo src="/images/odin/faroe-field-walk.jpg" alt="Odin Oddekalv walking through the Faroe Islands" /></div></Reveal>
          <Reveal className="flex items-center px-6 py-14 md:col-span-5 md:px-14 md:py-16"><div className="max-w-lg"><Label light>Field / witness</Label><p className="mt-6 text-4xl font-medium leading-[0.98] tracking-tight text-paper md:text-6xl">The world is not a backdrop.</p><p className="mt-6 max-w-md text-lg leading-relaxed text-paper/58">Photography became one way of paying attention. Field work became another.</p><Link href="/field" className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-paper transition-colors hover:text-blue"><span className="link-underline">Go into the field</span><span>→</span></Link></div></Reveal>
        </div>
      </section>

      <section className="container-editorial mt-24 md:mt-32">
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-ink/10 pb-5"><div><Label>Explore</Label><h2 className="mt-3 text-4xl font-medium tracking-tight text-ink md:text-5xl">Go deeper.</h2></div><p className="hidden max-w-xs text-sm leading-relaxed text-ink/45 md:block">The front door stays quiet. Depth lives behind it.</p></div>
          <div>{rooms.map(([number, name, description, href]) => <Link key={href} href={href} className="group grid gap-3 border-b border-ink/10 py-6 transition-colors hover:text-blue md:grid-cols-12 md:items-baseline md:py-7"><span className="font-mono text-[0.65rem] text-blue md:col-span-1">{number}_</span><span className="text-3xl font-medium tracking-tight md:col-span-4 md:text-4xl">{name}</span><span className="max-w-lg text-sm leading-relaxed text-ink/52 transition-colors group-hover:text-ink/70 md:col-span-5">{description}</span><span className="hidden justify-self-end font-mono text-sm md:col-span-2 md:block">↗</span></Link>)}</div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.66rem] uppercase tracking-label text-ink/45"><Link href="/photography" className="hover:text-blue">Photography</Link><Link href="/archive" className="hover:text-blue">Archive</Link><Link href="/press" className="hover:text-blue">Press / bio</Link></div>
        </Reveal>
      </section>

      <section className="mx-auto mt-24 max-w-[1800px] md:mt-32 md:px-6">
        <Reveal>
          <div className="container-editorial mb-6 flex items-end justify-between gap-6 md:px-0"><div><Label>Selected photographs</Label><p className="mt-3 text-2xl font-medium tracking-tight text-ink md:text-3xl">A strict edit.</p></div><Link href="/photography" className="font-mono text-[0.66rem] uppercase tracking-label text-ink/45 hover:text-blue">View photography →</Link></div>
          <div className="grid gap-1 bg-paper md:grid-cols-12 md:grid-rows-2">
            <figure className="group overflow-hidden bg-stone-100 md:col-span-7 md:row-span-2"><div className="aspect-[4/3] h-full overflow-hidden md:aspect-auto"><Photo src={selected[0].src} alt={`${selected[0].title}, photographed by Odin Oddekalv`} className="transition-transform duration-700 ease-editorial group-hover:scale-[1.015]" /></div></figure>
            <figure className="group overflow-hidden bg-stone-100 md:col-span-5"><div className="aspect-[16/10] overflow-hidden"><Photo src={selected[1].src} alt={`${selected[1].title}, photographed by Odin Oddekalv`} className="transition-transform duration-700 ease-editorial group-hover:scale-[1.015]" /></div></figure>
            <div className="grid gap-1 md:col-span-5 md:grid-cols-2">
              {selected.slice(2).map((photo) => <figure key={photo.src} className="group overflow-hidden bg-stone-100"><div className="aspect-square overflow-hidden"><Photo src={photo.src} alt={`${photo.title}, photographed by Odin Oddekalv`} className="transition-transform duration-700 ease-editorial group-hover:scale-[1.015]" /></div></figure>)}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-editorial mt-24 pb-8 md:mt-32 md:pb-16">
        <Reveal className="grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-12">
          <div className="md:col-span-3"><Label>Origin text</Label></div>
          <div className="md:col-span-9"><h2 className="font-medium tracking-tight text-ink [font-size:clamp(42px,6vw,82px)] [letter-spacing:-0.05em] [line-height:0.92]">ALT JEG ELSKER LEVER.</h2><p className="mt-4 text-xl tracking-tight text-ink/55">Everything I Love Is Alive.</p><div className="mt-7 flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-label"><Link href="/manifest" className="link-underline">Read the origin text</Link><Link href="/work" className="link-underline">See what I build</Link></div></div>
        </Reveal>
      </section>
    </>
  );
}
