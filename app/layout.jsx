import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentAnimator from "@/components/ContentAnimator";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aggrofarm.com"
  ),
  title: {
    default: "Aggro Farm | 100% Natural & Ethically Raised Poultry",
    template: "%s | Aggro Farm",
  },
  description:
    "Aggro Farm delivers 100% naturally raised poultry, chemical-free farm-fresh eggs, organic chicken, and heritage breeds directly to your table.",
  keywords: [
    "poultry farm",
    "organic chicken",
    "farm fresh eggs",
    "free-range eggs",
    "heritage chicken breeds",
    "sustainable farming",
    "natural poultry feed",
    "ethical livestock",
    "chemical-free poultry",
    "pasture-raised chicken",
  ],
  authors: [{ name: "Aggro Farm Team", url: "https://aggrofarm.com" }],
  creator: "Aggro Farm",
  publisher: "Aggro Farm",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aggro Farm | 100% Natural & Ethically Raised Poultry",
    description:
      "Ethical farming, natural nutrition, and pasture-raised poultry for healthier families.",
    url: "https://aggrofarm.com",
    siteName: "Aggro Farm",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Aggro Farm - Fresh and Ethical Poultry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aggro Farm | 100% Natural & Ethically Raised Poultry",
    description:
      "Discover pasture-raised poultry and fresh organic eggs from Aggro Farm.",
    images: ["/images/home-hero.webp"],
    creator: "@aggrofarm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AgriculturalBusiness",
      "@id": "https://aggrofarm.com/#organization",
      name: "Aggro Farm",
      url: "https://aggrofarm.com",
      logo: "https://aggrofarm.com/images/home-hero.webp",
      description:
        "Ethical and sustainable poultry farming delivering 100% natural, antibiotic-free chicken and fresh farm eggs.",
      telephone: "+1-706-555-4433",
      email: "info@aggrofarm.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Green Farm Road",
        addressLocality: "Countryside",
        postalCode: "12345",
        addressCountry: "US",
      },
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://aggrofarm.com/#website",
      url: "https://aggrofarm.com",
      name: "Aggro Farm",
      publisher: {
        "@id": "https://aggrofarm.com/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <ContentAnimator>{children}</ContentAnimator>
        <Footer />
      </body>
    </html>
  );
}
