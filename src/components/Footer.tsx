"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function WhatsappIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.337a9.96 9.96 0 0 0 4.779 1.221h.005c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.924 9.924 0 0 0 12.012 2zm5.845 14.195c-.244.688-1.42 1.314-1.96 1.396-.511.077-1.176.136-3.376-.777-2.812-1.166-4.62-4.01-4.76-4.198-.14-.188-1.144-1.524-1.144-2.908 0-1.384.726-2.066.985-2.35.259-.284.562-.355.75-.355.187 0 .375.002.539.01.175.008.411-.066.643.49.244.586.833 2.03.905 2.176.072.146.12.316.024.506-.096.19-.144.308-.288.474-.144.166-.303.349-.433.47-.144.134-.294.28-.127.568.167.288.742 1.224 1.59 1.98 1.091.972 2.012 1.274 2.299 1.417.288.144.456.12.624-.072.168-.192.72-.84.912-1.128.192-.288.384-.24.648-.144.264.096 1.68.792 1.968.936.288.144.48.216.552.336.072.12.072.696-.172 1.384z"/>
    </svg>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-[#64748B] pt-14 sm:pt-16 pb-16 sm:pb-20 text-sm border-t border-[#EBE6FE] shadow-sm relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Col 1: Brand & Socials */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/iqloader-logo.png"
                alt="IQ Academy of Excellence Crest Emblem"
                className="h-11 w-auto object-contain"
              />

              {/* Text Logo */}
              <img
                src="/images/iq-text-logo.png"
                alt="IQ Academy of Excellence"
                className="h-8 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-[#64748B] leading-relaxed max-w-sm">
              Empowering Polytechnic Diploma (CSE, ECE, EEE, ME, CE, AI/ML), Intermediate (MPC, BiPC, CEC), and SSC Class 10th aspirants with top coaching across Hyderabad and Telangana.
            </p>

            {/* Social Media Channels */}
            <div className="pt-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#25176E] block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/iq_academy_hyd/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="w-10 h-10 rounded-2xl bg-[#F6F4FE] border border-[#EBE6FE] flex items-center justify-center text-[#25176E] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-[#dc2743] hover:text-white hover:scale-110 transition-all duration-300 shadow-sm"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/iqacademyofexcellence"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Page"
                  className="w-10 h-10 rounded-2xl bg-[#F6F4FE] border border-[#EBE6FE] flex items-center justify-center text-[#25176E] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:scale-110 transition-all duration-300 shadow-sm"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@iqacademyofexcellence2467"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel"
                  className="w-10 h-10 rounded-2xl bg-[#F6F4FE] border border-[#EBE6FE] flex items-center justify-center text-[#25176E] hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:scale-110 transition-all duration-300 shadow-sm"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919573211504"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Contact"
                  className="w-10 h-10 rounded-2xl bg-[#F6F4FE] border border-[#EBE6FE] flex items-center justify-center text-[#25176E] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:scale-110 transition-all duration-300 shadow-sm"
                >
                  <WhatsappIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display-saasmo font-bold text-sm text-[#1E1266] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#64748B]">
              <li>
                <Link href="/" className="hover:text-[#25176E] transition-colors">Home</Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-[#25176E] transition-colors">About Us</a>
              </li>
              <li>
                <a href="/#director" className="hover:text-[#25176E] transition-colors">Director's Message</a>
              </li>
              <li>
                <a href="/#courses" className="hover:text-[#25176E] transition-colors">Diploma Courses</a>
              </li>
              <li>
                <a href="/#coaching" className="hover:text-[#25176E] transition-colors">POLYCET & ECET</a>
              </li>
              <li>
                <a href="/#faculty" className="hover:text-[#25176E] transition-colors">Faculty Members</a>
              </li>
              <li>
                <Link href="/career-guidance" className="hover:text-[#25176E] transition-colors">Career Guidance</Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-[#25176E] transition-colors">Results</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Courses We Offer */}
          <div className="space-y-3">
            <h4 className="font-display-saasmo font-bold text-sm text-[#1E1266] uppercase tracking-wider">
              Courses We Offer
            </h4>
            
            <div className="space-y-3 text-xs text-[#64748B]">
              <div>
                <span className="font-extrabold text-[#1E1266] text-[11px] uppercase tracking-wider block mb-1">
                  Polytechnic Diploma
                </span>
                <ul className="space-y-1.5 pl-2 border-l-2 border-[#EBE6FE]">
                  <li><a href="/#courses" className="hover:text-[#25176E] transition-colors">CSE, AI/ML, ECE, EEE</a></li>
                  <li><a href="/#courses" className="hover:text-[#25176E] transition-colors">Mechanical & Civil Engg</a></li>
                </ul>
              </div>

              <div>
                <span className="font-extrabold text-[#1E1266] text-[11px] uppercase tracking-wider block mb-1">
                  Intermediate
                </span>
                <ul className="space-y-1.5 pl-2 border-l-2 border-[#EBE6FE]">
                  <li><a href="/#courses" className="hover:text-[#25176E] transition-colors">MPC</a></li>
                  <li><a href="/#courses" className="hover:text-[#25176E] transition-colors">BiPC</a></li>
                  <li><a href="/#courses" className="hover:text-[#25176E] transition-colors">CEC</a></li>
                </ul>
              </div>

              <div>
                <span className="font-extrabold text-[#1E1266] text-[11px] uppercase tracking-wider block mb-1">
                  SSC Board
                </span>
                <ul className="space-y-1.5 pl-2 border-l-2 border-[#EBE6FE]">
                  <li><a href="/#courses" className="hover:text-[#25176E] transition-colors">Class 10th Board Coaching</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Col 4: Admission Inquiry CTA */}
          <div className="space-y-3">
            <h4 className="font-display-saasmo font-bold text-sm text-[#1E1266] uppercase tracking-wider">
              Admissions
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Ready to start your engineering journey? Send an inquiry or visit our campus for counseling.
            </p>
            <a
              href="#contact-form-block"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact-form-block")?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25176E] text-white font-bold text-xs hover:bg-[#1b1054] transition-all shadow-sm"
            >
              <span>Inquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-[#EBE6FE] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm font-medium text-[#475569]">
            © {new Date().getFullYear()} IQ Academy of Excellence. All rights reserved.
          </p>
          
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F0EBFF] border border-[#EBE6FE] text-xs sm:text-sm font-semibold text-[#1E1266] shadow-xs">
            <span className="text-[#64748B]">Designed & Developed by</span>
            <span className="font-extrabold text-[#25176E] tracking-tight">Hassan Ahmed</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
