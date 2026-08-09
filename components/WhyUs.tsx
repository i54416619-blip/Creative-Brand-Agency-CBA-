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
    },
    {
      num: "02",
      title: "STRATEGIZE",
      subtitle: "Build your digital roadmap",
      desc: "We design a customized, multi-channel strategy integrating visual identity, high-converting funnel design, content themes, and advertising budgets.",
      icon: Map,
      deliverable: "Comprehensive 90-Day Digital Growth Roadmap",
    },
    {
      num: "03",
      title: "CREATE",
      subtitle: "Design your brand experience",
      desc: "Our creative team builds your visual assets, designs your website, writes persuasive ad copy, and crafts high-engagement video reels.",
      icon: Lightbulb,
      deliverable: "Complete Brand Asset Suite & Digital HQ",
    },
    {
      num: "04",
      title: "LAUNCH",
      subtitle: "Put your brand in front of people",
      desc: "We deploy your campaign across search, social media, paid advertising, and organic search channels with precision tracking.",
      icon: Rocket,
      deliverable: "Multi-Channel Campaign Activation",
    },
    {
      num: "05",
      title: "GROW",
      subtitle: "Measure. Optimize. Scale.",
      desc: "We continuously analyze conversion analytics, optimize ad spend, refine creative assets, and scale your brand revenue.",
      icon: TrendingUp,
      deliverable: "Weekly Performance Reports & Continuous Scaling",
    },
  ];

  return (
    <section className="py-24 relative bg-[#0D1018] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end pb-8 border-b border-white/10">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-xs font-mono font-medium tracking-widest text-[#8C8FD8] uppercase">
              OUR METHODOLOGY
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F2ED] tracking-tight">
              Creativity Meets <span className="text-[#6575C7]">Strategy.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-[#8D929E] leading-relaxed">
              We don't rely on guesswork. Our systematic 5-step methodology turns your business vision into a predictable digital growth engine.
            </p>
          </div>
        </div>

        {/* 5-Step Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Steps Navigation List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              const isActive = activeStep === index;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(index)}
                  className={`p-4 rounded-md cursor-pointer transition-all border flex items-center justify-between ${
                    isActive
                      ? "bg-[#181B24] border-[#4659B8] shadow-sm"
                      : "bg-[#111522] border-white/5 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`font-mono text-xs font-bold ${isActive ? "text-[#4659B8]" : "text-[#8D929E]"}`}>
                      {step.num}
                    </span>
                    <div>
                      <h3 className={`font-heading text-sm font-bold tracking-wider ${isActive ? "text-[#F4F2ED]" : "text-[#D9D9D5]"}`}>
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-[#8D929E]">{step.subtitle}</p>
                    </div>
                  </div>
                  <IconComp className={`w-4 h-4 ${isActive ? "text-[#6575C7]" : "text-[#8D929E]"}`} />
                </div>
              );
            })}
          </div>

          {/* Active Step Showcase Panel (7 cols) */}
          <div className="lg:col-span-7">
            <div className="editorial-card p-8 sm:p-10 rounded-lg bg-[#181B24] border border-white/10 space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono text-[#8C8FD8]">
                <span>PHASE {steps[activeStep].num} OF 05</span>
                <span>METHODOLOGY</span>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F4F2ED]">
                  {steps[activeStep].title}
                </h3>
                <p className="text-xs font-semibold text-[#6575C7]">
                  {steps[activeStep].subtitle}
                </p>
                <p className="text-xs text-[#D9D9D5] leading-relaxed pt-2">
                  {steps[activeStep].desc}
                </p>
              </div>

              {/* Key Output Banner */}
              <div className="bg-[#111522] p-4 rounded border border-white/5 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#6575C7] shrink-0" />
                <div>
                  <div className="text-[10px] font-mono text-[#8D929E] uppercase">KEY OUTPUT:</div>
                  <div className="text-xs font-bold text-[#F4F2ED]">
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

