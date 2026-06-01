import Link from "next/link";
import TypeLabel from "@/components/TypeLabel";

export default function NotFound() {
  return (
    <div className="container-editorial flex min-h-[60vh] flex-col items-start justify-center">
      <TypeLabel accent>Error 404</TypeLabel>
      <h1 className="mt-5 text-display-md font-medium tracking-tight text-ink">
        Off the map.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/65">
        This page does not exist — or has not been built yet. Every expedition
        has its dead ends.
      </p>
      <Link
        href="/"
        className="mt-8 font-mono text-xs uppercase tracking-label text-blue hover:underline"
      >
        ← Back to the start
      </Link>
    </div>
  );
}
