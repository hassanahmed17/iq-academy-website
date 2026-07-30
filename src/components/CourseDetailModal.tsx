"use client";

import React, { useState } from "react";
import { X, BookOpen, Compass, Sparkles, CheckCircle2, ArrowRight, Layers, Award, Shield, Briefcase } from "lucide-react";
import { Course } from "./EngineeringCoursesTrack";

interface CourseDetailModalProps {
  course: Course | any;
  onClose: () => void;
}

export default function CourseDetailModal({ course, onClose }: CourseDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"benefits" | "syllabus" | "scope">("benefits");
  const [selectedScheme, setSelectedScheme] = useState<"c24" | "c26">("c26"); // Default C-26 Scheme
  const [selectedC24Sem, setSelectedC24Sem] = useState<"sem1" | "sem2" | "sem3" | "sem4" | "sem5">("sem1");
  const [selectedC26Tab, setSelectedC26Tab] = useState<"year1" | "sem3" | "sem4" | "sem5">("year1");

  if (!course) return null;

  const courseTitle = course.fullTitle || course.name || course.title || "Engineering Course";
  
  // Get active subjects based on scheme selection
  const currentSemSubjects: string[] = selectedScheme === "c26"
    ? (course.c26Syllabus ? course.c26Syllabus[selectedC26Tab] || [] : [])
    : (course.c24Syllabus ? course.c24Syllabus[selectedC24Sem] || [] : []);

  const getSemesterLabel = () => {
    if (selectedScheme === "c26") {
      switch (selectedC26Tab) {
        case "year1": return "FIRST YEAR (COMMON)";
        case "sem3": return "SEMESTER 3";
        case "sem4": return "SEMESTER 4";
        case "sem5": return "SEMESTER 5";
        default: return "FIRST YEAR";
      }
    } else {
      return selectedC24Sem.toUpperCase().replace("SEM", "SEMESTER ");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn" suppressHydrationWarning={true}>
      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-white border border-[#EBE6FE] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]" suppressHydrationWarning={true}>
        
        {/* Header Banner */}
        <div className="p-6 sm:p-7 bg-[#25176E] text-white relative flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-[#D2FF00] text-[#1B1054] text-xs font-extrabold uppercase tracking-wider">
                {course.category || "Telangana SBTET"}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-white text-xs font-mono font-bold">
                {course.code}
              </span>
            </div>
            <h3 className="font-display-saasmo text-2xl sm:text-3xl font-bold text-white mt-2">
              {courseTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3 Information Toggle Tabs */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-[#EBE6FE] bg-[#F6F4FE] px-4 sm:px-6 shrink-0">
          <button
            onClick={() => setActiveTab("benefits")}
            className={`flex items-center gap-2 py-3.5 px-4 font-semibold text-xs sm:text-sm transition-all border-b-2 whitespace-nowrap ${
              activeTab === "benefits"
                ? "border-[#25176E] text-[#25176E] bg-white rounded-t-lg font-bold"
                : "border-transparent text-[#64748B] hover:text-[#25176E]"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>1. Coaching Benefits</span>
          </button>

          <button
            onClick={() => setActiveTab("syllabus")}
            className={`flex items-center gap-2 py-3.5 px-4 font-semibold text-xs sm:text-sm transition-all border-b-2 whitespace-nowrap ${
              activeTab === "syllabus"
                ? "border-[#25176E] text-[#25176E] bg-white rounded-t-lg font-bold"
                : "border-transparent text-[#64748B] hover:text-[#25176E]"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>2. Theory Subjects (C-24 & C-26)</span>
          </button>

          <button
            onClick={() => setActiveTab("scope")}
            className={`flex items-center gap-2 py-3.5 px-4 font-semibold text-xs sm:text-sm transition-all border-b-2 whitespace-nowrap ${
              activeTab === "scope"
                ? "border-[#25176E] text-[#25176E] bg-white rounded-t-lg font-bold"
                : "border-transparent text-[#64748B] hover:text-[#25176E]"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>3. Scope & Government Jobs</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#1E1266] grow">
          
          {/* TAB 1: COACHING BENEFITS */}
          {activeTab === "benefits" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-2">
                <h4 className="font-display-saasmo text-xl font-bold text-[#1E1266]">
                  {course.benefitsHeading || "Coaching Benefits at IQ Academy"}
                </h4>
                <p className="leading-relaxed text-[#64748B] text-xs sm:text-sm">
                  {course.careerOptionsBrief}
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <h5 className="font-bold text-[#1E1266] text-sm">Key Academic Theory & Exam Success Advantages:</h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(course.keyBenefits || course.benefits || []).map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 bg-[#F0EBFF] p-4 rounded-2xl border border-[#EBE6FE]">
                      <CheckCircle2 className="w-4 h-4 text-[#25176E] shrink-0 mt-0.5" />
                      <span className="text-[#1E1266] text-xs font-semibold leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: SYLLABUS EXPLORER - C-26 (1st Year, Sem 3,4,5) & C-24 (Sem 1,2,3,4,5) */}
          {activeTab === "syllabus" && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Scheme Switcher & Dynamic Academic Controls */}
              <div className="p-4 rounded-2xl bg-[#F6F4FE] border border-[#EBE6FE] space-y-4">
                
                {/* 1. Scheme Selector Toggle (C-26 vs C-24) */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="text-xs font-extrabold text-[#25176E] uppercase tracking-wider">
                    Select Telangana SBTET Scheme:
                  </span>
                  
                  <div className="bg-[#EBE6FE] p-1 rounded-xl flex items-center gap-1">
                    <button
                      onClick={() => setSelectedScheme("c26")}
                      className={`px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                        selectedScheme === "c26"
                          ? "bg-[#25176E] text-white shadow-sm"
                          : "text-[#1E1266] hover:bg-white/50"
                      }`}
                    >
                      SBTET C-26 Scheme (New)
                    </button>
                    <button
                      onClick={() => setSelectedScheme("c24")}
                      className={`px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                        selectedScheme === "c24"
                          ? "bg-[#25176E] text-white shadow-sm"
                          : "text-[#1E1266] hover:bg-white/50"
                      }`}
                    >
                      SBTET C-24 Scheme
                    </button>
                  </div>
                </div>

                {/* 2. Dynamic Buttons Based on Selected Scheme */}
                {selectedScheme === "c26" ? (
                  /* C-26 Scheme Controls: 1st Year, Sem 3, Sem 4, Sem 5 (No Sem 1 & Sem 2) */
                  <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar pt-2 border-t border-[#EBE6FE]">
                    <button
                      onClick={() => setSelectedC26Tab("year1")}
                      className={`flex-1 min-w-[90px] py-2 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                        selectedC26Tab === "year1"
                          ? "bg-[#D2FF00] text-[#1B1054] shadow-sm font-black border border-lime-400"
                          : "bg-white text-[#1E1266] hover:bg-[#F0EBFF] border border-[#EBE6FE]"
                      }`}
                    >
                      1st Year
                    </button>
                    <button
                      onClick={() => setSelectedC26Tab("sem3")}
                      className={`flex-1 min-w-[90px] py-2 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                        selectedC26Tab === "sem3"
                          ? "bg-[#D2FF00] text-[#1B1054] shadow-sm font-black border border-lime-400"
                          : "bg-white text-[#1E1266] hover:bg-[#F0EBFF] border border-[#EBE6FE]"
                      }`}
                    >
                      Sem 3
                    </button>
                    <button
                      onClick={() => setSelectedC26Tab("sem4")}
                      className={`flex-1 min-w-[90px] py-2 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                        selectedC26Tab === "sem4"
                          ? "bg-[#D2FF00] text-[#1B1054] shadow-sm font-black border border-lime-400"
                          : "bg-white text-[#1E1266] hover:bg-[#F0EBFF] border border-[#EBE6FE]"
                      }`}
                    >
                      Sem 4
                    </button>
                    <button
                      onClick={() => setSelectedC26Tab("sem5")}
                      className={`flex-1 min-w-[90px] py-2 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                        selectedC26Tab === "sem5"
                          ? "bg-[#D2FF00] text-[#1B1054] shadow-sm font-black border border-lime-400"
                          : "bg-white text-[#1E1266] hover:bg-[#F0EBFF] border border-[#EBE6FE]"
                      }`}
                    >
                      Sem 5
                    </button>
                  </div>
                ) : (
                  /* C-24 Scheme Controls: Sem 1, Sem 2, Sem 3, Sem 4, Sem 5 */
                  <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar pt-2 border-t border-[#EBE6FE]">
                    {(["sem1", "sem2", "sem3", "sem4", "sem5"] as const).map((semKey, i) => (
                      <button
                        key={semKey}
                        onClick={() => setSelectedC24Sem(semKey)}
                        className={`flex-1 min-w-[75px] py-2 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                          selectedC24Sem === semKey
                            ? "bg-[#D2FF00] text-[#1B1054] shadow-sm font-black border border-lime-400"
                            : "bg-white text-[#1E1266] hover:bg-[#F0EBFF] border border-[#EBE6FE]"
                        }`}
                      >
                        Sem {i + 1}
                      </button>
                    ))}
                  </div>
                )}

              </div>

              {/* Display Academic Theory Subjects Only */}
              {currentSemSubjects && currentSemSubjects.length > 0 ? (
                <div className="p-5 rounded-2xl bg-white border border-[#EBE6FE] shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#EBE6FE]">
                    <div className="flex items-center gap-2 text-[#25176E] font-bold text-xs uppercase tracking-wider">
                      <BookOpen className="w-4 h-4 text-[#25176E]" />
                      <span>SBTET Academic Theory Subjects ({selectedScheme.toUpperCase()} • {getSemesterLabel()})</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F0EBFF] text-[#25176E] text-[11px] font-extrabold">
                      {currentSemSubjects.length} Core Subjects
                    </span>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {currentSemSubjects.map((subject: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-3 text-xs text-[#1E1266] font-semibold bg-[#F6F4FE] p-3 rounded-xl border border-[#EBE6FE]">
                        <span className="w-6 h-6 rounded-full bg-[#25176E] text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
                          {idx + 1}
                        </span>
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="p-8 text-center text-xs text-[#64748B]">
                  Academic theory subjects updating for this scheme.
                </div>
              )}

            </div>
          )}

          {/* TAB 3: SCOPE, CERTIFICATIONS & GOVERNMENT JOBS */}
          {activeTab === "scope" && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Professional & Industry Certifications */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#25176E] font-bold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#25176E]" />
                  <span>Recommended Industry Certifications</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(course.certifications || []).map((cert: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-[#F6F4FE] p-3 rounded-xl border border-[#EBE6FE] text-xs font-semibold text-[#1E1266]">
                      <Sparkles className="w-4 h-4 text-[#25176E] shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitive Entrance Exams */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-[#25176E] font-bold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4 text-[#25176E]" />
                  <span>BE / B.Tech Lateral Entry Entrance Exams</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(course.competitiveExams || course.scope || []).map((exam: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-[#F0EBFF] p-3 rounded-xl border border-[#EBE6FE] text-xs font-semibold text-[#1E1266]">
                      <ArrowRight className="w-4 h-4 text-[#25176E] shrink-0" />
                      <span>{exam}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* State & Central Government Jobs & PSUs */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-[#25176E] font-bold text-xs uppercase tracking-wider">
                  <Briefcase className="w-4 h-4 text-[#25176E]" />
                  <span>State & Central Government Job Opportunities for Telangana Diploma Holders</span>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {(course.governmentJobs || []).map((job: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 text-xs font-semibold text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{job}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer CTA */}
        <div className="p-5 border-t border-[#EBE6FE] bg-[#F6F4FE] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <p className="text-xs text-[#64748B]">
            Enrolling for 2026 Academic Batches • Telangana SBTET C-24 & C-26 Aligned
          </p>
          <a
            href="#contact-form-block"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              setTimeout(() => {
                document.getElementById("contact-form-block")?.scrollIntoView({ behavior: "smooth", block: "center" });
              }, 100);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#25176E] text-white font-bold text-xs sm:text-sm hover:bg-[#1b1054] transition-all text-center shadow-md"
          >
            Enrol in this Course
          </a>
        </div>

      </div>
    </div>
  );
}
