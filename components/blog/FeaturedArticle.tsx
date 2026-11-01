
import Image from "next/image";
import Link from "next/link";

export default function FeaturedArticle() {
  return (
    <section className="bg-[#f7f5f0] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 flex items-end justify-between border-b border-[#172b3a]/15 pb-5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#bd9143]">
              Editor's Pick
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#172b3a] md:text-3xl">
              Featured Story
            </h2>
          </div>

          <span className="hidden text-sm text-[#172b3a]/50 sm:block">
            01 / Featured Article
          </span>
        </div>

        {/* Featured Layout */}
        <article className="grid overflow-hidden border border-[#172b3a]/10 bg-white md:grid-cols-2">

          {/* Image */}
          <Link
            href="/blog/building-mistakes-to-avoid"
            className="group relative min-h-[280px] overflow-hidden md:min-h-[420px]"
            aria-label="Read featured construction article"
          >
            <Image
              src="/images/services/buildingconstruction.webp"
              alt="Modern construction project"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#172b3a]/40 to-transparent" />

            <span className="absolute bottom-6 left-6 bg-[#bd9143] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#172b3a]">
              Construction Knowledge
            </span>
          </Link>

          {/* Article Information */}
          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14">

            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-[#172b3a]/50">
              <span>Featured Article</span>
              <span className="h-1 w-1 rounded-full bg-[#bd9143]" />
              <span>8 min read</span>
            </div>

            <h3 className="text-2xl font-bold leading-snug tracking-tight text-[#172b3a] md:text-3xl lg:text-4xl">
              10 Common Construction Mistakes to Avoid When Building Your Home
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#172b3a]/65 md:text-base">
              Building a home is a major investment. Discover
              common mistakes that can affect construction
              quality, project timelines and your overall
              budget, and learn how proper planning can help
              you avoid them.
            </p>

            <div className="mt-7 flex items-center justify-between border-t border-[#172b3a]/10 pt-6">

              <div>
                <p className="text-xs font-semibold text-[#172b3a]">
                  Makyn Construction
                </p>
                <p className="mt-1 text-xs text-[#172b3a]/45">
                  Construction Insights
                </p>
              </div>

              <Link
                href="/blog/building-mistakes-to-avoid"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#bd9143] transition hover:gap-4"
              >
                Read Article
                <span aria-hidden="true">→</span>
              </Link>

            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
