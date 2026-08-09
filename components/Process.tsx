"use client";

import React from "react";
import { Compass, Lightbulb, Rocket, TrendingUp } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      name: "LISTEN",
      subtitle: "Auditing & Insights",
      desc: "We analyze your business goals, target audience in Rajahmundry or online, competitive gaps, and growth opportunities.",
      icon: Compass,
    },
    {
      num: "02",
      name: "THINK",
      subtitle: "Strategy & Architecture",
      desc: "We formulate your brand position, website user interface flow, ad messaging, and media channel budget allocation.",
      icon: Lightbulb,
    },
    {
      num: "03",
      name: "CREATE",
      subtitle: "Design & Production",
      desc: "We build your visual assets, high-converting Next.js website, ad copy, and high-impact short-form video reels.",
      icon: Rocket,
    },
    {
      num: "04",
      name: "GROW",
      subtitle: "Optimize & Scale",
      desc: "We launch multi-channel campaigns, analyze conversion analytics, refine ad spend, and scale brand revenue.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="process" className="py-24 relative bg-[#111522] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end pb-8 border-b border-white/10">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-xs font-mono font-medium tracking-widest text-[#8C8FD8] uppercase">
              AGENCY PROCESS
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F2ED] tracking-tight">
              How We Turn <span className="text-[#6575C7]">Ideas Into Impact.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs text-[#8D929E] leading-relaxed">
              A clear 4-stage execution model engineered to eliminate friction and accelerate your digital brand footprint.
            </p>
          </div>
        </div>

        {/* 4 Large Number Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.num}
                className="editorial-card p-6 rounded-lg bg-[#181B24] border border-white/10 flex flex-col justify-between h-[280px]"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                    <span className="font-mono text-sm font-bold text-[#4659B8]">
                      STEP {step.num}
                    </span>
                    <IconComp className="w-4 h-4 text-[#8C8FD8]" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-[#F4F2ED] mb-1">
                    {step.name}
                  </h3>
                  <div className="text-[11px] font-mono text-[#8C8FD8] uppercase mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-[#8D929E] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 font-mono text-[10px] text-[#8D929E] flex items-center justify-between">
                  <span>STAGE {idx + 1} / 4</span>
                  <span className="text-[#6575C7]">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

