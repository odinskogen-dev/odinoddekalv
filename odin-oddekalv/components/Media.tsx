import { cx } from "@/lib/utils";

/**
 * Image wrapper. Placeholders are local SVG field-plates, so a plain <img>
 * with lazy loading is the most reliable choice and keeps the build runnable.
 *
 * When you replace placeholders with real raster photography (.jpg/.webp),
 * swap this for next/image: import Image from "next/image" and render
 * <Image src={src} alt={alt} fill sizes="..." /> inside a sized wrapper, then
 * add the image domains to next.config.mjs.
 */
export default function Media({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={cx("relative overflow-hidden bg-stone-100", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cx(
          "h-full w-full object-cover transition-transform duration-700 ease-editorial",
          imgClassName
        )}
      />
    </div>
  );
}
