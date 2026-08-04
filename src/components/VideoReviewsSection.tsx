"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, Sparkles, MessageSquareQuote } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 0, scale: 0.98, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

interface VideoCardProps {
  id: number;
  src: string;
  studentName: string;
  course: string;
  quote: string;
  unmutedId: number | null;
  onToggleMute: (id: number) => void;
}

function VideoCardItem({ id, src, studentName, course, quote, unmutedId, onToggleMute }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const isMuted = unmutedId !== id;

  // Sync mute state and reset timeline to 0:00 on unmute
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (unmutedId === id) {
      video.currentTime = 0; // Restart timeline from 0:00 when unmuted!
      video.muted = false;
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      video.muted = true;
    }
  }, [unmutedId, id]);

  // Pause / Stop video when leaving page, tab, or viewport
  useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;
    if (!video || !card) return;

    // 1. Pause video when user scrolls out of section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(card);

    // 2. Pause video immediately when user switches browser tab or leaves page
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        video.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.unobserve(card);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const cur = video.currentTime;
      const dur = video.duration || 1;
      setProgress((cur / dur) * 100);
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[4/5] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-[#0F0A2C] group select-none flex flex-col justify-between"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        loop
        autoPlay
        muted
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        onClick={() => togglePlay()}
      />

      {/* Top Floating Header Controls */}
      <div className="relative z-30 p-4 flex items-center justify-between pointer-events-none">
        <span className="px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md text-[#D2FF00] text-xs font-extrabold border border-white/15 flex items-center gap-1.5 shadow-lg">
          <MessageSquareQuote className="w-3.5 h-3.5 text-[#D2FF00]" />
          <span>Student Feedback</span>
        </span>

        {/* Audio Mute / Unmute Toggle Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleMute(id);
          }}
          className="pointer-events-auto p-2.5 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/25 hover:bg-[#25176E] hover:border-[#D2FF00] transition-all shadow-xl active:scale-95 cursor-pointer"
          title={isMuted ? "Unmute Sound" : "Mute Sound"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-white/90" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#D2FF00] animate-pulse" />
          )}
        </button>
      </div>

      {/* Center Play/Pause Touch Overlay */}
      <div
        onClick={() => togglePlay()}
        className={`absolute inset-0 z-20 flex items-center justify-center bg-black/25 transition-opacity duration-300 ${
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        <div className="w-14 h-14 rounded-full bg-[#25176E]/90 backdrop-blur-md border border-[#D2FF00]/60 flex items-center justify-center text-[#D2FF00] shadow-2xl transform scale-90 group-hover:scale-100 transition-all cursor-pointer">
          {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
        </div>
      </div>

      {/* Bottom Information Scrim */}
      <div className="relative z-30 p-4 sm:p-5 bg-gradient-to-t from-[#09051C] via-[#09051C]/85 to-transparent space-y-2 pointer-events-auto">
        <div>
          <h4 className="font-display-saasmo text-base sm:text-lg font-extrabold text-white leading-snug">
            {studentName}
          </h4>
          <p className="text-xs font-semibold text-[#D2FF00] mt-0.5">
            {course}
          </p>
          <p className="text-[11px] sm:text-xs text-white/80 mt-1 line-clamp-2 leading-relaxed italic">
            &ldquo;{quote}&rdquo;
          </p>
        </div>

        {/* Video Progress Line - VISIBLE ONLY WHEN UNMUTED */}
        {!isMuted && (
          <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden mt-3 transition-all duration-300">
            <div
              className="bg-[#D2FF00] h-full transition-all duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function VideoReviewsSection() {
  const [unmutedId, setUnmutedId] = useState<number | null>(null);

  const handleToggleMute = (id: number) => {
    setUnmutedId((prev) => (prev === id ? null : id));
  };
  const containerRef = useRef<HTMLDivElement>(null);

  const videoReviewsData = [
    {
      id: 1,
      src: "/videos/1000187333.mp4",
      studentName: "IQ Academy Student Review",
      course: "Student Feedback & Experience",
      quote: "IQ Academy faculty explained every concept clearly with regular practice tests. It helped me achieve top academic confidence!",
    },
    {
      id: 2,
      src: "/videos/1000187334.mp4",
      studentName: "IQ Academy Student Review",
      course: "Student Feedback & Experience",
      quote: "The shortcut formulas, mock tests, and faculty guidance gave me the confidence to excel in state entrance exams!",
    },
    {
      id: 3,
      src: "/videos/students-success-stories.mp4",
      studentName: "Students Success Stories",
      course: "Student Feedback & Success",
      quote: "Watch our students share their inspiring learning journey, rank achievements, and success stories at IQ Academy of Excellence!",
    },
  ];

  return (
    <section id="video-reviews" className="py-16 sm:py-24 relative bg-white border-y border-[#EBE6FE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Indigo Glassmorphic Container with Noisy Gradient */}
        <div className="relative rounded-[32px] p-6 sm:p-10 lg:p-14 text-white shadow-2xl overflow-hidden border border-[#372692]">
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

          {/* Soft Subtle Flickering Grid Overlay Effect */}
          <FlickeringGrid
            squareSize={4}
            gridGap={6}
            flickerChance={0.15}
            color="rgb(210, 255, 0)"
            maxOpacity={0.08}
            className="absolute inset-0 z-0 pointer-events-none opacity-20"
          />
          
          {/* Decorative Glow Orbs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D2FF00]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Section Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="relative z-10 space-y-10 sm:space-y-12"
          >
            
            {/* Header Eyebrow & Title */}
            <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#D2FF00] text-xs font-extrabold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-[#D2FF00]" />
                <span>Student Video Testimonials</span>
              </div>

              <h2 className="font-display-saasmo text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight">
                Real Student Feedback & Reviews
              </h2>
              <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto leading-relaxed">
                Watch our students share their genuine learning experience and academic growth with IQ Academy.
              </p>
            </motion.div>

            {/* 3 Video Cards Grid (4:5 Aspect Ratio) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-center">
              {videoReviewsData.map((video) => (
                <motion.div key={video.id} variants={itemVariants} whileHover={{ y: -6, transition: { duration: 0.25 } }}>
                  <VideoCardItem
                    {...video}
                    unmutedId={unmutedId}
                    onToggleMute={handleToggleMute}
                  />
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
