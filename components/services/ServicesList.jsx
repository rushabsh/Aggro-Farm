import Link from "next/link";
import { Sprout, Wheat, Users, ShieldCheck, ArrowRight } from "lucide-react";

export default function ServicesList() {
  const services = [
    {
      title: "Ethical Poultry Farming",
      desc: "Humane, sustainable, and free-range raising practices tailored for animal welfare and optimal health.",
      icon: Sprout,
    },
    {
      title: "Quality Feed Supply",
      desc: "Nutrient-rich, 100% chemical-free organic feeds formulated for strong vitality and natural immunity.",
      icon: Wheat,
    },
    {
      title: "Farm Consultancy",
      desc: "Expert guidance for local farmers on sustainable farm setup, biosecurity, and natural livestock care.",
      icon: Users,
    },
    {
      title: "Wholesale & Distribution",
      desc: "Reliable farm-to-table delivery for restaurants, retailers, and co-ops committed to pure food quality.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#e8e4d9]/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#df9c16] uppercase">
            <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
            <span>What We Offer</span>
            <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18221b]">
            Our Professional Services
          </h2>
          <p className="text-[#5e6d63] text-sm sm:text-base leading-relaxed">
            We deliver end-to-end support for healthy poultry production,
            sustainable farming infrastructure, and high-standard poultry
            distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="group p-7 rounded-2xl bg-[#faf8f2] border border-[#e8e4d9] hover:border-[#df9c16] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#eaf2ec] text-[#1b4329] flex items-center justify-center water-pulse">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#18221b] group-hover:text-[#1b4329] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#5e6d63] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#df9c16] hover:text-[#c8890e] transition-colors group-hover:translate-x-0.5 duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

