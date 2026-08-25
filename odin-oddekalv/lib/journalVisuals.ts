export const journalVisuals: Record<string, string> = {
  "before-the-decision-is-made": "/images/odin/gold/volcanic-void.webp",
  "future-worth-choosing": "/images/odin/gold/walk-the-line.webp",
  "change-moves-through-people": "/images/odin/gold/girson-nmg.webp",
  "truth-by-design": "/images/odin/gold/samuel.webp",
  "build-one-good-model": "/images/odin/gold/snohette.webp",
  "not-a-backdrop": "/images/odin/gold/im-hungry.webp",
};

export function getJournalVisual(slug: string, fallback: string) {
  return journalVisuals[slug] ?? fallback;
}
