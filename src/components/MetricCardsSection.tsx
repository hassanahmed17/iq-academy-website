"use client";

import React, { useState, useEffect, useRef } from "react";
import { Award, TrendingUp, Sparkles } from "lucide-react";
import gsap from "gsap";

export default function MetricCardsSection() {
  const [gpa, setGpa] = useState(0);
  const [activeTab, setActiveTab] = useState<"POLYCET" | "ECET">("POLYCET");
  const [displayedRank, setDisplayedRank] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<"POLYCET" | "ECET">("POLYCET");

  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

  const rankValues = {
    POLYCET: 1714,
    ECET: 1042,
  };

  const triggerScrollNumberAnimations = () => {
    // 1. Highest GPA Ticker (0.0 to 9.8)
    const gpaDuration = 1200;
    const gpaSteps = 35;
    const gpaStepTime = gpaDuration / gpaSteps;
    let gpaStep = 0;

    setGpa(0);
    const gpaTimer = setInterval(() => {
      gpaStep++;
      const progress = gpaStep / gpaSteps;
      setGpa(Number((progress * 9.8).toFixed(1)));

      if (gpaStep >= gpaSteps) {
        setGpa(9.8);
        clearInterval(gpaTimer);
      }
    }, gpaStepTime);

    // 2. Rank Ticker
    const targetRank = rankValues[activeTabRef.current];
    const rankDuration = 1200;
    const rankSteps = 35;
    const rankStepTime = rankDuration / rankSteps;
    let rankStep = 0;

    setDisplayedRank(0);
    const rankTimer = setInterval(() => {
      rankStep++;
      const progress = rankStep / rankSteps;
      setDisplayedRank(Math.floor(progress * targetRank));

      if (rankStep >= rankSteps) {
        setDisplayedRank(targetRank);
        clearInterval(rankTimer);
      }
    }, rankStepTime);
  };

  useEffect(() => {
    const targetElement = sectionRef.current;
    if (!targetElement) return;

    let isFirstMount = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              ".stripe-metric-card",
              { y: 25, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, stagger: 0.14, ease: "power2.out" }
            );
            triggerScrollNumberAnimations();
          } else {
            if (!isFirstMount) {
              setGpa(0);
              setDisplayedRank(0);
            }
          }
          isFirstMount = false;
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(targetElement);

    return () => {
      if (targetElement) observer.unobserve(targetElement);
    };
  }, []);

  const handleTabSwitch = (tab: "POLYCET" | "ECET") => {
    if (tab === activeTab) return;

    setActiveTab(tab);

    const target = rankValues[tab];
    const duration = 700;
    const steps = 25;
    const stepTime = duration / steps;
    let step = 0;

    setDisplayedRank(0);
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setDisplayedRank(Math.floor(progress * target));

      if (step >= steps) {
        setDisplayedRank(target);
        clearInterval(timer);
      }
    }, stepTime);

    if (sectionRef.current) {
      gsap.fromTo(
        ".rank-number-text",
        { y: 6, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
      );
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-[#F6F4FE] relative border-t border-[#EBE6FE]" ref={sectionRef} suppressHydrationWarning={true}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header / Tag */}
        <div className="text-center mb-5 sm:mb-7">
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#25176E] bg-[#F0EBFF] px-3.5 py-1 rounded-full border border-[#EBE6FE]">
            <Sparkles className="w-3.5 h-3.5 text-[#25176E]" />
            <span>Key Academic Benchmarks</span>
          </span>
        </div>

        {/* 2-Column Compact Responsive Metric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto items-stretch">
          
          {/* Card 1: Highest GPA */}
          <div className="stripe-metric-card saasmo-white-card p-4 sm:p-5 relative shadow-md border border-[#EBE6FE] flex flex-col justify-between rounded-2xl group hover:border-[#25176E]/30 transition-all">
            <div className="flex items-start justify-between gap-2 mb-3 sm:mb-4">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F0EBFF] text-[#25176E] flex items-center justify-center font-bold shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-display-saasmo font-extrabold text-sm sm:text-base text-[#1E1266] leading-snug">
                    Highest GPA
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B] font-semibold leading-tight">
                    SBTET Diploma Semester Exam
                  </p>
                </div>
              </div>
              
              <span className="text-[9px] sm:text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 shrink-0">
                Top Score
              </span>
            </div>

            <div className="pt-2 border-t border-[#F0EBFF]">
              <div className="font-display-saasmo text-3xl sm:text-4xl font-extrabold text-[#1E1266] tracking-tight leading-none ticker-number-anim my-1" suppressHydrationWarning={true}>
                {gpa.toFixed(1)} <span className="text-lg sm:text-xl font-bold text-[#25176E]/70">GPA</span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#64748B] mt-1.5 font-medium leading-relaxed">
                Highest GPA achieved by IQ Academy students in previous SBTET semester examinations.
              </p>
            </div>
          </div>

          {/* Card 2: POLYCET '26 & ECET '26 Ranks */}
          <div className="stripe-metric-card rounded-2xl bg-[#D2FF00] p-4 sm:p-5 text-[#1B1054] shadow-md flex flex-col justify-between border border-lime-300">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="bg-[#1B1054]/15 p-0.5 rounded-full inline-flex items-center border border-[#1B1054]/10 shadow-inner">
                <button
                  type="button"
                  onClick={() => handleTabSwitch("POLYCET")}
                  className={`px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wider transition-all duration-300 ${
                    activeTab === "POLYCET"
                      ? "bg-[#1B1054] text-[#D2FF00] shadow-xs scale-102"
                      : "text-[#1B1054]/80 hover:text-[#1B1054]"
                  }`}
                  suppressHydrationWarning={true}
                >
                  POLYCET &apos;26
                </button>
                <button
                  type="button"
                  onClick={() => handleTabSwitch("ECET")}
                  className={`px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wider transition-all duration-300 ${
                    activeTab === "ECET"
                      ? "bg-[#1B1054] text-[#D2FF00] shadow-xs scale-102"
                      : "text-[#1B1054]/80 hover:text-[#1B1054]"
                  }`}
                  suppressHydrationWarning={true}
                >
                  ECET &apos;26
                </button>
              </div>

              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1B1054]/10 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-[#1B1054]" />
              </div>
            </div>

            <div className="pt-2 border-t border-[#1B1054]/15">
              <p className="text-[11px] sm:text-xs font-bold opacity-80 uppercase tracking-wider my-0.5" suppressHydrationWarning={true}>
                {activeTab} 2026 State Rank
              </p>
              <h3 className="font-display-saasmo text-3xl sm:text-4xl font-extrabold text-[#1B1054] tracking-tight leading-none rank-number-text my-1" suppressHydrationWarning={true}>
                Rank #{displayedRank}
              </h3>
              <p className="text-[11px] sm:text-xs font-bold opacity-85 mt-1.5 leading-relaxed" suppressHydrationWarning={true}>
                Top Telangana state ranks achieved by IQ Academy students in {activeTab} entrance exam.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
