import Link from "next/link";
import { research } from "@/data/works";

export function Research() {
  return (
    <section id="research" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p
          className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          Research
        </p>
        <h2
          className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight md:text-5xl"
          style={{ color: "var(--ink)" }}
        >
          Papers & white papers
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          Short overviews below. Full PDFs (GRPO, LBA-Net, RDIF) are{" "}
          <strong style={{ color: "var(--ink)" }}>available on request</strong>.
        </p>

        <div className="mt-12 divide-y border-y" style={{ borderColor: "var(--line)" }}>
          {research.map((p) => (
            <article
              key={p.slug}
              className="grid gap-4 py-8 md:grid-cols-[1.3fr_1fr]"
            >
              <div>
                <p
                  className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]"
                  style={{ color: "var(--muted)" }}
                >
                  {p.venue}
                </p>
                <h3
                  className="mt-2 font-[family-name:var(--font-sora)] text-xl font-semibold leading-snug md:text-2xl"
                  style={{ color: "var(--ink)" }}
                >
                  {p.title}
                </h3>
                <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                  {p.authors}
                </p>
              </div>
              <div>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {p.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <Link
                    href={`/research/${p.slug}`}
                    className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em]"
                    style={{ color: "var(--accent)" }}
                  >
                    Overview →
                  </Link>
                  <span
                    className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em]"
                    style={{ color: "var(--muted)" }}
                  >
                    PDF on request
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
