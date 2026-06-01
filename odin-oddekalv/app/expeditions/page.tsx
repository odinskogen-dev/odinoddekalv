import type { Metadata } from "next";
import ExpeditionCard from "@/components/ExpeditionCard";
import TypeLabel from "@/components/TypeLabel";
import Reveal from "@/components/Reveal";
import { getExpeditions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Expeditions",
  description:
    "Travel, learning journeys and field work — the places that give the work movement.",
};

export default function ExpeditionsPage() {
  const expeditions = getExpeditions();

  return (
    <div className="container-editorial pt-16 md:pt-24">
      <Reveal>
        <TypeLabel index="06" accent>
          Expeditions
        </TypeLabel>
        <h1 className="mt-5 max-w-3xl text-display-lg font-medium tracking-tight text-ink">
          Field work, learning journeys and the places that teach.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          The work needs movement. These are the regions and systems Odin
          travels to, learns from and documents — some ongoing, some still
          ahead.
        </p>
      </Reveal>

      <section className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {expeditions.map((e, i) => (
          <Reveal key={e.slug} delay={(i % 2) * 0.05}>
            <ExpeditionCard expedition={e} i={i} />
          </Reveal>
        ))}
      </section>
    </div>
  );
}
