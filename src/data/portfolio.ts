import type { Project, Experience, TechStack } from "@/src/types/portfolio";

export const projects: Project[] = [
  {
    slug: "kai",
    title: "KAI — AutoML Engine",
    description:
      "High-performance neural network training application. C++17/LibTorch/CUDA backend compiled to a shared DLL; C# WPF desktop frontend wired via P/Invoke.",
    techStack: ["C++17", "LibTorch", "CUDA", "C#", "WPF", ".NET 8", "CMake"],
    highlights: [
      "Configurable SimpleCNN: 3 conv layers with batch normalization and dropout, architecture params exposed through the DLL API",
      "P/Invoke bridge with stdcall log callback — real-time training metrics streamed from C++ into the WPF UI without polling",
      "Dataset loader using stb_image: folder structure maps to class labels, images normalized to [0,1] and cached in VRAM upfront",
      "MVVM frontend with Adam optimizer control, configurable early stopping, and model metadata persisted as JSON alongside .pt checkpoints",
    ],
    status: "in-progress",
  },
  {
    slug: "kaii-compiler",
    title: "Kaii Compiler",
    description:
      "A statically-typed compiled language built from scratch in C. Source is transpiled to C, then compiled to a native binary via GCC.",
    techStack: ["C", "GCC"],
    highlights: [
      "Zero-copy lexer: token descriptors store a start pointer and length into the original source buffer — no heap duplication at the lexical stage",
      "Recursive descent parser with strict mathematical operator precedence, producing a compact tagged-union AST",
      "Symbol table-backed semantic pass enforcing mandatory explicit typing (i32, f32, class types) before codegen",
      "Single-pass C emitter followed by automated GCC invocation — the full pipeline runs from .kaii source to a native binary",
    ],
    status: "in-progress",
  },
  {
    slug: "kaiml",
    title: "KAIML",
    description:
      "A from-scratch machine learning library targeting high-performance compute, with CPU and GPU backends.",
    techStack: ["C++", "CUDA", "Rust"],
    highlights: [
      "GPU-accelerated tensor operations via hand-written CUDA kernels",
      "Rust bindings for memory-safe high-level API access over the C++ core",
    ],
    status: "in-progress",
  },
];

export const experiences: Experience[] = [
  {
    company: "API Inmobiliaria",
    role: "Backend Developer",
    period: "2024 — Present",
    highlights: [
      "Designed and maintained RESTful APIs in .NET Core powering real estate platform services",
      "Managed relational data models and SQL queries for property listings and transaction workflows",
    ],
    tech: [".NET Core", "C#", "SQL Server", "REST APIs"],
  },
];

export const techStack: TechStack = {
  languages: ["C", "C++", "C#", "TypeScript", "Rust", "SQL"],
  tools: ["LibTorch", "CUDA", ".NET 8", "WPF", "Next.js", "CMake", "GCC", "Git"],
  cloudDevOps: ["GitHub Actions", "Vercel"],
};
