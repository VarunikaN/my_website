import { Reveal } from "@/components/Reveal";

const principles = [
  ["Start with the decision", "Frame the problem around the outcome a person or system needs to make."],
  ["Measure the useful thing", "Choose evaluation signals that reveal whether the work is actually helping."],
  ["Make complexity legible", "Keep the technical story clear enough to inspect, challenge, and improve."],
];

export function Experience() {
  return <section id="about" className="px-5 py-20 md:px-10 md:py-28">
    <div className="mx-auto max-w-6xl">
      <Reveal><p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">Approach</p><h2 className="mt-3 max-w-3xl font-[family-name:var(--font-sora)] text-4xl font-bold tracking-tight text-[var(--ink)] md:text-5xl">Rigorous enough for the model. Clear enough for the room.</h2></Reveal>
      <div className="mt-12 grid gap-px overflow-hidden border bg-[var(--line)] md:grid-cols-3" style={{ borderColor: "var(--line)" }}>
        {principles.map(([title, copy], index) => <Reveal key={title} delay={index * 80}><article className="min-h-56 bg-[var(--bg)] p-7"><p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--signal)]">0{index + 1}</p><h3 className="mt-8 font-[family-name:var(--font-sora)] text-xl font-semibold text-[var(--ink)]">{title}</h3><p className="mt-3 leading-relaxed text-[var(--ink-soft)]">{copy}</p></article></Reveal>)}
      </div>
    </div>
  </section>;
}
