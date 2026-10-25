
import Image from "next/image";
import type { ReactNode } from "react";

const reasons = [
  {
    number: "01",
    title: "Built to Last",
    description:
      "We focus on lasting quality with precise workmanship and durable materials.",
    image: "/images/tolast.jpg",
    imageAlt: "Construction hard hat at a building site",
    icon: (
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9.5V21h13V9.5" />
        <path d="M9 21v-7h6v7" />
      </>
    ),
  },
  {
    number: "02",
    title: "A Clear Process",
    description:
      "From planning to completion, we keep your project on track.",
    image: "/images/process.webp",
    imageAlt: "Architectural drawings and measuring tools",
    icon: (
      <>
        <rect x="3.5" y="5" width="17" height="16" rx="1.5" />
        <path d="M7.5 3v4M16.5 3v4M4 9.5h16M7.5 13h3M7.5 16.5h6" />
      </>
    ),
  },
  {
    number: "03",
    title: "Your Vision First",
    description:
      "Your goals guide every decision we make, from the first meeting to the final details.",
    image: "/images/visionfirst.webp",
    imageAlt: "Business partners shaking hands",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20v-1.5a6.5 6.5 0 0 1 13 0V20" />
        <path d="M15 4.8a3.5 3.5 0 0 1 0 6.7M18 13.5a5.5 5.5 0 0 1 3.5 5.1V20" />
      </>
    ),
  },
  {
    number: "04",
    title: "Solutions That Fit",
    description:
      "From new builds to renovations, we tailor solutions to your needs.",
    image: "/images/solutionsfit.jpeg",
    imageAlt: "Modern completed residential interior",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="m19.4 15 .1.1 1.4 1.1-1.5 2.6-1.7-.7a8 8 0 0 1-1.8 1l-.3 1.9h-3l-.3-1.9a8 8 0 0 1-1.8-1l-1.7.7-1.5-2.6 1.4-1.1a7 7 0 0 1 0-2l-1.4-1.1 1.5-2.6 1.7.7a8 8 0 0 1 1.8-1l.3-1.9h3l.3 1.9a8 8 0 0 1 1.8 1l1.7-.7 1.5 2.6-1.4 1.1a7 7 0 0 1 0 2Z" />
      </>
    ),
  },
];

function LineIcon({
  children,
  className = "h-8 w-8",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function StatIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7 shrink-0 text-[#d5a34e] sm:h-8 sm:w-8"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="overflow-hidden pb-20 max-w-7xl mx-auto p-5 bg-[#f7f3ec] text-[#172b3a]"
    >
      {/* Compact main section */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[1.04fr_0.96fr]">
        {/* Left: Architectural hero */}
        <div className="relative flex min-h-[430px] flex-col justify-between overflow-hidden px-5 pb-7 pt-8 sm:min-h-[460px] sm:px-8 sm:pt-9 lg:min-h-[490px] lg:px-9 lg:pb-9 lg:pt-10 xl:px-12">
          {/* Background construction image */}
          <div className="absolute inset-0">
            <Image
              src="/images/beautifuldesign.jpg"
              alt="Modern building under construction"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 52vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3ec] via-[#f7f3ec]/75 to-[#f7f3ec]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f7f3ec]/5 via-transparent to-[#f7f3ec]/10" />
          </div>

          {/* Decorative gold architectural line */}
          <div
            aria-hidden="true"
            className="absolute -right-8 top-0 hidden h-[290px] w-16 -skew-x-[28deg] bg-[#c99a4c]/90 lg:block"
          />

          <div className="pt-20 relative z-10 max-w-[430px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#bd9143]" />

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#172b3a] sm:text-[10px]">
                The Makyn Difference
              </p>
            </div>

            <h2
              id="why-choose-us-heading"
              className="max-w-[450px] font-serif text-[clamp(2.5rem,4.3vw,4rem)] leading-[0.98] font-semibold tracking-[-0.055em]"
            >
              Built on trust.
              <br />
              Defined by
              <br />
              <span className="relative inline-block italic text-[#c49343]">
                quality.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-12 bg-[#c49343]"
                />
              </span>
            </h2>

            <p className="mt-5 max-w-[320px] text-[13px] leading-6 text-[#172b3a]/80 sm:text-sm sm:leading-6">
              Good construction takes more than materials. It takes
              experience, skill and a team that cares about getting every
              detail right.
            </p>

            <a
              href="#about"
              className="group mt-6 inline-flex items-center gap-3 text-xs font-medium text-[#172b3a] transition-colors hover:text-[#a7782e] sm:text-sm"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d0a052] text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>

              <span>Learn more about us</span>
            </a>
          </div>

          {/* Small caption at the bottom */}
          <div className="relative z-10 mt-8 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#172b3a]/60 sm:text-[9px]">
            <span className="h-px w-6 bg-[#bd9143]" />
            Makyn Construction Company Limited
          </div>
        </div>

        {/* Right: Compact image-led benefits */}
        <div className="flex flex-col justify-center gap-3 px-4 py-6 sm:px-6 sm:py-7 lg:gap-3 lg:px-6 lg:py-7 xl:px-8">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group grid min-h-[125px] grid-cols-[85px_minmax(0,1fr)] overflow-hidden rounded-lg border border-[#172b3a]/[0.06] bg-white/80 shadow-[0_5px_18px_rgba(23,43,58,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(23,43,58,0.09)] sm:min-h-[135px] sm:grid-cols-[115px_minmax(0,1fr)] lg:grid-cols-[105px_minmax(0,1fr)] xl:grid-cols-[125px_minmax(0,1fr)]"
            >
              {/* Benefit image */}
              <div className="relative min-h-full overflow-hidden">
                <Image
                  src={reason.image}
                  alt={reason.imageAlt}
                  fill
                  sizes="(max-width: 639px) 85px, (max-width: 1023px) 115px, 125px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Benefit content */}
              <div className="flex min-w-0 items-center gap-2 p-2.5 sm:gap-3 sm:p-3 lg:gap-2.5 lg:p-3 xl:gap-3 xl:p-4">
                <div className="hidden shrink-0 text-[#c49343] sm:block">
                  <LineIcon className="h-7 w-7 lg:h-6 lg:w-6 xl:h-8 xl:w-8">
                    {reason.icon}
                  </LineIcon>
                </div>

                <div className="min-w-0 flex-1 border-l border-[#bd9143]/30 pl-2.5 sm:pl-3 lg:pl-2.5 xl:pl-3">
                  <p className="text-[9px] font-semibold tracking-[0.14em] text-[#c49343] sm:text-[10px]">
                    {reason.number}
                  </p>

                  <h3 className="mt-1 font-serif text-sm leading-tight font-semibold tracking-tight text-[#172b3a] sm:text-base xl:text-lg">
                    {reason.title}
                  </h3>

                  <p className="mt-1.5 text-[11px] leading-[1.4rem] text-[#172b3a]/75 sm:text-xs sm:leading-5">
                    {reason.description}
                  </p>
                </div>

                <span className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#bd9143] text-[#bd9143] transition-all duration-300 group-hover:bg-[#bd9143] group-hover:text-white sm:flex">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Compact statistics and CTA strip */}
      <div className="hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr]">
          {/* Navy statistics panel */}
          <div className="relative bg-[#122432] px-5 py-5 text-white sm:px-8 lg:flex lg:items-center lg:px-9 lg:py-5 xl:px-12">
            {/* Slanted gold separator */}
            <div
              aria-hidden="true"
              className="absolute -right-4 top-0 z-10 hidden h-full w-8 skew-x-[-20deg] bg-[#d0a052] lg:block"
            />

            <div className="grid grid-cols-3 gap-2 sm:gap-5 lg:w-full lg:max-w-[790px] lg:gap-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                <StatIcon>
                  <path d="m8 3 4 2 4-2 1 5 4 2-3 4-1 5-5-1-5 1-1-5-3-4 4-2z" />
                  <path d="m9 11 2 2 4-4M12 19v3" />
                </StatIcon>

                <div>
                  <p className="font-serif text-xl leading-none sm:text-2xl">
                    15+
                  </p>

                  <p className="mt-1 text-[9px] leading-4 text-white/75 sm:text-[11px]">
                    Years Experience
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-l border-white/20 pl-2 sm:flex-row sm:items-center sm:gap-3 sm:pl-5 lg:pl-6">
                <StatIcon>
                  <path d="M3 21V7l7-4v18M10 9h5l6 3v9H10" />
                  <path d="M6 9h1M6 13h1M6 17h1M13 13h1M17 15h1M13 18h1M17 18h1" />
                </StatIcon>

                <div>
                  <p className="font-serif text-xl leading-none sm:text-2xl">
                    200+
                  </p>

                  <p className="mt-1 text-[9px] leading-4 text-white/75 sm:text-[11px]">
                    Projects Completed
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-l border-white/20 pl-2 sm:flex-row sm:items-center sm:gap-3 sm:pl-5 lg:pl-6">
                <StatIcon>
                  <circle cx="9" cy="8" r="3" />
                  <circle cx="17" cy="9" r="2.5" />
                  <path d="M2 20v-1a7 7 0 0 1 14 0v1M15 14a5 5 0 0 1 7 4v2" />
                </StatIcon>

                <div>
                  <p className="font-serif text-xl leading-none sm:text-2xl">
                    100%
                  </p>

                  <p className="mt-1 text-[9px] leading-4 text-white/75 sm:text-[11px]">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gold CTA panel */}
          <div className="flex flex-col justify-center gap-4 bg-[#d0a052] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:gap-3 lg:px-7 xl:px-9">
            <p className="max-w-[250px] font-serif text-lg leading-tight text-[#172b3a] italic sm:text-xl">
              Your vision deserves thoughtful execution.
            </p>

            <a
              href="#contact"
              className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-md bg-[#122432] px-4 py-3 text-xs font-medium text-white transition-colors hover:bg-[#203d50] sm:text-sm"
            >
              Get in touch

              <ArrowRight className="h-3.5 w-3.5 text-[#d0a052] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
