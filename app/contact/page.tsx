
import type { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Makyn Construction | Get a Building Quote in Kenya",
  description:
    "Get in touch with Makyn Construction Company Limited to discuss building construction, renovations, roofing, finishing and other construction projects in Kenya.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Makyn Construction Company Limited",
    description:
      "Have a construction project in mind? Contact Makyn Construction to discuss your requirements and project needs.",
    url: "https://www.makynconstruction.co.ke/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
