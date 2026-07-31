import { papers } from "@/data/site";

export function Research() {
  return (
    <section id="research" className="border-t border-[var(--line)] bg-paper px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.2em] text-signal">
            Research & writing
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Papers and reports
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft/80">
            White papers and project reports spanning prompt RL, medical XAI, segmentation, and
            GPU kernels.
          </p>
        </div>

        <div className="mt-16 space-y-0">
          {papers.map((paper) => (
            <article
              key={paper.title}
              className="grid gap-4 border-t border-[var(--line)] py-10 last:border-b md:grid-cols-[1.4fr_1fr] md:gap-12"
            >
              <div>
                <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.16em] text-ink/40">
                  {paper.venue}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-syne)] text-2xl font-semibold leading-snug text-ink md:text-[1.65rem]">
                  {paper.title}
                </h3>
                <p className="mt-3 text-sm text-ink-soft/65">{paper.authors}</p>
              </div>
              <div className="flex flex-col justify-between gap-6">
                <p className="text-[15px] leading-relaxed text-ink-soft/80">{paper.blurb}</p>
                {paper.href ? (
                  <a
                    href={paper.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.16em] text-signal transition-colors hover:text-signal-deep"
                  >
                    Read PDF
                    <span aria-hidden>→</span>
                  </a>
                ) : (
                  <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.14em] text-ink/35">
                    Available on request
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
