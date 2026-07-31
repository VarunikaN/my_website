import { promises as fs } from "fs";
import path from "path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/Markdown";
import { driveGalleries, site } from "@/data/site";
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
          style={{ color: "var(--pink)" }}
        >
          ← All work
        </Link>

        <p
          className="mt-8 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em]"
          style={{ color: "var(--mint)" }}
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
            className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[1.5rem] border"
            style={{ borderColor: "var(--line)" }}
          >
            <Image src={work.cover} alt="" fill className="object-cover" sizes="768px" priority />
          </div>
        )}

        <div className="mt-12">
          <Markdown content={body} />
        </div>

        {work.drives && (
          <section className="mt-14 border-t pt-10" style={{ borderColor: "var(--line)" }}>
            <h2
              className="font-[family-name:var(--font-sora)] text-2xl font-semibold"
              style={{ color: "var(--ink)" }}
            >
              Project galleries (Drive)
            </h2>
            <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>
              Public folders with renders, depth maps, masks, and experiment dumps.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {driveGalleries.map((url, i) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost w-full justify-start"
                  >
                    Gallery {String(i + 1).padStart(2, "0")} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {work.github && (
          <a href={work.github} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10">
            View on GitHub
          </a>
        )}
      </article>
    </main>
  );
}
