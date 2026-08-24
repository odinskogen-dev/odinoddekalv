import type { Metadata } from "next";
import JournalCard from "@/components/JournalCard";
import TypeLabel from "@/components/TypeLabel";
import Reveal from "@/components/Reveal";
import { getJournal, getFeaturedPost } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notes",
  description: "Durable essays and working ideas by Odin Oddekalv on the living world, people, trust and what we choose to build.",
};

export default function JournalPage() {
  const all = getJournal();
  const featured = getFeaturedPost();
  const rest = all.filter((p) => p.slug !== featured.slug);

  return (
    <div className="container-editorial pt-16 md:pt-24">
      <Reveal>
        <TypeLabel index="04" accent>Notes</TypeLabel>
        <h1 className="mt-5 max-w-4xl text-display-lg font-medium tracking-tight text-ink">Ideas worth keeping open.</h1>
        <div className="mt-7 grid gap-6 border-t border-ink/10 pt-7 md:grid-cols-12">
          <p className="max-w-2xl text-xl leading-relaxed text-ink/70 md:col-span-7">Longer thoughts from the work — written to be understood, argued with and improved over time.</p>
          <p className="font-mono text-[0.64rem] uppercase leading-relaxed tracking-label text-ink/38 md:col-span-4 md:col-start-9">Fewer notes. More substance. When a factual claim matters, the evidence should be able to follow it.</p>
        </div>
      </Reveal>

      <section className="mt-16"><JournalCard post={featured} featured /></section>
      <section className="mt-20 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((post, i) => <Reveal key={post.slug} delay={(i % 3) * 0.05}><JournalCard post={post} /></Reveal>)}
      </section>
    </div>
  );
}
