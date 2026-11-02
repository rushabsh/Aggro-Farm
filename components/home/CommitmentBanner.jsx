export default function CommitmentBanner() {
  return (
    <section className="py-10 sm:py-14 bg-[#faf8f2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#e8e4d9]/80 min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] flex items-center group">
          {/* Background Panoramic Meadow Image */}
          <img
            src="/images/Golden-Hour Hens in a Wildflower Meadow.webp"
            alt="Golden-Hour Hens in a Wildflower Meadow - Our Commitment"
            className="absolute inset-0 w-full h-full object-cover object-right sm:object-center select-none group-hover:scale-105 transition-transform duration-1000"
            loading="lazy"
            decoding="async"
          />

          {/* Smooth Left-to-Right Dark Forest Green Gradient Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#112d1b] via-[#143820]/90 via-45% to-transparent pointer-events-none w-full sm:w-[80%] lg:w-[62%]" />

          {/* Additional subtle soft overlay on small mobile screens to keep text crisp */}
          <div className="sm:hidden absolute inset-0 bg-[#112d1b]/40 pointer-events-none" />

          {/* Left-Aligned Quote Content */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-14 py-8 sm:py-10 max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.4rem] font-bold text-white leading-[1.18] tracking-tight drop-shadow-sm">
              “Quality poultry
              <br />
              for{" "}
              <span className="text-[#df9c16] font-bold">
                healthier families.”
              </span>
            </h2>

            <div className="flex items-center gap-2 pt-3 sm:pt-4">
              <span className="w-4 sm:w-5 h-[2px] bg-[#df9c16] shrink-0" />
              <span className="text-xs sm:text-[13px] font-medium tracking-wide text-white/90">
                – Our Commitment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
