
import Image from "next/image";
import ArrowIcon from "@/components/ui/arrow-icon";

const strengths = [
  {
    number: "01",
    title: "Quality first",
    description: "Care in every detail.",
  },
  {
    number: "02",
    title: "Built on trust",
    description: "Honest, clear communication.",
  },
  {
    number: "03",
    title: "Made to last",
    description: "Workmanship with purpose.",
  },
];

export default function IntroSection() {
  return (
    <section
      id="about"
      aria-labelledby="intro-heading"
      className="relative overflow-hidden bg-[#f7f5f0] px-5 py-16 text-[#172b3a] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="mb-10 flex items-center gap-4 sm:mb-14">
          <span className="font-serif text-3xl leading-none text-[#bd9143] sm:text-4xl">
            01
          </span>

          <span className="h-px w-10 bg-[#bd9143]" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#172b3a]/65">
            Who we are
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Architectural image */}
          <div className="relative min-w-0">
            <div className="relative aspect-[5/4] overflow-hidden bg-[#e8e3d9] sm:aspect-[4/3]">
              <Image
                src="/images/about.avif"
                alt="Construction project by Makyn Construction Company Limited"
                fill
                priority={false}
                sizes="(max-width: 1023px) 100vw, 52vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.025]"
              />
            </div>

            {/* Gold architectural detail */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-20 w-20 border-b-2 border-r-2 border-[#bd9143] sm:-bottom-4 sm:-right-4 sm:h-28 sm:w-28"
            />

            {/* Image label */}
            <div className="absolute bottom-0 left-0 max-w-[85%] bg-[#172b3a] px-4 py-3 text-[#f7f5f0] sm:px-6 sm:py-4">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#d5b16b]">
                Makyn Construction
              </p>
              <p className="mt-1 font-serif text-base sm:text-lg">
                Built with purpose.
              </p>
            </div>
          </div>

          {/* Company story */}
          <div className="relative z-10 min-w-0 lg:py-3">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a47d37]">
              Your trusted construction partner
            </p>

            <h2
              id="intro-heading"
              className="max-w-xl font-serif text-[2.6rem] leading-[1.08] font-medium tracking-tight sm:text-5xl lg:text-[3.65rem]"
            >
              We build more
              <br className="hidden sm:block" /> than structures.
              <span className="mt-1 block text-[#a47d37]">
                We build confidence.
              </span>
            </h2>

            <div className="my-6 h-px w-16 bg-[#bd9143]" />

            <div className="max-w-lg space-y-4 text-sm leading-7 text-[#172b3a]/70 sm:text-[15px]">
              <p>
                At Makyn Construction Company Limited, every project begins
                with understanding your vision and earning your trust.
              </p>

              <p>
                From construction and renovations to finishing works, we bring
                together careful planning, dependable workmanship, and
                attention to the details that make a lasting difference.
              </p>
            </div>

            <a
              href="#services"
              className="group mt-7 inline-flex items-center gap-4 border-b border-[#bd9143] pb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#172b3a] transition-colors hover:text-[#a47d37]"
            >
              Explore our expertise
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>

        {/* Company values */}
        <div className="hidden mt-16 grid border-t border-[#172b3a]/15 sm:mt-20 sm:grid-cols-3">
          {strengths.map((strength, index) => (
            <div
              key={strength.number}
              className={`flex items-start gap-4 py-5 sm:py-6 sm:pr-5 lg:pr-8 ${
                index > 0
                  ? "border-t border-[#172b3a]/15 sm:border-t-0 sm:border-l sm:pl-5 lg:pl-8"
                  : ""
              }`}
            >
              <span className="pt-0.5 text-[10px] font-semibold tracking-widest text-[#a47d37]">
                {strength.number}
              </span>

              <div>
                <h3 className="text-sm font-semibold text-[#172b3a]">
                  {strength.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#172b3a]/60">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
