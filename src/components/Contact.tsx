import { site } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[var(--line)] px-5 py-24 md:px-10 md:py-32"
      style={{
        background:
          "radial-gradient(ellipse at 20% 0%, rgba(13,115,119,0.18), transparent 50%), radial-gradient(ellipse at 90% 100%, rgba(196,92,38,0.12), transparent 45%), #0b1824",
      }}
    >
      <div className="noise opacity-40 mix-blend-soft-light" />
      <div className="relative mx-auto max-w-6xl">
        <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.2em] text-[#7eb8bb]">
          Contact
        </p>
        <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight text-[#eef3f6] md:text-6xl">
          Let&apos;s build the next pipeline together
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-[#b7c5d1]">
          Open to research collaborations, robotics / ML roles, and conversations about
          sim-to-real systems, quantization, and generative tooling.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center bg-[#eef3f6] px-6 py-3.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.16em] text-[#0b1824] transition-transform hover:-translate-y-0.5"
          >
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-white/20 px-6 py-3.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.16em] text-[#eef3f6] transition-colors hover:border-[#7eb8bb] hover:text-[#7eb8bb]"
          >
            GitHub
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-white/20 px-6 py-3.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.16em] text-[#eef3f6] transition-colors hover:border-[#7eb8bb] hover:text-[#7eb8bb]"
          >
            Resume PDF
          </a>
        </div>

        <footer className="mt-24 flex flex-col gap-3 border-t border-white/10 pt-8 text-[#7a8b9a] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.16em]">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.16em]">
            {site.location} · {site.phone}
          </p>
        </footer>
      </div>
    </section>
  );
}
