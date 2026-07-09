"use client";
import { motion } from "framer-motion";
import { Rocket, TrendingUp, Building2, ShieldCheck, Stethoscope, Truck, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const industries = [
  {
    icon: Rocket,
    title: "Startups & Scaleups",
    desc: "Speed-to-market is everything. We design clean MVPs and highly adaptable cloud solutions that scale as you secure funding rounds.",
    color: "#2563EB",
    focus: ["Rapid Prototyping", "Serverless Infrastructure", "API-First Architecture"],
  },
  {
    icon: TrendingUp,
    title: "SMBs & Digital Expansion",
    desc: "Automate manual operations, build unified SaaS CRM/ERP dashboards, and eliminate spreadsheets to accelerate productivity.",
    color: "#06B6D4",
    focus: ["Workflow Automation", "CRM / ERP Software", "Operational Dashboards"],
  },
  {
    icon: Building2,
    title: "Global Enterprise",
    desc: "Robust, multi-tenant databases with high availability, legacy software integrations, advanced monitoring, and compliance compliance.",
    color: "#8B5CF6",
    focus: ["Distributed Databases", "System Integrations", "Multi-Region Deployments"],
  },
  {
    icon: ShieldCheck,
    title: "FinTech & Payments",
    desc: "Engineered for compliance and low-latency throughput. Stripe integrations, encrypted ledgers, and automated audits.",
    color: "#10B981",
    focus: ["Ledger Encryption", "PCI-DSS Best Practices", "Transaction Gateways"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Biotech",
    desc: "HIPAA-compliant software platforms, patient management dashboards, and medical equipment API data routing.",
    color: "#EF4444",
    focus: ["HIPAA Security Vaults", "Patient Schedulers", "Electronic Health Records"],
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    desc: "Automatic route optimization algorithms, dynamic warehouse boards, and mobile-friendly driver dispatch systems.",
    color: "#F59E0B",
    focus: ["Route Optimizations", "Warehouse Analytics", "Driver Dispatch Portals"],
  },
];

export default function Industries() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="industries" className="section-padding relative bg-[#030712] overflow-hidden">
      {/* Background visual layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="blob absolute w-[500px] h-[500px] opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #2563EB 0%, transparent 70%)",
            top: "20%",
            left: "-100px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Industries We Serve"
          title="Tailored Solutions for Every "
          highlight="Domain Scale"
          subtitle="From agile startups seeking rapid MVPs to global enterprises managing high-volume transaction clusters."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-hover group glass border border-white/6 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle top border */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${ind.color}, transparent)` }}
              />

              <div>
                {/* Icon display */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: `${ind.color}15`,
                    border: `1px solid ${ind.color}25`,
                  }}
                >
                  <ind.icon size={20} style={{ color: ind.color }} />
                </div>

                <h3 className="text-base font-extrabold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  {ind.desc}
                </p>
              </div>

              {/* Bullet highlights */}
              <div>
                <ul className="space-y-2 border-t border-white/5 pt-4 mb-6">
                  {ind.focus.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[10px] font-semibold text-gray-300">
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: ind.color }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo("#contact")}
                  className="flex items-center gap-1 text-xs font-bold transition-colors group/btn"
                  style={{ color: ind.color }}
                >
                  Explore Industry Blueprints
                  <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
