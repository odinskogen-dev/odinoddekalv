"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, navSecondary, site } from "@/content/site";
import { cx } from "@/lib/utils";

const primary = nav.filter((item) => ["Story", "Field", "Work", "Notes"].includes(item.label));
const indexRooms = [...nav, ...navSecondary];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className={cx("sticky top-0 z-50 border-b transition-all duration-300", scrolled || open ? "border-ink/10 bg-paper/95 backdrop-blur-md" : "border-transparent bg-paper/0")}>
        <div className="container-editorial grid h-16 grid-cols-[1fr_auto] items-center md:h-20 md:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="justify-self-start text-[0.82rem] font-medium tracking-[-0.02em] text-ink" aria-label="Odin Oddekalv — home">
            {site.wordmark}
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {primary.map((item) => (
              <Link key={item.href} href={item.href} className={cx("link-underline font-mono text-[0.66rem] uppercase tracking-label transition-colors hover:text-blue", active(item.href) ? "text-blue" : "text-ink/55")}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 justify-self-end md:gap-5">
            <button type="button" onClick={() => setOpen((value) => !value)} className="group flex items-center gap-3 py-3" aria-expanded={open} aria-label={open ? "Close index" : "Open index"}>
              <span className="font-mono text-[0.63rem] uppercase tracking-label text-ink/48 transition-colors group-hover:text-blue">{open ? "Close" : "Index"}</span>
              <span className="relative block h-3 w-5">
                <span className={cx("absolute left-0 top-[2px] h-px w-full bg-ink transition-transform duration-300 ease-editorial", open && "translate-y-[4px] rotate-45")} />
                <span className={cx("absolute bottom-[2px] left-0 h-px w-full bg-ink transition-transform duration-300 ease-editorial", open && "-translate-y-[4px] -rotate-45")} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className={cx("fixed inset-0 z-40 bg-paper transition-[opacity,visibility] duration-300 ease-editorial", open ? "visible opacity-100" : "invisible opacity-0")} aria-hidden={!open}>
        <div className="container-editorial flex h-full flex-col overflow-y-auto pb-10 pt-24 md:pt-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="font-mono text-[0.63rem] uppercase tracking-label text-ink/38">ODIN_ / INDEX</p>
              <p className="mt-4 max-w-[15rem] text-sm leading-relaxed text-ink/45">A quiet front door. The full body of work lives here.</p>
            </div>

            <nav className="md:col-span-8 md:col-start-5">
              {indexRooms.map((item, index) => (
                <Link key={item.href} href={item.href} className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline border-b border-ink/10 py-3.5 transition-colors first:border-t hover:text-blue md:py-4">
                  <span className="font-mono text-[0.6rem] text-blue/70">{String(index + 1).padStart(2, "0")}_</span>
                  <span className="text-2xl font-medium tracking-tight md:col-span-4 md:text-4xl">{item.label}</span>
                  <span className="font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100">↗</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-auto grid gap-5 border-t border-ink/10 pt-5 font-mono text-[0.62rem] uppercase tracking-label text-ink/38 md:grid-cols-12">
            <a href={site.links.fourplanet} target="_blank" rel="noreferrer" className="hover:text-blue md:col-span-3">4PLANET ↗</a>
            <a href={site.links.p4nther} target="_blank" rel="noreferrer" className="hover:text-blue md:col-span-3">P4NTHER ↗</a>
            <a href={site.links.email} className="hover:text-blue md:col-span-6 md:text-right">{site.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
