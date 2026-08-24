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
      <header className="container-editorial pb-10 md:pb-14">
        <Reveal>
          <div className="grid gap-8 border-b border-ink/10 pb-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="font-mono text-[0.64rem] uppercase tracking-label text-ink/42">
                PHOTOGRAPHY · OPEN EDITION PRINTS
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight text-ink md:text-6xl">
                Photographs, made physical.
              </h1>
            </div>
            <div className="max-w-lg md:col-span-4 md:col-start-9">
              <p className="text-base leading-relaxed text-ink/55">
                A small first edition from the wider photographic archive. Printed only when ordered on museum-quality matte paper.
              </p>
              <Link
                href="/photography"
                className="mt-5 inline-flex font-mono text-[0.64rem] uppercase tracking-label text-ink/48 transition-colors hover:text-blue"
              >
                View the photographic archive →
              </Link>
            </div>
          </div>
        </Reveal>
      </header>

      <main className="mx-auto max-w-[1900px] px-2 pb-20 md:px-4 md:pb-28">
        <div className="grid gap-x-1 gap-y-12 md:grid-cols-2">
          {prints.map((print, index) => (
            <Reveal key={print.href} delay={Math.min(index * 0.03, 0.12)}>
              <article className="group">
                <a href={print.href} target="_blank" rel="noreferrer" className="block">
                  <div className="overflow-hidden bg-stone-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={print.image}
                      alt={`${print.title}, photographed by Odin Oddekalv`}
                      loading={index < 2 ? "eager" : "lazy"}
                      className="aspect-[3/2] w-full object-cover transition duration-700 ease-editorial group-hover:scale-[1.01] group-hover:brightness-[0.97]"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-5 border-t border-ink/10 pt-3">
                    <div>
                      <h2 className="text-lg font-medium tracking-tight text-ink">{print.title}</h2>
                      <p className="mt-1 font-mono text-[0.59rem] uppercase tracking-label text-ink/40">
                        Open edition · Museum-quality matte paper
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-[0.62rem] uppercase tracking-label text-blue">
                      Buy print ↗
                    </span>
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="container-editorial mt-20 border-t border-ink/10 pt-8 md:mt-28">
          <div className="grid gap-8 md:grid-cols-12">
            <p className="font-mono text-[0.64rem] uppercase tracking-label text-ink/42 md:col-span-3">
              MADE ON DEMAND
            </p>
            <div className="md:col-span-7 md:col-start-5">
              <p className="max-w-2xl text-lg leading-relaxed text-ink/65">
                Each print is produced only after it is ordered. Printing, payment, shipping and normal production support are handled by the fulfilment partner.
              </p>
              <a
                href={`${store}/collections/photographic-prints`}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ink transition-colors hover:text-blue"
              >
                <span className="link-underline">Open print store</span>
                <span className="transition-transform duration-300 ease-editorial group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
