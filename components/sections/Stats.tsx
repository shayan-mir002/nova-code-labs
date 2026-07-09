"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Trophy, Heart, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: 250,
    suffix: "+",
    label: "Projects Completed",
    sublabel: "Across all industries",
    color: "#F59E0B",
  },
  {
    icon: Heart,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    sublabel: "Verified reviews",
    color: "#EF4444",
  },
  {
    icon: Users,
    value: 40,
    suffix: "+",
    label: "Business Clients",
    sublabel: "Worldwide",
    color: "#2563EB",
  },
  {
    icon: Clock,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    sublabel: "Building software",
    color: "#10B981",
  },
];

export default function Stats() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient bar */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "linear-gradient(135deg, #2563EB 0%, #06B6D4 50%, #8B5CF6 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center glass border border-white/8 rounded-3xl p-8 card-hover group relative overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"
                style={{ background: stat.color }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ background: `${stat.color}20`, border: `1px solid ${stat.color}30` }}
              >
                <stat.icon size={24} style={{ color: stat.color }} />
              </div>

              <div
                className="text-4xl lg:text-5xl font-black mb-2 tracking-tight"
                style={{ color: stat.color }}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>

              <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
              <p className="text-gray-500 text-xs">{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
