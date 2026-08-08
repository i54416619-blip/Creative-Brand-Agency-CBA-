"use client";

import React, { useState } from "react";
import {
  Palette,
  Share2,
  Layout,
  BarChart3,
  PenTool,
  Megaphone,
  Search,
  Video,
  ArrowRight,
  CheckCircle,
  X
} from "lucide-react";

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ElementType;
  deliverables: string[];
  gradient: string;
  badge: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "branding",
    num: "01",
    title: "BRANDING",
    shortDesc: "Build a memorable identity that separates your business from the competition.",
    fullDesc: "We craft distinctive brand identities that resonate deeply with your target market. From logo architecture to color theory, typography systems, and comprehensive brand guidelines.",
    icon: Palette,
    deliverables: [
      "Logo Design & Visual Identity",
      "Brand Guidelines & Stylebooks",
      "Brand Positioning & Voice",
      "Packaging & Stationery Design",
      "Rebranding Strategy"
    ],
    gradient: "from-blue-600 to-indigo-600",
    badge: "Core Identity",
  },
  {
    id: "social-media",
    num: "02",
    title: "SOCIAL MEDIA",
    shortDesc: "Turn your social platforms into powerful brand-building channels.",
    fullDesc: "Engage your community and turn passive scrollers into passionate brand advocates. We handle strategy, visual design, copywriting, schedule automation, and audience interaction.",
    icon: Share2,
    deliverables: [
      "Social Strategy & Calendar",
      "Instagram & Facebook Management",
      "LinkedIn Brand Building",
      "Community Engagement",
      "Performance Reporting"
    ],
    gradient: "from-indigo-600 to-violet-600",
    badge: "Community",
  },
  {
    id: "website-design",
    num: "03",
    title: "WEBSITE DESIGN",
    shortDesc: "High-performance websites designed to convert visitors into customers.",
    fullDesc: "Custom-built, ultra-fast websites and landing pages optimized for maximum user experience and seamless conversions. Fully responsive, secure, and modern.",
    icon: Layout,
    deliverables: [
      "UI/UX Design Systems",
      "Custom Next.js / Web Development",
      "Mobile-First Responsive Layouts",
      "E-Commerce Solutions",
      "Conversion Rate Optimization"
    ],
    gradient: "from-violet-600 to-fuchsia-600",
    badge: "Digital HQ",
  },
  {
    id: "analytics",
    num: "04",
    title: "ANALYTICS",
    shortDesc: "Understand your audience and make smarter marketing decisions.",
    fullDesc: "Data without clarity is just noise. We set up comprehensive tracking, custom dashboards, and funnel insights so every marketing rupee spent yields measurable return.",
    icon: BarChart3,
    deliverables: [
      "Google Analytics 4 & Pixel Setup",
      "Conversion Funnel Tracking",
      "Custom Performance Dashboards",
      "Competitor Intelligence",
      "ROI & CAC Reporting"
    ],
    gradient: "from-cyan-600 to-blue-600",
    badge: "Data Intelligence",
  },
  {
    id: "content-creation",
    num: "05",
    title: "CONTENT CREATION",
    shortDesc: "Creative content that captures attention and communicates your brand.",
    fullDesc: "Compelling graphic art, copy, banners, infographics, and carousel designs engineered to stop scrollers in their tracks and deliver high engagement.",
    icon: PenTool,
    deliverables: [
      "Graphic Design & Banners",
      "Copywriting & Ad Scripts",
      "Carousel & Poster Design",
      "Infographics & Motion Graphics",
      "Content Asset Library"
    ],
    gradient: "from-emerald-600 to-teal-600",
    badge: "Creative Art",
  },
  {
    id: "paid-ads",
    num: "06",
    title: "PAID ADS",
    shortDesc: "Performance-driven advertising designed to reach the right audience.",
    fullDesc: "High-ROI advertising campaigns on Meta (Facebook/Instagram) and Google Ads. Precise audience targeting, ad copy testing, budget optimization, and scale.",
    icon: Megaphone,
    deliverables: [
      "Meta Ads (FB & Instagram)",
      "Google Search & Display Ads",
      "Retargeting Campaigns",
      "Audience Segmentation",
      "A/B Creative Testing"
    ],
    gradient: "from-pink-600 to-rose-600",
    badge: "Performance ROI",
  },
  {
    id: "seo",
    num: "07",
    title: "SEO",
    shortDesc: "Improve visibility and help your business get discovered organically.",
    fullDesc: "Dominate search engines and capture high-intent customers searching for your products or services. Technical SEO, local Rajahmundry ranking, content strategy, and link building.",
    icon: Search,
    deliverables: [
      "Keyword Research & Mapping",
      "On-Page & Technical SEO",
      "Google Business Profile (Local SEO)",
      "Authority Link Building",
      "Organic Traffic Audits"
    ],
    gradient: "from-amber-600 to-orange-600",
    badge: "Organic Reach",
  },
  {
    id: "video-marketing",
    num: "08",
    title: "VIDEO MARKETING",
    shortDesc: "Tell your story through engaging, high-impact video content.",
    fullDesc: "Short-form video content (Reels/Shorts), promotional brand films, ad creatives, and product teasers designed to captivate audiences and boost engagement.",
    icon: Video,
    deliverables: [
      "Instagram Reels & YouTube Shorts",
      "Brand Commercial Videos",
      "Product & Service Explanations",
      "Video Editing & Color Grading",
      "Motion Graphics & Intro Stings"
    ],
    gradient: "from-purple-600 to-indigo-600",
    badge: "High Engagement",
  },
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 relative bg-[#06070b]">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-400">
              OUR CAPABILITIES
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Everything Your Brand <br />
              <span className="text-gradient-electric">Needs to Grow.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md font-normal">
            Eight interconnected digital disciplines designed to take your business from hidden potential to market leader.
          </p>
        </div>

        {/* 8 Interactive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group glass-panel-interactive p-8 rounded-3xl cursor-pointer relative overflow-hidden flex flex-col justify-between h-[360px]"
              >
                {/* Background hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Card Header: Number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-slate-500 group-hover:text-blue-400 transition-colors">
                      {service.num}
                    </span>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {service.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} p-3 text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full" />
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="font-heading text-xl font-extrabold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 flex items-center justify-between border-t border-white/5 text-xs font-semibold text-slate-400 group-hover:text-white">
                  <span>Explore Deliverables</span>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Modal Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-xl p-8 rounded-3xl border border-white/20 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${selectedService.gradient} text-white shadow-xl`}>
                <selectedService.icon className="w-8 h-8" />
              </div>
              <div>
                <div className="text-xs font-mono text-blue-400 font-bold">SERVICE {selectedService.num}</div>
                <h3 className="font-heading text-2xl font-black text-white">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3 pt-2 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Deliverables:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/60 p-2.5 rounded-xl border border-white/5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="flex-1 text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg hover:opacity-90"
              >
                Inquire About {selectedService.title}
              </a>
              <a
                href={`https://wa.me/919381237797?text=Hi%20CBA,%20I'm%20interested%20in%20your%20${encodeURIComponent(selectedService.title)}%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
              >
                WhatsApp Us
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
