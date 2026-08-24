import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Archive",
  description: "The evidence room behind the Odin Oddekalv story — origin, environmental inheritance, field material and source-controlled history.",
};

const records = [
  {
    id: "A01",
    type: "ORIGIN / PRIMARY SOURCE",
    title: "Norges Miljøvernforbund",
    text: "NMF states that Kurt Oddekalv founded the organisation in 1993. Its current history also records Seletun as a practical environmental building project and part of the organisation he built.",
    href: "https://www.nmf.no/om-nmf/",
    link: "NMF — About the organisation",
  },
  {
    id: "A02",
    type: "LOSS / PRIMARY SOURCE",
    title: "Kurt Oddekalv — memorial record",
    text: "NMF’s memorial page records Kurt’s death on 11 January 2021 and describes an approach centred on action and results. The archive matters here as context, not as borrowed status.",
    href: "https://www.nmf.no/kurt-oddekalv-minneside/",
    link: "NMF — memorial page",
  },
  {
    id: "A03",
    type: "TEXT / ORIGIN",
    title: "Alt jeg elsker lever",
    text: "An original essay that became a key way of articulating the emotional origin of the work: attachment first, then responsibility. It is a central object in the story, not the whole story.",
    href: "/manifest",
    link: "Read the origin text",
  },
  {
    id: "A04",
    type: "FIELD / PHOTOGRAPHIC RECORD",
    title: "Faroe Islands, 2022",
    text: "A photographic field archive spanning landscape, people and a witnessed whale hunt. The public edit separates what was witnessed from what later research can support.",
    href: "/field/faroe-islands",
    link: "Field 001",
  },
];

export default function ArchivePage() {
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">ARCHIVE · 06</p>
          <h1 className="mt-6 max-w-6xl font-medium tracking-tight text-ink [font-size:clamp(52px,8.5vw,120px)] [letter-spacing:-0.055em] [line-height:0.88]">THE EVIDENCE<br />ROOM.</h1>
          <p className="mt-9 max-w-2xl text-xl leading-relaxed text-ink/58">A story this personal should become more precise, not more mythological, the deeper you go.</p>
        </Reveal>
      </header>

      <Reveal className="mx-auto mt-20 max-w-[1800px] md:mt-28 md:px-6">
        <div className="aspect-[16/9] overflow-hidden bg-ink md:aspect-[2.1/1]"><img src="/images/odin/long-way-home.jpg" alt="People moving through a northern landscape, photographed by Odin Oddekalv" className="h-full w-full object-cover" /></div>
      </Reveal>

      <main className="container-editorial mt-24 md:mt-36">
        <div className="border-t border-ink/10">
          {records.map((record) => {
            const external = record.href.startsWith("http");
            return (
              <Reveal key={record.id}>
                <article className="grid gap-6 border-b border-ink/10 py-10 md:grid-cols-12 md:py-14">
                  <div className="md:col-span-2"><p className="font-mono text-[0.65rem] text-blue">{record.id}</p><p className="mt-2 font-mono text-[0.6rem] uppercase leading-relaxed tracking-label text-ink/38">{record.type}</p></div>
                  <h2 className="text-2xl font-medium tracking-tight text-ink md:col-span-3 md:text-3xl">{record.title}</h2>
                  <div className="md:col-span-6 md:col-start-7"><p className="max-w-xl text-base leading-relaxed text-ink/60">{record.text}</p>{external ? <a href={record.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex font-mono text-xs uppercase tracking-label text-ink link-underline hover:text-blue">{record.link} ↗</a> : <Link href={record.href} className="mt-6 inline-flex font-mono text-xs uppercase tracking-label text-ink link-underline hover:text-blue">{record.link} →</Link>}</div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </main>

      <section className="container-editorial mt-24 md:mt-36">
        <Reveal className="grid gap-10 border-y border-ink/10 py-14 md:grid-cols-12">
          <div className="md:col-span-4"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">ARCHIVE RULE</p></div>
          <div className="md:col-span-7"><p className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-5xl">Inheritance without imitation.</p><p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/58">Kurt belongs here because he is part of the origin, teacher, environmental action and loss. The point is not to borrow his reputation. The point is to understand the question that remained after him — and why the answer had to take a different form.</p></div>
        </Reveal>
      </section>
    </div>
  );
}
