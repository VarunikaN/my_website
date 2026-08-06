import { Reveal } from "@/components/Reveal";

const experience = [
  {
    company: "Dheyo AI",
    role: "AI & ML Intern",
    period: "May 2025 - Present",
    summary: "Building and evaluating AI systems across efficient inference, prompt optimization, synthetic data, physical AI, and agent reliability.",
  },
  {
    company: "Suvidha Foundation",
    role: "Machine Learning Intern",
    period: "Jun 2024 - Jul 2024",
    summary: "Benchmarked abstractive summarization models and improved performance through hyperparameter tuning and architectural ablation.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-y bg-[var(--bg-2)] px-5 py-20 md:px-10 md:py-28" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">Experience and education</p>
          <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight text-[var(--ink)] md:text-5xl">Research-minded. Product-aware. Always building.</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.4fr]">
          <Reveal>
            <article className="h-full border p-7" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--signal)]">Education</p>
              <h3 className="mt-5 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-[var(--ink)]">IIITDM Kurnool</h3>
              <p className="mt-2 text-[var(--ink-soft)]">B.Tech. in Computer Science and Engineering</p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--accent)]">
                <span>2022 - 2026</span>
                <span>GPA 8.62</span>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5">
            {experience.map((item, index) => (
              <Reveal key={item.company} delay={index * 90}>
                <article className="border p-7" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-[var(--ink)]">{item.company}</h3>
                      <p className="mt-1 text-[var(--accent)]">{item.role}</p>
                    </div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">{item.period}</p>
                  </div>
                  <p className="mt-5 max-w-2xl leading-relaxed text-[var(--ink-soft)]">{item.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
