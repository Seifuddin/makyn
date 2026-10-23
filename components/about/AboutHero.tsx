
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-[#172B3A] text-white lg:min-h-[760px]">
      {/* Background photography */}
      <Image
        src="/images/services/buildingconstruction.webp"
        alt="Building construction project"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Image overlays */}
      <div className="absolute inset-0 bg-[#101D28]/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#101D28]/95 via-[#101D28]/65 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#172B3A] to-transparent" />

      {/* Decorative vertical line */}
      <div className="absolute bottom-24 right-[12%] top-24 hidden w-px bg-white/20 lg:block" />

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-28 sm:px-10 lg:min-h-[760px] lg:px-16">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#BD9143]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D5B16B] sm:text-sm">
              About Makyn Construction
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Built Through
            <span className="mt-2 block text-[#D5B16B]">
              Vision.
            </span>
            Built to Last.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            We bring ideas to life through thoughtful planning,
            skilled workmanship, and a commitment to building
            spaces that serve people for years to come.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-4 bg-[#BD9143] px-7 py-4 text-sm font-semibold text-[#172B3A] transition hover:bg-[#D5B16B]"
            >
              Discuss Your Project
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="#our-story"
              className="inline-flex min-h-14 items-center justify-center border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Discover Our Story
              <span aria-hidden="true" className="ml-3">
                ↓
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-0 left-0 right-0 hidden border-t border-white/15 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-5 lg:px-16">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            Your Trusted Construction Partner
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            Quality · Integrity · Craftsmanship
          </p>
        </div>
      </div>
    </section>
  );
}
