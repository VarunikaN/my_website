import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { SelectedProjects } from "@/components/SelectedProjects";
import { WorkGrid } from "@/components/WorkGrid";
import { Writing } from "@/components/Writing";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkGrid />
      <SelectedProjects />
      <Experience />
      <Writing />
      <Contact />
    </main>
  );
}
