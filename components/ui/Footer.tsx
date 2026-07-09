"use client";
import { Zap, Mail, MapPin, ArrowUpRight } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "SaaS Dashboards", href: "#services" },
      { label: "Admin Panels", href: "#services" },
      { label: "AI Solutions", href: "#services" },
      { label: "CRM Systems", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why NovaCode", href: "#why-novacode" },
      { label: "Technology Stack", href: "#tech-stack" },
      { label: "Our Process", href: "#process" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

const socials = [
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: GithubIcon, href: "#", label: "GitHub" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] gradient-bg opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-blue-500/10">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-xl font-black tracking-tight">
                <span className="gradient-text">NovaCode</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              We build high-performance websites, SaaS dashboards, and custom web applications that drive real business growth.
            </p>
            <div className="space-y-3">
              <a href="mailto:novacodelabs1@gmail.com"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-200 group">
                <div className="w-8 h-8 rounded-lg glass-light flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
                  <Mail size={13} className="text-[#2563EB]" />
                </div>
                <span>novacodelabs1@gmail.com</span>
              </a>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <div className="w-8 h-8 rounded-lg glass-light flex items-center justify-center border border-white/5">
                  <MapPin size={13} className="text-[#06B6D4]" />
                </div>
                <span>Remote-First Team</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass-light flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-200 hover:scale-105"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">{group.title}</h4>
              <ul className="space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-150 group"
                    >
                      {link.label}
                      <ArrowUpRight size={11} className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Let&apos;s Talk</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Have a project in mind? We&apos;d love to hear about it.
            </p>
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full py-3.5 px-5 rounded-2xl gradient-bg text-white text-sm font-bold hover:opacity-95 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-blue-500/15 cursor-pointer"
            >
              Start Your Project
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex items-center justify-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 NovaCode Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
