"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  objectPos?: string;
}

// 1. Campus Life Gallery Images (11 photos)
export const initialGalleryImages: GalleryItem[] = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/gallery-${i + 1}.jpg`,
  alt: `IQ Academy Campus Photo ${i + 1}`,
  title: `Life at IQ Academy Photo ${i + 1}`,
}));

// 2. Award Ceremony Gallery Images (16 photos)
export const awardGalleryImages: GalleryItem[] = [
  { id: 101, src: "/images/awards/award-1.jpg", alt: "IQ Academy Award Ceremony 1", title: "Award Ceremony Photo 1" },
  { id: 102, src: "/images/awards/award-2.webp", alt: "IQ Academy Award Ceremony 2", title: "Award Ceremony Photo 2" },
  { id: 103, src: "/images/awards/award-3.webp", alt: "IQ Academy Award Ceremony 3", title: "Award Ceremony Photo 3" },
  { id: 104, src: "/images/awards/award-4.webp", alt: "IQ Academy Award Ceremony 4", title: "Award Ceremony Photo 4" },
  { id: 105, src: "/images/awards/award-5.webp", alt: "IQ Academy Award Ceremony 5", title: "Award Ceremony Photo 5" },
  { id: 106, src: "/images/awards/award-6.webp", alt: "IQ Academy Award Ceremony 6", title: "Award Ceremony Photo 6" },
  { id: 107, src: "/images/awards/award-7.webp", alt: "IQ Academy Award Ceremony 7", title: "Award Ceremony Photo 7" },
  // 8th photo shifted slightly downwards in framing
  { id: 108, src: "/images/awards/award-8.webp", alt: "IQ Academy Award Ceremony 8", title: "Award Ceremony Photo 8", objectPos: "object-[center_35%]" },
  { id: 109, src: "/images/awards/award-9.webp", alt: "IQ Academy Award Ceremony 9", title: "Award Ceremony Photo 9" },
  { id: 110, src: "/images/awards/award-10.webp", alt: "IQ Academy Award Ceremony 10", title: "Award Ceremony Photo 10" },
  { id: 111, src: "/images/awards/award-11.webp", alt: "IQ Academy Award Ceremony 11", title: "Award Ceremony Photo 11" },
  { id: 112, src: "/images/awards/award-12.webp", alt: "IQ Academy Award Ceremony 12", title: "Award Ceremony Photo 12" },
  { id: 113, src: "/images/awards/award-13.jpg", alt: "IQ Academy Award Ceremony 13", title: "Award Ceremony Photo 13" },
  { id: 114, src: "/images/awards/award-14.webp", alt: "IQ Academy Award Ceremony 14", title: "Award Ceremony Photo 14" },
  { id: 115, src: "/images/awards/award-15.webp", alt: "IQ Academy Award Ceremony 15", title: "Award Ceremony Photo 15" },
  { id: 116, src: "/images/awards/award-16.webp", alt: "IQ Academy Award Ceremony 16", title: "Award Ceremony Photo 16" },
];

// Custom Bento Grid span configurations for visual harmony (Campus Life - 11 photos)
const campusBentoSpans = [
  "col-span-2 sm:col-span-2 lg:col-span-2 row-span-2 lg:row-span-2 h-full", // 1: Hero Featured
  "col-span-1 row-span-1 h-full", // 2: Standard
  "col-span-1 row-span-1 h-full", // 3: Standard
  "col-span-2 sm:col-span-2 lg:col-span-2 row-span-1 h-full", // 4: Wide
  "col-span-1 row-span-1 h-full", // 5: Standard
  "col-span-1 sm:col-span-1 lg:col-span-1 row-span-2 lg:row-span-2 h-full", // 6: Tall Portrait
  "col-span-1 row-span-1 h-full", // 7: Standard
  "col-span-1 row-span-1 h-full", // 8: Standard
  "col-span-1 row-span-1 h-full", // 9: Standard
  "col-span-2 sm:col-span-2 lg:col-span-2 row-span-1 h-full", // 10: Ultrawide
  "col-span-1 row-span-1 h-full", // 11: Square
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<"campus" | "awards">("campus");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const activeImages = activeTab === "campus" ? initialGalleryImages : awardGalleryImages;

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "unset";
    }
  };

  const showNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % activeImages.length);
    }
  };

  const showPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + activeImages.length) % activeImages.length
      );
    }
  };

  useEffect(() => {
    if (selectedImageIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, activeImages.length]);

  const awardRow1 = awardGalleryImages.slice(0, 6);
  const awardRow2 = awardGalleryImages.slice(6, 11);
  const awardRow3 = awardGalleryImages.slice(11, 16);

  return (
    <section id="gallery" className="py-14 sm:py-24 relative bg-white border-t border-[#EBE6FE] overflow-hidden" suppressHydrationWarning={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning={true}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F0EBFF] text-[#25176E] text-xs font-extrabold uppercase tracking-widest border border-[#EBE6FE]">
            <span>Campus & Events</span>
          </div>
          
          <h2 className="font-display-saasmo text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#1E1266]">
            Campus Highlights & Celebrations
          </h2>
          
          <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            A glimpse into our campus culture, academic achievements, and memorable moments.
          </p>

          {/* Clean Category Tabs */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => {
                setActiveTab("campus");
                setSelectedImageIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                activeTab === "campus"
                  ? "bg-[#25176E] text-white shadow-md border border-[#25176E]"
                  : "bg-[#F6F4FE] text-[#64748B] hover:text-[#1E1266] border border-[#EBE6FE] hover:bg-[#EBE6FE]/50"
              }`}
            >
              Campus Life
            </button>

            <button
              onClick={() => {
                setActiveTab("awards");
                setSelectedImageIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                activeTab === "awards"
                  ? "bg-[#25176E] text-white shadow-md border border-[#25176E]"
                  : "bg-[#F6F4FE] text-[#64748B] hover:text-[#1E1266] border border-[#EBE6FE] hover:bg-[#EBE6FE]/50"
              }`}
            >
              Award Ceremony
            </button>
          </div>
        </div>

        {/* --- TAB CONTENT AREA --- */}
        <AnimatePresence mode="wait">
          {activeTab === "campus" ? (
            /* 1. CAMPUS LIFE BENTO GRID (11 Photos - Always Visible) */
            <motion.div
              key="campus-life"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[140px] sm:auto-rows-[260px] gap-3 sm:gap-5"
            >
              {initialGalleryImages.map((item, index) => {
                const spanClass = campusBentoSpans[index] || "col-span-1 row-span-1 h-full";
                return (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#EBE6FE] bg-[#F6F4FE] cursor-pointer hover:shadow-lg transition-all duration-300 ${spanClass}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      quality={80}
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                  </div>
                );
              })}
            </motion.div>
          ) : (
            /* 2. AWARD CEREMONY - 3 LINES INFINITE LEFTWARD MARQUEES (Performance Optimized) */
            <motion.div
              key="award-ceremony"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-3 sm:space-y-4"
            >
              {/* Row 1 Marquee (Leftward Loop) */}
              <div className="w-full overflow-hidden">
                <Marquee pauseOnHover className="[--duration:35s] py-0.5 gap-3 sm:gap-4" repeat={3}>
                  {awardRow1.map((item, idx) => (
                    <div
                      key={`r1-${item.id}`}
                      onClick={() => openLightbox(idx)}
                      className="relative w-48 sm:w-64 h-32 sm:h-40 rounded-2xl overflow-hidden shadow-xs border border-[#EBE6FE]/80 cursor-pointer shrink-0 bg-[#F6F4FE] hover:scale-[1.02] transition-transform duration-300"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        quality={80}
                        loading="lazy"
                        className={`object-cover ${item.objectPos || "object-center"}`}
                        sizes="(max-width: 640px) 192px, 260px"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>

              {/* Row 2 Marquee (Leftward Loop) */}
              <div className="w-full overflow-hidden">
                <Marquee pauseOnHover className="[--duration:45s] py-0.5 gap-3 sm:gap-4" repeat={3}>
                  {awardRow2.map((item, idx) => (
                    <div
                      key={`r2-${item.id}`}
                      onClick={() => openLightbox(6 + idx)}
                      className="relative w-52 sm:w-72 h-32 sm:h-40 rounded-2xl overflow-hidden shadow-xs border border-[#EBE6FE]/80 cursor-pointer shrink-0 bg-[#F6F4FE] hover:scale-[1.02] transition-transform duration-300"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        quality={80}
                        loading="lazy"
                        className={`object-cover ${item.objectPos || "object-center"}`}
                        sizes="(max-width: 640px) 208px, 280px"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>

              {/* Row 3 Marquee (Leftward Loop) */}
              <div className="w-full overflow-hidden">
                <Marquee pauseOnHover className="[--duration:38s] py-0.5 gap-3 sm:gap-4" repeat={3}>
                  {awardRow3.map((item, idx) => (
                    <div
                      key={`r3-${item.id}`}
                      onClick={() => openLightbox(11 + idx)}
                      className="relative w-48 sm:w-64 h-32 sm:h-40 rounded-2xl overflow-hidden shadow-xs border border-[#EBE6FE]/80 cursor-pointer shrink-0 bg-[#F6F4FE] hover:scale-[1.02] transition-transform duration-300"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        quality={80}
                        loading="lazy"
                        className={`object-cover ${item.objectPos || "object-center"}`}
                        sizes="(max-width: 640px) 192px, 260px"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Animated Full-Screen Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
        >
          {/* Main Modal Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black/95 flex items-center justify-center animate-in zoom-in-95 duration-300"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 active:scale-95 transition-all border border-white/30 backdrop-blur-md shadow-lg cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Arrow Navigation */}
            <button
              onClick={showPrev}
              className="absolute left-4 z-50 p-3 rounded-full bg-white/15 text-white hover:bg-white/30 active:scale-95 transition-all border border-white/25 backdrop-blur-md shadow-md cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow Navigation */}
            <button
              onClick={showNext}
              className="absolute right-4 z-50 p-3 rounded-full bg-white/15 text-white hover:bg-white/30 active:scale-95 transition-all border border-white/25 backdrop-blur-md shadow-md cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <Image
              src={activeImages[selectedImageIndex].src}
              alt={activeImages[selectedImageIndex].alt}
              fill
              quality={90}
              className="object-contain p-4"
              sizes="100vw"
              priority
            />

            {/* Bottom Bar - Photo Counter */}
            <div className="absolute bottom-4 inset-x-0 flex flex-col items-center gap-1.5 pointer-events-none px-4 text-center">
              <span className="px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs text-white font-bold shadow-md">
                Photo {selectedImageIndex + 1} of {activeImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
