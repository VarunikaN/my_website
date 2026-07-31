import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/Markdown";
import { site } from "@/data/site";
import { getWriting, writing } from "@/data/works";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return writing.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getWriting(slug);
  if (!post) return {};
  return {
    title: `${post.title} — ${site.name}`,
    description: post.blurb,
  };
}

export default async function WritingPage({ params }: Props) {
  const { slug } = await params;
  const post = getWriting(slug);
  if (!post) notFound();

  return (
    <main className="px-5 pb-24 pt-28 md:px-10">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/#writing"
          className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em]"
          style={{ color: "var(--accent)" }}
        >
          ← Writing
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

        {post.cover && (
          <div
            className="relative mt-10 aspect-[16/9] overflow-hidden border"
            style={{ borderColor: "var(--line)" }}
          >
            <Image src={post.cover} alt="" fill className="object-cover" sizes="768px" priority />
          </div>
        )}

        <div className="mt-12">
          <Markdown content={post.body} />
        </div>

        <div
          className="mt-12 border p-6"
          style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            Full PDF available on request.
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
