import ProductsHero from "@/components/products/ProductsHero";
import ProductCatalogSection from "@/components/products/ProductCatalogSection";
import WhyChooseProductsSection from "@/components/products/WhyChooseProductsSection";
import FarmFreshBanner from "@/components/FarmFreshBanner";

export const metadata = {
  title: "Premium Poultry Products - Farm Fresh Eggs & Organic Chicken",
  description:
    "Shop our pure, chemical-free poultry products: farm-fresh brown eggs, certified organic chicken cuts, heritage breed chicks & layers, and natural feeds.",
  keywords: [
    "buy organic chicken online",
    "farm fresh brown eggs",
    "heritage chicken breeds for sale",
    "chicks and layers supplier",
    "chemical-free poultry meat",
    "pure poultry products",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Pure. Natural. Premium Poultry Products | Aggro Farm",
    description:
      "Nutritious eggs, pasture-raised chicken, and heritage breeds direct from Aggro Farm.",
    url: "https://aggrofarm.com/products",
    images: ["/images/products/Our Products hero.webp"],
  },
};

export default function Products() {
  return (
    <div className="w-full bg-[#faf8f2] text-[#18221b] overflow-hidden">
      <ProductsHero />
      <ProductCatalogSection />
      <WhyChooseProductsSection />
      <FarmFreshBanner />
    </div>
  );
}
