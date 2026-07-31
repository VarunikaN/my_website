import Image from "next/image";
import { IconGithub, IconLinkedin, IconMail, IconPhone } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export function Contact() {
  const phoneHref = `tel:${site.phone.replace(/\s+/g, "")}`;

  return (
    <section
      id="contact"
      className="border-t px-5 py-20 md:px-10 md:py-28"
      style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-xs">
              <div
                className="relative aspect-[4/5] overflow-hidden border"
                style={{ borderColor: "var(--line)" }}
              >
                <Image
                  src={site.photo}
                  alt={`${site.name} photo placeholder`}
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
              <p
                className="mt-3 text-center font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]"
                style={{ color: "var(--muted)" }}
              >
                Photo placeholder — swap me in
              </p>
            </div>

            <div>
              <p
                className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)" }}
              >
                Contact
              </p>
              <h2
                className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight md:text-5xl"
                style={{ color: "var(--ink)" }}
              >
                {site.name}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                Open to ML, robotics, and systems roles. Happy to share deeper project details or PDFs on request.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${site.email}`} className="btn-primary">
                  <IconMail />
                  Email
                </a>
                <a href={phoneHref} className="btn-ghost">
                  <IconPhone />
                  Phone
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  aria-label="LinkedIn"
                >
                  <IconLinkedin />
                  LinkedIn
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  aria-label="GitHub"
                >
                  <IconGithub />
                  GitHub
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-4" style={{ color: "var(--muted)" }}>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-sm hover:text-[var(--accent)]">
                  <IconMail className="h-3.5 w-3.5" />
                  {site.email}
                </a>
                <a href={phoneHref} className="inline-flex items-center gap-2 text-sm hover:text-[var(--accent)]">
                  <IconPhone className="h-3.5 w-3.5" />
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <footer
          className="mt-16 flex flex-col gap-2 border-t pt-6 sm:flex-row sm:justify-between"
          style={{ borderColor: "var(--line)", color: "var(--muted)" }}
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]">
            {site.location}
          </p>
        </footer>
      </div>
    </section>
  );
}
