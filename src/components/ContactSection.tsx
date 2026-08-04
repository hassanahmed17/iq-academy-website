"use client";

import React, { useState } from "react";
import { Phone, MapPin, Send, CheckCircle2, AlertCircle, ArrowRight, Loader2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";

const leftColumnVariants: Variants = {
  hidden: { opacity: 0, x: -28, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const rightColumnVariants: Variants = {
  hidden: { opacity: 0, x: 28, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: 0.12,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwFyXjbt4GYQBX5--hvbaH8GsbwNSC60p268VQhF2Gw-wzRsdz3EN_FjMdZ_ypWiUNo/exec";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    branch: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};

    if (!formData.firstName.trim()) newErrors.firstName = true;
    if (!formData.lastName.trim()) newErrors.lastName = true;
    if (!formData.mobile.trim()) newErrors.mobile = true;
    if (!formData.branch.trim()) newErrors.branch = true;
    if (!formData.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        branch: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting to Google Sheets:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="pt-6 pb-16 sm:pt-8 sm:pb-20 relative bg-[#F6F4FE] overflow-hidden" suppressHydrationWarning={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Saasmo Indigo CTA Banner with Noisy Gradient Background */}
        <div className="saasmo-indigo-card p-6 sm:p-10 text-center text-white relative shadow-2xl mb-12 rounded-3xl overflow-hidden border border-[#372692]">
          <GradientBackground
            gradientOrigin="bottom-middle"
            colors={[
              { color: "rgba(30,18,102,1)", stop: "0%" },
              { color: "rgba(37,23,110,1)", stop: "50%" },
              { color: "rgba(18,10,62,1)", stop: "100%" }
            ]}
            noiseIntensity={0.65}
            noisePatternSize={90}
            noisePatternRefreshInterval={2}
          />

          <div className="relative z-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D2FF00]">
              CONTACT US
            </span>

            <h2 className="font-display-saasmo text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 mb-5 max-w-xl mx-auto">
              Let's Build Your Engineering Career Together
            </h2>

            <div className="inline-block">
              <a
                href="#contact-form-block"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-form-block")?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="px-7 py-3 rounded-full bg-[#D2FF00] text-[#1B1054] font-extrabold text-sm hover:bg-lime-400 transition-all shadow-xl hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Enrol Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Campus Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01 }}
            variants={leftColumnVariants}
            className="lg:col-span-5 space-y-6"
          >
            <div className="saasmo-white-card p-6 sm:p-7 space-y-5">
              <h3 className="font-display-saasmo text-xl font-bold text-[#1E1266]">
                IQ Academy Campus
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Visit our campus at Shah Ali Banda for counseling sessions, admissions, and batch inquiries.
              </p>

              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-2xl bg-[#F0EBFF] flex items-center justify-center text-[#25176E] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                      Contact Numbers
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-[#1E1266]">
                      <a href="tel:+919573211504" className="hover:underline hover:text-[#25176E] transition-colors">
                        +91 95732 11504
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-[#1E1266]">
                      <a href="tel:+919573241504" className="hover:underline hover:text-[#25176E] transition-colors">
                        +91 95732 41504
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-2xl bg-[#F0EBFF] flex items-center justify-center text-[#25176E] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                      Campus Address
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1E1266] mt-0.5 leading-relaxed font-semibold">
                      Shalibanda Rd, Aliabad North, Beside Lal Badshah Quadri Masjid, Hyderabad, Telangana 500065
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Location Embed Iframe */}
              <div className="pt-3 border-t border-[#EBE6FE]">
                <h4 className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#25176E]" />
                  <span>Campus Location Map</span>
                </h4>
                <div className="w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-[#EBE6FE] shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13312.591389602316!2d78.46041575692578!3d17.347169514329675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb983c4ca0571f%3A0x82802b19a8ab84bf!2sIQ%20ACADEMY%20OF%20EXCELLENCE!5e0!3m2!1sen!2sin!4v1785311787521!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="IQ Academy of Excellence Google Maps Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Admission Inquiry Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01 }}
            variants={rightColumnVariants}
            id="contact-form-block"
            className="scroll-mt-16 sm:scroll-mt-24 lg:col-span-7"
          >
            <div className="saasmo-white-card p-4 sm:p-8">
              <h3 className="font-display-saasmo text-lg sm:text-2xl font-bold text-[#1E1266] mb-0.5">
                Send Admission Inquiry
              </h3>
              <p className="text-[11px] sm:text-xs text-[#64748B] mb-3 sm:mb-5">
                Fields marked with a red star (<span className="text-red-500 font-bold">*</span>) are mandatory.
              </p>

              {submitted && (
                <div className="mb-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    Thank you! Your inquiry has been received. Our admissions team will contact you shortly.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3.5" noValidate>
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                  <div>
                    <label htmlFor="firstName" className="block text-[11px] sm:text-xs font-bold text-[#1E1266] mb-0.5 sm:mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#F6F4FE] text-[#1E1266] border text-xs sm:text-sm focus:outline-none transition-all ${
                        errors.firstName ? "border-red-500 bg-red-50" : "border-[#EBE6FE] focus:border-[#25176E]"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-[10px] text-red-500 mt-0.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Required field
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-[11px] sm:text-xs font-bold text-[#1E1266] mb-0.5 sm:mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#F6F4FE] text-[#1E1266] border text-xs sm:text-sm focus:outline-none transition-all ${
                        errors.lastName ? "border-red-500 bg-red-50" : "border-[#EBE6FE] focus:border-[#25176E]"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-[10px] text-red-500 mt-0.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Required field
                      </p>
                    )}
                  </div>
                </div>

                {/* Mobile Number & Branch Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                  <div>
                    <label htmlFor="mobile" className="block text-[11px] sm:text-xs font-bold text-[#1E1266] mb-0.5 sm:mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      name="mobile"
                      autoComplete="tel"
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#F6F4FE] text-[#1E1266] border text-xs sm:text-sm focus:outline-none transition-all ${
                        errors.mobile ? "border-red-500 bg-red-50" : "border-[#EBE6FE] focus:border-[#25176E]"
                      }`}
                    />
                    {errors.mobile && (
                      <p className="text-[10px] text-red-500 mt-0.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Required field
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="branch" className="block text-[11px] sm:text-xs font-bold text-[#1E1266] mb-0.5 sm:mb-1">
                      Select Branch / Course <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      autoComplete="off"
                      value={formData.branch}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#F6F4FE] text-[#1E1266] border text-xs sm:text-sm focus:outline-none transition-all ${
                        errors.branch ? "border-red-500 bg-red-50" : "border-[#EBE6FE] focus:border-[#25176E]"
                      }`}
                    >
                      <option value="">Select Branch / Course...</option>
                      
                      {/* School & Intermediate */}
                      <option value="SSC Class 10th">SSC (Class 10th)</option>
                      <option value="Intermediate 1st Year">Intermediate 1st Year</option>
                      <option value="Intermediate 2nd Year">Intermediate 2nd Year</option>
                      
                      {/* Entrance Exams */}
                      <option value="POLYCET Entrance">POLYCET Entrance Coaching</option>
                      <option value="ECET Entrance">ECET Entrance Coaching</option>
                      <option value="TS EAPCET Entrance">TS EAPCET (EAMCET) Coaching</option>
                      
                      {/* Diploma Engineering Specialties */}
                      <option value="Diploma CSE / AI-ML">Diploma CSE / AI-ML (Computer Engineering)</option>
                      <option value="Diploma ECE">Diploma ECE (Electronics & Communication)</option>
                      <option value="Diploma EEE">Diploma EEE (Electrical & Electronics)</option>
                      <option value="Diploma Mechanical">Diploma Mechanical Engineering</option>
                      <option value="Diploma Civil">Diploma Civil Engineering</option>
                      
                      {/* General */}
                      <option value="Other / General Inquiry">Other / General Inquiry</option>
                    </select>
                    {errors.branch && (
                      <p className="text-[10px] text-red-500 mt-0.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Required field
                      </p>
                    )}
                  </div>
                </div>

                {/* Email ID (Optional) */}
                <div>
                  <label htmlFor="email" className="block text-[11px] sm:text-xs font-bold text-[#1E1266] mb-0.5 sm:mb-1">
                    Email ID <span className="text-[10px] sm:text-xs text-[#64748B] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#F6F4FE] text-[#1E1266] border border-[#EBE6FE] focus:border-[#25176E] text-xs sm:text-sm focus:outline-none transition-all"
                  />
                </div>

                {/* Your Message */}
                <div>
                  <label htmlFor="message" className="block text-[11px] sm:text-xs font-bold text-[#1E1266] mb-0.5 sm:mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#F6F4FE] text-[#1E1266] border text-xs sm:text-sm focus:outline-none transition-all ${
                      errors.message ? "border-red-500 bg-red-50" : "border-[#EBE6FE] focus:border-[#25176E]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[10px] text-red-500 mt-0.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> Required field
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-3.5 rounded-full bg-[#25176E] text-white font-bold text-xs sm:text-sm hover:bg-[#1b1054] disabled:opacity-70 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
