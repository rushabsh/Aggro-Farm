"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FarmFreshBanner({
  eyebrow = "Farm Fresh • Pure • Trusted",
  title = "Good Food",
  titleSecondLine = "Starts at the",
  titleHighlight = "Farm",
  description = "Choose organic. Choose ethical. Choose Aggro Farm.",
  buttonText = "Explore Our Products",
  buttonHref = "/products",
  imageSrc = "/images/hero_poultry.webp",
  imageAlt = "Good Food Starts at the Farm - Pure Poultry",
  className = "",
}) {
  return (
    <section className={`py-16 bg-[#faf8f2] ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#1b4329] text-white overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Subtle glow circle */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#df9c16]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#86efac]/10 blur-3xl pointer-events-none" />

          {/* Left Content Area (6 cols on lg) */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 xl:p-16 space-y-4 sm:space-y-5 z-10">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#86efac] uppercase">
                <span className="w-5 h-[1.5px] bg-[#86efac] shrink-0" />
                <span>{eyebrow}</span>
              </div>
            )}

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              {title}
              {titleSecondLine && (
                <>
                  <br />
                  {titleSecondLine}{" "}
                </>
              )}
              {titleHighlight && (
                <span className="text-[#df9c16]">{titleHighlight}</span>
              )}
            </h2>

            {description && (
              <p className="text-sm sm:text-base text-[#d1fae5] max-w-md leading-relaxed">
                {description}
              </p>
            )}

            {buttonText && buttonHref && (
              <div className="pt-2">
                <Link
                  href={buttonHref}
                  className="inline-flex items-center gap-2.5 bg-[#df9c16] hover:bg-[#c8890e] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-[#df9c16]/30 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>

          {/* Right Photo Area with Seamless Blend (6 cols on lg) */}
          <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full min-h-[320px] lg:min-h-[380px] overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            {/* Desktop Left-to-Right Gradient Blend */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 xl:w-44 bg-gradient-to-r from-[#1b4329] via-[#1b4329]/80 to-transparent pointer-events-none z-10" />
            {/* Mobile Top-to-Bottom Gradient Blend */}
            <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#1b4329] via-[#1b4329]/40 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

