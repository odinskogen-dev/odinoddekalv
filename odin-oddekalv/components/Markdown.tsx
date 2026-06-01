import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Renders markdown journal bodies inside the editorial prose styles. */
export default function Markdown({ children }: { children: string }) {
  return (
    <div className="prose-editorial">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
