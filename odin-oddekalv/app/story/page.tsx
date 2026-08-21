import type { Metadata } from "next";
import Timeline from "@/components/Timeline";
import TypeLabel from "@/components/TypeLabel";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { getTimeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Story",
  description: "How Odin Oddekalv came to spend a life exploring better ways for humans and nature to thrive together.",
};

export default function StoryPage() {
  const timeline = getTimeline();
  return (
    <div className="pt-16 md:pt-24">
      <header className="container-editorial">
        <Reveal>
          <TypeLabel index="02" accent>Story</TypeLabel>
          <h1 className="mt-5 max-w-4xl text-display-lg font-medium tracking-tight text-ink">Some people inherit businesses. Some inherit money. Some inherit questions.</h1>
        </Reveal>
      </header>

      <section className="container-editorial mt-16">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3"><p className="font-mono text-xs uppercase tracking-label text-ink/45">ORIGIN → RESPONSIBILITY → BUILD</p></div>
          <div className="prose-editorial md:col-span-7">
            <p>Odin grew up in Norway, close to coast and forest, where the living world was not a destination but a daily fact. That closeness shaped an early intuition: that we belong to nature&rsquo;s systems rather than stand outside them.</p>
            <p>He was exposed to environmental work through his family&rsquo;s history — including the context of Kurt Oddekalv. That history is part of the depth here, but it is not the identity. What remained was not a cause to inherit, but a question.</p>
            <blockquote>How can humans live on Earth without destroying the systems that make life possible?</blockquote>
            <p>Over time, the question shifted from only fighting what was going wrong toward something harder and more hopeful: building better systems. Moving from naming what one is against to building what one is for.</p>
            <p>That direction now runs through <strong>4PLANET</strong>, the main work, and <strong>P4NTHER</strong>, the cultural layer — alongside photography, writing and the long work of building in public.</p>
          </div>
        </Reveal>
      </section>

      <section className="container-editorial mt-28">
        <TypeLabel accent>The path</TypeLabel>
        <h2 className="mb-12 mt-5 text-display-md font-medium tracking-tight text-ink">A question, followed.</h2>
        <Timeline entries={timeline} />
      </section>

      <section className="container-editorial mt-28">
        <Reveal className="border-y border-ink/10 py-16 text-center">
          <p className="mx-auto max-w-3xl text-display-md font-medium tracking-tight text-ink">&ldquo;The living world is not a backdrop, but the <span className="text-blue">system we belong to</span>.&rdquo;</p>
          <CTA href="/manifest" className="mt-8">Read the manifest</CTA>
        </Reveal>
      </section>
    </div>
  );
}
