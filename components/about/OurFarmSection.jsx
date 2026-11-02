import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurFarmSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#fbf8ee] border-b border-[#e8e4d9]/60 overflow-hidden">
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Content (6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 px-4 sm:px-8 lg:pl-12 lg:pr-8 xl:pl-20 xl:pr-12 pb-8 lg:pb-0 max-w-2xl lg:max-w-none">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#df9c16] uppercase">
              <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
              <span>Our Farm</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-bold text-[#18221b] leading-[1.14] tracking-tight">
              A Healthier Environment for{" "}
              <span className="text-[#df9c16]">Happier Chickens</span>
            </h2>

            <p className="text-[#5e6d63] text-sm sm:text-base leading-relaxed max-w-[500px]">
              Our poultry is raised in open, clean environments with natural
              light, fresh air, and balanced nutrition. We follow sustainable
              practices that ensure the well-being of our chickens and the
              quality of our products.
            </p>

            <div className="pt-1">
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 bg-[#df9c16] hover:bg-[#c8890e] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md shadow-[#df9c16]/20 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image: STICKED TO RIGHT SIDE with increased size (6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-end relative">
            <div className="w-full max-w-[640px] sm:max-w-[720px] lg:max-w-none xl:max-w-[840px] 2xl:max-w-[920px] flex justify-end">
              <img
                src="/images/about/Good Food, Brighter Tomorrow.webp"
                alt="Our Farm - A Healthier Environment for Happier Chickens"
                className="w-full h-auto object-contain object-right select-none"
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

