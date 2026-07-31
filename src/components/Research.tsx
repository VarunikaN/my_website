import { papers } from "@/data/site";

export function Research() {
  return (
    <section id="research" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--pink)" }}>
          Research
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight md:text-5xl" style={{ color: "var(--ink)" }}>
          Papers & white papers
        </h2>
        <p className="mt-4 max-w-xl" style={{ color: "var(--ink-soft)" }}>
          LBA-Net, RDIF, and the GRPO white paper are available on request — happy to share with recruiters and collaborators.
        </p>

        <div className="mt-12 divide-y" style={{ borderColor: "var(--line)" }}>
          {papers.map((p) => (
            <article key={p.title} className="grid gap-4 border-t py-8 md:grid-cols-[1.3fr_1fr]" style={{ borderColor: "var(--line)" }}>
              <div>
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--muted)" }}>
                  {p.venue}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-sora)] text-xl font-semibold leading-snug md:text-2xl" style={{ color: "var(--ink)" }}>
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
                <p className="mt-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--lilac)" }}>
                  Available on request
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
