"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "How long does a typical software development lifecycle take?",
    a: "Every engagement varies by complexity. A standard prototype or custom web application MVP generally completes within 3 to 6 weeks. High-scale multi-tenant SaaS dashboards or custom ERP architectures typically span 8 to 16 weeks from initial wireframes to production deployment.",
  },
  {
    q: "How do you calculate billing and custom project quotes?",
    a: "We assess the technical challenges, number of API integration endpoints, database scale, compliance tiers (e.g. HIPAA, PCI-DSS), and size of the dedicated developer team. We outline transparent milestones in a comprehensive service proposal before starting.",
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs) before discovery?",
    a: "Yes. NovaCode guarantees absolute client IP safety. We routinely sign standard or custom NDAs during our initial consultations, protecting your concepts, databases, and trade secrets throughout the development cycle.",
  },
  {
    q: "Can you modernize or rebuild our legacy enterprise codebase?",
    a: "Absolutely. We specialize in legacy system migrations. We design database schemas, replace old backends with fast engines like FastAPI or Node.js, refresh user flows using Next.js/React, and set up automated Docker container clouds without disruption.",
  },
  {
    q: "Do you offer post-launch support SLA guarantees?",
    a: "Yes. Every agreement includes post-launch operational support. We offer SLA-backed monthly retainer options for security updates, real-time database back-ups, speed checks, and incremental feature updates.",
  },
  {
    q: "What technical integrations do you support?",
    a: "We support Stripe, HubSpot, Salesforce, OpenAI API endpoints, OAuth systems (Auth0, NextAuth, Firebase Auth, Supabase), Twilio, map services, and custom legacy database pipelines.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative bg-[#030712]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Inquiries"
          title="Frequently Asked "
          highlight="Questions"
          subtitle="Review answers to standard questions regarding our developer engagement, SLA support, and database methods."
        />

        <div className="space-y-3.5">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`glass border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i ? "border-[#2563EB]/40" : "border-white/5"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4.5 text-left group"
              >
                <span className={`text-sm font-semibold transition-colors ${
                  openIndex === i ? "text-white" : "text-gray-300 group-hover:text-white"
                }`}>
                  {faq.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${
                    openIndex === i ? "gradient-bg" : "glass-light border border-white/10"
                  }`}
                >
                  {openIndex === i ? (
                    <Minus size={12} className="text-white" />
                  ) : (
                    <Plus size={12} className="text-gray-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-white/5">
                      <p className="text-gray-400 text-xs leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
