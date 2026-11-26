
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Construction Company in Kenya",
  description:
    "Learn about Makyn Construction Company Limited, our values, construction expertise, work process and commitment to delivering quality building projects in Kenya.",
  alternates: {
    canonical: "/about-lab",
  },
  openGraph: {
    title: "About Makyn Construction Company Limited",
    description:
      "Discover our story, values and commitment to quality construction, professional workmanship and lasting relationships in Kenya.",
    url: "https://www.makynconstruction.co.ke/about-lab",
    type: "website",
  },
};
 
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
