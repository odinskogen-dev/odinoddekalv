// content/expeditions.ts
import type { Expedition } from "@/lib/types";

export const expeditions: Expedition[] = [
  {
    title: "Norway",
    slug: "norway",
    location: "Fjords, forests and the living north",
    year: "Ongoing",
    theme: "Home ground",
    description:
      "The home ground of the work — cold coastlines, old forests and the systems of the north. Where most of the field notes and a great deal of the photography begin.",
    images: ["/images/exp-norway-1.svg", "/images/exp-norway-2.svg"],
    relatedJournal: ["field-note-limits", "not-a-backdrop"],
  },
  {
    title: "Amazonia",
    slug: "amazonia",
    location: "South America",
    year: "Future",
    theme: "Rainforest protection research",
    description:
      "A future research journey into rainforest protection — learning from the people and systems that keep the largest living engine on land running.",
    images: ["/images/exp-amazonia-1.svg"],
  },
  {
    title: "Ocean",
    slug: "ocean",
    location: "Blue systems",
    year: "Ongoing",
    theme: "Whales, marine life and blue systems",
    description:
      "Time spent at the boundary of two worlds — whales, marine life and the blue systems that regulate everything above the surface.",
    images: ["/images/exp-ocean-1.svg", "/images/exp-ocean-2.svg"],
    relatedJournal: ["not-a-backdrop"],
  },
  {
    title: "Cities",
    slug: "cities",
    location: "Built environments",
    year: "Ongoing",
    theme: "How humans organise life on land",
    description:
      "Cities as ecosystems — studying how humans organise life on land, and what it would take for the built environment to behave like a living system.",
    images: ["/images/exp-cities-1.svg"],
  },
];
