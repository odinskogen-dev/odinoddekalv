import type { Metadata } from "next";
import PhotoGrid from "@/components/PhotoGrid";
import TypeLabel from "@/components/TypeLabel";
import Reveal from "@/components/Reveal";
import { getPhotography } from "@/lib/content";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "A premium photography archive — wildlife, nature, people, places and expeditions. Evidence from a lifelong exploration.",
};

export default function PhotographyPage() {
  const photos = getPhotography();

  return (
    <div className="container-editorial pt-16 md:pt-24">
      <Reveal>
        <TypeLabel index="05" accent>
          Photography
        </TypeLabel>
        <h1 className="mt-5 max-w-3xl text-display-lg font-medium tracking-tight text-ink">
          Evidence from a lifelong exploration.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          A visual archive of nature, people, places and the living world —
          built slowly, over years. Not a portfolio, but a long record of
          looking. Tap any frame to view it.
        </p>
      </Reveal>

      <div className="mt-14">
        <PhotoGrid photos={photos} />
      </div>

      <p className="mt-12 max-w-xl font-mono text-xs leading-relaxed text-ink/40">
        Note: images shown are field-plate placeholders. Replace the files under
        /public/images and the paths in /content/photography.ts with real
        photography.
      </p>
    </div>
  );
}
