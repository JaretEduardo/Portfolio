import type { Experience } from "@/src/types/portfolio";

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <section>
      {/* Section heading — mirrors about-me.html h3 style */}
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        Work Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          /* Card row — mirrors about-me.html workExperience card exactly */
          <div
            key={i}
            className="animate-fade-up flex flex-col sm:flex-row sm:items-center bg-white justify-between gap-2 sm:gap-4 p-4 -mx-4 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform group"
          >
            <div className="flex items-center gap-4">
              {/* Icon container — bg-[#e9f2f5] / text-[#84a9b9] from reference */}
              <div className="w-12 h-12 flex-shrink-0 bg-[#e9f2f5] text-[#84a9b9] rounded-xl flex items-center justify-center">
                {/* Briefcase — tabler icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" />
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                  <path d="M12 12l0 .01" />
                  <path d="M3 13a20 20 0 0 0 18 0" />
                </svg>
              </div>

              <div>
                <h4 className="font-bold text-lg group-hover:text-(--primary-color) transition-colors">
                  {exp.role}
                </h4>
                <p className="text-sm text-gray-500">{exp.company}</p>
              </div>
            </div>

            {/* Period + tech tags */}
            <div className="sm:text-right mt-2 sm:mt-0 space-y-2">
              <p className="text-sm font-medium text-gray-400">{exp.period}</p>
              <div className="flex flex-wrap gap-1.5 sm:justify-end">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 bg-(--primary-light-2) text-(--primary-color) text-[10px] font-semibold uppercase tracking-wider rounded-xl"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
