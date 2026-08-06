import Image from "next/image";
import { IconGithub, IconLinkedin, IconMail, IconPhone } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import portrait from "../../varunika.jpeg";

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
          <div className="grid items-center gap-12 md:grid-cols-[auto_1fr]">
            <div className="mx-auto">
              <div
                className="relative h-48 w-48 overflow-hidden rounded-full border-2 md:h-56 md:w-56"
                style={{ borderColor: "var(--accent)" }}
              >
                <Image
                  src={portrait}
                  alt={site.name}
                  fill
                  className="object-cover object-top"
                  sizes="224px"
                  priority
                />
              </div>
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
                Interested in collaborating or discussing the work? Get in touch.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${site.email}`} className="btn-primary btn-magnetic">
                  <IconMail />
                  Email
                </a>
                <a href={phoneHref} className="btn-ghost btn-magnetic">
                  <IconPhone />
                  Phone
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost btn-magnetic"
                  aria-label="LinkedIn"
                >
                  <IconLinkedin />
                  LinkedIn
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost btn-magnetic"
                  aria-label="GitHub"
                >
                  <IconGithub />
                  GitHub
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
        </footer>
      </div>
    </section>
  );
}
