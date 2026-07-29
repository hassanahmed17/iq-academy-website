"use client";

import React from "react";
import { Trophy, Crown } from "lucide-react";

interface TopperItem {
  id: number;
  rollNumber: string;
  name: string;
  field: string;
  gpaOrRank: string;
}

const toppersList: TopperItem[] = [
  {
    id: 1,
    rollNumber: "22IQ-CS-041",
    name: "Rahul Sharma",
    field: "Diploma CSE",
    gpaOrRank: "GPA 9.98",
  },
  {
    id: 2,
    rollNumber: "23IQ-EC-012",
    name: "S. Lakshmi Prasanna",
    field: "POLYCET Entrance",
    gpaOrRank: "State Rank 1",
  },
  {
    id: 3,
    rollNumber: "22IQ-EC-089",
    name: "Vignesh Rao",
    field: "ECET Entrance (ECE)",
    gpaOrRank: "State Rank 3",
  },
  {
    id: 4,
    rollNumber: "22IQ-EE-104",
    name: "Priyanka Das",
    field: "Diploma EEE",
    gpaOrRank: "GPA 9.92",
  },
  {
    id: 5,
    rollNumber: "22IQ-ME-056",
    name: "Aditya Varma",
    field: "Diploma Mechanical",
    gpaOrRank: "GPA 9.95",
  },
  {
    id: 6,
    rollNumber: "23IQ-PC-005",
    name: "K. Sai Kumar",
    field: "POLYCET Entrance",
    gpaOrRank: "State Rank 5",
  },
  {
    id: 7,
    rollNumber: "22IQ-AI-018",
    name: "Tanvi Kulkarni",
    field: "Diploma AI & ML",
    gpaOrRank: "GPA 9.96",
  },
  {
    id: 8,
    rollNumber: "22IQ-CE-033",
    name: "Rohan Nambiar",
    field: "Diploma Civil",
    gpaOrRank: "GPA 9.89",
  },
];

export default function WowToppersSection() {
  return (
    <section id="toppers" className="py-16 sm:py-20 relative bg-[#F6F4FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D2FF00] text-[#1B1054] text-xs font-extrabold uppercase tracking-widest shadow-sm">
            <Crown className="w-3.5 h-3.5" />
            <span>Hall of Fame</span>
          </div>
          <h2 className="font-display-saasmo text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#1E1266]">
            "Wow Toppers" - Celebrating Academic Distinction
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            Honoring our top rankers in POLYCET & ECET entrance exams and highest GPA achievers across all diploma engineering branches.
          </p>
        </div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {toppersList.map((topper) => (
            <div key={topper.id} className="saasmo-white-card p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F0EBFF] text-[#25176E] text-[11px] font-mono font-bold">
                    {topper.rollNumber}
                  </span>
                  <Trophy className="w-4 h-4 text-[#25176E]" />
                </div>

                <h3 className="font-display-saasmo text-lg font-bold text-[#1E1266] mb-0.5">
                  {topper.name}
                </h3>
                <p className="text-[11px] text-[#64748B] mb-3">{topper.field}</p>
              </div>

              {/* Score Highlight Pill */}
              <div className="p-2.5 rounded-2xl bg-[#D2FF00] text-[#1B1054] flex items-center justify-between shadow-sm">
                <span className="text-[10px] font-extrabold uppercase">Achieved Score:</span>
                <span className="font-display-saasmo font-extrabold text-sm">
                  {topper.gpaOrRank}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
