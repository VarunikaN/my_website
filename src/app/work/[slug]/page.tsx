import { promises as fs } from "fs";
import path from "path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/Markdown";
import { site } from "@/data/site";
import { getWork, works } from "@/data/works";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  return {
    title: `${work.title} — ${site.name}`,
    description: work.blurb,
  };
}

async function loadBody(slug: string) {
  const work = getWork(slug);
  if (!work) return null;
  if (work.mdFile) {
    const file = path.join(process.cwd(), "content/work", work.mdFile);
    return fs.readFile(file, "utf8");
  }
  return work.body ?? "";
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();
  const body = await loadBody(slug);
  if (body == null) notFound();

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
          {work.tag} · {work.year}
        </p>
        <h1
          className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight md:text-5xl"
          style={{ color: "var(--ink)" }}
        >
          {work.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          {work.blurb}
        </p>

        {work.cover && (
          <div
            className="relative mt-10 aspect-[16/9] overflow-hidden border"
            style={{ borderColor: "var(--line)" }}
          >
            <Image src={work.cover} alt="" fill className="object-cover" sizes="768px" priority />
          </div>
        )}

        <div className="mt-12">
          <Markdown content={body} />
        </div>

        {work.requestDetails && (
          <div
            className="mt-12 border p-6"
            style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
          >
            <p className="font-[family-name:var(--font-sora)] text-lg font-semibold" style={{ color: "var(--ink)" }}>
              Want more detail?
            </p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Architecture notes, metrics, and media for this project are available on request.
            </p>
            <a
              href={`mailto:${site.email}?subject=Request%20details%3A%20${encodeURIComponent(work.title)}`}
              className="btn-primary mt-5"
            >
              Request details
            </a>
          </div>
        )}
      </article>
    </main>
  );
}
