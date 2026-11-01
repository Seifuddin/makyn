
import Link from "next/link";

export default function BlogKnowledge() {
  return (
    <section className="bg-[#f7f5f0] px-6 py-10 md:px-10 lg:px-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#172b3a]">

        {/* Decorative Elements */}
        <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -right-4 -top-12 h-48 w-48 rounded-full border border-[#bd9143]/20" />

        <div className="relative flex flex-col justify-between gap-8 px-7 py-12 sm:px-10 md:flex-row md:items-center md:px-14 md:py-14">

          {/* Content */}
          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#bd9143]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d5b16b]">
                Knowledge Builds Confidence
              </span>
            </div>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
              Every Great Structure
              <span className="block text-[#d5b16b]">
                Begins With Knowledge.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 md:text-base">
              Explore practical construction guides, expert
              insights and useful ideas to help you make
              informed decisions at every stage of your
              building journey.
            </p>

          </div>

          {/* Action */}
          <div className="shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-4 border border-[#bd9143] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#d5b16b] transition-all duration-300 hover:bg-[#bd9143] hover:text-[#172b3a]"
            >
              Explore The Journal
              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>

        {/* Gold Accent */}
        <div className="absolute bottom-0 left-0 h-1 w-28 bg-[#bd9143]" />

      </div>
    </section>
  );
}
