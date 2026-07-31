import { Reveal } from "@/components/Reveal";
import { education, experience, skills } from "@/data/site";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-y px-5 py-20 md:px-10 md:py-28"
      style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p
            className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            Experience
          </p>
          <h2
            className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight md:text-5xl"
            style={{ color: "var(--ink)" }}
          >
            Where I&apos;ve been building
          </h2>
        </Reveal>

        <div className="mt-14 space-y-12">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <article className="grid gap-4 md:grid-cols-[0.35fr_0.65fr]">
                <div>
                  <h3
                    className="font-[family-name:var(--font-sora)] text-2xl font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    {job.company}
                  </h3>
                  <p style={{ color: "var(--accent)" }}>{job.role}</p>
                  <p
                    className="mt-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {job.period}
                  </p>
                </div>
                <ul className="space-y-3">
                  {job.highlights.map((h) => (
                    <li
                      key={h.slice(0, 48)}
                      className="relative pl-5 text-[15px] leading-relaxed"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      <span
                        className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div
            className="mt-16 grid gap-8 border-t pt-10 md:grid-cols-[0.4fr_0.6fr]"
            style={{ borderColor: "var(--line)" }}
          >
            <div>
              <p
                className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em]"
                style={{ color: "var(--muted)" }}
              >
                Education
              </p>
              <p
                className="mt-2 font-[family-name:var(--font-sora)] text-xl font-semibold"
                style={{ color: "var(--ink)" }}
              >
                {education.school}
              </p>
              <p style={{ color: "var(--ink-soft)" }}>
                {education.degree} · {education.gpa}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {Object.entries(skills).map(([k, items]) => (
                <div key={k}>
                  <p className="font-[family-name:var(--font-sora)] font-semibold" style={{ color: "var(--ink)" }}>
                    {k}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                    {items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
