import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { PlayLab } from "@/components/PlayLab";
import { WorkGrid } from "@/components/WorkGrid";
import { Writing } from "@/components/Writing";

export default function Home() {
  return (
    <main>
      <Hero />
      <PlayLab />
      <WorkGrid />
      <Experience />
      <Writing />
      <Contact />
    </main>
  );
}
