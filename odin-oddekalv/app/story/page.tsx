import type { Metadata } from "next";
import Media from "@/components/Media";
import Timeline from "@/components/Timeline";
import TypeLabel from "@/components/TypeLabel";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { getTimeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Story",
  description:
    "How Odin Oddekalv came to spend a life exploring better ways for humans and nature to thrive together.",
};

export default function StoryPage() {
  const timeline = getTimeline();

  return (
    <div className="pt-16 md:pt-24">
      {/* Intro */}
      <header className="container-editorial">
        <Reveal>
          <TypeLabel index="04" accent>
            Story
          </TypeLabel>
          <h1 className="mt-5 max-w-4xl text-display-lg font-medium tracking-tight text-ink">
            Some people inherit businesses. Some inherit money. Some inherit
            questions.
          </h1>
        </Reveal>
      </header>

      {/* Lead with portrait */}
      <section className="container-editorial mt-14 grid gap-10 md:grid-cols-12 md:items-start">
        <Reveal className="md:col-span-5">
          <Media src="/images/portrait.svg" alt="Odin Oddekalv" className="aspect-[4/5] w-full" />
          <p className="mt-3 font-mono text-xs uppercase tracking-label text-ink/40">
            Norway · field portrait
          </p>
        </Reveal>

        <Reveal className="md:col-span-7" delay={0.06}>
          <div className="prose-editorial">
            <p>
              Odin grew up in Norway, close to coast and forest, where the living
              world was not a destination but a daily fact. That closeness shaped
              an early intuition: that we belong to nature&rsquo;s systems rather
              than stand outside them.
            </p>
            <p>
              He was exposed to environmental work through his family&rsquo;s
              history — including the context of Kurt Oddekalv. That history is
              part of the depth here, but it is not the identity. What remained
              was not a cause to inherit, but a question.
            </p>
            <blockquote>
              How can humans live on Earth without destroying the systems that
              make life possible?
            </blockquote>
            <p>
              For years that question was answered through conflict — through
              fighting what was going wrong. Over time, Odin felt the pull toward
              something harder and more hopeful: not only resisting problems, but
              building better systems. Moving from naming what one is against to
              building what one is for.
            </p>
            <p>
              From that shift came <strong>P4NTHER</strong>, a creative studio and
              idea engine, and <strong>4PLANET</strong>, a system for making
              ecological action easier to understand, support and scale. The
              mission now is simple to state and long to live:{" "}
              <strong>
                explore better ways for humans and nature to thrive together
              </strong>{" "}
              — through photography, writing, systems and the slow work of
              building in public.
            </p>
          </div>
          <CTA href="/journal" className="mt-8">
            Read the journal
          </CTA>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="container-editorial mt-28">
        <TypeLabel accent>The path</TypeLabel>
        <h2 className="mb-12 mt-5 text-display-md font-medium tracking-tight text-ink">
          A question, followed.
        </h2>
        <Timeline entries={timeline} />
      </section>

      {/* Closing quote */}
      <section className="container-editorial mt-28">
        <Reveal className="border-y border-ink/10 py-16 text-center">
          <p className="mx-auto max-w-3xl text-display-md font-medium tracking-tight text-ink">
            &ldquo;The living world is not a backdrop, but the{" "}
            <span className="text-blue">system we belong to</span>.&rdquo;
          </p>
        </Reveal>
      </section>
    </div>
  );
}
