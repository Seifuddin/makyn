
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Construction Projects in Kenya | Makyn Construction",
  description:
    "Explore construction projects by Makyn Construction Company Limited, showcasing residential and commercial buildings, renovations, architectural work and quality craftsmanship across Kenya.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Projects | Makyn Construction Company Limited",
    description:
      "Discover our construction work, completed projects and commitment to quality building and craftsmanship in Kenya.",
    url: "https://www.makynconstruction.co.ke/projects",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
