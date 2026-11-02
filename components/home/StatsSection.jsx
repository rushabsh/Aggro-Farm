import { Users, Wheat, MapPin, Star } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-12 bg-[#edeede] border-b border-[#e8e4d9]/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              icon: Users,
              val: "5K+",
              label: "Happy Customers",
              color: "green",
            },
            {
              icon: Wheat,
              val: "100%",
              label: "Natural Feed",
              color: "gold",
            },
            {
              icon: MapPin,
              val: "15+",
              label: "Farm Locations",
              color: "green",
            },
            {
              icon: Star,
              val: "98%",
              label: "Customer Satisfaction",
              color: "gold",
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#faf8f2] transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                    stat.color === "green"
                      ? "bg-[#eaf2ec] text-[#1b4329] water-pulse"
                      : "bg-[#fef8eb] text-[#df9c16] water-pulse-gold"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#18221b]">
                    {stat.val}
                  </div>
                  <div className="text-xs text-[#5e6d63] font-medium">
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

