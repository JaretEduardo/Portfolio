export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  repoUrl?: string;
  status: "active" | "completed" | "in-progress";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  tech: string[];
}

export interface TechStack {
  languages: string[];
  tools: string[];
  cloudDevOps: string[];
}
