import { education, experience, skills } from "@/data/site";

export function Work() {
  return (
    <section id="work" className="relative border-t border-[var(--line)] bg-paper px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.2em] text-signal">
              Experience
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Where the systems ship
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-soft/80">
              From synthetic crates to quantized kernels — building ML systems that move from
              notebook to robot floor.
            </p>

            <div className="mt-12 border-t border-[var(--line)] pt-8">
              <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.2em] text-ink/45">
                Education
              </p>
              <p className="mt-3 font-[family-name:var(--font-syne)] text-xl font-semibold text-ink">
                {education.school}
              </p>
              <p className="mt-1 text-ink-soft/75">
                {education.degree} · {education.gpa}
              </p>
              <p className="mt-1 font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.08em] text-ink/45">
                {education.period}
              </p>
            </div>
          </div>

          <div className="space-y-14">
            {experience.map((job) => (
              <article key={job.company} className="grid gap-4 md:grid-cols-[1fr_2fr]">
                <div>
                  <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-ink">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-signal">{job.role}</p>
                  <p className="mt-2 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.14em] text-ink/40">
                    {job.period}
                  </p>
                </div>
                <ul className="space-y-3">
                  {job.highlights.map((item) => (
                    <li
                      key={item.slice(0, 40)}
                      className="relative pl-5 text-[15px] leading-relaxed text-ink-soft/85 before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-signal"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-[var(--line)] pt-12">
          <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.2em] text-ink/45">
            Toolkit
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-ink">
                  {group}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft/70">
                  {items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
