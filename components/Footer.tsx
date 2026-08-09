"use client";

import React from "react";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const services = [
    "Branding",
    "Social Media",
    "Website Design",
    "Analytics",
    "Content Creation",
    "Paid Ads",
    "SEO",
    "Video Marketing",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0D1018] border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 bg-[#4659B8] rounded-md flex items-center justify-center font-heading font-bold text-white text-base tracking-tight shadow-sm">
                CBA
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base tracking-wider text-[#F4F2ED] uppercase">
                  Creative Brand Agency
                </span>
                <span className="text-[10px] tracking-widest text-[#8D929E] uppercase font-mono">
                  Rajahmundry, Andhra Pradesh
                </span>
              </div>
            </div>

            <p className="text-xs font-mono uppercase tracking-wider text-[#8C8FD8] bg-[#111522] p-3.5 rounded border border-white/5 max-w-md">
              GROW YOUR BUSINESS, BUILDING BRANDS IN THE DIGITAL WORLD.
            </p>

            <p className="text-xs text-[#8D929E] leading-relaxed max-w-sm">
              We transform local and global businesses into dominant digital brands through creative design, high-converting technology, and performance advertising.
            </p>
          </div>

          {/* Column 2: Services List (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading text-xs font-bold text-[#F4F2ED] uppercase tracking-wider">
              Core Disciplines
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#8D929E]">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="hover:text-[#4659B8] transition-colors flex items-center gap-1.5 py-1"
                >
                  <span className="text-[#6575C7]">›</span>
                  <span>{service}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-bold text-[#F4F2ED] uppercase tracking-wider">
              Contact Agency
            </h4>
            <div className="space-y-3 text-xs text-[#8D929E]">
              <a
                href="tel:9381237797"
                className="flex items-center gap-3 p-2.5 rounded bg-[#111522] border border-white/5 hover:border-[#4659B8] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#6575C7] shrink-0" />
                <span className="font-bold text-[#F4F2ED]">9381237797</span>
              </a>

              <a
                href="mailto:creativebrandagency666@gmail.com"
                className="flex items-center gap-3 p-2.5 rounded bg-[#111522] border border-white/5 hover:border-[#4659B8] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#6575C7] shrink-0" />
                <span className="truncate">creativebrandagency666@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 p-2.5 rounded bg-[#111522] border border-white/5">
                <MapPin className="w-4 h-4 text-[#6575C7] shrink-0" />
                <span>Rajahmundry, AP</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8D929E]">
          <div>
            © {new Date().getFullYear()} Creative Brand Agency (CBA). All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#8D929E] hover:text-white transition-colors bg-[#181B24] px-4 py-2 rounded border border-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

