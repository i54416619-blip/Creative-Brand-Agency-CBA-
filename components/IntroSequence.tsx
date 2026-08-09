"use client";

import React, { useEffect, useState } from "react";

export default function IntroSequence() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<"logo" | "line" | "fade">("logo");

  useEffect(() => {
    // Only play intro on first visit per session
    const hasSeenIntro = sessionStorage.getItem("cba_intro_seen");
    if (hasSeenIntro) {
      return;
    }

    setVisible(true);

    const timer1 = setTimeout(() => setPhase("line"), 400);
    const timer2 = setTimeout(() => setPhase("fade"), 900);
    const timer3 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("cba_intro_seen", "true");
    }, 1300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0D1018] flex flex-col items-center justify-center transition-opacity duration-500 pointer-events-none ${
        phase === "fade" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* CBA Brand Block */}
        <div className="flex items-center gap-3 animate-in fade-in zoom-in-95 duration-500">
          <div className="w-10 h-10 bg-[#4659B8] rounded flex items-center justify-center font-heading font-bold text-white text-lg">
            CBA
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-sm tracking-wider text-[#F4F2ED]">
              CREATIVE BRAND AGENCY
            </span>
            <span className="text-[9px] font-mono text-[#8D929E] tracking-widest uppercase">
              Rajahmundry
            </span>
          </div>
        </div>

        {/* Expanding Divider Line */}
        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <div
            className={`h-full bg-[#4659B8] transition-all duration-500 ease-out ${
              phase === "logo" ? "w-0" : "w-full"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
