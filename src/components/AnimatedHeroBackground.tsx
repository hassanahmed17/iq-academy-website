"use client";

import React, { useState, useEffect } from "react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function AnimatedHeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#F6F4FE]" suppressHydrationWarning={true} />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" suppressHydrationWarning={true}>
      
      {/* 1. Soft Brand Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-r from-[#D8CEFE]/30 via-[#F0EBFF]/50 to-[#E8F0FE]/30 rounded-full blur-[130px] animate-pulse pointer-events-none" />
      <div className="absolute top-12 right-1/4 w-[380px] h-[380px] bg-[#D2FF00]/14 rounded-full blur-[110px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-[#25176E]/08 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. Magic UI Flickering Grid - Masked Left & Right Only (Center Channel Clear) */}
      <div className="absolute inset-0 opacity-[0.85] [mask-image:linear-gradient(to_right,#000_0%,#000_20%,transparent_38%,transparent_62%,#000_80%,#000_100%)]">
        <FlickeringGrid
          className="relative inset-0 h-full w-full"
          squareSize={4}
          gridGap={6}
          color="#25176E"
          maxOpacity={0.25}
          flickerChance={0.2}
        />
      </div>

      {/* 3. Top Vignette */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#F6F4FE] via-[#F6F4FE]/80 to-transparent pointer-events-none" />
    </div>
  );
}
