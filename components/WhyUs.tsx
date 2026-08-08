"use client";

import React, { useState } from "react";
import { Search, Map, Lightbulb, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      subtitle: "Understand your business",
      desc: "We dive deep into your brand DNA, target market, competitors, current pain points, and growth targets. We map out what makes your offer uniquely valuable.",
      icon: Search,
      deliverable: "Market Audit & Brand Positioning Map",
      color: "from-blue-500 to-cyan-500",
    },
    {
      num: "02",
      title: "STRATEGIZE",
      subtitle: "Build your digital roadmap",
      desc: "We design a customized, multi-channel strategy integrating visual identity, high-converting funnel design, content themes, and advertising budgets.",
      icon: Map,
      deliverable: "Comprehensive 90-Day Digital Growth Roadmap",
      color: "from-indigo-500 to-blue-500",
    },
    {
      num: "03",
      title: "CREATE",
      subtitle: "Design your brand experience",
      desc: "Our creative team builds your visual assets, designs your website, writes persuasive ad copy, and crafts high-engagement video reels.",
      icon: Lightbulb,
      deliverable: "Complete Brand Asset Suite & Digital HQ",
      color: "from-violet-500 to-indigo-500",
    },
    {
      num: "04",
      title: "LAUNCH",
      subtitle: "Put your brand in front of people",
      desc: "We deploy your campaign across search, social media, paid advertising, and organic search channels with precision tracking.",
      icon: Rocket,
      deliverable: "Multi-Channel Campaign Activation",
      color: "from-fuchsia-500 to-purple-500",
    },
    {
      num: "05",
      title: "GROW",
      subtitle: "Measure. Optimize. Scale.",
      desc: "We continuously analyze conversion analytics, optimize ad spend, refine creative assets, and scale your brand revenue.",
      icon: TrendingUp,
      deliverable: "Weekly Performance Reports & Continuous Scaling",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-24 relative bg-[#070810] overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-digital-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold uppercase tracking-wider text-violet-400">
            WHY CREATIVE BRAND AGENCY?
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Creativity Meets <span className="text-gradient-accent">Strategy.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We don't rely on guesswork. Our systematic 5-step methodology turns your business vision into a predictable digital growth engine.
          </p>
        </div>

        {/* Timeline / Step Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Steps List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              const isActive = activeStep === index;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(index)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center justify-between ${
                    isActive
                      ? "bg-slate-900/90 border-indigo-500/60 shadow-xl shadow-indigo-950/40 translate-x-2"
                      : "glass-panel border-white/5 opacity-70 hover:opacity-100 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black font-mono transition-colors ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {step.num}
                    </div>
                    <div>
                      <h3 className={`font-heading text-base font-extrabold tracking-wider ${isActive ? "text-white" : "text-slate-300"}`}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400">{step.subtitle}</p>
                    </div>
                  </div>
                  <IconComp className={`w-5 h-5 ${isActive ? "text-indigo-400" : "text-slate-500"}`} />
                </div>
              );
            })}
          </div>

          {/* Active Step Showcase Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-indigo-500/30 relative overflow-hidden shadow-2xl min-h-[380px] flex flex-col justify-between">
              
              {/* Background gradient orb */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${steps[activeStep].color} opacity-10 rounded-full blur-3xl pointer-events-none`} />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-indigo-300">
                    PHASE {steps[activeStep].num} OF 05
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Methodology</span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  {React.createElement(steps[activeStep].icon, {
                    className: "w-8 h-8 text-blue-400",
                  })}
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400">
                      {steps[activeStep].subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {steps[activeStep].desc}
                </p>
              </div>

              {/* Key Deliverable Box */}
              <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Output:</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {steps[activeStep].deliverable}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
