import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { works } from "@/data/works";

export function WorkGrid() {
  return (
    <section id="work" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p
            className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            Portfolio
          </p>
          <h2
            className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight md:text-5xl"
            style={{ color: "var(--ink)" }}
          >
            Builds that move the needle
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            Catchy stories, real frames — from SynD crates to OSCAR skeletons to MI300X kernels.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {works.map((w, i) => (
            <Reveal key={w.slug} delay={i * 60}>
              <Link
                href={`/work/${w.slug}`}
                className="group card-lift block overflow-hidden border"
                style={{ borderColor: "var(--line)", background: "var(--card)" }}
              >
                {w.cover && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={w.cover}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p
                      className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]"
                      style={{ color: "var(--signal)" }}
                    >
                      {w.tag}
                    </p>
                    <p
                      className="font-[family-name:var(--font-mono)] text-[10px]"
                      style={{ color: "var(--muted)" }}
                    >
                      {w.year}
                    </p>
                  </div>
                  <h3
                    className="mt-3 font-[family-name:var(--font-sora)] text-xl font-semibold md:text-2xl"
                    style={{ color: "var(--ink)" }}
                  >
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                    {w.blurb}
                  </p>
                  <p
                    className="mt-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em]"
                    style={{ color: "var(--accent)" }}
                  >
                    {w.requestDetails ? "Overview →" : "Read →"}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
