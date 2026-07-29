"use client";

import React from "react";
import { motion } from "framer-motion";

interface DiaTextRevealProps {
  text: string;
  colors?: string[];
  className?: string;
}

export function DiaTextReveal({
  text,
  colors = ["#25176E", "#6366F1", "#8B5CF6", "#25176E"],
  className = "",
}: DiaTextRevealProps) {
  const gradientString = `linear-gradient(115deg, ${colors.join(", ")})`;

  return (
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage: gradientString,
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      className={`inline-block ${className}`}
      suppressHydrationWarning={true}
    >
      {text}
    </motion.span>
  );
}
