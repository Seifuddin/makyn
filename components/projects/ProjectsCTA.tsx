
import Link from "next/link";

export default function ProjectsCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#172B3A] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      {/* Subtle architectural line details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 size-80 rounded-full border border-white/[0.07] sm:size-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-12 size-64 rounded-full border border-[#D5B16B]/15 sm:size-96"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D5B16B]" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5B16B]">
              Let's Build Something Meaningful
            </p>
          </div>

          <h2 className="text-3xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your vision deserves
            <span className="block font-light text-[#D5B16B]">
              the right partner.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            Have a construction project in mind? Let's discuss your
            requirements and explore how Makyn Construction can help
            bring your plans to life.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:flex-row lg:flex-col lg:items-stretch">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-5 border border-[#D5B16B] bg-[#BD9143] px-6 py-3 text-sm font-semibold text-[#172B3A] transition duration-300 hover:bg-[#D5B16B]"
          >
            Discuss Your Project
            <span aria-hidden="true">↗</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex min-h-12 items-center justify-center gap-5 border border-white/25 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-[#D5B16B] hover:text-[#D5B16B]"
          >
            Explore Our Services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="relative mx-auto mt-14 max-w-7xl border-t border-white/15 pt-5">
        <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
          MAKYN CONSTRUCTION COMPANY LIMITED
        </p>
      </div>
    </section>
  );
}
