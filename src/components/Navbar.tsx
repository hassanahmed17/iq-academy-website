"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronRight, ChevronDown, PhoneCall, Sparkles, GraduationCap } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const engineeringFields = [
  { id: "cse", name: "Computer Science Engineering", code: "CSE" },
  { id: "aiml", name: "Artificial Intelligence & ML", code: "AI & ML" },
  { id: "ce", name: "Civil Engineering", code: "CIVIL" },
  { id: "ece", name: "Electronics & Communication", code: "ECE" },
  { id: "eee", name: "Electrical & Electronics", code: "EEE" },
  { id: "me", name: "Mechanical Engineering", code: "MECH" },
];

const entranceExams = [
  { id: "exam-polycet", name: "POLYCET Coaching", tag: "Post-10th Diploma Entrance" },
  { id: "exam-ecet", name: "ECET Coaching", tag: "BE / B.Tech Lateral Entry" },
  { id: "exam-eapcet", name: "TS EAPCET (EAMCET)", tag: "Intermediate B.Tech Entrance" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coursesHover, setCoursesHover] = useState(false);
  const [examsHover, setExamsHover] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileExamsOpen, setMobileExamsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F6F4FE]/90 backdrop-blur-md border-b border-[#EBE6FE]" suppressHydrationWarning={true}>
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between h-16 md:h-20" suppressHydrationWarning={true}>
        
        {/* Brand Logo & Text (Shifted cleanly left on mobile) */}
        <a href="#top" onClick={(e) => handleNavClick(e, "#top")} className="flex items-center gap-1.5 sm:gap-3 group z-50">
          <img
            src="/images/iqae-crest.png"
            alt="IQ Academy of Excellence Shield Crest"
            className="h-8 sm:h-10 md:h-11 lg:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <img
            src="/images/iq-text-logo.png"
            alt="IQ Academy of Excellence"
            className="h-4.5 sm:h-7 md:h-8 w-auto object-contain group-hover:scale-102 transition-transform"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-semibold text-[#64748B]">
          
          {/* 1. Home */}
          <a href="#top" onClick={(e) => handleNavClick(e, "#top")} className="hover:text-[#25176E] transition-colors">
            Home
          </a>

          {/* 2. About Us */}
          <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-[#25176E] transition-colors">
            About Us
          </a>

          {/* 3. Engineering Fields with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesHover(true)}
            onMouseLeave={() => setCoursesHover(false)}
          >
            <a
              href="#courses"
              onClick={(e) => handleNavClick(e, "#courses")}
              className="hover:text-[#25176E] transition-colors py-2 flex items-center gap-1 cursor-pointer"
            >
              <span>Engineering Fields</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${coursesHover ? "rotate-180 text-[#25176E]" : ""}`} />
            </a>

            <AnimatePresence>
              {coursesHover && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-[#EBE6FE] p-2 z-50"
                >
                  <div className="space-y-0.5">
                    {engineeringFields.map((field) => (
                      <button
                        key={field.id}
                        onClick={() => handleCourseClick(field.id)}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#1E1266] hover:bg-[#F6F4FE] hover:text-[#25176E] transition-colors flex items-center justify-between group/item"
                      >
                        <span className="group-hover/item:translate-x-0.5 transition-transform">{field.name}</span>
                        <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-[#F0EBFF] text-[#25176E] shrink-0">
                          {field.code}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. Entrance Exams with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setExamsHover(true)}
            onMouseLeave={() => setExamsHover(false)}
          >
            <a
              href="#coaching"
              onClick={(e) => handleNavClick(e, "#coaching")}
              className="hover:text-[#25176E] transition-colors py-2 flex items-center gap-1 cursor-pointer"
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

          {/* 5. Faculty */}
          <a href="#faculty" onClick={(e) => handleNavClick(e, "#faculty")} className="hover:text-[#25176E] transition-colors">
            Faculty
          </a>

          {/* 6. Director's Message */}
          <a href="#director" onClick={(e) => handleNavClick(e, "#director")} className="hover:text-[#25176E] transition-colors">
            Director's Message
          </a>

          {/* 7. Gallery */}
          <a href="#gallery" onClick={(e) => handleNavClick(e, "#gallery")} className="hover:text-[#25176E] transition-colors">
            Gallery
          </a>

          {/* 8. Testimonials */}
          <a href="#testimonials" onClick={(e) => handleNavClick(e, "#testimonials")} className="hover:text-[#25176E] transition-colors">
            Testimonials
          </a>
        </div>

        {/* Desktop CTA Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact-form-block"
            onClick={(e) => handleNavClick(e, "#contact-form-block")}
            className="px-6 py-2.5 rounded-full bg-[#25176E] text-white font-bold text-sm hover:bg-[#1b1054] transition-all shadow-md flex items-center gap-1.5"
          >
            <span>Enrol Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="md:hidden flex items-center gap-2 z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#25176E] hover:bg-[#EBE6FE] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            suppressHydrationWarning={true}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#25176E]" /> : <Menu className="w-6 h-6 text-[#25176E]" />}
          </button>
        </div>

      </div>

      {/* FULL-SCREEN MOBILE OVERLAY MENU */}
      {mounted && (
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuOverlayVariants}
              className="fixed inset-0 w-screen h-screen min-h-screen bg-[#F6F4FE] z-40 flex flex-col justify-between px-6 pt-24 pb-10 md:hidden overflow-y-auto"
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

                  {/* Engineering Fields Sub-Accordion */}
                  <div className="rounded-2xl bg-white/85 border border-[#EBE6FE] overflow-hidden">
                    <button
                      onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                      className="w-full flex items-center justify-between p-3.5 text-[#1E1266] font-bold text-base text-left"
                    >
                      <span>Engineering Fields</span>
                      <ChevronDown className={`w-5 h-5 text-[#64748B] transition-transform duration-200 ${mobileCoursesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileCoursesOpen && (
                      <div className="px-3.5 pb-3.5 pt-1 space-y-1.5 border-t border-[#F0EBFF]">
                        {engineeringFields.map((field) => (
                          <button
                            key={field.id}
                            onClick={() => handleCourseClick(field.id)}
                            className="w-full text-left p-2.5 rounded-xl bg-[#F6F4FE] text-[#25176E] font-bold text-xs flex items-center justify-between hover:bg-[#25176E] hover:text-white transition-colors"
                          >
                            <span>{field.name}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#EBE6FE] text-[#1E1266] font-extrabold">{field.code}</span>
                          </button>
                        ))}
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
              <div className="pt-5 border-t border-[#EBE6FE] space-y-3">
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

                <div className="flex items-center justify-center gap-2 pt-1 text-xs font-semibold text-[#64748B]">
                  <PhoneCall className="w-3.5 h-3.5 text-[#25176E]" />
                  <span>IQ Academy of Excellence</span>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      )}
    </nav>
  );
}
