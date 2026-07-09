"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CEO & Co-Founder",
    company: "Veloce Financial Systems",
    text: "NovaCode completely overhauled our transaction monitoring panel. The type safety and custom APIs they deployed cut billing sync errors to absolute zero. Their velocity matches the best in SV.",
    rating: 5,
    avatar: "AT",
    color: "#2563EB",
  },
  {
    name: "Sarah Mitchell",
    role: "Director of Product",
    company: "Zenith Retail Group",
    text: "Working with NovaCode's engineering team felt like adding elite staff engineers to our own roster overnight. They built a custom multi-channel ERP pipeline that handles millions in monthly flow.",
    rating: 5,
    avatar: "SM",
    color: "#06B6D4",
  },
  {
    name: "Dr. Marcus Chen",
    role: "Chief of Medical Tech",
    company: "CareCore Integrations",
    text: "A highly complex compliance medical portal was delivered on schedule. Their security design standards passed our corporate audit checklists without a single issue. Outstanding architecture.",
    rating: 5,
    avatar: "MC",
    color: "#10B981",
  },
  {
    name: "Priya Sharma",
    role: "VP of Engineering",
    company: "DataPulse AI Platforms",
    text: "NovaCode's expertise in custom AI model integrations saved us months of R&D. They successfully launched our LLM predictive analytics pipeline while keeping runtime latency under 100ms.",
    rating: 5,
    avatar: "PS",
    color: "#8B5CF6",
  },
  {
    name: "Charles Vance",
    role: "VP of Operations",
    company: "Fleet Logistics Global",
    text: "Their logistics dispatch engine optimized our route management system completely. Uptime remains flawless at 100% and dashboard navigation is incredibly snappy. Five stars.",
    rating: 5,
    avatar: "CV",
    color: "#F59E0B",
  },
  {
    name: "Elena Rostova",
    role: "Product Owner",
    company: "OmniSaaS Solutions",
    text: "Excellent communication, weekly live demos, and a highly polished UI. They designed our core analytics console from scratch and our users are absolutely loving the experience.",
    rating: 5,
    avatar: "ER",
    color: "#EF4444",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="blob absolute w-[600px] h-[600px] opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #2563EB 0%, transparent 70%)",
            top: "20%",
            left: "-100px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Reviews & Feedback"
          title="What Enterprise Leaders "
          highlight="Say About Us"
          subtitle="Read how our high-fidelity engineering processes have empowered scaling businesses globally."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover glass border border-white/6 rounded-2xl p-6 relative flex flex-col justify-between group"
            >
              {/* Quote icon background indicator */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={28} style={{ color: t.color }} />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={11} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 text-xs leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* User Identity Info */}
              <div className="flex items-center gap-3.5 border-t border-white/5 pt-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}80)`,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-xs font-bold">{t.name}</p>
                  <p className="text-gray-500 text-[10px] font-semibold">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
