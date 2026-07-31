"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_88%,transparent)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-syne)] text-sm font-bold tracking-[0.18em] text-ink"
        >
          {site.brand}
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.16em] text-ink-soft/80 transition-colors hover:text-signal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.16em] text-signal transition-colors hover:text-signal-deep"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
