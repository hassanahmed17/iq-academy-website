"use client";

import React, { useState } from "react";
import Image from "next/image";
import { UserRound } from "lucide-react";
import { motion, Variants } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/services-card";

interface FacultyMember {
  id: number;
  name: string;
  qualification: string;
  subject: string;
  experience: string;
  image: string;
  objectPos?: string;
  imageClass?: string;
}

const facultyList: FacultyMember[] = [
  {
    id: 1,
    name: "M.D. Abdul Rafeeq",
    qualification: "M.E., M.Sc.",
    subject: "Mechanical Engineering, Mathematics",
    experience: "13+ Years Experience",
    image: "/images/faculty/rafeeq.jpg",
    objectPos: "object-[center_0%]",
    imageClass: "-translate-y-[12%] scale-[1.18]",
  },
  {
    id: 2,
    name: "Mohammed Amin Sultan",
    qualification: "M.Tech",
    subject: "Electronics & Communication, Physics",
    experience: "13+ Years Experience",
    image: "/images/faculty/aminsultan.jpg",
    objectPos: "object-[center_0%]",
    imageClass: "-translate-y-[6%] scale-[1.08]",
  },
  {
    id: 3,
    name: "Syed Sultan",
    qualification: "M.Sc.",
    subject: "Chemistry",
    experience: "10+ Years Experience",
    image: "/images/faculty/syedsultan.jpg",
    objectPos: "object-top",
  },
  {
    id: 4,
    name: "M. A Amer Qureshi",
    qualification: "M.Tech",
    subject: "Civil Engineering",
    experience: "8+ Years Experience",
    image: "/images/faculty/quraishi.jpg",
    objectPos: "object-[center_0%]",
    imageClass: "-translate-y-[15%] scale-[1.22]",
  },
  {
    id: 5,
    name: "Mohammed Taha Hussain",
    qualification: "B.E.",
    subject: "Computer Science Engineering",
    experience: "3+ Years Experience",
    image: "/images/faculty/taha.jpg",
    objectPos: "object-[center_0%]",
    imageClass: "-translate-y-[16%] scale-[1.22]",
  },
  {
    id: 6,
    name: "Mir Mohsin Ali",
    qualification: "B.Tech",
    subject: "Computer Science Engineering",
    experience: "5+ Years Experience",
    image: "",
  },
  {
    id: 7,
    name: "Javed Sir",
    qualification: "M.Tech",
    subject: "Electrical & Electronics (EEE)",
    experience: "5+ Years Experience",
    image: "",
  },
];

const gradientStyle = {
  background:
    "linear-gradient(to bottom, rgba(31,17,80,0) 35%, rgba(31,17,80,0.65) 70%, rgba(20,11,59,0.96) 100%)",
};

function FacultyCard({ member }: { member: FacultyMember }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const subjects = member.subject.split(",").map((s) => s.trim()).filter(Boolean);

  return (
    <div className="group flex-none w-full rounded-2xl sm:rounded-3xl relative overflow-hidden aspect-[4/3.4] md:aspect-[4/3] shadow-md hover:shadow-xl border border-[#EBE6FE]/40 transition-all duration-300">
      {/* Background Photo with Grayscale Filter or Gradient Fallback */}
      {member.image ? (
        <>
          {!imageLoaded && (
            <div className="absolute inset-0 bg-[#1E1266]/80 animate-pulse flex items-center justify-center z-0" />
          )}
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={`object-cover ${member.objectPos || "object-top"} grayscale contrast-[1.08] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out ${
              member.imageClass || ""
            } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 33vw"
            onLoad={() => setImageLoaded(true)}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#25176E] via-[#1E1266] to-[#140B3B] flex items-center justify-center">
          <UserRound className="w-20 h-20 text-white/20 stroke-[1.2]" />
        </div>
      )}

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 pointer-events-none" style={gradientStyle} />

      {/* Top Experience Pill Tag */}
      <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 shadow-xs z-10">
        {member.experience}
      </span>

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-5 pb-2.5 sm:pb-5 flex flex-col justify-end text-left z-10">
        <h3 className="font-display-saasmo text-lg sm:text-xl font-bold text-white mb-0.5 tracking-tight drop-shadow-xs">
          {member.name}
        </h3>
        <p className="text-[11px] sm:text-xs text-white/80 font-medium mb-2.5">
          {member.qualification}
        </p>

        {/* Subject Specialization Badges */}
        <div className="flex flex-wrap gap-1.5">
          {subjects.map((sub, idx) => (
            <span
              key={idx}
              className="bg-white/20 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-lg border border-white/10 shadow-2xs"
            >
              {sub}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FacultySection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32, filter: "blur(3px)" },
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
    <section id="faculty" className="py-16 sm:py-24 relative bg-[#F6F4FE] overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#25176E] bg-[#F0EBFF] px-3.5 py-1 rounded-full border border-[#EBE6FE]">
            High Academics Faculty
          </span>
          <h2 className="font-display-saasmo text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1E1266]">
            Skilled Instructors & Educators
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Our distinguished faculty members hold postgraduate & doctorate degrees from premier technical institutions with over a decade of dedicated teaching experience.
          </p>
        </motion.div>

        {/* Mobile View Carousel */}
        <motion.div variants={cardVariants} className="block md:hidden relative px-1">
          <Carousel opts={{ align: "start", loop: true }} className="relative w-full">
            <CarouselContent className="-ml-3">
              {facultyList.map((member) => (
                <CarouselItem key={member.id} className="pl-3 basis-[88%] sm:basis-[65%]">
                  <div className="h-full py-1">
                    <FacultyCard member={member} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-6 px-1">
              <CarouselDots />
              <div className="flex items-center gap-2 z-10">
                <CarouselPrevious className="static translate-x-0 translate-y-0 w-9 h-9 bg-white text-[#25176E] border border-[#EBE6FE] shadow-sm hover:bg-[#F0EBFF] active:scale-95" />
                <CarouselNext className="static translate-x-0 translate-y-0 w-9 h-9 bg-[#25176E] text-white border border-[#25176E] shadow-sm hover:bg-[#1E1266] active:scale-95" />
              </div>
            </div>
          </Carousel>
        </motion.div>

        {/* Desktop View 3-Column Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyList.map((member) => (
            <motion.div key={member.id} variants={cardVariants} whileHover={{ y: -6, transition: { duration: 0.25 } }}>
              <FacultyCard member={member} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
