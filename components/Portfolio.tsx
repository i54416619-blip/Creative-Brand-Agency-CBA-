"use client";

import React, { useState } from "react";
import { FolderPlus, ArrowUpRight, Eye } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "Branding" | "Web Design" | "Social Media" | "Paid Ads";
  services: string[];
  deliverableSnippet: string;
  layoutVariant: "large-left" | "dual-equal" | "full-width";
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
      layoutVariant: "large-left",
      tag: "Case Study 01",
    },
    {
      id: "project-2",
      title: "Apex Next.js Digital Platform",
      category: "Web Design",
      services: ["Website Design", "UI/UX", "Analytics"],
      deliverableSnippet: "High-performance agency website built for instant loading, mobile optimization, and conversion lead captures.",
      layoutVariant: "dual-equal",
      tag: "Case Study 02",
    },
    {
      id: "project-3",
      title: "HyperScale Performance Meta Ads",
      category: "Paid Ads",
      services: ["Paid Ads", "Content Creation", "Analytics"],
      deliverableSnippet: "Targeted advertising campaign on Facebook & Instagram delivering 4.2x Return on Ad Spend (ROAS).",
      layoutVariant: "dual-equal",
      tag: "Case Study 03",
    },
    {
      id: "project-4",
      title: "Viral Engagement Social Campaign",
      category: "Social Media",
      services: ["Social Media", "Video Marketing", "Reels"],
      deliverableSnippet: "Short-form video reel campaign generating organic audience reach and community engagement.",
      layoutVariant: "full-width",
      tag: "Case Study 04",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-24 relative bg-[#0D1018] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-white/10">
          <div className="space-y-3">
            <div className="text-xs font-mono font-medium tracking-widest text-[#8C8FD8] uppercase">
              SELECTED CLIENT WORK
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F2ED] tracking-tight">
              Work That <span className="text-[#6575C7]">Speaks.</span>
            </h2>
          </div>
          <p className="text-xs text-[#8D929E] max-w-md leading-relaxed">
            Curated digital marketing and brand architecture case study frameworks.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 font-mono text-xs">
          {["All", "Branding", "Web Design", "Social Media", "Paid Ads"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded text-xs transition-colors ${
                filter === cat
                  ? "bg-[#4659B8] text-white font-semibold"
                  : "bg-[#181B24] text-[#8D929E] hover:text-[#F4F2ED] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Varied Portfolio Layout List */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setPreviewProject(project)}
              className="editorial-card p-8 rounded-lg bg-[#181B24] border border-white/10 cursor-pointer group hover:border-[#4659B8] transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Visual Area (7 cols or 12 cols depending on variant) */}
                <div className={`${project.layoutVariant === "full-width" ? "lg:col-span-12" : "lg:col-span-7"} bg-[#111522] p-8 rounded border border-white/5 space-y-6 relative overflow-hidden min-h-[220px] flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.02]`}>
                  <div className="flex items-center justify-between font-mono text-xs text-[#8D929E]">
                    <span>{project.tag}</span>
                    <span className="text-[#8C8FD8] uppercase font-bold">{project.category}</span>
                  </div>

                  <div className="my-auto">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F4F2ED] group-hover:text-[#6575C7] transition-all duration-300 transform group-hover:-translate-y-1">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#8D929E]">
                    <span>CBA CASE FRAMEWORK</span>
                    <span className="flex items-center gap-1 text-[#8C8FD8] transition-transform duration-300 group-hover:translate-x-1">
                      <Eye className="w-3.5 h-3.5" /> Preview Details
                    </span>
                  </div>
                </div>


                {/* Right Text Description Block (5 cols) */}
                {project.layoutVariant !== "full-width" && (
                  <div className="lg:col-span-5 space-y-4">
                    <p className="text-xs text-[#D9D9D5] leading-relaxed">
                      {project.deliverableSnippet}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <div className="text-[10px] font-mono text-[#8D929E] uppercase">Disciplines Executed:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((s, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono text-[#8C8FD8] bg-[#111522] px-2.5 py-1 rounded border border-white/5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#4659B8] group-hover:text-[#F4F2ED]">
                      <span>View Full Overview</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* Client Notice Banner */}
        <div className="mt-16 editorial-card p-8 rounded-lg bg-[#181B24] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#111522] text-[#6575C7] rounded border border-white/5 shrink-0">
              <FolderPlus className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-base font-bold text-[#F4F2ED]">Client Case Studies Ready to Feature</h4>
              <p className="text-xs text-[#8D929E]">
                We are ready to populate this portfolio section with your agency's actual client work samples and visual assets!
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded bg-[#4659B8] hover:bg-[#3b4ca0] text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-colors"
          >
            Add Case Study
          </a>
        </div>

      </div>

      {/* Project Preview Modal */}
      {previewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="editorial-card w-full max-w-lg p-8 rounded-lg bg-[#181B24] border border-white/20 shadow-2xl relative space-y-6">
            <button
              onClick={() => setPreviewProject(null)}
              className="absolute top-6 right-6 p-2 rounded-md bg-[#111522] text-[#8D929E] hover:text-white border border-white/10"
            >
              ✕
            </button>

            <span className="text-xs font-mono font-bold text-[#8C8FD8] uppercase">
              {previewProject.category} Case Study
            </span>

            <h3 className="font-heading text-2xl font-bold text-[#F4F2ED]">{previewProject.title}</h3>
            
            <p className="text-xs text-[#D9D9D5] leading-relaxed">
              {previewProject.deliverableSnippet}
            </p>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <h4 className="text-xs font-bold text-[#8D929E] uppercase font-mono">Services Included:</h4>
              <div className="flex flex-wrap gap-2">
                {previewProject.services.map((serv, i) => (
                  <span key={i} className="text-xs bg-[#111522] border border-white/10 text-[#8C8FD8] px-3 py-1 rounded">
                    {serv}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setPreviewProject(null)}
                className="px-6 py-2.5 rounded bg-[#111522] text-[#F4F2ED] text-xs font-semibold border border-white/10 hover:bg-[#202430]"
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

