import Link from "next/link";
import { cx } from "@/lib/utils";

/** Minimal, link-based CTA — an arrow + underline, never a heavy button. */
export default function CTA({
  href,
  children,
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  const cls = cx(
    "group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-label text-ink transition-colors hover:text-blue",
    className
  );
  const inner = (
    <>
      <span className="link-underline">{children}</span>
      <span aria-hidden className="transition-transform duration-300 ease-editorial group-hover:translate-x-1">
        →
      </span>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
