import React from "react";
// Importamos iconos de la librería Heroicons (vienen en react-icons)
import { HiOutlineCpuChip, HiOutlineServerStack, HiOutlineBolt } from "react-icons/hi2";

export default function StrengthsSection() {
  const strengths = [
    {
      title: "Low-Level Optimization",
      description: "Systems programming from scratch. Memory management, zero-copy pipelines, and custom compilers using C and C++.",
      icon: <HiOutlineCpuChip className="text-2xl text-[#8E8CD8]" />
    },
    {
      title: "Scalable Architecture",
      description: "Robust backend development. Designing RESTful APIs and managing relational databases with .NET Core and SQL.",
      icon: <HiOutlineServerStack className="text-2xl text-[#8E8CD8]" />
    },
    {
      title: "High-Performance AI",
      description: "Bringing machine learning to the hardware level. GPU-accelerated tensor operations and custom AutoML engines.",
      icon: <HiOutlineBolt className="text-2xl text-[#8E8CD8]" />
    }
  ];

  return (
    <div className="bg-white py-20 px-8 border-t border-gray-100 w-[100vw] relative left-1/2 -translate-x-1/2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {strengths.map((item, index) => (
          <div key={index} className="flex flex-col animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
            {/* Contenedor del icono con fondo morado muy claro */}
            <div className="w-14 h-14 rounded-2xl bg-[#F4F3FF] flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-[#2b2d2f] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}