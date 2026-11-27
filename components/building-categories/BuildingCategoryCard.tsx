
import Image from "next/image";
import Link from "next/link";

interface BuildingCategoryCardProps {
  slug: string;
  number: string;
  title: string;
  description: string;
  image: string;
  examples: string[];
  size?: "large" | "normal";
}

export default function BuildingCategoryCard({
  slug,
  number,
  title,
  image,
  examples,
  size = "normal",
}: BuildingCategoryCardProps) {
  const isLarge = size === "large";

  return (
    <Link
      href={`/projects/${slug}`}
      className={`group relative rounded-md isolate block h-[190px] overflow-hidden bg-[#172b3a] sm:h-[210px] md:h-[225px] ${
        isLarge ? "lg:h-[245px]" : "lg:h-[225px]"
      }`}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101f2b] via-[#172b3a]/45 to-[#172b3a]/10" />

      {/* Hover Border */}
      <div className="absolute inset-0 border border-white/15 transition-colors duration-300 group-hover:border-[#d5b16b]/70" />

      {/* Card Content */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5">

        {/* Category Number */}
        <div className="mb-1.5 flex items-center gap-2">
          <span className="h-px w-5 bg-[#d5b16b]" />
          <span className="text-[9px] font-semibold tracking-[0.18em] text-[#d5b16b]">
            {number}
          </span>
        </div>

        {/* Category Title */}
        <h3 className="mb-1 line-clamp-2 font-serif text-[15px] leading-tight font-semibold text-white sm:text-lg">
          {title}
        </h3>

        {/* Examples */}
        <p className="line-clamp-1 text-[10px] leading-relaxed text-white/65 sm:text-[11px]">
          {examples.join(" · ")}
        </p>

        {/* Explore Link */}
        <div className="mt-2 flex items-center justify-between border-t border-white/20 pt-2">
          <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-[#d5b16b] sm:text-[9px]">
            Explore Category
          </span>

          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/35 text-xs text-white transition-all duration-300 group-hover:border-[#d5b16b] group-hover:bg-[#bd9143]">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
