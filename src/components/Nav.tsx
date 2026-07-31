"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "XP" },
  { href: "/#writing", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--nav-bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : undefined,
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-sora)] text-sm font-bold tracking-[0.14em]"
          style={{ color: "var(--ink)" }}
        >
          {site.brand}
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] transition-colors hover:opacity-100"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--muted)";
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            className="rounded border px-3 py-1.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]"
            style={{
              borderColor: "var(--btn-ghost-border)",
              color: "var(--ink)",
              background: "transparent",
              cursor: "pointer",
            }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "Night" : "Light"}
          </button>
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
