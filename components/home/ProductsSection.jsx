"use client";

import Link from "next/link";
import { Sprout, Droplets, ShieldCheck, Users, ArrowRight } from "lucide-react";

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white border-b border-[#e8e4d9]/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#df9c16] uppercase">
            <Sprout className="w-3.5 h-3.5" />
            <span>Our Products</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18221b]">
            Pure. Natural. <span className="text-[#df9c16]">Premium.</span>
          </h2>
          <p className="text-[#5e6d63] text-sm sm:text-base leading-relaxed">
            A range of naturally raised poultry products for healthier
            families and a sustainable tomorrow.
          </p>
        </div>

        {/* 4 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Fresh Eggs",
              desc: "Nutritious, chemical-free eggs delivered fresh from our farm.",
              icon: Droplets,
              image: "/images/Fresh Eggs.webp",
            },
            {
              title: "Organic Chicken",
              desc: "Naturally raised, tender and healthy chicken for your family.",
              icon: ShieldCheck,
              image: "/images/Organic Chicken.webp",
            },
            {
              title: "Heritage Breeds",
              desc: "Traditional breeds raised the natural way for better nutrition.",
              icon: Sprout,
              image: "/images/Heritage Breeds.webp",
            },
            {
              title: "Chicks & Layers",
              desc: "Healthy chicks and layers for sustainable farming.",
              icon: Users,
              image: "/images/Chicks & Layers.webp",
            },
          ].map((prod, idx) => {
            const Icon = prod.icon;
            return (
              <div
                key={idx}
                className="group bg-[#fbf9f4] rounded-2xl border border-[#e8e4d9] overflow-hidden hover:border-[#df9c16] hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Product Photograph Frame */}
                <div className="relative w-full aspect-[4/3] bg-[#ede6d8] border-b border-[#e8e4d9] overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-[#eaf2ec] text-[#1b4329] flex items-center justify-center water-pulse">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#18221b] group-hover:text-[#1b4329] transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-[#5e6d63] leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>

                  {/* Circular Action Arrow */}
                  <div className="pt-2 flex justify-end">
                    <Link
                      href="/products"
                      aria-label={`View ${prod.title}`}
                      className="w-9 h-9 rounded-full bg-[#df9c16] hover:bg-[#c8890e] text-white flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-xs cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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

