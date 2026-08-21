import type { Metadata } from "next";
import JournalCard from "@/components/JournalCard";
import TypeLabel from "@/components/TypeLabel";
import Reveal from "@/components/Reveal";
import { getJournal, getFeaturedPost } from "@/lib/content";

export const metadata: Metadata = { title: "Notes", description: "Field notes, essays and reflections from the search for better ways for humans and nature to thrive together." };

export default function JournalPage() {
  const all = getJournal();
  const featured = getFeaturedPost();
  const rest = all.filter((p) => p.slug !== featured.slug);
  return (
    <div className="container-editorial pt-16 md:pt-24">
      <Reveal><TypeLabel index="04" accent>Notes</TypeLabel><h1 className="mt-5 max-w-3xl text-display-lg font-medium tracking-tight text-ink">Field notes, essays and reflections.</h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">Writing from the work: the living world, culture, systems, building and the questions that remain open.</p></Reveal>
      <section className="mt-16"><JournalCard post={featured} featured /></section>
      <section className="mt-20 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">{rest.map((post, i) => <Reveal key={post.slug} delay={(i % 3) * 0.05}><JournalCard post={post} /></Reveal>)}</section>
    </div>
  );
}
