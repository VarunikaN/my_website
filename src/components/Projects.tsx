import { projects } from "@/data/site";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-[var(--line)] px-5 py-24 md:px-10 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, #e8eef3 0%, #d5e0e9 45%, #c9d7e3 100%)",
      }}
    >
      <div className="noise opacity-25" />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.2em] text-signal-deep">
            Selected projects
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Pipelines, kernels, and machines
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft/80">
            A cross-section of robotics, generative systems, and inference work from the last year.
          </p>
        </div>

        <div className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
          {projects.map((project, index) => {
            const content = (
              <>
                <div className="flex items-baseline gap-4">
                  <span className="font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.14em] text-ink/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-ink transition-colors group-hover:text-signal-deep md:text-3xl">
                    {project.title}
                  </h3>
                </div>
                <div className="md:pl-4">
                  <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.16em] text-ember">
                    {project.tag}
                  </p>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft/80">
                    {project.blurb}
                  </p>
                </div>
              </>
            );

            const className =
              "group grid gap-4 py-8 transition-colors md:grid-cols-[1.1fr_1fr] md:items-start md:gap-10 md:py-10";

            if ("href" in project && project.href) {
              return (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${className} hover:bg-white/30`}
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={project.title} className={className}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
