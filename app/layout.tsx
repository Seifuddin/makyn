
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
  title: {
    default: "Makyn Construction Company Limited | Your Trusted Construction Partner",
    template: "%s | Makyn Construction",
  },
  description:
    "Makyn Construction Company Limited provides building construction, renovations, masonry, carpentry, roofing, ceiling installation, painting and finishing services.",
  applicationName: "Makyn Construction Company Limited",
  keywords: [
    "Makyn Construction Company Limited",
    "building construction",
    "construction services",
    "renovations and remodelling",
    "masonry and carpentry",
    "roofing and ceiling installation",
    "painting and finishing",
  ],
  openGraph: {
    title: "Makyn Construction Company Limited",
    description: "Your trusted construction partner.",
    type: "website",
    siteName: "Makyn Construction Company Limited",
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
