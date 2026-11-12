
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f5f0]">
      <div className="relative mx-auto min-h-[560px] max-w-[1600px] lg:min-h-[590px]">

        {/* Architectural image */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[59%]">
          <div className="absolute inset-0 lg:[clip-path:polygon(13%_0,100%_0,100%_100%,0_100%)]">
            <Image
              src="/images/services/buildingconstruction.webp"
              alt="Modern architectural construction"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 59vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#101f2b]/35 lg:bg-gradient-to-r lg:from-[#101f2b]/45 lg:via-transparent lg:to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[560px] items-center px-6 py-20 sm:px-10 lg:min-h-[590px] lg:px-16 xl:px-24">

          <div className="max-w-[650px] lg:w-[54%]">

            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#c99a45]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c99a45]">
                MAKYN CONSTRUCTION COMPANY
              </span>
            </div>

            <h1 className="font-serif text-[48px] font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-[70px]">
              Spaces that
              <br />
              inspire.
              <br />
              <span className="text-[#b58a40] font-normal italic">
                Structures that last.
              </span>
            </h1>

            <p className="mt-7 max-w-[420px] text-sm leading-7 text-white sm:text-base">
              Thoughtful design. Expert craftsmanship.
              Lasting construction solutions built around
              your vision.
            </p>

            
<div className="mt-9 flex flex-wrap items-center gap-4">
  <Link
    href="/contact"
    className="group inline-flex min-h-[52px] items-center justify-center gap-5 bg-[#c99a45] px-6 py-3 text-sm font-semibold text-[#172b3a] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dfba77] hover:shadow-md"
  >
    Start a project
    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
      ↗
    </span>
  </Link>

  <Link
    href="/projects"
    className="group inline-flex min-h-[52px] items-center justify-center gap-4 border border-[#172b3a]/30 bg-[#f7f5f0]/80 px-6 py-3 text-sm font-semibold text-[#172b3a] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#172b3a] hover:bg-[#172b3a] hover:text-white"
  >
    Explore our work
    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>

          </div>
        </div>

        {/* Image caption */}
        <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 lg:flex">
          <span className="h-px w-9 bg-[#dfba77]" />
          <span className="text-[9px] uppercase tracking-[0.24em] text-white">
            Built with purpose
          </span>
        </div>

        {/* Gold architectural detail */}
        <div className="absolute bottom-0 left-0 h-[3px] w-28 bg-[#c99a45]" />
      </div>
    </section>
  );
}
