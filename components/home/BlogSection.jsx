"use client";

import Link from "next/link";
import { Sprout, ArrowRight } from "lucide-react";

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="py-20 bg-white border-b border-[#e8e4d9]/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#df9c16] uppercase">
              <Sprout className="w-3.5 h-3.5" />
              <span>From Our Blog</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#18221b]">
              Latest News & Articles
            </h2>
          </div>

          <Link
            href="#blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#df9c16] hover:text-[#c8890e] border border-[#df9c16]/30 hover:border-[#df9c16] px-5 py-2.5 rounded-full transition-all self-start sm:self-auto"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              date: "Apr 10, 2026",
              title: "The Benefits of Organic Poultry Farming",
              image: "/images/Heritage Breeds.webp",
            },
            {
              date: "Apr 08, 2026",
              title: "Why Farm-Fresh Eggs Are a Healthier Choice",
              image: "/images/hero_poultry.webp",
            },
            {
              date: "Apr 05, 2026",
              title: "Sustainable Farming for a Better Tomorrow",
              image: "/images/Organic Chicken.webp",
            },
          ].map((article, idx) => (
            <article
              key={idx}
              className="group bg-[#fbf9f4] rounded-2xl border border-[#e8e4d9] overflow-hidden hover:border-[#df9c16] hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Article Image Frame */}
              <div className="relative w-full aspect-[16/10] bg-[#ede6d8] border-b border-[#e8e4d9] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-[#df9c16] uppercase tracking-wider">
                    {article.date}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#18221b] group-hover:text-[#1b4329] transition-colors leading-snug">
                    {article.title}
                  </h3>
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#df9c16] group-hover:text-[#1b4329] transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

