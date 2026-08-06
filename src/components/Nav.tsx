"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { ScrollProgress } from "./ScrollProgress";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#company-work", label: "Company work" },
  { href: "/#about", label: "Approach" },
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

  return <>
    <ScrollProgress />
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300" style={{ background: scrolled ? "var(--nav-bg)" : "transparent", borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent", backdropFilter: scrolled ? "blur(12px)" : undefined }}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="font-[family-name:var(--font-sora)] text-sm font-bold tracking-[0.1em] text-[var(--ink)]">{site.brand}</Link>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => <li key={link.href}><a href={link.href} className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--accent)]">{link.label}</a></li>)}
        </ul>
        <button type="button" onClick={toggle} className="rounded border border-[var(--btn-ghost-border)] px-3 py-1.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--ink)]" aria-label="Toggle theme">
          {theme === "light" ? "Night" : "Light"}
        </button>
      </nav>
    </header>
  </>;
}
