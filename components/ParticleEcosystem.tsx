"use client";

import React, { useEffect, useRef, useState } from "react";

interface NodeItem {
  id: string;
  label: string;
  category: string;
  x: number;
  y: number;
  radius: number;
  color: string;
  pulsePhase: number;
}

export default function ParticleEcosystem() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = containerRef.current?.clientWidth || 600);
    let height = (canvas.height = containerRef.current?.clientHeight || 500);

    const handleResize = () => {
      if (!containerRef.current || !canvas) return;
      width = canvas.width = containerRef.current.clientWidth;
      height = canvas.height = containerRef.current.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Nodes structure matching brief diagram
    const nodes: NodeItem[] = [
      { id: "brand", label: "BRAND", category: "Core", x: 0.5, y: 0.12, radius: 24, color: "#a855f7", pulsePhase: 0 },
      { id: "growth", label: "DIGITAL GROWTH", category: "Engine", x: 0.5, y: 0.38, radius: 36, color: "#3b82f6", pulsePhase: 1 },
      { id: "social", label: "SOCIAL", category: "Service", x: 0.22, y: 0.65, radius: 20, color: "#06b6d4", pulsePhase: 2 },
      { id: "website", label: "WEBSITE", category: "Service", x: 0.5, y: 0.65, radius: 22, color: "#6366f1", pulsePhase: 3 },
      { id: "ads", label: "PAID ADS", category: "Service", x: 0.78, y: 0.65, radius: 20, color: "#ec4899", pulsePhase: 4 },
      { id: "content", label: "CONTENT", category: "Sub", x: 0.22, y: 0.88, radius: 18, color: "#10b981", pulsePhase: 5 },
      { id: "seo", label: "SEO", category: "Sub", x: 0.5, y: 0.88, radius: 18, color: "#f59e0b", pulsePhase: 6 },
      { id: "analytics", label: "ANALYTICS", category: "Sub", x: 0.78, y: 0.88, radius: 18, color: "#8b5cf6", pulsePhase: 7 },
    ];

    // Connections between nodes (from -> to)
    const connections = [
      { from: "brand", to: "growth" },
      { from: "growth", to: "social" },
      { from: "growth", to: "website" },
      { from: "growth", to: "ads" },
      { from: "social", to: "content" },
      { from: "website", to: "seo" },
      { from: "ads", to: "analytics" },
    ];

    // Flowing particles along connection paths
    const particles: Array<{
      fromId: string;
      toId: string;
      progress: number;
      speed: number;
      size: number;
    }> = [];

    connections.forEach((conn) => {
      for (let i = 0; i < 3; i++) {
        particles.push({
          fromId: conn.from,
          toId: conn.to,
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.004,
          size: 2 + Math.random() * 2,
        });
      }
    });

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Compute actual pixel coordinates with floating subtle oscillation
      const resolvedNodes = nodes.map((node, index) => {
        const floatY = Math.sin(time + index * 0.8) * 4;
        const floatX = Math.cos(time * 0.7 + index * 0.5) * 3;
        return {
          ...node,
          px: node.x * width + floatX,
          py: node.y * height + floatY,
        };
      });

      // Map for quick lookup
      const nodeMap = new Map(resolvedNodes.map((n) => [n.id, n]));

      // 1. Draw Connection Lines
      connections.forEach((conn) => {
        const from = nodeMap.get(conn.from);
        const to = nodeMap.get(conn.to);
        if (!from || !to) return;

        const isHovered = hoveredNode === conn.from || hoveredNode === conn.to;

        // Line gradient
        const gradient = ctx.createLinearGradient(from.px, from.py, to.px, to.py);
        gradient.addColorStop(0, from.color + (isHovered ? "aa" : "44"));
        gradient.addColorStop(1, to.color + (isHovered ? "aa" : "44"));

        ctx.beginPath();
        ctx.moveTo(from.px, from.py);
        ctx.lineTo(to.px, to.py);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = isHovered ? 2.5 : 1.5;
        ctx.stroke();

        // Pulsing directional arrow / glow line
        ctx.beginPath();
        ctx.moveTo(from.px, from.py);
        ctx.lineTo(to.px, to.py);
        ctx.strokeStyle = "rgba(255,255,255,0.05)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // 2. Draw Moving Data Particles
      particles.forEach((p) => {
        const from = nodeMap.get(p.fromId);
        const to = nodeMap.get(p.toId);
        if (!from || !to) return;

        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const curX = from.px + (to.px - from.px) * p.progress;
        const curY = from.py + (to.py - from.py) * p.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = to.color;
        ctx.shadowColor = to.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Draw Nodes & Labels
      resolvedNodes.forEach((node) => {
        const isHovered = hoveredNode === node.id;
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 2;
        const radius = node.radius + (isHovered ? 6 : pulse);

        // Outer glow
        const radGrad = ctx.createRadialGradient(
          node.px,
          node.py,
          radius * 0.2,
          node.px,
          node.py,
          radius * 2
        );
        radGrad.addColorStop(0, node.color + "66");
        radGrad.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(node.px, node.py, radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = radGrad;
        ctx.fill();

        // Node circle background
        ctx.beginPath();
        ctx.arc(node.px, node.py, radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? node.color : "#0b0e17";
        ctx.strokeStyle = node.color;
        ctx.lineWidth = isHovered ? 3 : 2;
        ctx.fill();
        ctx.stroke();

        // Inner highlight
        ctx.beginPath();
        ctx.arc(node.px, node.py, radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "#ffffff" : node.color;
        ctx.fill();

        // Node Label
        ctx.font = node.id === "growth" ? "bold 13px Outfit, sans-serif" : "bold 11px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Label background card
        const labelText = node.label;
        const textWidth = ctx.measureText(labelText).width;
        const padX = 8;
        const padY = 4;
        const labelY = node.py + radius + 14;

        ctx.fillStyle = "rgba(10, 12, 20, 0.85)";
        ctx.strokeStyle = node.color + "55";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(
          node.px - textWidth / 2 - padX,
          labelY - 8,
          textWidth + padX * 2,
          18,
          4
        );
        ctx.fill();
        ctx.stroke();

        // Label text
        ctx.fillStyle = isHovered ? "#ffffff" : "#e2e8f0";
        ctx.fillText(labelText, node.px, labelY);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hoveredNode]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[480px] sm:h-[540px] rounded-3xl glass-panel border border-white/10 p-4 overflow-hidden shadow-2xl shadow-indigo-950/40"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Title Tag */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-full border border-white/10 text-xs text-slate-300 font-medium backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
        <span>Live Ecosystem Architecture</span>
      </div>

      <canvas ref={canvasRef} className="w-full h-full cursor-crosshair relative z-0" />
    </div>
  );
}
