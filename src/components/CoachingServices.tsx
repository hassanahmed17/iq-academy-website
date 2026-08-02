"use client";

import React from "react";
import { CheckCircle2, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";

export default function CoachingServices() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.02,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="coaching" className="py-16 sm:py-20 relative bg-white border-y border-[#EBE6FE] overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Header */}
        <motion.div variants={cardVariants} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBFF] text-[#25176E] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#25176E]" />
            <span>Entrance Exam Specialization</span>
          </div>
          <h2 className="font-display-saasmo text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#1E1266]">
            Specialized Entrance Exam Coaching
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            Targeted preparation for POLYCET, ECET, and TS EAPCET entrance examinations.
          </p>
        </motion.div>

        {/* 3 Featured Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Module 1: POLYCET Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            id="exam-polycet"
            className="saasmo-indigo-card p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between rounded-3xl border border-[#372692]"
          >
            <GradientBackground
              gradientOrigin="top-left"
              colors={[
                { color: "rgba(30,18,102,1)", stop: "0%" },
                { color: "rgba(43,26,138,1)", stop: "50%" },
                { color: "rgba(20,11,70,1)", stop: "100%" }
              ]}
              noiseIntensity={0.6}
              noisePatternSize={90}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#D2FF00] text-[#1B1054] text-[11px] sm:text-xs font-extrabold shadow-sm">
                  POST-10TH DIPLOMA ENTRANCE
                </span>
                <BookOpen className="w-5 h-5 text-[#D2FF00]" />
              </div>

              <h3 className="font-display-saasmo text-2xl sm:text-3xl font-bold text-white mb-2">
                POLYCET Coaching
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-5">
                Complete preparation for Class 10 students aiming for top government polytechnic colleges.
              </p>

              <div className="space-y-2.5 border-t border-white/10 pt-4 mb-6">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#D2FF00] shrink-0" />
                  <span>Comprehensive 10th Math, Physics & Chemistry</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#D2FF00] shrink-0" />
                  <span>Previous 15 Years POLYCET Solved Papers</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#D2FF00] shrink-0" />
                  <span>30+ Grand Mock Examinations</span>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <a
                href="#contact-form-block"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-form-block")?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#D2FF00] text-[#1B1054] font-extrabold text-xs sm:text-sm hover:bg-lime-400 active:scale-95 transition-all shadow-md"
              >
                <span>Join POLYCET Batch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Module 2: ECET Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            id="exam-ecet"
            className="saasmo-white-card p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between rounded-3xl border border-[#EBE6FE]"
          >
            <GradientBackground
              gradientOrigin="bottom-right"
              colors={[
                { color: "rgba(248,246,254,1)", stop: "0%" },
                { color: "rgba(240,235,255,1)", stop: "60%" },
                { color: "rgba(230,220,255,1)", stop: "100%" }
              ]}
              noiseIntensity={0.4}
              noisePatternSize={100}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#F0EBFF] text-[#25176E] text-[11px] sm:text-xs font-extrabold border border-[#EBE6FE]">
                  BE / B.TECH LATERAL ENTRY
                </span>
                <BookOpen className="w-5 h-5 text-[#25176E]" />
              </div>

              <h3 className="font-display-saasmo text-2xl sm:text-3xl font-bold text-[#1E1266] mb-2">
                ECET Coaching
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-5">
                Dedicated coaching for diploma holders seeking 2nd-year BE / B.Tech lateral admission into top engineering colleges.
              </p>

              <div className="space-y-2.5 border-t border-[#EBE6FE] pt-4 mb-6">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1E1266]">
                  <CheckCircle2 className="w-4 h-4 text-[#25176E] shrink-0" />
                  <span>Branch Subjects (CSE, ECE, EEE, ME, CE) + Maths</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1E1266]">
                  <CheckCircle2 className="w-4 h-4 text-[#25176E] shrink-0" />
                  <span>High-yield Shortcut Formulas & Time Management</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1E1266]">
                  <CheckCircle2 className="w-4 h-4 text-[#25176E] shrink-0" />
                  <span>Regular Mock Tests for Better Ranks</span>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <a
                href="#contact-form-block"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-form-block")?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#1E1266] text-white font-extrabold text-xs sm:text-sm hover:bg-[#25176E] active:scale-95 transition-all shadow-md"
              >
                <span>Join ECET Batch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Module 3: TS EAPCET Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            id="exam-eapcet"
            className="saasmo-indigo-card p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between rounded-3xl border border-[#372692]"
          >
            <GradientBackground
              gradientOrigin="top-right"
              colors={[
                { color: "rgba(37,23,110,1)", stop: "0%" },
                { color: "rgba(25,14,80,1)", stop: "50%" },
                { color: "rgba(15,8,50,1)", stop: "100%" }
              ]}
              noiseIntensity={0.65}
              noisePatternSize={90}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#D2FF00] text-[#1B1054] text-[11px] sm:text-xs font-extrabold shadow-sm">
                  INTERMEDIATE B.TECH ENTRANCE
                </span>
                <BookOpen className="w-5 h-5 text-[#D2FF00]" />
              </div>

              <h3 className="font-display-saasmo text-2xl sm:text-3xl font-bold text-white mb-2">
                TS EAPCET (EAMCET)
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-5">
                Targeted coaching for Intermediate (Class 12) students aiming for top engineering & pharmacy universities across Telangana.
              </p>

              <div className="space-y-2.5 border-t border-white/10 pt-4 mb-6">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#D2FF00] shrink-0" />
                  <span>Comprehensive Inter 1st & 2nd Year Syllabus</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#D2FF00] shrink-0" />
                  <span>Concept-based Problem Solving</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#D2FF00] shrink-0" />
                  <span>Regular Mock Tests for Better Rank</span>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <a
                href="#contact-form-block"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-form-block")?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#D2FF00] text-[#1B1054] font-extrabold text-xs sm:text-sm hover:bg-lime-400 active:scale-95 transition-all shadow-md"
              >
                <span>Join TS EAPCET Batch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
