import type { TechStack } from "@/src/types/portfolio";

interface TechStackProps {
  stack: TechStack;
}

export default function TechStackSection({ stack }: TechStackProps) {
  /* Flatten all tech into a single list for the reference's pill-bar style */
  const allItems = [
    ...stack.languages,
    ...stack.tools,
    ...stack.cloudDevOps,
  ];

  return (
    /* Mirrors home.html tech stack section exactly */
    <div className="px-8 py-12 border-t border-gray-200">
      <p className="text-sm font-bold tracking-[0.2em] uppercase mb-6 text-[#2b2d2f]">
        Tech Stack
      </p>

      <div className="flex flex-wrap gap-4 items-center">
        {allItems.map((item) => (
          /* Pill — bg-white border border-gray-200 shadow-md rounded-xl */
          <div
            key={item}
            className="bg-white px-3 py-2 border border-gray-200 shadow-md rounded-xl flex items-center gap-2 font-semibold text-[#2b2d2f] text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
