import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Field", description: "Numbered field stories from places, encounters and work in the living world." };

const fields = [
  { number: "001", title: "Faroe Islands / Whales", status: "OPEN", href: "/field/faroe-islands", image: "/images/odin/mulafossur.jpg", description: "A 2022 field archive about landscape, witnessing a whale hunt, and what the ecological role of whales changes in the way I see the event." },
  { number: "002", title: "Bay of Biscay / ORCA", status: "IN BUILD", href: "/work", image: "/images/odin/long-way-home.jpg", description: "A developing field chapter around whale monitoring, survey effort and the route between Britain and Spain." },
  { number: "003", title: "Home / Seletun + Solund", status: "ARCHIVE EDIT", href: "/archive", image: "/images/odin/faroe-field-walk.jpg", description: "The places behind the origin story: water, weather, environmental work and landscapes that felt like home before they became a mission." },
];

export default function FieldPage() {
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial"><Reveal><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45">FIELD · 02</p><h1 className="mt-6 max-w-6xl font-medium tracking-tight text-ink [font-size:clamp(54px,9vw,126px)] [letter-spacing:-0.055em] [line-height:0.88]">GO OUTSIDE.<br />LOOK CLOSER.</h1><p className="mt-9 max-w-2xl text-xl leading-relaxed text-ink/58">Field is where the brand stops being a point of view and has to meet reality: place, weather, people, species, evidence and consequences.</p></Reveal></header>

      <main className="mx-auto mt-20 max-w-[1800px] md:mt-28 md:px-6"><div className="space-y-1 bg-ink/10">{fields.map((field, index) => <Reveal key={field.number}><article className="bg-paper"><Link href={field.href} className="group grid md:grid-cols-12"><div className={`overflow-hidden bg-ink md:col-span-7 ${index === 1 ? "md:order-2" : ""}`}><div className="aspect-[4/3] md:aspect-[16/10]"><img src={field.image} alt="" className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.015]" /></div></div><div className={`flex items-center px-6 py-10 md:col-span-5 md:px-12 md:py-14 ${index === 1 ? "md:order-1" : ""}`}><div className="max-w-lg"><div className="flex items-center gap-4 font-mono text-[0.62rem] uppercase tracking-label"><span className="text-blue">FIELD {field.number}</span><span className="text-ink/35">{field.status}</span></div><h2 className="mt-6 text-4xl font-medium leading-[0.98] tracking-tight text-ink transition-colors group-hover:text-blue md:text-6xl">{field.title}</h2><p className="mt-6 text-base leading-relaxed text-ink/55">{field.description}</p><p className="mt-8 font-mono text-xs uppercase tracking-label text-ink">Enter →</p></div></div></Link></article></Reveal>)}</div></main>

      <section className="container-editorial mt-28 md:mt-40"><Reveal className="grid gap-10 border-y border-ink/10 py-14 md:grid-cols-12"><p className="font-mono text-[0.67rem] uppercase tracking-label text-ink/45 md:col-span-4">FIELD RULE</p><div className="md:col-span-7"><p className="text-2xl font-medium leading-snug tracking-tight text-ink md:text-4xl">A field note must separate what I witnessed from what I later learned.</p><p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/56">Images can be evidence of presence. They are not evidence for every ecological conclusion. Research, source material and uncertainty belong in the same room as the story.</p></div></Reveal></section>
    </div>
  );
}
