import Link from "next/link";
import TypeLabel from "@/components/TypeLabel";
import { cx, indexLabel } from "@/lib/utils";
import type { Project } from "@/lib/types";

const statusColor: Record<Project["status"], string> = {
  ACTIVE: "text-blue",
  DEVELOPING: "text-ink",
  ARCHIVE: "text-ink/40",
  FUTURE: "text-ink/40",
};

export default function ProjectCard({
  project,
  i = 0,
}: {
  project: Project;
  i?: number;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col justify-between border-t border-ink/10 py-8 transition-colors hover:border-blue md:flex-row md:items-baseline md:gap-10"
    >
      <div className="md:w-2/3">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-ink/30">{indexLabel(i)}</span>
          <h3 className="text-2xl font-medium tracking-tight text-ink transition-colors group-hover:text-blue md:text-3xl">
            {project.title}
          </h3>
        </div>
        <p className="mt-3 max-w-md text-ink/65 md:pl-9">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2 md:pl-9">
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
      <div className="mt-4 flex items-center gap-6 md:mt-0 md:flex-col md:items-end md:gap-1 md:text-right">
        <span className={cx("font-mono text-xs uppercase tracking-label", statusColor[project.status])}>
          {project.status}
        </span>
        <span className="font-mono text-xs uppercase tracking-label text-ink/40">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
