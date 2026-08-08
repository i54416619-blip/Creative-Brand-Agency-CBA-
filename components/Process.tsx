"use client";

import React from "react";
import { Compass, Sparkles, Rocket, TrendingUp } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      name: "Discover",
      subtitle: "Auditing & Insights",
      desc: "We analyze your business goals, target audience in Rajahmundry or online, competitive gaps, and growth opportunities.",
      icon: Compass,
      color: "from-blue-500 to-cyan-500",
    },
    {
      num: "02",
      name: "Design",
      subtitle: "Creative & Engineering",
      desc: "We craft your brand identity, website user interface, ad copy, and high-impact visual media assets.",
      icon: Sparkles,
      color: "from-indigo-500 to-violet-500",
    },
    {
      num: "03",
      name: "Deploy",
      subtitle: "Multi-Channel Launch",
      desc: "We launch your high-converting website, Meta ads, SEO indexing, and social campaigns into the market.",
      icon: Rocket,
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      num: "04",
      name: "Grow",
      subtitle: "Optimize & Scale",
      desc: "We analyze real campaign data, double down on high-performing creative channels, and compound brand revenue.",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="process" className="py-24 relative bg-[#06070b] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-orb pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-400">
            AGENCY PROCESS
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            How We Turn <span className="text-gradient-electric">Ideas Into Impact.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A clear 4-stage execution model engineered to eliminate friction and accelerate your digital brand footprint.
          </p>
        </div>

        {/* 4 Large Number Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.num}
                className="group glass-panel-interactive p-8 rounded-3xl relative flex flex-col justify-between overflow-hidden border border-white/10 hover:border-indigo-500/40"
              >
                {/* Large Background Animated Number */}
                <div className="absolute -right-4 -top-6 font-mono text-8xl font-black text-white/[0.03] group-hover:text-indigo-500/10 transition-colors pointer-events-none select-none">
                  {step.num}
                </div>

                <div>
                  {/* Top Badge & Step Number */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-indigo-300">
                      PHASE {step.num}
                    </span>
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-2xl font-black text-white mb-1 group-hover:text-indigo-200 transition-colors">
                    {step.name}
                  </h3>
                  <div className="text-xs font-semibold text-indigo-400 mb-4 uppercase tracking-wider">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Step Connection Line */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    STEP {idx + 1} OF 4
                  </span>
                  <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${step.color}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
