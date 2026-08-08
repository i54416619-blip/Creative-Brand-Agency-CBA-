"use client";

import React, { useRef } from "react";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  Globe,
  Share2,
  TrendingUp,
  Search,
  BarChart2,
  Video,
  Target
} from "lucide-react";

export default function ServicesShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const showcaseCards = [
    {
      step: "01",
      title: "BRAND IDENTITY",
      tagline: "First Impression",
      desc: "Distinctive visual identity, logos, typography & positioning that command market respect.",
      icon: Sparkles,
      color: "from-blue-600 to-indigo-600",
    },
    {
      step: "02",
      title: "SOCIAL PRESENCE",
      tagline: "Brand Affinity",
      desc: "Turn passive followers into brand evangelists across Instagram, Facebook & LinkedIn.",
      icon: Share2,
      color: "from-indigo-600 to-violet-600",
    },
    {
      step: "03",
      title: "HIGH-CONVERTING WEBSITE",
      tagline: "Digital HQ",
      desc: "Fast, sleek & responsive website architecture built to turn visitors into paying customers.",
      icon: Globe,
      color: "from-violet-600 to-purple-600",
    },
    {
      step: "04",
      title: "CREATIVE CONTENT & REELS",
      tagline: "Engagement",
      desc: "High-impact graphics, copywriting & video reels engineered for maximum audience retention.",
      icon: Video,
      color: "from-purple-600 to-fuchsia-600",
    },
    {
      step: "05",
      title: "PAID CAMPAIGNS",
      tagline: "Customer Acquisition",
      desc: "Performance marketing on Meta & Google Ads targeting high-intent buyers with high ROI.",
      icon: Target,
      color: "from-pink-600 to-rose-600",
    },
    {
      step: "06",
      title: "ORGANIC SEO",
      tagline: "Search Dominance",
      desc: "Rank on top of Google search results in Rajahmundry & beyond for targeted buyer search keywords.",
      icon: Search,
      color: "from-amber-600 to-orange-600",
    },
    {
      step: "07",
      title: "ANALYTICS & FUNNELS",
      tagline: "Data Intelligence",
      desc: "Real-time performance tracking and funnel metrics to eliminate wasted ad spend.",
      icon: BarChart2,
      color: "from-cyan-600 to-blue-600",
    },
    {
      step: "08",
      title: "SCALABLE GROWTH",
      tagline: "Market Leadership",
      desc: "Continuous optimization and multi-channel scaling to compound brand dominance.",
      icon: TrendingUp,
      color: "from-emerald-600 to-teal-600",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="showcase" className="py-24 relative bg-[#06070b] overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-radial-gradient pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              IMMERSIVE SHOWCASE
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              From First Impression <br />
              <span className="text-gradient-electric">→ Digital Growth.</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">Scroll horizontally</span>
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-2xl glass-panel text-slate-300 hover:text-white hover:border-indigo-500/50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-2xl glass-panel text-slate-300 hover:text-white hover:border-indigo-500/50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth"
        >
          {showcaseCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.step}
                className="shrink-0 w-[300px] sm:w-[340px] h-[380px] glass-panel-interactive p-8 rounded-3xl relative flex flex-col justify-between group"
              >
                {/* Connecting arrow indicator */}
                {idx < showcaseCards.length - 1 && (
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border border-white/20 text-slate-400 text-xs shadow-lg">
                    →
                  </div>
                )}

                {/* Card Top: Number & Tagline */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-black text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      STEP {card.step}
                    </span>
                    <span className="text-xs font-semibold text-indigo-400">
                      {card.tagline}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} p-3.5 text-white mb-6 shadow-xl group-hover:scale-105 transition-transform`}>
                    <IconComp className="w-full h-full" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-xl font-extrabold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Card Bottom Progress Bar */}
                <div className="w-full pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mb-2">
                    <span>PROGRESSION</span>
                    <span>{((idx + 1) / showcaseCards.length * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${card.color}`}
                      style={{ width: `${((idx + 1) / showcaseCards.length * 100)}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
