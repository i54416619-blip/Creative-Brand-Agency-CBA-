"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#trust" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <style jsx global>{`
        .link-underline {
          position: relative;
        }
        .link-underline::after {
          content: "";
          position: absolute;
          width: 0;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: #F4F2ED;
          transition: width 0.3s ease-in-out;
        }
        .link-underline:hover::after {
          width: 100%;
        }
        .btn-human-lift:hover {
          transform: translateY(-2px);
        }
        .arrow-shift {
          transition: transform 0.3s ease;
        }
        .group:hover .arrow-shift {
          transform: translate(2px, -2px);
        }
      `}</style>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#111522]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Brand Block */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-[#4659B8] rounded flex items-center justify-center font-heading font-bold text-white text-xs tracking-tight shadow-sm transition-transform duration-300 group-hover:scale-105">
                CBA
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xs sm:text-sm tracking-wider text-[#F4F2ED] uppercase group-hover:text-white transition-colors">
                  Creative Brand Agency
                </span>
                <span className="text-[9px] tracking-widest text-[#8D929E] uppercase font-mono">
                  Rajahmundry
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-mono font-medium text-[#8D929E] hover:text-[#F4F2ED] transition-colors uppercase tracking-wider link-underline py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Action Block */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="tel:9381237797"
                className="flex items-center gap-2 text-xs font-mono text-[#8D929E] hover:text-[#F4F2ED] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#6575C7]" />
                <span>9381237797</span>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded bg-[#4659B8] hover:bg-[#3b4ca0] text-[#F4F2ED] font-heading font-semibold text-xs uppercase tracking-wider transition-all btn-human-lift shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 arrow-shift" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded bg-[#181B24] border border-white/10 text-[#F4F2ED]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#181B24] border-b border-white/10 px-4 py-6 space-y-3 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-mono text-[#F4F2ED] py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:9381237797"
              className="flex items-center justify-center gap-2 text-xs text-[#8D929E] bg-[#111522] p-3 rounded border border-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-[#6575C7]" />
              <span>Call: 9381237797</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#4659B8] rounded shadow-sm"
            >
              Start a Project
            </a>
          </div>
        )}
      </header>
    </>
  );
}
