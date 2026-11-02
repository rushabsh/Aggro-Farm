"use client";

import Link from "next/link";
import { Play, Sprout, Check, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative w-full py-14 sm:py-18 lg:py-20 xl:py-24 bg-[#fbf8ee] overflow-hidden border-b border-[#e8e4d9]/60">
      {/* Subtle Countryside Farmhouse Line Art Background Sketch on the Right */}
      <div className="absolute right-0 bottom-0 w-[55%] max-w-[650px] pointer-events-none select-none z-0 overflow-hidden flex items-end justify-end">
        <img
          src="/images/Minimalist Olive Countryside Farmhouse.webp"
          alt=""
          className="w-full h-auto max-h-[85%] object-contain object-bottom-right opacity-25 mix-blend-multiply"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left: Farm Visual Artwork STICKED TO LEFT SIDE with increased size */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-start">
            <div className="relative w-full max-w-[640px] sm:max-w-[700px] lg:max-w-none xl:max-w-[820px] 2xl:max-w-[900px]">
              {/* Main Hero Photographic Artwork from images folder */}
              <img
                src="/images/Golden Hour Free-Range Hens.webp"
                alt="About Aggro Farm - Rooted in Nature, Raised with Care"
                className="w-full h-auto object-contain object-left select-none"
                loading="lazy"
                decoding="async"
              />

              {/* Central Play Button */}
              <button
                type="button"
                aria-label="Play Farm Video"
                className="absolute top-[46%] left-[58%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-white/95 border-2 border-white/90 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer water-pulse z-20"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#1b4329] fill-[#1b4329] ml-1 transition-transform group-hover:scale-110" />
              </button>

              {/* Floating "10+ Years of Experience" Badge */}
              <div className="absolute bottom-5 sm:bottom-8 lg:bottom-10 left-3 sm:left-6 lg:left-8 z-20 bg-white/95 backdrop-blur-xs p-3.5 sm:p-4 rounded-2xl border border-[#e8e4d9] shadow-lg flex flex-col gap-1.5 min-w-[130px] sm:min-w-[145px]">
                <div className="w-8 h-8 rounded-lg bg-[#eaf2ec] border border-[#1b4329]/15 flex items-center justify-center text-[#1b4329]">
                  <Sprout className="w-4 h-4 text-[#1b4329]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-black text-[#18221b] leading-none tracking-tight">
                      10+
                    </span>
                    <span className="text-[9px] font-bold text-[#5e6d63] uppercase tracking-wider">
                      Years
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#5e6d63] leading-tight mt-0.5">
                    Years of Experience
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Area (6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 px-4 sm:px-8 lg:pl-10 lg:pr-12 xl:pl-16 xl:pr-24 pt-8 lg:pt-0 max-w-2xl lg:max-w-none">
            {/* Eyebrow with Golden Chicken Icon */}
            <div className="inline-flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#df9c16] fill-current shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M19.5 4.5c-.83-.83-2.17-.83-3 0l-1.5 1.5c-.28.28-.44.66-.44 1.06v.88c-1.39.5-2.61 1.4-3.5 2.56L9.5 9c-.55 0-1 .45-1 1v1.5c-1.57.85-2.75 2.3-3.23 4.05L4.5 16c-.28 0-.5.22-.5.5v2c0 .28.22.5.5.5h1.56c.45 1.76 1.83 3.14 3.59 3.59V24h2v-1.35c3.89-.5 7-3.83 7-7.85 0-1.84-.65-3.53-1.74-4.87l1.09-1.09c.83-.83.83-2.17 0-3l-.5-.34z" />
              </svg>
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.22em] text-[#6b766e] uppercase">
                About Aggro Farm
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-bold text-[#18221b] leading-[1.14] tracking-tight">
              Rooted in Nature,
              <br />
              Raised with <span className="text-[#df9c16]">Care</span>
            </h2>

            {/* Paragraph */}
            <p className="text-[#5e6d63] text-sm sm:text-base leading-relaxed max-w-[500px]">
              We believe real food starts with real farming. Our poultry is
              raised in open, clean environments, fed with natural nutrition,
              and cared for by experienced farmers.
            </p>

            {/* Checklist matching design */}
            <div className="space-y-3.5 pt-1">
              {[
                "Ethical and Sustainable Farming",
                "Premium Quality Poultry Products",
                "Clean and Natural Environment",
                "Your Source for Honest, Healthy Food",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c8981f] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-[15px] font-semibold text-[#18221b]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#df9c16] hover:bg-[#c8890e] text-[#18221b] font-bold text-sm sm:text-base px-7 py-3 rounded-full shadow-md shadow-[#df9c16]/25 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

