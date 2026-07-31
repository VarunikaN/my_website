import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 atmosphere" />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-70" />

      <div className="relative mx-auto max-w-6xl">
        <p
          className="animate-rise font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          {site.role} · {site.location}
        </p>
        <h1
          className="animate-rise-1 mt-5 max-w-4xl font-[family-name:var(--font-sora)] text-[clamp(3rem,10vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.04em]"
          style={{ color: "var(--ink)" }}
        >
          {site.brand}
        </h1>
        <p
          className="animate-rise-2 mt-8 max-w-xl text-lg leading-relaxed md:text-xl"
          style={{ color: "var(--ink-soft)" }}
        >
          {site.tagline}
        </p>
        <div className="animate-rise-3 mt-10 flex flex-wrap gap-3">
          <a href="#work" className="btn-primary">
            See the work
          </a>
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Download resume
          </a>
        </div>
        <p className="mt-8 max-w-lg text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {site.summary}
        </p>
      </div>
    </section>
  );
}
