
import Image from "next/image";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-[#F7F5F0] px-4 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden bg-[#172B3A]">
        {/* Background image */}
        <Image
          src="/images/services/buildingconstruction.webp"
          alt="Building project representing the potential of a new construction vision"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-center"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-[#172B3A]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172B3A] via-[#172B3A]/90 to-[#172B3A]/35" />

        {/* Gold accent */}
        <div className="absolute bottom-0 right-0 top-0 hidden w-2 bg-[#BD9143] sm:block" />

        <div className="relative grid gap-12 px-7 py-16 sm:px-12 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:px-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#BD9143]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5B16B]">
                Your Vision. Our Commitment.
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have a Project
              <span className="block font-light italic text-[#D5B16B]">
                in Mind?
              </span>
              Let&apos;s Build It.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              From new construction to renovations and finishing,
              let&apos;s discuss your requirements and explore
              the right solution for your project.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:min-w-[210px] lg:flex-col">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-4 bg-[#BD9143] px-7 py-4 text-sm font-semibold text-[#172B3A] transition hover:bg-[#D5B16B]"
            >
              Start a Conversation
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-14 items-center justify-center border border-white/35 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Footer strip */}
        <div className="relative border-t border-white/15 px-7 py-5 sm:px-12 lg:px-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 sm:text-xs">
            Makyn Construction Company Limited
            <span className="mx-3 text-[#BD9143]">/</span>
            Your Trusted Construction Partner
          </p>
        </div>
      </div>
    </section>
  );
}
