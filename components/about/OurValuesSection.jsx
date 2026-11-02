import { Sprout, Heart, Droplets, Users } from "lucide-react";

export default function OurValuesSection() {
  return (
    <section className="py-20 bg-[#faf8f2] border-b border-[#e8e4d9]/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#df9c16] uppercase">
            <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
            <span>Our Values</span>
            <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18221b]">
            Built on Care, Guided by Purpose
          </h2>
          <p className="text-[#5e6d63] text-sm sm:text-base leading-relaxed">
            Our values shape everything we do — from how we raise our chickens
            to how we serve our customers.
          </p>
        </div>

        {/* 4 Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Natural Nutrition",
              desc: "Wholesome, chemical-free feed for healthier poultry and better food.",
              icon: Sprout,
            },
            {
              title: "Ethical Farming",
              desc: "Humane and responsible practices for animal welfare.",
              icon: Heart,
            },
            {
              title: "Clean Environment",
              desc: "Safe, hygienic and stress-free surroundings for stronger, healthier chickens.",
              icon: Droplets,
            },
            {
              title: "Quality First",
              desc: "Consistent quality you can trust, from our farm to your family.",
              icon: Users,
            },
          ].map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-[#e8e4d9] hover:border-[#df9c16] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#eaf2ec] text-[#1b4329] flex items-center justify-center water-pulse">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#18221b]">
                  {val.title}
                </h3>
                <p className="text-xs text-[#5e6d63] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

