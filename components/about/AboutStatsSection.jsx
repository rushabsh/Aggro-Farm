import { Users, Wheat, MapPin, Star } from "lucide-react";

export default function AboutStatsSection() {
  return (
    <section className="py-12 bg-[#1b4329] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              icon: Users,
              val: "5K+",
              label: "Happy Customers",
            },
            {
              icon: Wheat,
              val: "100%",
              label: "Natural Feed",
            },
            {
              icon: MapPin,
              val: "15+",
              label: "Farm Locations",
            },
            {
              icon: Star,
              val: "98%",
              label: "Customer Satisfaction",
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#143520]/80 border border-[#2a5939]/60"
              >
                <div className="w-12 h-12 rounded-full bg-[#1b4329] text-[#86efac] border border-[#2a5939] flex items-center justify-center shrink-0 water-pulse">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {stat.val}
                  </div>
                  <div className="text-xs text-[#86efac] font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

