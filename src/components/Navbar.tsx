"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronRight, ChevronDown, Sparkles, GraduationCap } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const diplomaBranches = [
  { id: "cse", name: "Computer Science Engineering", code: "CSE" },
  { id: "aiml", name: "Artificial Intelligence & ML", code: "AI & ML" },
  { id: "ece", name: "Electronics & Communication", code: "ECE" },
  { id: "eee", name: "Electrical & Electronics", code: "EEE" },
  { id: "civil", name: "Civil Engineering", code: "CIVIL" },
  { id: "me", name: "Mechanical Engineering", code: "MECH" },
];

const intermediateStreams = [
  { id: "mpc", name: "MPC", code: "MPC" },
  { id: "bipc", name: "BiPC", code: "BiPC" },
  { id: "cec", name: "CEC", code: "CEC" },
];

const entranceExams = [
  { id: "exam-polycet", name: "POLYCET Coaching", tag: "Post-10th Diploma Entrance" },
  { id: "exam-ecet", name: "ECET Coaching", tag: "BE / B.Tech Lateral Entry" },
  { id: "exam-eapcet", name: "TS EAPCET (EAMCET)", tag: "Intermediate BE / B.Tech Entrance" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coursesHover, setCoursesHover] = useState(false);
  const [activeSubCategory, setActiveSubCategory] = useState<"diploma" | "intermediate" | "ssc">("diploma");
  const [examsHover, setExamsHover] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileDiplomaOpen, setMobileDiplomaOpen] = useState(false);
  const [mobileInterOpen, setMobileInterOpen] = useState(false);
  const [mobileExamsOpen, setMobileExamsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track scroll position to trigger smooth navbar reveal
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when full-screen mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      // If user is on a subpage like /career-guidance, navigate to home page anchor
      if (href === "#top" || href === "#") {
        window.location.href = "/";
      } else if (href.startsWith("#")) {
        window.location.href = `/${href}`;
      }
      return;
    }

    if (href === "#top" || href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = Math.max(0, elementPosition - navHeight);
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const handleCourseClick = (courseId: string) => {
    setCoursesHover(false);
    setMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent("open-course-modal", { detail: courseId }));
  };

  const handleExamClick = (examId: string) => {
    setExamsHover(false);
    setMobileMenuOpen(false);
    const element = document.getElementById(examId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementPosition - navHeight),
        behavior: "smooth"
      });
    }
  };

  const menuOverlayVariants: Variants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0% at 90% 32px)",
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at 90% 32px)",
      transition: {
        duration: 0.3,
        ease: [0, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        mobileMenuOpen 
          ? "bg-[#F6F4FE] border-b border-[#EBE6FE] shadow-sm" 
          : isScrolled 
          ? "bg-[#F6F4FE]/95 backdrop-blur-md border-b border-[#EBE6FE] shadow-xs" 
          : "max-xl:bg-[#F6F4FE] max-xl:border-b max-xl:border-[#EBE6FE] max-xl:shadow-xs bg-transparent border-b border-transparent shadow-none"
      }`} 
      suppressHydrationWarning={true}
    >
      <div className="w-full px-3 sm:px-6 xl:px-5 2xl:px-8 flex items-center justify-between h-16 md:h-20" suppressHydrationWarning={true}>
        
        {/* Brand Logo & Text (Always visible on top left for desktop and mobile) */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex items-center gap-1.5 sm:gap-2.5 group z-50 shrink-0 opacity-100 translate-y-0 pointer-events-auto transition-all duration-300 ease-out"
        >
          <img
            src="/images/iqloader-logo.png"
            alt="IQ Academy of Excellence Shield Crest"
            className="h-9 sm:h-[42px] md:h-[46px] lg:h-[50px] w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <img
            src="/images/iq-text-logo.png"
            alt="IQ Academy of Excellence"
            className="h-5 sm:h-[25px] md:h-[28px] lg:h-[32px] w-auto object-contain group-hover:scale-102 transition-transform"
          />
        </a>

        {/* Desktop Links (Appears smoothly on scroll for Desktop xl+ screens 1280px+) */}
        <div className={`hidden xl:flex items-center gap-3.5 xl:gap-4 min-[1440px]:gap-6 2xl:gap-7 text-xs xl:text-[13px] min-[1440px]:text-sm font-semibold text-[#64748B] transition-all duration-300 ease-out shrink-0 ${
          isScrolled ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}>
          
          {/* 1. Home */}
          <a href="#top" onClick={(e) => handleNavClick(e, "#top")} className="hover:text-[#25176E] transition-colors whitespace-nowrap shrink-0">
            Home
          </a>

          {/* 2. About Us */}
          <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-[#25176E] transition-colors whitespace-nowrap shrink-0">
            About Us
          </a>

          {/* 3. Courses We Offer with 2-Level Multi-Category Dropdown */}
          <div
            className="relative shrink-0 whitespace-nowrap"
            onMouseEnter={() => setCoursesHover(true)}
            onMouseLeave={() => setCoursesHover(false)}
          >
            <a
              href="#courses"
              onClick={(e) => handleNavClick(e, "#courses")}
              className="hover:text-[#25176E] transition-colors py-2 flex items-center gap-1 cursor-pointer whitespace-nowrap"
            >
              <span>Courses We Offer</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${coursesHover ? "rotate-180 text-[#25176E]" : ""}`} />
            </a>

            <AnimatePresence>
              {coursesHover && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 w-[490px] bg-white rounded-2xl shadow-2xl border border-[#EBE6FE] p-2.5 z-50 flex gap-2"
                >
                  {/* Left Column: 3 Category Tabs (Diploma, Intermediate, SSC) */}
                  <div className="w-[170px] shrink-0 space-y-1 border-r border-[#F0EBFF] pr-2">
                    <div className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#64748B]/60 text-left">
                      Categories
                    </div>

                    {/* 1. Diploma (Hover to reveal sub-branches) */}
                    <button
                      onMouseEnter={() => setActiveSubCategory("diploma")}
                      onClick={() => setActiveSubCategory("diploma")}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between group ${
                        activeSubCategory === "diploma"
                          ? "bg-[#25176E] text-white shadow-sm"
                          : "text-[#1E1266] hover:bg-[#F6F4FE]"
                      }`}
                    >
                      <span>Diploma</span>
                      <ChevronRight className={`w-3.5 h-3.5 ${activeSubCategory === "diploma" ? "text-white" : "text-[#64748B] group-hover:translate-x-0.5"} transition-transform`} />
                    </button>

                    {/* 2. Intermediate (Hover to reveal streams) */}
                    <button
                      onMouseEnter={() => setActiveSubCategory("intermediate")}
                      onClick={() => setActiveSubCategory("intermediate")}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between group ${
                        activeSubCategory === "intermediate"
                          ? "bg-[#25176E] text-white shadow-sm"
                          : "text-[#1E1266] hover:bg-[#F6F4FE]"
                      }`}
                    >
                      <span>Intermediate</span>
                      <ChevronRight className={`w-3.5 h-3.5 ${activeSubCategory === "intermediate" ? "text-white" : "text-[#64748B] group-hover:translate-x-0.5"} transition-transform`} />
                    </button>

                    {/* 3. SSC Class 10th (Direct Click) */}
                    <button
                      onMouseEnter={() => setActiveSubCategory("ssc")}
                      onClick={() => handleCourseClick("ssc-10th")}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between group ${
                        activeSubCategory === "ssc"
                          ? "bg-[#25176E] text-white shadow-sm"
                          : "text-[#1E1266] hover:bg-[#F6F4FE]"
                      }`}
                    >
                      <span>SSC Class 10th</span>
                      <ChevronRight className={`w-3.5 h-3.5 ${activeSubCategory === "ssc" ? "text-white" : "text-[#64748B] group-hover:translate-x-0.5"} transition-transform`} />
                    </button>
                  </div>

                  {/* Right Column: Sub-menu Items for Selected Category */}
                  <div className="flex-1 pl-1 space-y-1 my-auto text-left">
                    {activeSubCategory === "diploma" && (
                      <>
                        <div className="px-2 py-1 text-[10px] font-black uppercase tracking-wider text-[#25176E]">
                          Diploma Engineering Branches
                        </div>
                        <div className="space-y-0.5 max-h-[260px] overflow-y-auto pr-1">
                          {diplomaBranches.map((branch) => (
                            <button
                              key={branch.id}
                              onClick={() => handleCourseClick(branch.id)}
                              className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#1E1266] hover:bg-[#F6F4FE] hover:text-[#25176E] transition-colors flex items-center justify-between group/item"
                            >
                              <span className="group-hover/item:translate-x-0.5 transition-transform">{branch.name}</span>
                              <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-[#F0EBFF] text-[#25176E] shrink-0">
                                {branch.code}
                              </span>
                            </button>
                          ))}
                        </div>
                      </>
                    )}

                    {activeSubCategory === "intermediate" && (
                      <>
                        <div className="px-2 py-1 text-[10px] font-black uppercase tracking-wider text-[#25176E]">
                          Intermediate Streams
                        </div>
                        <div className="space-y-1">
                          {intermediateStreams.map((stream) => (
                            <button
                              key={stream.id}
                              onClick={() => handleCourseClick(stream.id)}
                              className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold text-[#1E1266] hover:bg-[#F6F4FE] hover:text-[#25176E] transition-colors flex items-center justify-between group/item"
                            >
                              <span className="group-hover/item:translate-x-0.5 transition-transform">{stream.name}</span>
                            </button>
                          ))}
                        </div>
                      </>
                    )}

                    {activeSubCategory === "ssc" && (
                      <>
                        <div className="px-2 py-1 text-[10px] font-black uppercase tracking-wider text-[#25176E]">
                          SSC Board Coaching
                        </div>
                        <div className="space-y-1">
                          <button
                            onClick={() => handleCourseClick("ssc-10th")}
                            className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold text-[#1E1266] hover:bg-[#F6F4FE] hover:text-[#25176E] transition-colors flex items-center justify-between group/item"
                          >
                            <span className="group-hover/item:translate-x-0.5 transition-transform">SSC Class 10th Board</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. Entrance Exams with Dropdown */}
          <div
            className="relative shrink-0 whitespace-nowrap"
            onMouseEnter={() => setExamsHover(true)}
            onMouseLeave={() => setExamsHover(false)}
          >
            <a
              href="#coaching"
              onClick={(e) => handleNavClick(e, "#coaching")}
              className="hover:text-[#25176E] transition-colors py-2 flex items-center gap-1 cursor-pointer whitespace-nowrap"
            >
              <span>Entrance Exams</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${examsHover ? "rotate-180 text-[#25176E]" : ""}`} />
            </a>

            <AnimatePresence>
              {examsHover && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-[#EBE6FE] p-2 z-50"
                >
                  <div className="space-y-1">
                    {entranceExams.map((exam) => (
                      <button
                        key={exam.id}
                        onClick={() => handleExamClick(exam.id)}
                        className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#F6F4FE] transition-colors group/exam flex flex-col gap-0.5"
                      >
                        <span className="text-xs font-extrabold text-[#1E1266] group-hover/exam:text-[#25176E]">
                          {exam.name}
                        </span>
                        <span className="text-[10px] font-medium text-[#64748B]">
                          {exam.tag}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 5. Career Guidance */}
          <Link href="/career-guidance" className="hover:text-[#25176E] transition-colors whitespace-nowrap shrink-0">
            Career Guidance
          </Link>

          {/* 6. Faculty */}
          <a href="#faculty" onClick={(e) => handleNavClick(e, "#faculty")} className="hover:text-[#25176E] transition-colors whitespace-nowrap shrink-0">
            Faculty
          </a>

          {/* 7. Director's Message */}
          <a href="#director" onClick={(e) => handleNavClick(e, "#director")} className="hover:text-[#25176E] transition-colors whitespace-nowrap shrink-0">
            Director's Message
          </a>

          {/* 8. Gallery */}
          <a href="#gallery" onClick={(e) => handleNavClick(e, "#gallery")} className="hover:text-[#25176E] transition-colors whitespace-nowrap shrink-0">
            Gallery
          </a>

          {/* 9. Testimonials */}
          <a href="#testimonials" onClick={(e) => handleNavClick(e, "#testimonials")} className="hover:text-[#25176E] transition-colors whitespace-nowrap shrink-0">
            Testimonials
          </a>
        </div>

        {/* Desktop CTA Action Button (Appears smoothly on scroll for Desktop xl+ screens 1280px+) */}
        <div className={`hidden xl:flex items-center gap-3 shrink-0 transition-all duration-300 ease-out ${
          isScrolled ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}>
          <a
            href="#contact-form-block"
            onClick={(e) => handleNavClick(e, "#contact-form-block")}
            className="px-4 py-2 xl:px-5 xl:py-2.5 2xl:px-6 2xl:py-2.5 rounded-full bg-[#25176E] text-white font-bold text-xs xl:text-xs 2xl:text-sm hover:bg-[#1b1054] transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>Enrol Now</span>
            <ArrowRight className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
          </a>
        </div>

        {/* Hamburger Toggle Button (Active for Mobile & Tablet screens up to 1280px) */}
        <div className="xl:hidden flex items-center gap-2 z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-[#25176E] hover:bg-[#EBE6FE] transition-colors focus:outline-none bg-white/80 border border-[#EBE6FE] shadow-xs"
            aria-label="Toggle Navigation Menu"
            suppressHydrationWarning={true}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#25176E]" /> : <Menu className="w-6 h-6 text-[#25176E]" />}
          </button>
        </div>

      </div>

      {/* FULL-SCREEN MOBILE & TABLET OVERLAY MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuOverlayVariants}
              className="fixed inset-0 w-full max-w-full h-full min-h-screen bg-[#F6F4FE] z-40 flex flex-col justify-between px-6 sm:px-10 pt-24 pb-10 xl:hidden overflow-y-auto"
              suppressHydrationWarning={true}
            >
              {/* Navigation Links Container */}
              <div className="space-y-4 pt-2">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#25176E]/60 mb-3 px-1">
                  Navigation Menu
                </p>

                <div className="flex flex-col space-y-2.5">
                  
                  {/* Home */}
                  <a
                    href="#top"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, "#top");
                    }}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/85 border border-[#EBE6FE] text-[#1E1266] font-bold text-base shadow-xs hover:bg-[#25176E] hover:text-white transition-all group"
                  >
                    <span>Home</span>
                    <ChevronRight className="w-5 h-5 text-[#64748B] group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* About Us */}
                  <a
                    href="#about"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, "#about");
                    }}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/85 border border-[#EBE6FE] text-[#1E1266] font-bold text-base shadow-xs hover:bg-[#25176E] hover:text-white transition-all group"
                  >
                    <span>About Us</span>
                    <ChevronRight className="w-5 h-5 text-[#64748B] group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* Courses We Offer Sub-Accordion (Diploma, Intermediate, SSC) */}
                  <div className="rounded-2xl bg-white/85 border border-[#EBE6FE] overflow-hidden">
                    <button
                      onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                      className="w-full flex items-center justify-between p-3.5 text-[#1E1266] font-bold text-base text-left"
                    >
                      <span>Courses We Offer</span>
                      <ChevronDown className={`w-5 h-5 text-[#64748B] transition-transform duration-200 ${mobileCoursesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileCoursesOpen && (
                      <div className="px-3 pb-3 pt-1 space-y-2 border-t border-[#F0EBFF]">
                        {/* 1. Diploma Sub-Category */}
                        <div className="rounded-xl bg-[#F6F4FE] p-2 space-y-1.5 border border-[#EBE6FE]">
                          <button
                            onClick={() => setMobileDiplomaOpen(!mobileDiplomaOpen)}
                            className="w-full flex items-center justify-between p-1.5 text-[#25176E] font-extrabold text-xs text-left"
                          >
                            <span>Diploma Engineering Branches</span>
                            <ChevronDown className={`w-4 h-4 text-[#25176E] transition-transform duration-200 ${mobileDiplomaOpen ? "rotate-180" : ""}`} />
                          </button>
                          {mobileDiplomaOpen && (
                            <div className="space-y-1 pt-1">
                              {diplomaBranches.map((branch) => (
                                <button
                                  key={branch.id}
                                  onClick={() => handleCourseClick(branch.id)}
                                  className="w-full text-left p-2 rounded-lg bg-white text-[#1E1266] font-bold text-xs flex items-center justify-between hover:bg-[#25176E] hover:text-white transition-colors"
                                >
                                  <span>{branch.name}</span>
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F0EBFF] text-[#25176E] font-black">{branch.code}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* 2. Intermediate Sub-Category */}
                        <div className="rounded-xl bg-[#F6F4FE] p-2 space-y-1.5 border border-[#EBE6FE]">
                          <button
                            onClick={() => setMobileInterOpen(!mobileInterOpen)}
                            className="w-full flex items-center justify-between p-1.5 text-[#25176E] font-extrabold text-xs text-left"
                          >
                            <span>Intermediate Streams</span>
                            <ChevronDown className={`w-4 h-4 text-[#25176E] transition-transform duration-200 ${mobileInterOpen ? "rotate-180" : ""}`} />
                          </button>
                          {mobileInterOpen && (
                            <div className="space-y-1 pt-1">
                              {intermediateStreams.map((stream) => (
                                <button
                                  key={stream.id}
                                  onClick={() => handleCourseClick(stream.id)}
                                  className="w-full text-left p-2 rounded-lg bg-white text-[#1E1266] font-bold text-xs flex items-center justify-between hover:bg-[#25176E] hover:text-white transition-colors"
                                >
                                  <span>{stream.name}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* 3. SSC Class 10th Direct Button */}
                        <button
                          onClick={() => handleCourseClick("ssc-10th")}
                          className="w-full text-left p-2.5 rounded-xl bg-[#25176E] text-white font-extrabold text-xs flex items-center justify-between hover:bg-[#1b1054] transition-colors"
                        >
                          <span>SSC Class 10th Board</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Entrance Exams Sub-Accordion */}
                  <div className="rounded-2xl bg-white/85 border border-[#EBE6FE] overflow-hidden">
                    <button
                      onClick={() => setMobileExamsOpen(!mobileExamsOpen)}
                      className="w-full flex items-center justify-between p-3.5 text-[#1E1266] font-bold text-base text-left"
                    >
                      <span>Entrance Exams</span>
                      <ChevronDown className={`w-5 h-5 text-[#64748B] transition-transform duration-200 ${mobileExamsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileExamsOpen && (
                      <div className="px-3.5 pb-3.5 pt-1 space-y-1.5 border-t border-[#F0EBFF]">
                        {entranceExams.map((exam) => (
                          <button
                            key={exam.id}
                            onClick={() => handleExamClick(exam.id)}
                            className="w-full text-left p-2.5 rounded-xl bg-[#F6F4FE] text-[#25176E] font-bold text-xs flex flex-col hover:bg-[#25176E] hover:text-white transition-colors group/m"
                          >
                            <span className="font-extrabold">{exam.name}</span>
                            <span className="text-[10px] text-[#64748B] group-hover/m:text-white/80 font-normal">{exam.tag}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Career Guidance */}
                  <Link
                    href="/career-guidance"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/85 border border-[#EBE6FE] text-[#1E1266] font-bold text-base shadow-xs hover:bg-[#25176E] hover:text-white transition-all group"
                  >
                    <span>Career Guidance & Counseling</span>
                    <ChevronRight className="w-5 h-5 text-[#64748B] group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* Faculty */}
                  <a
                    href="#faculty"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, "#faculty");
                    }}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/85 border border-[#EBE6FE] text-[#1E1266] font-bold text-base shadow-xs hover:bg-[#25176E] hover:text-white transition-all group"
                  >
                    <span>Faculty & Instructors</span>
                    <ChevronRight className="w-5 h-5 text-[#64748B] group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* Director's Message */}
                  <a
                    href="#director"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, "#director");
                    }}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/85 border border-[#EBE6FE] text-[#1E1266] font-bold text-base shadow-xs hover:bg-[#25176E] hover:text-white transition-all group"
                  >
                    <span>Director's Message</span>
                    <ChevronRight className="w-5 h-5 text-[#64748B] group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* Campus Gallery */}
                  <a
                    href="#gallery"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, "#gallery");
                    }}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/85 border border-[#EBE6FE] text-[#1E1266] font-bold text-base shadow-xs hover:bg-[#25176E] hover:text-white transition-all group"
                  >
                    <span>Campus Gallery</span>
                    <ChevronRight className="w-5 h-5 text-[#64748B] group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* Student Testimonials */}
                  <a
                    href="#testimonials"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, "#testimonials");
                    }}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/85 border border-[#EBE6FE] text-[#1E1266] font-bold text-base shadow-xs hover:bg-[#25176E] hover:text-white transition-all group"
                  >
                    <span>Student Testimonials</span>
                    <ChevronRight className="w-5 h-5 text-[#64748B] group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </a>

                </div>
              </div>

              {/* Mobile Bottom Action Buttons */}
              <div className="pt-5 border-t border-[#EBE6FE]">
                <a
                  href="#contact-form-block"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e, "#contact-form-block");
                  }}
                  className="w-full py-3.5 rounded-full bg-[#25176E] text-white font-bold text-center text-sm shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Enrol Now for Next Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
    </nav>
  );
}
