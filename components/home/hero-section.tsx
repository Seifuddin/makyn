
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/ui/arrow-icon";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden bg-[#172b3a] text-[#f7f5f0]"
    >
      {/* Background image */}
      <Image
        src="/images/services/buildingconstruction.webp"
        alt="Makyn construction and building development"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Cinematic navy overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0 bg-gradient-to-r from-[#101f2b]/95 via-[#172b3a]/80 to-[#172b3a]/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0 bg-gradient-to-t from-[#101f2b]/80 via-transparent to-[#101f2b]/20"
      />

      {/* Hero content */}
      <div className="relative mx-auto flex min-h-[480px] w-full max-w-7xl flex-col justify-between px-5 pb-5 pt-24 sm:min-h-[500px] sm:px-8 sm:pb-7 lg:min-h-[530px] lg:px-12">
        <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d5b16b] sm:text-[10px]">
          <span className="h-px w-7 bg-[#d5b16b]" />
          Built on trust. Defined by quality.
        </div>

        <div className="max-w-4xl py-9 sm:py-11">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white/65 sm:text-xs">
            Your trusted construction partner
          </p>

          <h1 className="text-5xl font-medium leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            We build
            <span className="mt-2 block font-light italic text-[#d5b16b]">
              what matters.
            </span>
          </h1>

          <div className="mt-5 flex flex-col gap-6 sm:mt-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-lg text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              From the first foundation to the final finish, we bring your
              construction vision to life with care, precision and purpose.
            </p>

            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 bg-[#bd9143] px-5 py-3 text-xs font-semibold text-[#172b3a] transition-colors hover:bg-[#d5b16b] sm:text-sm"
              >
                Start Your Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>

              <Link
                href="#projects"
                className="inline-flex items-center justify-center border border-white/35 px-5 py-3 text-xs font-semibold text-white transition-colors hover:border-[#d5b16b] hover:text-[#d5b16b] sm:text-sm"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom information strip */}
        <div className="flex items-center justify-between gap-4 border-t border-white/20 pt-4">
          <span className="text-[8px] font-medium uppercase tracking-[0.14em] text-white/60 sm:text-[10px] sm:tracking-[0.18em]">
            Planning <span className="px-1 text-[#d5b16b]">/</span> Design
            <span className="px-1 text-[#d5b16b]">/</span> Construction
          </span>

          <Link
            href="#about"
            className="group inline-flex shrink-0 items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/80 transition-colors hover:text-[#d5b16b] sm:text-[10px]"
          >
            Discover Makyn
            <span className="text-[#d5b16b] transition-transform group-hover:translate-y-1">
              ↓
            </span>
          </Link>
        </div>

        {/* Architectural index */}
        <span
          aria-hidden="true"
          className="absolute right-5 top-1/2 hidden -translate-y-1/2 text-[10px] font-medium tracking-[0.25em] text-white/45 [writing-mode:vertical-rl] lg:block"
        >
          MAKYN / 001
        </span>
      </div>
    </section>
  );
}
