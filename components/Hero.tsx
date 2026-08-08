"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, Compass, CheckCircle2, ShieldCheck } from "lucide-react";
import ParticleEcosystem from "./ParticleEcosystem";

export default function Hero() {
  const [headlineMode, setHeadlineMode] = useState<"standard" | "aggressive">("standard");

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center bg-digital-grid">
      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-orb pointer-events-none opacity-60" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Location & Brand Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-indigo-500/30 text-xs font-semibold tracking-wider uppercase text-indigo-300 shadow-lg shadow-indigo-950/40">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>CREATIVE BRAND AGENCY</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">RAJAHMUNDRY</span>
            </div>

            {/* Headline Switcher Pill */}
            <div className="flex items-center gap-2 bg-slate-900/60 p-1 rounded-lg border border-white/5 text-xs text-slate-400">
              <span className="px-2 py-0.5 text-[11px] font-medium text-slate-400">Headline Style:</span>
              <button
                onClick={() => setHeadlineMode("standard")}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  headlineMode === "standard"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Creative
              </button>
              <button
                onClick={() => setHeadlineMode("aggressive")}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  headlineMode === "aggressive"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Growth Engine
              </button>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              {headlineMode === "standard" ? (
                <>
                  We Build Brands <br />
                  <span className="text-gradient-accent">That Get Noticed.</span>
                </>
              ) : (
                <>
                  Your Business. <br />
                  <span className="text-gradient-electric">Our Digital Growth Engine.</span>
                </>
              )}
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              We transform businesses into powerful digital brands through strategy, creativity, technology and performance marketing.
            </p>

            {/* Feature Bullets */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Strategy-Driven</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>High-Converting Websites</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-violet-400" />
                <span>ROI Performance Ads</span>
              </div>
            </div>

            {/* Hero Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all rounded-2xl overflow-hidden shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-[1.02]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"></span>
                <span className="relative flex items-center justify-center gap-2">
                  Start a Project
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-200 hover:text-white glass-panel hover:bg-white/10 rounded-2xl border border-white/10 transition-all hover:scale-[1.02] gap-2"
              >
                <Compass className="w-5 h-5 text-indigo-400" />
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Trust badge note */}
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Based in Rajahmundry • Serving Brands Nationwide</span>
            </div>

          </div>

          {/* Right Hero Ecosystem Canvas (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <ParticleEcosystem />
          </div>

        </div>
      </div>
    </section>
  );
}
