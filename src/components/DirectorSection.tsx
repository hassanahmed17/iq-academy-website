"use client";

import React from "react";
import Image from "next/image";
import { Quote, Award, GraduationCap, Sparkles } from "lucide-react";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";

import { motion, Variants } from "framer-motion";

export default function DirectorSection() {
  const leftColumnVariants: Variants = {
    hidden: { opacity: 0, x: -30, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const rightColumnVariants: Variants = {
    hidden: { opacity: 0, x: 30, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,
        delay: 0.15,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section id="director" className="py-16 sm:py-24 relative bg-white border-y border-[#EBE6FE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Indigo Glassmorphic Container with Noisy Gradient */}
        <div className="relative rounded-[32px] p-6 sm:p-10 lg:p-14 text-white shadow-2xl overflow-hidden border border-[#372692]">
          <GradientBackground
            gradientOrigin="bottom-right"
            colors={[
              { color: "rgba(30,18,102,1)", stop: "0%" },
              { color: "rgba(37,23,110,1)", stop: "50%" },
              { color: "rgba(18,10,62,1)", stop: "100%" }
            ]}
            noiseIntensity={0.65}
            noisePatternSize={95}
          />
          
          {/* Subtle Ambient Background Decorative Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D2FF00]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* LEFT COLUMN: DIRECTOR PROFILE HERO PHOTO CARD */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={leftColumnVariants}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="w-full max-w-md bg-white/5 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-white/15 shadow-2xl space-y-4">
                
                {/* Director Portrait Photo */}
                <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
                  <Image
                    src="/images/director.jpg"
                    alt="M.D. Abdul Rafeeq - Director & Founder"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    priority
                  />
                  
                  {/* Bottom Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120A3E] via-[#120A3E]/20 to-transparent opacity-90" />

                  {/* Bottom Name Overlay on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1">
                    <h3 className="font-display-saasmo text-2xl font-bold tracking-wide drop-shadow-md">
                      M.D. Abdul Rafeeq
                    </h3>
                    <p className="text-xs text-[#D2FF00] font-extrabold uppercase tracking-wider">
                      Director, IQ Academy of Excellence
                    </p>
                  </div>
                </div>

                {/* Director Credentials & Micro Stats */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-center gap-2 text-xs font-semibold text-white/90 bg-white/10 py-2.5 px-3 rounded-xl border border-white/10 text-center">
                    <GraduationCap className="w-4 h-4 text-[#D2FF00] shrink-0" />
                    <span>M.E., M.Sc. • Gold Medalist in Mathematics</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                      <span className="block text-[10px] uppercase font-bold text-white/60">Experience</span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#D2FF00]">13+ Yrs</span>
                    </div>
                    <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                      <span className="block text-[10px] uppercase font-bold text-white/60">Alumni</span>
                      <span className="text-xs sm:text-sm font-extrabold text-white">5,000+</span>
                    </div>
                    <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                      <span className="block text-[10px] uppercase font-bold text-white/60">Maths</span>
                      <span className="text-xs sm:text-sm font-extrabold text-emerald-400">Gold Medalist</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* RIGHT COLUMN: DIRECTOR'S MESSAGE & VISION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={rightColumnVariants}
              className="lg:col-span-7 space-y-6"
            >
              
              {/* Header Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#D2FF00] text-xs font-extrabold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-[#D2FF00]" />
                <span>Director's Message & Vision</span>
              </div>

              {/* Main Headline */}
              <h2 className="font-display-saasmo text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                "Nurturing Technical Excellence & Shaping Tomorrow's Engineers"
              </h2>

              {/* Inspired Quote Box */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
                <Quote className="w-8 h-8 text-[#D2FF00]/40 absolute top-4 right-4 pointer-events-none" />
                
                <p className="text-sm sm:text-base text-white/95 leading-relaxed italic border-l-4 border-[#D2FF00] pl-4 sm:pl-5">
                  "Welcome to IQ Academy of Excellence. For over 13 years, our singular commitment has been empowering polytechnic & diploma engineering students with deep technical fundamentals and top-rank guidance for competitive entrance examinations."
                </p>
                
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed pt-2">
                  Engineering is about building analytical problem-solving mindsets that withstand rapid technological shifts. As a Gold Medalist in Mathematics with an M.E. and M.Sc. background, having taught and mentored 5,000+ alumni to achieve top ranks in ECET, POLYCET, and SBTET board exams, our dedicated faculty and structured methodology ensure your success.
                </p>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
