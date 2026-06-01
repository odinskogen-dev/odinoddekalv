import type { Metadata } from "next";
import LibraryCard from "@/components/LibraryCard";
import TypeLabel from "@/components/TypeLabel";
import Reveal from "@/components/Reveal";
import { getLibrary } from "@/lib/content";
import type { LibraryCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "Library",
  description: "What shaped the thinking — books, films, people, ideas and places.",
};

const order: LibraryCategory[] = ["BOOKS", "IDEAS", "PEOPLE", "FILMS", "PLACES"];

export default function LibraryPage() {
  const library = getLibrary();

  return (
    <div className="container-editorial pt-16 md:pt-24">
      <Reveal>
        <TypeLabel index="07" accent>
          Library
        </TypeLabel>
        <h1 className="mt-5 max-w-3xl text-display-lg font-medium tracking-tight text-ink">
          What shaped the thinking.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          A curated record of the books, films, people, ideas and places that
          formed how Odin sees the relationship between humans and nature.
        </p>
      </Reveal>

      <div className="mt-16 space-y-16">
        {order.map((cat) => {
          const group = library.filter((l) => l.category === cat);
          if (group.length === 0) return null;
          return (
            <section key={cat}>
              <p className="type-label mb-2 text-blue">{cat}</p>
              <div>
                {group.map((item) => (
                  <LibraryCard key={item.title} item={item} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
