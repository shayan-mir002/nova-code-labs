"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const plans = [
  {
    name: "Website Package",
    tagline: "High-performance web presence",
    cta: "Request Consultation",
    color: "#06B6D4",
    popular: false,
    features: [
      "Custom UI/UX Design & Wireframes",
      "Responsive Website Development",
      "SEO Optimization & Speed Tuning",
      "CMS or Static Integration",
      "Fully Responsive Across Devices",
      "30-Day Post-Launch Support",
      "Full IP Transfer & Code Access",
    ],
  },
  {
    name: "Dashboard Suite",
    tagline: "Data-driven admin & SaaS panels",
    cta: "Start Dashboard Project",
    color: "#2563EB",
    popular: true,
    features: [
      "Custom Dashboard UI/UX Design",
      "Real-Time Data Visualization",
      "User Roles & Permissions",
      "API & Third-Party Integrations",
      "Interactive Charts & Reports",
      "Responsive & Cross-Browser Ready",
      "Ongoing Maintenance Support",
    ],
  },
  {
    name: "Web + Dashboard Bundle",
    tagline: "Complete digital ecosystem",
    cta: "Get Full Bundle",
    color: "#8B5CF6",
    popular: false,
    features: [
      "Website + Dashboard Combined",
      "Unified Brand Experience",
      "Advanced Authentication System",
      "Custom Database Architecture",
      "Performance & Security Hardening",
      "Dedicated Project Manager",
      "Priority 24/7 SLA Support",
    ],
  },
];

export default function Pricing() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding relative bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Simple Pricing"
          title="Plans for Every "
          highlight="Project Size"
          subtitle="From a single website to a full dashboard suite — we tailor every engagement to your specific needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative glass border rounded-3xl p-7 flex flex-col justify-between ${
                plan.popular
                  ? "border-[#2563EB]/40 shadow-2xl scale-[1.03]"
                  : "border-white/6"
              }`}
              style={
                plan.popular
                  ? { boxShadow: "0 10px 40px rgba(37,99,235,0.12)" }
                  : {}
              }
            >
              {/* Popular badge header overlay */}
              {plan.popular && (
                <div className="absolute -top-4.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-3.5 py-1.5 rounded-full gradient-bg text-white text-[10px] font-bold tracking-wider uppercase shadow-lg">
                    <Zap size={10} />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header info */}
              <div>
                <div className="mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${plan.color}15`,
                      border: `1px solid ${plan.color}25`,
                    }}
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ background: plan.color }}
                    />
                  </div>
                  <h3 className="text-lg font-black text-white">{plan.name}</h3>
                  <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">{plan.tagline}</p>
                </div>

                <div className="mb-6 pt-5 border-t border-white/5">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Project Pricing Model</p>
                  <p className="text-xl font-black mt-0.5" style={{ color: plan.color }}>
                    Custom Quote Basis
                  </p>
                </div>

                {/* Features listing */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${plan.color}15` }}
                      >
                        <Check size={8} style={{ color: plan.color }} />
                      </div>
                      <span className="text-gray-300 text-xs leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA triggers */}
              <button
                onClick={() => scrollTo("#contact")}
                className={`group w-full py-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 hover:scale-[1.02] ${
                  plan.popular
                    ? "gradient-bg text-white shadow-xl shadow-blue-500/10"
                    : "glass-light border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
