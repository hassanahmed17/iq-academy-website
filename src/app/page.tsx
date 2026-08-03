"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricCardsSection from "@/components/MetricCardsSection";
import AboutUsSection from "@/components/AboutUsSection";
import EngineeringCoursesTrack from "@/components/EngineeringCoursesTrack";
import CoachingServices from "@/components/CoachingServices";
import FacultySection from "@/components/FacultySection";
import DirectorSection from "@/components/DirectorSection";
import VideoReviewsSection from "@/components/VideoReviewsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsCanvas from "@/components/TestimonialsCanvas";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    const MIN_LOADER_TIME = 1800; // Entrance and scale completion
    const startTime = Date.now();
    let timerId: NodeJS.Timeout | null = null;

    const handleLoadComplete = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_LOADER_TIME - elapsedTime);

      timerId = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "";
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      handleLoadComplete();
    } else {
      window.addEventListener("load", handleLoadComplete);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
      window.removeEventListener("load", handleLoadComplete);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F6F4FE] text-[#1E1266] w-full max-w-full overflow-x-hidden relative selection:bg-[#25176E] selection:text-white">
      {/* Preloader Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* Main Website Content (Renders & Preloads in DOM behind Preloader) */}
      <Navbar />
      <HeroSection />
      <MetricCardsSection />
      <AboutUsSection />
      {/* Section 3: Polytechnic Diploma Branches */}
      <EngineeringCoursesTrack />
      {/* Section 4: Specialized Coaching for Polytechnic & ECET Aspirants */}
      <CoachingServices />
      <FacultySection />
      <DirectorSection />
      <VideoReviewsSection />
      <GallerySection />
      {/* Section 9: Testimonials */}
      <TestimonialsCanvas />
      <ContactSection />
      <Footer />
    </main>
  );
}

