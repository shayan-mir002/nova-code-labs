"use client";
import { Code2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";



const technologies = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    desc: "A declarative, component-based library for building dynamic interfaces.",
    color: "#61DAFB",
    highlights: ["Virtual DOM", "Declarative UI", "Component Reuse"],
  },
  {
    name: "Next.js",
    category: "frontend",
    desc: "The elite production framework for React offering SSR, static generation, and API routes.",
    color: "#FFFFFF",
    highlights: ["Server Components", "Route Optimizations", "Static Pre-rendering"],
  },
  {
    name: "TypeScript",
    category: "frontend",
    desc: "Strictly typed syntactic superset of Javascript ensuring type-safe development.",
    color: "#3178C6",
    highlights: ["Static Compilation", "Zero Runtime Bloat", "Type Interfaces"],
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    desc: "Utility-first CSS framework enabling fast layouts and custom responsive design systems.",
    color: "#38BDF8",
    highlights: ["Utility Utility", "Purged Files", "Responsive Breakpoints"],
  },
  {
    name: "Framer Motion",
    category: "frontend",
    desc: "Production-ready motion library for React enabling complex physics-based UI transitions.",
    color: "#F43F5E",
    highlights: ["Spring Animations", "Scroll Reveals", "Keyframe Control"],
  },
  {
    name: "GSAP",
    category: "frontend",
    desc: "High-performance JavaScript animation library for advanced page sequencing.",
    color: "#88CE02",
    highlights: ["Timeline Sequencing", "SVG Morphing", "Scroll Triggering"],
  },

];

export default function TechnologyStack() {
  return (
    <section id="tech-stack" className="section-padding relative bg-[#030712] overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="blob absolute w-[600px] h-[600px] opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #2563EB 0%, transparent 70%)",
            top: "20%",
            right: "-100px",
          }}
        />
        <div
          className="blob blob-delay-2 absolute w-[500px] h-[500px] opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
            bottom: "0",
            left: "-100px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Technology Stack"
          title="Engineered With the "
          highlight="Best Tools"
          subtitle="We select and master enterprise-level frontend tools designed to deliver maximum performance and pixel-perfect experiences."
        />

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              className="card-hover glass border border-white/6 rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300"
                style={{ backgroundColor: tech.color }}
              />

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-base font-black text-white group-hover:text-cyan-400 transition-colors">
                    {tech.name}
                  </span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
                    style={{
                      background: `${tech.color}15`,
                      border: `1px solid ${tech.color}25`,
                      color: tech.color,
                    }}
                  >
                    {tech.name.substring(0, 2)}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {tech.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4 mt-auto">
                {tech.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-md"
                    style={{
                      background: `${tech.color}10`,
                      color: tech.color,
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
