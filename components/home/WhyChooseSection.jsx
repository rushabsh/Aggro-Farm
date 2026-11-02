import { Recycle } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#faf8f2] border-b border-[#e8e4d9]/60 overflow-hidden">
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          {/* Left Content Area (7 cols on lg) */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-10 lg:space-y-12 px-4 sm:px-8 lg:pl-10 lg:pr-6 xl:pl-20 xl:pr-10">
            {/* Header: Headline (Left) & Commitment Paragraph (Right) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-end">
              {/* 3-Line Headline */}
              <div className="sm:col-span-7 space-y-2.5">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-[#637267] uppercase">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#df9c16] shrink-0" />
                  <span>Why Choose Aggro Farm</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#18221b] leading-[1.08] tracking-tight">
                  Farm Fresh.
                  <br />
                  Ethically Raised.
                  <br />
                  <span className="text-[#df9c16]">Naturally Better.</span>
                </h2>
              </div>

              {/* Paragraph alongside headline */}
              <div className="sm:col-span-5 sm:pb-1">
                <p className="text-[#5e6d63] text-sm leading-relaxed max-w-xs">
                  We are committed to sustainable and ethical poultry farming
                  practices that benefit both people and the planet.
                </p>
              </div>
            </div>

            {/* 4 Feature Badges in a Horizontal Row */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 lg:gap-8 pt-2">
              {/* 1. No Harmful Chemicals */}
              <div className="flex-1 min-w-[90px] flex flex-col items-center text-center space-y-2.5 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#eef4ed] border border-[#d8e6d9] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  {/* Double Leaf Emblem */}
                  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                    <path
                      d="M 15 27 C 9 25 5 18 5 10 C 11 10 16 14 15 27 Z"
                      fill="#1b4329"
                    />
                    <path
                      d="M 16 27 C 17 18 21 11 27 8 C 28 16 23 23 16 27 Z"
                      fill="#df9c16"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#18221b] leading-tight">
                  No Harmful
                  <br />
                  Chemicals
                </span>
              </div>

              {/* 2. Better Nutrition */}
              <div className="flex-1 min-w-[90px] flex flex-col items-center text-center space-y-2.5 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#eef4ed] border border-[#d8e6d9] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  {/* Heart with Golden Dot */}
                  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                    <path
                      d="M 16 27 C 16 27 5 19 5 12 C 5 8 8 5 12 5 C 14.5 5 15.5 6.5 16 7.5 C 16.5 6.5 17.5 5 20 5 C 24 5 27 8 27 12 C 27 19 16 27 16 27 Z"
                      fill="#1b4329"
                    />
                    <circle cx="10" cy="10" r="3.2" fill="#df9c16" />
                  </svg>
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#18221b] leading-tight">
                  Better
                  <br />
                  Nutrition
                </span>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block h-10 w-[1px] bg-[#e4ded3] shrink-0" />

              {/* 3. Stress-Free Environment */}
              <div className="flex-1 min-w-[90px] flex flex-col items-center text-center space-y-2.5 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#eef4ed] border border-[#d8e6d9] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  {/* Wheat / Botanical Branch */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="none"
                    stroke="#1b4329"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22V8" />
                    <path d="M12 8 C9 5 5 7 5 7 C 5 7 7 11 10 11" />
                    <path d="M12 8 C15 5 19 7 19 7 C 19 7 17 11 14 11" />
                    <path d="M12 13 C9 10 5 12 5 12 C 5 12 7 16 10 16" />
                    <path d="M12 13 C15 10 19 12 19 12 C 19 12 17 16 14 16" />
                    <path d="M12 4 C10 2 8 3 8 3 C 8 3 9 5 11 5" />
                    <path d="M12 4 C14 2 16 3 16 3 C 16 3 15 5 13 5" />
                  </svg>
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#18221b] leading-tight">
                  Stress-Free
                  <br />
                  Environment
                </span>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block h-10 w-[1px] bg-[#e4ded3] shrink-0" />

              {/* 4. Sustainable Farming */}
              <div className="flex-1 min-w-[90px] flex flex-col items-center text-center space-y-2.5 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#eef4ed] border border-[#d8e6d9] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  {/* Recycle Symbol */}
                  <Recycle className="w-6 h-6 text-[#1b4329]" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#18221b] leading-tight">
                  Sustainable
                  <br />
                  Farming
                </span>
              </div>
            </div>
          </div>

          {/* Right: Fresh Eggs with Green Leaves Image STICKED TO RIGHT SIDE with increased size */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-end relative">
            <div className="w-full max-w-[580px] sm:max-w-[640px] lg:max-w-none xl:max-w-[760px] 2xl:max-w-[850px] flex justify-end">
              <img
                src="/images/Fresh Eggs with Green Leaves.webp"
                alt="Fresh Eggs with Green Leaves"
                className="w-full h-auto max-h-[480px] sm:max-h-[540px] lg:max-h-[600px] object-contain object-right mix-blend-multiply select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

