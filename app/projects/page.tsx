import ProjectCard from "@/src/components/ProjectCard";
import { projects } from "@/src/data/portfolio";

export default function ProjectsPage() {
  return (
    <div className="space-y-6 pt-32 min-h-screen bg-[#f3f4f6]">
      <section className="px-8 space-y-6 pb-20 max-w-7xl mx-auto">
        <div className="animate-fade-down flex flex-col space-y-4">
          <h1 className="text-5xl font-bold leading-[1.1] text-[#2b2d2f]">Projects</h1>
          <p className="text-gray-500 max-w-xl leading-relaxed">
            A selection of the systems I&apos;ve built — compilers, AutoML engines, and ML
            libraries from first principles.
          </p>
        </div>
        
        <div className="animate-fade-up grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}