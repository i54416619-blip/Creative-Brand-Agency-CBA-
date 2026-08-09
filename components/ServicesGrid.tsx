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
  discipline: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ElementType;
  deliverables: string[];
}

export interface DisciplineGroup {
  number: string;
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "branding",
    num: "01",
    discipline: "BRAND",
    title: "Branding & Visual Identity",
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
  },
  {
    id: "website-design",
    num: "02",
    discipline: "DIGITAL",
    title: "Website Design & UX",
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
  },
  {
    id: "social-media",
    num: "03",
    discipline: "DIGITAL",
    title: "Social Media Strategy",
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
  },
  {
    id: "content-creation",
    num: "04",
    discipline: "CONTENT",
    title: "Content Creation",
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
  },
  {
    id: "video-marketing",
    num: "05",
    discipline: "CONTENT",
    title: "Video Marketing & Reels",
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
  },
  {
    id: "paid-ads",
    num: "06",
    discipline: "PERFORMANCE",
    title: "Paid Ads (Meta & Google)",
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
  },
  {
    id: "seo",
    num: "07",
    discipline: "PERFORMANCE",
    title: "Search Engine Optimization (SEO)",
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
  },
  {
    id: "analytics",
    num: "08",
    discipline: "PERFORMANCE",
    title: "Data Analytics & Funnels",
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
  },
];

export const disciplines: DisciplineGroup[] = [
  {
    number: "01",
    title: "BRAND",
    subtitle: "Identity, Positioning & Visual Architecture",
    services: [servicesData[0]],
  },
  {
    number: "02",
    title: "DIGITAL",
    subtitle: "Web Platforms & Community Engagement",
    services: [servicesData[1], servicesData[2]],
  },
  {
    number: "03",
    title: "CONTENT",
    subtitle: "Creative Design & Short-Form Video",
    services: [servicesData[3], servicesData[4]],
  },
  {
    number: "04",
    title: "PERFORMANCE",
    subtitle: "Paid Acquisition, Organic SEO & Analytics",
    services: [servicesData[5], servicesData[6], servicesData[7]],
  },
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 relative bg-[#111522] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="pb-12 border-b border-white/10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono font-medium tracking-widest text-[#8C8FD8] uppercase">
              CREATIVE CAPABILITIES
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4F2ED] tracking-tight">
              Everything Your Brand <br />
              <span className="text-[#6575C7]">Needs to Grow.</span>
            </h2>
          </div>
          <p className="text-sm text-[#8D929E] max-w-md font-normal leading-relaxed">
            Organized into four creative disciplines designed to establish your market authority and drive business performance.
          </p>
        </div>

        {/* 4 Creative Disciplines Editorial Layout */}
        <div className="space-y-16">
          {disciplines.map((disc) => (
            <div
              key={disc.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-white/10 last:border-0 last:pb-0"
            >
              {/* Discipline Column Header (4 cols) */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-3 font-mono text-xs text-[#8C8FD8]">
                  <span>DISCIPLINE {disc.number}</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F4F2ED]">
                  {disc.title}
                </h3>
                <p className="text-xs text-[#8D929E]">
                  {disc.subtitle}
                </p>
              </div>

              {/* Discipline Services List (8 cols) */}
              <div className="lg:col-span-8 space-y-4">
                {disc.services.map((service) => {
                  const IconComp = service.icon;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className="editorial-card p-6 rounded-md bg-[#181B24] border border-white/10 cursor-pointer group hover:border-[#4659B8] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#111522] rounded border border-white/5 text-[#6575C7] group-hover:text-[#F4F2ED] transition-colors shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-[#8D929E]">{service.num}</span>
                            <h4 className="font-heading text-lg font-bold text-[#F4F2ED] group-hover:text-[#8C8FD8] transition-colors">
                              {service.title}
                            </h4>
                          </div>
                          <p className="text-xs text-[#8D929E] mt-1 leading-relaxed max-w-xl">
                            {service.shortDesc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-semibold text-[#8C8FD8] group-hover:text-[#F4F2ED] shrink-0 self-end sm:self-center">
                        <span>View Deliverables</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Service Modal Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="editorial-card w-full max-w-xl p-8 rounded-lg bg-[#181B24] border border-white/20 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-md bg-[#111522] text-[#8D929E] hover:text-white transition-colors border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <div className="p-3.5 rounded bg-[#4659B8] text-white">
                <selectedService.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#8C8FD8]">SERVICE {selectedService.num} · {selectedService.discipline}</div>
                <h3 className="font-heading text-xl font-bold text-[#F4F2ED]">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-xs text-[#D9D9D5] leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3 pt-2 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8D929E]">Key Deliverables:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#F4F2ED] bg-[#111522] p-2.5 rounded border border-white/5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#6575C7] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="w-full sm:flex-1 text-center py-3 rounded-md bg-[#4659B8] hover:bg-[#3b4ca0] text-white font-semibold text-xs uppercase tracking-wider shadow-sm"
              >
                Inquire About {selectedService.title}
              </a>
              <a
                href={`https://wa.me/919381237797?text=Hi%20CBA,%20I'm%20interested%20in%20your%20${encodeURIComponent(selectedService.title)}%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-md bg-[#111522] hover:bg-[#202430] border border-white/10 text-[#F4F2ED] font-semibold text-xs uppercase tracking-wider text-center"
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

