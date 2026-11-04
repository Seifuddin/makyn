
"use client";

import { useState } from "react";
import { blogCategories } from "@/lib/blog";

const categories = [
  "All Articles",
  ...blogCategories,
];

type BlogCategoriesProps = {
  onCategoryChange?: (category: string) => void;
};

export default function BlogCategories({
  onCategoryChange,
}: BlogCategoriesProps) {
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <section className="bg-[#f7f5f0] px-6 pt-8 pb-4 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-5 border-b border-[#172b3a]/15 pb-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Heading */}
          <div className="shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bd9143]">
              Browse Topics
            </span>
            <h2 className="mt-1 text-lg font-bold text-[#172b3a]">
              Explore Our Journal
            </h2>
          </div>

          {/* Category Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  aria-pressed={isActive}
                  className={`shrink-0 border px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "border-[#172b3a] bg-[#172b3a] text-white"
                      : "border-[#172b3a]/15 bg-transparent text-[#172b3a]/65 hover:border-[#bd9143] hover:text-[#172b3a]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
