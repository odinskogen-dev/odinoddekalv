import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Media from "@/components/Media";
import TypeLabel from "@/components/TypeLabel";
import CTA from "@/components/CTA";
import { getProjects, getProject, getJournalPost } from "@/lib/content";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Not found" };
  return { title: project.title, description: project.description };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-ink/10 py-8">
      <p className="type-label mb-3 text-blue">{label}</p>
      <p className="max-w-2xl text-lg leading-relaxed text-ink/80">{children}</p>
    </div>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const related = (project.relatedJournal ?? [])
    .map((slug) => getJournalPost(slug))
    .filter(Boolean);

  return (
    <div className="container-editorial pt-16 md:pt-24">
      <Link
        href="/projects"
        className="font-mono text-xs uppercase tracking-label text-ink/40 hover:text-blue"
      >
        ← Projects
      </Link>

      {/* Header */}
      <header className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-label">
            <span className="text-blue">{project.status}</span>
            <span className="text-ink/40">{project.year}</span>
            <span className="text-ink/40">{project.role}</span>
          </div>
          <h1 className="mt-5 text-display-lg font-medium tracking-tight text-ink">
            {project.title}
          </h1>
          <p className="mt-5 max-w-xl text-xl leading-relaxed text-ink/65">
            {project.description}
          </p>
        </div>
        <div className="md:col-span-4">
          <div className="flex flex-wrap gap-2 md:justify-end">
            {project.tags.map((t) => (
              <span
                key={t}
                className="border border-blue/30 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-label text-blue"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      {project.image && (
        <div className="mt-12">
          <Media src={project.image} alt={project.title} className="aspect-[2/1] w-full" priority />
        </div>
      )}

      {/* Detail blocks */}
      <section className="mt-14 max-w-3xl">
        <Block label="Overview">{project.overview}</Block>
        <Block label="Why it exists">{project.why}</Block>
        <Block label="Current status">{project.currentStatus}</Block>
        <Block label="What Odin does">{project.contribution}</Block>
      </section>

      {/* Related links */}
      {project.relatedLinks && project.relatedLinks.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-8">
          {project.relatedLinks.map((l) => (
            <CTA key={l.href} href={l.href} external={l.href.startsWith("http")}>
              {l.label}
            </CTA>
          ))}
        </div>
      )}

      {/* Related journal */}
      {related.length > 0 && (
        <section className="mt-20">
          <TypeLabel accent>Related journal</TypeLabel>
          <div className="mt-6 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {related.map((post) => (
              <Link
                key={post!.slug}
                href={`/journal/${post!.slug}`}
                className="group bg-paper p-8 transition-colors hover:bg-blue/[0.03]"
              >
                <span className="font-mono text-xs uppercase tracking-label text-ink/40">
                  {post!.category}
                </span>
                <p className="mt-2 text-lg font-medium tracking-tight text-ink group-hover:text-blue">
                  {post!.title}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
