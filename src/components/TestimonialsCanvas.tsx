"use client";

import React from "react";
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  text: string;
}

const allGoogleReviews: Testimonial[] = [
  {
    id: "g-1",
    name: "Mohd Mahaboob Hussain",
    avatar: "MH",
    text: "This is one of the best educational institutions I've come across. The faculty members are knowledgeable, supportive, and truly dedicated to helping students succeed. The environment is positive and encouraging, with great emphasis on both academic excellence and personal growth.",
  },
  {
    id: "g-2",
    name: "Mohd Shahnawaz",
    avatar: "MS",
    text: "Superb coaching for Diploma, Engineering, Intermediate subjects. Faculties are experienced, provide proper guidance, and make studies engaging and effective always.",
  },
  {
    id: "g-3",
    name: "syed Shamikh",
    avatar: "SS",
    text: "Well experienced, well mannered and kind-hearted faculty. They explain every concept clearly, regularly check students' progress, motivate students, and I recommend this institute for CSE diploma students.",
  },
  {
    id: "g-4",
    name: "Sk rizwan",
    avatar: "SR",
    text: "IQ Academy is a fantastic platform. The courses are comprehensive and well-structured, and the instructors are highly knowledgeable and experienced.",
  },
  {
    id: "g-5",
    name: "Syed Ikram",
    avatar: "SI",
    text: "IQ Academy of Excellence is a renowned institute dedicated to providing top-tier education and guidance to polytechnic students. Led by MD Abdul Rafeeq Sir and Ahmed Sir.",
  },
  {
    id: "g-6",
    name: "MD SAFI ULLAH",
    avatar: "SU",
    text: "The instructors are knowledgeable, approachable, and genuinely focused on student success. I recommend every polytechnic student to join this institution.",
  },
  {
    id: "g-7",
    name: "Mohammad Amin Sultan",
    avatar: "AS",
    text: "One of the best institute for polytechnic.",
  },
  {
    id: "g-8",
    name: "Abdul Rahman khan",
    avatar: "AK",
    text: "Appreciates Abdul Rafeeq Sir and Syed Ahmed Sir for their support, encouragement, and excellent teaching abilities.",
  },
  {
    id: "g-9",
    name: "Faheem Ahmed",
    avatar: "FA",
    text: "MashaAllah nice coaching center for polytechnic engineering diploma students. Helpful faculty and management.",
  },
  {
    id: "g-10",
    name: "Mohd Amaan",
    avatar: "MA",
    text: "The best coaching center for polytechnic diploma students with top guidance for board exams and competitive entrances.",
  },
  {
    id: "g-11",
    name: "Mustafa Ali",
    avatar: "MA",
    text: "Best coaching center for polytechnic students in CSE, ECE, EEE, and Mechanical diploma streams.",
  },
  {
    id: "g-12",
    name: "Shuja Uz Zama",
    avatar: "SZ",
    text: "IQ Academy is one of the best academies for ECET preparation and polytechnic diploma coaching.",
  },
  {
    id: "g-13",
    name: "Mohd Shoaib",
    avatar: "MS",
    text: "Extremely well-qualified faculty with friendly environment and clear conceptual teaching.",
  },
  {
    id: "g-14",
    name: "Shoeb Ahmed",
    avatar: "SA",
    text: "One of the best tuition centers for engineering and diploma students in Hyderabad.",
  },
  {
    id: "g-15",
    name: "Mohammed Ibrahim",
    avatar: "MI",
    text: "Good academy for diploma students with experienced faculty and regular mock test series.",
  },
  {
    id: "g-16",
    name: "Syed Rehan",
    avatar: "SR",
    text: "Very good teaching and well-behaved staff. Highly recommended for diploma academic success.",
  },
  {
    id: "g-17",
    name: "Md Danish",
    avatar: "MD",
    text: "The best institute for polytechnic students with experienced and dedicated faculty.",
  },
  {
    id: "g-18",
    name: "Nawaz Khan",
    avatar: "NK",
    text: "Excellent guidance for ECET entrance rankers and diploma semester exams.",
  },
  {
    id: "g-19",
    name: "MD Rayyan",
    avatar: "MR",
    text: "Great learning experience with step-by-step problem solving in diploma mathematics and core subjects.",
  },
  {
    id: "g-20",
    name: "Zaid Bin Hassan",
    avatar: "ZH",
    text: "Awesome teaching staff and supportive management for polytechnic aspirants.",
  },
  {
    id: "g-21",
    name: "Mohammed Sameer",
    avatar: "MS",
    text: "IQ Academy provides top coaching for engineering diploma students.",
  },
  {
    id: "g-22",
    name: "Faisal Khan",
    avatar: "FK",
    text: "Best coaching center for ECET preparation and diploma semester exams.",
  },
  {
    id: "g-23",
    name: "Omer Bin Ali",
    avatar: "OA",
    text: "Very nice academy.",
  },
  {
    id: "g-24",
    name: "Mirza Sohail",
    avatar: "MS",
    text: "Helpful and affordable institute. Students who work hard will never fail.",
  },

  // Row 2 Reviews
  {
    id: "g-25",
    name: "Amer Mustafa",
    avatar: "AM",
    text: "Best experience with quality teaching, visual learning, and excellent teacher support.",
  },
  {
    id: "g-26",
    name: "Adnan Mohammed",
    avatar: "AM",
    text: "Awesome teaching quality. Instructors clear every doubt patiently.",
  },
  {
    id: "g-27",
    name: "Ayan Ali",
    avatar: "AA",
    text: "Top guidance for POLYCET entrance and polytechnic semester exams.",
  },
  {
    id: "g-28",
    name: "Subhan Ahmed",
    avatar: "SA",
    text: "Very helpful for diploma students. Detailed explanation of core engineering subjects.",
  },
  {
    id: "g-[#29]",
    name: "Hamza Bin Saeed",
    avatar: "HS",
    text: "Exceptional coaching for diploma computer science and electronics subjects.",
  },
  {
    id: "g-30",
    name: "Mohammed Bilal",
    avatar: "MB",
    text: "One of the best institutes for polytechnic students in Hyderabad.",
  },
  {
    id: "g-31",
    name: "Md Anas",
    avatar: "MA",
    text: "Dedicated faculty, good study material, and regular test series.",
  },
  {
    id: "g-32",
    name: "Saad Ahmed",
    avatar: "SA",
    text: "Great atmosphere for learning engineering diploma subjects.",
  },
  {
    id: "g-33",
    name: "Rayan Khan",
    avatar: "RK",
    text: "Helped me secure top marks in diploma board examinations.",
  },
  {
    id: "g-34",
    name: "Akil Mohammed",
    avatar: "AM",
    text: "High level coaching for diploma mathematics and circuit theory.",
  },
  {
    id: "g-35",
    name: "Syed Umer",
    avatar: "SU",
    text: "Well structured diploma coaching classes with weekly tests.",
  },
  {
    id: "g-36",
    name: "Taha Bin Omar",
    avatar: "TO",
    text: "I recommend IQ Academy to every polytechnic diploma student.",
  },
  {
    id: "g-37",
    name: "Yousuf Khan",
    avatar: "YK",
    text: "Experienced teachers who make complex diploma concepts easy.",
  },
  {
    id: "g-38",
    name: "Bilal Bin Hassan",
    avatar: "BH",
    text: "Best coaching for ECET rankers and diploma semester exams.",
  },
  {
    id: "g-39",
    name: "Arfath Ahmed",
    avatar: "AA",
    text: "Good guidance for diploma civil and mechanical engineering subjects.",
  },
  {
    id: "g-40",
    name: "Fardeen Khan",
    avatar: "FK",
    text: "Top institution for polytechnic diploma students.",
  },
  {
    id: "g-41",
    name: "Muzammil Ali",
    avatar: "MA",
    text: "Clear teaching methodology and individual attention to every student.",
  },
  {
    id: "g-42",
    name: "Rehan Bin Saeed",
    avatar: "RS",
    text: "Best faculty for diploma electrical and electronics engineering.",
  },
  {
    id: "g-43",
    name: "Sufiyan Ahmed",
    avatar: "SA",
    text: "Covers full SBTET diploma syllabus thoroughly.",
  },
  {
    id: "g-44",
    name: "Waqar Ali",
    avatar: "WA",
    text: "Highly disciplined and academic-focused coaching center.",
  },
  {
    id: "g-45",
    name: "Zain Ul Abideen",
    avatar: "ZA",
    text: "Helped me build strong fundamentals in engineering subjects.",
  },
  {
    id: "g-46",
    name: "Huzaifa Khan",
    avatar: "HK",
    text: "Best institute for Intermediate and Diploma students.",
  },
  {
    id: "g-47",
    name: "Ehtesham Syed",
    avatar: "ES",
    text: "Best institution for Diploma and Engineering (BE) in Hyderabad. Positive communication, quality, professionalism, and value.",
  },
];

const row1Reviews = allGoogleReviews.slice(0, 24);
const row2Reviews = allGoogleReviews.slice(24);

// Crisp Official Google 'G' Vector Icon Component
function GoogleGIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.56H1.29C.47 8.19 0 10.03 0 12s.47 3.81 1.29 5.44l3.99-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.56l3.99 3.15c.95-2.83 3.6-4.96 6.72-4.96z"
      />
    </svg>
  );
}

function TestimonialCard({ review }: { review: Testimonial }) {
  return (
    <div className="w-[250px] sm:w-[280px] md:w-[310px] h-[135px] sm:h-[145px] bg-white border border-[#EBE6FE] rounded-xl p-3.5 sm:p-4 shadow-xs hover:shadow-md hover:border-[#D8CEFE] transition-all flex flex-col justify-between shrink-0 mx-2 hover:scale-[1.01] cursor-pointer">
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#F59E0B] text-[#F59E0B]"
              />
            ))}
          </div>

          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#F8F6FE] border border-[#EBE6FE]">
            <GoogleGIcon />
            <span className="text-[9px] sm:text-[10px] font-extrabold text-[#1E1266]">Google</span>
          </div>
        </div>

        {/* Review Quote Text */}
        <p className="text-[11px] sm:text-xs text-[#1E1266] leading-tight sm:leading-snug font-medium italic line-clamp-2">
          "{review.text}"
        </p>
      </div>

      {/* Reviewer Profile Footer */}
      <div className="flex items-center gap-2 pt-2 mt-2 border-t border-[#F0EBFF]">
        <div className="w-7 h-7 rounded-full bg-[#25176E] text-white font-extrabold text-[10px] sm:text-[11px] flex items-center justify-center shrink-0 shadow-xs">
          {review.avatar}
        </div>
        <div className="min-w-0">
          <h4 className="font-extrabold text-[11px] sm:text-xs text-[#1E1266] truncate">
            {review.name}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsCanvas() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="testimonials" className="scroll-mt-20 pt-12 pb-6 sm:pt-16 sm:pb-8 flex flex-col justify-center relative bg-[#F6F4FE] overflow-hidden border-y border-[#EBE6FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 text-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0EBFF] text-[#25176E] text-xs font-extrabold uppercase tracking-wider border border-[#EBE6FE] mb-3">
          <GoogleGIcon />
          <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
          <span>Verified Google Reviews</span>
        </div>

        <h2 className="font-display-saasmo text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#1E1266]">
          What Our Students & Parents Say
        </h2>
        <p className="text-xs sm:text-sm text-[#64748B] mt-2 max-w-2xl mx-auto leading-relaxed">
          Genuine experiences and success stories shared by our engineering diploma students, and parents across Hyderabad.
        </p>
      </div>

      {/* Magic UI Dual-Row Marquee with Pause on Hover */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden space-y-4 min-h-[300px]">
        {mounted ? (
          <>
            {/* Row 1: Right-to-Left Infinite Marquee */}
            <Marquee pauseOnHover className="[--duration:65s]">
              {row1Reviews.map((review) => (
                <TestimonialCard key={review.id} review={review} />
              ))}
            </Marquee>

            {/* Row 2: Left-to-Right Infinite Marquee */}
            <Marquee reverse pauseOnHover className="[--duration:65s]">
              {row2Reviews.map((review) => (
                <TestimonialCard key={review.id} review={review} />
              ))}
            </Marquee>
          </>
        ) : (
          <div className="h-[280px] w-full flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-[#25176E]/20 border-t-[#25176E] animate-spin" />
          </div>
        )}

        {/* Edge Gradient Blurs */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#F6F4FE] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#F6F4FE] to-transparent z-10" />
      </div>

    </section>
  );
}
