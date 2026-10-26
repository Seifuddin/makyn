
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/ui/arrow-icon";

const benefits = [
  { number: "01", label: "Quality Workmanship" },
  { number: "02", label: "Reliable Partnership" },
  { number: "03", label: "Lasting Results" },
];

export default function ServicesHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#172b3a] text-[#f7f5f0]">
      {/* Full-width background image */}
      <Image
        src="/images/services/buildingconstruction.webp"
        alt="Makyn construction and building development"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      {/* Same cinematic navy treatment as the homepage */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101f2b]/95 via-[#172b3a]/80 to-[#172b3a]/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101f2b]/85 via-[#172b3a]/10 to-[#101f2b]/30"
      />

      {/* Hero content */}
      <div className="relative mx-auto flex min-h-[420px] w-full max-w-7xl flex-col justify-between px-5 pb-5 pt-20 sm:min-h-[450px] sm:px-8 sm:pb-6 lg:min-h-[470px] lg:px-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d5b16b] sm:text-xs">
          <span className="h-px w-9 bg-[#d5b16b]" />
          Our Services
        </div>

        {/* Main heading and CTA */}
        <div className="max-w-5xl py-8 sm:py-10">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-xs">
            Your trusted construction partner
          </p>

          <h1 className="max-w-5xl text-4xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5rem]">
            Comprehensive
            <span className="mt-2 block font-light italic text-[#d5b16b]">
              Construction Services.
            </span>
          </h1>

          <div className="mt-5 flex flex-col gap-5 sm:mt-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              From foundations to finishing touches, we deliver
              construction solutions shaped around your vision, your
              needs, and the quality your project deserves.
            </p>

            <Link
              href="#service-list"
              className="group inline-flex w-fit shrink-0 items-center gap-3 bg-[#bd9143] px-5 py-3.5 text-sm font-semibold text-[#172b3a] transition-colors duration-300 hover:bg-[#d5b16b]"
            >
              Explore Our Services
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom information strip */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/20 pt-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7">
            {benefits.map((benefit) => (
              <div key={benefit.number} className="flex items-center gap-2">
                <span className="text-[9px] font-semibold text-[#d5b16b] sm:text-[10px]">
                  {benefit.number}
                </span>
                <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-white/75 sm:text-[10px] sm:tracking-[0.14em]">
                  {benefit.label}
                </span>
              </div>
            ))}
          </div>

          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-white/40 md:block">
            MAKYN / SERVICES
          </span>
        </div>
      </div>

      {/* Gold bottom edge */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[3px] w-full bg-[#bd9143]"
      />
    </section>
  );
}
