import AboutHero from "@/components/about/AboutHero";
import OurStorySection from "@/components/about/OurStorySection";
import OurValuesSection from "@/components/about/OurValuesSection";
import OurFarmSection from "@/components/about/OurFarmSection";
import AboutStatsSection from "@/components/about/AboutStatsSection";
import OurSustainabilitySection from "@/components/about/OurSustainabilitySection";
import FarmFreshBanner from "@/components/FarmFreshBanner";

export const metadata = {
  title: "About Us - Our Story, Values & Sustainable Farming",
  description:
    "Discover how Aggro Farm grew from a family farm in 2016 to an ethical poultry leader. Rooted in nature, animal welfare, and sustainable practices for healthier families.",
  keywords: [
    "about aggro farm",
    "ethical poultry farming story",
    "sustainable poultry methods",
    "humane chicken care",
    "natural animal nutrition",
    "farm history",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Aggro Farm | Rooted in Nature, Raised with Care",
    description:
      "Learn about our ethical standards, family farm heritage, and sustainable poultry mission.",
    url: "https://aggrofarm.com/about",
    images: ["/images/about/About-hero.webp"],
  },
};

export default function About() {
  return (
    <div className="w-full bg-[#faf8f2] text-[#18221b] overflow-hidden">
      <AboutHero />
      <OurStorySection />
      <OurValuesSection />
      <OurFarmSection />
      <AboutStatsSection />
      <OurSustainabilitySection />
      <FarmFreshBanner />
    </div>
  );
}
