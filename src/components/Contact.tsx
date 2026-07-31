import { site } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t px-5 py-20 md:px-10 md:py-24"
      style={{ borderColor: "var(--line)", background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p
              className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Contact
            </p>
            <h2
              className="mt-3 font-[family-name:var(--font-sora)] text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: "var(--ink)" }}
            >
              {site.email}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Open to ML, robotics, and systems roles. Happy to share deeper project details or PDFs.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="btn-primary">
              Email me
            </a>
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Resume
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              GitHub
            </a>
          </div>
        </div>

        <footer
          className="mt-16 flex flex-col gap-2 border-t pt-6 sm:flex-row sm:justify-between"
          style={{ borderColor: "var(--line)", color: "var(--muted)" }}
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]">
            {site.location} · {site.phone}
          </p>
        </footer>
      </div>
    </section>
  );
}
