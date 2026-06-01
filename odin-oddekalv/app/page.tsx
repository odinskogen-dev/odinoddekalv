import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import JournalCard from "@/components/JournalCard";
import PhotoGrid from "@/components/PhotoGrid";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import Media from "@/components/Media";
import TypeLabel from "@/components/TypeLabel";
import { getLatestJournal, getSelectedPhotography } from "@/lib/content";
import { site } from "@/content/site";

const currentWork = [
  {
    title: "4PLANET",
    body: "Making ecological action easier to understand and support.",
    href: "/projects/4planet",
  },
  {
    title: "P4NTHER",
    body: "Creative studio for ideas, identity, storytelling and systems.",
    href: "/projects/p4nther",
  },
  {
    title: "Journal",
    body: "Field notes, essays and reflections from the search for better ways forward.",
    href: "/journal",
  },
  {
    title: "Photography",
    body: "A visual archive of nature, people, places and the living world.",
    href: "/photography",
  },
];

const follow = [
  { label: "Instagram", href: site.links.instagram },
  { label: "Substack", href: site.links.substack },
  { label: "4PLANET", href: site.links.fourplanet },
  { label: "P4NTHER", href: site.links.p4nther },
  { label: "Email", href: site.links.email },
];

export default function HomePage() {
  const latest = getLatestJournal(3);
  const photos = getSelectedPhotography(6);

  return (
    <>
      <Hero />

      {/* THE QUESTION */}
      <section className="container-editorial mt-32 md:mt-40">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <TypeLabel index="01" accent>
              The Question
            </TypeLabel>
          </div>
          <Reveal className="md:col-span-8">
            <p className="text-display-md font-medium tracking-tight text-ink">
              Everything begins with a simple question:{" "}
              <span className="text-blue">
                how can humans and nature thrive together?
              </span>
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">
              Through photography, storytelling, systems thinking and projects
              such as 4PLANET, Odin explores ideas, people and places that may
              help us move towards a better future for life on Earth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CURRENT WORK */}
      <section className="container-editorial mt-28 md:mt-36">
        <SectionHeader index="02" label="Current Work" title="What is being built" />
        <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {currentWork.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <Link
                href={w.href}
                className="group flex h-full flex-col bg-paper p-8 transition-colors hover:bg-blue/[0.03]"
              >
                <span className="font-mono text-xs text-ink/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl font-medium tracking-tight text-ink transition-colors group-hover:text-blue">
                  {w.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink/65">{w.body}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LATEST JOURNAL */}
      <section className="container-editorial mt-28 md:mt-36">
        <div className="flex items-end justify-between">
          <SectionHeader index="03" label="Latest Journal" title="Field notes & essays" />
          <CTA href="/journal" className="hidden shrink-0 md:inline-flex">
            All entries
          </CTA>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <JournalCard post={post} />
            </Reveal>
          ))}
        </div>
        <CTA href="/journal" className="mt-10 md:hidden">
          All entries
        </CTA>
      </section>

      {/* SELECTED PHOTOGRAPHY */}
      <section className="container-editorial mt-28 md:mt-36">
        <div className="flex items-end justify-between">
          <SectionHeader index="04" label="Selected Photography" title="Evidence from the field" />
          <CTA href="/photography" className="hidden shrink-0 md:inline-flex">
            Full archive
          </CTA>
        </div>
        <div className="mt-12">
          <PhotoGrid photos={photos} showFilters={false} />
        </div>
        <CTA href="/photography" className="mt-4 md:hidden">
          Full archive
        </CTA>
      </section>

      {/* STORY SNAPSHOT */}
      <section className="container-editorial mt-28 md:mt-36">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <Media src="/images/portrait.svg" alt="Odin Oddekalv" className="aspect-[4/5] w-full" />
          </Reveal>
          <Reveal className="md:col-span-7" delay={0.08}>
            <TypeLabel index="05" accent>
              Story
            </TypeLabel>
            <p className="mt-5 text-display-md font-medium tracking-tight text-ink">
              Some people inherit businesses. Some inherit money. Odin inherited
              a question.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              How can humans live on Earth without destroying the systems that
              make life possible? A childhood close to nature, a family history
              in environmental work, and a slow shift from fighting problems to
              building better systems.
            </p>
            <CTA href="/story" className="mt-8">
              Read the story
            </CTA>
          </Reveal>
        </div>
      </section>

      {/* FOLLOW THE JOURNEY */}
      <section className="container-editorial mt-28 md:mt-36">
        <Reveal className="border-t border-ink/10 pt-10">
          <TypeLabel index="06" accent>
            Follow the journey
          </TypeLabel>
          <div className="mt-6 flex flex-col gap-px overflow-hidden border-y border-ink/10 bg-ink/10">
            {follow.map((f) => (
              <a
                key={f.label}
                href={f.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between bg-paper px-1 py-6 transition-colors hover:bg-blue/[0.03]"
              >
                <span className="text-2xl font-medium tracking-tight text-ink transition-colors group-hover:text-blue md:text-3xl">
                  {f.label}
                </span>
                <span className="font-mono text-sm text-ink/40 transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-blue">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
