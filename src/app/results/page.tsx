"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ArrowLeft } from "lucide-react";

export interface StudentResult {
  sNo: number;
  pinNumber: string;
  studentName: string;
  cgpa: number;
}

const studentResultsData: StudentResult[] = [
  { sNo: 1, pinNumber: "25061-CS-048", studentName: "MOHAMMED ABID MUJEEB", cgpa: 9.88 },
  { sNo: 2, pinNumber: "24061-CS-006", studentName: "MOHAMMED ABDUL RAHMAN", cgpa: 9.56 },
  { sNo: 3, pinNumber: "24061-CS-021", studentName: "MOHAMMED MUZAMMIL", cgpa: 9.19 },
  { sNo: 4, pinNumber: "24061-CS-062", studentName: "MOHD SAMI UR RAHMAN", cgpa: 9.13 },
  { sNo: 5, pinNumber: "25061-CE-061", studentName: "MOHAMMED AHMED", cgpa: 9.00 },
  { sNo: 6, pinNumber: "25061-CE-012", studentName: "M.A QADER SIDDIQUI", cgpa: 8.94 },
  { sNo: 7, pinNumber: "25061-CE-029", studentName: "MOHAMMED ABDUL HASEEB", cgpa: 8.81 },
  { sNo: 8, pinNumber: "25061-CS-027", studentName: "MOHAMMED RAZZAK", cgpa: 8.69 },
  { sNo: 9, pinNumber: "25061-CS-026", studentName: "MOHAMMED MOHSIN", cgpa: 8.69 },
  { sNo: 10, pinNumber: "24061-CS-003", studentName: "MOHAMMED ABDUL RAHEEM", cgpa: 8.56 },
  { sNo: 11, pinNumber: "24061-ME-001", studentName: "SHAIK SOHAIL", cgpa: 8.38 },
  { sNo: 12, pinNumber: "25061-CS-049", studentName: "MOHAMMED ZAID", cgpa: 8.31 },
  { sNo: 13, pinNumber: "25061-ME-066", studentName: "MOHAMMED SAMAD HUSSAIN", cgpa: 8.25 },
  { sNo: 14, pinNumber: "24061-CS-042", studentName: "FURQAN DAYANI", cgpa: 8.25 },
  { sNo: 15, pinNumber: "24061-CS-045", studentName: "MOHD MASOOD KHAN", cgpa: 8.06 },
  { sNo: 16, pinNumber: "24061-EE-002", studentName: "MOHD ABDUL MUNEEB", cgpa: 8.00 },
  { sNo: 17, pinNumber: "24384-CS-020", studentName: "MOHD YOUSUF UDDIN", cgpa: 7.94 },
  { sNo: 18, pinNumber: "24061-ME-053", studentName: "MOHAMMED ABDUL KHAVI", cgpa: 7.94 },
  { sNo: 19, pinNumber: "24061-ME-002", studentName: "MOHD ABDUL ASHFAQ", cgpa: 7.88 },
  { sNo: 20, pinNumber: "24054-BM-017", studentName: "MOHAMMED FAIZAN", cgpa: 7.88 },
  { sNo: 21, pinNumber: "25061-CS-021", studentName: "MOHAMMED ZUBAIR", cgpa: 7.81 },
  { sNo: 22, pinNumber: "24061-CS-043", studentName: "SHAIK MUBEEN", cgpa: 7.81 },
  { sNo: 23, pinNumber: "24061-ME-043", studentName: "MOHAMMED HASAN MOHIUDDIN", cgpa: 7.81 },
  { sNo: 24, pinNumber: "24061-ME-029", studentName: "MOHAMMED AYAAN", cgpa: 7.75 },
  { sNo: 25, pinNumber: "25061-ME-050", studentName: "ABDULLAH ABDUL MAJEED", cgpa: 7.69 },
  { sNo: 26, pinNumber: "24384-AI-043", studentName: "SYED HAMZA HASHMI", cgpa: 7.69 },
  { sNo: 27, pinNumber: "24061-EC-122", studentName: "SHAIK ANAS", cgpa: 7.69 },
  { sNo: 28, pinNumber: "25233-ME-037", studentName: "MD YUSUF", cgpa: 7.56 },
  { sNo: 29, pinNumber: "25233-EC-055", studentName: "MOHAMMED MUNAWWAR ALI", cgpa: 7.50 },
  { sNo: 30, pinNumber: "24233-CS-012", studentName: "ZAIN AHMED KHAN", cgpa: 7.50 },
  { sNo: 31, pinNumber: "25061-CE-033", studentName: "SHAIK ARSALAN", cgpa: 7.38 },
  { sNo: 32, pinNumber: "24061-EC-009", studentName: "MOHAMMED SHAHEER ALI", cgpa: 7.38 },
  { sNo: 33, pinNumber: "24061-CS-038", studentName: "SYED SAMEED AHMED", cgpa: 7.25 },
  { sNo: 34, pinNumber: "25061-CS-033", studentName: "REHAN MOIN UDDIN", cgpa: 7.13 },
  { sNo: 35, pinNumber: "25061-CE-039", studentName: "SK ABDUL RAHMAN", cgpa: 7.06 },
  { sNo: 36, pinNumber: "24233-EE-118", studentName: "MOHD HABEEB UR RAHMAN KHAN", cgpa: 7.06 },
  { sNo: 37, pinNumber: "24241-CS-167", studentName: "MOHD REHAN SALAFIH", cgpa: 7.00 },
];

export default function ResultsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = useMemo(() => {
    return studentResultsData.filter((student) => {
      return (
        student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.pinNumber.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-[#F6F4FE] text-[#1E1266] flex flex-col font-sans">
      <Navbar />

      {/* Header Banner */}
      <div className="pt-24 sm:pt-28 pb-8 sm:pb-10 bg-gradient-to-b from-[#1E1266] via-[#25176E] to-[#120A3E] text-white relative shadow-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-white/70 hover:text-[#D2FF00] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="space-y-2">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[#D2FF00] text-xs font-black uppercase tracking-widest">
              Academic CGPA Leaderboard
            </div>

            <h1 className="font-display-saasmo text-3xl sm:text-4xl font-black text-white tracking-tight">
              Student Results
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area (Compact Centered Container to Eliminate Gap Between Name & CGPA) */}
      <div className="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Search Bar */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-xs border border-[#EBE6FE] mb-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text"
              placeholder="Search by student name or PIN number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#F6F4FE] border border-[#EBE6FE] text-xs sm:text-sm text-[#1E1266] placeholder-[#64748B]/60 focus:outline-none focus:border-[#25176E] focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                aria-label="Clear Search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#64748B] hover:text-[#1E1266]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-xs font-bold text-[#64748B] self-end sm:self-auto">
            Showing <span className="text-[#25176E] font-black">{filteredStudents.length}</span> of {studentResultsData.length} Students
          </div>
        </div>

        {/* Clean Compact Data Table (Zero Blank Gap Between Student Name & CGPA) */}
        <div className="bg-white rounded-2xl shadow-xs border border-[#EBE6FE] overflow-hidden w-full">
          {filteredStudents.length > 0 ? (
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse table-auto">
                <thead>
                  <tr className="bg-[#F6F4FE] border-b border-[#EBE6FE] text-[11px] sm:text-xs font-black text-[#25176E] uppercase tracking-wider">
                    <th className="py-3 px-3 sm:px-5 w-12 sm:w-16 text-center">S.NO</th>
                    <th className="py-3 px-3 sm:px-5 w-36 sm:w-44">PIN NUMBER</th>
                    <th className="py-3 px-3 sm:px-5">STUDENT NAME</th>
                    <th className="py-3 px-3 sm:px-5 w-20 sm:w-24 text-right">CGPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EBE6FE] text-xs sm:text-sm text-[#1E1266]">
                  {filteredStudents.map((student) => (
                    <tr
                      key={student.pinNumber}
                      className="hover:bg-[#F6F4FE]/60 transition-colors"
                    >
                      {/* S.NO */}
                      <td className="py-3 px-3 sm:px-5 text-center font-bold text-[#64748B]">
                        {student.sNo}
                      </td>

                      {/* PIN NUMBER */}
                      <td className="py-3 px-3 sm:px-5 font-mono font-bold text-[#25176E] tracking-tight whitespace-nowrap">
                        {student.pinNumber}
                      </td>

                      {/* STUDENT NAME */}
                      <td className="py-3 px-3 sm:px-5 font-bold text-[#1E1266] tracking-tight">
                        {student.studentName}
                      </td>

                      {/* CGPA (Clear, bold typography with compact right alignment) */}
                      <td className="py-3 px-3 sm:px-5 text-right font-sans font-extrabold text-sm sm:text-base text-[#25176E] whitespace-nowrap">
                        {student.cgpa.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center space-y-2">
              <h3 className="font-bold text-sm text-[#1E1266]">No Matching Students Found</h3>
              <p className="text-xs text-[#64748B]">No student record matches "{searchTerm}".</p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-2 px-4 py-2 rounded-full bg-[#25176E] text-white text-xs font-bold hover:bg-[#1b1054] transition-all"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
