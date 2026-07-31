import { site } from "@/data/site";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section
      id="top"
      className="relative grid min-h-screen grid-cols-1 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
    >
      <div className="relative z-10 flex flex-col justify-end px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32 lg:justify-center lg:pb-24">
        <p className="animate-rise font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.22em] text-signal">
          {site.role} · {site.location}
        </p>

        <h1 className="animate-rise-delay-1 mt-5 font-[family-name:var(--font-syne)] text-[clamp(3.4rem,11vw,7.5rem)] font-extrabold leading-[0.88] tracking-[-0.04em] text-ink">
          {site.brand}
        </h1>

        <p className="animate-rise-delay-2 mt-8 max-w-md font-[family-name:var(--font-literata)] text-lg leading-relaxed text-ink-soft/90 md:text-xl">
          {site.tagline}
        </p>

        <div className="animate-rise-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center bg-ink px-6 py-3.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.16em] text-paper transition-transform duration-300 hover:-translate-y-0.5"
          >
            See the work
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-ink/20 px-6 py-3.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-signal hover:text-signal"
          >
            Download resume
          </a>
        </div>
      </div>

      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[54%]">
        <HeroVisual />
      </div>
    </section>
  );
}
