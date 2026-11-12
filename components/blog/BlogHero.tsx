
import Link from "next/link";
import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-[#172b3a]">

      {/* Background Image */}
      <Image
        src="/images/imageconstruction.jpeg"
        alt="Modern building construction"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-[#102331]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#172b3a] via-[#172b3a]/90 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16">

        <div className="max-w-3xl">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#bd9143]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d5b16b]">
              The Makyn Journal
            </span>
          </div>

          <h1 className="text-4xl font-serif font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ideas That Shape
            <span className="block italic text-[#d5b16b]">
              What We Build.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 md:text-lg">
            Explore construction knowledge, architectural
            inspiration and expert perspectives that help
            you make informed building decisions.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">

            <Link
              href="#latest-articles"
              className="inline-flex items-center gap-3 bg-[#bd9143] px-7 py-4 text-sm font-semibold text-[#172b3a] transition hover:bg-[#d5b16b]"
            >
              Explore Articles
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 whitespace-nowrap border border-[#172b3a]/30 bg-[#f7f5f0]/90 px-3 text-[11px] font-semibold text-[#172b3a] transition-all duration-300 hover:border-[#c99a45] hover:bg-white sm:flex-none sm:px-6 sm:text-xs"
            >
              Discover Our Services
              <span className="ml-2" aria-hidden="true">↗</span>
            </Link>

          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-32 bg-[#bd9143]" />

    </section>
  );
}
