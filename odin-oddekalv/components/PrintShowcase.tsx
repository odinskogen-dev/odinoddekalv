"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const store = "https://odin-oddekalv-photography-shop.fourthwall.com";

const prints = [
  {
    title: "Summit at Sunset",
    image: "https://cdn.fourthwall.com/customizations/sh_75dbb360-ca9e-4bb9-a601-0c9684bbe723/dee5444a-c377-4a6f-b69b-3eb9c46371e0.jpeg",
    href: `${store}/products/summit-at-sunset-fine-art-print`,
  },
  {
    title: "Purple Shore",
    image: "https://cdn.fourthwall.com/customizations/sh_75dbb360-ca9e-4bb9-a601-0c9684bbe723/f3b06f85-6afc-464f-8816-8cf330cb05ca.jpeg",
    href: `${store}/products/purple-shore-fine-art-print`,
  },
  {
    title: "Bergen Reflections",
    image: "https://cdn.fourthwall.com/customizations/sh_75dbb360-ca9e-4bb9-a601-0c9684bbe723/47488d3c-5c44-47a7-81b1-e8ed8f0d2d35.jpeg",
    href: `${store}/products/bergen-reflections-fine-art-print`,
  },
  {
    title: "Bergen Blue Hour",
    image: "https://cdn.fourthwall.com/customizations/sh_75dbb360-ca9e-4bb9-a601-0c9684bbe723/169bc614-daea-41ce-99ee-21e5d02d2c22.jpeg",
    href: `${store}/products/bergen-blue-hour-fine-art-print`,
  },
  {
    title: "Northern Harbour",
    image: "https://cdn.fourthwall.com/customizations/sh_75dbb360-ca9e-4bb9-a601-0c9684bbe723/a093c3e4-a52a-4929-8090-f82d555f9e29.jpeg",
    href: `${store}/products/northern-harbour-fine-art-print`,
  },
] as const;

const layout = [
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-12",
];

export default function PrintShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const previous = () => setActiveIndex((value) => value === null ? 0 : (value - 1 + prints.length) % prints.length);
  const next = () => setActiveIndex((value) => value === null ? 0 : (value + 1) % prints.length);

  useEffect(() => {
    if (activeIndex === null) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const active = activeIndex === null ? null : prints[activeIndex];

  return (
    <>
      <section className="mx-auto mt-24 max-w-[1900px] px-2 md:mt-36 md:px-5">
        <div className="container-editorial mb-8 grid gap-8 md:grid-cols-12 md:items-end md:px-0">
          <div className="md:col-span-7">
            <p className="font-mono text-[0.64rem] uppercase tracking-label text-ink/42">SELECTED PRINTS</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight text-ink md:text-6xl">
              Photographs, made physical.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="max-w-md text-base leading-relaxed text-ink/52">
              Five photographs from the archive, available as open-edition museum-quality prints.
            </p>
            <Link href="/prints" className="mt-5 inline-flex font-mono text-[0.64rem] uppercase tracking-label text-blue hover:text-ink">
              View all prints →
            </Link>
          </div>
        </div>

        <div className="grid gap-x-1 gap-y-12 md:grid-cols-12 md:gap-y-20">
          {prints.map((print, index) => (
            <figure key={print.href} className={layout[index]}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group block w-full cursor-zoom-in text-left"
                aria-label={`View ${print.title} fullscreen`}
              >
                <div className="overflow-hidden bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={print.image}
                    alt={`${print.title}, photographed by Odin Oddekalv`}
                    loading={index < 2 ? "eager" : "lazy"}
                    className={`block w-full object-cover transition duration-700 ease-editorial group-hover:scale-[1.008] group-hover:brightness-[0.97] ${index === 1 ? "aspect-[3/2] md:aspect-[4/5]" : index === 4 ? "max-h-[88svh] object-contain bg-ink" : "aspect-[3/2]"}`}
                  />
                </div>
              </button>

              <figcaption className="mt-4 grid gap-3 border-t border-ink/10 pt-3 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <p className="font-mono text-[0.58rem] uppercase tracking-label text-ink/38">{String(index + 1).padStart(2, "0")}_ · OPEN EDITION</p>
                  <h3 className="mt-1 text-xl font-medium tracking-tight text-ink md:text-2xl">{print.title}</h3>
                </div>
                <a
                  href={print.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[0.64rem] uppercase tracking-label text-blue transition-colors hover:text-ink sm:pt-1"
                >
                  Buy print ↗
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-white"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} fullscreen gallery view`}
        >
          <div className="flex h-full min-h-0 flex-col">
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-black/8 px-4 md:h-20 md:px-8">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[0.58rem] uppercase tracking-label text-black/38">ODIN ODDEKALV_</span>
                <span className="hidden font-mono text-[0.58rem] uppercase tracking-label text-black/28 sm:inline">PHOTOGRAPHIC PRINT</span>
              </div>
              <button type="button" onClick={close} className="font-mono text-[0.62rem] uppercase tracking-label text-black/60 transition-colors hover:text-black" aria-label="Close fullscreen image">
                Close ×
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-5 py-7 md:px-16 md:py-10">
              <button type="button" onClick={previous} className="absolute left-2 top-1/2 z-10 -translate-y-1/2 px-3 py-5 font-mono text-lg text-black/35 transition-colors hover:text-black md:left-6" aria-label="Previous photograph">←</button>

              <div className="flex h-full w-full items-center justify-center">
                <div className="flex max-h-full max-w-[1500px] items-center justify-center bg-white p-2 shadow-[0_12px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06] md:p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={active.image}
                    alt={`${active.title}, photographed by Odin Oddekalv`}
                    className="block max-h-[72svh] max-w-[86vw] object-contain md:max-h-[76svh] md:max-w-[82vw]"
                  />
                </div>
              </div>

              <button type="button" onClick={next} className="absolute right-2 top-1/2 z-10 -translate-y-1/2 px-3 py-5 font-mono text-lg text-black/35 transition-colors hover:text-black md:right-6" aria-label="Next photograph">→</button>
            </div>

            <div className="shrink-0 border-t border-black/8 px-4 py-4 md:px-8 md:py-5">
              <div className="mx-auto grid max-w-[1500px] gap-3 md:grid-cols-12 md:items-end">
                <div className="md:col-span-7">
                  <p className="font-mono text-[0.56rem] uppercase tracking-label text-black/32">{String(activeIndex + 1).padStart(2, "0")} / {String(prints.length).padStart(2, "0")} · OPEN EDITION</p>
                  <h2 className="mt-1 text-2xl font-medium tracking-tight text-black md:text-3xl">{active.title}</h2>
                </div>
                <div className="flex items-center gap-5 md:col-span-5 md:justify-end">
                  <Link href="/prints" onClick={close} className="font-mono text-[0.6rem] uppercase tracking-label text-black/45 hover:text-black">Print details</Link>
                  <a href={active.href} target="_blank" rel="noreferrer" className="font-mono text-[0.62rem] uppercase tracking-label text-blue hover:text-black">Buy print ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
