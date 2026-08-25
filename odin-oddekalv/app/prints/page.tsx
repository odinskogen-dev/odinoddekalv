import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PrintCatalogue } from "@/components/PrintShowcase";

export const metadata: Metadata = {
  title: "Photographic Prints — Odin Oddekalv",
  description:
    "Open-edition photographic prints by Odin Oddekalv, produced on demand on museum-quality matte paper.",
};

export default function PrintsPage() {
  return (
    <div className="pt-14 md:pt-20">
      <header className="container-editorial pb-10 md:pb-16">
        <Reveal>
          <div className="grid gap-8 border-b border-ink/10 pb-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="font-mono text-[0.64rem] uppercase tracking-label text-ink/42">
                PHOTOGRAPHY · OPEN EDITION PRINTS
              </p>
              <h1 className="mt-4 max-w-4xl font-medium tracking-tight text-ink [font-size:clamp(46px,7vw,100px)] [letter-spacing:-0.045em] [line-height:0.92]">
                Photographs,<br />made physical.
              </h1>
            </div>
            <div className="max-w-lg md:col-span-3 md:col-start-10">
              <p className="text-base leading-relaxed text-ink/55">
                A first selection from the photographic archive. Printed only when ordered on museum-quality matte paper.
              </p>
              <Link
                href="/photography"
                className="mt-5 inline-flex font-mono text-[0.64rem] uppercase tracking-label text-ink/48 transition-colors hover:text-blue"
              >
                View archive →
              </Link>
            </div>
          </div>
        </Reveal>
      </header>

      <main className="pb-20 md:pb-32">
        <PrintCatalogue />

        <Reveal className="container-editorial mt-24 border-t border-ink/10 pt-8 md:mt-36">
          <div className="grid gap-8 md:grid-cols-12">
            <p className="font-mono text-[0.64rem] uppercase tracking-label text-ink/42 md:col-span-3">
              MADE ON DEMAND
            </p>
            <div className="md:col-span-7 md:col-start-5">
              <p className="max-w-2xl text-lg leading-relaxed text-ink/65">
                Each print is made only after it is ordered. Payment, printing, shipping and normal order support are handled by the fulfilment partner.
              </p>
            </div>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
