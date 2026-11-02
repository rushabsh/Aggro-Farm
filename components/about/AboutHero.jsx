import { Sprout, ArrowRight, Heart, Wheat } from "lucide-react";

export default function AboutHero() {
  return (
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
        {/* Main Photorealistic Hen in Pasture Photo */}
        <img
          src="/images/about/About-hero.webp"
          alt="About Aggro Farm - Nourishing Lives with Better Poultry"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
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

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[580px] lg:min-h-[640px] xl:min-h-[680px]">
          {/* Left Column: Text & Badges (takes 6 cols on lg) */}
          <div className="lg:col-span-6 space-y-6 pt-4 pb-8 lg:py-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#df9c16] uppercase">
              <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
              <span>About Aggro Farm</span>
              <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[4rem] font-bold tracking-tight text-[#18221b] leading-[1.12]">
              Nourishing Lives with{" "}
              <span className="text-[#df9c16]">Better Poultry</span>
            </h1>

            {/* Paragraph */}
            <p className="text-[#5e6d63] text-sm sm:text-base leading-relaxed max-w-[430px]">
              At Aggro Farm, we believe real food starts with real care. We
              are committed to premium, naturally raised poultry products that
              support healthier families, stronger communities, and a more
              sustainable tomorrow.
            </p>

            {/* CTA Button */}
            <div className="pt-1">
              <a
                href="#story"
                className="inline-flex items-center gap-2.5 bg-[#df9c16] hover:bg-[#c8890e] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md shadow-[#df9c16]/20 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

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
                src="/images/about/About-hero.webp"
                alt="About Aggro Farm - Nourishing Lives with Better Poultry"
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
  );
}

