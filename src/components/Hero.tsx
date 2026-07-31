"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function Hero() {
  const [typed, setTyped] = useState("");
  const [hookIdx, setHookIdx] = useState(0);
  const [hookVisible, setHookVisible] = useState(true);
  const full = site.brand;

  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) window.clearInterval(id);
    }, 55);
    return () => window.clearInterval(id);
  }, [full]);

  useEffect(() => {
    if (typed.length < full.length) return;
    const id = window.setInterval(() => {
      setHookVisible(false);
      window.setTimeout(() => {
        setHookIdx((n) => (n + 1) % site.hooks.length);
        setHookVisible(true);
      }, 280);
    }, 3200);
    return () => window.clearInterval(id);
  }, [typed, full]);

  return (
    <section className="relative min-h-[92vh] overflow-hidden px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 atmosphere" />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-70" />
      <div
        className="pointer-events-none absolute -right-10 top-24 h-72 w-72 animate-blob rounded-full opacity-50"
        style={{ background: "var(--hero-glow-1)" }}
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 h-56 w-56 animate-blob-delay rounded-full opacity-40"
        style={{ background: "var(--hero-glow-2)" }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col justify-center">
        <p
          className="animate-rise font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          Hi — {site.role} · {site.location}
        </p>

        <h1
          className="mt-5 min-h-[1.15em] max-w-5xl font-[family-name:var(--font-sora)] text-[clamp(2.6rem,8.5vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.04em]"
          style={{ color: "var(--ink)" }}
        >
          {typed}
          <span
            className="animate-caret ml-1 inline-block w-[0.07em] translate-y-1 bg-[var(--accent)] align-baseline"
            style={{ height: "0.82em" }}
          />
        </h1>

        <p
          className={`mt-6 max-w-2xl font-[family-name:var(--font-sora)] text-xl font-medium tracking-tight transition-all duration-300 md:text-2xl ${
            hookVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          style={{ color: "var(--accent)" }}
        >
          {site.hooks[hookIdx]}
        </p>

        <p
          className="animate-rise-2 mt-6 max-w-xl text-lg leading-relaxed md:text-xl"
          style={{ color: "var(--ink-soft)" }}
        >
          {site.tagline}
        </p>

        <div className="animate-rise-3 mt-10 flex flex-wrap gap-3">
          <a href="#work" className="btn-primary btn-magnetic">
            See the work
          </a>
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-magnetic">
            Download resume
          </a>
          <a href="#contact" className="btn-ghost btn-magnetic">
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
