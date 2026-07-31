import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 atmosphere" />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="animate-rise font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--pink)" }}>
            {site.role} · {site.location} · open to roles
          </p>
          <h1
            className="animate-rise-1 mt-5 font-[family-name:var(--font-sora)] text-[clamp(3.2rem,10vw,6.4rem)] font-bold leading-[0.92] tracking-[-0.04em]"
            style={{ color: "var(--ink)" }}
          >
            {site.brand}
            <span style={{ color: "var(--pink)" }}>.</span>
          </h1>
          <p
            className="animate-rise-2 mt-7 max-w-lg text-lg leading-relaxed md:text-xl"
            style={{ color: "var(--ink-soft)" }}
          >
            {site.tagline}
          </p>
          <div className="animate-rise-3 mt-10 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              See last year&apos;s work
            </a>
            <a href={`mailto:${site.email}`} className="btn-ghost">
              Hire me
            </a>
          </div>
          <p
            className="mt-8 max-w-md text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {site.summary}
          </p>
        </div>

        <div className="relative">
          <div
            className="animate-floaty absolute -left-6 top-8 h-28 w-28 rounded-full blur-2xl"
            style={{ background: "var(--hero-glow-2)" }}
          />
          <div
            className="relative overflow-hidden rounded-[2rem] border"
            style={{ borderColor: "var(--line)", background: "var(--card)" }}
          >
            <Image
              src="/images/food/toprika_chips.jpg"
              alt="Food pack synthetic asset from pick-and-place pipeline"
              width={900}
              height={700}
              className="h-auto w-full object-cover"
              priority
            />
            <div
              className="absolute inset-x-0 bottom-0 p-5 backdrop-blur-md"
              style={{ background: "color-mix(in srgb, var(--bg) 55%, transparent)" }}
            >
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em]" style={{ color: "var(--pink)" }}>
                Featured · Food pick-and-place
              </p>
              <p className="mt-1 text-sm font-medium" style={{ color: "var(--ink)" }}>
                Synthetic crates → depth → priority picks
              </p>
            </div>
          </div>
          <div
            className="absolute -bottom-5 -right-3 rounded-2xl border px-4 py-3 shadow-lg md:right-4"
            style={{
              background: "var(--card)",
              borderColor: "var(--line)",
              color: "var(--ink)",
            }}
          >
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--mint)" }}>
              GEAK · MI300X
            </p>
            <p className="font-[family-name:var(--font-sora)] text-2xl font-bold">
              65× <span className="text-base font-medium" style={{ color: "var(--muted)" }}>peak</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
