
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f5f0]">
      <div className="relative mx-auto min-h-[560px] max-w-[1600px] lg:min-h-[590px]">
        {/* Architectural image */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[59%]">
          <Image
            src="/images/hero.jpg"
            alt="Makyn Construction building project"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 59vw"
            className="object-cover object-center"
          />

          {/* Image overlay — subtle, preserving the photograph */}
          <div className="absolute inset-0 bg-[#101f2b]/35" />

          {/* Soft transition along the left edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#101f2b]/55 via-[#101f2b]/15 to-transparent lg:from-[#101f2b]/35 lg:via-transparent" />

          <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-white/90 sm:flex">
            <span className="h-px w-10 bg-[#dfba77]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
              Built with purpose
            </span>
          </div>
        </div>

        {/* Original angled image edge */}
        <div
          className="absolute inset-y-0 right-0 z-[1] hidden w-[59%] bg-[#f7f5f0] lg:block"
          style={{
            clipPath: "polygon(0 0, 13% 0, 0 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex min-h-[560px] items-center lg:min-h-[590px]">
          <div className="w-full px-6 py-16 sm:px-10 lg:w-[48%] lg:px-16 lg:py-20">
            <div className="max-w-[510px]">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#c99a45]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a8792e]">
                  MAKYN CONSTRUCTION COMPANY
                </p>
              </div>

              <h1 className="font-serif font-semibold text-[clamp(2.7rem,5vw,4.8rem)] leading-[1.04] tracking-[-0.045em] text-white lg:text-[#172b3a]">
                Spaces that inspire.
                <span className="mt-2 block font-normal italic text-[#bd9143]">
                  Structures that last.
                </span>
              </h1>

              <p className="mt-7 max-w-[420px] text-sm leading-7 text-white lg:text-[#53616a] sm:text-base">
                From thoughtful designs to exceptional construction, we bring
                your vision to life with quality, precision and lasting value.
              </p>

              {/* Buttons remain side by side, including on mobile */}
              <div className="mt-9 flex flex-row items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 whitespace-nowrap bg-[#c99a45] px-3 text-[11px] font-semibold text-[#172b3a] transition-colors duration-300 hover:bg-[#dfba77] sm:flex-none sm:px-6 sm:text-xs"
                >
                  Start a Project
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 whitespace-nowrap border border-[#172b3a]/30 bg-[#f7f5f0]/90 px-3 text-[11px] font-semibold text-[#172b3a] transition-all duration-300 hover:border-[#c99a45] hover:bg-white sm:flex-none sm:px-6 sm:text-xs"
                >
                  Explore Projects
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <span className="h-px w-12 bg-[#c99a45]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white lg:text-[#778087]">
                  Building with purpose. Delivering with excellence.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gold architectural detail */}
        <div className="absolute bottom-0 left-0 z-20 h-[3px] w-28 bg-[#c99a45]" />
      </div>
    </section>
  );
}
