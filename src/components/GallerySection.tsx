"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

// Initial gallery items (will be populated with extracted Google Maps images)
export const initialGalleryImages: GalleryItem[] = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/gallery-${i + 1}.jpg`,
  alt: `IQ Academy Gallery Photo ${i + 1}`,
  title: `Life at IQ Academy Photo ${i + 1}`,
}));

// Custom Bento Grid span configurations for visual harmony (Mobile 2-col & Desktop 4-col)
const bentoSpans = [
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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const openLightbox = (index: number) => {
    // Only open full image view modal on Mobile viewports (< 768px)
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      return;
    }
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "unset";
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % initialGalleryImages.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + initialGalleryImages.length) % initialGalleryImages.length
      );
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section id="gallery" className="py-14 sm:py-24 relative bg-white border-t border-[#EBE6FE] overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F0EBFF] text-[#25176E] text-xs font-extrabold uppercase tracking-widest border border-[#EBE6FE]">
            <Sparkles className="w-3.5 h-3.5 text-[#25176E]" />
            <span>Campus & Events</span>
          </div>
          <h2 className="font-display-saasmo text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#1E1266] mt-2">
            Life at IQ Academy
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            A glimpse into our classrooms, academic sessions, industrial visits, and campus environment.
          </p>
        </motion.div>

        {/* Dynamic Responsive Bento Grid (2-cols on mobile, 4-cols on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[140px] sm:auto-rows-[260px] gap-3 sm:gap-5">
          {initialGalleryImages.map((item, index) => {
            const spanClass = bentoSpans[index] || "col-span-1 row-span-1 h-full";
            const isLoaded = loadedImages[item.id];
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-[#EBE6FE] bg-[#F6F4FE] md:cursor-default cursor-pointer hover:shadow-lg transition-all duration-300 ${spanClass}`}
              >
                {/* Skeleton UI Loading Placeholder */}
                {!isLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F0EBFF] via-[#EBE6FE] to-[#F0EBFF] animate-pulse rounded-2xl sm:rounded-3xl flex items-center justify-center z-10">
                    <div className="w-7 h-7 rounded-full border-2 border-[#25176E]/20 border-t-[#25176E] animate-spin" />
                  </div>
                )}

                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={`object-cover group-hover:scale-105 transition-all duration-500 ease-out ${
                    isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  loading={index < 4 ? "eager" : "lazy"}
                  onLoad={() => handleImageLoad(item.id)}
                />

                {/* Mobile-only subtle touch indicator */}
                <div className="md:hidden absolute inset-0 bg-black/10 group-active:bg-black/20 transition-all duration-200 flex items-center justify-center opacity-0 group-active:opacity-100 z-20">
                  <div className="w-9 h-9 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/40 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>

      {/* Animated Full-Screen Lightbox Modal for Mobile View */}
      {selectedImageIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
        >
          {/* Main Modal Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-b from-black/80 to-black/95 flex items-center justify-center animate-in zoom-in-95 duration-300"
          >
            {/* Close Button (X Mark) */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 active:scale-95 transition-all border border-white/30 backdrop-blur-md shadow-lg"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Arrow for Mobile Navigation */}
            <button
              onClick={showPrev}
              className="absolute left-3 z-50 p-2.5 rounded-full bg-white/15 text-white active:scale-95 transition-all border border-white/25 backdrop-blur-md shadow-md"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow for Mobile Navigation */}
            <button
              onClick={showNext}
              className="absolute right-3 z-50 p-2.5 rounded-full bg-white/15 text-white active:scale-95 transition-all border border-white/25 backdrop-blur-md shadow-md"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image */}
            <Image
              src={initialGalleryImages[selectedImageIndex].src}
              alt={initialGalleryImages[selectedImageIndex].alt}
              fill
              className="object-contain p-2"
              sizes="100vw"
              priority
            />

            {/* Bottom Bar - Photo Counter */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none">
              <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs text-white font-semibold shadow-md">
                Photo {selectedImageIndex + 1} of {initialGalleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}



