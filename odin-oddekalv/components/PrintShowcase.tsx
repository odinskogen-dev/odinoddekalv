"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

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

type GalleryVariant = "home" | "catalogue";

function Gallery({ variant }: { variant: GalleryVariant }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

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

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < 45) return;
    if (distance > 0) previous();
    else next();
  };

  return (
    <>
      {variant === "home" ? (
        <section className="mx-auto mt-24 max-w-[1900px] px-2 md:mt-36 md:px-5">
          <div className="container-editorial mb-8 grid gap-8 md:grid-cols-12 md:items-end md:px-0">
            <div className="md:col-span-7">
              <p className="font-mono text-[0.64rem] uppercase tracking-label text-ink/42">SELECTED PRINTS</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight text-ink md:text-6xl">Photographs, made physical.</h2>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="max-w-md text-base leading-relaxed text-ink/52">Five photographs from the archive, available as open-edition museum-quality prints.</p>
              <Link href="/prints" className="mt-5 inline-flex font-mono text-[0.64rem] uppercase tracking-label text-blue hover:text-ink">View all prints →</Link>
            </div>
          </div>

          <div className="grid gap-x-1 gap-y-12 md:grid-cols-12 md:gap-y-20">
            {prints.map((print, index) => (
              <figure key={print.href} className={layout[index]}>
                <button type="button" onClick={() => setActiveIndex(index)} className="group block w-full cursor-zoom-in text-left" aria-label={`View ${print.title} fullscreen`}>
                  <div className="overflow-hidden bg-stone-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={print.image} alt={`${print.title}, photographed by Odin Oddekalv`} loading={index < 2 ? "eager" : "lazy"} className={`block w-full object-cover transition duration-700 ease-editorial group-hover:scale-[1.008] group-hover:brightness-[0.97] ${index === 1 ? "aspect-[3/2] md:aspect-[4/5]" : index === 4 ? "max-h-[88svh] object-contain bg-ink" : "aspect-[3/2]"}`} />
                  </div>
                </button>

                <figcaption className="mt-4 grid gap-3 border-t border-ink/10 pt-3 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div>
                    <p className="font-mono text-[0.58rem] uppercase tracking-label text-ink/38">{String(index + 1).padStart(2, "0")}_ · OPEN EDITION</p>
                    <h3 className="mt-1 text-xl font-medium tracking-tight text-ink md:text-2xl">{print.title}</h3>
                  </div>
                  <button type="button" onClick={() => setActiveIndex(index)} className="group/cta min-w-[9rem] border-y border-ink/10 py-2 text-left transition-colors hover:border-ink/25 sm:text-right" aria-label={`View and buy ${print.title}`}>
                    <span className="flex items-center justify-between gap-5 font-mono text-[0.6rem] uppercase tracking-label text-ink/52 transition-colors group-hover/cta:text-blue sm:justify-end">
                      <span>Buy print</span><span>↗</span>
                    </span>
                  </button>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : (
        <div className="space-y-20 md:space-y-32">
          {prints.map((print, index) => (
            <article key={print.href} className="group">
              <button type="button" onClick={() => setActiveIndex(index)} className="block w-full cursor-zoom-in text-left" aria-label={`View ${print.title} fullscreen`}>
                <div className="mx-auto w-full max-w-[2000px] overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={print.image} alt={`${print.title}, photographed by Odin Oddekalv`} loading={index === 0 ? "eager" : "lazy"} className="block max-h-[88svh] w-full object-contain transition duration-700 ease-editorial group-hover:brightness-[0.97]" />
                </div>
              </button>

              <div className="container-editorial mt-5 grid gap-4 border-t border-ink/10 pt-4 md:grid-cols-12 md:items-start">
                <div className="md:col-span-7">
                  <p className="font-mono text-[0.58rem] uppercase tracking-label text-ink/38">{String(index + 1).padStart(2, "0")}_ · OPEN EDITION · 5 × 7 IN</p>
                  <h2 className="mt-2 text-2xl font-medium tracking-tight text-ink md:text-4xl">{print.title}</h2>
                </div>
                <div className="md:col-span-3 md:col-start-10">
                  <button type="button" onClick={() => setActiveIndex(index)} className="group/cta w-full border-y border-ink/10 py-3 text-left transition-colors hover:border-ink/25" aria-label={`View and buy ${print.title}`}>
                    <span className="flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-label text-ink/50 transition-colors group-hover/cta:text-blue">
                      <span>Buy print</span><span>↗</span>
                    </span>
                  </button>
                  <p className="mt-3 text-sm leading-relaxed text-ink/45">Museum-quality matte paper · Produced on demand</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {active && activeIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-white" role="dialog" aria-modal="true" aria-label={`${active.title} fullscreen gallery view`} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="flex h-full min-h-0 flex-col">
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-black/8 px-4 md:h-20 md:px-8">
              <Link href="/" onClick={close} className="text-[0.82rem] font-medium tracking-[-0.02em] text-black" aria-label="Odin Oddekalv — home">{site.wordmark}</Link>
              <div className="flex items-center gap-5">
                <span className="hidden font-mono text-[0.56rem] uppercase tracking-label text-black/28 sm:inline">PHOTOGRAPHIC PRINT</span>
                <button type="button" onClick={close} className="font-mono text-[0.6rem] uppercase tracking-label text-black/48 transition-colors hover:text-black" aria-label="Close fullscreen image">Close ×</button>
              </div>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-5 py-6 md:px-16 md:py-9">
              <button type="button" onClick={previous} className="absolute left-1 top-1/2 z-10 -translate-y-1/2 px-3 py-6 font-mono text-lg text-black/28 transition-colors hover:text-black md:left-5" aria-label="Previous photograph">←</button>

              <div className="flex h-full w-full items-center justify-center">
                <div className="flex max-h-full max-w-[1500px] items-center justify-center bg-white p-2 shadow-[0_12px_50px_rgba(0,0,0,0.055)] ring-1 ring-black/[0.055] md:p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={active.image} alt={`${active.title}, photographed by Odin Oddekalv`} className="block max-h-[70svh] max-w-[88vw] object-contain md:max-h-[75svh] md:max-w-[82vw]" />
                </div>
              </div>

              <button type="button" onClick={next} className="absolute right-1 top-1/2 z-10 -translate-y-1/2 px-3 py-6 font-mono text-lg text-black/28 transition-colors hover:text-black md:right-5" aria-label="Next photograph">→</button>
            </div>

            <div className="shrink-0 px-4 pb-4 md:px-8 md:pb-6">
              <div className="mx-auto max-w-[1500px] border-t border-black/10">
                <div className="grid gap-3 py-3.5 md:grid-cols-12 md:items-end md:py-4">
                  <div className="md:col-span-7">
                    <p className="font-mono text-[0.54rem] uppercase tracking-label text-black/30">{String(activeIndex + 1).padStart(2, "0")} / {String(prints.length).padStart(2, "0")} · OPEN EDITION</p>
                    <h2 className="mt-1 text-xl font-medium tracking-tight text-black md:text-2xl">{active.title}</h2>
                  </div>
                  <p className="font-mono text-[0.55rem] uppercase tracking-label text-black/32 md:col-span-5 md:text-right">Swipe or use arrows to browse</p>
                </div>

                <a href={active.href} target="_blank" rel="noreferrer" className="group flex w-full items-center justify-between border-y border-black/10 py-3.5 transition-colors hover:border-black/25 md:py-4" aria-label={`Buy ${active.title} print`}>
                  <span className="font-mono text-[0.62rem] uppercase tracking-label text-black/52 transition-colors group-hover:text-blue">Buy print</span>
                  <span className="flex items-center gap-6 font-mono text-[0.56rem] uppercase tracking-label text-black/32">
                    <span className="hidden sm:inline">Museum-quality matte · 5 × 7 in</span>
                    <span className="text-base text-black/48 transition-transform duration-300 group-hover:translate-x-1">↗</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function PrintShowcase() {
  return <Gallery variant="home" />;
}

export function PrintCatalogue() {
  return <Gallery variant="catalogue" />;
}
