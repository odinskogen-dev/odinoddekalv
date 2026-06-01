import { cx } from "@/lib/utils";

/**
 * Small monospace field-note label. Optionally prefixed with a 2-digit
 * system index ("01_") consistent with the 4PLANET / ODIN_ language.
 */
export default function TypeLabel({
  children,
  index,
  className,
  accent = false,
}: {
  children: React.ReactNode;
  index?: string;
  className?: string;
  accent?: boolean;
}) {
  return (
    <span className={cx("type-label inline-flex items-center gap-2", className)}>
      {index && <span className={accent ? "text-blue" : "text-ink/40"}>{index}_</span>}
      <span className={accent ? "text-blue" : undefined}>{children}</span>
    </span>
  );
}
