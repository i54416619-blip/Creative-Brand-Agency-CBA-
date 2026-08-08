"use client";

import React from "react";
import { Phone, Mail, MapPin, ArrowUp, Heart } from "lucide-react";

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
    <footer className="bg-[#030407] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-[1px]">
                <div className="w-full h-full bg-[#0b0d17] rounded-[11px] flex items-center justify-center">
                  <span className="font-heading font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                    CBA
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg tracking-wider text-white">
                  CREATIVE <span className="text-blue-400">BRAND</span> AGENCY
                </span>
                <span className="text-xs tracking-widest text-slate-400 font-medium uppercase">
                  Digital Marketing Solutions
                </span>
              </div>
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-950/60 p-3 rounded-xl border border-indigo-500/20 max-w-md">
              GROW YOUR BUSINESS, BUILDING BRANDS IN THE DIGITAL WORLD.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We transform local and global businesses into dominant digital brands through creative design, high-converting technology, and data-driven performance advertising.
            </p>
          </div>

          {/* Column 2: Services List (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Core Services
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5 py-1"
                >
                  <span className="text-indigo-500 font-bold">›</span>
                  <span>{service}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Contact Agency
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <a
                href="tel:9381237797"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-blue-500/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-bold text-white">9381237797</span>
              </a>

              <a
                href="mailto:creativebrandagency666@gmail.com"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-violet-500/40 transition-colors"
              >
                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                <span className="truncate">creativebrandagency666@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Rajahmundry, AP</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Creative Brand Agency (CBA). All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors bg-slate-900/80 px-4 py-2 rounded-full border border-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
