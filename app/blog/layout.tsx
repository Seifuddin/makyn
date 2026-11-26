
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Blog | Building Tips & Insights in Kenya",
  description:
    "Read the Makyn Construction blog for practical building advice, construction costs in Kenya, house designs, renovation ideas, project planning tips and industry insights.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Construction Blog & Building Insights | Makyn Construction",
    description:
      "Explore useful construction knowledge, building guides, design inspiration and practical advice for property owners in Kenya.",
    url: "https://www.makynconstruction.co.ke/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
