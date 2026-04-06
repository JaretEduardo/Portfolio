import Hero from "@/src/components/Hero";
import ExperienceSection from "@/src/components/Experience";
import TechStackSection from "@/src/components/TechStack";
import { experiences, techStack } from "@/src/data/portfolio";
import StrengthsSection from "@/src/components/StrengthsSection";

export default function Home() {
  return (
    <div className="space-y-6 pt-24">
      <Hero />

      <section id="stack" className="px-8 pb-20">
        <TechStackSection stack={techStack} />
      </section>

      <StrengthsSection />
    </div>
  );
}