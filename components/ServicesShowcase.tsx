"use client";

import React, { useRef } from "react";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
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
    },
    {
      step: "02",
      title: "SOCIAL PRESENCE",
      tagline: "Brand Affinity",
      desc: "Turn passive followers into brand evangelists across Instagram, Facebook & LinkedIn.",
      icon: Share2,
    },
    {
      step: "03",
      title: "HIGH-CONVERTING WEBSITE",
      tagline: "Digital HQ",
      desc: "Fast, sleek & responsive website architecture built to turn visitors into paying customers.",
      icon: Globe,
    },
    {
      step: "04",
      title: "CREATIVE CONTENT & REELS",
      tagline: "Engagement",
      desc: "High-impact graphics, copywriting & video reels engineered for maximum audience retention.",
      icon: Video,
    },
    {
      step: "05",
      title: "PAID CAMPAIGNS",
      tagline: "Customer Acquisition",
      desc: "Performance marketing on Meta & Google Ads targeting high-intent buyers with high ROI.",
      icon: Target,
    },
    {
      step: "06",
      title: "ORGANIC SEO",
      tagline: "Search Dominance",
      desc: "Rank on top of Google search results in Rajahmundry & beyond for targeted buyer search keywords.",
      icon: Search,
    },
    {
      step: "07",
      title: "ANALYTICS & FUNNELS",
      tagline: "Data Intelligence",
      desc: "Real-time performance tracking and funnel metrics to eliminate wasted ad spend.",
      icon: BarChart2,
    },
    {
      step: "08",
      title: "SCALABLE GROWTH",
      tagline: "Market Leadership",
      desc: "Continuous optimization and multi-channel scaling to compound brand dominance.",
      icon: TrendingUp,
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="showcase" className="py-24 relative bg-[#111522] border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-white/10">
          <div className="space-y-3">
            <div className="text-xs font-mono font-medium tracking-widest text-[#8C8FD8] uppercase">
              STRATEGIC PROGRESSION
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F2ED] tracking-tight">
              From First Impression <br />
              <span className="text-[#6575C7]">→ Digital Growth.</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#8D929E] font-mono hidden sm:inline">SWIPE / SCROLL</span>
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-md bg-[#181B24] border border-white/10 text-[#8D929E] hover:text-[#F4F2ED] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-md bg-[#181B24] border border-white/10 text-[#8D929E] hover:text-[#F4F2ED] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Track */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth"
        >
          {showcaseCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.step}
                className="shrink-0 w-[280px] sm:w-[320px] h-[340px] editorial-card p-6 rounded-lg bg-[#181B24] border border-white/10 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                    <span className="font-mono text-xs font-bold text-[#4659B8]">
                      STEP {card.step}
                    </span>
                    <span className="text-[11px] font-mono text-[#8D929E] uppercase">
                      {card.tagline}
                    </span>
                  </div>

                  <div className="p-3 bg-[#111522] rounded border border-white/5 text-[#6575C7] w-fit mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#F4F2ED] mb-2 group-hover:text-[#8C8FD8] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#8D929E] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="w-full pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#8D929E]">
                  <span>PHASE {idx + 1} OF 8</span>
                  <span>{((idx + 1) / showcaseCards.length * 100).toFixed(0)}%</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

