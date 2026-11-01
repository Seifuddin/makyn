
import Link from "next/link";

export default function ArticleCTA() {
  return (
    <section className="relative overflow-hidden bg-[#172b3a]">

      {/* Decorative Circles */}
      <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/10" />

      <div className="absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#bd9143]/20" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-12 md:flex-row md:items-center md:px-10 md:py-14 lg:px-16">

        {/* Content */}
        <div className="max-w-2xl">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#bd9143]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d5b16b]">
              Your Vision. Our Expertise.
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Ready to Bring Your
            <span className="block text-[#d5b16b]">
              Building Ideas to Life?
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
            Whether you're planning a new construction
            project, renovation or improvement, Makyn
            Construction is ready to help you take the
            next step.
          </p>

        </div>

        {/* Action */}
        <div className="flex shrink-0 flex-wrap gap-4">

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#bd9143] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#172b3a] transition hover:bg-[#d5b16b]"
          >
            Discuss Your Project
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center border border-white/25 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:border-[#bd9143] hover:text-[#d5b16b]"
          >
            Our Services
          </Link>

        </div>

      </div>

      <div className="absolute bottom-0 left-0 h-1 w-28 bg-[#bd9143]" />

    </section>
  );
}
