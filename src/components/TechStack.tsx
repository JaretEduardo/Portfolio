import React from "react";
import type { TechStack } from "@/src/types/portfolio";
import {
  SiC,
  SiCplusplus,
  SiTypescript,
  SiRust,
  SiPytorch,
  SiNvidia,
  SiDotnet,
  SiNextdotjs,
  SiCmake,
  SiGnu,
  SiGit,
  SiGithubactions,
  SiVercel
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

interface TechStackProps {
  stack: TechStack;
}

const iconMap: Record<string, React.ReactNode> = {
  "C": <SiC className="text-[#A8B9CC] text-lg" />,
  "C++": <SiCplusplus className="text-[#00599C] text-lg" />,
  "C#": <SiDotnet className="text-[#512BD4] text-lg" />,
  "TypeScript": <SiTypescript className="text-[#3178C6] text-lg" />,
  "Rust": <SiRust className="text-[#000000] text-lg" />,
  "SQL": <FaDatabase className="text-[#CC292B] text-lg" />,
  "LibTorch": <SiPytorch className="text-[#EE4C2C] text-lg" />,
  "CUDA": <SiNvidia className="text-[#76B900] text-lg" />,
  ".NET 8": <SiDotnet className="text-[#512BD4] text-lg" />,
  "WPF": <SiDotnet className="text-[#512BD4] text-lg" />,
  "Next.js": <SiNextdotjs className="text-black text-lg" />,
  "CMake": <SiCmake className="text-[#064F8C] text-lg" />,
  "GCC": <SiGnu className="text-[#A42E2B] text-lg" />,
  "Git": <SiGit className="text-[#F05032] text-lg" />,
  "GitHub Actions": <SiGithubactions className="text-[#2088FF] text-lg" />,
  "Vercel": <SiVercel className="text-black text-lg" />
};

export default function TechStackSection({ stack }: TechStackProps) {
  const allItems = [
    ...stack.languages,
    ...stack.tools,
    ...stack.cloudDevOps,
  ];

  return (
    <div className="px-8 py-12 border-t border-gray-200">
      <p className="text-sm font-bold tracking-[0.2em] uppercase mb-6 text-[#2b2d2f]">
        Tech Stack
      </p>

      <div className="flex flex-wrap gap-4 items-center">
        {allItems.map((item) => (
          <div
            key={item}
            className="bg-white px-3 py-2 border border-gray-200 shadow-md rounded-xl flex items-center gap-2 font-semibold text-[#2b2d2f] text-sm hover:border-[#B1AFFF] hover:shadow-lg transition-all duration-300"
          >
            {iconMap[item]}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}