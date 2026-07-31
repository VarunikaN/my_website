import Link from "next/link";
import { writing } from "@/data/works";

export function Writing() {
  return (
    <section id="writing" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p
          className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          Writing
        </p>
        <h2
          className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight md:text-5xl"
          style={{ color: "var(--ink)" }}
        >
          Notes on recent research
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          Short overviews of GRPO, LBA-Net, and RDIF. Full PDFs available on request.
        </p>

        <div className="mt-12 space-y-4">
          {writing.map((p) => (
            <Link
              key={p.slug}
              href={`/research/${p.slug}`}
              className="block border p-6 transition-colors hover:bg-[var(--bg-2)]"
              style={{ borderColor: "var(--line)" }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3
                  className="font-[family-name:var(--font-sora)] text-xl font-semibold md:text-2xl"
                  style={{ color: "var(--ink)" }}
                >
                  {p.title}
                </h3>
                <span
                  className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]"
                  style={{ color: "var(--muted)" }}
                >
                  {p.venue}
                </span>
              </div>
              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {p.blurb}
              </p>
              <p
                className="mt-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em]"
                style={{ color: "var(--accent)" }}
              >
                Read overview →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
