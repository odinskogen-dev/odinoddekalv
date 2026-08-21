export const journalVisuals: Record<string, string> = {
  "why-i-am-searching": "/images/odin/faroe-portrait-02.jpg",
  "live-well-on-earth": "/images/odin/arctic-white-angel.jpg",
  "not-a-backdrop": "/images/odin/mulafossur.jpg",
  "easier-to-understand": "/images/odin/hope-4planet.jpg",
  "field-note-limits": "/images/odin/long-way-home.jpg",
  "building-4planet-in-public": "/images/odin/the-future.jpg",
};

export function getJournalVisual(slug: string, fallback: string) {
  return journalVisuals[slug] ?? fallback;
}
