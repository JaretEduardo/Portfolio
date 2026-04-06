import Hero from "@/src/components/Hero";
import ProjectCard from "@/src/components/ProjectCard";
import ExperienceSection from "@/src/components/Experience";
import TechStackSection from "@/src/components/TechStack";
import { projects, experiences, techStack } from "@/src/data/portfolio";

export default function Home() {
  /*
   * Outer wrapper mirrors referencia-liz home.html root:
   *   <div class="space-y-6 pt-24">
   *
   * max-width + horizontal centering is handled by layout.tsx.
   * Each section owns its own px-8 padding (reference pattern).
   */
  return (
    <div className="space-y-6 pt-24">
      <Hero />

      {/* Projects — Step 3 will replace these with reference-matching components */}
      <section id="projects" className="px-8 space-y-6 pb-20">
        <div className="animate-fade-down flex flex-col space-y-4">
          <h2 className="text-5xl font-bold leading-[1.1]">Projects</h2>
          <p className="text-gray-500 max-w-xl leading-relaxed">
            A selection of the systems I&apos;ve built — compilers, AutoML engines, and ML
            libraries from first principles.
          </p>
        </div>
        <div className="animate-fade-up grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="experience" className="px-8 pb-20">
        <ExperienceSection experiences={experiences} />
      </section>

      <section id="stack" className="px-8 pb-20">
        <TechStackSection stack={techStack} />
      </section>
    </div>
  );
}
