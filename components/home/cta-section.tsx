
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#172b3a] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-10lg:px-16lg:py-14">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Content */}
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#c99a45]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#dfba77]">
                LET'S CREATE SOMETHING LASTING
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[48px]">
              Have something remarkable
              <br className="hidden sm:block" />
              in mind<span className="text-[#dfba77]">?</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Every great structure begins with an idea.
              Whether you're planning a new build, renovation
              or architectural project, we're ready to help
              turn your vision into something extraordinary.
            </p>
          </div>

          {/* CTA Button */}
          <div className="shrink-0 lg:pl-8">
            <Link
              href="/contact"
              className="group inline-flex min-h-[58px] items-center justify-between gap-8 bg-[#c99a45] px-7 text-sm font-semibold text-[#172b3a] shadow-lg shadow-black/10 transition-all duration-300 hover:bg-[#dfba77] hover:shadow-xl"
            >
              <span>Start Your Project</span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#172b3a]/25 text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#172b3a] group-hover:text-white">
                ↗
              </span>
            </Link>

            <p className="mt-3 text-right text-[10px] tracking-wide text-white/40">
              Let's bring your vision to life.
            </p>
          </div>
        </div>

        {/* Subtle finishing detail */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-[#c99a45]/60 via-white/10 to-transparent" />

      </div>
    </section>
  );
}
