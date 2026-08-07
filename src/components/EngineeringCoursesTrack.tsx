"use client";

import React, { useState } from "react";
import { ArrowRight, Code2, Cpu, Building2, Radio, Zap, Cog, BookOpen, GraduationCap, Atom, Microscope, Landmark } from "lucide-react";
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

export interface InterSyllabus {
  year1: string[];
  year2: string[];
}

export interface SSCSyllabus {
  subjects: string[];
}

export interface Course {
  id: string;
  code: string;
  name: string;
  fullTitle: string;
  category: string;
  type: "diploma" | "intermediate" | "ssc";
  shortDesc: string;
  benefitsHeading: string;
  careerOptionsBrief: string;
  keyBenefits: string[];
  topics: string[];
  c24Syllabus?: C24SchemeSyllabus;
  c26Syllabus?: C26SchemeSyllabus;
  interSyllabus?: InterSyllabus;
  sscSyllabus?: SSCSyllabus;
  certifications?: string[];
  vocationalCourses?: string[];
  competitiveExams?: string[];
  governmentJobs?: string[];
}

const universalCoachingBenefits = [
  "100% Syllabus Coverage across all academic years and semesters",
  "Step-by-Step Mathematical Problem Solving and simplified formula memory notes",
  "Previous 10+ Years Board Exam Solved Papers and unit-wise question bank solutions",
  "Weekly Chapter Assessment Drills and individual academic progress tracking",
  "BE / B.Tech Entrance Coaching and Entrance Mock Tests",
];

const universalCareerBrief = "IQ Academy of Excellence provides structured academic theory coaching, chapter-wise problem-solving guidance, and exam preparation for students.";

const coursesData: Course[] = [
  // 1. POLYTECHNIC DIPLOMA ENGINEERING BRANCHES
  {
    id: "cse",
    code: "CSE",
    name: "Computer Science Engineering",
    fullTitle: "Diploma in Computer Science & Engineering",
    category: "SBTET C-24 & C-26",
    type: "diploma",
    shortDesc: "Comprehensive coaching covering C, C++, Data Structures, Java, Python, RDBMS, Computer Networks, Operating Systems, and Cryptography.",
    benefitsHeading: "Coaching Benefits at IQ Academy",
    careerOptionsBrief: universalCareerBrief,
    keyBenefits: universalCoachingBenefits,
    topics: ["C / C++ Logic", "Data Structures", "Java & Python", "RDBMS"],
    c24Syllabus: {
      sem1: ["Basic English", "Basic Engineering Mathematics", "Basic Physics", "General Engineering Chemistry", "Computer Fundamentals & Hardware", "Basic Electrical and Electronics Engineering", "Engineering Drawing-I"],
      sem2: ["Advanced English", "Engineering Mathematics", "Applied Physics", "Applied Engineering Chemistry", "Programming in C", "Web Technologies", "Engineering Drawing-II"],
      sem3: ["Applied Engineering Mathematics", "Digital Electronics", "Data Structures Through C", "OOPS through C++", "Computer Organization and Architecture", "Computer Networks", "Communication Skills & Life Skills"],
      sem4: ["Advanced Engineering Mathematics", "Java Programming", "Python Programming", "Relational Database Management Systems", "Cryptography & Network Security", "Operating Systems"],
      sem5: ["Entrepreneurship & Startups", "Data Mining & Data Warehousing", "Software Engineering & Testing", "Mobile Application Development", "Web Development Technologies", "Cloud Computing"],
    },
    c26Syllabus: {
      year1: ["Engineering English", "Engineering Mathematics-I", "Engineering Physics", "Engineering Chemistry", "Programming in C & Data Structures", "Information Technology Fundamentals", "Engineering Graphics"],
      sem3: ["Engineering Mathematics-II", "Digital Logic & Microprocessors", "Object Oriented Programming (Java)", "Database Management Systems", "Computer Networks & Protocols", "Web Development (HTML, CSS, JS)"],
      sem4: ["Engineering Mathematics-III", "Python Programming & Scripting", "Operating Systems Principles", "Software Engineering Practices", "Data Warehousing & Data Mining", "Computer Organization & Architecture"],
      sem5: ["Cloud Computing Architecture", "Mobile App Development (Android)", "Cyber Security & Cryptography", "Artificial Intelligence Fundamentals", "Industrial Training / Project Guidance"],
    },
    certifications: ["AWS Certified Cloud Practitioner", "Oracle Certified Associate (Java)", "Cisco Certified Network Associate (CCNA)", "Python Institute Certified Entry-Level Programmer"],
    vocationalCourses: ["Post-Diploma in Software Testing & Automation", "Advanced Diploma in Full-Stack Web Development", "Diploma in Mobile App Development"],
    competitiveExams: ["TS ECET (CSE for BE / B.Tech Computer Science Lateral Entry)", "NIC / NIELIT Technical Assistant Scientist-B Exams"],
    governmentJobs: [
      "Junior Engineer (JE IT) in Indian Railways (RRB JE IT & Data Processing)",
      "Technical Assistant in ISRO Satellite Centre & DRDO Computer Division",
      "Assistant Information Officer & System Analyst in Telangana State IT Department",
      "Technical Assistant in National Informatics Centre (NIC Hyderabad)",
      "Junior Systems Administrator in Power Grid Corporation of India (PGCIL)",
      "Data Processing Assistant in Staff Selection Commission (SSC Technical)",
    ],
  },
  {
    id: "aiml",
    code: "AI & ML",
    name: "Artificial Intelligence & ML",
    fullTitle: "Diploma in Artificial Intelligence & Machine Learning",
    category: "SBTET C-24 & C-26",
    type: "diploma",
    shortDesc: "Specialized coaching covering Python, Data Structures, Mathematics for AI, Machine Learning Algorithms, Deep Learning, and Computer Vision.",
    benefitsHeading: "Coaching Benefits at IQ Academy",
    careerOptionsBrief: universalCareerBrief,
    keyBenefits: universalCoachingBenefits,
    topics: ["Python for AI", "Machine Learning", "Mathematics for AI", "Neural Networks"],
    c24Syllabus: {
      sem1: ["Basic English", "Basic Engineering Mathematics", "Basic Physics", "General Engineering Chemistry", "Computer Fundamentals & AI Basics", "Basic Electrical Engineering", "Engineering Drawing-I"],
      sem2: ["Advanced English", "Engineering Mathematics", "Applied Physics", "Applied Chemistry", "Python Programming for Data Science", "Logic Building & Algorithms", "Engineering Drawing-II"],
      sem3: ["Applied Mathematics for AI", "Data Structures & Algorithms", "Object Oriented Programming (C++)", "Statistical Methods for ML", "Database Management Systems", "Computer Networks"],
      sem4: ["Advanced Engineering Mathematics", "Machine Learning Fundamentals", "Deep Learning Foundations", "Natural Language Processing", "Operating Systems", "Web Technologies"],
      sem5: ["Computer Vision & Image Processing", "AI Ethics & Governance", "Big Data Analytics", "Cloud AI Services & Deployment", "Industrial Project & Internship"],
    },
    c26Syllabus: {
      year1: ["Engineering English", "Engineering Mathematics-I", "Engineering Physics", "Engineering Chemistry", "Python Programming Foundations", "Computer Fundamentals & AI Logic", "Engineering Graphics"],
      sem3: ["Linear Algebra & Probability for ML", "Data Structures Through Python", "Database Systems & SQL", "Supervised Machine Learning", "Computer Architecture", "Web Technologies"],
      sem4: ["Unsupervised & Reinforcement ML", "Deep Learning with TensorFlow/PyTorch", "Natural Language Processing", "Software Engineering for AI Systems", "Operating Systems"],
      sem5: ["Computer Vision Applications", "MLOps & Model Deployment", "AI in Cloud Environments", "Generative AI & LLM Basics", "Industrial Project Guidance"],
    },
    certifications: ["TensorFlow Developer Certificate", "Microsoft Certified: Azure AI Engineer Associate", "IBM Data Science Professional Certificate", "Google Cloud Digital Leader / AI Track"],
    vocationalCourses: ["Advanced Diploma in Data Science & Machine Learning", "Certificate in MLOps & Cloud AI Deployment", "Diploma in Business Analytics"],
    competitiveExams: ["TS ECET (CSE/AI-ML for BE/B.Tech AI-ML & Data Science Lateral Entry)", "CDAC C-DAC Entrance Test for PG Diploma in AI"],
    governmentJobs: [
      "Data Analyst & Technical Assistant in Telangana State Emerging Technologies Cell",
      "Scientific Assistant (Data Science) in DRDO & Defence AI Research Labs",
      "Junior Programmer (AI Infrastructure) in National Informatics Centre (NIC)",
      "Technical Assistant in Centre for Development of Advanced Computing (C-DAC Hyderabad)",
      "Junior Technical Officer in Telangana State Portal & E-Governance Division",
      "Research Assistant in IIT Hyderabad & IIIT Hyderabad Sponsored AI Projects",
    ],
  },
  {
    id: "ece",
    code: "ECE",
    name: "Electronics & Communication",
    fullTitle: "Diploma in Electronics & Communication Engineering",
    category: "SBTET C-24 & C-26",
    type: "diploma",
    shortDesc: "In-depth coaching covering Electronic Devices, Digital Electronics, Microcontrollers, Communication Systems, VLSI, and Embedded Systems.",
    benefitsHeading: "Coaching Benefits at IQ Academy",
    careerOptionsBrief: universalCareerBrief,
    keyBenefits: universalCoachingBenefits,
    topics: ["Electronic Circuits", "Digital Logic & Microprocessors", "Microcontrollers & IoT", "VLSI Basics"],
    c24Syllabus: {
      sem1: ["Basic English", "Basic Engineering Mathematics", "Basic Physics", "General Engineering Chemistry", "Electronic Components & Devices", "Basic Electrical Engineering", "Engineering Drawing-I"],
      sem2: ["Advanced English", "Engineering Mathematics", "Applied Physics", "Applied Chemistry", "Circuit Theory", "Electronic Circuits", "Engineering Drawing-II"],
      sem3: ["Applied Engineering Mathematics", "Digital Electronics", "Analog Communication", "Electronic Measuring Instruments", "Microprocessors (8086)", "Linear Integrated Circuits"],
      sem4: ["Advanced Engineering Mathematics", "Digital Communication", "Microcontrollers & Applications", "Industrial Electronics & PLC", "Computer Networks", "Audio & Video Systems"],
      sem5: ["VLSI Design Fundamentals", "Embedded Systems", "Optical & Microwave Communication", "Mobile Communication", "Consumer Electronics"],
    },
    c26Syllabus: {
      year1: ["Engineering English", "Engineering Mathematics-I", "Engineering Physics", "Engineering Chemistry", "Basic Electronics & Devices", "Electrical Technology", "Engineering Graphics"],
      sem3: ["Engineering Mathematics-II", "Electronic Circuit Analysis", "Digital Electronics & Logic Design", "Analog Communication Systems", "Electronic Instrumentation", "C Programming"],
      sem4: ["Engineering Mathematics-III", "Microprocessors & Microcontrollers (8051/ARM)", "Digital Communication & Coding", "Industrial Automation & Sensors", "Signal & System Basics"],
      sem5: ["Embedded Systems & IoT", "VLSI Design & Verilog HDL", "Microwave & Radar Engineering", "Optical Fiber Communication", "Industrial Training / Project"],
    },
    certifications: ["Embedded Systems Certification (ARM / AVR)", "VLSI Design & Verilog Certification", "PLC & SCADA Industrial Automation Certificate", "IoT Systems Certified Associate"],
    vocationalCourses: ["Post-Diploma in Industrial Automation & Robotics", "Advanced Diploma in VLSI Design", "Diploma in PCB Design & Hardware Testing"],
    competitiveExams: ["TS ECET (ECE for BE / B.Tech ECE Lateral Entry)", "BSNL TTA / BHEL / ECIL / BEL Technical Assistant Exams"],
    governmentJobs: [
      "Technical Officer & Scientific Assistant in ECIL Hyderabad (Electronics Corporation of India)",
      "Technical Assistant in ISRO NRSC (National Remote Sensing Centre Balanagar Hyderabad)",
      "Junior Telecom Officer (JTO) & TTA in BSNL / MTNL",
      "Junior Engineer (JE Signal & Telecom) in Indian Railways (RRB JE Telecommunication)",
      "Scientific Assistant in DRDL / RCI (Research Centre Imarat Kanchanbagh Hyderabad)",
      "Technical Trainee in BEL (Bharat Electronics Limited) & Ordnance Factory Board",
    ],
  },
  {
    id: "eee",
    code: "EEE",
    name: "Electrical & Electronics",
    fullTitle: "Diploma in Electrical & Electronics Engineering",
    category: "SBTET C-24 & C-26",
    type: "diploma",
    shortDesc: "Comprehensive coaching covering Electrical Circuits, AC Machines, Power Systems, Transmission & Distribution, Power Electronics, and PLC.",
    benefitsHeading: "Coaching Benefits at IQ Academy",
    careerOptionsBrief: universalCareerBrief,
    keyBenefits: universalCoachingBenefits,
    topics: ["Electrical Circuits", "DC & AC Machines", "Power Systems", "PLC & Automation"],
    c24Syllabus: {
      sem1: ["Basic English", "Basic Engineering Mathematics", "Basic Physics", "General Engineering Chemistry", "Basic Electrical Engineering", "Basic Electronics", "Engineering Drawing-I"],
      sem2: ["Advanced English", "Engineering Mathematics", "Applied Physics", "Applied Chemistry", "Electrical Circuit Theory", "DC Machines & Transformers", "Engineering Drawing-II"],
      sem3: ["Applied Engineering Mathematics", "AC Machines", "Electrical Measurements & Instruments", "Electronics Engineering", "Generation of Electrical Power", "Digital Electronics"],
      sem4: ["Advanced Engineering Mathematics", "Transmission & Distribution", "Power Electronics", "Electrical Estimation & Costing", "Microcontrollers", "Switchgear & Protection"],
      sem5: ["Utilisation of Electrical Energy", "PLC & Industrial Automation", "Electric Traction", "Electrical Machine Design", "Renewable Energy Sources"],
    },
    c26Syllabus: {
      year1: ["Engineering English", "Engineering Mathematics-I", "Engineering Physics", "Engineering Chemistry", "Fundamentals of Electrical Engineering", "Basic Electronics", "Engineering Graphics"],
      sem3: ["Engineering Mathematics-II", "DC Machines & Transformers", "Electrical Circuit Analysis", "Analog & Digital Electronics", "Electrical Measurements", "Computer Programming"],
      sem4: ["Engineering Mathematics-III", "AC Machines (Induction & Synchronous)", "Transmission & Distribution of Power", "Power Electronics & Drives", "Switchgear & Protection"],
      sem5: ["Power Systems & Smart Grids", "PLC, SCADA & Industrial Automation", "Electrical Traction & Electric Vehicles (EV)", "Energy Management & Audit", "Industrial Training / Project"],
    },
    certifications: ["Certified Electrical Supervisor (Government License)", "PLC & SCADA Automation Specialist", "Substation Operation & Maintenance Certificate", "Solar PV Systems Design Certification"],
    vocationalCourses: ["Post-Diploma in Power Plant Engineering", "Advanced Diploma in EV Technology & Battery Systems", "Diploma in Industrial Safety & Electrical Safety"],
    competitiveExams: ["TS ECET (EEE for BE / B.Tech EEE Lateral Entry)", "TS DISCOMs (TSSPDCL / TSNPDCL) Sub-Engineer Exams"],
    governmentJobs: [
      "Sub-Engineer (Electrical) in TSSPDCL & TSNPDCL (Telangana Electricity Power Distribution Companies)",
      "Assistant Engineer (AE / Sub-Engineer) in TSTRANSCO & TSGENCO (Telangana Power Grid & Generation)",
      "Junior Engineer (JE Electrical) in Indian Railways (RRB JE Electrical Traction & Loco Sheds)",
      "Assistant Technical Officer in NTPC Ramagundam & Singareni Collieries (SCCL)",
      "Junior Technical Engineer in Power Grid Corporation of India (PGCIL Hyderabad)",
      "Electrical Technical Assistant in CPWD, MES, and Airport Authority of India (AAI)",
    ],
  },
  {
    id: "civil",
    code: "CIVIL",
    name: "Civil Engineering",
    fullTitle: "Diploma in Civil Engineering",
    category: "SBTET C-24 & C-26",
    type: "diploma",
    shortDesc: "Complete coaching covering Surveying, Strength of Materials, Hydraulics, Building Materials, RCC & Steel Structure Design, Construction Management, and AutoCAD.",
    benefitsHeading: "Coaching Benefits at IQ Academy",
    careerOptionsBrief: universalCareerBrief,
    keyBenefits: universalCoachingBenefits,
    topics: ["Surveying & GIS", "Strength of Materials", "RCC Structure Design", "AutoCAD Building Plans"],
    c24Syllabus: {
      sem1: ["Basic English", "Basic Engineering Mathematics", "Basic Physics", "General Engineering Chemistry", "Surveying-I", "Building Materials & Construction", "Engineering Drawing-I"],
      sem2: ["Advanced English", "Engineering Mathematics", "Applied Physics", "Applied Chemistry", "Surveying-II", "Strength of Materials", "Engineering Drawing-II"],
      sem3: ["Applied Engineering Mathematics", "Hydraulics & Fluid Mechanics", "Civil Engineering Drawing-I", "Theory of Structures", "Transportation Engineering", "Concrete Technology"],
      sem4: ["Advanced Engineering Mathematics", "Reinforced Concrete Structures (RCC)", "Quantity Surveying & Estimation", "Geo-Technical Engineering (Soil)", "Environmental Engineering", "Computer Applications in Civil (AutoCAD)"],
      sem5: ["Design of Steel Structures", "Construction Management & Safety", "Irrigation & Bridge Engineering", "GIS & Remote Sensing", "Advanced Construction Technology"],
    },
    c26Syllabus: {
      year1: ["Engineering English", "Engineering Mathematics-I", "Engineering Physics", "Engineering Chemistry", "Basic Civil Engineering & Surveying-I", "Building Materials", "Engineering Graphics"],
      sem3: ["Engineering Mathematics-II", "Strength of Materials", "Surveying-II & Total Station / GPS", "Hydraulics", "Building Construction & Planning", "CAD in Civil Engineering"],
      sem4: ["Engineering Mathematics-III", "Design of Reinforced Concrete (RCC)", "Transportation & Highway Engineering", "Soil Mechanics & Foundation", "Water Supply & Sanitary Engineering"],
      sem5: ["Design of Steel Structures", "Quantity Surveying, Estimation & Valuation", "Irrigation & Water Resources", "Construction Project Management", "Industrial Training / Project"],
    },
    certifications: ["AutoCAD Civil 2D & 3D Certification", "Revit Architecture & BIM Specialist", "Total Station & GPS Surveying Certificate", "STAAD Pro Structural Analysis Certification"],
    vocationalCourses: ["Post-Diploma in Structural Engineering Design", "Advanced Diploma in Highway & Bridge Engineering", "Diploma in Quantity Surveying & Valuation"],
    competitiveExams: ["TS ECET (Civil for BE / B.Tech Civil Engineering Lateral Entry)", "TSPSC AEE / AE Civil & Town Planning Building Overseer Exams"],
    governmentJobs: [
      "Assistant Technical Officer & Technical Assistant in Telangana Irrigation & CAD Department",
      "Assistant Engineer (AE Civil) & AEE in Telangana Panchayat Raj, R&B, & GHMC Hyderabad",
      "Town Planning Building Overseer (TPBO) in Telangana Municipalities & HMDA",
      "Junior Engineer (JE Civil) in Indian Railways (RRB JE Permanent Way & Works)",
      "Technical Assistant in Telangana State Housing Corporation & Water Grid (Mission Bhagiratha)",
      "Junior Engineer (Civil) in SSC JE (CPWD, MES, CWC, and Border Roads Organisation)",
    ],
  },
  {
    id: "mech",
    code: "MECH",
    name: "Mechanical Engineering",
    fullTitle: "Diploma in Mechanical Engineering",
    category: "SBTET C-24 & C-26",
    type: "diploma",
    shortDesc: "Exhaustive coaching covering Engineering Mechanics, Thermodynamics, Thermal Engineering, Manufacturing Technology, Machine Design, Automobile Engineering, and CAD/CAM.",
    benefitsHeading: "Coaching Benefits at IQ Academy",
    careerOptionsBrief: universalCareerBrief,
    keyBenefits: universalCoachingBenefits,
    topics: ["Engineering Mechanics", "Thermodynamics", "Manufacturing & CNC", "Machine Design"],
    c24Syllabus: {
      sem1: ["Basic English", "Basic Engineering Mathematics", "Basic Physics", "General Engineering Chemistry", "Workshop Technology", "Engineering Mechanics", "Engineering Drawing-I"],
      sem2: ["Advanced English", "Engineering Mathematics", "Applied Physics", "Applied Chemistry", "Thermal Engineering-I", "Manufacturing Processes", "Engineering Drawing-II"],
      sem3: ["Applied Engineering Mathematics", "Thermal Engineering-II", "Strength of Materials", "Machine Drawing", "Hydraulics & Pneumatics", "Production Technology"],
      sem4: ["Advanced Engineering Mathematics", "Industrial Engineering & Management", "Design of Machine Elements", "Refrigeration & Air Conditioning", "Fluid Power & Control", "CAD/CAM"],
      sem5: ["Automobile Engineering", "Industrial Automation & Robotics", "Power Plant Engineering", "Mechatronics", "CNC Machines & 3D Printing"],
    },
    c26Syllabus: {
      year1: ["Engineering English", "Engineering Mathematics-I", "Engineering Physics", "Engineering Chemistry", "Engineering Mechanics", "Workshop Processes", "Engineering Graphics"],
      sem3: ["Engineering Mathematics-II", "Thermodynamics & Heat Transfer", "Manufacturing Technology-I", "Strength of Materials", "Machine Drawing", "Computer Programming"],
      sem4: ["Engineering Mathematics-III", "Applied Thermal Engineering", "Design of Machine Elements", "Fluid Mechanics & Hydraulic Machinery", "Manufacturing Technology-II (CNC)"],
      sem5: ["Automobile Engineering & EV Tech", "CAD/CAM/CAE Systems", "Industrial Engineering & Quality Control", "Refrigeration & Air Conditioning", "Industrial Training / Project"],
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

  // 2. INTERMEDIATE STREAMS (MPC, BiPC, CEC)
  {
    id: "mpc",
    code: "MPC",
    name: "MPC Stream",
    fullTitle: "MPC Stream",
    category: "Intermediate",
    type: "intermediate",
    shortDesc: "Complete Mathematics 1A/1B/2A/2B, Physics, and Chemistry coaching with problem-solving drills.",
    benefitsHeading: "MPC Academic Coaching Advantages",
    careerOptionsBrief: "IQ Academy provides step-by-step problem-solving, formula memory cards, and chapter-wise question bank solutions.",
    keyBenefits: [
      "100% Intermediate MPC Syllabus Coverage for 1st & 2nd Year",
      "Step-by-step derivation techniques for Maths 1A, 1B, 2A & 2B to score top marks",
      "Physics & Chemistry numerical problem shortcuts and memory maps",
      "Previous 10+ Years Exam Question Bank solutions and weekly mock tests",
      "Objective problem drills and speed practice"
    ],
    topics: ["Maths 1A / 1B & 2A / 2B", "Physics", "Chemistry"],
    interSyllabus: {
      year1: [
        "Mathematics-1A",
        "Mathematics-1B",
        "Physics-1",
        "Chemistry-1",
        "English Paper-1",
        "Language Paper-1"
      ],
      year2: [
        "Mathematics-2A",
        "Mathematics-2B",
        "Physics-2",
        "Chemistry-2",
        "English Paper-2",
        "Language Paper-2"
      ]
    },
    competitiveExams: [],
    governmentJobs: []
  },
  {
    id: "bipc",
    code: "BiPC",
    name: "BiPC Stream",
    fullTitle: "BiPC Stream",
    category: "Intermediate",
    type: "intermediate",
    shortDesc: "Structured Botany, Zoology, Physics & Chemistry coaching with foundation drills.",
    benefitsHeading: "BiPC Academic Coaching Advantages",
    careerOptionsBrief: "Comprehensive theory coaching, biological diagram memory practice, and physical science problem drills.",
    keyBenefits: [
      "Full Syllabus coverage for Botany, Zoology, Physics, and Chemistry",
      "High-yield diagram drawing techniques and structured answer writing strategies",
      "Physics & Chemistry numerical shortcuts designed for BiPC biology stream students",
      "Chapter-wise previous papers & model question paper drills",
      "Biology diagrams and concept clarity guidance"
    ],
    topics: ["Botany", "Zoology", "Physics & Chemistry"],
    interSyllabus: {
      year1: [
        "Botany-1",
        "Zoology-1",
        "Physics-1",
        "Chemistry-1",
        "English Paper-1",
        "Language Paper-1"
      ],
      year2: [
        "Botany-2",
        "Zoology-2",
        "Physics-2",
        "Chemistry-2",
        "English Paper-2",
        "Language Paper-2"
      ]
    },
    competitiveExams: [],
    governmentJobs: []
  },
  {
    id: "cec",
    code: "CEC",
    name: "CEC Stream",
    fullTitle: "CEC Stream",
    category: "Intermediate",
    type: "intermediate",
    shortDesc: "In-depth Civics, Economics, Commerce & Accountancy coaching.",
    benefitsHeading: "CEC Academic Coaching Advantages",
    careerOptionsBrief: "Master Commerce & Accountancy ledgers, Economics models, and Civics political science concepts.",
    keyBenefits: [
      "100% Syllabus coaching for Civics, Economics, Commerce & Accountancy",
      "Step-by-step Accountancy Journal, Ledger, Trial Balance & Final Accounts problem solving",
      "Economics demand & supply curve diagrams and memory charts",
      "Civics political system structured answer writing drills",
      "Board exam theory and problem practice"
    ],
    topics: ["Commerce & Accountancy", "Economics", "Civics"],
    interSyllabus: {
      year1: [
        "Commerce-1",
        "Accountancy-1",
        "Economics-1",
        "Civics-1",
        "English Paper-1",
        "Language Paper-1"
      ],
      year2: [
        "Commerce-2",
        "Accountancy-2",
        "Economics-2",
        "Civics-2",
        "English Paper-2",
        "Language Paper-2"
      ]
    },
    competitiveExams: [],
    governmentJobs: []
  },

  // 3. SSC (CLASS 10TH BOARD)
  {
    id: "ssc-10th",
    code: "SSC",
    name: "SSC Class 10th",
    fullTitle: "SSC Class 10th",
    category: "SSC Board",
    type: "ssc",
    shortDesc: "Comprehensive Class 10th Board Exam coaching for Mathematics, Physical Science, Biological Science, Social Studies, and Languages.",
    benefitsHeading: "SSC Board Coaching Advantages",
    careerOptionsBrief: "IQ Academy offers intensive preparation, chapter-wise problem solving, lab activity notes, and 10/10 GPA coaching.",
    keyBenefits: [
      "100% SSC Class 10th Syllabus Coverage across all subjects",
      "Mathematics Paper-1 & Paper-2 step-by-step theorem proofs and numerical practice",
      "Physical Science ray diagrams, chemical equations, and formula memory sheets",
      "Biological Science labeled diagram drawing techniques and short-note summaries",
      "Board Exam special rank coaching & objective mock test series"
    ],
    topics: ["Mathematics Paper 1 & 2", "Physical & Biological Science", "Social Studies & English"],
    sscSyllabus: {
      subjects: [
        "Mathematics Paper-1",
        "Mathematics Paper-2",
        "Physical Science",
        "Biological Science",
        "Social Studies",
        "English",
        "First & Second Language"
      ]
    },
    competitiveExams: [],
    governmentJobs: []
  }
];

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
    case "MPC":
      return <Atom className="w-6 h-6 text-white shrink-0" />;
    case "BiPC":
      return <Microscope className="w-6 h-6 text-white shrink-0" />;
    case "CEC":
      return <Landmark className="w-6 h-6 text-white shrink-0" />;
    case "SSC":
      return <GraduationCap className="w-6 h-6 text-white shrink-0" />;
    case "CSE":
    default:
      return <Code2 className="w-6 h-6 text-white shrink-0" />;
  }
}

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
      className="bg-white rounded-2xl p-5 sm:p-6 relative overflow-hidden border border-[#EBE6FE] shadow-sm hover:shadow-xl hover:border-[#25176E]/30 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
      suppressHydrationWarning={true}
    >
      <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#F0EBFF] rounded-full group-hover:bg-[#EBE6FE] transition-colors pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between">
            <div className="w-[52px] h-[52px] rounded-2xl bg-[#1E1266] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
              <EngineeringIcon code={course.code} />
            </div>
            <span className="bg-[#F0EBFF] text-[#25176E] text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full border border-[#EBE6FE]">
              {course.category}
            </span>
          </div>

          <h3 className="font-display-saasmo text-[18px] sm:text-[20px] font-extrabold text-[#1E1266] mt-4 mb-3 group-hover:text-[#25176E] transition-colors leading-snug tracking-tight">
            {course.name}
          </h3>

          <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
            {course.shortDesc}
          </p>
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
            View subjects & details
          </button>
          <span className="w-7 h-7 rounded-full bg-[#F0EBFF] text-[#25176E] flex items-center justify-center group-hover:bg-[#25176E] group-hover:text-white transition-all shrink-0 ml-2">
            <ArrowRight className="w-4 h-4 text-[#25176E] group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );
}

// Touch-Enabled & Button-Enabled Mobile Carousel (Single Card for SSC without arrows/dots)
export function DiplomaCoursesCarousel({
  courses = coursesData,
  onViewSyllabus = () => {},
}: {
  courses?: Course[];
  onViewSyllabus?: (course: Course) => void;
}) {
  // If there is only 1 course (e.g., SSC Option), display card directly WITHOUT carousel or left-right buttons
  if (courses.length <= 1) {
    return (
      <div className="w-full max-w-sm mx-auto">
        <DiplomaCourseCard course={courses[0]} onSelect={onViewSyllabus} />
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <Carousel key={courses.map((c) => c.id).join("-")} opts={{ align: "start", loop: false }} className="relative w-full">
        <CarouselContent className="-ml-3">
          {courses.map((course) => (
            <CarouselItem key={course.id} className="pl-3 basis-[88%] sm:basis-[340px]">
              <div className="h-full py-1">
                <DiplomaCourseCard course={course} onSelect={onViewSyllabus} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Controls with Touch-swiping + Left/Right Buttons */}
        <div className="flex items-center justify-between mt-5 px-1">
          <CarouselDots />
          <div className="flex items-center gap-2 z-10">
            <CarouselPrevious className="static translate-x-0 translate-y-0 w-9 h-9 bg-white text-[#25176E] border border-[#EBE6FE] shadow-sm hover:bg-[#F0EBFF] active:scale-95" />
            <CarouselNext className="static translate-x-0 translate-y-0 w-9 h-9 bg-[#25176E] text-white border border-[#25176E] shadow-sm hover:bg-[#1E1266] active:scale-95" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default function EngineeringCoursesTrack() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeCategory, setActiveCategory] = useState<"diploma" | "intermediate" | "ssc">("diploma");

  React.useEffect(() => {
    const handleOpenCourse = (e: Event) => {
      const customEvt = e as CustomEvent<string>;
      const courseId = customEvt.detail;
      const found = coursesData.find((c) => c.id === courseId);
      if (found) {
        if (found.type) {
          setActiveCategory(found.type);
        }
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

  const filteredCourses = coursesData.filter((c) => c.type === activeCategory);

  return (
    <section id="courses" className="py-14 sm:py-20 relative bg-[#F6F4FE] overflow-hidden" suppressHydrationWarning={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning={true}>
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#25176E] bg-[#F0EBFF] px-3.5 py-1 rounded-full border border-[#EBE6FE]">
            ACADEMIC COURSES & PROGRAMS
          </span>
          <h2 className="font-display-saasmo text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-[#1E1266] mt-2">
            Courses We Provide Coaching For
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed max-w-2xl mx-auto">
            Comprehensive academic coaching for Polytechnic Diploma engineering, Intermediate (MPC, BiPC, CEC), and SSC Class 10th Board preparation.
          </p>
        </div>

        {/* 3 Main Category Filter Pills (Polytechnic Diploma, Intermediate, SSC) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3.5 mb-8 sm:mb-10 w-full max-w-xl mx-auto px-2">
          <button
            onClick={() => setActiveCategory("diploma")}
            className={`flex-1 px-3 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all shadow-xs text-center whitespace-nowrap ${
              activeCategory === "diploma"
                ? "bg-[#25176E] text-white shadow-md scale-105"
                : "bg-white text-[#1E1266] border border-[#EBE6FE] hover:bg-[#F0EBFF]"
            }`}
          >
            Diploma
          </button>
          
          <button
            onClick={() => setActiveCategory("intermediate")}
            className={`flex-1 px-3 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all shadow-xs text-center whitespace-nowrap ${
              activeCategory === "intermediate"
                ? "bg-[#25176E] text-white shadow-md scale-105"
                : "bg-white text-[#1E1266] border border-[#EBE6FE] hover:bg-[#F0EBFF]"
            }`}
          >
            Intermediate
          </button>

          <button
            onClick={() => setActiveCategory("ssc")}
            className={`flex-1 px-3 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all shadow-xs text-center whitespace-nowrap ${
              activeCategory === "ssc"
                ? "bg-[#25176E] text-white shadow-md scale-105"
                : "bg-white text-[#1E1266] border border-[#EBE6FE] hover:bg-[#F0EBFF]"
            }`}
          >
            SSC
          </button>
        </div>

        {/* Mobile View: Touch Swiping Carousel with Buttons (or Single Card for SSC without controls) */}
        <div className="block md:hidden relative">
          <DiplomaCoursesCarousel
            courses={filteredCourses}
            onViewSyllabus={setSelectedCourse}
          />
        </div>

        {/* Desktop View: Grid matching card design */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="hover:-translate-y-1 transition-transform duration-200">
              <DiplomaCourseCard
                course={course}
                onSelect={setSelectedCourse}
              />
            </div>
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
