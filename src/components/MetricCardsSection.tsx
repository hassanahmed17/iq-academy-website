"use client";

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Sparkles } from "lucide-react";

const INK = "#17153A";
const PAPER = "#F4F1FC";
const CARD_TINT = "#FBFAFF";
const LIME = "#D7FF3F";

type ExamKey = "POLYCET" | "ECET";

interface ExamInfo {
  tabLabel: string;
  statLabel: string;
  rank: number;
  description: string;
}

const EXAM_DATA: Record<ExamKey, ExamInfo> = {
  POLYCET: {
    tabLabel: "POLYCET '26",
    statLabel: "POLYCET 2026 STATE RANK",
    rank: 874, // placeholder — swap in the real POLYCET '26 rank
    description:
      "Top Telangana state ranks achieved by IQ Academy students in the POLYCET entrance exam.",
  },
  ECET: {
    tabLabel: "ECET '26",
    statLabel: "ECET 2026 STATE RANK",
    rank: 1042,
    description:
      "Top Telangana state ranks achieved by IQ Academy students in the ECET entrance exam.",
  },
};

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia !== undefined &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function useCountUp(target: number, active: boolean, decimals = 0, duration = 1000) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) {
      setDisplay(0);
      return;
    }
    if (prefersReducedMotion()) {
      setDisplay(target);
      return;
    }
    const start = performance.now();
    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = target * eased;
      setDisplay(value);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, active, duration]);

  return decimals > 0 ? display.toFixed(decimals) : Math.round(display);
}

function Badge({ children, dot }: { children: React.ReactNode; dot: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
      style={{ backgroundColor: "rgba(255,255,255,0.85)", color: INK, letterSpacing: "0.06em" }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dot }} />
      {children}
    </span>
  );
}

function Sparkline() {
  return (
    <div className="p-1.5 rounded-xl bg-[#F0EBFF] border border-[rgba(23,21,58,0.08)] flex items-center justify-center shrink-0">
      <svg width="42" height="28" viewBox="-4 -4 48 36" fill="none" className="overflow-visible">
        <path
          d="M2 22 L11 15 L20 18 L29 8 L38 4"
          stroke={INK}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.65"
        />
        {[
          [2, 22],
          [11, 15],
          [20, 18],
          [29, 8],
          [38, 4],
        ].map(([x, y], i) => (
          <circle 
            key={i} 
            cx={x} 
            cy={y} 
            r={i === 4 ? 3.5 : 2} 
            fill={i === 4 ? LIME : INK} 
            stroke={i === 4 ? INK : "none"} 
            strokeWidth={i === 4 ? 1.5 : 0} 
            opacity={i === 4 ? 1 : 0.65} 
          />
        ))}
      </svg>
    </div>
  );
}

function RibbonWatermark() {
  return (
    <svg
      className="absolute -right-3 -top-3 pointer-events-none"
      width="140"
      height="150"
      viewBox="0 0 140 150"
      fill="none"
      style={{ opacity: 0.1 }}
    >
      <circle cx="70" cy="55" r="42" fill={INK} />
      <path d="M45 90 L38 148 L70 128 L102 148 L95 90 Z" fill={INK} />
      <path d="M60 55 L67 63 L82 46" stroke={PAPER} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExamToggle({ active, onChange }: { active: ExamKey; onChange: (key: ExamKey) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [rect, setRect] = useState<{ left: number; width: number } | null>(null);

  const updateRect = React.useCallback(() => {
    const btn = btnRefs.current[active];
    const container = containerRef.current;
    if (btn && container) {
      const c = container.getBoundingClientRect();
      const b = btn.getBoundingClientRect();
      if (b.width > 0) {
        setRect({ left: b.left - c.left, width: b.width });
      }
    }
  }, [active]);

  useLayoutEffect(() => {
    updateRect();
    const raf = requestAnimationFrame(updateRect);
    const timer = setTimeout(updateRect, 60);
    window.addEventListener("resize", updateRect);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener("resize", updateRect);
    };
  }, [updateRect]);

  const keys = Object.keys(EXAM_DATA) as ExamKey[];
  const activeIndex = keys.indexOf(active);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex p-1 rounded-full w-auto"
      style={{ backgroundColor: "rgba(23,21,58,0.1)" }}
      role="tablist"
      aria-label="Select exam"
    >
      <div
        className="absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-out"
        style={{
          backgroundColor: INK,
          left: rect && rect.width > 0 ? rect.left : activeIndex === 0 ? "4px" : "calc(50% + 2px)",
          width: rect && rect.width > 0 ? rect.width : "calc(50% - 6px)",
        }}
      />
      {keys.map((key) => {
        const exam = EXAM_DATA[key];
        const isActive = active === key;
        return (
          <button
            key={key}
            ref={(el) => {
              btnRefs.current[key] = el;
            }}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(key)}
            className="relative z-10 rounded-full px-3 py-1 text-xs font-bold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
            style={{ color: isActive ? LIME : "rgba(23,21,58,0.55)" }}
          >
            {exam.tabLabel}
          </button>
        );
      })}
    </div>
  );
}

export default function MetricCardsSection() {
  const [activeExam, setActiveExam] = useState<ExamKey>("ECET");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const gpa = useCountUp(9.8, visible, 1, 1100);
  const rank = useCountUp(EXAM_DATA[activeExam].rank, visible, 0, 900);

  return (
    <section
      ref={sectionRef}
      className="pt-6 pb-12 sm:py-16 px-4 sm:px-6 relative border-t border-[#EBE6FE]"
      style={{
        backgroundColor: PAPER,
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(23,21,58,0.07) 1px, transparent 0)",
        backgroundSize: "18px 18px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className={`flex justify-center mb-6 sm:mb-10 transition-all duration-700 ease-out ${visible ? "opacity-100 scale-100" : "opacity-0 scale-98"}`}>
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold uppercase shadow-xs"
          style={{ backgroundColor: "white", color: INK, letterSpacing: "0.08em", border: "1px solid rgba(23,21,58,0.08)" }}
        >
          <Sparkles size={12} />
          Key Academic Benchmarks
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 max-w-3xl mx-auto items-start">
        {/* Card 1 — Highest GPA (quiet) */}
        <div
          className={`sm:col-span-5 p-5 sm:p-6 flex flex-col transition-all duration-700 ease-out delay-100 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-98"
          }`}
          style={{
            backgroundColor: CARD_TINT,
            border: "1px solid rgba(23,21,58,0.08)",
            borderRadius: "22px",
            boxShadow: "0 1px 2px rgba(23,21,58,0.04)",
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <Sparkline />
            <Badge dot="#22C55E">Top Score</Badge>
          </div>

          <h3 className="font-bold text-sm sm:text-base mb-0.5" style={{ color: INK }}>
            Highest GPA
          </h3>
          <p className="text-xs sm:text-sm mb-4" style={{ color: "rgba(23,21,58,0.45)" }}>
            SBTET Diploma Semester Exam
          </p>

          <div className="h-px mb-4" style={{ backgroundColor: "rgba(23,21,58,0.08)" }} />

          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="stat-numeral text-5xl font-bold tabular-nums" style={{ color: INK }}>
              {gpa}
            </span>
            <span className="text-sm sm:text-base font-semibold" style={{ color: "rgba(23,21,58,0.35)" }}>
              GPA
            </span>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed mt-auto" style={{ color: "rgba(23,21,58,0.55)" }}>
            Highest GPA achieved by IQ Academy students in previous SBTET semester examinations.
          </p>
        </div>

        {/* Card 2 — State Rank (hero, stamped) */}
        <div className={`sm:col-span-7 relative sm:mt-[-10px] transition-all duration-700 ease-out delay-200 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-98"
        }`}>
          <div
            className="absolute inset-0 rounded-[22px]"
            style={{ backgroundColor: INK, transform: "rotate(1.4deg) translate(4px, 6px)", zIndex: 0 }}
          />
          <div
            className="relative overflow-hidden p-5 sm:p-6 flex flex-col transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: LIME,
              borderRadius: "22px",
              transform: "rotate(-0.6deg)",
              boxShadow: "0 10px 20px -6px rgba(23,21,58,0.22)",
              zIndex: 1,
            }}
          >
            <RibbonWatermark />

            <div className="flex items-start justify-between mb-4 relative">
              <ExamToggle active={activeExam} onChange={setActiveExam} />
              <Badge dot={INK}>Top Rank</Badge>
            </div>

            <div className="h-px mb-4" style={{ backgroundColor: "rgba(23,21,58,0.15)" }} />

            <p
              className="text-[11px] font-bold uppercase mb-1.5 relative"
              style={{ color: "rgba(23,21,58,0.6)", letterSpacing: "0.08em" }}
            >
              {EXAM_DATA[activeExam].statLabel}
            </p>
            <div className="mb-2 relative">
              <span className="stat-numeral text-4xl sm:text-5xl font-bold tabular-nums" style={{ color: INK }}>
                Rank #{rank}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-medium leading-relaxed mt-auto relative" style={{ color: "rgba(23,21,58,0.75)" }}>
              {EXAM_DATA[activeExam].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
