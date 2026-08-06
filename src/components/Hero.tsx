import Image from "next/image";
import { site } from "@/data/site";
import portrait from "../../varunika.jpeg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0 atmosphere" />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
      <div className="pointer-events-none absolute right-[8%] top-20 h-64 w-64 rounded-full bg-[var(--hero-glow-1)] blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-end gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <p className="animate-rise font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
            AI / ML Engineer
          </p>
          <h1 className="animate-rise mt-5 max-w-4xl font-[family-name:var(--font-sora)] text-[clamp(3.3rem,8vw,6.7rem)] font-bold leading-[0.91] tracking-[-0.065em] text-[var(--ink)]">
            Building clarity from complex systems.
          </h1>
          <p className="animate-rise-2 mt-7 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)] md:text-xl">
            I build measurable AI systems that help machines see better, reason faster, and navigate real-world problems.
          </p>
          <div className="animate-rise-3 mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary btn-magnetic">Explore projects</a>
            <a href="#contact" className="btn-ghost btn-magnetic">Start a conversation</a>
          </div>
        </div>
        <div className="animate-rise-2 relative mx-auto w-48 md:w-60">
          <div className="absolute -inset-3 rotate-6 rounded-[2rem] border border-[var(--accent)]" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--bg-2)] shadow-[0_24px_60px_rgba(58,45,31,0.16)]">
            <Image src={portrait} alt={site.name} fill className="object-cover object-top" sizes="240px" priority />
          </div>
          <p className="mt-4 text-center font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
            Varunika Naini
          </p>
        </div>
      </div>
    </section>
  );
}
