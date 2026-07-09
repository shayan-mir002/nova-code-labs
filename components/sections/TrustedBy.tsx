"use client";
import { motion } from "framer-motion";

const technologies = [
  { name: "React", type: "Frontend", color: "#61DAFB", glow: "rgba(97,218,251,0.2)" },
  { name: "Next.js", type: "Framework", color: "#FFFFFF", glow: "rgba(255,255,255,0.15)" },
  { name: "TypeScript", type: "Language", color: "#3178C6", glow: "rgba(49,120,198,0.2)" },
  { name: "Node.js", type: "Runtime", color: "#339933", glow: "rgba(51,153,51,0.2)" },
  { name: "Python", type: "Language", color: "#3776AB", glow: "rgba(55,118,171,0.2)" },
  { name: "Docker", type: "Container", color: "#2496ED", glow: "rgba(36,150,237,0.2)" },
  { name: "AWS", type: "Cloud", color: "#FF9900", glow: "rgba(255,153,0,0.2)" },
  { name: "OpenAI", type: "Artificial Intelligence", color: "#412991", glow: "rgba(65,41,145,0.2)" },
];

export default function TrustedBy() {
  return (
    <section className="py-16 border-y border-white/5 bg-[#030712]/50 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[300px] bg-blue-500/5 filter blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500 mb-10"
        >
          Powering Enterprises & Startups With Top-Tier Technologies
        </motion.p>

        {/* Brand layout - elegant, responsive grids */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-3.5 px-6 py-4.5 rounded-2xl glass border border-white/5 hover:border-white/10 transition-all duration-300 cursor-default group relative overflow-hidden"
              style={{
                boxShadow: `0 4px 30px rgba(0,0,0,0.1)`,
              }}
            >
              {/* Soft background hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${tech.color} 0%, transparent 70%)`,
                }}
              />

              {/* Monogram indicator */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 group-hover:scale-105"
                style={{
                  background: `${tech.color}15`,
                  border: `1px solid ${tech.color}25`,
                  color: tech.color,
                  boxShadow: `inset 0 0 10px ${tech.color}10`,
                }}
              >
                {tech.name.substring(0, 2)}
              </div>

              <div>
                <p className="text-white font-bold text-sm tracking-wide group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </p>
                <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                  {tech.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
