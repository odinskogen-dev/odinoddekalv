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
  ["03", "Photography", "The world, as I have seen it.", "/photography"],
  ["04", "Work", "What I am building in response.", "/work"],
  ["05", "Notes", "Essays, observations and unfinished thinking.", "/journal"],
  ["06", "Archive", "The evidence room: origin, documents, images and traces.", "/archive"],
];

export default function HomePage() {
  return (
    <>
      <section className="container-editorial flex min-h-[82svh] flex-col justify-center py-20 md:min-h-[88svh] md:py-28">
        <Reveal>
          <Label>ODIN ODDEKALV · NORWAY · FIELD / CULTURE / SYSTEMS</Label>
          <h1 className="mt-8 font-medium text-ink [font-size:clamp(58px,9vw,132px)] [letter-spacing:-0.055em] [line-height:0.88]">ODIN<br />ODDEKALV<span className="text-blue">_</span></h1>
          <p className="mt-9 max-w-3xl font-medium tracking-tight text-ink [font-size:clamp(25px,3.6vw,48px)] [letter-spacing:-0.035em] [line-height:1.04]">The living world came first.<br />The work followed.</p>
        </Reveal>
        <Reveal delay={0.08} className="mt-12 grid gap-8 border-t border-ink/10 pt-8 md:grid-cols-12">
          <div className="md:col-span-4"><Label>The question</Label></div>
          <div className="md:col-span-7 md:col-start-6"><p className="max-w-2xl text-xl leading-relaxed text-ink/72 md:text-2xl">How can humans thrive without destroying the living systems our future depends on?</p><p className="mt-5 max-w-xl text-base leading-relaxed text-ink/52">I have been following versions of that question through environmental work, photography, culture and building for most of my life.</p></div>
        </Reveal>
      </section>

      <Reveal className="mx-auto max-w-[1800px] px-0 md:px-6">
        <figure>
          <div className="relative min-h-[72svh] overflow-hidden bg-ink md:min-h-[88svh]"><Photo src="/images/odin/faroe-portrait-02.jpg" alt="Odin Oddekalv standing in a remote northern landscape" className="absolute inset-0" loading="eager" /></div>
          <figcaption className="container-editorial mt-3 flex flex-wrap justify-between gap-2 font-mono text-[0.62rem] uppercase tracking-label text-ink/38"><span>ODIN_ · Field portrait</span><span>A life in progress</span></figcaption>
        </figure>
      </Reveal>

      <section className="container-editorial mt-28 md:mt-44">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4"><Label>Origin</Label></div>
          <div className="md:col-span-7 md:col-start-6"><p className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">Some people inherit businesses. Some inherit money. I inherited a question.</p><p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/60">I grew up close to nature and close to environmental action. My father, Kurt Oddekalv, spent his life fighting environmental destruction. Losing him did not hand me a mission. It made me decide what responsibility would look like in my own language.</p><Link href="/story" className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ink transition-colors hover:text-blue"><span className="link-underline">Enter the story</span><span>→</span></Link></div>
        </Reveal>
      </section>

      <Reveal className="mx-auto mt-28 max-w-[1800px] md:mt-44 md:px-6">
        <figure><div className="aspect-[4/3] overflow-hidden bg-stone-100 md:aspect-[2.05/1]"><Photo src="/images/odin/mulafossur.jpg" alt="Múlafossur and a Faroese coastal village, photographed by Odin Oddekalv" /></div><figcaption className="container-editorial mt-3 font-mono text-[0.62rem] uppercase tracking-label text-ink/38">Múlafossur · Faroe Islands · Photograph by Odin Oddekalv</figcaption></figure>
      </Reveal>

      <section className="container-editorial mt-28 md:mt-44"><Reveal><Label>The spine</Label><div className="mt-8 grid border-y border-ink/10 md:grid-cols-5">{["LOVE", "THREAT", "LOSS / RESPONSIBILITY", "BUILD", "TOGETHER"].map((item, index) => <div key={item} className="border-b border-ink/10 py-7 last:border-b-0 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0 md:last:pr-0"><span className="font-mono text-[0.62rem] text-blue">{String(index + 1).padStart(2, "0")}_</span><p className="mt-2 text-sm font-medium tracking-tight text-ink">{item}</p></div>)}</div></Reveal></section>

      <section className="mx-auto mt-28 max-w-[1800px] bg-ink text-paper md:mt-44">
        <div className="grid min-h-[80svh] md:grid-cols-12">
          <Reveal className="md:col-span-7"><div className="h-full min-h-[58svh] overflow-hidden"><Photo src="/images/odin/long-way-home.jpg" alt="Figures moving through a remote landscape, photographed by Odin Oddekalv" /></div></Reveal>
          <Reveal className="flex items-center px-6 py-16 md:col-span-5 md:px-14 md:py-20"><div className="max-w-lg"><Label light>Field / witness</Label><p className="mt-7 text-4xl font-medium leading-[0.98] tracking-tight text-paper md:text-6xl">The world is not a backdrop.</p><p className="mt-7 max-w-md text-lg leading-relaxed text-paper/58">Photography became one way of paying attention. Field work became another. The deeper question is what we do after we have seen enough to understand that looking away is also a choice.</p><Link href="/field" className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-paper transition-colors hover:text-blue"><span className="link-underline">Go into the field</span><span>→</span></Link></div></Reveal>
        </div>
      </section>

      <section className="container-editorial mt-28 md:mt-44"><Reveal><div className="flex items-end justify-between gap-6 border-b border-ink/10 pb-6"><div><Label>Rooms</Label><h2 className="mt-4 text-4xl font-medium tracking-tight text-ink md:text-6xl">Go deeper.</h2></div><p className="hidden max-w-xs text-sm leading-relaxed text-ink/45 md:block">A quiet front door. More depth the further you choose to go.</p></div><div>{rooms.map(([number, name, description, href]) => <Link key={href} href={href} className="group grid gap-4 border-b border-ink/10 py-7 transition-colors hover:text-blue md:grid-cols-12 md:items-baseline md:py-9"><span className="font-mono text-[0.65rem] text-blue md:col-span-1">{number}_</span><span className="text-3xl font-medium tracking-tight md:col-span-4 md:text-5xl">{name}</span><span className="max-w-lg text-sm leading-relaxed text-ink/52 transition-colors group-hover:text-ink/70 md:col-span-5">{description}</span><span className="hidden justify-self-end font-mono text-sm md:col-span-2 md:block">↗</span></Link>)}</div></Reveal></section>

      <section className="container-editorial mt-28 md:mt-44"><Reveal className="grid gap-8 border-y border-ink/10 py-12 md:grid-cols-12 md:py-16"><div className="md:col-span-4"><Label>What I build</Label></div><div className="md:col-span-8"><p className="max-w-3xl text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">Caring is not the end of the story.</p><p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/58">4PLANET is the main work: an attempt to make the living world easier to understand, support and act for. P4NTHER is the cultural layer around ideas that need more than explanation.</p><Link href="/work" className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ink transition-colors hover:text-blue"><span className="link-underline">See the work</span><span>→</span></Link></div></Reveal></section>

      <Reveal className="mx-auto mt-28 max-w-[1800px] md:mt-44 md:px-6"><div className="grid gap-px bg-ink/10 md:grid-cols-2"><div className="aspect-[4/3] overflow-hidden bg-paper"><Photo src="/images/odin/arctic-white-angel.jpg" alt="Arctic White Angel, photographed by Odin Oddekalv" /></div><div className="aspect-[4/3] overflow-hidden bg-paper"><Photo src="/images/odin/faroe-field-walk.jpg" alt="A field walk in the Faroe Islands" /></div></div></Reveal>

      <section className="container-editorial mt-28 md:mt-44"><Reveal className="max-w-5xl border-t border-ink/10 pt-10"><Label>Origin text</Label><h2 className="mt-6 font-medium tracking-tight text-ink [font-size:clamp(44px,7vw,92px)] [letter-spacing:-0.05em] [line-height:0.92]">ALT JEG ELSKER LEVER.</h2><p className="mt-5 text-2xl tracking-tight text-ink/58">Everything I Love Is Alive.</p><p className="mt-6 max-w-xl text-base leading-relaxed text-ink/52">A key text about love, loss, belonging and why the living world became impossible for me to treat as somebody else’s problem.</p><Link href="/manifest" className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ink transition-colors hover:text-blue"><span className="link-underline">Read the origin text</span><span>→</span></Link></Reveal></section>

      <section className="mx-auto mt-28 max-w-[1800px] bg-ink text-paper md:mt-44"><Reveal className="container-editorial flex min-h-[70svh] flex-col justify-center py-20 md:py-28"><Label light>Open ending</Label><p className="mt-8 max-w-5xl font-medium tracking-tight [font-size:clamp(48px,8vw,108px)] [letter-spacing:-0.05em] [line-height:0.9]">FOR ALL<br />THAT LIVES<span className="text-blue">_</span></p><p className="mt-8 max-w-lg text-lg leading-relaxed text-paper/52">The work is unfinished. That is the point.</p><div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-label"><Link href="/now" className="link-underline">Now</Link><Link href="/press" className="link-underline">Press / bio</Link><Link href="/contact" className="link-underline">Contact</Link></div></Reveal></section>
    </>
  );
}
