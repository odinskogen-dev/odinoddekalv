import TypeLabel from "@/components/TypeLabel";
import Reveal from "@/components/Reveal";
import { cx } from "@/lib/utils";

/** Label + headline + optional description, in editorial rhythm. */
export default function SectionHeader({
  label,
  index,
  title,
  description,
  className,
}: {
  label: string;
  index?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <Reveal className={cx("max-w-3xl", className)}>
      <TypeLabel index={index} accent>
        {label}
      </TypeLabel>
      <h2 className="mt-5 text-display-md font-medium text-ink">{title}</h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-ink/70">{description}</p>
      )}
    </Reveal>
  );
}
