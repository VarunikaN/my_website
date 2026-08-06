import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { WorkGrid } from "@/components/WorkGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkGrid />
      <Experience />
      <Contact />
    </main>
  );
}
