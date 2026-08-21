import type { Metadata } from "next";
import TypeLabel from "@/components/TypeLabel";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = { title: "Now", description: "What Odin Oddekalv is focused on right now." };

const focus = [
  "Building 4PLANET",
  "Developing the Odin Oddekalv story and archive",
  "Writing field notes and essays",
  "Developing P4NTHER as a distinct cultural layer",
  "Exploring better ways for humans and nature to thrive together",
];

const updated = "Current · Oslo / the field";

export default function NowPage() {
  return (
    <div className="container-editorial pt-16 md:pt-24">
      <Reveal><TypeLabel index="05" accent>Now</TypeLabel><h1 className="mt-5 max-w-3xl text-display-lg font-medium tracking-tight text-ink">What I&rsquo;m focused on now.</h1><p className="mt-4 font-mono text-xs uppercase tracking-label text-ink/40">{updated}</p></Reveal>
      <Reveal delay={0.06} className="mt-14 max-w-2xl">
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {focus.map((f, i) => <li key={f} className="flex items-baseline gap-5 py-6"><span className="font-mono text-xs text-blue">{String(i + 1).padStart(2, "0")}</span><span className="text-xl tracking-tight text-ink md:text-2xl">{f}</span></li>)}
        </ul>
        <p className="mt-10 leading-relaxed text-ink/65">The through-line is the same: a search for how humans and the rest of life can thrive together — followed through real work rather than a finished answer.</p>
        <CTA href="/journal" className="mt-8">Latest notes</CTA>
      </Reveal>
    </div>
  );
}
