import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PhotoGrid from "@/components/PhotoGrid";
import type { PhotoItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "Photography",
  description: "Selected photographs by Odin Oddekalv — landscape, life, people, culture and field work.",
};

const photos: PhotoItem[] = [
  { id: "mulafossur", title: "Múlafossur", location: "Faroe Islands", year: "2022", category: "PLACES", caption: "Weather, sea and a village held against the edge of the North Atlantic.", image: "/images/odin/mulafossur.jpg", orientation: "landscape" },
  { id: "im-hungry", title: "I’m Hungry", location: "Faroe Islands", year: "2022", category: "WILDLIFE", caption: "One of the quieter encounters from the islands.", image: "/images/odin/gold/im-hungry.webp", orientation: "portrait" },
  { id: "seacabin", title: "Sea Cabin", location: "Norway", year: "", category: "PLACES", caption: "Architecture at the waterline.", image: "/images/odin/gold/seacabin.webp", orientation: "landscape" },
  { id: "unstad", title: "Unstad Arctic Surf", location: "Lofoten", year: "", category: "PEOPLE", caption: "Cold water, long light and a northern horizon.", image: "/images/odin/gold/unstad-arctic-surf.webp", orientation: "landscape" },
  { id: "mid-summer", title: "Mid-Summer", location: "Lofoten", year: "", category: "NATURE", caption: "Light that never quite leaves.", image: "/images/odin/gold/lofoten-mid-summer.webp", orientation: "landscape" },
  { id: "samuel", title: "Samuel", location: "People", year: "", category: "PEOPLE", caption: "Portrait from the wider archive.", image: "/images/odin/gold/samuel.webp", orientation: "portrait" },
  { id: "volcanic-void", title: "Volcanic Void", location: "Faroe Islands", year: "2022", category: "NATURE", caption: "Human scale disappears quickly here.", image: "/images/odin/gold/volcanic-void.webp", orientation: "landscape" },
  { id: "arctic-white-angel", title: "Arctic White Angel", location: "North Atlantic", year: "", category: "WILDLIFE", caption: "A portrait of another life looking back.", image: "/images/odin/arctic-white-angel.jpg", orientation: "portrait" },
  { id: "village-life", title: "Village Life", location: "Faroe Islands", year: "2022", category: "PLACES", caption: "The islands are lived-in places, not scenery.", image: "/images/odin/gold/village-life.webp", orientation: "landscape" },
  { id: "girson", title: "Girson NMG", location: "Culture", year: "", category: "CULTURE", caption: "Music, light and the human world belong in the archive too.", image: "/images/odin/gold/girson-nmg.webp", orientation: "portrait" },
  { id: "napoleon", title: "Napoleon", location: "Culture", year: "", category: "CULTURE", caption: "History, objects and institutions are part of how we see the present.", image: "/images/odin/gold/napoleon.webp", orientation: "portrait" },
  { id: "canggu", title: "Canggu", location: "Culture / night", year: "", category: "CULTURE", caption: "A different register of the same world.", image: "/images/odin/gold/aksel-canggu.webp", orientation: "portrait" },
  { id: "snohette", title: "Snøhette", location: "Field", year: "", category: "EXPEDITIONS", caption: "Movement, weather and the work of getting there.", image: "/images/odin/gold/snohette.webp", orientation: "portrait" },
  { id: "walk-line", title: "Walk the Line", location: "Faroe Islands", year: "2022", category: "NATURE", caption: "A small figure at the edge of a much larger system.", image: "/images/odin/gold/walk-the-line.webp", orientation: "landscape" },
  { id: "long-way-home", title: "The Long Way Home", location: "Faroe Islands", year: "2022", category: "FIELD NOTES", caption: "The return is part of the story.", image: "/images/odin/long-way-home.jpg", orientation: "landscape" },
  { id: "handshake", title: "Lofoten Handshake", location: "Lofoten", year: "", category: "PEOPLE", caption: "A human moment inside a much larger landscape.", image: "/images/odin/gold/lofoten-handshake.webp", orientation: "landscape" },
  { id: "we-will-tell", title: "We Will Tell", location: "Operation: Bloody Fjords", year: "2022", category: "SEA SHEPHERD", caption: "Documentary work from the Sea Shepherd campaign in the Faroe Islands.", image: "/images/odin/gold/we-will-tell.webp", orientation: "landscape" },
  { id: "the-grind", title: "The Grind", location: "Operation: Bloody Fjords", year: "2022", category: "SEA SHEPHERD", caption: "A graphic documentary frame from the whale hunt. Viewer discretion advised.", image: "/images/odin/gold/the-grind.webp", orientation: "landscape" },
  { id: "storming-beach", title: "Storming Beach", location: "Operation: Bloody Fjords", year: "2022", category: "SEA SHEPHERD", caption: "Sea Shepherd field documentation from the shoreline.", image: "/images/odin/gold/storming-beach.webp", orientation: "landscape" },
  { id: "not-all-tradition", title: "Not All Tradition Is Worth Keeping", location: "Operation: Bloody Fjords", year: "2022", category: "SEA SHEPHERD", caption: "A documentary frame about the collision between tradition, culture and animal life.", image: "/images/odin/gold/not-all-tradition.webp", orientation: "landscape" },
  { id: "end-whaling", title: "End Whaling", location: "Operation: Bloody Fjords", year: "2022", category: "SEA SHEPHERD", caption: "Campaign documentation from the Faroe Islands.", image: "/images/odin/gold/end-whaling.webp", orientation: "landscape" },
  { id: "tears-flowers", title: "Tears and Flowers for the Whales", location: "Operation: Bloody Fjords", year: "2022", category: "SEA SHEPHERD", caption: "A quieter frame after the violence.", image: "/images/odin/gold/tears-and-flowers.webp", orientation: "landscape" },
  { id: "future", title: "The Future", location: "Norway", year: "", category: "FIELD NOTES", caption: "Action is also made of ordinary people showing up.", image: "/images/odin/the-future.jpg", orientation: "landscape" },
  { id: "field-portrait", title: "In the Field", location: "Faroe Islands", year: "2022", category: "FIELD NOTES", caption: "Field portrait during the Faroe Islands work.", image: "/images/odin/faroe-field-walk.jpg", orientation: "portrait" },
];

export default function PhotographyPage() {
  return (
    <div className="pt-14 md:pt-20">
      <header className="container-editorial pb-9 md:pb-12">
        <Reveal>
          <div className="grid gap-6 border-b border-ink/10 pb-7 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="font-mono text-[0.64rem] uppercase tracking-label text-ink/42">PHOTOGRAPHY · SELECTED ARCHIVE</p>
              <h1 className="mt-4 text-4xl font-medium tracking-tight text-ink md:text-6xl">Photography</h1>
            </div>
            <div className="max-w-lg md:col-span-4 md:col-start-9">
              <p className="text-base leading-relaxed text-ink/55">A tighter edit from a much larger body of work — landscape, life, people, culture and environmental field documentation.</p>
              <Link href="/prints" className="group mt-5 inline-flex items-center gap-2 font-mono text-[0.64rem] uppercase tracking-label text-ink transition-colors hover:text-blue">
                <span className="link-underline">Selected photographs available as prints</span>
                <span className="transition-transform duration-300 ease-editorial group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </header>

      <main className="mx-auto max-w-[1900px] px-2 pb-20 md:px-4 md:pb-28">
        <Reveal>
          <PhotoGrid photos={photos} />
        </Reveal>
      </main>
    </div>
  );
}
