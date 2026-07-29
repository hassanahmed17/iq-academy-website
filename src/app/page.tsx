import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricCardsSection from "@/components/MetricCardsSection";
import AboutUsSection from "@/components/AboutUsSection";
import EngineeringCoursesTrack from "@/components/EngineeringCoursesTrack";
import CoachingServices from "@/components/CoachingServices";
import FacultySection from "@/components/FacultySection";
import DirectorSection from "@/components/DirectorSection";
import TestimonialsCanvas from "@/components/TestimonialsCanvas";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white overflow-x-hidden selection:bg-[#0099ff] selection:text-white" suppressHydrationWarning={true}>
      <Navbar />
      <HeroSection />
      <MetricCardsSection />
      <AboutUsSection />
      {/* Section 3: Polytechnic Diploma Branches */}
      <EngineeringCoursesTrack />
      {/* Section 4: Specialized Coaching for Polytechnic & ECET Aspirants */}
      <CoachingServices />
      <FacultySection />
      <DirectorSection />
      <TestimonialsCanvas />
      <ContactSection />
      <Footer />
    </main>
  );
}
