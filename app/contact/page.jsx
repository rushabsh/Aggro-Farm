import ContactContent from "@/components/contact/ContactContent";

export const metadata = {
  title: "Contact Us - Farm Inquiries, Wholesale & Partnerships",
  description:
    "Get in touch with Aggro Farm. Reach out for wholesale orders, distribution partnerships, farm questions, or customer support. We are here to help.",
  keywords: [
    "contact aggro farm",
    "poultry farm phone number",
    "wholesale chicken supplier",
    "poultry distributor partnerships",
    "order fresh eggs bulk",
    "farm location and address",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Aggro Farm | Let's Build a Healthier Tomorrow Together",
    description:
      "Have questions about our poultry products or partnerships? Reach out to our dedicated farm team.",
    url: "https://aggrofarm.com/contact",
    images: ["/images/contact/contact us hero.webp"],
  },
};

export default function Contact() {
  return <ContactContent />;
}
