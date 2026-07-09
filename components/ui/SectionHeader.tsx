"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light border border-[#2563EB]/30 text-sm text-[#06B6D4] font-medium mb-4 ${centered ? "mx-auto" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${centered ? "text-center" : ""}`}>
        {parts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {parts[1] && <span>{parts[1]}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-gray-400 text-base max-w-3xl leading-relaxed ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
