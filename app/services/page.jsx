import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import FarmFreshBanner from "@/components/FarmFreshBanner";

export const metadata = {
  title: "Professional Poultry Services - Ethical Farming & Feed Supply",
  description:
    "Explore comprehensive poultry solutions from Aggro Farm: ethical farming systems, 100% organic feed supply, expert farm consultancy, and wholesale distribution.",
  keywords: [
    "poultry services",
    "organic chicken feed supply",
    "poultry farm consultancy",
    "wholesale poultry distribution",
    "sustainable farm biosecurity",
    "poultry health solutions",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Poultry Farming Services | Aggro Farm",
    description:
      "End-to-end support for healthy poultry production, organic feed, and sustainable infrastructure.",
    url: "https://aggrofarm.com/services",
    images: ["/images/home-hero.webp"],
  },
};

export default function Services() {
  return (
    <div className="w-full bg-[#faf8f2] text-[#18221b] overflow-hidden">
      <ServicesHero />
      <ServicesList />
      <FarmFreshBanner />
    </div>
  );
}
