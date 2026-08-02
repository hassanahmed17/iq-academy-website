"use client";

import React, { useState, useEffect, useRef } from "react";
import { BookOpen, Target, Users, ShieldCheck, CheckCircle2, Check } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function AboutUsSection() {
  // Independent refs for each card viewport
  const heroCardRef = useRef<HTMLDivElement>(null);
  const facultyCardRef = useRef<HTMLDivElement>(null);
  const barChartCardRef = useRef<HTMLDivElement>(null);

  // Card 1 State (SBTET Loading Bar & Branch Chips)
  const [progressValue, setProgressValue] = useState(0);
  const [visibleBranchesCount, setVisibleBranchesCount] = useState(0);

  // Card 4 State (Weekly Test Bar Graph Scale States)
  const [barScales, setBarScales] = useState<number[]>([0, 0, 0, 0]);

  // Card 3 Faculty Avatars Animated Count
  const [visibleAvatarsCount, setVisibleAvatarsCount] = useState(0);

  const branches = ["CSE", "ECE", "EEE", "MECH", "CIVIL", "AI/ML"];

  const barConfigs = [
    { height: "28px", opacity: 0.45 },
    { height: "38px", opacity: 0.65 },
    { height: "48px", opacity: 0.85 },
    { height: "60px", opacity: 1.0 },
  ];

  // 1. Silky-Smooth Card 1 Animation (SBTET Loading Bar 0% -> 100% ONCE on scroll into view)
  useEffect(() => {
    const target = heroCardRef.current;
    if (!target) return;

    let progressTimer: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProgressValue(0);
            setVisibleBranchesCount(0);

            const duration = 2500;
            const steps = 50;
            const stepTime = duration / steps;
            let currentStep = 0;

            progressTimer = setInterval(() => {
              currentStep++;
              const p = Math.min(100, Math.floor((currentStep / steps) * 100));
              setProgressValue(p);

              if (currentStep >= steps) {
                setProgressValue(100);
                clearInterval(progressTimer);
              }
            }, stepTime);

            branches.forEach((_, index) => {
              setTimeout(() => {
                setVisibleBranchesCount((prev) => Math.max(prev, index + 1));
              }, 300 + index * 200);
            });
          } else {
            setProgressValue(0);
            setVisibleBranchesCount(0);
            if (progressTimer) clearInterval(progressTimer);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
      if (progressTimer) clearInterval(progressTimer);
    };
  }, []);

  // 2. Minimal Staggered Slide-to-the-Right Animation for Faculty Avatars (ONCE on scroll into view)
  useEffect(() => {
    const target = facultyCardRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleAvatarsCount(0);

            [0, 1, 2].forEach((idx) => {
              setTimeout(() => {
                setVisibleAvatarsCount((prev) => Math.max(prev, idx + 1));
              }, 250 + idx * 180);
            });
          } else {
            setVisibleAvatarsCount(0);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // 3. High-End 1-by-1 Bottom-to-Top Bar Graph Rising Animation (ONCE on scroll into view)
  useEffect(() => {
    const target = barChartCardRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBarScales([0, 0, 0, 0]);

            barConfigs.forEach((_, index) => {
              setTimeout(() => {
                setBarScales((prev) => {
                  const next = [...prev];
                  next[index] = 1;
                  return next;
                });
              }, 250 + index * 320);
            });
          } else {
            setBarScales([0, 0, 0, 0]);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section id="about" className="py-16 sm:py-20 relative bg-[#F6F4FE] overflow-hidden">

      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#D8CEFE]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#D2FF00]/15 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >

        {/* Section Header */}
        <motion.div variants={cardVariants} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0EBFF] text-[#25176E] text-xs font-extrabold uppercase tracking-widest border border-[#EBE6FE]">
            <span>THE IQ ACADEMY ADVANTAGE</span>
          </div>
          <h2 className="font-display-saasmo text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#1E1266]">
            Proven Coaching for Diploma Academic Success
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            From SBTET Board exams to core engineering fundamentals, we provide the exact syllabus coverage, regular practice tests, and faculty guidance you need to excel.
          </p>
        </motion.div>

        {/* Clean Bento Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Bento Card 1: Complete SBTET Curriculum Coverage */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            ref={heroCardRef}
            className="rounded-[28px] sm:rounded-[32px] bg-[#FFFFFF] p-5 sm:p-8 shadow-lg border border-[#EBE6FE] relative overflow-hidden flex flex-col justify-between group transition-all duration-300"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#25176E] text-[#D2FF00] flex items-center justify-center font-bold shadow-md">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold text-[#25176E] bg-[#F0EBFF] px-3 py-1 rounded-full border border-[#EBE6FE]">
                  STATE BOARD SYLLABUS
                </span>
              </div>

              <div>
                <h3 className="font-display-saasmo text-xl sm:text-2xl font-extrabold text-[#1E1266] mb-2">
                  Complete SBTET Curriculum Coverage
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Step-by-step coaching covering every subject unit, core technical concepts, and previous years' board exam questions across all major engineering branches.
                </p>
              </div>

              {/* Smooth Silky Loading Bar & Animated Percentage Counter */}
              <div className="p-4 rounded-2xl bg-[#F6F4FE] border border-[#EBE6FE] space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-[#1E1266]">
                  <span className="flex items-center gap-1.5 text-[#25176E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>SBTET Board Exam Readiness</span>
                  </span>

                  <span className="text-[#25176E] font-black text-sm font-mono" suppressHydrationWarning={true}>
                    {progressValue}% Covered
                  </span>
                </div>

                {/* Smooth Loading Progress Bar Width */}
                <div className="w-full h-3 bg-[#EBE6FE] rounded-full overflow-hidden p-0.5 shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-[#25176E] via-[#3c289e] to-[#4b33c3] rounded-full transition-all duration-75 ease-linear shadow-sm"
                    style={{ width: `${progressValue}%` }}
                    suppressHydrationWarning={true}
                  />
                </div>

                {/* Branch Micro Chips Appearing 1-by-1 with Right Ticks */}
                <div className="flex flex-wrap gap-1.5 pt-1 min-h-[34px] items-center">
                  {branches.map((branch, index) => {
                    const isVisible = index < visibleBranchesCount;
                    return (
                      <span
                        key={branch}
                        className={`px-2.5 py-0.5 rounded-md text-[11px] font-extrabold tracking-wider border transition-all duration-300 flex items-center gap-1 ${isVisible
                            ? "bg-white text-[#25176E] border-[#25176E]/20 shadow-xs scale-100 opacity-100"
                            : "bg-transparent text-transparent border-transparent scale-90 opacity-0 pointer-events-none"
                          }`}
                      >
                        <Check className="w-3 h-3 text-emerald-600 font-bold" />
                        <span>{branch}</span>
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        </motion.div>

          {/* Feature Card 1: Experienced Engineering Faculty */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            ref={facultyCardRef}
            className="rounded-[32px] bg-white p-7 shadow-lg border border-[#EBE6FE] flex flex-col justify-between group transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#F0EBFF] text-[#25176E] flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-extrabold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                  EXPERT EDUCATORS
                </span>
              </div>

              <h3 className="font-display-saasmo text-lg font-bold text-[#1E1266]">
                Experienced Engineering Faculty
              </h3>

              <p className="text-xs text-[#64748B] leading-relaxed">
                Learn from senior educators with 5+ years of diploma coaching expertise who break down complex technical topics clearly.
              </p>

              {/* Faculty Avatar Stack Animating to the Right 1-by-1 */}
              <div className="p-3.5 rounded-2xl bg-[#F6F4FE] border border-[#EBE6FE] space-y-2 overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center -space-x-2 relative min-w-[80px]">
                    <div
                      className={`w-7 h-7 rounded-full bg-[#25176E] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white transition-all duration-500 ease-out shadow-xs ${visibleAvatarsCount >= 1
                          ? "opacity-100 translate-x-0 scale-100"
                          : "opacity-0 -translate-x-4 scale-75"
                        }`}
                    >
                      M.T
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full bg-[#3c289e] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white transition-all duration-500 ease-out shadow-xs ${visibleAvatarsCount >= 2
                          ? "opacity-100 translate-x-0 scale-100"
                          : "opacity-0 -translate-x-4 scale-75"
                        }`}
                    >
                      Ph.D
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full bg-[#25176E] text-[#D2FF00] flex items-center justify-center text-[10px] font-bold border-2 border-white transition-all duration-500 ease-out shadow-xs ${visibleAvatarsCount >= 3
                          ? "opacity-100 translate-x-0 scale-100"
                          : "opacity-0 -translate-x-4 scale-75"
                        }`}
                    >
                      5+Y
                    </div>
                  </div>

                  <span className="text-[11px] font-extrabold text-[#25176E] bg-white px-2.5 py-0.5 rounded-full border border-[#EBE6FE] faculty-badge-anim">
                    5+ Years Mentors
                  </span>
                </div>

                <p className="text-[10px] text-[#64748B] font-medium leading-tight">
                  Dedicated Senior Polytechnic Mentors
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature Card 2: Weekly Academic Performance Tests */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            ref={barChartCardRef}
            className="rounded-[32px] bg-white p-7 shadow-lg border border-[#EBE6FE] flex flex-col justify-between group transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#F0EBFF] text-[#25176E] flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-extrabold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                  WEEKLY EVALUATION
                </span>
              </div>

              <h3 className="font-display-saasmo text-lg font-bold text-[#1E1266]">
                Weekly Academic Performance Tests
              </h3>

              <p className="text-xs text-[#64748B] leading-relaxed">
                Regular weekend chapter tests designed to track your understanding and ensure steady academic grade improvement.
              </p>

              {/* Bottom-to-Top 1-by-1 Staggered Rising Bar Chart Widget */}
              <div className="p-4 rounded-2xl bg-[#F6F4FE] border border-[#EBE6FE] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#1E1266]">
                  <span className="text-[#25176E]">Academic Evaluation</span>
                  <span className="text-[#25176E] font-extrabold">Weekly Progress</span>
                </div>

                {/* 4 Performance Bars Animating 1-BY-1 from bottom to top */}
                <div className="flex items-end gap-3 h-[68px] pt-1 border-b border-[#EBE6FE] pb-1">
                  {barConfigs.map((config, idx) => {
                    const scaleY = barScales[idx];
                    return (
                      <div
                        key={idx}
                        className="flex-1 rounded-md bg-[#25176E] shadow-sm"
                        style={{
                          height: config.height,
                          opacity: config.opacity,
                          transform: `scaleY(${scaleY})`,
                          transformOrigin: "bottom",
                          transition: "transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Card 3: Daily 1-on-1 Doubt Clarification */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="rounded-[32px] bg-white p-7 shadow-lg border border-[#EBE6FE] flex flex-col justify-between group transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#F0EBFF] text-[#25176E] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  1-ON-1 SESSIONS
                </span>
              </div>

              <h3 className="font-display-saasmo text-lg font-bold text-[#1E1266]">
                Daily 1-on-1 Doubt Clarification
              </h3>

              <p className="text-xs text-[#64748B] leading-relaxed">
                Never get stuck on a difficult problem. Dedicated daily doubt-clearing sessions ensure 100% conceptual clarity for every student.
              </p>

              {/* Doubt Clearing Desk Widget */}
              <div className="p-3.5 rounded-2xl bg-[#F6F4FE] border border-[#EBE6FE] flex items-center gap-2 text-xs font-medium text-[#1E1266]">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="truncate text-[11px] text-[#64748B]">Daily Evening Doubt Desk</span>
              </div>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
