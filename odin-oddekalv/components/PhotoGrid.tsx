"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Media from "@/components/Media";
import { cx } from "@/lib/utils";
import type { PhotoItem, PhotoCategory } from "@/lib/types";

const aspect: Record<NonNullable<PhotoItem["orientation"]>, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  square: "aspect-square",
};

export default function PhotoGrid({
  photos,
  showFilters = true,
}: {
  photos: PhotoItem[];
  showFilters?: boolean;
}) {
  const categories = useMemo(() => {
    const set = new Set<PhotoCategory>(photos.map((p) => p.category));
    return ["ALL", ...Array.from(set)] as ("ALL" | PhotoCategory)[];
  }, [photos]);

  const [active, setActive] = useState<"ALL" | PhotoCategory>("ALL");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "ALL" ? photos : photos.filter((p) => p.category === active)),
    [active, photos]
  );

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, next, prev]);

  const current = open !== null ? filtered[open] : null;

  return (
    <div>
      {showFilters && (
        <div className="mb-10 flex flex-wrap gap-x-5 gap-y-2 border-b border-ink/10 pb-4">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cx(
                "font-mono text-xs uppercase tracking-label transition-colors hover:text-blue",
                active === c ? "text-blue" : "text-ink/45"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {/* Masonry-ish columns preserve each photo's orientation */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {filtered.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setOpen(i)}
            className="group block w-full break-inside-avoid text-left"
          >
            <Media
              src={p.image}
              alt={p.title}
              className={cx("w-full", aspect[p.orientation ?? "landscape"])}
              imgClassName="group-hover:scale-[1.03]"
            />
            <div className="mt-3 flex items-baseline justify-between gap-3">
              <p className="text-sm font-medium tracking-tight text-ink transition-colors group-hover:text-blue">
                {p.title}
              </p>
              <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-label text-ink/40">
                {p.location} · {p.year}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-paper/98 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <div className="container-editorial flex h-14 shrink-0 items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-label text-blue">
                {current.category}
              </span>
              <button
                type="button"
                onClick={close}
                className="font-mono text-xs uppercase tracking-label text-ink hover:text-blue"
                aria-label="Close"
              >
                Close ✕
              </button>
            </div>

            <div
              className="flex flex-1 items-center justify-center px-6 pb-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.figure
                key={current.id}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex max-h-full w-full max-w-4xl flex-col"
              >
                <div className="min-h-0 flex-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={current.image}
                    alt={current.title}
                    className="mx-auto max-h-[68vh] w-auto border border-ink/10 object-contain"
                  />
                </div>
                <figcaption className="mx-auto mt-5 max-w-2xl text-center">
                  <p className="text-lg font-medium tracking-tight text-ink">
                    {current.title}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-label text-ink/45">
                    {current.location} · {current.year}
                  </p>
                  <p className="mt-3 leading-relaxed text-ink/65">{current.caption}</p>
                </figcaption>
              </motion.figure>
            </div>

            <div
              className="container-editorial flex h-14 shrink-0 items-center justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={prev}
                className="font-mono text-xs uppercase tracking-label text-ink/60 hover:text-blue"
              >
                ← Prev
              </button>
              <span className="font-mono text-[0.7rem] uppercase tracking-label text-ink/40">
                {(open ?? 0) + 1} / {filtered.length}
              </span>
              <button
                type="button"
                onClick={next}
                className="font-mono text-xs uppercase tracking-label text-ink/60 hover:text-blue"
              >
                Next →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
