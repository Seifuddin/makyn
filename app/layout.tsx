
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";
import WhatsAppButton from "@/components/home/WhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.makynconstruction.co.ke"),

  title: {
    default: "Makyn Construction Company Limited | Building Contractors in Kenya",
    template: "%s | Makyn Construction",
  },

  description:
    "Makyn Construction Company Limited is a construction company in Kenya providing building construction, renovations, masonry, carpentry, roofing, ceiling installation, painting and finishing services.",

  applicationName: "Makyn Construction Company Limited",

  keywords: [
    "Makyn Construction Company Limited",
    "construction company in Kenya",
    "building contractors in Kenya",
    "construction company in Nairobi",
    "house construction in Kenya",
    "building construction",
    "renovations and remodelling",
    "masonry and carpentry",
    "roofing and ceiling installation",
    "painting and finishing",
    "residential construction",
    "commercial construction",
  ],

  authors: [
    {
      name: "Makyn Construction Company Limited",
    },
  ],

  creator: "Makyn Construction Company Limited",

  openGraph: {
    title:
      "Makyn Construction Company Limited | Your Trusted Construction Partner",
    description:
      "Building with purpose, quality and commitment. Discover professional construction, renovation and finishing services from Makyn Construction Company Limited in Kenya.",
    url: "https://www.makynconstruction.co.ke",
    siteName: "Makyn Construction Company Limited",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/images/projects/arcit.jpeg",
        width: 738,
        height: 415,
        alt: "Construction project by Makyn Construction Company Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Makyn Construction Company Limited",
    description:
      "Your trusted construction partner. Quality building, renovation and construction solutions in Kenya.",
    images: ["/images/projects/arcit.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#172b3a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
