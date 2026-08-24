export const journalVisuals: Record<string, string> = {
  "future-worth-choosing": "/images/odin/gold/walk-the-line.webp",
  "change-moves-through-people": "/images/odin/gold/girson-nmg.webp",
  "trust-has-to-be-earned": "/images/odin/gold/samuel.webp",
  "build-one-good-model": "/images/odin/gold/snohette.webp",
  "not-a-backdrop": "/images/odin/gold/im-hungry.webp",
};

export function getJournalVisual(slug: string, fallback: string) {
  return journalVisuals[slug] ?? fallback;
}
