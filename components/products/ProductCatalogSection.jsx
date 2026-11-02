"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sprout,
  ArrowRight,
  ShieldCheck,
  LayoutGrid,
  Egg,
  Bird,
} from "lucide-react";

export default function ProductCatalogSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Products", icon: LayoutGrid },
    { id: "eggs", label: "Fresh Eggs", icon: Egg },
    { id: "chicken", label: "Chicken", icon: Bird },
    { id: "chicks", label: "Chicks & Layers", icon: Sprout },
    { id: "heritage", label: "Heritage Breeds", icon: ShieldCheck },
  ];

  const products = [
    {
      id: 1,
      category: "eggs",
      title: "Fresh Eggs",
      desc: "Nutritious, chemical-free eggs delivered fresh from our farm.",
      image: "/images/products/Fresh Eggs.webp",
    },
    {
      id: 2,
      category: "chicken",
      title: "Organic Chicken",
      desc: "Naturally raised, tender and healthy chicken for your family.",
      image: "/images/products/Organic Chicken.webp",
    },
    {
      id: 3,
      category: "chicks",
      title: "Chicks & Layers",
      desc: "Healthy chicks and layers for sustainable farming.",
      image: "/images/products/Chicks & Layers.webp",
    },
    {
      id: 4,
      category: "heritage",
      title: "Heritage Breeds",
      desc: "Traditional breeds raised the natural way for better nutrition.",
      image: "/images/products/Heritage Breeds.webp",
    },
    {
      id: 5,
      category: "chicken",
      title: "Chicken Cuts",
      desc: "Clean, fresh and hygienically processed chicken cuts.",
      image: "/images/products/Chicken Cuts.webp",
    },
    {
      id: 6,
      category: "all",
      title: "Poultry Feed",
      desc: "Premium quality feed for stronger and healthier poultry.",
      image: "/images/products/Poultry Feed.webp",
    },
    {
      id: 7,
      category: "all",
      title: "Supplements",
      desc: "Natural supplements for better growth and immunity.",
      image: "/images/products/Supplements.webp",
    },
    {
      id: 8,
      category: "all",
      title: "Farm Accessories",
      desc: "Essential equipment for efficient and hygienic farming.",
      image: "/images/products/Farm Accessories.webp",
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter(
          (p) => p.category === activeCategory || p.category === "all",
        );

  return (
    <>
      {/* =========================================================================
          2. CATEGORY FILTER TABS
         ========================================================================= */}
      <section className="py-6 bg-white/80 border-b border-[#e8e4d9]/60 sticky top-20 z-30 backdrop-blur-md shadow-xs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white border border-[#e8e4d9] shadow-sm overflow-x-auto max-w-full scrollbar-none">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#1b4329] text-white shadow-md shadow-[#1b4329]/20"
                        : "text-[#18221b] hover:bg-[#faf6ee] hover:text-[#df9c16]"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? "text-[#86efac]" : "text-[#df9c16]"
                      }`}
                    />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PRODUCT CATALOG GRID (8 Products with Images)
         ========================================================================= */}
      <section className="py-20 bg-[#faf8f2] border-b border-[#e8e4d9]/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#df9c16] uppercase">
              <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
              <span>Our Products</span>
              <span className="w-5 h-[1.5px] bg-[#df9c16]"></span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18221b]">
              Premium Poultry Products
            </h2>
            <p className="text-[#5e6d63] text-sm sm:text-base leading-relaxed">
              Explore our range of naturally raised poultry products, carefully
              nurtured for your health and well-being.
            </p>
          </div>

          {/* 8 Product Cards Grid (4 cols on lg, 2 on sm, 1 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="group bg-white rounded-2xl border border-[#e8e4d9] overflow-hidden hover:border-[#df9c16] hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Product Image Frame */}
                <div className="relative w-full aspect-[4/3] bg-[#f5f1e8] overflow-hidden">
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
                  <div className="space-y-1.5">
                    <h3 className="font-display text-lg font-bold text-[#18221b] group-hover:text-[#1b4329] transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-[#5e6d63] leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>

                  {/* "View Details ->" Link matching design */}
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#df9c16] hover:text-[#c8890e] transition-colors group-hover:translate-x-0.5 duration-200"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

