import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/Markdown";
import { site } from "@/data/site";
import { getWork, works } from "@/data/works";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return works.filter((work) => !work.confidential).map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  return {
    title: `${work.title} — ${site.name}`,
    description: work.summary,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();
  if (work.confidential || !work.body) notFound();

  return (
    <main className="px-5 pb-24 pt-28 md:px-10">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/#work"
          className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em]"
          style={{ color: "var(--accent)" }}
        >
          ← All work
        </Link>

        <p
          className="mt-8 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em]"
          style={{ color: "var(--signal)" }}
        >
          {work.category}
        </p>
        <h1
          className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight md:text-5xl"
          style={{ color: "var(--ink)" }}
        >
          {work.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          {work.summary}
        </p>

        <div className="mt-12">
          <Markdown content={work.body} />
        </div>

        {work.githubUrl && (
          <a
            href={work.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-6"
          >
            View project on GitHub →
          </a>
        )}
      </article>
    </main>
  );
}
