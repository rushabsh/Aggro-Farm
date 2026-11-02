"use client";

import { useState } from "react";
import Link from "next/link";
import FarmFreshBanner from "@/components/FarmFreshBanner";
import {
  Sprout,
  ArrowRight,
  Heart,
  Droplets,
  ShieldCheck,
  Wheat,
  MapPin,
  Phone,
  Mail,
  Users,
  CheckCircle,
  Plus,
  Minus,
  Sparkles,
  Send,
} from "lucide-react";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#faf8f2] text-[#18221b] overflow-hidden">
      {/* =========================================================================
          1. HERO SECTION (Contact Aggro Farm)
         ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#f9f5e6] border-b border-[#e8e4d9]/60 pt-6 pb-4 lg:pt-12 lg:pb-0">
        {/* Top Left Golden Petal Flourish */}
        <div className="absolute top-0 left-0 pointer-events-none z-10">
          <svg
            className="w-20 sm:w-28 h-28 sm:h-40 text-[#df9c16]/30 fill-current"
            viewBox="0 0 100 150"
          >
            <path d="M 0,0 C 60,20 90,70 65,130 C 45,110 20,60 0,30 Z" />
          </svg>
        </div>

        {/* Bottom Left Botanical Leaf Branch */}
        <div className="absolute bottom-0 left-0 pointer-events-none z-10 w-28 sm:w-36 lg:w-48 opacity-90 select-none">
          <img
            src="/images/Minimal Green Botanical Leaves.webp"
            alt="Minimal Green Botanical Leaves"
            className="w-full h-auto object-contain object-bottom-left"
          />
        </div>

        {/* Desktop Photographic Scenic Right Half */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[58%] xl:w-[56%] z-0 overflow-hidden">
          {/* Main Hero Photo */}
          <img
            src="/images/contact us hero.webp"
            alt="Contact Aggro Farm - Free Range Hen in Countryside"
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
          />

          {/* Organic Flowing Wave Mask on Left Edge */}
          <svg
            className="absolute top-0 bottom-0 -left-1 h-full w-24 xl:w-28 text-[#f9f5e6] fill-current pointer-events-none z-10"
            viewBox="0 0 100 700"
            preserveAspectRatio="none"
          >
            <path d="M 0,0 L 55,0 C 20,160 85,320 28,480 C -5,570 45,660 0,700 L 0,700 Z" />
          </svg>
        </div>

        {/* Floating 100% Natural Poultry Circular Badge */}
        <div className="hidden lg:flex absolute top-8 sm:top-10 right-6 sm:right-12 xl:right-16 z-20 w-26 h-26 sm:w-28 sm:h-28 rounded-full bg-white/95 backdrop-blur-xs border-2 border-[#e7e1d3] shadow-xl flex-col items-center justify-center text-center p-2 water-pulse">
          <div className="flex items-center gap-0.5 mb-0.5">
            <Sprout className="w-4 h-4 text-[#1b4329]" />
          </div>
          <span className="text-xl sm:text-2xl font-black text-[#1b4329] leading-none tracking-tight">
            100%
          </span>
          <span className="text-[10px] font-bold text-[#18221b] uppercase tracking-wider mt-0.5 leading-none">
            Natural
          </span>
          <span className="text-[9px] font-medium text-[#5e6d63] uppercase tracking-wider leading-none mt-0.5">
            Poultry
          </span>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[580px] lg:min-h-[640px] xl:min-h-[680px]">
            {/* Left Content (6 cols on lg) */}
            <div className="lg:col-span-6 space-y-6 pt-4 pb-8 lg:py-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#df9c16] uppercase">
                <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
                <span>Contact Aggro Farm</span>
                <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[4rem] font-bold tracking-tight text-[#18221b] leading-[1.12]">
                Let&apos;s Build a Healthier Tomorrow{" "}
                <span className="text-[#df9c16]">Together</span>
              </h1>

              {/* Paragraph */}
              <p className="text-[#5e6d63] text-sm sm:text-base leading-relaxed max-w-[430px]">
                Have questions about our products, farming practices, or
                partnerships? We&apos;re here to help. Reach out to us and our
                team will get back to you shortly.
              </p>

              {/* 3 Key Badges Strip */}
              <div className="flex items-center gap-3 sm:gap-6 pt-5 border-t border-[#e8e4d9]/80 max-w-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#eaf2ec] text-[#1b4329] flex items-center justify-center water-pulse shrink-0">
                    <Sprout className="w-5 h-5 text-[#1b4329]" />
                  </div>
                  <div className="text-xs font-bold text-[#18221b] leading-tight">
                    Naturally
                    <br />
                    Raised
                  </div>
                </div>

                <div className="h-8 w-[1px] bg-[#e8e4d9]"></div>

                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#fef8eb] text-[#df9c16] flex items-center justify-center water-pulse-gold shrink-0">
                    <Heart className="w-5 h-5 text-[#df9c16]" />
                  </div>
                  <div className="text-xs font-bold text-[#18221b] leading-tight">
                    Ethically
                    <br />
                    Farmed
                  </div>
                </div>

                <div className="h-8 w-[1px] bg-[#e8e4d9]"></div>

                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#eaf2ec] text-[#1b4329] flex items-center justify-center water-pulse shrink-0">
                    <Wheat className="w-5 h-5 text-[#1b4329]" />
                  </div>
                  <div className="text-xs font-bold text-[#18221b] leading-tight">
                    Healthier
                    <br />
                    Communities
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile / Tablet Scenic Photo View (< lg) */}
            <div className="lg:hidden col-span-1 relative pt-2 pb-6">
              <div className="relative w-full aspect-[16/11] rounded-3xl overflow-hidden border-2 border-[#e8e4d9] shadow-xl">
                <img
                  src="/images/contact us hero.webp"
                  alt="Contact Aggro Farm - Free Range Hen in Pasture"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />

                {/* 100% Natural Badge on Mobile */}
                <div className="absolute top-3 right-3 w-20 h-20 rounded-full bg-white/95 backdrop-blur-xs border border-[#e7e1d3] shadow-md flex flex-col items-center justify-center text-center p-1.5 water-pulse z-20">
                  <Sprout className="w-3.5 h-3.5 text-[#1b4329]" />
                  <span className="text-base font-black text-[#1b4329] leading-none">
                    100%
                  </span>
                  <span className="text-[9px] font-bold text-[#18221b] uppercase">
                    Natural
                  </span>
                </div>
                {/* Handwritten Tag on Mobile */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-handwriting font-bold text-[#1b4329] shadow-xs z-20">
                  Good Food, Brighter Tomorrow
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CONTACT FORM & DETAILS (Two-Column Section)
         ========================================================================= */}
      <section className="py-20 bg-white border-b border-[#e8e4d9]/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Form (7 cols on lg) */}
            <div className="lg:col-span-7 bg-[#fbf9f4] rounded-3xl border border-[#e8e4d9] p-7 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="space-y-3 mb-8">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#df9c16] uppercase">
                  <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
                  <span>Send Us a Message</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#18221b]">
                  We&apos;d Love to Hear from You
                </h2>
                <p className="text-xs sm:text-sm text-[#5e6d63]">
                  Fill out the form and our team will get back to you as soon as
                  possible.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#eaf2ec] border border-[#1b4329]/20 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#1b4329] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1b4329]">
                    Thank You, {formData.name || "Friend"}!
                  </h3>
                  <p className="text-sm text-[#5e6d63] max-w-md mx-auto">
                    Your message has been received. Our farm team will reach out
                    to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#df9c16] hover:underline"
                  >
                    <span>Send another message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold text-[#18221b]"
                    >
                      Your Name <span className="text-[#df9c16]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      className="w-full bg-white border border-[#e8e4d9] rounded-xl px-4 py-3 text-sm text-[#18221b] placeholder-[#9cb1a3] focus:outline-none focus:border-[#df9c16] focus:ring-1 focus:ring-[#df9c16] transition-all"
                    />
                  </div>

                  {/* Email & Phone Two-Column Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-bold text-[#18221b]"
                      >
                        Your Email <span className="text-[#df9c16]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Enter your email"
                        className="w-full bg-white border border-[#e8e4d9] rounded-xl px-4 py-3 text-sm text-[#18221b] placeholder-[#9cb1a3] focus:outline-none focus:border-[#df9c16] focus:ring-1 focus:ring-[#df9c16] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs font-bold text-[#18221b]"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="Enter your phone number"
                        className="w-full bg-white border border-[#e8e4d9] rounded-xl px-4 py-3 text-sm text-[#18221b] placeholder-[#9cb1a3] focus:outline-none focus:border-[#df9c16] focus:ring-1 focus:ring-[#df9c16] transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs font-bold text-[#18221b]"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-white border border-[#e8e4d9] rounded-xl px-4 py-3 text-sm text-[#18221b] focus:outline-none focus:border-[#df9c16] focus:ring-1 focus:ring-[#df9c16] transition-all cursor-pointer"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="orders">Bulk Fresh Poultry & Eggs</option>
                      <option value="partnership">
                        Distribution & Wholesale Partnership
                      </option>
                      <option value="farm-visit">Farm Visit & Tours</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold text-[#18221b]"
                    >
                      Your Message <span className="text-[#df9c16]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your message here..."
                      className="w-full bg-white border border-[#e8e4d9] rounded-xl px-4 py-3 text-sm text-[#18221b] placeholder-[#9cb1a3] focus:outline-none focus:border-[#df9c16] focus:ring-1 focus:ring-[#df9c16] transition-all resize-y"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2.5 bg-[#df9c16] hover:bg-[#c8890e] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md shadow-[#df9c16]/20 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Details (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-8 relative">
              {/* Countryside farmhouse background sketch */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 sm:w-80 opacity-15 pointer-events-none select-none z-0">
                <img
                  src="/images/Minimalist Olive Countryside Farmhouse.webp"
                  alt=""
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#df9c16] uppercase">
                  <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
                  <span>Our Contact Details</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#18221b]">
                  Get in Touch
                </h2>
                <p className="text-xs sm:text-sm text-[#5e6d63] leading-relaxed">
                  We&apos;re always happy to connect with farmers, distributors,
                  and poultry enthusiasts.
                </p>
              </div>

              {/* 3 Detail Cards matching design */}
              <div className="space-y-5">
                {/* Address Card */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#faf8f2] border border-[#e8e4d9]">
                  <div className="w-12 h-12 rounded-full bg-[#eaf2ec] text-[#1b4329] flex items-center justify-center shrink-0 water-pulse">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#18221b]">
                      Our Address
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5e6d63] mt-0.5">
                      123 Green Farm Road, Countryside, USA 12345
                    </p>
                  </div>
                </div>

                {/* Call Us Card */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#faf8f2] border border-[#e8e4d9]">
                  <div className="w-12 h-12 rounded-full bg-[#eaf2ec] text-[#1b4329] flex items-center justify-center shrink-0 water-pulse">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#18221b]">
                      Call Us
                    </h3>
                    <a
                      href="tel:+17065554433"
                      className="text-xs sm:text-sm text-[#5e6d63] hover:text-[#df9c16] mt-0.5 block font-medium"
                    >
                      +1 (706) 555-4433
                    </a>
                    <span className="text-[11px] text-[#857a68]">
                      Mon - Fri, 9:00 AM - 6:00 PM
                    </span>
                  </div>
                </div>

                {/* Email Us Card */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#faf8f2] border border-[#e8e4d9]">
                  <div className="w-12 h-12 rounded-full bg-[#eaf2ec] text-[#1b4329] flex items-center justify-center shrink-0 water-pulse">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#18221b]">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@aggrofarm.com"
                      className="text-xs sm:text-sm text-[#5e6d63] hover:text-[#df9c16] mt-0.5 block font-medium"
                    >
                      info@aggrofarm.com
                    </a>
                    <span className="text-[11px] text-[#857a68]">
                      We typically respond within 24 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Follow Us Sub-section */}
              <div className="pt-2 space-y-3">
                <h4 className="font-display text-lg font-bold text-[#18221b]">
                  Follow Us
                </h4>
                <p className="text-xs text-[#5e6d63]">
                  Stay connected for updates, farming tips and new product
                  launches.
                </p>

                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 rounded-full bg-[#ebe5d6] hover:bg-[#1b4329] hover:text-white text-[#18221b] flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full bg-[#ebe5d6] hover:bg-[#1b4329] hover:text-white text-[#18221b] flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-9 h-9 rounded-full bg-[#ebe5d6] hover:bg-[#1b4329] hover:text-white text-[#18221b] flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-full bg-[#ebe5d6] hover:bg-[#1b4329] hover:text-white text-[#18221b] flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. INTERACTIVE FARM MAP / LOCATION SECTION
         ========================================================================= */}
      <section className="py-16 bg-[#faf8f2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden border-2 border-[#e8e4d9] shadow-lg bg-[#e3eedf]">
            {/* Styled Map Canvas with Landscape Contours */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#dcead8] via-[#e6f0e3] to-[#d8e6d4] opacity-90"></div>

            {/* Stylized River / Lake Shape */}
            <div className="absolute top-12 right-12 w-48 sm:w-64 h-36 sm:h-48 rounded-full bg-[#bfdbfe]/60 blur-xs"></div>
            <div className="absolute bottom-6 left-16 w-60 h-28 rounded-full bg-[#cbd5e1]/40 blur-xs"></div>

            {/* Stylized Roads / Paths */}
            <div className="absolute top-0 bottom-0 left-1/3 w-3 bg-[#fef8eb] -rotate-12 border-x border-[#d1dec9]"></div>
            <div className="absolute left-0 right-0 top-1/2 h-2.5 bg-[#fef8eb] rotate-3 border-y border-[#d1dec9]"></div>

            {/* Label for Green Valley Farms */}
            <div className="absolute top-1/3 left-16 sm:left-28 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#1b4329] border border-[#d6ccba] shadow-xs">
              Green Valley Farms
            </div>

            {/* Centered Aggro Farm Pin Card matching design */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-[#e8e4d9] shadow-xl max-w-sm sm:max-w-md w-[90%] sm:w-auto">
              <div className="w-11 h-11 rounded-full bg-[#1b4329] text-white flex items-center justify-center shrink-0 shadow-md water-pulse">
                <MapPin className="w-5 h-5 text-[#86efac]" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-[#18221b]">
                  Aggro Farm
                </h4>
                <p className="text-xs text-[#5e6d63] mt-0.5">
                  123 Green Farm Road, Countryside, USA 12345
                </p>
              </div>
            </div>

            {/* Zoom Controls (+ / -) */}
            <div className="absolute bottom-5 right-5 z-20 flex flex-col rounded-xl overflow-hidden border border-[#e8e4d9] shadow-md bg-white">
              <button
                type="button"
                aria-label="Zoom In"
                className="p-2 text-[#18221b] hover:bg-[#faf8f2] border-b border-[#e8e4d9] transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Zoom Out"
                className="p-2 text-[#18221b] hover:bg-[#faf8f2] transition-colors cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. TRUST VALUE STRIP
         ========================================================================= */}
      <section className="py-12 bg-white border-y border-[#e8e4d9]/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Sprout,
                title: "Premium Poultry Products",
              },
              {
                icon: Heart,
                title: "Sustainable Farming",
              },
              {
                icon: Users,
                title: "Trusted by Farmers & Families",
              },
              {
                icon: ShieldCheck,
                title: "Committed to Better Food",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#faf8f2] border border-[#e8e4d9] hover:border-[#df9c16] transition-colors"
                >
                  <div className="w-11 h-11 rounded-full bg-[#eaf2ec] text-[#1b4329] flex items-center justify-center shrink-0 water-pulse">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#18221b] leading-tight">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CTA BANNER ("Farm Fresh • Pure • Trusted")
         ========================================================================= */}
      <FarmFreshBanner />
    </div>
  );
}
