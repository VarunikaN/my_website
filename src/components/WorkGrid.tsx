import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";

export function WorkGrid() {
  return (
    <section id="work" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p
          className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          Public write-ups
        </p>
        <h2
          className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight md:text-5xl"
          style={{ color: "var(--ink)" }}
        >
          What I&apos;ve been shipping
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          Voice-agent eval, humanoid teleop, and AMD kernels — full blogs below.
        </p>

        <div className="mt-12 divide-y border-y" style={{ borderColor: "var(--line)" }}>
          {works.map((w, i) => (
            <Link
              key={w.slug}
              href={`/work/${w.slug}`}
              className="group grid gap-6 py-8 transition-opacity hover:opacity-90 md:grid-cols-[1.1fr_0.9fr] md:items-center"
            >
              <div>
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.14em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-[family-name:var(--font-sora)] text-2xl font-semibold md:text-3xl"
                    style={{ color: "var(--ink)" }}
                  >
                    {w.title}
                  </h3>
                </div>
                <p
                  className="mt-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]"
                  style={{ color: "var(--signal)" }}
                >
                  {w.tag} · {w.year}
                </p>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {w.blurb}
                </p>
                <p
                  className="mt-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em]"
                  style={{ color: "var(--accent)" }}
                >
                  Read →
                </p>
              </div>
              {w.cover && (
                <div
                  className="relative aspect-[16/10] overflow-hidden rounded border"
                  style={{ borderColor: "var(--line)" }}
                >
                  <Image
                    src={w.cover}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 40vw"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
