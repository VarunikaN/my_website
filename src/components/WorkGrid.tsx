import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import { works } from "@/data/works";

function ProjectCard({ work }: { work: (typeof works)[number] }) {
  return <article className="card-lift flex h-full flex-col border p-6 md:p-7" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
    <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--signal)]">{work.category}</p>
    <h3 className="mt-4 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-tight text-[var(--ink)]">{work.title}</h3>
    <p className="mt-3 leading-relaxed text-[var(--ink-soft)]">{work.summary}</p>
    {work.metric && <p className="mt-5 font-[family-name:var(--font-mono)] text-xs leading-relaxed text-[var(--accent)]">{work.metric}</p>}
    <div className="mt-auto flex flex-wrap gap-4 pt-7 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.13em]">
      {work.confidential ? <a className="text-[var(--accent)]" href={`mailto:${site.email}?subject=Request%20details%3A%20${encodeURIComponent(work.title)}`}>Request details ↗</a> : <>
        <Link href={`/work/${work.slug}`} className="text-[var(--accent)]">Case study →</Link>
        <a href={work.githubUrl} target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--ink)]">GitHub ↗</a>
      </>}
    </div>
  </article>;
}

export function WorkGrid() {
  const personal = works.filter((work) => !work.confidential);
  const company = works.filter((work) => work.confidential);
  return <>
    <section id="projects" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal><p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">Selected projects</p><h2 className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight text-[var(--ink)] md:text-5xl">Ideas built carefully. Results made visible.</h2></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">{personal.map((work, index) => <Reveal key={work.slug} delay={index * 60}><ProjectCard work={work} /></Reveal>)}</div>
      </div>
    </section>
    <section id="company-work" className="border-y bg-[var(--bg-2)] px-5 py-20 md:px-10 md:py-28" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-6xl"><Reveal><p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">Company work</p><h2 className="mt-3 font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight text-[var(--ink)] md:text-5xl">Work that stays appropriately private.</h2><p className="mt-4 max-w-2xl leading-relaxed text-[var(--ink-soft)]">A concise view of areas of contribution. Context and detail are available on request.</p></Reveal><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{company.map((work, index) => <Reveal key={work.slug} delay={index * 50}><ProjectCard work={work} /></Reveal>)}</div></div>
    </section>
  </>;
}
