
import Image from "next/image";
import Link from "next/link";

export default function ProjectsHero() {
  return (
    <section className="relative isolate flex min-h-[440px] items-end overflow-hidden bg-[#172B3A] sm:min-h-[500px] lg:min-h-[560px]">
      <Image
        src="/images/projects/buildingconstruction.webp"
        alt="Makyn Construction architectural portfolio"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#101F2B]/95 via-[#172B3A]/75 to-[#172B3A]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101F2B]/65 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D5B16B]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D5B16B] sm:text-sm">
              Our Portfolio
            </p>
          </div>

          <h1 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Built with purpose.
            <span className="mt-2 block font-light text-[#D5B16B]">
              Made to last.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            Explore the work, craftsmanship and attention to detail
            behind the projects we undertake at Makyn Construction.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="#featured-projects"
              className="inline-flex min-h-12 items-center gap-4 border border-[#D5B16B] bg-[#BD9143] px-6 py-3 text-sm font-semibold text-[#172B3A] transition duration-300 hover:bg-[#D5B16B]"
            >
              Explore Our Work
              <span aria-hidden="true">↘</span>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-sm font-medium text-white transition hover:text-[#D5B16B]"
            >
              Discuss a Project
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden border-l border-t border-white/20 bg-[#172B3A]/80 px-8 py-5 backdrop-blur-sm sm:block">
        <p className="text-[10px] uppercase tracking-[0.25em] text-white/55">
          Makyn Construction
        </p>
        <p className="mt-1 text-sm text-[#D5B16B]">
          Your trusted construction partner
        </p>
      </div>
    </section>
  );
}
