import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Media from "@/components/Media";
import Markdown from "@/components/Markdown";
import TypeLabel from "@/components/TypeLabel";
import { site } from "@/content/site";
import { getJournal, getJournalPost } from "@/lib/content";
import { getJournalVisual } from "@/lib/journalVisuals";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getJournal().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getJournalPost(params.slug);
  if (!post) return { title: "Not found" };
  const image = getJournalVisual(post.slug, post.image);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [image] },
  };
}

export default function JournalPostPage({ params }: { params: { slug: string } }) {
  const post = getJournalPost(params.slug);
  if (!post) notFound();

  const image = getJournalVisual(post.slug, post.image);
  const all = getJournal();
  const idx = all.findIndex((p) => p.slug === post.slug);
  const prev = all[idx + 1];
  const next = all[idx - 1];

  return (
    <article className="pt-16 md:pt-24">
      <header className="container-editorial">
        <div className="mx-auto max-w-reading">
          <Link href="/journal" className="font-mono text-xs uppercase tracking-label text-ink/40 hover:text-blue">← Notes</Link>
          <div className="mt-8 flex items-center gap-3">
            <TypeLabel accent>{post.category}</TypeLabel>
            <span className="font-mono text-[0.7rem] uppercase tracking-label text-ink/40">{formatDate(post.date)} · {post.readingTime} min read</span>
          </div>
          <h1 className="mt-5 text-display-md font-medium tracking-tight text-ink">{post.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-ink/65">{post.excerpt}</p>
        </div>
      </header>

      <div className="mx-auto mt-12 max-w-[1800px] md:px-6">
        <Media src={image} alt={post.title} className="aspect-[16/9] w-full md:aspect-[2/1]" priority />
        <p className="container-editorial mt-3 font-mono text-[0.65rem] uppercase tracking-label text-ink/40">ODIN_ visual archive</p>
      </div>

      <div className="container-editorial mt-14">
        <div className="mx-auto max-w-reading">
          <Markdown>{post.body}</Markdown>
          <div className="mt-16 border-t border-ink/10 pt-8">
            <p className="text-lg font-medium tracking-[-0.025em] text-ink">{site.wordmark}</p>
            <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-label text-ink/35">Notes from an unfinished body of work.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 border-t border-ink/10 pt-8">
            {post.tags.map((t) => <span key={t} className="border border-blue/30 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-label text-blue">#{t}</span>)}
          </div>
        </div>
      </div>

      <nav className="container-editorial mt-20">
        <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2">
          {prev ? <Link href={`/journal/${prev.slug}`} className="group bg-paper p-8 transition-colors hover:bg-blue/[0.03]"><span className="font-mono text-xs uppercase tracking-label text-ink/40">← Older</span><p className="mt-2 text-lg font-medium tracking-tight text-ink group-hover:text-blue">{prev.title}</p></Link> : <div className="bg-paper p-8" />}
          {next ? <Link href={`/journal/${next.slug}`} className="group bg-paper p-8 text-right transition-colors hover:bg-blue/[0.03]"><span className="font-mono text-xs uppercase tracking-label text-ink/40">Newer →</span><p className="mt-2 text-lg font-medium tracking-tight text-ink group-hover:text-blue">{next.title}</p></Link> : <div className="bg-paper p-8" />}
        </div>
      </nav>
    </article>
  );
}
