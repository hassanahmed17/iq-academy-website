"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Code2, Cpu, Building2, Radio, Zap, Cog } from "lucide-react";
import CourseDetailModal from "./CourseDetailModal";

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

// Engineering Icon Component using Lucide icons
function EngineeringIcon({ code }: { code: string }) {
  switch (code) {
    case "AI & ML":
    case "AI / ML":
      return <Cpu className="w-6 h-6 text-white shrink-0" />;
    case "CIVIL":
      return <Building2 className="w-6 h-6 text-white shrink-0" />;
    case "ECE":
      return <Radio className="w-6 h-6 text-white shrink-0" />;
    case "EEE":
      return <Zap className="w-6 h-6 text-white shrink-0" />;
    case "MECH":
      return <Cog className="w-6 h-6 text-white shrink-0" />;
    case "CSE":
    default:
      return <Code2 className="w-6 h-6 text-white shrink-0" />;
  }
}

// Diploma Course Card matching user's component design (Subject counts omitted as requested)
export function DiplomaCourseCard({
  course,
  onSelect,
}: {
  course: Course;
  onSelect: (course: Course) => void;
}) {
  return (
    <div
      id={`course-${course.id}`}
      onClick={() => onSelect(course)}
      className="bg-white rounded-2xl p-5 sm:p-6 relative overflow-hidden border border-[#EBE6FE] shadow-sm hover:shadow-xl hover:border-[#25176E]/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
    >
      {/* Corner circle background ornament */}
      <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#F0EBFF] rounded-full group-hover:bg-[#EBE6FE] transition-colors pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between">
            <div className="w-[52px] h-[52px] rounded-2xl bg-[#1E1266] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
              <EngineeringIcon code={course.code} />
            </div>
            <span className="bg-[#F0EBFF] text-[#25176E] text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full border border-[#EBE6FE]">
              {course.category || "C-24 & C-26"}
            </span>
          </div>

          <h3 className="font-display-saasmo text-[18px] sm:text-[20px] font-extrabold text-[#1E1266] mt-4 mb-3 group-hover:text-[#25176E] transition-colors leading-snug tracking-tight">
            {course.name}
          </h3>
        </div>

        <div className="border-t border-[#F0EBFF] pt-3.5 mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(course);
            }}
            className="text-xs sm:text-sm font-bold text-[#25176E] group-hover:text-[#1b1054] transition-colors text-left"
          >
            View syllabus and details
          </button>
          <span className="w-7 h-7 rounded-full bg-[#F0EBFF] text-[#25176E] flex items-center justify-center group-hover:bg-[#25176E] group-hover:text-white transition-all shrink-0 ml-2">
            <ArrowRight className="w-4 h-4 text-[#25176E] group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );
}

// User Provided Diploma Courses Carousel Component
export function DiplomaCoursesCarousel({
  courses = coursesData,
  onViewSyllabus = () => {},
}: {
  courses?: Course[];
  onViewSyllabus?: (course: Course) => void;
}) {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => setIndex(Math.max(0, Math.min(courses.length - 1, i)));

  const isLast = index === courses.length - 1;
  const translateX = isLast
    ? `calc(-${index} * (88% + 12px) + 6%)`
    : `calc(-${index} * (88% + 12px))`;

  return (
    <div className="w-full relative">
      {/* Track */}
      <div className="overflow-hidden py-2 px-1">
        <div
          className="flex gap-3 sm:gap-4 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${translateX})` }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex-none w-[88%] sm:w-[340px]"
            >
              <DiplomaCourseCard course={course} onSelect={onViewSyllabus} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-4 px-1">
        <div className="flex gap-1.5 items-center">
          {courses.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-[#1E1266]"
                  : "w-2 bg-[#25176E]/35 hover:bg-[#25176E]/60 border border-[#25176E]/20"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <button
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            className="w-[34px] h-[34px] rounded-full bg-white border border-[#EBE6FE] flex items-center justify-center disabled:opacity-40 shadow-xs hover:bg-[#F0EBFF] active:scale-95 transition-all"
            aria-label="Previous course"
          >
            <ChevronLeft className="w-4 h-4 text-[#1E1266]" />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            disabled={index === courses.length - 1}
            className="w-[34px] h-[34px] rounded-full bg-[#1E1266] text-white flex items-center justify-center disabled:opacity-40 shadow-xs hover:bg-[#25176E] active:scale-95 transition-all"
            aria-label="Next course"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

import { motion, Variants } from "framer-motion";

export default function EngineeringCoursesTrack() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  React.useEffect(() => {
    const handleOpenCourse = (e: Event) => {
      const customEvt = e as CustomEvent<string>;
      const courseId = customEvt.detail;
      const found = coursesData.find((c) => c.id === courseId);
      if (found) {
        setSelectedCourse(found);
        const elem = document.getElementById("courses");
        if (elem) {
          const navHeight = 80;
          const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: Math.max(0, elementPosition - navHeight),
            behavior: "smooth"
          });
        }
      }
    };

    window.addEventListener("open-course-modal", handleOpenCourse);
    return () => {
      window.removeEventListener("open-course-modal", handleOpenCourse);
    };
  }, []);

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

  const itemVariants: Variants = {
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
    <section id="courses" className="py-14 sm:py-20 relative bg-[#F6F4FE] overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#25176E] bg-[#F0EBFF] px-3 py-1 rounded-full border border-[#EBE6FE]">
            DIPLOMA SPECIALTIES & SCHEMES
          </span>
          <h2 className="font-display-saasmo text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-[#1E1266] mt-2 whitespace-normal lg:whitespace-nowrap">
            Diploma Courses We Provide Coaching For
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed max-w-3xl">
            Comprehensive coaching for Telangana SBTET diploma branches across C-24 & C-26 curriculum schemes, board examinations, and BE / B.Tech entrance preparation.
          </p>
        </motion.div>

        {/* Mobile View: Carousel with Dots & Controls matching user code design */}
        <motion.div variants={itemVariants} className="block md:hidden relative">
          <DiplomaCoursesCarousel
            courses={coursesData}
            onViewSyllabus={setSelectedCourse}
          />
        </motion.div>

        {/* Desktop View: Grid matching user card design */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <motion.div key={course.id} variants={itemVariants} whileHover={{ y: -6, transition: { duration: 0.25 } }}>
              <DiplomaCourseCard
                course={course}
                onSelect={setSelectedCourse}
              />
            </motion.div>
          ))}
        </div>

      </motion.div>

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
