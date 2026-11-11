"use client";

import Image from "next/image";
import Link from "next/link";
import { blogArticles } from "@/lib/blog";

type LatestArticlesProps = {
  activeCategory?: string;
};

export default function LatestArticles({
  activeCategory = "All Articles",
}: LatestArticlesProps) {
  const filteredArticles =
    activeCategory === "All Articles"
      ? blogArticles
      : blogArticles.filter(
          (article) => article.category === activeCategory
        );

  return (
    <section
      id="latest-articles"
      className="bg-[#f7f5f0] px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-9 flex flex-col justify-between gap-4 border-b border-[#172b3a]/15 pb-5 sm:flex-row sm:items-end">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-[#bd9143]">
              Explore our journal
            </span>

            <h2 className="text-3xl font-serif font-semibold tracking-tight text-[#172b3a] sm:text-4xl">
              Latest Articles
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#172b3a]/65">
              Insights, practical guidance and ideas to help you
              make better construction and property decisions.
            </p>
          </div>

          <span className="text-sm font-medium text-[#172b3a]/55">
            {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "Article" : "Articles"}
          </span>
        </div>

        {/* Articles grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col overflow-hidden border border-[#172b3a]/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#172b3a]/10"
              >
                {/* Image */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 bg-[#172b3a] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {article.category}
                  </span>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  <div className="mb-3 flex flex-wrap items-center gap-3 text-[11px] font-medium text-[#172b3a]/50">
                    <span>{article.date}</span>
                    <span className="h-1 w-1 rounded-full bg-[#bd9143]" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-serif font-semibold leading-snug text-[#172b3a] transition-colors group-hover:text-[#bd9143]">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-[#172b3a]/65">
                    {article.description}
                  </p>

                  <div className="mt-5 border-t border-[#172b3a]/10 pt-4">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#172b3a] transition-colors hover:text-[#bd9143]"
                    >
                      Read Article
                      <span className="text-lg transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>

                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-[#172b3a]/20 px-6 py-14 text-center">
            <h3 className="text-lg font-semibold text-[#172b3a]">
              More articles coming soon
            </h3>

            <p className="mt-2 text-sm text-[#172b3a]/60">
              We are preparing more insights for this category.
              Please check back soon.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}