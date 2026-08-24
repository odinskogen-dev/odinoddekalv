import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Photographic Prints — Odin Oddekalv",
  description:
    "Open-edition photographic prints by Odin Oddekalv, produced on demand on museum-quality matte paper.",
};

const store = "https://odin-oddekalv-photography-shop.fourthwall.com";

const prints = [
  {
    title: "Summit at Sunset",
    image:
      "https://cdn.fourthwall.com/customizations/sh_75dbb360-ca9e-4bb9-a601-0c9684bbe723/dee5444a-c377-4a6f-b69b-3eb9c46371e0.jpeg",
    href: `${store}/products/summit-at-sunset-fine-art-print`,
  },
  {
    title: "Purple Shore",
    image:
      "https://cdn.fourthwall.com/customizations/sh_75dbb360-ca9e-4bb9-a601-0c9684bbe723/f3b06f85-6afc-464f-8816-8cf330cb05ca.jpeg",
    href: `${store}/products/purple-shore-fine-art-print`,
  },
  {
    title: "Bergen Reflections",
    image:
      "https://cdn.fourthwall.com/customizations/sh_75dbb360-ca9e-4bb9-a601-0c9684bbe723/47488d3c-5c44-47a7-81b1-e8ed8f0d2d35.jpeg",
    href: `${store}/products/bergen-reflections-fine-art-print`,
  },
  {
    title: "Bergen Blue Hour",
    image:
      "https://cdn.fourthwall.com/customizations/sh_75dbb360-ca9e-4bb9-a601-0c9684bbe723/169bc614-daea-41ce-99ee-21e5d02d2c22.jpeg",
    href: `${store}/products/bergen-blue-hour-fine-art-print`,
  },
  {
    title: "Northern Harbour",
    image:
      "https://cdn.fourthwall.com/customizations/sh_75dbb360-ca9e-4bb9-a601-0c9684bbe723/a093c3e4-a52a-4929-8090-f82d555f9e29.jpeg",
    href: `${store}/products/northern-harbour-fine-art-print`,
  },
] as const;

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
        <div className="space-y-20 md:space-y-32">
          {prints.map((print, index) => (
            <Reveal key={print.href} delay={Math.min(index * 0.025, 0.1)}>
              <article className="group">
                <a href={print.href} target="_blank" rel="noreferrer" className="block">
                  <div className="mx-auto w-full max-w-[2000px] overflow-hidden bg-ink">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={print.image}
                      alt={`${print.title}, photographed by Odin Oddekalv`}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="block max-h-[88svh] w-full object-contain transition duration-700 ease-editorial group-hover:brightness-[0.97]"
                    />
                  </div>

                  <div className="container-editorial mt-5 grid gap-4 border-t border-ink/10 pt-4 md:grid-cols-12 md:items-start">
                    <div className="md:col-span-7">
                      <p className="font-mono text-[0.58rem] uppercase tracking-label text-ink/38">
                        {String(index + 1).padStart(2, "0")}_ · OPEN EDITION · 5 × 7 IN
                      </p>
                      <h2 className="mt-2 text-2xl font-medium tracking-tight text-ink md:text-4xl">
                        {print.title}
                      </h2>
                    </div>
                    <div className="md:col-span-3 md:col-start-10 md:text-right">
                      <span className="font-mono text-[0.66rem] uppercase tracking-label text-blue">
                        Buy print ↗
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-ink/45">
                        Museum-quality matte paper · Produced on demand
                      </p>
                    </div>
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

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
