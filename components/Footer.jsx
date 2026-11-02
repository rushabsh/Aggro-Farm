"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [currentYear, setCurrentYear] = useState("2026");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#faf8f2] text-[#18221b] border-t border-[#e8e4d9]/80 font-sans">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Column 1: Brand Info & Socials (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              {/* Double-leaf Sprout Brand Mark */}
              <svg
                viewBox="0 0 36 36"
                className="w-9 h-9 shrink-0 transition-transform duration-300 group-hover:scale-105"
                fill="none"
              >
                {/* Left Green Leaf */}
                <path
                  d="M 18 31 C 11 29 4 21 5 11 C 12 11 18 16 18 31 Z"
                  fill="#1b4329"
                />
                {/* Right Gold Leaf */}
                <path
                  d="M 19 31 C 20 20 25 11 32 8 C 33 18 27 27 19 31 Z"
                  fill="#df9c16"
                />
              </svg>
              <span className="font-display text-2xl font-bold tracking-tight text-[#18221b]">
                Aggro Farm
              </span>
            </Link>

            {/* Description */}
            <p className="text-[#5e6d63] text-sm leading-relaxed max-w-sm">
              Providing premium, organic, and ethically raised poultry products
              for a healthier tomorrow.
            </p>

            {/* Social Icons (Rounded square pills matching image) */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-[#f2ede2] hover:bg-[#df9c16] text-[#18221b] hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-[#f2ede2] hover:bg-[#df9c16] text-[#18221b] hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-[#f2ede2] hover:bg-[#df9c16] text-[#18221b] hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#f2ede2] hover:bg-[#df9c16] text-[#18221b] hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 lg:pl-2 space-y-4">
            <h4 className="font-bold text-[#18221b] text-base">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[#5e6d63] hover:text-[#df9c16] transition-colors inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#5e6d63] hover:text-[#df9c16] transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-[#5e6d63] hover:text-[#df9c16] transition-colors inline-block"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#5e6d63] hover:text-[#df9c16] transition-colors inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#5e6d63] hover:text-[#df9c16] transition-colors inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-[#18221b] text-base">Contact Us</h4>
            <div className="space-y-4 text-sm text-[#5e6d63]">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#df9c16] shrink-0 mt-0.5 fill-[#df9c16]/20" />
                <span className="leading-snug">
                  123 Green Farm Road,
                  <br />
                  Countryside, USA 12345
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#df9c16] shrink-0 fill-[#df9c16]/20" />
                <a
                  href="tel:+17065554433"
                  className="hover:text-[#df9c16] transition-colors"
                >
                  +1 (706) 555-4433
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#df9c16] shrink-0 fill-[#df9c16]/20" />
                <a
                  href="mailto:info@aggrofarm.com"
                  className="hover:text-[#df9c16] transition-colors"
                >
                  info@aggrofarm.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-[#18221b] text-base">Newsletter</h4>
            <p className="text-sm text-[#5e6d63] leading-relaxed">
              Subscribe to our newsletter for the latest updates.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#eaf3ec] border border-[#cbe4d1] rounded-xl flex items-center gap-2.5 text-[#1b4329] text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2a6939] shrink-0" />
                <span>Thank you! You are now subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative w-full">
                <div className="flex items-center bg-white border border-[#e8e4d9] rounded-xl sm:rounded-2xl p-1.5 shadow-2xs focus-within:border-[#df9c16] focus-within:ring-2 focus-within:ring-[#df9c16]/20 transition-all">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-transparent px-3 py-1.5 text-sm text-[#18221b] placeholder:text-[#9ca3af] focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="w-10 h-10 rounded-lg sm:rounded-xl bg-[#df9c16] hover:bg-[#c9890f] text-white flex items-center justify-center shrink-0 transition-colors shadow-xs cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal Links */}
      <div className="border-t border-[#e8e4d9]/80 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#738379]">
          <p>© {currentYear} Aggro Farm. All rights reserved.</p>

          <div className="flex items-center gap-6 sm:gap-8 font-medium">
            <Link
              href="/privacy-policy"
              className="text-[#738379] hover:text-[#18221b] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#738379] hover:text-[#18221b] transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/sitemap"
              className="text-[#738379] hover:text-[#18221b] transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
