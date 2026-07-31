import { selectedProjects, site } from "@/data/site";

export function SelectedProjects() {
  return (
    <section
      id="selected"
      className="border-y px-5 py-20 md:px-10 md:py-28"
      style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
    >
      <div className="mx-auto max-w-6xl">
        <p
          className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          At Dheyo
        </p>
        <h2
          className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight md:text-5xl"
          style={{ color: "var(--ink)" }}
        >
          Selected projects
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          High-level snapshots of shipped systems. Full write-ups, demos, and media{" "}
          <strong style={{ color: "var(--ink)" }}>available on request</strong>.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {selectedProjects.map((item) => (
            <div
              key={item.title}
              className="border p-6"
              style={{ borderColor: "var(--line)", background: "var(--card)" }}
            >
              <p
                className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]"
                style={{ color: "var(--signal)" }}
              >
                {item.tag}
              </p>
              <h3
                className="mt-2 font-[family-name:var(--font-sora)] text-xl font-semibold"
                style={{ color: "var(--ink)" }}
              >
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {item.blurb}
              </p>
              <p
                className="mt-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em]"
                style={{ color: "var(--muted)" }}
              >
                Available on request
              </p>
            </div>
          ))}
        </div>

        <a
          href={`mailto:${site.email}?subject=Request%20project%20details`}
          className="btn-primary mt-10"
        >
          Request details
        </a>
      </div>
    </section>
  );
}
