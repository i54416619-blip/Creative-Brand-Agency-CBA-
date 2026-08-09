"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowDownRight, Sparkles, Shield, Compass } from "lucide-react";

export default function Hero() {
  const [headlineMode, setHeadlineMode] = useState<"EDITORIAL" | "GROWTH">("EDITORIAL");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 bg-[#111522] border-b border-white/10 overflow-hidden">
      
      {/* Background Editorial Grid */}
      <div className="absolute inset-0 bg-editorial-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Editorial Metadata & Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10 text-xs font-mono text-[#8D929E]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#4659B8] animate-pulse" />
            <span className="uppercase tracking-widest text-[#D9D9D5]">
              CREATIVE BRAND AGENCY · RAJAHMUNDRY, ANDHRA PRADESH
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#8D929E] uppercase tracking-wider">MODE:</span>
            <button
              onClick={() => setHeadlineMode("EDITORIAL")}
              className={`px-3 py-1 rounded text-[11px] font-semibold transition-all ${
                headlineMode === "EDITORIAL"
                  ? "bg-[#4659B8] text-white"
                  : "bg-[#181B24] text-[#8D929E] hover:text-[#F4F2ED]"
              }`}
            >
              EDITORIAL
            </button>
            <button
              onClick={() => setHeadlineMode("GROWTH")}
              className={`px-3 py-1 rounded text-[11px] font-semibold transition-all ${
                headlineMode === "GROWTH"
                  ? "bg-[#4659B8] text-white"
                  : "bg-[#181B24] text-[#8D929E] hover:text-[#F4F2ED]"
              }`}
            >
              GROWTH
            </button>
          </div>
        </div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Line-by-Line Headline & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {headlineMode === "EDITORIAL" ? (
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F4F2ED] leading-[1.05]">
                <span className={`block transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  We make
                </span>
                <span className={`block text-[#6575C7] transition-all duration-700 delay-250 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  brands
                </span>
                <span className={`block transition-all duration-700 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  matter.
                </span>
              </h1>
            ) : (
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F4F2ED] leading-[1.05]">
                <span className={`block transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  Your Business.
                </span>
                <span className={`block text-[#6575C7] transition-all duration-700 delay-250 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  Our Growth
                </span>
                <span className={`block transition-all duration-700 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                  Engine.
                </span>
              </h1>
            )}

            <p className={`text-base sm:text-lg text-[#D9D9D5] max-w-xl font-normal leading-relaxed transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Strategy, design and performance digital marketing for businesses ready to establish a dominant market presence.
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#4659B8] hover:bg-[#3b4ca0] text-[#F4F2ED] font-heading font-semibold text-xs uppercase tracking-wider rounded-md transition-all btn-human-lift shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 arrow-shift" />
              </a>

              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#181B24] hover:bg-[#202430] text-[#D9D9D5] hover:text-[#F4F2ED] border border-white/10 font-heading font-semibold text-xs uppercase tracking-wider rounded-md transition-all btn-human-lift"
              >
                <span>View Our Work</span>
                <ArrowDownRight className="w-4 h-4 text-[#8C8FD8] arrow-shift" />
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-[#8D929E]">
              <span>BRANDING</span>
              <span>•</span>
              <span>WEBSITE DESIGN</span>
              <span>•</span>
              <span>PERFORMANCE ADS</span>
              <span>•</span>
              <span>SEO</span>
            </div>

          </div>

          {/* Right Column: Architectural Discipline Index Card with Smooth Mask Reveal (5 cols) */}
          <div className="lg:col-span-5">
            <div className={`editorial-card p-6 sm:p-8 rounded-lg bg-[#181B24] border border-white/10 space-y-6 relative overflow-hidden transition-all duration-1000 delay-300 ${loaded ? "mask-reveal revealed" : "mask-reveal"}`}>
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-xs font-bold text-[#8C8FD8] tracking-widest uppercase">
                  CBA CORE DISCIPLINES
                </span>
                <span className="font-mono text-[10px] text-[#8D929E]">
                  EST. RAJAHMUNDRY
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded bg-[#111522] border border-white/5 flex items-center justify-between group hover:border-[#4659B8] transition-colors">
                  <div>
                    <div className="font-mono text-xs font-bold text-[#4659B8]">01 / BRAND IDENTITY</div>
                    <div className="text-xs text-[#D9D9D5] mt-0.5">Strategy, Logos & Positioning</div>
                  </div>
                  <span className="font-mono text-[10px] text-[#8D929E]">STRATEGY & ART</span>
                </div>

                <div className="p-4 rounded bg-[#111522] border border-white/5 flex items-center justify-between group hover:border-[#4659B8] transition-colors">
                  <div>
                    <div className="font-mono text-xs font-bold text-[#4659B8]">02 / DIGITAL PLATFORMS</div>
                    <div className="text-xs text-[#D9D9D5] mt-0.5">High-Converting Next.js Websites</div>
                  </div>
                  <span className="font-mono text-[10px] text-[#8D929E]">WEB & UI/UX</span>
                </div>

                <div className="p-4 rounded bg-[#111522] border border-white/5 flex items-center justify-between group hover:border-[#4659B8] transition-colors">
                  <div>
                    <div className="font-mono text-xs font-bold text-[#4659B8]">03 / MEDIA & CONTENT</div>
                    <div className="text-xs text-[#D9D9D5] mt-0.5">Reels, Video & Copywriting</div>
                  </div>
                  <span className="font-mono text-[10px] text-[#8D929E]">VIDEO & REELS</span>
                </div>

                <div className="p-4 rounded bg-[#111522] border border-white/5 flex items-center justify-between group hover:border-[#4659B8] transition-colors">
                  <div>
                    <div className="font-mono text-xs font-bold text-[#4659B8]">04 / PERFORMANCE ADS</div>
                    <div className="text-xs text-[#D9D9D5] mt-0.5">Meta & Google Ads Campaign Scaling</div>
                  </div>
                  <span className="font-mono text-[10px] text-[#8D929E]">META & GOOGLE</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-[#8D929E] leading-relaxed">
                Empowering businesses across Andhra Pradesh and beyond with measurable digital execution.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
