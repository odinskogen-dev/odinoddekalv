import Link from "next/link";
import Media from "@/components/Media";
import TypeLabel from "@/components/TypeLabel";
import { formatDate } from "@/lib/utils";
import type { JournalPost } from "@/lib/types";
import { cx } from "@/lib/utils";

export default function JournalCard({
  post,
  featured = false,
}: {
  post: JournalPost;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/journal/${post.slug}`}
      className={cx("group block", featured && "md:grid md:grid-cols-2 md:gap-10 md:items-center")}
    >
      <Media
        src={post.image}
        alt={post.title}
        className={cx(
          "w-full",
          featured ? "aspect-[4/3] md:aspect-[3/2]" : "aspect-[3/2]"
        )}
        imgClassName="group-hover:scale-[1.03]"
      />
      <div className={cx(featured ? "mt-6 md:mt-0" : "mt-5")}>
        <div className="flex items-center gap-3">
          <TypeLabel accent>{post.category}</TypeLabel>
          <span className="font-mono text-[0.7rem] uppercase tracking-label text-ink/40">
            {formatDate(post.date)} · {post.readingTime} min
          </span>
        </div>
        <h3
          className={cx(
            "mt-3 font-medium tracking-tight text-ink transition-colors group-hover:text-blue",
            featured ? "text-display-md" : "text-2xl"
          )}
        >
          {post.title}
        </h3>
        <p className={cx("mt-3 text-ink/65", featured ? "max-w-lg text-lg leading-relaxed" : "leading-relaxed")}>
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
