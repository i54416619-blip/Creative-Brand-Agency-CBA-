"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Showcase", href: "#showcase" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06070b]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-indigo-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo matching card identity */}
          <a href="#" className="group flex items-center gap-3">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-[1px]">
              <div className="w-full h-full bg-[#0b0d17] rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
                <span className="font-heading font-black text-xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 group-hover:text-white transition-colors">
                  CBA
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-wider text-white flex items-center gap-1.5">
                CREATIVE <span className="text-blue-400">BRAND</span> AGENCY
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-medium uppercase -mt-0.5">
                Digital Marketing Solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 glass-panel px-6 py-2 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9381237797"
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>9381237797</span>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-all rounded-full overflow-hidden shadow-lg shadow-indigo-600/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 group-hover:opacity-90 transition-opacity"></span>
              <span className="relative flex items-center gap-1.5">
                Start a Project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel mt-3 mx-4 p-6 rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-blue-400 py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="tel:9381237797"
              className="flex items-center gap-3 text-sm text-slate-300 bg-slate-900/50 p-3 rounded-xl border border-white/5"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call: 9381237797</span>
            </a>
            <a
              href="https://wa.me/919381237797?text=Hi%20Creative%20Brand%20Agency,%20I'd%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 py-3 rounded-xl transition-colors shadow-lg shadow-emerald-950/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl shadow-lg"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
