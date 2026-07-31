import { site } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="px-5 py-20 md:px-10 md:py-28"
      style={{ background: "var(--footer-bg)", color: "var(--footer-fg)" }}
    >
      <div className="mx-auto max-w-6xl">
        <p
          className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]"
          style={{ color: "var(--accent-soft)" }}
        >
          Contact
        </p>
        <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight md:text-5xl">
          Let&apos;s talk roles, research, or company-work deep dives
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed" style={{ color: "var(--footer-muted)" }}>
          Open to ML / robotics / systems roles. Company project details and paper PDFs on request.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="btn-primary">
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ color: "var(--footer-fg)", borderColor: "rgba(235,228,216,0.28)" }}
          >
            GitHub
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ color: "var(--footer-fg)", borderColor: "rgba(235,228,216,0.28)" }}
          >
            Resume PDF
          </a>
        </div>

        <footer
          className="mt-20 flex flex-col gap-2 border-t pt-8 sm:flex-row sm:justify-between"
          style={{ borderColor: "rgba(235,228,216,0.12)", color: "var(--footer-muted)" }}
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
