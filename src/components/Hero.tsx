"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function Hero() {
  const [typed, setTyped] = useState("");
  const full = site.brand;

  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) window.clearInterval(id);
    }, 70);
    return () => window.clearInterval(id);
  }, [full]);

  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 atmosphere" />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-70" />
      <div className="pointer-events-none absolute -right-10 top-24 h-64 w-64 animate-blob rounded-full opacity-40" style={{ background: "var(--hero-glow-1)" }} />
      <div className="pointer-events-none absolute bottom-10 left-10 h-48 w-48 animate-blob-delay rounded-full opacity-30" style={{ background: "var(--hero-glow-2)" }} />

      <div className="relative mx-auto max-w-6xl">
        <p
          className="animate-rise font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          Hi — {site.role} in {site.location}
        </p>
        <h1
          className="mt-5 min-h-[1.1em] max-w-4xl font-[family-name:var(--font-sora)] text-[clamp(3rem,10vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.04em]"
          style={{ color: "var(--ink)" }}
        >
          {typed}
          <span className="animate-caret inline-block w-[0.08em] translate-y-1 bg-[var(--accent)] align-baseline" style={{ height: "0.85em" }} />
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
          <a href="#contact" className="btn-ghost">
            Let&apos;s talk
          </a>
        </div>
        <p className="mt-8 max-w-lg text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {site.summary}
        </p>
      </div>
    </section>
  );
}
