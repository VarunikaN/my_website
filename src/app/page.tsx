import { CompanyWork } from "@/components/CompanyWork";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Research } from "@/components/Research";
import { WorkGrid } from "@/components/WorkGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkGrid />
      <CompanyWork />
      <Experience />
      <Research />
      <Contact />
    </main>
  );
}
