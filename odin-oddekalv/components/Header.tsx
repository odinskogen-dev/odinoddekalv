"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { cx } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-ink/10 bg-paper/90 backdrop-blur-md"
          : "border-transparent bg-paper/0"
      )}
    >
      <div className="container-editorial flex h-16 items-center justify-between md:h-20">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-ink"
          aria-label="Odin Oddekalv — home"
        >
          {site.shortmark}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "link-underline font-mono text-xs uppercase tracking-label transition-colors hover:text-blue",
                  active ? "text-blue" : "text-ink/70"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <div className="relative h-3 w-6">
            <span
              className={cx(
                "absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-300 ease-editorial",
                open && "translate-y-[6px] rotate-45"
              )}
            />
            <span
              className={cx(
                "absolute bottom-0 left-0 h-px w-full bg-ink transition-transform duration-300 ease-editorial",
                open && "-translate-y-[5px] -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cx(
          "overflow-hidden border-t border-ink/10 bg-paper transition-[max-height] duration-400 ease-editorial md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <nav className="container-editorial flex flex-col gap-1 py-4">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 py-2.5 text-2xl font-medium tracking-tight text-ink"
            >
              <span className="font-mono text-xs text-blue">
                {String(i + 1).padStart(2, "0")}_
              </span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
