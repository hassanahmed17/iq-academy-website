"use client";

import React, { useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#F6F4FE] text-[#1E1266] w-full max-w-full overflow-x-hidden relative selection:bg-[#25176E] selection:text-white">
      {mounted ? (
        <>
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
          <TestimonialsCanvas />
          <ContactSection />
          <Footer />
        </>
      ) : (
        <div className="min-h-screen bg-[#F6F4FE] flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-3 border-[#25176E]/20 border-t-[#25176E] animate-spin" />
        </div>
      )}
    </main>
  );
}
