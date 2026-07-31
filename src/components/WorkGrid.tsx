import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";

export function WorkGrid() {
  const featured = works.filter((w) => w.featured);
  const rest = works.filter((w) => !w.featured);

  return (
    <section id="work" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--pink)" }}>
            Selected work · last 12 months
          </p>
          <h2
            className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight md:text-5xl"
            style={{ color: "var(--ink)" }}
          >
            Stuff that ships and scales
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            Food pick-and-place, Oscar + Isaac Sim, AMD kernels, GRPO, quantization —
            click any piece for the full blog.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((w) => (
            <Link
              key={w.slug}
              href={`/work/${w.slug}`}
              className="group overflow-hidden rounded-[1.5rem] border transition-transform duration-300 hover:-translate-y-1"
              style={{ borderColor: "var(--line)", background: "var(--card)" }}
            >
              {w.cover && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={w.cover}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--mint)" }}>
                    {w.tag}
                  </p>
                  <p className="font-[family-name:var(--font-mono)] text-[10px]" style={{ color: "var(--muted)" }}>
                    {w.year}
                  </p>
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-sora)] text-2xl font-semibold" style={{ color: "var(--ink)" }}>
                  {w.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {w.blurb}
                </p>
                <p className="mt-5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--pink)" }}>
                  Read blog →
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((w) => (
            <Link
              key={w.slug}
              href={`/work/${w.slug}`}
              className="rounded-2xl border p-5 transition-colors"
              style={{ borderColor: "var(--line)", background: "var(--card)" }}
            >
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--lilac)" }}>
                {w.tag}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-sora)] text-lg font-semibold" style={{ color: "var(--ink)" }}>
                {w.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {w.blurb}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
