import Link from "next/link";
import { nav, navSecondary, site } from "@/content/site";

const elsewhere = [
  { label: "4PLANET", href: site.links.fourplanet },
  { label: "P4NTHER", href: site.links.p4nther },
  { label: "Instagram", href: site.links.instagram },
  { label: "Substack", href: site.links.substack },
];

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-ink/10 md:mt-44">
      <div className="container-editorial py-16 md:py-24">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="text-3xl font-medium tracking-tight text-ink">{site.shortmark}</Link>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink/55">{site.tagline}</p>
            <p className="mt-8 font-mono text-[0.65rem] uppercase tracking-label text-ink/38">FOR ALL THAT LIVES_</p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[0.65rem] uppercase tracking-label text-ink/38">Rooms</p>
            <ul className="mt-5 space-y-2.5">
              {[...nav, ...navSecondary].map((item) => (
                <li key={item.href}><Link href={item.href} className="link-underline text-sm text-ink/68 hover:text-blue">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-label text-ink/38">Elsewhere</p>
            <ul className="mt-5 space-y-2.5">
              {elsewhere.map((item) => <li key={item.label}><a href={item.href} target="_blank" rel="noreferrer" className="link-underline text-sm text-ink/68 hover:text-blue">{item.label}</a></li>)}
              <li><a href={site.links.email} className="link-underline text-sm text-ink/68 hover:text-blue">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink/10 pt-6 font-mono text-[0.62rem] uppercase tracking-label text-ink/35 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>The work is unfinished.</span>
        </div>
      </div>
    </footer>
  );
}
