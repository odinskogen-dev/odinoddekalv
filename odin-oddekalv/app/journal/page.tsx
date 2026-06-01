import type { Metadata } from "next";
import JournalCard from "@/components/JournalCard";
import TypeLabel from "@/components/TypeLabel";
import Reveal from "@/components/Reveal";
import { getJournal, getFeaturedPost } from "@/lib/content";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Field notes, essays and reflections from the search for better ways for humans and nature to thrive together.",
};

const categories = [
  "ALL",
  "EARTH",
  "HUMANITY",
  "FUTURE",
  "SYSTEMS",
  "EXPLORATION",
  "BUILDING",
  "FIELD NOTES",
];

export default function JournalPage() {
  const all = getJournal();
  const featured = getFeaturedPost();
  const rest = all.filter((p) => p.slug !== featured.slug);

  return (
    <div className="container-editorial pt-16 md:pt-24">
      <Reveal>
        <TypeLabel index="02" accent>
          Journal
        </TypeLabel>
        <h1 className="mt-5 max-w-3xl text-display-lg font-medium tracking-tight text-ink">
          Field notes, essays and reflections.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          The intellectual centre of the work — notes from the search for better
          ways to understand the relationship between humans, nature and the
          systems we build.
        </p>
      </Reveal>

      {/* Category filters (visual; static for now) */}
      <div className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-y border-ink/10 py-4">
        {categories.map((c, i) => (
          <span
            key={c}
            className={`font-mono text-xs uppercase tracking-label ${
              i === 0 ? "text-blue" : "text-ink/40"
            }`}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Featured */}
      <section className="mt-16">
        <JournalCard post={featured} featured />
      </section>

      {/* Grid */}
      <section className="mt-20 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 3) * 0.05}>
            <JournalCard post={post} />
          </Reveal>
        ))}
      </section>
    </div>
  );
}
