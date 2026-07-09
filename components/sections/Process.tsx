"use client";
import { motion } from "framer-motion";
import {
  Search, FileText, Paintbrush, Code2, TestTube, Rocket, HeartHandshake,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    desc: "We analyze your business targets, map user journeys, outline core metrics, and identify critical technological dependencies.",
    color: "#06B6D4",
    step: "01",
  },
  {
    icon: FileText,
    title: "Planning & Architecture",
    desc: "Drafting structural wireframes, mapping entity-relationship diagrams, defining database schemas, and setting up release milestones.",
    color: "#2563EB",
    step: "02",
  },
  {
    icon: Paintbrush,
    title: "High-Fidelity UI/UX Design",
    desc: "Creating pixel-perfect visual mockups, constructing design systems, and building interactive Figma prototypes for review.",
    color: "#8B5CF6",
    step: "03",
  },
  {
    icon: Code2,
    title: "Elite Code Engineering",
    desc: "Building client applications and robust APIs with strict type safety, modular structures, and continuous performance testing.",
    color: "#F59E0B",
    step: "04",
  },
  {
    icon: TestTube,
    title: "Quality Assurance & Audits",
    desc: "Running extensive end-to-end integration tests, static code analysis, security auditing, and performance benchmarks.",
    color: "#10B981",
    step: "05",
  },
  {
    icon: Rocket,
    title: "Zero-Downtime Launch",
    desc: "Deploying code clusters to AWS or Vercel, provisioning CDN edge caching, and activating uptime and alert tracking panels.",
    color: "#EF4444",
    step: "06",
  },
  {
    icon: HeartHandshake,
    title: "24/7 SLA & Optimization",
    desc: "Continuous performance audits, dependency security patches, and incremental feature updates to keep your platform scaling.",
    color: "#EC4899",
    step: "07",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding relative bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Product Lifecycle"
          title="Our Structured Development "
          highlight="Process"
          subtitle="A predictable, transparent, and rigorous 7-step engineering loop ensuring high quality and on-time launches."
        />

        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.2) 20%, rgba(6,182,212,0.2) 80%, transparent)" }}
          />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                    i > 0 ? "lg:mt-10" : ""
                  }`}
                >
                  {/* Left side content */}
                  <div className={`${isLeft ? "lg:text-right lg:pr-14" : "lg:col-start-2 lg:pl-14"}`}>
                    <div
                      className={`glass border border-white/6 rounded-2xl p-6.5 card-hover group ${
                        isLeft ? "" : "lg:col-start-2"
                      }`}
                    >
                      <div className={`flex items-center gap-3.5 mb-3.5 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                          style={{
                            background: `${step.color}15`,
                            border: `1px solid ${step.color}25`,
                          }}
                        >
                          <step.icon size={18} style={{ color: step.color }} />
                        </div>
                        <div className={isLeft ? "lg:text-right" : ""}>
                          <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: step.color }}>
                            Phase {step.step}
                          </p>
                          <h3 className="text-sm font-extrabold text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className={`text-gray-400 text-xs leading-relaxed ${isLeft ? "lg:text-right" : ""}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center glowing timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div
                      className="w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-bold text-white shadow-lg"
                      style={{
                        background: `#030712`,
                        borderColor: `${step.color}30`,
                        boxShadow: `0 0 15px ${step.color}20`,
                      }}
                    >
                      <span style={{ color: step.color }}>{step.step}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
