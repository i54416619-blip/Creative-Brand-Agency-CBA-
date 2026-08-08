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
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-950/80 border border-emerald-400/30 transition-all hover:scale-105 group"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6 text-white" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
      </div>
      <span className="hidden sm:inline text-xs font-bold tracking-wide">
        Chat on WhatsApp
      </span>
    </a>
  );
}
