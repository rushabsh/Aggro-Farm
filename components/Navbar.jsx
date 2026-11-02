"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sprout, Menu, X, Search, ShoppingBag, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-[#faf8f2]/95 backdrop-blur-md border-b border-[#e8e4d9]/80 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo matching image */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1b4329] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6 text-[#86efac] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex items-baseline font-display text-2xl font-bold tracking-tight">
              <span className="text-[#1b4329]">Aggro</span>
              <span className="text-[#df9c16] ml-1">Farm</span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1.5 text-[15px] font-medium transition-colors ${
                    active
                      ? "text-[#df9c16] font-semibold"
                      : "text-[#18221b] hover:text-[#df9c16]"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#df9c16] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Button */}
          <div className="hidden sm:flex items-center gap-4">
            {/* "Get In Touch ->" Button matching image */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#df9c16] hover:bg-[#c8890e] text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/products"
              aria-label="Cart"
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-[#18221b]"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#1b4329] text-white text-[10px] font-bold flex items-center justify-center">
                0
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-lg text-[#18221b] hover:bg-[#ebe6d8] transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e8e4d9] bg-[#faf8f2] px-5 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? "text-[#df9c16] font-semibold bg-[#df9c16]/10"
                      : "text-[#18221b] hover:bg-[#ebe6d8]/60"
                  }`}
                >
                  <span>{link.name}</span>
                  {active && (
                    <span className="w-2 h-2 rounded-full bg-[#df9c16]"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-[#e8e4d9]">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#df9c16] hover:bg-[#c8890e] text-white font-semibold text-sm py-3 px-5 rounded-full shadow-sm"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
