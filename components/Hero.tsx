"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowDownRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const [headlineMode, setHeadlineMode] = useState<"editorial" | "growth">("editorial");

  return (
    <section className="relative min-h-[90vh] pt-36 pb-20 flex flex-col justify-center bg-editorial-grid border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Editorial Top Metadata Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-12 border-b border-white/10 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#4659B8]" />
            <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#8D929E]">
              CREATIVE BRAND AGENCY · RAJAHMUNDRY, ANDHRA PRADESH
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#8D929E] font-mono">
            <span>MODE:</span>
            <button
              onClick={() => setHeadlineMode("editorial")}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                headlineMode === "editorial"
                  ? "bg-[#4659B8] text-white"
                  : "bg-[#181B24] text-[#8D929E] hover:text-[#F4F2ED]"
              }`}
            >
              EDITORIAL
            </button>
            <button
              onClick={() => setHeadlineMode("growth")}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                headlineMode === "growth"
                  ? "bg-[#4659B8] text-white"
                  : "bg-[#181B24] text-[#8D929E] hover:text-[#F4F2ED]"
              }`}
            >
              GROWTH
            </button>
          </div>
        </div>

        {/* 12-Column Editorial Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left Column (7 cols): Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-[#F4F2ED] tracking-tight leading-[1.05]">
              {headlineMode === "editorial" ? (
                <>
                  We make brands <br />
                  <span className="text-[#6575C7]">matter.</span>
                </>
              ) : (
                <>
                  Your Business. <br />
                  <span className="text-[#8C8FD8]">Our Growth Engine.</span>
                </>
              )}
            </h1>

            <p className="text-lg sm:text-xl text-[#8D929E] max-w-xl font-normal leading-relaxed">
              Strategy, design and performance digital marketing for businesses ready to establish a dominant market presence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#4659B8] hover:bg-[#3b4ca0] text-[#F4F2ED] font-heading font-semibold text-sm uppercase tracking-wider rounded-md transition-all shadow-md group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#181B24] hover:bg-[#202430] text-[#D9D9D5] hover:text-[#F4F2ED] font-heading font-semibold text-sm uppercase tracking-wider rounded-md border border-white/10 transition-colors"
              >
                <span>View Our Work</span>
                <ArrowDownRight className="w-4 h-4 text-[#8D929E]" />
              </a>
            </div>

            {/* Credentials note */}
            <div className="flex items-center gap-6 pt-4 text-xs font-mono text-[#8D929E] border-t border-white/5">
              <span>BRANDING</span>
              <span>•</span>
              <span>WEBSITE DESIGN</span>
              <span>•</span>
              <span>PERFORMANCE ADS</span>
              <span>•</span>
              <span>SEO</span>
            </div>

          </div>

          {/* Right Column (5 cols): Editorial Visual Frame */}
          <div className="lg:col-span-5 w-full">
            <div className="editorial-card p-8 rounded-lg space-y-6 bg-[#181B24] border border-white/10 relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono text-[#8D929E]">
                <span>CBA CORE DISCIPLINES</span>
                <span>EST. RAJAHMUNDRY</span>
              </div>

              {/* Architectural discipline list */}
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between p-3 bg-[#111522] rounded border border-white/5">
                  <span className="text-[#8C8FD8]">01 / BRAND IDENTITY</span>
                  <span className="text-[#8D929E]">STRATEGY & ART</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#111522] rounded border border-white/5">
                  <span className="text-[#6575C7]">02 / DIGITAL PLATFORMS</span>
                  <span className="text-[#8D929E]">WEB & UI/UX</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#111522] rounded border border-white/5">
                  <span className="text-[#4659B8]">03 / MEDIA & CONTENT</span>
                  <span className="text-[#8D929E]">VIDEO & REELS</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#111522] rounded border border-white/5">
                  <span className="text-[#D9D9D5]">04 / PERFORMANCE ADS</span>
                  <span className="text-[#8D929E]">META & GOOGLE</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#8D929E] leading-relaxed">
                Empowering businesses across Andhra Pradesh and beyond with measurable digital execution.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

