"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustIntro from "@/components/TrustIntro";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import ServicesShowcase from "@/components/ServicesShowcase";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111522] text-[#F4F2ED] selection:bg-[#4659B8] selection:text-white relative">
      <Navbar />
      <Hero />
      <TrustIntro />
      <ServicesGrid />
      <WhyUs />
      <ServicesShowcase />
      <Portfolio />
      <Process />
      <CTA />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}

