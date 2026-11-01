
"use client";

import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "Understanding the Different Stages of Building Construction",
    slug: "stages-of-building-construction",
    category: "Construction Knowledge",
    description:
      "Explore the essential stages involved in transforming a construction plan into a completed building.",
    image: "/images/services/buildingconstruction.webp",
    date: "Construction Guide",
    readTime: "7 min read",
  },
  {
    title: "How to Choose the Right Roofing Materials for Your Home",
    slug: "choosing-roofing-materials",
    category: "Home Improvement",
    description:
      "Discover important factors to consider when selecting durable and suitable roofing materials.",
    image: "/images/services/roofing.jpg",
    date: "Home Improvement",
    readTime: "6 min read",
  },
  {
    title: "Modern Architectural Designs: Ideas for Contemporary Homes",
    slug: "modern-architectural-designs",
    category: "Architecture & Design",
    description:
      "Discover architectural ideas that combine functionality, elegance and modern living.",
    image: "/images/about.avif",
    date: "Design Insights",
    readTime: "8 min read",
  },
  {
    title: "Planning a Home Renovation: Where Should You Start?",
    slug: "planning-home-renovation",
    category: "Home Improvement",
    description:
      "Learn how to approach a renovation project through proper planning, budgeting and material selection.",
    image: "/images/services/renovations.webp",
    date: "Renovation Guide",
    readTime: "6 min read",
  },
  {
    title: "What Determines the Cost of Building a House in Kenya?",
    slug: "construction-costs-in-kenya",
    category: "Building Costs & Planning",
    description:
      "Understand the major factors influencing construction budgets, from design to finishing.",
    image: "/images/services/ConstructionSolutions.jpg",
    date: "Planning Guide",
    readTime: "9 min read",
  },
  {
    title: "Why Quality Masonry Matters in Building Construction",
    slug: "importance-of-quality-masonry",
    category: "Industry Insights",
    description:
      "Explore how proper masonry workmanship contributes to structural quality and long-term durability.",
    image: "/images/services/masonry.jpg",
    date: "Industry Insights",
    readTime: "5 min read",
  },
];

type LatestArticlesProps = {
  activeCategory?: string;
};

export default function LatestArticles({
  activeCategory = "All Articles",
}: LatestArticlesProps) {
  const filteredArticles =
    activeCategory === "All Articles"
      ? articles
      : articles.filter(
          (article) => article.category === activeCategory
        );

  return (
    <section
      id="latest-articles"
      className="bg-[#f7f5f0] px-6 py-14 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4 border-b border-[#172b3a]/15 pb-5">

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bd9143]">
              Knowledge & Inspiration
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#172b3a] md:text-3xl">
              Latest Articles
            </h2>

            <p className="mt-2 text-sm text-[#172b3a]/55">
              Insights and ideas from the world of construction.
            </p>
          </div>

          <span className="text-xs font-semibold text-[#172b3a]/50">
            {filteredArticles.length} Articles
          </span>

        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">

            {filteredArticles.map((article, index) => (
              <article
                key={article.slug}
                className="group flex flex-col"
              >

                {/* Article Image */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="relative mb-5 block aspect-[4/3] overflow-hidden bg-[#172b3a]/10"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 bg-[#172b3a] px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-white">
                    {article.category}
                  </span>
                </Link>

                {/* Article Information */}
                <div className="flex flex-1 flex-col">

                  <div className="mb-3 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-[#172b3a]/45">
                    <span>{article.date}</span>
                    <span className="h-1 w-1 rounded-full bg-[#bd9143]" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold leading-snug text-[#172b3a] transition-colors duration-300 group-hover:text-[#bd9143]">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#172b3a]/60">
                    {article.description}
                  </p>

                  <div className="mt-5 border-t border-[#172b3a]/10 pt-4">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#172b3a] transition-all duration-300 group-hover:gap-4 group-hover:text-[#bd9143]"
                    >
                      Read Article
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>

                </div>
              </article>
            ))}

          </div>
        ) : (
          <div className="border border-dashed border-[#172b3a]/20 py-16 text-center">
            <p className="text-sm font-medium text-[#172b3a]/60">
              No articles found in this category yet.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
