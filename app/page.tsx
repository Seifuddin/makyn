"use client";

import { useState } from "react";

import HeroSection from "@/components/home/hero-section";
import IntroSection from "@/components/home/intro-section";
import ServicesSection from "@/components/home/services-section";
import ProjectsSection from "@/components/home/projects-section";
import CommitmentSection from "@/components/home/commitment-section";
import ContactSection from "@/components/home/contact-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import FAQSection from "@/components/home/faq-section";
import StatsCounter from "@/components/home/stats-counter";
import CTASection from "@/components/home/cta-section";
import MaterialUniverse from "@/components/about/MaterialUniverse";
import BuildingCategories from "@/components/building-categories/BuildingCategories";
import FeaturedArticle from "@/components/blog/FeaturedArticle";


export default function Home() {
  const [activeCategory, setActiveCategory] =
      useState("All Articles");

  return (
    <main>
      <HeroSection />
      <IntroSection />
      <StatsCounter />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
      <FAQSection />
      <BuildingCategories />
      <TestimonialsSection />
      <FeaturedArticle />
    </main>
  );
}