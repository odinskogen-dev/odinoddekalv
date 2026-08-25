"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";
import { cx } from "@/lib/utils";
import type { PhotoCategory, PhotoItem } from "@/lib/types";

const preferredOrder: ("ALL" | PhotoCategory)[] = [
  "ALL",
  "NATURE",
  "PEOPLE",
  "WILDLIFE",
  "CULTURE",
  "SEA SHEPHERD",
  "PLACES",
  "FIELD NOTES",
  "EXPEDITIONS",
];

export default function PhotoGrid({
  photos,
  showFilters = true,
}: {
  photos: PhotoItem[];
  showFilters?: boolean;
}) {
  const categories = useMemo(() => {
    const present = new Set<PhotoCategory>(photos.map((photo) => photo.category));
    return preferredOrder.filter((category) => category === "ALL" || present.has(category));
  }, [photos]);

  const [active, setActive] = useState<"ALL" | PhotoCategory>("ALL");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "ALL" ? photos : photos.filter((photo) => photo.category === active)),
    [active, photos]
  );

  useEffect(() => {
    setOpen(null);
  }, [active]);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((index) => (index === null ? index : (index + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () => setOpen((index) => (index === null ? index : (index - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, next, prev]);

  const current = open !== null ? filtered[open] : null;
  const metaFor = (photo: PhotoItem) => photo.location || photo.category;

  return (
    <div>
      {showFilters && (
        <div className="mb-7 flex flex-wrap gap-x-5 gap-y-3 border-b border-ink/10 pb-4 md:mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={cx(
                "font-mono text-[0.62rem] uppercase tracking-label transition-colors hover:text-blue",
                active === category ? "text-blue" : "text-ink/42"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="columns-1 gap-1 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-1">
        {filtered.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setOpen(index)}
            className="group relative block w-full break-inside-avoid overflow-hidden bg-stone-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
            aria-label={`Open ${photo.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.image}
              alt={`${photo.title}, photographed by Odin Oddekalv`}
              loading={index < 6 ? "eager" : "lazy"}
              className="block h-auto w-full transition duration-500 ease-editorial group-hover:brightness-[0.94]"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/65 via-black/20 to-transparent px-4 pb-3 pt-12 text-left text-paper transition-transform duration-300 ease-editorial group-hover:translate-y-0 group-focus-visible:translate-y-0">
              <span className="block text-sm font-medium tracking-tight">{photo.title}</span>
              <span className="mt-1 block font-mono text-[0.58rem] uppercase tracking-label text-paper/65">{metaFor(photo)}</span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[80] bg-paper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${current.title} lightbox`}
          >
            <div className="flex h-full flex-col">
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-ink/10 px-5 md:h-20 md:px-8">
                <div className="flex items-baseline gap-4">
                  <span className="text-[0.82rem] font-medium tracking-[-0.02em] text-ink">{site.wordmark}</span>
                  <span className="hidden font-mono text-[0.58rem] uppercase tracking-label text-ink/30 sm:inline">PHOTOGRAPHY</span>
                </div>
                <div className="flex items-center gap-5 md:gap-7">
                  <span className="font-mono text-[0.58rem] uppercase tracking-label text-ink/32">{String((open ?? 0) + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}</span>
                  <button type="button" onClick={prev} className="font-mono text-xs text-ink/55 transition-colors hover:text-blue" aria-label="Previous photograph">←</button>
                  <button type="button" onClick={next} className="font-mono text-xs text-ink/55 transition-colors hover:text-blue" aria-label="Next photograph">→</button>
                  <button type="button" onClick={close} className="font-mono text-xs uppercase tracking-label text-ink transition-colors hover:text-blue" aria-label="Close photograph">Close ×</button>
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-auto px-4 py-4 md:px-8 md:py-7" onClick={close}>
                <motion.figure
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.995 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  className="mx-auto flex min-h-full max-w-[1500px] flex-col items-center justify-center"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="flex w-full items-center justify-center bg-white p-3 shadow-[0_18px_60px_rgba(0,0,0,0.08)] md:p-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={current.image}
                      alt={`${current.title}, photographed by Odin Oddekalv`}
                      className="max-h-[72vh] max-w-full object-contain"
                    />
                  </div>
                  <figcaption className="mt-5 grid w-full max-w-3xl gap-2 border-t border-ink/10 pt-4 md:grid-cols-[1fr_auto] md:items-start">
                    <div>
                      <p className="text-base font-medium tracking-tight text-ink">{current.title}</p>
                      {current.caption && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/55">{current.caption}</p>}
                    </div>
                    <p className="font-mono text-[0.6rem] uppercase tracking-label text-ink/40 md:text-right">
                      {metaFor(current)}{current.year ? ` · ${current.year}` : ""}
                    </p>
                  </figcaption>
                </motion.figure>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
