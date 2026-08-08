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
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: "360°",
      label: "Digital Solutions",
      desc: "End-to-end brand strategy & campaign execution",
      icon: Zap,
      color: "from-indigo-500 to-violet-500",
    },
    {
      value: "∞",
      label: "Creative Possibilities",
      desc: "Unbound visual concepts & storytelling formats",
      icon: ShieldCheck,
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      value: "1",
      label: "Growth Partner",
      desc: "Dedicated agency focused on your long-term success",
      icon: HeartHandshake,
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="approach" className="py-24 relative overflow-hidden bg-[#07080f]">
      {/* Background glow lines */}
      <div className="absolute inset-0 bg-digital-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            OUR PHILOSOPHY
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            More Than Marketing. <br />
            <span className="text-gradient-accent">We Build Digital Brands.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Creative Brand Agency helps businesses establish a strong digital presence through creative branding, strategic marketing and measurable growth.
          </p>
        </div>

        {/* 4 Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="group glass-panel-interactive p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top icon indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-10 text-white shadow-lg`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-500">0{idx + 1}</span>
                </div>

                {/* Stat value */}
                <div className="space-y-2">
                  <div className="font-heading text-5xl font-black tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-lg font-bold text-slate-200">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>

                {/* Bottom subtle bar accent */}
                <div className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${stat.color} opacity-40 group-hover:opacity-100 transition-opacity`} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
