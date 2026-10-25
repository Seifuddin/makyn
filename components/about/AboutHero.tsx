
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#172b3a] text-[#f7f5f0]">
      {/* Background image */}
      <Image
        src="/images/services/buildingconstruction.webp"
        alt="Contemporary construction and architectural design"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Image overlays */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#101f2b]/95 via-[#172b3a]/80 to-[#172b3a]/35" />

      <div className="absolute inset-0 -z-0 bg-gradient-to-t from-[#101f2b]/75 via-transparent to-[#101f2b]/25" />

      {/* Main content */}
      <div className="relative mx-auto flex min-h-[440px] w-full max-w-7xl flex-col justify-between px-5 pb-5 pt-20 sm:min-h-[470px] sm:px-8 sm:pb-7 sm:pt-24 lg:min-h-[490px] lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.2em] sm:text-[10px]">
          <span className="h-px w-6 bg-[#d5b16b]" />
          <span className="text-[#d5b16b]">About Makyn</span>
          <span className="text-white/40">/</span>
          <span className="text-white/65">Our Story</span>
        </div>

        {/* Hero text */}
        <div className="max-w-4xl py-10 sm:py-12">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#d5b16b] sm:text-xs">
            Your trusted construction partner
          </p>

          <h1 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Built on vision.
            <span className="mt-1 block font-light italic text-[#d5b16b]">
              Defined by integrity.
            </span>
          </h1>

          <div className="mt-5 flex flex-col gap-5 sm:mt-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-lg text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              We turn ideas into lasting spaces through thoughtful planning,
              quality workmanship, and dependable construction solutions.
            </p>

            <Link
              href="#our-story"
              className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-[#d5b16b]/60 pb-2 text-xs font-semibold text-white transition-colors hover:border-[#d5b16b] hover:text-[#d5b16b] sm:text-sm"
            >
              Discover our story
              <span className="text-base text-[#d5b16b] transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom information strip */}
        <div className="flex items-center justify-between gap-4 border-t border-white/20 pt-4">
          <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/65 sm:text-[10px] sm:tracking-[0.2em]">
            Planning <span className="px-1 text-[#d5b16b]">·</span>
            Design <span className="px-1 text-[#d5b16b]">·</span>
            Construction
          </span>

          <span className="shrink-0 text-[9px] font-medium uppercase tracking-[0.16em] text-[#d5b16b] sm:text-[10px]">
            About us <span className="ml-2 text-white/60">01 / 04</span>
          </span>
        </div>
      </div>
    </section>
  );
}
