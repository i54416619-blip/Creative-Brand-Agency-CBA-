"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";

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
    { name: "Work", href: "#work" },
    { name: "About", href: "#approach" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111522]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-xl"
          : "bg-transparent py-6 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo matching client card identity */}
          <a href="#" className="group flex items-center gap-3.5">
            <div className="w-9 h-9 bg-[#4659B8] rounded-md flex items-center justify-center font-heading font-bold text-white text-base tracking-tight shadow-sm">
              CBA
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-wider text-[#F4F2ED] uppercase">
                Creative Brand Agency
              </span>
              <span className="text-[10px] tracking-widest text-[#8D929E] uppercase font-sans">
                Rajahmundry
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium uppercase tracking-widest text-[#D9D9D5] hover:text-[#4659B8] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:9381237797"
              className="flex items-center gap-2 text-xs font-medium text-[#8D929E] hover:text-[#F4F2ED] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#6575C7]" />
              <span>9381237797</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4659B8] hover:bg-[#3b4ca0] text-[#F4F2ED] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md bg-[#181B24] border border-white/10 text-[#F4F2ED]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#181B24] border-b border-white/10 px-6 py-6 mt-2 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-[#F4F2ED] hover:text-[#4659B8] py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="tel:9381237797"
              className="flex items-center gap-2 text-xs text-[#8D929E] bg-[#111522] p-3 rounded-md border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#6575C7]" />
              <span>Call: 9381237797</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#4659B8] rounded-md shadow-sm"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

