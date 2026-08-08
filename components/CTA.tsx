"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Send,
  X
} from "lucide-react";
import confetti from "canvas-confetti";

export default function CTA() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const availableServices = [
    "Branding",
    "Social Media",
    "Website Design",
    "Analytics",
    "Content Creation",
    "Paid Ads",
    "SEO",
    "Video Marketing",
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebratory confetti effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Auto-construct WhatsApp message URL
    const messageText = `Hi Creative Brand Agency,%0A%0AMy Name: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AEmail: ${encodeURIComponent(formData.email)}%0AServices Needed: ${encodeURIComponent(selectedServices.join(", "))}%0AProject Brief: ${encodeURIComponent(formData.message)}`;

    setTimeout(() => {
      window.open(`https://wa.me/919381237797?text=${messageText}`, "_blank");
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#040508] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-gradient pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Dramatic Container */}
        <div className="glass-panel p-10 sm:p-16 md:p-20 rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-8">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>LET'S BUILD SOMETHING GREAT</span>
          </div>

          {/* Title */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
            Ready to Grow <br />
            <span className="text-gradient-electric">Your Brand?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            Let's turn your business into a brand people remember. Partner with Creative Brand Agency for strategic marketing, high-converting websites, and high-ROI ad campaigns.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <button
              onClick={() => setFormOpen(true)}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all rounded-2xl overflow-hidden shadow-2xl shadow-indigo-600/40 hover:scale-[1.03]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"></span>
              <span className="relative flex items-center gap-3">
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <a
              href="https://wa.me/919381237797?text=Hi%20Creative%20Brand%20Agency,%20I'd%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 text-base font-semibold text-white bg-emerald-600/90 hover:bg-emerald-600 rounded-2xl border border-emerald-500/30 transition-all hover:scale-[1.02] gap-3 shadow-lg shadow-emerald-950/50"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>

          {/* Direct Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10 text-left">
            <a
              href="tel:9381237797"
              className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-blue-500/40 transition-colors flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Call Directly</div>
                <div className="text-sm font-bold text-white group-hover:text-blue-300">9381237797</div>
              </div>
            </a>

            <a
              href="mailto:creativebrandagency666@gmail.com"
              className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-violet-500/40 transition-colors flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Email Us</div>
                <div className="text-xs font-bold text-white group-hover:text-violet-300 truncate max-w-[180px] sm:max-w-none">
                  creativebrandagency666@gmail.com
                </div>
              </div>
            </a>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Headquarters</div>
                <div className="text-sm font-bold text-white">Rajahmundry</div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Start Project Form Modal */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-2xl p-8 sm:p-10 rounded-3xl border border-white/20 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => {
                setFormOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">
                    PROJECT INQUIRY
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
                    Tell Us About Your Brand
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Select the services you need and send us your project details.
                  </p>
                </div>

                {/* Service Selection Pills */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                    Select Services Needed:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableServices.map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                            isSelected
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                              : "bg-slate-900 text-slate-400 border border-white/10 hover:text-white"
                          }`}
                        >
                          {isSelected ? "✓ " : "+ "}{service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9381237797"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. info@yourbusiness.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Project Details / Goals</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about your business and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-bold text-sm shadow-xl shadow-indigo-950 flex items-center justify-center gap-2 hover:opacity-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry & Open WhatsApp</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading text-2xl font-black text-white">Inquiry Initialized!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Opening WhatsApp to connect you directly with Creative Brand Agency...
                </p>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
