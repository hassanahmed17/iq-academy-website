"use client";

import React from "react";
import Image from "next/image";
import { Shield } from "lucide-react";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import { motion, Variants } from "framer-motion";

export default function DirectorSection() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 0, scale: 0.98, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section id="director" className="py-16 sm:py-24 relative bg-white border-y border-[#EBE6FE] overflow-hidden" suppressHydrationWarning={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning={true}>
        
        {/* Main Indigo Glassmorphic Container with Noisy Gradient */}
        <div className="relative rounded-[32px] p-5 sm:p-10 lg:p-14 text-white shadow-2xl overflow-hidden border border-[#372692]">
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

          <div className="relative z-10 space-y-8 sm:space-y-12">
            
            {/* Header Eyebrow & Main Title */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="text-center max-w-3xl mx-auto space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#D2FF00] text-xs font-extrabold uppercase tracking-widest">
                Institutional Leadership & Founders
              </div>

              <h2 className="font-display-saasmo text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight">
                Shaping Tomorrow's Technical Leaders
              </h2>
              <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto leading-relaxed">
                Meet the visionary leadership driving academic excellence, technical mastery, and global career opportunities at IQ Academy of Excellence.
              </p>
            </motion.div>

            {/* 2 EXECUTIVE LEADERSHIP CARDS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
              
              {/* CARD 1: M.D. ABDUL RAFEEQ (DIRECTOR & CO-FOUNDER) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="bg-white/5 backdrop-blur-xl p-5 sm:p-8 rounded-3xl border border-white/15 shadow-2xl flex flex-col justify-between space-y-6 overflow-hidden w-full"
              >
                <div className="space-y-5">
                  {/* Director Header & Photo Frame */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-xl border-2 border-[#D2FF00]/40 shrink-0">
                      <Image
                        src="/images/director.jpg"
                        alt="M.D. Abdul Rafeeq - Director & Co-Founder"
                        fill
                        className="object-cover object-top"
                        sizes="128px"
                      />
                    </div>

                    <div className="space-y-1.5 w-full min-w-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#D2FF00] text-[#1B1054] text-[10px] sm:text-xs font-black uppercase tracking-wider">
                        DIRECTOR & CO-FOUNDER
                      </span>
                      <h3 className="font-display-saasmo text-xl sm:text-2xl font-bold text-white tracking-tight break-words">
                        M.D. Abdul Rafeeq
                      </h3>
                      <p className="text-xs font-semibold text-[#D2FF00] leading-relaxed break-words">
                        M.E., M.Sc. • Gold Medalist
                      </p>
                    </div>
                  </div>

                  {/* Director Quote Box (Responsive & Properly Spaced) */}
                  <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 space-y-2.5 overflow-hidden">
                    <p className="text-xs sm:text-sm text-white/95 leading-relaxed italic border-l-3 border-[#D2FF00] pl-3.5 pr-1">
                      "For over 13 years, our singular commitment has been empowering diploma engineering students with deep technical fundamentals and top-rank guidance."
                    </p>
                    <p className="text-xs text-white/80 leading-relaxed pt-1">
                      Mentored 2,000+ alumni to achieve top ranks in ECET, POLYCET, and SBTET board exams through structured problem-solving drills.
                    </p>
                  </div>
                </div>

                {/* Director Micro Stats (2 Boxes) */}
                <div className="grid grid-cols-2 gap-3 text-center pt-2">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <span className="block text-[10px] uppercase font-bold text-white/60 mb-0.5">Experience</span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#D2FF00]">13+ Yrs</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <span className="block text-[10px] uppercase font-bold text-white/60 mb-0.5">Alumni Mentored</span>
                    <span className="text-xs sm:text-sm font-extrabold text-white">2,000+</span>
                  </div>
                </div>
              </motion.div>

              {/* CARD 2: SYED AHMED MOHI UDDIN QUADRI (CO-FOUNDER) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="bg-white/5 backdrop-blur-xl p-5 sm:p-8 rounded-3xl border border-white/15 shadow-2xl flex flex-col justify-between space-y-6 overflow-hidden w-full"
              >
                <div className="space-y-5">
                  {/* Co-Founder Header & Profile Frame */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-[#25176E] via-[#372692] to-[#120A3E] border-2 border-emerald-400/50 flex items-center justify-center shadow-xl shrink-0">
                      <Shield className="w-14 h-14 text-emerald-300 stroke-[1.2]" />
                    </div>

                    <div className="space-y-1.5 w-full min-w-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-400 text-[#1B1054] text-[10px] sm:text-xs font-black uppercase tracking-wider">
                        CO-FOUNDER
                      </span>
                      <h3 className="font-display-saasmo text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-snug break-words">
                        Syed Ahmed Mohi Uddin Quadri
                      </h3>
                      <p className="text-xs font-semibold text-emerald-300 leading-relaxed break-words">
                        M.E. • MS in Cyber Security (Australia)
                      </p>
                    </div>
                  </div>

                  {/* Co-Founder Vision Box (Responsive & Properly Spaced) */}
                  <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 space-y-2.5 overflow-hidden">
                    <p className="text-xs sm:text-sm text-white/95 leading-relaxed italic border-l-3 border-emerald-400 pl-3.5 pr-1">
                      "Bridging academic engineering fundamentals with international technical standards and cyber security excellence."
                    </p>
                    <p className="text-xs text-white/80 leading-relaxed pt-1">
                      Bringing global academic expertise from Australia in MS in Cyber Security and M.E. background to mentor students for competitive technical careers.
                    </p>
                  </div>
                </div>

                {/* Co-Founder Micro Stats (2 Balanced Responsive Boxes) */}
                <div className="grid grid-cols-2 gap-3 text-center pt-2">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <span className="block text-[10px] uppercase font-bold text-white/60 mb-0.5">Qualification</span>
                    <span className="text-xs sm:text-sm font-extrabold text-white">M.E.</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                    <span className="block text-[10px] uppercase font-bold text-white/60 mb-0.5">Specialization</span>
                    <span className="text-xs sm:text-sm font-extrabold text-emerald-300">MS Cyber Security (Australia)</span>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
