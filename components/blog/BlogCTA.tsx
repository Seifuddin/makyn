
import Link from "next/link";

export default function BlogCTA() {
  return (
    <section className="bg-[#f7f5f0] px-6 py-12 md:px-10 lg:px-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#172b3a]">

        {/* Decorative Background */}
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-10 -top-20 h-60 w-60 rounded-full border border-[#bd9143]/20" />

        <div className="relative flex flex-col items-start justify-between gap-8 px-7 py-12 sm:px-10 md:flex-row md:items-center md:px-14 md:py-14">

          {/* Content */}
          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#bd9143]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d5b16b]">
                Let's Build Together
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Planning to Build
              <span className="block text-[#d5b16b]">
                Something Great?
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 md:text-base">
              Every successful project starts with the right
              team. Let Makyn Construction help turn your
              vision into a lasting reality through quality
              workmanship and professional expertise.
            </p>

          </div>

          {/* CTA Buttons */}
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row md:flex-col">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-4 bg-[#bd9143] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#172b3a] transition-all duration-300 hover:bg-[#d5b16b]"
            >
              Start Your Project
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-white/25 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-[#bd9143] hover:text-[#d5b16b]"
            >
              Explore Our Services
            </Link>

          </div>

        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-1 w-32 bg-[#bd9143]" />

      </div>
    </section>
  );
}
