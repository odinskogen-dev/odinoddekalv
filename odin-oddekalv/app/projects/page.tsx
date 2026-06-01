import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import TypeLabel from "@/components/TypeLabel";
import Reveal from "@/components/Reveal";
import { getProjects } from "@/lib/content";
import type { ProjectStatus } from "@/lib/types";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A map of a life's work — the projects Odin Oddekalv is building around nature, people, systems and the future.",
};

const order: ProjectStatus[] = ["ACTIVE", "DEVELOPING", "FUTURE", "ARCHIVE"];

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="container-editorial pt-16 md:pt-24">
      <Reveal>
        <TypeLabel index="03" accent>
          Projects
        </TypeLabel>
        <h1 className="mt-5 max-w-3xl text-display-lg font-medium tracking-tight text-ink">
          A map of a life&rsquo;s work.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          Not a startup portfolio — a set of long-running efforts to make the
          relationship between humans and nature easier to understand, support
          and build on.
        </p>
      </Reveal>

      <div className="mt-16 space-y-16">
        {order.map((status) => {
          const group = projects.filter((p) => p.status === status);
          if (group.length === 0) return null;
          return (
            <section key={status}>
              <p className="type-label mb-2 text-blue">{status}</p>
              <div>
                {group.map((p, i) => (
                  <ProjectCard key={p.slug} project={p} i={i} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
