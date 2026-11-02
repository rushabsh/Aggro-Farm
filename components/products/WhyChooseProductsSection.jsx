import { Sprout, Heart, Wheat, ShieldCheck } from "lucide-react";

export default function WhyChooseProductsSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#fbf8ee] border-b border-[#e8e4d9]/60 overflow-hidden">
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Image: STICKED TO LEFT SIDE with increased size (6 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-start overflow-hidden">
            <div className="relative w-full max-w-[640px] sm:max-w-[700px] lg:max-w-none xl:max-w-[820px] 2xl:max-w-[900px]">
              <img
                src="/images/products/Why Choose Our Products.webp"
                alt="Farmer Holding Fresh Egg Basket - Why Choose Our Products"
                className="w-full h-auto object-contain object-left select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Quality Narrative (6 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 px-4 sm:px-8 lg:pl-10 lg:pr-12 xl:pl-16 xl:pr-24 pt-8 lg:pt-0 max-w-2xl lg:max-w-none">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#df9c16] uppercase">
              <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
              <span>Why Choose Our Products</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.35rem] font-bold text-[#18221b] leading-[1.14] tracking-tight">
              Naturally Better{" "}
              <span className="text-[#df9c16]">for Healthier Families</span>
            </h2>

            <p className="text-[#5e6d63] text-sm sm:text-base leading-relaxed max-w-[500px]">
              Our products are a result of ethical farming, natural nutrition,
              and uncompromising quality — so you get the best, every time.
            </p>

            {/* 4 Quality Badges matching design */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-lg">
              {[
                {
                  title: "No Harmful Chemicals",
                  icon: Sprout,
                },
                {
                  title: "Better Nutrition",
                  icon: Heart,
                },
                {
                  title: "Ethically Sourced",
                  icon: Wheat,
                },
                {
                  title: "Quality Assured",
                  icon: ShieldCheck,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center space-y-2.5"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#eaf2ec] text-[#1b4329] flex items-center justify-center water-pulse">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#18221b] leading-tight max-w-[110px]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

