import type { Project } from "@/src/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    /* Mirrors project-card-v2.html exactly */
    <div className="group h-[420px] bg-white rounded-xl p-4 shadow-md border border-gray-200 transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col">

      {/* macOS window dots */}
      <div className="flex space-x-1.5 mb-2 px-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>

      {/* Image / preview area */}
      <div className="w-full h-44 overflow-hidden p-2 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
        <span className="text-5xl font-black text-gray-200 select-none tracking-tight">
          {project.slug.toUpperCase()}
        </span>
      </div>

      {/* Content */}
      <div className="mt-2 px-2 pb-2 flex flex-col space-y-3 flex-1 min-h-0">
        <div className="flex flex-col space-y-1">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-(--primary-color) transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-500 leading-relaxed line-clamp-2 text-sm">
            {project.description}
          </p>
        </div>

        {/* Tech tags — bg-(--primary-color) mirrors reference exactly */}
        <div className="flex gap-2 flex-wrap mt-auto">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-(--primary-color) text-white text-[10px] font-semibold uppercase tracking-wider rounded-xl"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
