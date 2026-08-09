"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/919381237797?text=Hi%20Creative%20Brand%20Agency,%20I'd%20like%20to%20discuss%20a%20project!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#4659B8] hover:bg-[#3b4ca0] text-[#F4F2ED] px-4 py-3 rounded-md shadow-lg border border-white/10 transition-colors font-mono text-xs font-semibold"
    >
      <MessageSquare className="w-4 h-4 text-white" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}

