
"use client";

import { useState } from "react";

import BlogHero from "@/components/blog/BlogHero";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import BlogCategories from "@/components/blog/BlogCategories";
import LatestArticles from "@/components/blog/LatestArticles";
import BlogKnowledge from "@/components/blog/BlogKnowledge";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] =
    useState("All Articles");

  return (
    <main className="min-h-screen bg-[#f7f5f0]">

      <BlogHero />

      <FeaturedArticle />

      <BlogCategories
        onCategoryChange={setActiveCategory}
      />

      <LatestArticles
        activeCategory={activeCategory}
      />

    


    </main>
  );
}
