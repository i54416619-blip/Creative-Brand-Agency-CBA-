"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
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

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    const messageText = `Hi Creative Brand Agency,%0A%0AMy Name: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AEmail: ${encodeURIComponent(formData.email)}%0AServices Needed: ${encodeURIComponent(selectedServices.join(", "))}%0AProject Brief: ${encodeURIComponent(formData.message)}`;

    setTimeout(() => {
      window.open(`https://wa.me/919381237797?text=${messageText}`, "_blank");
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0D1018] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Contact Banner */}
        <div className="editorial-card p-10 sm:p-16 rounded-lg bg-[#181B24] border border-white/10 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-white/10">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono font-medium tracking-widest text-[#8C8FD8] uppercase">
                START A CONVERSATION
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4F2ED] tracking-tight">
                Have a business that <br />
                <span className="text-[#6575C7]">needs to grow?</span>
              </h2>
            </div>
            <div className="lg:col-span-4 space-y-4">
              <p className="text-sm text-[#8D929E] leading-relaxed">
                Partner with Creative Brand Agency for strategic marketing, high-converting websites, and high-ROI ad campaigns.
              </p>
              <div className="font-heading text-2xl font-bold text-[#F4F2ED]">
                Let's talk.
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setFormOpen(true)}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#4659B8] hover:bg-[#3b4ca0] text-[#F4F2ED] font-heading font-semibold text-xs uppercase tracking-wider rounded-md transition-all btn-human-lift shadow-sm"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 arrow-shift" />
            </button>

            <a
              href="https://wa.me/919381237797?text=Hi%20Creative%20Brand%20Agency,%20I'd%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#111522] hover:bg-[#202430] text-[#F4F2ED] border border-white/10 font-heading font-semibold text-xs uppercase tracking-wider rounded-md transition-all btn-human-lift"
            >
              <MessageSquare className="w-4 h-4 text-[#8C8FD8]" />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>


          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <a
              href="tel:9381237797"
              className="p-4 rounded bg-[#111522] border border-white/5 hover:border-[#4659B8] transition-colors flex items-center gap-4"
            >
              <div className="p-2.5 rounded bg-[#181B24] text-[#6575C7]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#8D929E] uppercase">Call Directly</div>
                <div className="text-xs font-bold text-[#F4F2ED]">9381237797</div>
              </div>
            </a>

            <a
              href="mailto:creativebrandagency666@gmail.com"
              className="p-4 rounded bg-[#111522] border border-white/5 hover:border-[#4659B8] transition-colors flex items-center gap-4"
            >
              <div className="p-2.5 rounded bg-[#181B24] text-[#6575C7]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#8D929E] uppercase">Email Agency</div>
                <div className="text-xs font-bold text-[#F4F2ED] truncate max-w-[180px] sm:max-w-none">
                  creativebrandagency666@gmail.com
                </div>
              </div>
            </a>

            <div className="p-4 rounded bg-[#111522] border border-white/5 flex items-center gap-4">
              <div className="p-2.5 rounded bg-[#181B24] text-[#6575C7]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#8D929E] uppercase">Headquarters</div>
                <div className="text-xs font-bold text-[#F4F2ED]">Rajahmundry, Andhra Pradesh</div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Project Inquiry Modal */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="editorial-card w-full max-w-2xl p-8 sm:p-10 rounded-lg bg-[#181B24] border border-white/20 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => {
                setFormOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-6 right-6 p-2 rounded-md bg-[#111522] text-[#8D929E] hover:text-white border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="border-b border-white/10 pb-4">
                  <div className="text-xs font-mono text-[#8C8FD8] uppercase">
                    PROJECT INQUIRY
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#F4F2ED] mt-1">
                    Tell Us About Your Brand
                  </h3>
                </div>

                {/* Service Selection Pills */}
                <div>
                  <label className="block text-xs font-mono text-[#8D929E] uppercase mb-2">
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
                          className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                            isSelected
                              ? "bg-[#4659B8] text-white"
                              : "bg-[#111522] text-[#8D929E] border border-white/10 hover:text-white"
                          }`}
                        >
                          {isSelected ? "✓ " : "+ "}{service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#D9D9D5] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#111522] border border-white/10 rounded px-3.5 py-2.5 text-xs text-white placeholder-[#8D929E] focus:outline-none focus:border-[#4659B8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#D9D9D5] mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9381237797"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#111522] border border-white/10 rounded px-3.5 py-2.5 text-xs text-white placeholder-[#8D929E] focus:outline-none focus:border-[#4659B8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D9D9D5] mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. info@yourbusiness.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#111522] border border-white/10 rounded px-3.5 py-2.5 text-xs text-white placeholder-[#8D929E] focus:outline-none focus:border-[#4659B8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D9D9D5] mb-1">Project Goals / Brief</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about your business goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#111522] border border-white/10 rounded px-3.5 py-2.5 text-xs text-white placeholder-[#8D929E] focus:outline-none focus:border-[#4659B8]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-[#4659B8] hover:bg-[#3b4ca0] text-white font-semibold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry & Open WhatsApp</span>
                </button>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 bg-[#4659B8]/20 text-[#6575C7] rounded flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#F4F2ED]">Inquiry Sent</h3>
                <p className="text-xs text-[#8D929E] max-w-md mx-auto">
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

