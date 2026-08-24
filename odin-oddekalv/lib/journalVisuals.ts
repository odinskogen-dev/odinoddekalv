export const journalVisuals: Record<string, string> = {
  "future-worth-choosing": "/images/odin/the-future.jpg",
  "people-are-infrastructure": "/images/odin/hope-4planet.jpg",
  "honesty-is-infrastructure": "/images/odin/mulafossur.jpg",
  "build-one-good-model": "/images/odin/long-way-home.jpg",
  "not-a-backdrop": "/images/odin/arctic-white-angel.jpg",
};

export function getJournalVisual(slug: string, fallback: string) {
  return journalVisuals[slug] ?? fallback;
}
