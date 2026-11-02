import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurStorySection() {
  return (
    <section
      id="story"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#fbf8ee] border-b border-[#e8e4d9]/60 overflow-hidden"
    >
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Image: STICKED TO LEFT SIDE with increased size */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-start">
            <div className="w-full max-w-[640px] sm:max-w-[700px] lg:max-w-none xl:max-w-[800px] 2xl:max-w-[880px]">
              <img
                src="/images/about/Our Story.webp"
                alt="Our Story - From a Family Farm to a Bigger Purpose"
                className="w-full h-auto object-contain object-left select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Story Content (6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 px-4 sm:px-8 lg:pl-10 lg:pr-12 xl:pl-16 xl:pr-24 pt-8 lg:pt-0 max-w-2xl lg:max-w-none">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#df9c16] uppercase">
              <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
              <span>Our Story</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-bold text-[#18221b] leading-[1.14] tracking-tight">
              From a Family Farm to a{" "}
              <span className="text-[#df9c16]">Bigger Purpose</span>
            </h2>

            <p className="text-[#5e6d63] text-sm sm:text-base leading-relaxed max-w-[500px]">
              What started as a small family farm with a simple belief — that
              better food comes from better care — has grown into Aggro Farm.
              Over the years, we&apos;ve combined traditional farming values
              with modern, sustainable practices to bring high-quality poultry
              products to more families.
            </p>

            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[#df9c16] hover:bg-[#c8890e] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md shadow-[#df9c16]/20 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Our Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Milestones Timeline */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e8e4d9] max-w-lg">
              <div className="space-y-1">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#18221b]">
                  2016
                </div>
                <div className="text-xs text-[#5e6d63] font-medium">
                  Humble Beginnings
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#18221b]">
                  2020
                </div>
                <div className="text-xs text-[#5e6d63] font-medium">
                  Growing with Care
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#18221b]">
                  2024
                </div>
                <div className="text-xs text-[#5e6d63] font-medium">
                  A Healthier Tomorrow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

