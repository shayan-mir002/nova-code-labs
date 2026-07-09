"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeartHandshake, Code, CheckCircle, BarChart, Users, Award } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const coreValues = [
  {
    icon: Code,
    title: "Engineering Excellence",
    desc: "We write clean, strictly typed, and self-documenting code. No shortcuts, no legacy bloat.",
    color: "#2563EB",
  },
  {
    icon: Zap,
    title: "Velocity & Performance",
    desc: "Sub-second loading targets, optimized Core Web Vitals, and serverless hosting structures.",
    color: "#06B6D4",
  },
  {
    icon: ShieldCheck,
    title: "Absolute Transparency",
    desc: "Direct Slack channels, daily GitHub commits, and weekly video walkthroughs of your build.",
    color: "#10B981",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Partnership",
    desc: "We align with your product KPIs and serve as your elite engineering arm, not just a vendor.",
    color: "#8B5CF6",
  },
];

const metrics = [
  {
    value: 250,
    suffix: "+",
    label: "Successful Deployments",
    icon: Award,
    color: "#2563EB",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention Rate",
    icon: HeartHandshake,
    color: "#06B6D4",
  },
  {
    value: 40,
    suffix: "+",
    label: "Corporate Partners",
    icon: Users,
    color: "#8B5CF6",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Engineering Lead",
    icon: BarChart,
    color: "#10B981",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-novacode" className="section-padding relative bg-[#030712] overflow-hidden">
      {/* Background visuals */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="blob absolute w-[600px] h-[600px] opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
            top: "-150px",
            right: "-100px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Block: Heading & Checklist */}
          <div className="lg:col-span-5 text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold text-cyan-400 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
              <span>THE NOVACODE DIFFERENCE</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white mb-6"
            >
              Built to <span className="gradient-text">Outlast</span>, Designed to <span className="gradient-text">Scale</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-sm leading-relaxed mb-8"
            >
              We don&apos;t just complete tickets; we collaborate on product architecture. We focus on solving business bottlenecks with world-class engineering systems that maximize profitability.
            </motion.p>

            <div className="space-y-3.5">
              {[
                "100% senior-level engineers on every project",
                "Full architectural ownership and intellectual transfer",
                "Strict verification protocols before release",
                "Robust SLA response and ongoing technical audits",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={16} className="text-[#10B981] flex-shrink-0" />
                  <span className="text-gray-300 text-xs font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Block: Core values grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreValues.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="card-hover glass border border-white/6 rounded-2xl p-5.5 relative overflow-hidden group"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity"
                  style={{ backgroundColor: val.color }}
                />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                  style={{
                    background: `${val.color}15`,
                    border: `1px solid ${val.color}25`,
                  }}
                >
                  <val.icon size={18} style={{ color: val.color }} />
                </div>

                <h4 className="text-white text-sm font-extrabold mb-1.5 group-hover:text-cyan-400 transition-colors">
                  {val.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Unified Statistics Grid (Merged from Stats) */}
        <div className="border-t border-white/5 pt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {metrics.map((met, i) => (
              <motion.div
                key={met.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass border border-white/5 rounded-2xl p-6.5 text-center relative overflow-hidden group"
              >
                {/* Glow ring */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300"
                  style={{ backgroundColor: met.color }}
                />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: `${met.color}15`,
                    border: `1px solid ${met.color}25`,
                  }}
                >
                  <met.icon size={18} style={{ color: met.color }} />
                </div>

                <p className="text-2xl sm:text-3xl font-black mb-1.5" style={{ color: met.color }}>
                  <AnimatedCounter end={met.value} suffix={met.suffix} />
                </p>
                <p className="text-white text-[10px] font-bold uppercase tracking-wider mb-0.5">{met.label}</p>
                <p className="text-gray-500 text-[9px] font-medium">Verified by audits</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
