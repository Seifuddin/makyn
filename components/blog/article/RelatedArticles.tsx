
import Image from "next/image";
import Link from "next/link";

type RelatedArticle = {
  title: string;
  slug: string;
  category: string;
  image: string;
  readTime: string;
};

type RelatedArticlesProps = {
  articles: RelatedArticle[];
};

export default function RelatedArticles({
  articles,
}: RelatedArticlesProps) {
  return (
    <section className="bg-[#f7f5f0] py-14">

      <div className="mb-8 flex items-end justify-between border-b border-[#172b3a]/15 pb-5">

        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bd9143]">
            Continue Exploring
          </span>

          <h2 className="mt-2 font-serif text-2xl font-bold text-[#172b3a] md:text-3xl">
            Related Articles
          </h2>
        </div>

        <Link
          href="/blog"
          className="hidden text-xs font-bold uppercase tracking-wider text-[#172b3a] transition hover:text-[#bd9143] sm:block"
        >
          View All Articles →
        </Link>

      </div>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {articles.slice(0, 3).map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col"
            >

              {/* Image */}
              <Link
                href={`/blog/${article.slug}`}
                className="relative mb-4 block aspect-[4/3] overflow-hidden bg-[#172b3a]/10"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute bottom-3 left-3 bg-[#172b3a] px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-white">
                  {article.category}
                </span>
              </Link>

              {/* Content */}
              <div className="flex flex-1 flex-col">

                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#172b3a]/45">
                  {article.readTime}
                </span>

                <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-[#172b3a] transition-colors group-hover:text-[#bd9143]">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <div className="mt-5 border-t border-[#172b3a]/10 pt-4">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#172b3a] transition-all group-hover:gap-4 group-hover:text-[#bd9143]"
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
        <p className="py-8 text-sm text-[#172b3a]/55">
          More articles are coming soon.
        </p>
      )}

      <div className="mt-7 sm:hidden">
        <Link
          href="/blog"
          className="text-xs font-bold uppercase tracking-wider text-[#172b3a] hover:text-[#bd9143]"
        >
          View All Articles →
        </Link>
      </div>

    </section>
  );
}
