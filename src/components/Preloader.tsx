"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      key="website-preloader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(8px)",
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#F6F4FE] overflow-hidden select-none pointer-events-auto"
    >
      {/* Website Blue Radial Glow Backgrounds - Centered Perfectly at Screen Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#5B3DF5]/20 blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] rounded-full bg-[#25176E]/30 blur-[80px] pointer-events-none" />

      {/* Animation Container - Centered Vertically & Horizontally */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Emblem Logo Container: Smooth Bottom Entrance -> Gentle Floating */}
        <motion.div
          initial={{ y: "100vh", opacity: 0, scale: 0.6 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 flex items-center justify-center"
        >
          {/* Breathing float loop after arrival */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.1,
            }}
            className="w-full h-full flex items-center justify-center relative"
          >
            <Image
              src="/images/iqloader-logo.png"
              alt="IQ Academy Logo"
              width={192}
              height={192}
              loading="eager"
              className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(91,61,245,0.35)]"
            />
          </motion.div>
        </motion.div>

        {/* Sleek Blue Loader Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 flex flex-col items-center gap-3 text-center"
        >
          <div className="w-40 sm:w-52 h-1.5 bg-[#E1DBFD] rounded-full overflow-hidden relative shadow-inner">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="w-full h-full bg-gradient-to-r from-[#1E1266] via-[#5B3DF5] to-[#7C3AED] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
