import { cx } from "@/lib/utils";

/**
 * Very subtle technical grid using the brand blue at low opacity.
 * Purely decorative; pointer-events disabled.
 */
export default function GridOverlay({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cx(
        "pointer-events-none absolute inset-0 grid-overlay",
        className
      )}
    />
  );
}
