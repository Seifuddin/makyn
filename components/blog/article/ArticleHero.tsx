
import Image from "next/image";
import Link from "next/link";

type ArticleHeroProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  author?: string;
  date: string;
  readTime: string;
};

export default function ArticleHero({
  title,
  category,
  description,
  image,
  author = "Makyn Construction",
  date,
  readTime,
}: ArticleHeroProps) {
  return (
    <section className="bg-[#f7f5f0]">

      {/* Article Introduction */}
      <div className="mx-auto max-w-5xl px-6 pb-10 pt-14 md:px-10 md:pt-20">

        {/* Breadcrumb */}
        <div className="mb-9 flex flex-wrap items-center gap-2 text-xs text-[#172b3a]/50">
          <Link href="/" className="transition hover:text-[#bd9143]">
            Home
          </Link>

          <span>/</span>

          <Link href="/blog" className="transition hover:text-[#bd9143]">
            Journal
          </Link>

          <span>/</span>

          <span className="text-[#172b3a]">{category}</span>
        </div>

        {/* Category */}
        <span className="inline-block border-l-2 border-[#bd9143] pl-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#bd9143]">
          {category}
        </span>

        {/* Title */}
        <h1 className="mt-6 font-serif max-w-4xl text-3xl font-bold leading-tight tracking-tight text-[#172b3a] sm:text-4xl md:text-5xl lg:text-[58px]">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#172b3a]/65 md:text-lg">
          {description}
        </p>

        {/* Article Metadata */}
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#172b3a]/15 pt-6">

          <div>
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#172b3a]/40">
              Published by
            </span>

            <span className="mt-1 block text-sm font-semibold text-[#172b3a]">
              {author}
            </span>
          </div>

          <div>
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#172b3a]/40">
              Publication date
            </span>

            <span className="mt-1 block text-sm font-semibold text-[#172b3a]">
              {date}
            </span>
          </div>

          <div>
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#172b3a]/40">
              Reading time
            </span>

            <span className="mt-1 block text-sm font-semibold text-[#172b3a]">
              {readTime}
            </span>
          </div>

        </div>
      </div>

      {/* Featured Image */}
      <div className="mx-auto max-w-7xl px-6 pb-12 md:px-10 lg:px-16">

        <div className="relative aspect-[16/9] overflow-hidden bg-[#172b3a]/10 md:aspect-[2/1]">

          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

        </div>

      </div>

      {/* Gold Accent */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="h-px w-full bg-[#172b3a]/10">
          <div className="h-px w-24 bg-[#bd9143]" />
        </div>
      </div>

    </section>
  );
}
