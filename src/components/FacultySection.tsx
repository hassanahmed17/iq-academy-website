"use client";

import React, { useState } from "react";
import Image from "next/image";
import { UserRound, Briefcase } from "lucide-react";
import { motion, Variants } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/services-card";

export interface StaffMember {
  id: number;
  name: string;
  qualification: string;
  roleOrSubject: string;
  category: "teaching" | "admin";
  experience?: string;
  image?: string;
  objectPos?: string;
  imageClass?: string;
}

const staffList: StaffMember[] = [
  // --- TEACHING FACULTY ---
  {
    id: 1,
    name: "M.D. Abdul Rafeeq",
    qualification: "M.E., M.Sc.",
    roleOrSubject: "Mechanical Engineering, Mathematics, Physics",
    category: "teaching",
    experience: "13+ Years Experience",
    image: "/images/faculty/rafeeq.jpg",
    objectPos: "object-[center_0%]",
    imageClass: "-translate-y-[12%] scale-[1.18]",
  },
  {
    id: 2,
    name: "Mohammed Amin Sultan",
    qualification: "M.Tech",
    roleOrSubject: "Electronics & Communication, Physics",
    category: "teaching",
    experience: "13+ Years Experience",
    image: "/images/faculty/aminsultan.jpg",
    objectPos: "object-[center_0%]",
    imageClass: "-translate-y-[6%] scale-[1.08]",
  },
  {
    id: 3,
    name: "Syed Sultan",
    qualification: "M.Sc.",
    roleOrSubject: "Chemistry",
    category: "teaching",
    experience: "10+ Years Experience",
    image: "/images/faculty/syedsultan.jpg",
    objectPos: "object-top",
  },
  {
    id: 4,
    name: "M. A Amer Qureshi",
    qualification: "M.Tech",
    roleOrSubject: "Civil Engineering",
    category: "teaching",
    experience: "8+ Years Experience",
    image: "/images/faculty/quraishi.jpg",
    objectPos: "object-[center_0%]",
    imageClass: "-translate-y-[15%] scale-[1.22]",
  },
  {
    id: 5,
    name: "Mohammed Taha Hussain",
    qualification: "B.E.",
    roleOrSubject: "Computer Science Engineering",
    category: "teaching",
    experience: "3+ Years Experience",
    image: "/images/faculty/taha.jpg",
    objectPos: "object-[center_0%]",
    imageClass: "-translate-y-[16%] scale-[1.22]",
  },
  {
    id: 6,
    name: "Mir Mohsin Ali",
    qualification: "B.Tech",
    roleOrSubject: "Computer Science Engineering",
    category: "teaching",
    experience: "5+ Years Experience",
    image: "",
  },
  {
    id: 7,
    name: "Shaik Javeed",
    qualification: "B.Tech",
    roleOrSubject: "Electrical & Electronics (EEE)",
    category: "teaching",
    experience: "8+ Years Experience",
    image: "",
  },

  // --- NON-TEACHING & ADMINISTRATIVE STAFF ---
  {
    id: 8,
    name: "Syed Moin Ali",
    qualification: "MBA",
    roleOrSubject: "Administrative Head",
    category: "admin",
    experience: "IQ Academy Administration",
    image: "",
  },
  {
    id: 9,
    name: "Mohammed Shahnawaz",
    qualification: "B.Com",
    roleOrSubject: "Business Development Executive",
    category: "admin",
    experience: "Business Development",
    image: "",
  },
  {
    id: 10,
    name: "Hassan Ahmed",
    qualification: "B.E.",
    roleOrSubject: "Administration, Graphic Designer",
    category: "admin",
    experience: "Administration & Design",
    image: "",
  },
];

const gradientStyle = {
  background:
    "linear-gradient(to bottom, rgba(31,17,80,0) 35%, rgba(31,17,80,0.65) 70%, rgba(20,11,59,0.96) 100%)",
};

function StaffCard({ member }: { member: StaffMember }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const tags = member.roleOrSubject.split(",").map((s) => s.trim()).filter(Boolean);

  return (
    <div className="group flex-none w-full rounded-2xl sm:rounded-3xl relative overflow-hidden aspect-[4/3.4] md:aspect-[4/3] shadow-md hover:shadow-xl border border-[#EBE6FE]/40 transition-all duration-300 bg-[#1E1266]" suppressHydrationWarning={true}>
      {/* Background Photo or Icon Fallback */}
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
          {member.category === "admin" ? (
            <Briefcase className="w-20 h-20 text-white/20 stroke-[1.2]" />
          ) : (
            <UserRound className="w-20 h-20 text-white/20 stroke-[1.2]" />
          )}
        </div>
      )}

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 pointer-events-none" style={gradientStyle} />

      {/* Top Tag */}
      {member.experience && (
        <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 shadow-xs z-10">
          {member.experience}
        </span>
      )}

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-5 pb-2.5 sm:pb-5 flex flex-col justify-end text-left z-10">
        <h3 className="font-display-saasmo text-lg sm:text-xl font-bold text-white mb-0.5 tracking-tight drop-shadow-xs">
          {member.name}
        </h3>
        <p className="text-[11px] sm:text-xs text-white/80 font-medium mb-2.5">
          {member.qualification}
        </p>

        {/* Role or Subject Specialization Badges (Single Line) */}
        <div className="flex flex-nowrap items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar w-full">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-white/10 shadow-2xs whitespace-nowrap shrink-0"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FacultySection() {
  const [activeCategory, setActiveCategory] = useState<"teaching" | "admin">("teaching");

  const filteredStaff = staffList.filter((m) => m.category === activeCategory);

  return (
    <section id="faculty" className="py-16 sm:py-24 relative bg-[#F6F4FE] overflow-hidden" suppressHydrationWarning={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning={true}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#25176E] bg-[#F0EBFF] px-3.5 py-1 rounded-full border border-[#EBE6FE]">
            FACULTY & TEAM
          </span>
          <h2 className="font-display-saasmo text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#1E1266] mt-2">
            Our Faculty & Administration
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Our distinguished faculty members and administrative team are dedicated to academic excellence and student success.
          </p>
        </div>

        {/* Category Switcher Tabs: Teaching Staff vs Non-Teaching Staff (No Emojis/Icons) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 w-full max-w-md mx-auto px-2">
          <button
            onClick={() => setActiveCategory("teaching")}
            className={`flex-1 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all shadow-xs text-center ${
              activeCategory === "teaching"
                ? "bg-[#25176E] text-white shadow-md scale-105"
                : "bg-white text-[#1E1266] border border-[#EBE6FE] hover:bg-[#F0EBFF]"
            }`}
          >
            Teaching Staff
          </button>

          <button
            onClick={() => setActiveCategory("admin")}
            className={`flex-1 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all shadow-xs text-center ${
              activeCategory === "admin"
                ? "bg-[#25176E] text-white shadow-md scale-105"
                : "bg-white text-[#1E1266] border border-[#EBE6FE] hover:bg-[#F0EBFF]"
            }`}
          >
            Non-Teaching Staff
          </button>
        </div>

        {/* Mobile View Carousel (Instant visibility on button click) */}
        <div className="block md:hidden relative px-1">
          <Carousel key={activeCategory} opts={{ align: "start", loop: false }} className="relative w-full">
            <CarouselContent className="-ml-3">
              {filteredStaff.map((member) => (
                <CarouselItem key={member.id} className="pl-3 basis-[88%] sm:basis-[65%]">
                  <div className="h-full py-1">
                    <StaffCard member={member} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Carousel Controls */}
            {filteredStaff.length > 1 && (
              <div className="flex items-center justify-between mt-6 px-1">
                <CarouselDots />
                <div className="flex items-center gap-2 z-10">
                  <CarouselPrevious className="static translate-x-0 translate-y-0 w-9 h-9 bg-white text-[#25176E] border border-[#EBE6FE] shadow-sm hover:bg-[#F0EBFF] active:scale-95" />
                  <CarouselNext className="static translate-x-0 translate-y-0 w-9 h-9 bg-[#25176E] text-white border border-[#25176E] shadow-sm hover:bg-[#1E1266] active:scale-95" />
                </div>
              </div>
            )}
          </Carousel>
        </div>

        {/* Desktop View 3-Column Grid (100% visible immediately on button click) */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStaff.map((member) => (
            <div key={member.id} className="hover:-translate-y-1.5 transition-all duration-300">
              <StaffCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
