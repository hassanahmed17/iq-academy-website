"use client";

import React, { useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import CourseDetailModal from "./CourseDetailModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/services-card";

export interface C24SchemeSyllabus {
  sem1: string[];
  sem2: string[];
  sem3: string[];
  sem4: string[];
  sem5: string[];
}

export interface C26SchemeSyllabus {
  year1: string[];
  sem3: string[];
  sem4: string[];
  sem5: string[];
}

export interface Course {
  id: string;
  code: string;
  name: string;
  fullTitle: string;
  category: string;
  shortDesc: string;
  benefitsHeading: string;
  careerOptionsBrief: string;
  keyBenefits: string[];
  topics: string[];
  c24Syllabus: C24SchemeSyllabus;
  c26Syllabus: C26SchemeSyllabus;
  certifications: string[];
  vocationalCourses: string[];
  competitiveExams: string[];
  governmentJobs: string[];
}

const universalCoachingBenefits = [
  "100% Telangana SBTET Syllabus Coverage across all academic years/semesters for C-24 & C-26 schemes",
  "Step-by-Step Mathematical Problem Solving, derivation shortcuts, and simplified formula memory notes",
  "Previous 10+ Years SBTET Board Exam Solved Papers & unit-wise high-yield question bank solutions",
  "Weekly Chapter Assessment Drills & individual academic progress tracking for top semester scores",
  "BE / B.Tech Lateral Entry Entrance Coaching (TS ECET) & Entrance Mock Tests",
];

const universalCareerBrief = "IQ Academy of Excellence provides structured academic theory coaching, chapter-wise problem-solving guidance, and exam preparation to help diploma students achieve top semester grades.";

const coursesData: Course[] = [
  {
    id: "cse",
    code: "CSE",
    name: "Computer Science Engineering",
    fullTitle: "Diploma in Computer Science & Engineering",
    category: "SBTET C-24 & C-26",
    shortDesc: "Comprehensive coaching covering C, C++, Data Structures, Java, Python, RDBMS, Computer Networks, Operating Systems, and Cryptography.",
    benefitsHeading: "Coaching Benefits at IQ Academy",
    careerOptionsBrief: universalCareerBrief,
    keyBenefits: universalCoachingBenefits,
    topics: ["C / C++ Logic", "Data Structures", "Java & Python", "RDBMS"],
    c24Syllabus: {
      sem1: [
        "Basic English",
        "Basic Engineering Mathematics",
        "Basic Physics",
        "General Engineering Chemistry",
        "Computer Fundamentals & Hardware",
        "Basic Electrical and Electronics Engineering",
        "Engineering Drawing-I",
      ],
      sem2: [
        "Advanced English",
        "Engineering Mathematics",
        "Applied Physics",
        "Applied Engineering Chemistry",
        "Programming in C",
        "Web Technologies",
        "Engineering Drawing-II",
      ],
      sem3: [
        "Applied Engineering Mathematics",
        "Digital Electronics",
        "Data Structures Through C",
        "OOPS through C++",
        "Computer Organization and Architecture",
        "Computer Networks",
        "Communication Skills & Life Skills",
      ],
      sem4: [
        "Advanced Engineering Mathematics",
        "Java Programming",
        "Python Programming",
        "Relational Database Management Systems",
        "Cryptography & Network Security",
        "Operating Systems",
      ],
      sem5: [
        "Entrepreneurship & Startups",
        "Data Mining & Data Warehousing",
        "Software Engineering & Testing",
        "Mobile Application Development",
        "Web Development Technologies",
        "Cloud Computing",
      ],
    },
    c26Syllabus: {
      year1: [
        "Engineering English",
        "Engineering Mathematics-I",
        "Engineering Physics",
        "Engineering Chemistry",
        "Programming in C & Data Structures",
        "Information Technology Fundamentals",
        "Engineering Graphics",
      ],
      sem3: [
        "Engineering Mathematics-II",
        "Digital Logic & Microprocessors",
        "Object Oriented Programming through Java",
        "Database Management Systems",
        "Computer Architecture & Organization",
        "Web Development & Scripting",
      ],
      sem4: [
        "Discrete Mathematics & Graph Theory",
        "Python & Machine Learning Foundations",
        "Operating Systems & Linux Kernel",
        "Computer Networks & Protocols",
        "Software Engineering Methodologies",
        "Cyber Security & Ethical Hacking",
      ],
      sem5: [
        "Artificial Intelligence & Neural Networks",
        "Cloud Infrastructure & DevOps",
        "Full Stack Web Development",
        "Mobile App Development (Flutter/React Native)",
        "Major Industry Project & Viva",
      ],
    },
    certifications: [
      "Oracle Certified Java Associate",
      "AWS Certified Cloud Practitioner",
      "Python Institute PCEP Certification",
      "Cisco CCNA Networking",
    ],
    vocationalCourses: [
      "Post-Diploma in Web Engineering",
      "Advanced Diploma in Cloud Architecture",
      "Diploma in Software Quality Assurance",
    ],
    competitiveExams: [
      "TS ECET (CSE / IT)",
      "RRB JE (IT)",
      "DRDO CEPTAM Technical Assistant",
      "ISRO Technical Assistant (CS)",
    ],
    governmentJobs: [
      "Junior Software Engineer - TSBCL / TSOnline",
      "Technical Assistant - Telangana IT Department",
      "System Administrator - State Data Center",
      "Data Analyst - NIC Hyderabad",
    ],
  },
  {
    id: "aiml",
    code: "AI & ML",
    name: "Artificial Intelligence & ML",
    fullTitle: "Diploma in Artificial Intelligence & Machine Learning",
    category: "SBTET C-24 & C-26",
    shortDesc: "Specialized coaching covering Python, Data Analytics, Neural Networks, Computer Vision, Natural Language Processing, and Deep Learning.",
    benefitsHeading: "Coaching Benefits at IQ Academy",
    careerOptionsBrief: universalCareerBrief,
    keyBenefits: universalCoachingBenefits,
    topics: ["Python & Math", "Data Analytics", "Neural Networks", "NLP"],
    c24Syllabus: {
      sem1: [
        "Basic English",
        "Basic Engineering Mathematics",
        "Basic Physics",
        "General Engineering Chemistry",
        "Fundamentals of AI & Computing",
        "Basic Electrical & Electronics Engineering",
        "Engineering Drawing-I",
      ],
      sem2: [
        "Advanced English",
        "Engineering Mathematics",
        "Applied Physics",
        "Applied Engineering Chemistry",
        "Python Programming for AI",
        "Data Science Fundamentals",
        "Engineering Drawing-II",
      ],
      sem3: [
        "Applied Engineering Mathematics",
        "Probability & Statistics for AI",
        "Data Structures & Algorithms",
        "Object Oriented Programming using Python",
        "Database Management Systems for Data Science",
        "Linear Algebra & Optimization",
        "Communication Skills & Life Skills",
      ],
      sem4: [
        "Machine Learning Algorithms & Models",
        "Deep Learning & Neural Networks",
        "Data Visualization & Analytics",
        "Computer Vision & Pattern Recognition",
        "Natural Language Processing",
      ],
      sem5: [
        "Entrepreneurship & Startups",
        "AI Ethics, Governance & Safety",
        "Cloud AI Services (AWS/Azure/GCP)",
        "Robotics & Intelligent Systems",
        "Reinforcement Learning Applications",
      ],
    },
    c26Syllabus: {
      year1: [
        "Basic English",
        "Basic Engineering Mathematics",
        "Basic Physics",
        "General Engineering Chemistry",
        "Programming in C",
        "Computer Fundamentals and Hardware",
        "Engineering Drawing (CAD)",
      ],
      sem3: [
        "Computer Organization and Architecture",
        "Digital Electronics",
        "Data Structures Through C",
        "Python Programming",
        "Fundamentals of AI/ML",
        "Communications Skills & Life Skills",
      ],
      sem4: [
        "Operating Systems",
        "OOPS through Java",
        "Relational Database Management Systems",
        "Probability and Statistics",
        "Machine Learning Algorithms",
      ],
      sem5: [
        "Techno Entrepreneurship & Startups",
        "Computer Vision and Image Processing",
        "Deep Learning",
        "Data Science / AI Agents",
        "Natural Language Processing / Software Engineering",
        "Computer Vision",
        "Innovation & Design Thinking",
      ],
    },
    certifications: ["TensorFlow Developer Certificate", "AWS Certified AI Practitioner", "DeepLearning.AI Machine Learning Specialization", "Microsoft Certified: Azure AI Engineer Associate"],
    vocationalCourses: ["Post-Diploma in Artificial Intelligence Engineering", "Advanced Diploma in Data Science & MLOps", "Diploma in Computer Vision & Robotics"],
    competitiveExams: ["TS ECET (AI/ML & CSE for BE / B.Tech Lateral Entry)", "Central Govt Technical Data Assistant Exams"],
    governmentJobs: [
      "TGPSC Technical Assistant & Data Analyst in Telangana State Digital Media & IT Wing",
      "Technical Officer & Data Analyst in National Informatics Centre (NIC Hyderabad)",
      "Junior Technical Assistant in CDAC (Centre for Development of Advanced Computing)",
      "Junior Programmer & Data Assistant in Indian Railways IT Cadre (RRB JE IT)",
      "Technical Assistant in DRDO, ISRO, & Central Government Analytics Divisions",
      "System Assistant & Python Developer in Telangana State Electricity & e-Governance Departments",
    ],
  },

  {
    id: "ce",
    code: "CIVIL",
    name: "Civil Engineering",
    fullTitle: "Diploma in Civil Engineering",
    category: "SBTET C-24 & C-26",
    shortDesc: "Complete coaching in Structural Mechanics, Reinforced Concrete (RCC), Surveying Theory, Estimation & Costing, and Highway Engineering.",
    benefitsHeading: "Coaching Benefits at IQ Academy",
    careerOptionsBrief: universalCareerBrief,
    keyBenefits: universalCoachingBenefits,
    topics: ["Structural RCC", "Total Station", "Quantity Survey", "AutoCAD"],
    c24Syllabus: {
      sem1: [
        "Basic English",
        "Basic Engineering Mathematics",
        "Basic Physics",
        "General Engineering Chemistry",
        "Basic Surveying",
        "Building Materials",
        "Engineering Drawing-I",
      ],
      sem2: [
        "Advanced English",
        "Engineering Mathematics",
        "Applied Physics",
        "Applied Engineering Chemistry",
        "Programming in C",
        "Engineering Mechanics",
        "Engineering Drawing-II",
      ],
      sem3: [
        "Applied Engineering Mathematics",
        "Strength of Materials",
        "Hydraulics",
        "Levelling Surveying",
        "Transportation Engineering",
        "Construction Practice",
        "Building Drawing",
        "Communication Skills & Life Skills",
      ],
      sem4: [
        "Advanced Engineering Mathematics",
        "Reinforced Concrete Structures",
        "Irrigation Engineering",
        "Basic Quantity Surveying",
        "Water Supply & Sanitary Engineering",
        "Advanced Surveying",
        "Civil Engineering Drawing",
        "Basic Civil Engineering CAD",
      ],
      sem5: [
        "Construction Management & Entrepreneurship",
        "Steel Structures",
        "Soil Mechanics",
        "Advanced Quantity Surveying",
        "Theory of Structures / Integrated Waste Management",
        "Construction Technology Evaluation / Green Buildings and Energy Conservation",
        "Structural Engineering Drawing",
        "Civil Engineering Computer Applications",
        "Construction Technology",
      ],
    },
    c26Syllabus: {
      year1: [
        "English",
        "Engineering Mathematics",
        "Applied Science",
        "Structural Mechanics",
        "Building Materials & Construction Practice",
        "Surveying",
        "Engineering Drawing with CAD",
      ],
      sem3: [
        "Theory of Structures",
        "Hydraulics",
        "Quantity Surveying",
        "Concrete Technology",
        "Fundamentals of AI/ML",
        "Communication Skills and Life Skills",
      ],
      sem4: [
        "Reinforced Concrete Structures",
        "Transportation Engineering",
        "Water Supply and Sanitary Engineering",
        "Irrigation Engineering",
        "Soil Mechanics",
      ],
      sem5: [
        "Techno Entrepreneurship & Startups",
        "Steel Structures",
        "Prestressing, Precast and PEB Structures",
        "Remote Sensing & GIS / Construction Safety, Formwork and Scaffolding",
        "Green Buildings and Sustainability / Retrofitting & Rehabilitation of Buildings",
        "Innovation & Design Thinking",
      ],
    },
    competitiveExams: ["TS ECET (Civil for BE / B.Tech Lateral Entry)", "Telangana State AE & JE Exams (R&B, Irrigation, Panchayat Raj)"],
    certifications: ["AutoCAD Civil 2D & 3D Certification", "Revit Architecture / Structural BIM", "Primavera P6 / MS Project Planning", "Total Station Field Surveyor Certificate"],
    vocationalCourses: ["Post-Diploma in Structural Engineering", "Advanced Diploma in Quantity Surveying", "Diploma in Construction Management"],
    governmentJobs: [
      "Assistant Engineer (AE) & Technical Officer via TGPSC in Telangana Roads & Buildings (R&B)",
      "Assistant Engineer (AE) & Technical Officer via TGPSC in Telangana Irrigation & CAD Department",
      "Technical Officer & AE in Telangana Municipal Administration & Urban Development (MAUD)",
      "Town Planning Building Overseer (TPBO) in GHMC & Telangana Municipal Corporations",
      "SSC JE Civil in CPWD, Military Engineer Services (MES), & Central Water Commission (CWC)",
      "Junior Engineer (JE Civil) in Indian Railways (RRB JE Track & Structural Maintenance)",
    ],
  },

  {
    id: "ece",
    code: "ECE",
    name: "Electronics & Communication",
    fullTitle: "Diploma in Electronics & Communication Engineering",
    category: "SBTET C-24 & C-26",
    shortDesc: "In-depth coaching in Electronic Devices, Circuit Analysis, Digital Logic, 8051 & ARM Microcontrollers, VLSI, and Telecom Systems.",
    benefitsHeading: "Coaching Benefits at IQ Academy",
    careerOptionsBrief: universalCareerBrief,
    keyBenefits: universalCoachingBenefits,
    topics: ["EDC & Circuits", "VLSI Digital Logic", "8051 & ARM", "Telecom"],
    c24Syllabus: {
      sem1: [
        "Basic English",
        "Basic Engineering Mathematics",
        "Basic Physics",
        "General Engineering Chemistry",
        "Basic Electronics",
        "Semiconductor Devices",
        "Engineering Drawing-I",
      ],
      sem2: [
        "Advanced English",
        "Engineering Mathematics",
        "Applied Physics",
        "Applied Engineering Chemistry",
        "Programming in C",
        "Electronic Devices & Circuits",
        "Engineering Drawing-II",
      ],
      sem3: [
        "Applied Engineering Mathematics",
        "Digital Electronics",
        "Communication Systems",
        "Network Analysis",
        "Linear Integrated Circuits & Applications",
        "Electronic Measuring Instruments",
        "Communication Systems & Networks",
        "Communication Skills & Life Skills",
      ],
      sem4: [
        "Advanced Engineering Mathematics",
        "Microprocessors & Microcontrollers",
        "Python Programming",
        "Data Communication & Computer Networks",
        "Microwave Communication",
        "Semiconductor Technology",
        "Computer Hardware & Networking",
      ],
      sem5: [
        "Entrepreneurship & Startups",
        "Mobile & Optical Fiber Communications",
        "DCD Using Verilog HDL",
        "Industrial & Power Electronics",
        "Internet of Things (IoT) / Signals & Systems",
        "Embedded Systems with Arduino / Machine Learning",
      ],
    },
    c26Syllabus: {
      year1: [
        "English",
        "Engineering Mathematics",
        "Engineering Physics",
        "Engineering Chemistry",
        "Basic Electronics",
        "Fundamentals of Computer Programming",
        "Engineering Drawing with CAD",
      ],
      sem3: [
        "Advanced Engineering Mathematics",
        "Digital Electronics",
        "Electronic Devices and Circuits",
        "Analog and Digital Communication",
        "Fundamentals of AI and ML",
        "Communication Skills and Life Skills",
      ],
      sem4: [
        "Microcontrollers",
        "Linear Integrated Circuits and Applications",
        "Networks and Signals",
        "Data Communications and Computer Networks",
        "Advanced Communication",
      ],
      sem5: [
        "Techno Entrepreneurship & Startups",
        "5G Cellular and Optical Fiber Communication",
        "DCD Using Verilog HDL",
        "Internet of Things / Cyber Security",
        "Semiconductor Technology / System Engineering",
        "Innovation & Design Thinking",
      ],
    },
    certifications: ["Certified Embedded Systems Engineer", "Verilog / VHDL VLSI Certification", "Cisco CCNA (Routing & Switching)", "PCB Design using KiCAD / Altium"],
    vocationalCourses: ["Post-Diploma in Embedded Hardware Design", "Advanced Diploma in VLSI Design & Verification", "Diploma in Industrial Automation"],
    competitiveExams: ["TS ECET (ECE for BE / B.Tech Lateral Entry)", "BEL / ISRO / DRDO Technical Assistant Exams"],
    governmentJobs: [
      "Technical Assistant & Scientific Officer in BEL (Bharat Electronics Limited Hyderabad)",
      "Technical Assistant in ECIL (Electronics Corporation of India Limited)",
      "Junior Engineer in BSNL & MTNL Telecom Networks",
      "Scientific Assistant & Technical Grade-II in DRDO & ISRO NRSC Secunderabad",
      "Junior Engineer (JE) in Indian Railways (RRB JE Signal & Telecommunication)",
      "TGPSC Technical Assistant in Telangana State Police Wireless & Broadcasting Units",
    ],
  },

  {
    id: "eee",
    code: "EEE",
    name: "Electrical & Electronics",
    fullTitle: "Diploma in Electrical & Electronics Engineering",
    category: "SBTET C-24 & C-26",
    shortDesc: "Comprehensive coaching in Electrical Machines, Power Generation & Transmission, Protection Switchgear, Industrial Automation (PLC), and Power Electronics.",
    benefitsHeading: "Coaching Benefits at IQ Academy",
    careerOptionsBrief: universalCareerBrief,
    keyBenefits: universalCoachingBenefits,
    topics: ["AC/DC Machines", "Power Systems", "PLC Automation", "Switchgear"],
    c24Syllabus: {
      sem1: [
        "Basic English",
        "Basic Engineering Mathematics",
        "Basic Physics",
        "General Engineering Chemistry",
        "Electrical Engineering Materials",
        "Basic Electrical Engineering",
        "Engineering Drawing-I",
      ],
      sem2: [
        "Advanced English",
        "Engineering Mathematics",
        "Applied Physics",
        "Applied Engineering Chemistry",
        "Programming in C",
        "Electronic Devices",
        "Engineering Drawing-II",
      ],
      sem3: [
        "Applied Engineering Mathematics",
        "Digital Electronics",
        "DC Machines and Batteries",
        "Electrical Circuits",
        "Electrical Power Systems - Generation",
        "Electrical & Electronic Measuring Instruments",
        "Communication Skills & Life Skills",
      ],
      sem4: [
        "Advanced Engineering Mathematics",
        "Microprocessors & Microcontrollers",
        "AC Machines",
        "Electrical Estimation & Installation",
        "Electrical Power Systems - T&D",
        "Basic Mechanical Engineering",
      ],
      sem5: [
        "Entrepreneurship & Startups",
        "Power Electronics",
        "AC Motors",
        "Electrical Utilization & Traction",
        "Industrial Motor Controls / Electric Vehicles",
        "Switchgear & Protection / Advanced Protection of Power Systems",
        "Programmable Logic Controllers (PLC) & MATLAB",
      ],
    },
    c26Syllabus: {
      year1: [
        "English",
        "Engineering Mathematics",
        "Engineering Physics",
        "Engineering Chemistry",
        "Fundamentals of Electrical Engineering",
        "Semiconductor Devices and Circuits",
        "Engineering Drawing with CAD",
      ],
      sem3: [
        "Electrical & Electronics Measuring Instruments",
        "Electrical Circuits",
        "DC Machines & Batteries",
        "Electrical Power System (Generation)",
        "Fundamentals of AI/ML",
        "Communication Skills and Life Skills",
      ],
      sem4: [
        "Electrical Estimation & Installation",
        "Digital Electronics",
        "AC Machines I",
        "Power Systems (Transmission & Distribution)",
        "Digital Manufacturing in Electrical Engineering",
      ],
      sem5: [
        "Techno Entrepreneurship & Startups",
        "Power Electronics",
        "AC Machines II",
        "Switchgear and Protection / Renewable Energy Systems",
        "Electric Vehicles and Charging Infrastructure / Electrical Drives and Traction",
        "Innovation & Design Thinking",
      ],
    },
    certifications: ["PLC & SCADA Automation Certification", "Certified Electrical Energy Auditor", "Electric Vehicle Powertrain Architecture", "AutoCAD Electrical"],
    vocationalCourses: ["Post-Diploma in Industrial Automation", "Advanced Diploma in Power Plant Engineering", "Diploma in Solar & Renewable Energy"],
    competitiveExams: ["TS ECET (EEE for BE / B.Tech Lateral Entry)", "TSRTRANSCO / TSGENCO / TSPDCL AE & JE Exams"],
    governmentJobs: [
      "Substation Junior Engineer & Line Assistant in TSRTRANSCO (Telangana State Power Transmission)",
      "Junior Engineer & Substation Officer in TSGENCO (Telangana State Power Generation)",
      "Substation Engineer & Technical Assistant in TSPDCL & TSNPDCL (Telangana Electricity Discoms)",
      "Junior Engineer (JE Electrical) in Indian Railways (RRB JE Electrification & Loco Workshop)",
      "SSC JE Electrical in CPWD, Military Engineer Services (MES), & Central Water Commission (CWC)",
      "Technical Assistant in BHEL Ramachandrapuram Hyderabad, NTPC, & Power Grid Corporation (PGCIL)",
    ],
  },

  {
    id: "me",
    code: "MECH",
    name: "Mechanical Engineering",
    fullTitle: "Diploma in Mechanical Engineering",
    category: "SBTET C-24 & C-26",
    shortDesc: "Thorough coaching in Thermodynamics, Thermal Engineering, Fluid Mechanics, Strength of Materials (SOM), CAD/CAM, and Manufacturing Technology.",
    benefitsHeading: "Coaching Benefits at IQ Academy",
    careerOptionsBrief: universalCareerBrief,
    keyBenefits: universalCoachingBenefits,
    topics: ["Thermodynamics", "SOM Mechanics", "CAD / CAM 3D", "IC Engines"],
    c24Syllabus: {
      sem1: [
        "Basic English",
        "Basic Engineering Mathematics",
        "Basic Physics",
        "General Engineering Chemistry",
        "Workshop Technology",
        "Engineering Mechanics",
        "Engineering Drawing-I",
      ],
      sem2: [
        "Advanced English",
        "Engineering Mathematics",
        "Applied Physics",
        "Applied Engineering Chemistry",
        "Programming in C",
        "Manufacturing Technology",
        "Engineering Drawing-II",
      ],
      sem3: [
        "Applied Engineering Mathematics",
        "Strength of Materials",
        "Thermodynamics",
        "Fluid Mechanics & Hydraulic Machinery",
        "Engineering Materials",
        "Additive & Advanced Manufacturing Process",
        "Machine Drawing",
        "Communication Skills & Life Skills",
      ],
      sem4: [
        "Advanced Engineering Mathematics",
        "Design of Machine Elements",
        "Thermal Engineering",
        "Industrial Engineering, Estimation & Costing",
        "Green Energy Sources",
        "Basic Electrical & Electronics Engineering",
        "Computer Aided Production Drawing",
      ],
      sem5: [
        "IME & Startups",
        "Refrigeration & Air-conditioning",
        "Computer Aided Design & Manufacturing",
        "Fluid Power Systems & Control System",
        "Automobile Engineering / Electric Vehicles",
        "Introduction to Artificial Intelligence / Mechatronics",
      ],
    },
    c26Syllabus: {
      year1: [
        "English",
        "Engineering Mathematics",
        "Engineering Physics",
        "Engineering Chemistry",
        "Fundamentals of Python & IoT Programming",
        "Manufacturing Technology",
        "Engineering Drawing (CAD)",
      ],
      sem3: [
        "Mechanics of Solids",
        "Thermodynamics",
        "Additive & Advanced Manufacturing",
        "Engineering Materials",
        "Basic Electrical & Electronics Engineering",
        "Machine Drawing with Solid Modelling",
        "Communication Skills and Life Skills",
      ],
      sem4: [
        "Design of Machine Elements",
        "Thermal Engineering",
        "Mechatronics",
        "Product Design & Development and CAM",
        "Fluid Mechanics & Hydraulic Machinery",
      ],
      sem5: [
        "Techno Entrepreneurship & Startups",
        "Refrigeration & Air-conditioning",
        "Pneumatics & Electro Pneumatics",
        "Industrial Engineering, Estimation & Costing",
        "Green Energy Sources",
        "Metrology & Quality Control",
        "Systems Engineering",
        "Innovation & Design Thinking",
      ],
    },
    certifications: ["AutoCAD Mechanical Certification", "SolidWorks / PTC Creo 3D Design", "ANSYS FEA Simulation Specialist", "CNC Programming & CAM Master Certificate"],
    vocationalCourses: ["Post-Diploma in Tool & Die Design", "Advanced Diploma in CAD/CAM", "Diploma in HVAC Systems & Piping"],
    competitiveExams: ["TS ECET (Mechanical for BE / B.Tech Lateral Entry)", "BHEL / Railway Apprentice / RRB-JE Exams"],
    governmentJobs: [
      "Junior Engineer (JE Mechanical) in Indian Railways (RRB JE Workshop & Carriage/Wagon)",
      "Technical Assistant in BHEL Ramachandrapuram Hyderabad & Ordnance Factories",
      "SSC JE Mechanical in CPWD, Military Engineer Services (MES), & Central Water Commission",
      "Technical Officer & Scientific Assistant in DRDO, ISRO, & Nuclear Fuel Complex (NFC Hyderabad)",
      "Junior Inspector of Boilers & Assistant Technical Officer in Telangana State Transport & PWD",
      "Technical Trainee in IOCL, HPCL, GAIL, ONGC, & Steel Authority of India (SAIL)",
    ],
  },
];

// Compact Vector SVG Graphic Components with Soft Rounded Background Corners
function MinimalistBranchGraphic({ code }: { code: string }) {
  switch (code) {
    case "CIVIL":
      return (
        <svg className="w-full h-full text-white" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(100, 65) scale(1.05)" strokeLinecap="round" strokeLinejoin="round">
            <line x1="-60" y1="50" x2="60" y2="50" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
            <line x1="-30" y1="-43" x2="-30" y2="50" stroke="#FFFFFF" strokeWidth="4" />
            <line x1="-14" y1="-43" x2="-14" y2="50" stroke="#FFFFFF" strokeWidth="4" />
            <path d="M-30 -37L-14 -21M-14 -37L-30 -21 M-30 -21L-14 -5M-14 -21L-30 -5 M-30 -5L-14 11M-14 -5L-30 11 M-30 11L-14 27M-14 11L-30 27 M-30 27L-14 43M-14 27L-30 43" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.85" />
            <path d="M-34 -43L-22 -57L-10 -43" stroke="#FFFFFF" strokeWidth="3.5" strokeLinejoin="round" fill="#FFFFFF" fillOpacity="0.25" />
            <line x1="-55" y1="-30" x2="65" y2="-30" stroke="#FFFFFF" strokeWidth="4" />
            <line x1="-40" y1="-43" x2="65" y2="-43" stroke="#FFFFFF" strokeWidth="3" />
            <path d="M-14 -43L2 -30M2 -43L-14 -30 M2 -43L18 -30M18 -43L2 -30 M34 -43L50 -30M50 -43L34 -30" stroke="#FFFFFF" strokeWidth="2" opacity="0.85" />
            <rect x="-55" y="-41" width="15" height="18" rx="4" fill="#FFFFFF" />
            <path d="M-55 -32H-64" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
            <line x1="40" y1="-30" x2="40" y2="20" stroke="#FFFFFF" strokeWidth="3" />
            <rect x="36" y="5" width="8" height="12" rx="3" fill="#FFFFFF" />
            <path d="M40 17C40 27 30 27 30 21C30 17 36 17 36 17" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      );

    case "ECE":
      return (
        <svg className="w-full h-full text-white" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(100, 65) scale(1.05)" strokeLinecap="round" strokeLinejoin="round">
            <rect x="-25" y="-25" width="50" height="50" rx="12" stroke="#FFFFFF" strokeWidth="4" fill="#FFFFFF" fillOpacity="0.18" />
            <rect x="-10" y="-10" width="20" height="20" rx="4" stroke="#FFFFFF" strokeWidth="3" fill="#FFFFFF" />
            <path d="M0 -25V-43" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="0" cy="-49" r="5" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" />
            <path d="M0 25V43" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="0" cy="49" r="5" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" />
            <path d="M-25 0H-43" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="-49" cy="0" r="5" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" />
            <path d="M25 0H43" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="49" cy="0" r="5" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" />
            <path d="M-20 -20L-35 -35H-43" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <circle cx="-49" cy="-35" r="4.5" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" />
            <path d="M20 -20L35 -35H43" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <circle cx="49" cy="-35" r="4.5" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" />
            <path d="M-20 20L-35 35H-43" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <circle cx="-49" cy="35" r="4.5" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" />
            <path d="M20 20L35 35H43" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <circle cx="49" cy="35" r="4.5" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" />
          </g>
        </svg>
      );

    case "EEE":
      return (
        <svg className="w-full h-full text-white" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(100, 65) scale(1.0)" strokeLinecap="round" strokeLinejoin="round">
            <path d="M0 -52L-12 -28H12L0 -52Z" stroke="#FFFFFF" strokeWidth="3.5" fill="#FFFFFF" fillOpacity="0.2" />
            <line x1="-38" y1="-28" x2="38" y2="-28" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
            <line x1="-48" y1="-10" x2="48" y2="-10" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
            <line x1="-42" y1="8" x2="42" y2="8" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
            <line x1="-38" y1="-28" x2="-38" y2="-20" stroke="#FFFFFF" strokeWidth="3.5" />
            <line x1="38" y1="-28" x2="38" y2="-20" stroke="#FFFFFF" strokeWidth="3.5" />
            <line x1="-48" y1="-10" x2="-48" y2="-2" stroke="#FFFFFF" strokeWidth="3.5" />
            <line x1="48" y1="-10" x2="48" y2="-2" stroke="#FFFFFF" strokeWidth="3.5" />
            <line x1="-42" y1="8" x2="-42" y2="16" stroke="#FFFFFF" strokeWidth="3.5" />
            <line x1="42" y1="8" x2="42" y2="16" stroke="#FFFFFF" strokeWidth="3.5" />
            <line x1="-12" y1="-28" x2="-26" y2="48" stroke="#FFFFFF" strokeWidth="4" />
            <line x1="12" y1="-28" x2="26" y2="48" stroke="#FFFFFF" strokeWidth="4" />
            <line x1="-28" y1="48" x2="28" y2="48" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
            <path d="M-15 -10L15 8M15 -10L-15 8 M-18 8L18 28M18 8L-18 28 M-22 28L22 48M22 28L-22 48" stroke="#FFFFFF" strokeWidth="2.5" />
          </g>
        </svg>
      );

    case "AI & ML":
    case "AI / ML":
      return (
        <svg className="w-full h-full text-white" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(100, 65) scale(1.0)" strokeLinecap="round" strokeLinejoin="round">
            <path d="M0 -40L-45 25H45L0 -40Z" stroke="#FFFFFF" strokeWidth="3.5" strokeLinejoin="round" fill="#FFFFFF" fillOpacity="0.12" />
            <path d="M0 -40L0 25M-45 25L0 -8M45 25L0 -8" stroke="#FFFFFF" strokeWidth="3" opacity="0.8" />
            <path d="M-22 -8L22 -8M-22 -8L0 25M22 -8L0 25" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.6" />

            <circle cx="-45" cy="25" r="5" fill="#FFFFFF" />
            <circle cx="45" cy="25" r="5" fill="#FFFFFF" />
            <circle cx="0" cy="25" r="4.5" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" />
            <circle cx="-22" cy="-8" r="4.5" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" />
            <circle cx="22" cy="-8" r="4.5" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="3" />

            {/* Selected Top Apex Node with Concentric Selection Rings */}
            <circle cx="0" cy="-40" r="16" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" opacity="0.85" />
            <circle cx="0" cy="-40" r="10" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
            <circle cx="0" cy="-40" r="6" fill="#FFFFFF" />
          </g>
        </svg>
      );

    case "MECH":
      return (
        <svg className="w-full h-full text-white" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(100, 65) scale(1.0)">
            <circle cx="0" cy="0" r="32" stroke="#FFFFFF" strokeWidth="5" fill="#FFFFFF" fillOpacity="0.2" />
            <rect x="-6" y="-44" width="12" height="14" rx="3" fill="#FFFFFF" />
            <rect x="-6" y="30" width="12" height="14" rx="3" fill="#FFFFFF" />
            <rect x="-44" y="-6" width="14" height="12" rx="3" fill="#FFFFFF" />
            <rect x="30" y="-6" width="14" height="12" rx="3" fill="#FFFFFF" />
            <rect x="-32" y="-32" width="12" height="13" rx="3" fill="#FFFFFF" transform="rotate(45)" />
            <rect x="20" y="20" width="12" height="13" rx="3" fill="#FFFFFF" transform="rotate(45)" />
            <rect x="-32" y="20" width="12" height="13" rx="3" fill="#FFFFFF" transform="rotate(-45)" />
            <rect x="20" y="-32" width="12" height="13" rx="3" fill="#FFFFFF" transform="rotate(-45)" />
            <circle cx="0" cy="0" r="22" stroke="#FFFFFF" strokeWidth="2.5" fill="#25176E" />
            <circle cx="0" cy="0" r="14" stroke="#FFFFFF" strokeWidth="3" fill="#FFFFFF" />
          </g>
        </svg>
      );

    case "CSE":
    default:
      return (
        <svg className="w-full h-full text-white" viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(100, 65) scale(1.05)" strokeLinecap="round" strokeLinejoin="round">
            <rect x="-55" y="-37" width="110" height="74" rx="12" stroke="#FFFFFF" strokeWidth="4" fill="#FFFFFF" fillOpacity="0.15" />
            <path d="M-55 -19H55" stroke="#FFFFFF" strokeWidth="3" opacity="0.5" />
            <circle cx="-42" cy="-28" r="3.5" fill="#FFFFFF" />
            <circle cx="-32" cy="-28" r="3.5" fill="#FFFFFF" />
            <circle cx="-22" cy="-28" r="3.5" fill="#FFFFFF" />
            <path d="M-30 -5L-41 6L-30 17M-5 0L6 11L-5 22M-15 23L-8 -1" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 -1H38M18 13H28" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
          </g>
        </svg>
      );
  }
}

function DiplomaCourseCard({
  course,
  onSelect,
}: {
  course: Course;
  onSelect: (course: Course) => void;
}) {
  return (
    <div
      onClick={() => onSelect(course)}
      className="rounded-[24px] bg-white border border-[#EBE6FE] p-6 flex flex-col justify-between items-center text-center group hover:shadow-xl hover:border-[#25176E]/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden cursor-pointer h-full"
    >
      <div className="flex flex-col items-center w-full">
        {/* Enlarged Centered Square Icon Badge with Rounded Corners */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[22px] sm:rounded-[26px] bg-[#1E1266] flex items-center justify-center p-3 mb-5 shadow-lg border border-[#372692]/25 group-hover:scale-105 transition-transform duration-300 mx-auto shrink-0">
          <MinimalistBranchGraphic code={course.code} />
        </div>

        {/* Clean Centered Content Area */}
        <h3 className="font-display-saasmo text-lg sm:text-xl font-extrabold text-[#1E1266] group-hover:text-[#25176E] transition-colors leading-snug">
          {course.name}
        </h3>

        {/* Subtitle Text */}
        <p className="text-xs text-[#64748B] font-medium mt-1">
          SBTET C-24 & C-26 Curriculum Scheme
        </p>
      </div>

      {/* Bottom Action Footer */}
      <div className="w-full flex items-center justify-between text-xs font-bold text-[#25176E] group-hover:text-[#1b1054] transition-colors pt-4 border-t border-[#F0EBFF] mt-5">
        <span>View Syllabus & Details</span>
        <div className="w-7 h-7 rounded-full bg-[#F0EBFF] text-[#25176E] flex items-center justify-center group-hover:bg-[#25176E] group-hover:text-white transition-all">
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}

export default function EngineeringCoursesTrack() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section id="courses" className="py-14 sm:py-20 relative bg-[#F6F4FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#25176E] bg-[#F0EBFF] px-3 py-1 rounded-full border border-[#EBE6FE]">
            DIPLOMA SPECIALTIES & SCHEMES
          </span>
          <h2 className="font-display-saasmo text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-[#1E1266] mt-2 whitespace-normal lg:whitespace-nowrap">
            Diploma Courses We Provide Coaching For
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed max-w-3xl">
            Comprehensive coaching for Telangana SBTET diploma branches across C-24 & C-26 curriculum schemes, board examinations, and BE / B.Tech entrance preparation.
          </p>
        </div>

        {/* Mobile View: 1 Card at a time Carousel with Backward/Forward Buttons */}
        <div className="block md:hidden px-6 relative">
          <Carousel opts={{ align: "start", loop: true }} className="relative w-full">
            <CarouselContent>
              {coursesData.map((course) => (
                <CarouselItem key={course.id} className="basis-full">
                  <div className="p-1 h-full">
                    <DiplomaCourseCard course={course} onSelect={setSelectedCourse} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-5 bg-white text-[#25176E] border border-[#EBE6FE] shadow-md hover:bg-[#F0EBFF]" />
            <CarouselNext className="-right-5 bg-white text-[#25176E] border border-[#EBE6FE] shadow-md hover:bg-[#F0EBFF]" />
            <CarouselDots />
          </Carousel>
        </div>

        {/* Desktop View: Original Refined Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <DiplomaCourseCard
              key={course.id}
              course={course}
              onSelect={setSelectedCourse}
            />
          ))}
        </div>

      </div>

      {/* Modal Dialog */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </section>
  );
}
