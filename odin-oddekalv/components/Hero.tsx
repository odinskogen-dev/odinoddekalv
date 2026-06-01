import Link from "next/link";
import Media from "@/components/Media";
import GridOverlay from "@/components/GridOverlay";
import TypeLabel from "@/components/TypeLabel";
import { site } from "@/content/site";

const heroLinks = [
  { label: "Journal", href: "/journal" },
  { label: "Projects", href: "/projects" },
  { label: "Photography", href: "/photography" },
  { label: "4PLANET", href: site.links.fourplanet, external: true },
  { label: "P4NTHER", href: site.links.p4nther, external: true },
];

export default function Hero() {
  return (
    <section className="relative">
      <GridOverlay className="opacity-70" />
      <div className="container-editorial relative pt-16 md:pt-24">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          {/* Text column */}
          <div className="lg:col-span-7">
            <TypeLabel index="00" accent className="animate-fade-up">
              Odin Oddekalv
            </TypeLabel>
            <h1
              className="mt-6 text-display-xl font-medium text-ink animate-fade-up"
              style={{ animationDelay: "0.08s" }}
            >
              ODIN
              <br />
              ODDEKALV<span className="text-blue">_</span>
            </h1>
            <p
              className="mt-8 max-w-xl text-xl leading-relaxed text-ink/75 animate-fade-up md:text-2xl"
              style={{ animationDelay: "0.16s" }}
            >
              {site.tagline}
            </p>
            <div
              className="mt-6 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs uppercase tracking-label text-ink/60 animate-fade-up"
              style={{ animationDelay: "0.22s" }}
            >
              {site.roles.map((r) => (
                <a
                  key={r.org}
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue"
                >
                  {r.label} <span className="text-ink">{r.org}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div
            className="lg:col-span-5 animate-fade-up"
            style={{ animationDelay: "0.28s" }}
          >
            <Media
              src="/images/hero.svg"
              alt="Field plate — exploring better ways for humans and nature to thrive together"
              className="aspect-[4/5] w-full"
              priority
            />
          </div>
        </div>

        {/* Hero links */}
        <nav
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/10 pt-6 animate-fade-up md:mt-16"
          style={{ animationDelay: "0.34s" }}
        >
          {heroLinks.map((l) =>
            l.external ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline font-mono text-xs uppercase tracking-label text-ink/70 hover:text-blue"
              >
                {l.label} ↗
              </a>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                className="link-underline font-mono text-xs uppercase tracking-label text-ink/70 hover:text-blue"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </section>
  );
}
