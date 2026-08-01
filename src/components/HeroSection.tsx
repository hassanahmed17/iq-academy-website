"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import AnimatedHeroBackground from "./AnimatedHeroBackground";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Typewriter animation state for: Polytechnic, Intermediate, SSC
  const words = React.useMemo(() => ["Polytechnic", "Intermediate", "SSC"], []);
  const [wordIndex, setWordIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentFullWord = words[wordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentFullWord.length) {
            setCurrentText(currentFullWord.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1600);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentFullWord.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 45 : 100
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words]);

  // Framer Motion Animation Variants (Staggered Fade-Slide for Executive Polish)
  const heroContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.06,
      },
    },
  };

  const itemFadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const badgePopVariants: Variants = {
    hidden: { opacity: 0, scale: 0.92, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section 
      className="relative w-full min-h-[100dvh] min-h-screen pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24 flex flex-col items-center justify-center bg-[#F6F4FE] overflow-hidden" 
      ref={heroRef}
      suppressHydrationWarning={true}
    >
      {/* 21st.dev Interactive Animated Background */}
      <AnimatedHeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center my-auto" suppressHydrationWarning={true}>
        
        {/* CENTERED HERO HEADER SECTION WITH ELEGANT STAGGERED ANIMATIONS */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
          className="max-w-4xl mx-auto text-center flex flex-col items-center gap-5 sm:gap-7 lg:gap-8 py-2"
          suppressHydrationWarning={true}
        >
          
          {/* 1. Green Pill Tag Badge - Centered */}
          <motion.div variants={badgePopVariants} className="flex justify-center">
            <div className="hero-green-badge shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#1B1054] animate-pulse shrink-0"></span>
              <span className="truncate">SSC • INTERMEDIATE • DIPLOMA ENGINEERING</span>
            </div>
          </motion.div>

          {/* 2. Centered Hero Title with Strict 2-Line Layout (Line 1: Static, Line 2: Animated) */}
          <motion.h1
            variants={itemFadeUpVariants}
            className="font-display-saasmo text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-[#1E1266] leading-[1.2] sm:leading-[1.18] tracking-tight text-center max-w-4xl px-2 flex flex-col items-center justify-center gap-1 sm:gap-2"
          >
            <span className="block w-full text-center">A leading institute for</span>
            <span className="block w-full text-center text-transparent bg-clip-text bg-gradient-to-r from-[#25176E] via-[#5B3DF5] to-[#7C3AED] font-black min-h-[1.25em] flex items-center justify-center">
              <span>{currentText}</span>
              <span className="w-[3px] sm:w-[4px] h-[0.75em] bg-[#5B3DF5] animate-cursor-blink ml-1 sm:ml-2 rounded-full inline-block shrink-0 align-middle" />
            </span>
          </motion.h1>

          {/* 3. Centered Subtext Description */}
          <motion.p
            variants={itemFadeUpVariants}
            className="text-xs sm:text-sm lg:text-base text-[#475569] font-medium leading-relaxed sm:leading-relaxed max-w-xl mx-auto text-center px-3"
          >
            Empowering SSC, Intermediate, and Polytechnic Diploma students with expert faculty, structured learning, and personalised guidance to build confidence and achieve academic excellence.
          </motion.p>

          {/* 4. Centered CTA Buttons */}
          <motion.div
            variants={itemFadeUpVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-3 sm:pt-5 w-full sm:w-auto px-4 sm:px-0"
          >
            <a
              href="#contact-form-block"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact-form-block")?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25176E] text-white font-bold text-xs sm:text-sm hover:bg-[#1b1054] transition-all shadow-md hover:shadow-lg hover:scale-102 flex items-center justify-center gap-2 group"
            >
              <span>Join the Next Batch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#courses"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white border border-[#EBE6FE] text-[#1E1266] font-bold text-xs sm:text-sm hover:bg-[#F6F4FE] transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <span>View Programs</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
