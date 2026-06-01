import Link from "next/link";
import { nav, navSecondary, site } from "@/content/site";

const externals = [
  { label: "Instagram", href: site.links.instagram },
  { label: "Substack", href: site.links.substack },
  { label: "4PLANET", href: site.links.fourplanet },
  { label: "P4NTHER", href: site.links.p4nther },
];

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-ink/10">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Identity */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-2xl font-medium tracking-tight text-ink"
            >
              {site.wordmark}
            </Link>
            <p className="mt-4 max-w-sm text-ink/60">{site.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs uppercase tracking-label text-ink/50">
              {site.roles.map((r) => (
                <a
                  key={r.org}
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue"
                >
                  {r.label} {r.org}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <p className="type-label mb-4">Navigate</p>
            <ul className="space-y-2">
              {[...nav, ...navSecondary].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-ink/70 hover:text-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div className="md:col-span-4">
            <p className="type-label mb-4">Follow the journey</p>
            <ul className="space-y-2">
              {externals.map((e) => (
                <li key={e.label}>
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-ink/70 hover:text-blue"
                  >
                    {e.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.links.email}
                  className="link-underline text-ink/70 hover:text-blue"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Baseline */}
        <div className="mt-16 flex flex-col gap-2 border-t border-ink/10 pt-6 font-mono text-[0.7rem] uppercase tracking-label text-ink/40 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>Exploring better ways for humans and nature to thrive together_</span>
        </div>
      </div>
    </footer>
  );
}
