"use client";
import { motion } from "framer-motion";
import { Code2, Globe, Shield, Zap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const techStack = ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Tailwind CSS", "GraphQL", "Redis", "Docker"];

const values = [
  {
    icon: Code2,
    title: "Engineering Excellence",
    desc: "Clean, maintainable code following industry best practices and modern architectural patterns.",
    color: "#2563EB",
  },
  {
    icon: Globe,
    title: "Business-First Thinking",
    desc: "Every technical decision is made with your business goals and ROI in mind.",
    color: "#06B6D4",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    desc: "Clear communication, honest timelines, and full visibility into your project progress.",
    color: "#10B981",
  },
  {
    icon: Zap,
    title: "Innovation-Driven",
    desc: "We leverage the latest technologies to build solutions that give you a competitive edge.",
    color: "#8B5CF6",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="blob absolute w-[400px] h-[400px] opacity-10"
          style={{
            background: "radial-gradient(circle, #2563EB 0%, transparent 70%)",
            bottom: "0",
            left: "-100px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="About Us"
          title="Who We Are & "
          highlight="What We Stand For"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              NovaCode Labs specializes in developing{" "}
              <span className="text-white font-semibold">high-quality web applications and SaaS solutions</span>{" "}
              that help businesses streamline operations, improve productivity, and maximize revenue.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We combine modern technologies with user-centered design to create software that delivers
              measurable business results. Our team of senior engineers, designers, and strategists
              work as an extension of your team — not just a vendor.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              From early-stage startups to established enterprises, we&apos;ve helped 40+ businesses
              across healthcare, e-commerce, education, and finance achieve their digital transformation goals.
            </p>

            {/* Tech stack */}
            <div>
              <p className="text-sm text-gray-500 mb-3 font-medium uppercase tracking-wider">Technologies We Master</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium glass-light border border-white/10 text-gray-300 hover:text-white hover:border-[#2563EB]/40 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-hover glass border border-white/8 rounded-2xl p-5 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                  style={{ background: `${v.color}20` }}
                >
                  <v.icon size={18} style={{ color: v.color }} />
                </div>
                <h4 className="text-white text-sm font-semibold mb-2">{v.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
