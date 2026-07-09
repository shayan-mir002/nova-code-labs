"use client";
import { motion } from "framer-motion";
import {
  Brain, Code2, Globe, Layers,
  Palette, BarChart2, ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Next-gen, high-performance websites and web applications built with React, Next.js, and TypeScript.",
    color: "#8B5CF6",
    features: ["Next.js & React", "Responsive Design", "SEO Optimized"],
  },
  {
    icon: Layers,
    title: "SaaS Dashboards",
    description: "Multi-tenant platforms with real-time analytics, user permissions, subscription billing, and KPI tracking.",
    color: "#10B981",
    features: ["Real-Time Analytics", "Stripe Billing", "Role-Based Access"],
  },
  {
    icon: BarChart2,
    title: "Admin Dashboards",
    description: "Custom admin panels and data visualization dashboards with live metrics and comprehensive reporting.",
    color: "#F59E0B",
    features: ["Data Visualization", "Live Metrics", "Export & Reports"],
  },
  {
    icon: Brain,
    title: "AI Solutions & ML",
    description: "Custom LLM integrations, RAG pipelines, cognitive automation agents, and predictive scoring models.",
    color: "#2563EB",
    features: ["LLM Integrations", "RAG Pipelines", "Cognitive Agents"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Bespoke backend engines and database architecture designed precisely to support your operational goals.",
    color: "#06B6D4",
    features: ["Custom Engines", "Scalable Schema", "Clean Architecture"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "World-class digital interface design. Wireframes, high-fidelity prototypes, and comprehensive design systems.",
    color: "#EC4899",
    features: ["Figma Systems", "Interactive Prototypes", "Visual Excellence"],
  },
];

export default function Services() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding relative bg-[#030712]">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="blob absolute w-[600px] h-[600px] opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
            top: "20%",
            right: "-100px",
          }}
        />
        <div
          className="blob blob-delay absolute w-[500px] h-[500px] opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #2563EB 0%, transparent 70%)",
            bottom: "10%",
            left: "-100px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Our Services"
          title="Web Development & "
          highlight="Dashboard Solutions"
          subtitle="We build high-performance websites, SaaS platforms, and custom dashboards that drive growth and operational efficiency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="card-hover group glass border border-white/6 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle top accent gradient */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
              />

              <div>
                {/* Icon wrapper */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: `${service.color}15`,
                    border: `1px solid ${service.color}25`,
                  }}
                >
                  <service.icon size={20} style={{ color: service.color }} />
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Sub-features list */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: `${service.color}10`,
                        color: service.color,
                        border: `1px solid ${service.color}20`,
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-1.5 text-xs font-semibold mt-auto transition-colors duration-200 group/btn"
                style={{ color: service.color }}
              >
                Inquire Service
                <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
