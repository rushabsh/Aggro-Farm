import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import CommitmentBanner from "@/components/home/CommitmentBanner";
import BlogSection from "@/components/home/BlogSection";
import FarmFreshBanner from "@/components/FarmFreshBanner";

export const metadata = {
  title: "Healthy Poultry Today for a Better Tomorrow",
  description:
    "Experience the highest quality poultry products from Aggro Farm. Naturally raised, chemical-free eggs, organic chicken, and heritage breeds raised with care.",
  keywords: [
    "healthy poultry today",
    "organic chicken delivery",
    "farm fresh brown eggs",
    "natural hen pasture",
    "ethical poultry farm USA",
    "sustainable poultry farming",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aggro Farm | Healthy Poultry Today for a Better Tomorrow",
    description:
      "100% natural feed, pasture-raised chickens, and fresh eggs from our ethical farm.",
    url: "https://aggrofarm.com",
    images: ["/images/home-hero.webp"],
  },
};

export default function Home() {
  return (
    <div className="w-full bg-[#faf8f2] text-[#18221b] overflow-hidden">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <StatsSection />
      <WhyChooseSection />
      <CommitmentBanner />
      <BlogSection />
      <FarmFreshBanner />
    </div>
  );
}
