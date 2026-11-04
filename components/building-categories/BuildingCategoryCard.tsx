
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
  description,
  image,
  examples,
  size = "normal",
}: BuildingCategoryCardProps) {
  const isLarge = size === "large";

  return (
    <Link
      href={`/projects/${slug}`}
      className={`group relative isolate block h-full min-h-[280px] overflow-hidden bg-[#172b3a] ${
  isLarge ? "min-h-[320px]" : "min-h-[280px]"
}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#101f2b] via-[#172b3a]/45 to-transparent" />

      <div className="absolute inset-0 border border-white/10 transition-colors duration-300 group-hover:border-[#d5b16b]/70" />

      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-[#d5b16b]" />
          <span className="text-xs font-semibold tracking-[0.2em] text-[#d5b16b]">
            {number}
          </span>
        </div>

        <h3 className="mb-1 text-xl font-semibold text-white sm:text-2xl">
          {title}
        </h3>

        <p className="hidden mb-2 max-w-lg text-sm leading-relaxed text-white/75">
          {description}
        </p>

        <p className="text-xs leading-relaxed text-white/55">
          {examples.join(" · ")}
        </p>

        <div className="mt-1 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d5b16b]">
            Explore category
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:border-[#d5b16b] group-hover:bg-[#bd9143]">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
