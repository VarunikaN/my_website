"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Markdown({ content }: { content: string }) {
  return (
    <div className="prose-vn">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ alt, src }) => {
            const isLbaFigure = alt?.startsWith("LBA-Net") || alt?.startsWith("Qualitative LBA-Net");
            if (!isLbaFigure || typeof src !== "string") return <img src={src} alt={alt ?? ""} />;

            return (
              <figure className="lbanet-figure">
                <a href={src} target="_blank" rel="noreferrer" aria-label={`Open ${alt} at full size`}>
                  <img src={src} alt={alt} />
                </a>
                <figcaption>{alt} · Open full size</figcaption>
              </figure>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
