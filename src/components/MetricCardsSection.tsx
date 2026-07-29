"use client";

import React, { useState, useEffect, useRef } from "react";
import { Award, Cpu, TrendingUp } from "lucide-react";
import gsap from "gsap";

export default function MetricCardsSection() {
  const [passRate, setPassRate] = useState(0);
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
    // 1. Pass Rate Ticker
    const passDuration = 1400;
    const passSteps = 40;
    const passStepTime = passDuration / passSteps;
    let passStep = 0;

    setPassRate(0);
    const passTimer = setInterval(() => {
      passStep++;
      const progress = passStep / passSteps;
      setPassRate(Number((progress * 98.4).toFixed(1)));

      if (passStep >= passSteps) {
        setPassRate(98.4);
        clearInterval(passTimer);
      }
    }, passStepTime);

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
              { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power2.out" }
            );
            triggerScrollNumberAnimations();
          } else {
            if (!isFirstMount) {
              setPassRate(0);
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
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F6F4FE] relative border-t border-[#EBE6FE]" ref={sectionRef} suppressHydrationWarning={true}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header / Tag */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#25176E] bg-[#F0EBFF] px-3 sm:px-3.5 py-1.5 rounded-full border border-[#EBE6FE]">
            Key Performance Metrics
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch">
          
          {/* Card 1: Academic Performance */}
          <div className="stripe-metric-card saasmo-white-card p-4 sm:p-6 relative shadow-lg border border-[#EBE6FE] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#F0EBFF] text-[#25176E] flex items-center justify-center font-bold shrink-0">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h3 className="font-display-saasmo font-bold text-sm sm:text-lg text-[#1E1266]">
                    Academic Performance
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#64748B]">Student Achievement</p>
                </div>
              </div>
              
              <span className="text-[9px] sm:text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-emerald-200 shrink-0">
                Top Performer
              </span>
            </div>

            <div className="pt-1 sm:pt-2">
              <div className="font-display-saasmo text-3xl sm:text-4xl font-extrabold text-[#1E1266] ticker-number-anim" suppressHydrationWarning={true}>
                {passRate}%
              </div>
              <p className="text-[10px] sm:text-xs text-[#64748B] mt-0.5 sm:mt-1 font-medium">Highest Score Achieved</p>
            </div>
          </div>

          {/* Card 2: Interactive POLYCET / ECET Rank Switcher */}
          <div className="stripe-metric-card rounded-2xl bg-[#D2FF00] p-4 sm:p-6 text-[#1B1054] shadow-md flex flex-col justify-between border border-lime-300 min-h-[140px] sm:min-h-[160px]">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-[#1B1054]/15 p-0.5 rounded-full inline-flex items-center border border-[#1B1054]/10 shadow-inner">
                <button
                  type="button"
                  onClick={() => handleTabSwitch("POLYCET")}
                  className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-extrabold tracking-wider transition-all duration-300 ${
                    activeTab === "POLYCET"
                      ? "bg-[#1B1054] text-[#D2FF00] shadow-xs scale-102"
                      : "text-[#1B1054]/80 hover:text-[#1B1054]"
                  }`}
                  suppressHydrationWarning={true}
                >
                  POLYCET
                </button>
                <button
                  type="button"
                  onClick={() => handleTabSwitch("ECET")}
                  className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-extrabold tracking-wider transition-all duration-300 ${
                    activeTab === "ECET"
                      ? "bg-[#1B1054] text-[#D2FF00] shadow-xs scale-102"
                      : "text-[#1B1054]/80 hover:text-[#1B1054]"
                  }`}
                  suppressHydrationWarning={true}
                >
                  ECET
                </button>
              </div>

              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#1B1054] shrink-0" />
            </div>

            <div>
              <p className="text-[10px] sm:text-xs font-semibold opacity-80" suppressHydrationWarning={true}>
                {activeTab} Highest Rank Achieved
              </p>
              <h3 className="font-display-saasmo text-3xl sm:text-4xl font-extrabold text-[#1B1054] tracking-tight my-0.5 sm:my-1 rank-number-text" suppressHydrationWarning={true}>
                {displayedRank}
              </h3>
              <p className="text-[10px] sm:text-[11px] font-bold opacity-80">
                Among IQ Academy Students
              </p>
            </div>
          </div>

          {/* Card 3: Specialized Branches (Includes AI/ML + Increased Spacing below heading) */}
          <div className="stripe-metric-card rounded-2xl bg-[#25176E] p-4 sm:p-6 text-white shadow-md flex flex-col justify-between border border-[#3b279b] min-h-[140px] sm:min-h-[160px]">
            <div className="flex items-center justify-between mb-4 sm:mb-4">
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#D2FF00]">
                SPECIALIZED BRANCHES
              </span>
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-[#D2FF00]" />
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 my-2">
                {["CSE", "ECE", "EEE", "MECH", "CIVIL", "AI/ML"].map((branch) => (
                  <span
                    key={branch}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white/12 text-white font-extrabold text-[10px] sm:text-xs tracking-wider border border-white/15 shadow-2xs"
                  >
                    {branch}
                  </span>
                ))}
              </div>
              <p className="text-[10px] sm:text-xs text-white/80 font-medium leading-tight mt-2 sm:mt-2.5">
                Focused Coaching for Diploma Students
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
