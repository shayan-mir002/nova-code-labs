"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Clock, Send, CheckCircle, User, Building2,
  Phone, Briefcase, DollarSign, Calendar, MessageSquare, AlertCircle,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  businessType: string;
  budget: string;
  timeline: string;
  subject: string;
  requirements: string;
  message: string;
  consent: boolean;
}

const initialForm: FormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  businessType: "",
  budget: "",
  timeline: "",
  subject: "",
  requirements: "",
  message: "",
  consent: false,
};

const businessTypes = [
  "Website Development", "SaaS Dashboard", "Admin Panel",
  "CRM System", "AI Integration", "UI/UX Design", "Other",
];
const budgets = [
  "Under $5,000", "$5,000 – $15,000", "$15,000 – $50,000",
  "$50,000 – $100,000", "$100,000+", "Discuss with engineers",
];
const timelines = [
  "Immediate (1–3 weeks)", "Under 1 Month", "2–3 Months", "Flexible",
];

function Field({
  label, name, type = "text", icon: Icon, placeholder, required, hint,
  value, error, onInput,
}: {
  label: string; name: keyof FormData; type?: string;
  icon: React.ElementType; placeholder: string; required?: boolean; hint?: string;
  value: string; error?: string; onInput: (name: keyof FormData, value: string | boolean) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-300 mb-2">
        {label} {required && <span className="text-red-400">*</span>}
        {!required && <span className="text-gray-500 font-normal ml-1">(optional)</span>}
      </label>
      <div className="relative">
        <Icon size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type={type}
          value={value}
          onChange={(e) => onInput(name, e.target.value)}
          placeholder={placeholder}
          className={`w-full pl-11 pr-4 py-4 rounded-xl text-sm text-white placeholder-gray-600 glass-light border transition-all duration-200 focus:outline-none focus:border-[#2563EB]/60 focus:bg-white/5 ${
            error ? "border-red-500/50" : "border-white/8"
          }`}
        />
      </div>
      {hint && !error && (
        <p className="text-gray-500 text-xs mt-1.5">{hint}</p>
      )}
      {error && (
        <p className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5 font-medium">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label, name, icon: Icon, options,
  value, onInput,
}: {
  label: string; name: keyof FormData; icon: React.ElementType; options: string[];
  value: string; onInput: (name: keyof FormData, value: string | boolean) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-300 mb-2">
        {label} <span className="text-gray-500 font-normal ml-1">(optional)</span>
      </label>
      <div className="relative">
        <Icon size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-10" />
        <select
          value={value}
          onChange={(e) => onInput(name, e.target.value)}
          className="w-full pl-11 pr-4 py-4 rounded-xl text-sm text-white glass-light border border-white/8 bg-[#0a0f1a] appearance-none focus:outline-none focus:border-[#2563EB]/60 transition-all cursor-pointer"
        >
          <option value="" className="bg-[#0a0f1a]">Select {label}</option>
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#0a0f1a]">{o}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => setSubmitted(false), 3000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};

    if (!form.fullName.trim()) {
      e.fullName = "Full name is required";
    } else if (!/^[A-Za-z\s'-]+$/.test(form.fullName.trim())) {
      e.fullName = "Name cannot contain numbers or special characters";
    }

    if (!form.email.trim()) {
      e.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = "Please enter a valid email address";
    }

    if (form.phone.trim() && !/^\d{7,15}$/.test(form.phone.trim())) {
      e.phone = "Phone must contain only digits (7-15 numbers)";
    }

    if (!form.message.trim()) {
      e.message = "Please describe your project";
    }

    if (!form.consent) {
      e.consent = "Please agree to our privacy policy";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm(initialForm);
      } else {
        const data = await res.json();
        setErrors({ message: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setErrors({ message: "Failed to send. Please email us directly." });
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (name: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <section id="contact" className="section-padding relative bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute w-[600px] h-[600px] opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)", top: "20%", right: "-200px" }} />
        <div className="blob blob-delay absolute w-[500px] h-[500px] opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)", bottom: "-100px", left: "-100px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Get In Touch"
          title="Start Your Software "
          highlight="Initiative"
          subtitle="Tell us about your project, timeline, and budget. Our team will get back to you within 24 hours."
        />

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-7 py-5 rounded-2xl glass border border-[#10B981]/50 shadow-2xl max-w-md w-full mx-4"
              style={{ boxShadow: "0 10px 40px rgba(16,185,129,0.15)" }}
            >
              <CheckCircle size={20} className="text-[#10B981] flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-bold">Message Sent Successfully!</p>
                <p className="text-gray-400 text-xs mt-0.5">
                  We&apos;ll review your project and respond within 24 hours.
                </p>
              </div>
              <button onClick={() => setSubmitted(false)} className="ml-auto text-gray-500 hover:text-white transition-colors">✕</button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass border border-white/8 rounded-3xl p-8">
              <h3 className="text-xl font-black text-white mb-3">Let&apos;s Build Together</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-7">
                Ready to build something exceptional? Fill out the form and our engineers will reach out to discuss your vision.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#2563EB]/20 flex items-center justify-center border border-[#2563EB]/30 flex-shrink-0">
                    <Mail size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Direct Email</p>
                    <a href="mailto:novacodelabs1@gmail.com"
                      className="text-white text-sm font-semibold hover:text-[#06B6D4] transition-colors">
                      novacodelabs1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#10B981]/20 flex items-center justify-center border border-[#10B981]/30 flex-shrink-0">
                    <Clock size={18} className="text-[#10B981]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Response Time</p>
                    <p className="text-white text-sm font-semibold">Within 24 Hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-7 border-t border-white/8 space-y-3">
                {[
                  "Free initial consultation included",
                  "NDA signed before discovery",
                  "Full IP transfer guaranteed",
                  "No hidden fees, ever",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle size={14} className="text-[#10B981] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} noValidate
              className="glass border border-white/8 rounded-3xl p-8 space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="fullName" icon={User}
                  placeholder="John Smith" required
                  hint="Letters and spaces only"
                  value={form.fullName} error={errors.fullName} onInput={handleInput} />
                <Field label="Company Name" name="companyName" icon={Building2}
                  placeholder="Acme Inc."
                  value={form.companyName} error={errors.companyName} onInput={handleInput} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Email Address" name="email" type="email" icon={Mail}
                  placeholder="john@acme.com" required
                  value={form.email} error={errors.email} onInput={handleInput} />
                <Field label="Phone Number" name="phone" type="tel" icon={Phone}
                  placeholder="1234567890"
                  hint="Digits only — optional"
                  value={form.phone} error={errors.phone} onInput={handleInput} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SelectField label="Focus Area" name="businessType" icon={Briefcase} options={businessTypes}
                  value={form.businessType} onInput={handleInput} />
                <SelectField label="Target Budget" name="budget" icon={DollarSign} options={budgets}
                  value={form.budget} onInput={handleInput} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SelectField label="Launch Timeline" name="timeline" icon={Calendar} options={timelines}
                  value={form.timeline} onInput={handleInput} />
                <Field label="Project Subject" name="subject" icon={MessageSquare}
                  placeholder="e.g. AI SaaS Platform"
                  value={form.subject} error={errors.subject} onInput={handleInput} />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  Technical Requirements <span className="text-gray-500 font-normal ml-1">(optional)</span>
                </label>
                <textarea rows={2} value={form.requirements}
                  onChange={(e) => handleInput("requirements", e.target.value)}
                  placeholder="Key features, integrations, stack preferences..."
                  className="w-full px-4 py-4 rounded-xl text-sm text-white placeholder-gray-600 glass-light border border-white/8 focus:outline-none focus:border-[#2563EB]/60 focus:bg-white/5 resize-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  Project Message <span className="text-red-400">*</span>
                </label>
                <textarea rows={4} value={form.message}
                  onChange={(e) => handleInput("message", e.target.value)}
                  placeholder="Describe your project, goals, challenges, or any questions..."
                  className={`w-full px-4 py-4 rounded-xl text-sm text-white placeholder-gray-600 glass-light border resize-none focus:outline-none focus:border-[#2563EB]/60 focus:bg-white/5 transition-all ${
                    errors.message ? "border-red-500/50" : "border-white/8"
                  }`} />
                {errors.message && (
                  <p className="flex items-center gap-1.5 text-red-400 text-xs mt-1.5 font-medium">
                    <AlertCircle size={11} /> {errors.message}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-start gap-3.5 cursor-pointer group">
                  <div className="relative mt-0.5 flex-shrink-0">
                    <input type="checkbox" checked={form.consent}
                      onChange={(e) => handleInput("consent", e.target.checked)}
                      className="sr-only" />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                      form.consent ? "gradient-bg border-transparent" :
                      errors.consent ? "border-red-500/50" :
                      "border-white/20 group-hover:border-[#2563EB]/50"
                    }`}>
                      {form.consent && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm leading-relaxed">
                    I agree that NovaCode may contact me regarding my project inquiry.
                    My information will be kept confidential and never shared with third parties.
                  </span>
                </label>
                {errors.consent && (
                  <p className="flex items-center gap-1.5 text-red-400 text-xs mt-2 ml-9 font-medium">
                    <AlertCircle size={11} /> {errors.consent}
                  </p>
                )}
              </div>

              <button type="submit" disabled={loading}
                className="w-full py-4.5 rounded-2xl gradient-bg text-white font-bold text-base flex items-center justify-center gap-2.5 hover:opacity-95 transition-all duration-200 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/15 animate-pulse-glow cursor-pointer">
                {loading ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Sending your message...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Project Inquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
