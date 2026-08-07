"use client";

import React, { useLayoutEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  HelpCircle,
  Award,
  BookOpen,
  PhoneCall,
  ChevronRight,
  ArrowLeft,
  Check,
} from "lucide-react";

// --- Guidance Programs Data ---
interface GuidanceProgram {
  id: string;
  title: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  targetAudience: string;
  icon: React.ElementType;
  description: string;
  highlights: string[];
}

const guidancePrograms: GuidanceProgram[] = [
  {
    id: "after-ssc",
    title: "1. What After SSC? Career Guidance",
    badge: "Post 10th",
    badgeBg: "bg-amber-100 border-amber-300",
    badgeText: "text-amber-900",
    targetAudience: "Students who have just completed 10th Standard / SSC",
    icon: HelpCircle,
    description:
      "Clear, structured roadmap for 10th pass outs navigating the crucial crossroads between Diploma Engineering and Intermediate streams.",
    highlights: [
      "Diploma vs. Intermediate complete breakdown",
      "Stream selection (MPC / BiPC / MEC / CEC / Diploma)",
      "Choosing the right stream based on student aptitude",
      "Future career opportunities & long-term job scope",
      "Best Polytechnic & Junior Colleges in Hyderabad",
      "Dedicated parent counseling & clarity sessions",
    ],
  },
  {
    id: "polycet-counseling",
    title: "2. POLYCET Counseling Guidance",
    badge: "Diploma Entrance",
    badgeBg: "bg-purple-100 border-purple-300",
    badgeText: "text-purple-900",
    targetAudience: "POLYCET rank holders aiming for top Polytechnic Colleges",
    icon: Award,
    description:
      "End-to-end guidance through POLYCET admissions, rank analysis, and priority web option entry strategy.",
    highlights: [
      "In-depth POLYCET rank analysis & category cutoffs",
      "Branch selection (CSE, AI & ML, ECE, EEE, Civil, Mech)",
      "Government & Top Private College prediction",
      "Strategic Web Option entry order setup",
      "Counseling process & document verification checklist",
      "Seat allotment guidance & maximizing admission chances",
    ],
  },
  {
    id: "ts-eapcet",
    title: "3. TS EAPCET Counseling Guidance",
    badge: "Telangana EAPCET",
    badgeBg: "bg-emerald-100 border-emerald-300",
    badgeText: "text-emerald-900",
    targetAudience: "Telangana EAPCET BE / B.Tech Aspirants & Parents",
    icon: BookOpen,
    description:
      "Dedicated guidance focused on the Telangana TSCHE counseling framework, web options, and top BE / B.Tech colleges.",
    highlights: [
      "Telangana TSCHE counseling process step-by-step roadmap",
      "Telangana top engineering college selection & fee structure",
      "Branch comparison (CSE vs. AI/ML vs. Data Science vs. ECE)",
      "Error-free web options entry & priority ordering",
      "Document verification center guidance & helpline support",
      "Seat allotment strategy & fee reimbursement eligibility check",
    ],
  },
  {
    id: "ts-ecet",
    title: "4. TS ECET Counseling Guidance",
    badge: "Telangana ECET",
    badgeBg: "bg-rose-100 border-rose-300",
    badgeText: "text-rose-900",
    targetAudience: "Telangana SBTET Diploma Students & TS ECET Aspirants",
    icon: BookOpen,
    description:
      "Exclusive TS ECET guidance tailored to SBTET C-20 / C-24 diploma curriculum graduates seeking BE / B.Tech seats.",
    highlights: [
      "TS ECET eligibility & category seat reservation analysis",
      "Telangana BE / B.Tech lateral entry admission process",
      "Government vs. Top Private Autonomous college selection",
      "Branch selection tailored to SBTET diploma background",
      "Personalized TS ECET counseling & web option assistance",
      "Required documents verification checklist & admission help",
    ],
  },
];

export default function CareerGuidancePage() {
  const counselorPhone = "tel:9573241504";

  // Force immediate scroll position to (0, 0) on page load without scroll animation
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "auto";
      document.body.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);

      const timer = setTimeout(() => {
        document.documentElement.style.scrollBehavior = "smooth";
        document.body.style.scrollBehavior = "smooth";
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#F6F4FE] text-[#1E1266] flex flex-col font-sans selection:bg-[#25176E] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-20 bg-gradient-to-br from-[#1E1266] via-[#25176E] to-[#0F0833] text-white overflow-hidden shadow-xl">
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-[#6A4BE2]/25 to-[#25176E]/20 blur-[120px] rounded-full pointer-events-none" />

        {/* Dynamic Grid Background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 sm:mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-white/80"
          >
            <Link href="/" className="hover:text-[#D2FF00] transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#D2FF00] font-bold">Career Guidance & Counseling</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 sm:space-y-6 max-w-4xl mx-auto"
          >
            {/* Clean Top Badge (No emojis) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-sm">
              <span>IQ Academy Academic & Career Advisory</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display-saasmo text-2xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Career Guidance & Counseling
            </h1>

            {/* Subheading */}
            <p className="text-xs sm:text-base lg:text-lg text-white/85 leading-relaxed max-w-3xl mx-auto font-medium px-2 sm:px-0">
              Expert guidance to help students make informed academic and career decisions after SSC, POLYCET, TS EAPCET, TS ECET From choosing the right course to completing the entire counseling process, IQ Academy of Excellence supports students at every step.
            </p>

            {/* Single Action Button: Talk to a Counselor */}
            <div className="pt-2 sm:pt-4 flex justify-center">
              <a
                href={counselorPhone}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-[#D2FF00] text-[#1E1266] font-extrabold text-sm sm:text-base hover:bg-[#bce400] transition-all duration-300 shadow-xl hover:shadow-[#D2FF00]/30 hover:scale-105 flex items-center justify-center gap-3 group"
              >
                <PhoneCall className="w-5 h-5 text-[#1E1266] group-hover:scale-110 transition-transform" />
                <span>Talk to a Counselor</span>
              </a>
            </div>

            {/* Trust Points - Sleek Dot-Separated Inline Text Layout */}
            <div className="pt-4 sm:pt-6 border-t border-white/10 max-w-3xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm text-white/85 font-medium tracking-wide">
                <span>100% Unbiased Advisory</span>
                <span className="text-[#D2FF00] font-black">•</span>
                <span>Web Option Strategy</span>
                <span className="text-[#D2FF00] font-black">•</span>
                <span>Student & Parent Sessions</span>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* --- GUARANTEE BANNER SECTION (Refined Uncluttered Mobile & Desktop UI) --- */}
      <section className="py-8 sm:py-14 bg-white relative border-b border-[#EBE6FE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1E1266] via-[#25176E] to-[#120A3E] p-5 sm:p-9 text-white shadow-lg border border-white/10 text-center space-y-2.5 sm:space-y-3">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[10px] sm:text-xs font-black text-[#D2FF00] uppercase tracking-widest">
              Our Guarantee to Parents & Students
            </div>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight px-1">
              Practical, Unbiased & 100% Personalized Guidance
            </h2>
            <p className="text-xs sm:text-sm text-white/85 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              We evaluate each student individually based on rank, financial preferences, location convenience, and long-term placement metrics without pushing specific institutions.
            </p>
          </div>
        </div>
      </section>

      {/* --- CAREER GUIDANCE PROGRAMS (4 CARDS GRID: 1, 2, 3, 4) --- */}
      <section className="py-12 sm:py-24 bg-[#F6F4FE] relative overflow-hidden" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-14">
            <span className="px-3.5 py-1.5 rounded-full bg-[#F0EBFF] text-[#25176E] border border-[#EBE6FE] text-xs font-black uppercase tracking-widest inline-block">
              Tailored Counseling Tracks
            </span>

            <h2 className="font-display-saasmo text-2xl sm:text-4xl font-extrabold text-[#1E1266] tracking-tight">
              Our Specialized Career Guidance Programs
            </h2>
          </div>

          {/* 4 Cards Grid (2x2 layout on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {guidancePrograms.map((program, idx) => {
              const IconComp = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="rounded-3xl bg-white border border-[#EBE6FE] shadow-md hover:shadow-2xl hover:border-[#25176E]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6 sm:p-8 space-y-5 sm:space-y-6">
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F6F4FE] border border-[#EBE6FE] group-hover:bg-[#25176E] group-hover:text-white transition-all duration-300 flex items-center justify-center text-[#25176E] shadow-xs shrink-0">
                        <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>

                      <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${program.badgeBg} ${program.badgeText}`}>
                        {program.badge}
                      </span>
                    </div>

                    {/* Program Title & Audience */}
                    <div className="space-y-2">
                      <h3 className="font-display-saasmo text-lg sm:text-xl font-bold text-[#1E1266] group-hover:text-[#25176E] transition-colors leading-tight">
                        {program.title}
                      </h3>
                      <p className="text-[11px] font-semibold text-[#64748B] bg-[#F6F4FE] px-3 py-1.5 rounded-xl inline-block border border-[#EBE6FE]">
                        Target: {program.targetAudience}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {program.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2.5 pt-2 border-t border-[#EBE6FE]">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#25176E] block mb-2">
                        What's Included:
                      </span>
                      {program.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#1E1266]">
                          <Check className="w-4 h-4 text-[#25176E] shrink-0 mt-0.5" />
                          <span className="leading-tight font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Action: Talk to a Counselor */}
                  <div className="p-5 sm:p-6 bg-[#F6F4FE] border-t border-[#EBE6FE] group-hover:bg-[#25176E]/5 transition-colors">
                    <a
                      href={counselorPhone}
                      className="w-full py-3 sm:py-3.5 rounded-2xl bg-[#25176E] text-white font-bold text-xs hover:bg-[#1b1054] transition-all shadow-md flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4 text-[#D2FF00]" />
                      <span>Talk to a Counselor</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
