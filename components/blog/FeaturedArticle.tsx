import Image from "next/image";
import Link from "next/link";
import { getFeaturedArticle } from "@/lib/blog";

export default function FeaturedArticle() {
  const article = getFeaturedArticle();

  if (!article) return null;

  return (
    <section className="bg-[#f7f5f0] px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Section label */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-9 bg-[#bd9143]" />

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd9143]">
            Editor's Pick
          </span>
        </div>

        {/* Featured article */}
        <article className="grid overflow-hidden border border-[#172b3a]/10 bg-white lg:grid-cols-2">

          {/* Image */}
          <Link
            href={`/blog/${article.slug}`}
            className="group relative block min-h-[260px] overflow-hidden sm:min-h-[350px] lg:min-h-[420px]"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#172b3a]/40 to-transparent" />

            <span className="absolute font-serif bottom-5 left-5 bg-[#bd9143] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#172b3a]">
              Featured Story
            </span>
          </Link>

          {/* Content */}
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-[#172b3a]/50">
              <span>{article.category}</span>

              <span className="h-1 w-1 rounded-full bg-[#bd9143]" />

              <span>{article.date}</span>

              <span className="h-1 w-1 rounded-full bg-[#bd9143]" />

              <span>{article.readTime}</span>
            </div>

            <h2 className="max-w-xl font-serif text-2xl font-semibold leading-tight tracking-tight text-[#172b3a] smtext-3xl lg:text-[37px]">
              {article.title}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#172b3a]/65 sm:text-base">
              {article.description}
            </p>

            <div className="mt-8">
              <Link
                href={`/blog/${article.slug}`}
                className="inline-flex items-center gap-3 px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-300 bg-[#bd9143] text-[#172b3a]"
              >
                Explore This Story

                <span className="text-lg">→</span>
              </Link>
            </div>

            <div className="mt-9 border-t border-[#172b3a]/10 pt-5">
              <span className="text-xs font-medium text-[#172b3a]/50">
                By {article.author}
              </span>
            </div>

          </div>
        </article>

      </div>
    </section>
  );
}