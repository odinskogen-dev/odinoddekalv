import type { Metadata } from "next";
import TypeLabel from "@/components/TypeLabel";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Now",
  description: "What Odin Oddekalv is focused on right now.",
};

// A /now page in the spirit of Derek Sivers — easy to update.
const focus = [
  "Building 4PLANET",
  "Developing P4NTHER",
  "Writing field notes and essays",
  "Building a photography archive",
  "Exploring better ways for humans and nature to thrive together",
];

// Update this date whenever the page changes.
const updated = "Updated late 2025 · Oslo / the field";

export default function NowPage() {
  return (
    <div className="container-editorial pt-16 md:pt-24">
      <Reveal>
        <TypeLabel index="08" accent>
          Now
        </TypeLabel>
        <h1 className="mt-5 max-w-3xl text-display-lg font-medium tracking-tight text-ink">
          What I&rsquo;m focused on now.
        </h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-label text-ink/40">
          {updated}
        </p>
      </Reveal>

      <Reveal delay={0.06} className="mt-14 max-w-2xl">
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {focus.map((f, i) => (
            <li key={f} className="flex items-baseline gap-5 py-6">
              <span className="font-mono text-xs text-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-xl tracking-tight text-ink md:text-2xl">{f}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 leading-relaxed text-ink/65">
          The through-line is the same as it has always been: a slow, honest
          search for how humans and nature can thrive together — documented in
          public as it takes shape.
        </p>
        <CTA href="/journal" className="mt-8">
          Latest field notes
        </CTA>
      </Reveal>
    </div>
  );
}
