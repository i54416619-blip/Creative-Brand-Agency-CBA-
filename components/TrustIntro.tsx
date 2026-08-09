"use client";

import React from "react";
import { Layers, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export default function TrustIntro() {
  const stats = [
    {
      value: "8+",
      label: "Services",
      desc: "Full-spectrum digital marketing solutions under one roof",
      icon: Layers,
    },
    {
      value: "360°",
      label: "Digital Solutions",
      desc: "End-to-end brand strategy & campaign execution",
      icon: Zap,
    },
    {
      value: "∞",
      label: "Creative Possibilities",
      desc: "Unbound visual concepts & storytelling formats",
      icon: ShieldCheck,
    },
    {
      value: "1",
      label: "Growth Partner",
      desc: "Dedicated agency focused on your long-term success",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="approach" className="py-24 relative bg-[#0D1018] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end pb-8 border-b border-white/10">
          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs font-mono font-medium tracking-widest text-[#8C8FD8] uppercase">
              OUR PHILOSOPHY
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F2ED] tracking-tight">
              More Than Marketing. <br />
              <span className="text-[#6575C7]">We Build Digital Brands.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#8D929E] font-normal leading-relaxed">
              Creative Brand Agency helps businesses establish a strong digital presence through creative branding, strategic marketing and measurable growth.
            </p>
          </div>
        </div>

        {/* 4 Stat Cards Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="editorial-card p-8 rounded-md bg-[#181B24] border border-white/10 flex flex-col justify-between h-[240px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8D929E]">0{idx + 1}</span>
                  <IconComponent className="w-5 h-5 text-[#6575C7]" />
                </div>

                <div className="space-y-1">
                  <div className="font-heading text-4xl font-bold tracking-tight text-[#F4F2ED]">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-[#D9D9D5]">
                    {stat.label}
                  </div>
                </div>

                <p className="text-xs text-[#8D929E] leading-relaxed border-t border-white/5 pt-3">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

