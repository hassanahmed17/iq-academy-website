"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronRight, PhoneCall } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Engineering Fields", href: "#courses" },
    { name: "Entrance Exams (POLYCET & ECET)", href: "#coaching" },
    { name: "Faculty & Instructors", href: "#faculty" },
    { name: "Director's Message", href: "#director" },
    { name: "Student Testimonials", href: "#testimonials" },
  ];

  // Option A: Top-Right Expanding Circle Mask (Typed with as const for framer-motion v12 compatibility)
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20" suppressHydrationWarning={true}>
        
        {/* Brand Logo & Text */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group z-50">
          <img
            src="/images/iqae-crest.png"
            alt="IQ Academy of Excellence Shield Crest"
            className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <img
            src="/images/iq-text-logo.png"
            alt="IQ Academy of Excellence"
            className="h-5 sm:h-7 md:h-8 w-auto object-contain group-hover:scale-102 transition-transform"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#64748B]">
          <a href="#about" className="hover:text-[#25176E] transition-colors">
            About Us
          </a>
          <a href="#courses" className="hover:text-[#25176E] transition-colors">
            Engineering Fields
          </a>
          <a href="#coaching" className="hover:text-[#25176E] transition-colors">
            Entrance Exams
          </a>
          <a href="#faculty" className="hover:text-[#25176E] transition-colors">
            Faculty
          </a>
          <a href="#director" className="hover:text-[#25176E] transition-colors">
            Director
          </a>
          <a href="#testimonials" className="hover:text-[#25176E] transition-colors">
            Testimonials
          </a>
        </div>

        {/* Desktop CTA Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
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

      {/* FULL-SCREEN MOBILE OVERLAY MENU (Renders safely after client mount) */}
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
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-white/85 border border-[#EBE6FE] text-[#1E1266] font-bold text-base shadow-xs hover:bg-[#25176E] hover:text-white transition-all group"
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-5 h-5 text-[#64748B] group-hover:text-white transition-transform group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Bottom Action Buttons */}
              <div className="pt-5 border-t border-[#EBE6FE] space-y-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
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
