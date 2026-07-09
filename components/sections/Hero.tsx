"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Activity, ShieldCheck, Cpu } from "lucide-react";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 bg-[#030712]"
    >
      {/* Background Video (Highly visible & bright) */}
      <video
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90 scale-100 pointer-events-none"
      />

      {/* Luxury Overlay: Gradient masks & radial glows - Balanced to keep video bright */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Soft dark overlay that lets the video shine through brightly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/50 via-[#030712]/20 to-[#030712]" />

        {/* Ambient radial glows */}
        <div
          className="absolute w-[600px] h-[600px] opacity-20 filter blur-3xl rounded-full"
          style={{
            background: "radial-gradient(circle, #2563EB 0%, transparent 70%)",
            top: "-100px",
            left: "10%",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] opacity-15 filter blur-3xl rounded-full"
          style={{
            background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
            bottom: "-100px",
            right: "10%",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 text-center">
        {/* Tech Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 text-xs font-bold tracking-wide text-cyan-400 mb-8 bg-[#030712]/40 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-[#06B6D4] animate-pulse" />
          <span>Next-Gen AI-First Software Agency</span>
        </motion.div>

        {/* Typography Title - with drop-shadows to remain perfectly legible over the bright video */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white mb-6 max-w-4xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
        >
          Building Elite <span className="gradient-text">AI-First</span> Software for Global Brands
        </motion.h1>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-100 text-base sm:text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          NovaCode designs and develops high-performance websites, SaaS dashboards, and custom web applications engineered to automate growth and scale your business globally.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4.5 mb-16"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="group flex items-center gap-2 px-9 py-5 rounded-2xl gradient-bg text-white text-sm font-bold hover:opacity-95 transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-blue-500/30 cursor-pointer"
          >
            Start Your Project
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1.5 transition-transform"
            />
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="flex items-center gap-2 px-9 py-5 rounded-2xl glass border border-white/20 text-white text-sm font-bold hover:bg-white/20 hover:border-white/30 transition-all duration-200 hover:scale-[1.03] bg-[#030712]/30 backdrop-blur-sm cursor-pointer"
          >
            <Play size={14} className="text-[#06B6D4]" />
            Explore Works
          </button>
        </motion.div>

        {/* Floating tech stack/status tags at the bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-10 max-w-3xl mx-auto"
        >
          {[
            { icon: Cpu, label: "AI Optimization", value: "+85% Velocity" },
            { icon: Activity, label: "Server Cluster", value: "Uptime 99.9%" },
            { icon: ShieldCheck, label: "Security Vault", value: "ISO Certified" },
          ].map((tag, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4.5 py-2.5 rounded-2xl glass border border-white/10 text-[11px] font-bold text-gray-200 shadow-sm bg-[#030712]/50 backdrop-blur-sm"
            >
              <tag.icon size={13} className="text-cyan-400" />
              <span>{tag.label}: <strong className="text-white font-black">{tag.value}</strong></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
