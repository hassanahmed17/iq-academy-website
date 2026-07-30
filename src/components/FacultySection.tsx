"use client";

import React from "react";
import Image from "next/image";
import { UserRound } from "lucide-react";
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
}

const facultyList: FacultyMember[] = [
  {
    id: 1,
    name: "M.D. Abdul Rafeeq",
    qualification: "M.E., M.Sc.",
    subject: "Mechanical Engineering, Mathematics",
    experience: "13+ Years Experience",
    image: "/images/faculty/rafeeq.jpg",
  },
  {
    id: 2,
    name: "Mohammed Amin Sultan",
    qualification: "M.Tech",
    subject: "Electronics & Communication, Physics",
    experience: "13+ Years Experience",
    image: "/images/faculty/aminsultan.jpg",
  },
  {
    id: 3,
    name: "Syed Sultan",
    qualification: "M.Sc.",
    subject: "Chemistry",
    experience: "10+ Years Experience",
    image: "/images/faculty/syedsultan.jpg",
  },
  {
    id: 4,
    name: "Mir Mohsin Ali",
    qualification: "B.Tech",
    subject: "Computer Science Engineering",
    experience: "5+ Years Experience",
    image: "",
  },
  {
    id: 5,
    name: "Quraishi Sir",
    qualification: "M.Tech",
    subject: "Civil Engineering",
    experience: "10+ Years Experience",
    image: "",
  },
  {
    id: 6,
    name: "Javed Sir",
    qualification: "M.Tech",
    subject: "Electrical & Electronics (EEE)",
    experience: "5+ Years Experience",
    image: "",
  },
  {
    id: 7,
    name: "Mohammed Taha Hussain",
    qualification: "Pursuing B.E.",
    subject: "Computer Science Engineering",
    experience: "3+ Years Experience",
    image: "/images/faculty/taha.jpg",
  },
];

function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <div className="group bg-white p-6 sm:p-8 rounded-3xl border border-[#EBE6FE] shadow-sm hover:shadow-xl hover:border-[#25176E]/30 transition-all duration-300 text-center flex flex-col items-center justify-between h-full">
      <div className="w-full flex flex-col items-center">
        {/* Centered Avatar Image or 2D Icon */}
        {member.image ? (
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg border-4 border-[#F0EBFF] mb-5 shrink-0 bg-[#1E1266]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 640px) 160px, 160px"
            />
          </div>
        ) : (
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#F0EBFF] to-[#E5DCFF] border border-[#EBE6FE] mb-5 shrink-0 flex items-center justify-center text-[#25176E] shadow-sm group-hover:bg-[#25176E] group-hover:text-white group-hover:border-[#25176E] group-hover:scale-105 transition-all duration-300">
            <UserRound className="w-12 h-12 sm:w-14 sm:h-14 stroke-[1.5]" />
          </div>
        )}

        {/* Name & Qualification */}
        <h3 className="font-display-saasmo text-xl sm:text-2xl font-bold text-[#1E1266]">
          {member.name}
        </h3>
        
        <p className="text-xs sm:text-sm font-semibold text-[#25176E] mt-1">
          {member.qualification}
        </p>

        <p className="text-xs text-[#64748B] font-medium mt-1.5">
          {member.experience}
        </p>
      </div>

      {/* Subject Specialization at Bottom */}
      <div className="mt-5 pt-4 border-t border-[#EBE6FE] w-full text-center">
        <span className="text-[11px] text-[#64748B] uppercase font-bold tracking-wider block mb-1">
          Subject Specialization
        </span>
        <p className="text-xs sm:text-sm font-bold text-[#1E1266]">
          {member.subject}
        </p>
      </div>
    </div>
  );
}

export default function FacultySection() {
  return (
    <section id="faculty" className="py-16 sm:py-24 relative bg-[#F6F4FE]" suppressHydrationWarning={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#25176E] bg-[#F0EBFF] px-3.5 py-1 rounded-full border border-[#EBE6FE]">
            High Academics Faculty
          </span>
          <h2 className="font-display-saasmo text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1E1266]">
            Skilled Instructors & Educators
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Our distinguished faculty members hold postgraduate & doctorate degrees from premier technical institutions with over a decade of dedicated teaching experience.
          </p>
        </div>

        {/* Mobile View: 1 Card at a time Carousel with Backward/Forward Buttons */}
        <div className="block md:hidden px-6 relative">
          <Carousel opts={{ align: "start", loop: true }} className="relative w-full">
            <CarouselContent>
              {facultyList.map((member) => (
                <CarouselItem key={member.id} className="basis-full">
                  <div className="p-1 h-full">
                    <FacultyCard member={member} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-5 bg-white text-[#25176E] border border-[#EBE6FE] shadow-md hover:bg-[#F0EBFF]" />
            <CarouselNext className="-right-5 bg-white text-[#25176E] border border-[#EBE6FE] shadow-md hover:bg-[#F0EBFF]" />
            <CarouselDots />
          </Carousel>
        </div>

        {/* Desktop View: Original 3-Column Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyList.map((member) => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}
