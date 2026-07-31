import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { writing } from "@/data/works";

export function Writing() {
  return (
    <section id="writing" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p
            className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            Writing
          </p>
          <h2
            className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight md:text-5xl"
            style={{ color: "var(--ink)" }}
          >
            Notes on recent research
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            Short overviews — full PDFs available on request.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {writing.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                href={`/research/${p.slug}`}
                className="card-lift group block overflow-hidden border"
                style={{ borderColor: "var(--line)", background: "var(--card)" }}
              >
                {p.cover && (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-5">
                  <p
                    className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {p.venue}
                  </p>
                  <h3
                    className="mt-2 font-[family-name:var(--font-sora)] text-lg font-semibold leading-snug"
                    style={{ color: "var(--ink)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                    {p.blurb}
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
