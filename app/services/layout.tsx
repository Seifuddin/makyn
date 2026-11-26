
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Services in Kenya | Building & Renovations",
  description:
    "Explore Makyn Construction's services in Kenya, including building construction, renovations, masonry, carpentry, roofing, ceiling installation, painting and finishing.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Professional Construction Services in Kenya | Makyn Construction",
    description:
      "From building construction to renovations, roofing and finishing, discover quality construction solutions from Makyn Construction Company Limited.",
    url: "https://www.makynconstruction.co.ke/services",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
