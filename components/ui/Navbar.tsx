"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Why NovaCode", href: "#why-novacode" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Zap size={15} className="text-white" />
            </div>
            <span className="text-base font-black tracking-tight">
              <span className="gradient-text">NovaCode</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-150 rounded-lg hover:bg-white/[0.02] cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#contact")}
              className="px-5 py-2.5 rounded-xl gradient-bg text-white text-sm font-bold hover:opacity-95 transition-all duration-200 hover:scale-105 shadow-md shadow-blue-500/10 cursor-pointer"
            >
              Consult Engineers
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-lg glass text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-40 w-72 glass border-l border-white/10 flex flex-col pt-20 px-6 gap-2"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => scrollTo(link.href)}
                className="text-left px-4 py-3.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all text-sm font-semibold cursor-pointer"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => scrollTo("#contact")}
              className="mt-4 py-3.5 rounded-xl gradient-bg text-white text-sm font-bold text-center shadow-md shadow-blue-500/10 cursor-pointer"
            >
              Consult Engineers
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-30 bg-black/60 xl:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
