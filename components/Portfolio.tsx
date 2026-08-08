"use client";

import React, { useState } from "react";
import { ExternalLink, Sparkles, FolderPlus, ArrowUpRight, Eye, CheckCircle2 } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "Branding" | "Web Design" | "Social Media" | "Paid Ads";
  services: string[];
  deliverableSnippet: string;
  mockupBg: string;
  tag: string;
}

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [previewProject, setPreviewProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "project-1",
      title: "OmniGrowth Brand Architecture",
      category: "Branding",
      services: ["Brand Strategy", "Visual Identity", "Logo Design"],
      deliverableSnippet: "Complete visual identity re-architecture, brand guidelines, typography system & launch strategy.",
      mockupBg: "from-blue-900/60 via-indigo-900/40 to-slate-900/80",
      tag: "Case Framework 01",
    },
    {
      id: "project-2",
      title: "Apex Next.js Digital Platform",
      category: "Web Design",
      services: ["Website Design", "UI/UX", "Analytics"],
      deliverableSnippet: "High-performance agency website built for instant loading, mobile optimization, and conversion lead captures.",
      mockupBg: "from-violet-900/60 via-purple-900/40 to-slate-900/80",
      tag: "Case Framework 02",
    },
    {
      id: "project-3",
      title: "HyperScale Performance Meta Ads",
      category: "Paid Ads",
      services: ["Paid Ads", "Content Creation", "Analytics"],
      deliverableSnippet: "Targeted advertising campaign on Facebook & Instagram delivering 4.2x Return on Ad Spend (ROAS).",
      mockupBg: "from-cyan-900/60 via-blue-900/40 to-slate-900/80",
      tag: "Case Framework 03",
    },
    {
      id: "project-4",
      title: "Viral Engagement Social Campaign",
      category: "Social Media",
      services: ["Social Media", "Video Marketing", "Reels"],
      deliverableSnippet: "Short-form video reel campaign generating organic audience reach and community engagement.",
      mockupBg: "from-fuchsia-900/60 via-pink-900/40 to-slate-900/80",
      tag: "Case Framework 04",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-24 relative bg-[#070810]">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider text-indigo-400">
              FEATURED WORK
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Work That <span className="text-gradient-accent">Speaks.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-md">
            Selected digital marketing and branding case study frameworks. Ready to showcase your client projects!
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {["All", "Branding", "Web Design", "Social Media", "Paid Ads"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filter === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-950"
                  : "glass-panel text-slate-300 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setPreviewProject(project)}
              className="group glass-panel-interactive rounded-3xl overflow-hidden cursor-pointer border border-white/10 flex flex-col justify-between"
            >
              {/* Project Visual Container */}
              <div className={`h-64 sm:h-72 w-full bg-gradient-to-br ${project.mockupBg} relative p-6 flex flex-col justify-between overflow-hidden`}>
                
                {/* Digital Noise Grid background */}
                <div className="absolute inset-0 bg-digital-grid opacity-40 pointer-events-none" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-slate-200 border border-white/10">
                    {project.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-indigo-600 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Center Visual Mockup */}
                <div className="relative z-10 my-auto text-center space-y-2 py-4">
                  <div className="inline-block p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
                    <span className="font-heading font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-slate-400">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="relative z-10 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">{project.tag}</span>
                  <span className="flex items-center gap-1 text-indigo-300 font-medium">
                    <Eye className="w-3.5 h-3.5" /> Quick Preview
                  </span>
                </div>

              </div>

              {/* Card Footer Details */}
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {project.deliverableSnippet}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {project.services.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Notice Box */}
        <div className="mt-12 glass-panel p-8 rounded-3xl border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 shrink-0">
              <FolderPlus className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-white">Your Project Belongs Here</h4>
              <p className="text-xs text-slate-400">
                We're ready to showcase your brand's actual campaigns, branding guidelines, and website success stories!
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs shadow-lg hover:opacity-90 transition-opacity"
          >
            Submit Project Case Study
          </a>
        </div>

      </div>

      {/* Project Quick Preview Modal */}
      {previewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="glass-panel w-full max-w-lg p-8 rounded-3xl border border-white/20 shadow-2xl relative space-y-6">
            <button
              onClick={() => setPreviewProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">
              {previewProject.category} Case Study
            </span>

            <h3 className="font-heading text-2xl font-black text-white">{previewProject.title}</h3>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              {previewProject.deliverableSnippet}
            </p>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase">Disciplines Executed:</h4>
              <div className="flex flex-wrap gap-2">
                {previewProject.services.map((serv, i) => (
                  <span key={i} className="text-xs bg-indigo-950/80 border border-indigo-500/30 text-indigo-200 px-3 py-1 rounded-full">
                    {serv}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end">
              <button
                onClick={() => setPreviewProject(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
