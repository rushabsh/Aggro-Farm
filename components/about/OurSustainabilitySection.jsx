import { Sprout, Recycle, Wheat } from "lucide-react";

export default function OurSustainabilitySection() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#fbf8ee] border-b border-[#e8e4d9]/60 overflow-hidden">
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Image: STICKED TO LEFT SIDE with increased size (6 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-start overflow-hidden">
            <div className="relative w-full max-w-[640px] sm:max-w-[700px] lg:max-w-none xl:max-w-[820px] 2xl:max-w-[900px] -ml-[12%] sm:-ml-[10%] lg:-ml-[14%] xl:-ml-[16%]">
              <img
                src="/images/about/Our Sustainability.webp"
                alt="Our Sustainability - Responsible Farming for a Healthier Tomorrow"
                className="w-full h-auto object-contain object-left select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Sustainability Content (6 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 px-4 sm:px-8 lg:pl-10 lg:pr-12 xl:pl-16 xl:pr-24 pt-8 lg:pt-0 max-w-2xl lg:max-w-none">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#df9c16] uppercase">
              <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
              <span>Our Sustainability</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-bold text-[#18221b] leading-[1.14] tracking-tight">
              Responsible Farming for a{" "}
              <span className="text-[#df9c16]">Healthier Tomorrow</span>
            </h2>

            <p className="text-[#5e6d63] text-sm sm:text-base leading-relaxed max-w-[520px]">
              We are committed to sustainable farming practices that protect
              the environment, conserve natural resources, and create a
              healthier tomorrow for both people and the planet.
            </p>

            {/* 3 Sustainability Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 max-w-xl">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#e8e4d9]">
                <div className="w-10 h-10 rounded-full bg-[#eaf2ec] text-[#1b4329] flex items-center justify-center water-pulse shrink-0">
                  <Sprout className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-[#18221b]">
                  Eco-Friendly Practices
                </span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#e8e4d9]">
                <div className="w-10 h-10 rounded-full bg-[#eaf2ec] text-[#1b4329] flex items-center justify-center water-pulse shrink-0">
                  <Recycle className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-[#18221b]">
                  Reduced Environmental Impact
                </span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#e8e4d9]">
                <div className="w-10 h-10 rounded-full bg-[#eaf2ec] text-[#1b4329] flex items-center justify-center water-pulse shrink-0">
                  <Wheat className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-[#18221b]">
                  Sustainable Farming
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

