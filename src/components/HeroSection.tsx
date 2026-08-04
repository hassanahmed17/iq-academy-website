"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import AnimatedHeroBackground from "./AnimatedHeroBackground";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

function SeamlessLoopVideo({ src, objectPos = "object-[center_10%]" }: { src: string; objectPos?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    video.addEventListener("canplay", playVideo);
    video.addEventListener("loadeddata", playVideo);
    
    // Auto-resume if browser power-saving pauses video
    const handlePause = () => {
      video.play().catch(() => {});
    };
    video.addEventListener("pause", handlePause);

    playVideo();

    return () => {
      video.removeEventListener("canplay", playVideo);
      video.removeEventListener("loadeddata", playVideo);
      video.removeEventListener("pause", handlePause);
    };
  }, [src]);

  return (
    <div className="relative w-full h-full bg-[#F6F4FE] overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`w-full h-full object-cover ${objectPos} bg-[#F6F4FE]`}
      />
    </div>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Typewriter animation state for: SSC, Intermediate, Polytechnic
  const words = React.useMemo(() => ["SSC", "Intermediate", "Polytechnic"], []);
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
      className="relative w-full bg-[#F6F4FE] overflow-hidden" 
      ref={heroRef}
    >
      {/* ========================================================================= */}
      {/* 📱 MOBILE HERO VIEW (lg:hidden) - CONTENT ANCHORED & TIGHTLY FITTED        */}
      {/* ========================================================================= */}
      <div className="block lg:hidden w-full pt-14 pb-8 bg-[#F6F4FE] flex flex-col justify-start overflow-hidden relative">
        
        {/* 1. Top Framed Video (Fixed height bounds anchored to top) */}
        <div className="relative w-full h-[200px] min-[380px]:h-[220px] min-[440px]:h-[240px] overflow-hidden shrink-0 bg-[#F6F4FE]">
          <SeamlessLoopVideo src="/videos/hero-mobile.mp4" objectPos="object-[center_42%]" />
          
          {/* Soft Vignette Gradient Fade Mask seamlessly blending video into background with NO hard edge */}
          <div className="absolute inset-x-0 -bottom-2 h-16 bg-gradient-to-t from-[#F6F4FE] via-[#F6F4FE]/90 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[#F6F4FE]/30 to-transparent z-20 pointer-events-none" />
        </div>

        {/* 2. Content Unit Tightly Anchored Directly Below Video */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
          className="px-4 pt-0 pb-6 flex flex-col items-center text-center gap-2.5 relative z-30 max-w-xs min-[390px]:max-w-sm mx-auto w-full -mt-4"
        >
          {/* Green Pill Tag Badge */}
          <motion.div variants={badgePopVariants} className="flex justify-center w-full shrink-0">
            <span className="px-5 py-1.5 rounded-full bg-[#D2FF00] text-[#1B1054] font-black text-xs tracking-wide uppercase shadow-md inline-block">
              SSC • INTER • DIPLOMA
            </span>
          </motion.div>

          {/* Centered 2-Line Headline */}
          <motion.h1
            variants={itemFadeUpVariants}
            className="font-display-saasmo text-[24px] min-[390px]:text-[27px] font-extrabold text-[#1E1266] leading-[1.15] tracking-tight text-center max-w-xs shrink-0"
          >
            <span className="block w-full text-center">A leading institute for</span>
            <span className="block w-full text-center text-[#5B3DF5] font-black min-h-[1.2em] flex items-center justify-center">
              <span>{currentText}</span>
              <span className="w-[3px] h-[0.75em] bg-[#5B3DF5] animate-cursor-blink ml-1 rounded-full inline-block shrink-0 align-middle" />
            </span>
          </motion.h1>

          {/* Centered Subtext Description */}
          <motion.p
            variants={itemFadeUpVariants}
            className="text-xs text-[#475569] font-medium leading-relaxed max-w-xs mx-auto text-center px-1 shrink-0"
          >
            Empowering SSC, Intermediate, and Polytechnic Diploma students with expert faculty, structured learning, and personalised guidance to build confidence and achieve academic excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemFadeUpVariants}
            className="flex flex-col items-center justify-center gap-2 pt-1 w-full max-w-[270px] min-[390px]:max-w-xs shrink-0"
          >
            <a
              href="#contact-form-block"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact-form-block")?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className="w-full py-3 px-5 rounded-2xl bg-[#1B1054] text-white font-bold text-xs min-[390px]:text-sm shadow-md flex items-center justify-center gap-2 group hover:bg-[#150c45] active:scale-95 transition-all"
            >
              <span>Join the Next Batch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#courses"
              className="w-full py-3 px-5 rounded-2xl bg-white border border-[#EBE6FE] text-[#1B1054] font-bold text-xs min-[390px]:text-sm shadow-xs flex items-center justify-center gap-2 hover:bg-[#F6F4FE] active:scale-95 transition-all"
            >
              <span>View Programs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1B1054]" />
            </a>
          </motion.div>
        </motion.div>

        {/* 3. Soft, Light-Strength U-Shaped Ambient Gradient Glow (Hollow Center U-Curve, Bottom-Left & Bottom-Right Arms) */}
        <div className="absolute inset-x-0 bottom-0 h-36 pointer-events-none z-10 overflow-hidden">
          <div className="w-full h-full relative opacity-25">
            {/* Left Arm of U-Shape: Sweeps up the bottom-left corner */}
            <div 
              className="absolute bottom-0 left-0 w-44 h-36 blur-2xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 100% 100% at 0% 100%, #5B3DF5 0%, #7C3AED 50%, transparent 100%)"
              }}
            />

            {/* Right Arm of U-Shape: Sweeps up the bottom-right corner */}
            <div 
              className="absolute bottom-0 right-0 w-44 h-36 blur-2xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 100% 100% at 100% 100%, #7C3AED 0%, #5B3DF5 50%, transparent 100%)"
              }}
            />

            {/* U-Shape Hollow Curve Rim: Center stays transparent (0-45%), Outer rim curves into a soft U-bowl */}
            <div 
              className="absolute bottom-0 inset-x-0 h-28 blur-xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 85% at 50% 100%, transparent 45%, #5B3DF5 70%, #25176E 100%)"
              }}
            />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 💻 DESKTOP HERO VIEW (hidden lg:flex) - SPECIFICALLY USES 1212 VIDEO      */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex relative w-full min-h-[100dvh] min-h-screen pt-36 pb-24 flex-col justify-center bg-white">
        {/* Background video covering full section width & height with Desktop Specific Video (1212.mp4) */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <SeamlessLoopVideo src="/videos/hero-desktop.mp4" objectPos="object-[center_10%]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center my-auto">
          {/* LEFT-ALIGNED HERO TEXT & BUTTONS DIRECTLY ON VIDEO */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroContainerVariants}
            className="max-w-2xl text-left flex flex-col items-start gap-6 my-auto"
          >
            {/* 1. Green Pill Tag Badge - Left Aligned */}
            <motion.div variants={badgePopVariants} className="flex justify-start w-full">
              <div className="hero-green-badge shadow-sm max-w-full text-center">
                <span className="w-2 h-2 rounded-full bg-[#1B1054] animate-pulse shrink-0"></span>
                <span className="text-xs font-extrabold tracking-wide">SSC • INTERMEDIATE • DIPLOMA ENGINEERING</span>
              </div>
            </motion.div>

            {/* 2. Left-Aligned Hero Title: Line 1 (Static), Line 2 (Animated) */}
            <motion.h1
              variants={itemFadeUpVariants}
              className="font-display-saasmo text-5xl xl:text-[56px] font-extrabold text-[#1E1266] leading-[1.18] tracking-tight text-left max-w-2xl flex flex-col items-start gap-2"
            >
              <span className="block w-full text-left">A leading institute for</span>
              <span className="block w-full text-left text-transparent bg-clip-text bg-gradient-to-r from-[#25176E] via-[#5B3DF5] to-[#7C3AED] font-black min-h-[1.2em] flex items-center justify-start">
                <span>{currentText}</span>
                <span className="w-[4px] h-[0.75em] bg-[#5B3DF5] animate-cursor-blink ml-2 rounded-full inline-block shrink-0 align-middle" />
              </span>
            </motion.h1>

            {/* 3. Left-Aligned Subtext Description */}
            <motion.p
              variants={itemFadeUpVariants}
              className="text-base text-[#475569] font-medium leading-relaxed max-w-xl text-left"
            >
              Empowering SSC, Intermediate, and Polytechnic Diploma students with expert faculty, structured learning, and personalised guidance to build confidence and achieve academic excellence.
            </motion.p>

            {/* 4. Left-Aligned CTA Buttons */}
            <motion.div
              variants={itemFadeUpVariants}
              className="flex flex-row items-start justify-start gap-4 pt-4 w-auto"
            >
              <a
                href="#contact-form-block"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-form-block")?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="w-auto px-7 py-3.5 rounded-full bg-[#25176E] text-white font-bold text-sm hover:bg-[#1b1054] active:scale-95 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Join the Next Batch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#courses"
                className="w-auto px-7 py-3.5 rounded-full bg-white border border-[#EBE6FE] text-[#1E1266] font-bold text-sm hover:bg-[#F6F4FE] active:scale-95 transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Programs</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
