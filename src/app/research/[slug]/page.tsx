import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/Markdown";
import { site } from "@/data/site";
import { getResearch, research } from "@/data/works";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return research.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getResearch(slug);
  if (!post) return {};
  return {
    title: `${post.title} — ${site.name}`,
    description: post.blurb,
  };
}

export default async function ResearchPage({ params }: Props) {
  const { slug } = await params;
  const post = getResearch(slug);
  if (!post) notFound();

  return (
    <main className="px-5 pb-24 pt-28 md:px-10">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/#research"
          className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em]"
          style={{ color: "var(--accent)" }}
        >
          ← Research
        </Link>

        <p
          className="mt-8 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em]"
          style={{ color: "var(--muted)" }}
        >
          {post.venue}
        </p>
        <h1
          className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight md:text-5xl"
          style={{ color: "var(--ink)" }}
        >
          {post.title}
        </h1>
        <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
          {post.authors}
        </p>
        <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          {post.blurb}
        </p>

        <div className="mt-12">
          <Markdown content={post.body} />
        </div>

        <div
          className="mt-12 rounded border p-6"
          style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
        >
          <p
            className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em]"
            style={{ color: "var(--accent)" }}
          >
            Full paper
          </p>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            The complete white paper / report PDF is available on request.
          </p>
          <a
            href={`mailto:${site.email}?subject=Request%20PDF%3A%20${encodeURIComponent(post.title)}`}
            className="btn-primary mt-5"
          >
            Request PDF
          </a>
        </div>
      </article>
    </main>
  );
}
