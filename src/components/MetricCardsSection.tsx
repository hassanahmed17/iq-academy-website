"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export type ExamFilter = "ALL" | "POLYCET" | "ECET";

export interface StudentAchiever {
  id: string;
  name: string;
  category: "POLYCET" | "ECET";
  rank: string;
  hallTicketNo: string; // 10+ digit Hall Ticket / Reg Number
  image?: string;
  objectPos?: string;
  imageClass?: string;
}

const achieversList: StudentAchiever[] = [
  // --- ECET TOPPERS ---
  {
    id: "1",
    name: "Syed Kamran Ahmed",
    category: "ECET",
    rank: "State Rank #48",
    hallTicketNo: "2401011116",
    image: "/images/toppers/kamran.png",
  },
  {
    id: "2",
    name: "Mohd Inzimam Ghori",
    category: "ECET",
    rank: "State Rank #54",
    hallTicketNo: "10404031058",
    image: "/images/toppers/inzimam.jpg",
  },
  {
    id: "3",
    name: "Mohammad Faizan",
    category: "ECET",
    rank: "State Rank #346",
    hallTicketNo: "2402051693",
    image: "/images/toppers/faizan.jpg",
  },
  {
    id: "4",
    name: "Mohammed Zaid Farooqi",
    category: "ECET",
    rank: "State Rank #402",
    hallTicketNo: "1201052001",
    image: "/images/toppers/zaidfarooqi.png",
    objectPos: "object-[center_10%]",
    imageClass: "-translate-y-[8%] scale-[1.1]",
  },

  // --- POLYCET TOPPERS ---
  {
    id: "5",
    name: "Syed Azam Uddin",
    category: "POLYCET",
    rank: "State Rank #1714",
    hallTicketNo: "2602332",
    image: "/images/toppers/azam.png",
    imageClass: "-translate-y-[15%] scale-[1.36]",
  },
  {
    id: "6",
    name: "Mohammed Muzakkir Ashraf",
    category: "POLYCET",
    rank: "State Rank #1792",
    hallTicketNo: "2604115",
    image: "/images/toppers/muzakkir.png",
  },
  {
    id: "7",
    name: "Mohd Zainullah Shareef",
    category: "POLYCET",
    rank: "State Rank #3059",
    hallTicketNo: "2601256",
    image: "/images/toppers/zainullah.png",
  },
  {
    id: "8",
    name: "Shaik Rizwan",
    category: "POLYCET",
    rank: "State Rank #5252",
    hallTicketNo: "2602114",
    image: "/images/toppers/rizwan.png",
  },
  {
    id: "9",
    name: "Mohammed Tauseef Uddin",
    category: "POLYCET",
    rank: "State Rank #5499",
    hallTicketNo: "2602051",
    image: "/images/toppers/tauseef.png",
    imageClass: "-translate-y-[15%] scale-[1.36]",
  },
  {
    id: "10",
    name: "Syed Aayan Uddin",
    category: "POLYCET",
    rank: "State Rank #5626",
    hallTicketNo: "2602521",
    image: "/images/toppers/aayan.png",
  },
  {
    id: "11",
    name: "Mohammed Ishaq Uddin",
    category: "POLYCET",
    rank: "State Rank #6756",
    hallTicketNo: "2601198",
    image: "/images/toppers/ishaq.png",
  },
];

export default function MetricCardsSection() {
  const [activeFilter, setActiveFilter] = useState<ExamFilter>("ALL");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredAchievers = achieversList.filter(
    (item) => activeFilter === "ALL" || item.category === activeFilter
  );

  const checkScroll = React.useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const canLeft = el.scrollLeft > 4;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const canRight = maxScroll > 4 && el.scrollLeft < maxScroll - 4;
    setCanScrollLeft(canLeft);
    setCanScrollRight(canRight);
  }, []);

  const handleFilterChange = (filter: ExamFilter) => {
    setActiveFilter(filter);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScroll();

    const handleScroll = () => checkScroll();
    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    const t1 = setTimeout(checkScroll, 50);
    const t2 = setTimeout(checkScroll, 250);
    const t3 = setTimeout(checkScroll, 600);

    const resizeObserver = new ResizeObserver(() => {
      checkScroll();
    });
    resizeObserver.observe(el);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      resizeObserver.disconnect();
    };
  }, [activeFilter, filteredAchievers, checkScroll]);

  const scrollLeft = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = Math.max(el.clientWidth * 0.75, 260);
      el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 350);
    }
  };

  const scrollRight = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = Math.max(el.clientWidth * 0.75, 260);
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section className="py-8 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative bg-[#F6F4FE]" id="top-ranks">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* ========================================================================= */}
        {/* 🏆 ULTRA-EXECUTIVE SAASMO INDIGO BANNER WITH GLASSMORPHIC POLISH          */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl sm:rounded-[36px] lg:rounded-[44px] p-5 sm:p-10 lg:p-12 text-white shadow-2xl overflow-hidden border border-[#372692]/60">

          {/* Exact Signature Indigo Noisy Gradient Background */}
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

          {/* Micro Flickering Grid Overlay */}
          <FlickeringGrid
            squareSize={4}
            gridGap={6}
            flickerChance={0.15}
            color="rgb(210, 255, 0)"
            maxOpacity={0.08}
            className="absolute inset-0 z-0 pointer-events-none opacity-20"
          />

          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-28 -right-28 w-96 h-96 bg-[#D2FF00]/12 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-[#5B3DF5]/30 rounded-full blur-3xl pointer-events-none" />

          {/* BANNER HEADER & RESPONSIVE SINGLE-ROW FILTER BAR */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative z-10 border-b border-white/10 pb-6">
            
            {/* Left Header Title */}
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[#D2FF00] text-xs font-black uppercase tracking-widest shadow-xs">
                <span>State Level Achievements</span>
              </div>
              
              <h2 className="font-display-saasmo text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Telangana State Top Ranks
              </h2>
              
              <p className="text-xs sm:text-sm text-white/70 max-w-lg font-medium leading-relaxed">
                Top state ranks secured by IQ Academy students in POLYCET and ECET entrance examinations.
              </p>
            </div>

            {/* Filter Buttons: Single-Row Segmented Controller */}
            <div className="w-full lg:w-auto flex items-center justify-between gap-1 p-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-xl shrink-0 shadow-inner">
              {(["ALL", "POLYCET", "ECET"] as ExamFilter[]).map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => handleFilterChange(filter)}
                    className={`relative flex-1 lg:flex-initial px-3 py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-extrabold transition-all duration-300 cursor-pointer text-center ${
                      isActive
                        ? "text-[#0C091F] shadow-lg"
                        : "text-white/75 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-[#D2FF00] rounded-full z-0"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 block whitespace-nowrap">
                      {filter === "ALL" && "All Ranks"}
                      {filter === "POLYCET" && (
                        <>
                          <span className="sm:hidden">POLYCET</span>
                          <span className="hidden sm:inline">POLYCET Top Ranks</span>
                        </>
                      )}
                      {filter === "ECET" && (
                        <>
                          <span className="sm:hidden">ECET</span>
                          <span className="hidden sm:inline">ECET Top Ranks</span>
                        </>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STUDENT RANKS CAROUSEL & GRID TRACK */}
          <div className="relative z-10">
            {/* Scrollable Cards Track (Touch Snap-Scroll on Mobile, Smooth Tab Fade Animation) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                ref={scrollContainerRef}
                className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-2 pt-1 scroll-smooth snap-x snap-mandatory"
              >
                {filteredAchievers.map((student) => (
                  <div
                    key={student.id}
                    className="w-[230px] sm:w-[270px] lg:w-[280px] shrink-0 snap-start bg-gradient-to-b from-white/10 via-white/[0.04] to-white/[0.02] backdrop-blur-xl border border-white/15 rounded-2xl sm:rounded-3xl p-4 flex flex-col justify-between hover:border-[#D2FF00]/60 hover:shadow-[0_20px_40px_-15px_rgba(210,255,0,0.2)] transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Top Glow Accent Bar on Hover */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D2FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Student Photo Frame */}
                    <div className="relative w-full h-48 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden bg-[#1E1266]/60 border border-white/15 mb-4 flex items-center justify-center shadow-inner">
                      {student.image ? (
                        <>
                          <img
                            src={student.image}
                            alt={student.name}
                            className={`w-full h-full object-cover ${
                              student.category === "POLYCET"
                                ? `${student.objectPos || "object-[center_0%]"} -translate-y-[10%] scale-[1.28] group-hover:scale-[1.32]`
                                : `${student.objectPos || "object-top"} scale-[1.12] group-hover:scale-[1.16]`
                            } transition-transform duration-700 ease-out ${student.imageClass || ""}`}
                          />
                          {/* Faculty-styled bottom purple gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0C091F] via-[#1E1266]/35 to-transparent pointer-events-none z-10" />
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center p-3 text-center">
                          <div className="w-14 h-14 rounded-full bg-[#D2FF00]/15 border border-[#D2FF00]/30 flex items-center justify-center text-[#D2FF00] font-black text-lg mb-1 shadow-sm">
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </div>
                          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                            Photo Pending
                          </span>
                        </div>
                      )}

                      {/* Exam Category Floating Pill (Top-Right) */}
                      <div className="absolute top-2.5 right-2.5 bg-[#0C091F]/85 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-lg border border-white/20 z-20 shadow-md uppercase tracking-wider">
                        {student.category}
                      </div>
                    </div>

                    {/* Rank, Name & Hall Ticket Number */}
                    <div className="space-y-2 text-left">
                      {/* State Rank Badge */}
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-[#D2FF00] text-[#0C091F] text-xs font-black shadow-md tracking-tight group-hover:scale-105 transition-transform">
                          {student.rank}
                        </span>
                      </div>

                      {/* Student Name (Line Clamp 2 to ensure long names fit completely without truncation) */}
                      <h3
                        className="font-display-saasmo text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-[#D2FF00] transition-colors leading-snug line-clamp-2 min-h-[2.4rem] flex items-center tracking-tight pt-0.5"
                        title={student.name}
                      >
                        {student.name}
                      </h3>

                      {/* Hall Ticket Number Glass Pill (if available) */}
                      {student.hallTicketNo && (
                        <div className="pt-1">
                          <div className="text-[11px] font-mono font-semibold text-white/90 bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl border border-white/15 inline-block tracking-wider whitespace-nowrap shadow-xs">
                            HT No: {student.hallTicketNo}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Navigation Arrow Bar */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-5">
              <span className="text-xs font-bold text-white/60 uppercase tracking-widest">
                Showing {filteredAchievers.length} Top Rankers
              </span>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={scrollLeft}
                  disabled={!canScrollLeft}
                  aria-label="Scroll Left"
                  className={`p-2.5 sm:p-3 rounded-full border transition-all cursor-pointer ${canScrollLeft
                      ? "bg-white/15 hover:bg-white/25 text-white border-white/25 active:scale-95 shadow-md"
                      : "bg-white/5 text-white/30 border-white/10 cursor-not-allowed"
                    }`}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <button
                  onClick={scrollRight}
                  disabled={!canScrollRight}
                  aria-label="Scroll Right"
                  className={`p-2.5 sm:p-3 rounded-full border transition-all cursor-pointer ${canScrollRight
                      ? "bg-[#D2FF00] hover:bg-[#bce400] text-[#0C091F] border-[#D2FF00] active:scale-95 shadow-lg font-black"
                      : "bg-white/5 text-white/30 border-white/10 cursor-not-allowed"
                    }`}
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
