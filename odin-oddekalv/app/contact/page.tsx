import type { Metadata } from "next";
import TypeLabel from "@/components/TypeLabel";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "For thoughtful conversations, collaborations, partnerships or editorial inquiries.",
};

const channels = [
  { label: "Email", value: site.email, href: site.links.email },
  { label: "Instagram", value: "@4planet____", href: site.links.instagram },
  { label: "Substack", value: "Read & subscribe", href: site.links.substack },
  { label: "4PLANET", value: "The platform", href: site.links.fourplanet },
  { label: "P4NTHER", value: "The studio", href: site.links.p4nther },
];

export default function ContactPage() {
  return (
    <div className="container-editorial pt-16 md:pt-24">
      <Reveal>
        <TypeLabel index="09" accent>
          Contact
        </TypeLabel>
        <h1 className="mt-5 max-w-3xl text-display-lg font-medium tracking-tight text-ink">
          Open, but selective.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          For thoughtful conversations, collaborations, partnerships or
          editorial inquiries. The best way to reach Odin is directly, by email.
        </p>
      </Reveal>

      <Reveal delay={0.06} className="mt-14 max-w-2xl">
        <div className="flex flex-col gap-px overflow-hidden border-y border-ink/10 bg-ink/10">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center justify-between bg-paper px-1 py-6 transition-colors hover:bg-blue/[0.03]"
            >
              <span className="text-xl font-medium tracking-tight text-ink transition-colors group-hover:text-blue md:text-2xl">
                {c.label}
              </span>
              <span className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-label text-ink/45">
                  {c.value}
                </span>
                <span className="font-mono text-ink/40 transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:text-blue">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
