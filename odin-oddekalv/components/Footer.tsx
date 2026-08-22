import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 md:mt-32">
      <div className="container-editorial py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <Link href="/" className="text-xl font-medium tracking-[-0.025em] text-ink">{site.wordmark}</Link>
            <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-label text-ink/38">FOR ALL THAT LIVES_</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[0.62rem] uppercase tracking-label text-ink/45 md:col-span-6 md:justify-end">
            <Link href="/story" className="hover:text-blue">Story</Link>
            <Link href="/field" className="hover:text-blue">Field</Link>
            <Link href="/work" className="hover:text-blue">Work</Link>
            <Link href="/journal" className="hover:text-blue">Notes</Link>
            <a href={site.links.email} className="hover:text-blue">Contact</a>
          </div>
        </div>
        <div className="mt-9 flex flex-col gap-2 border-t border-ink/10 pt-5 font-mono text-[0.58rem] uppercase tracking-label text-ink/30 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Norway · The work is unfinished.</span>
        </div>
      </div>
    </footer>
  );
}
