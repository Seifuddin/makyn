
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
      "Your goals guide every decision, from the first meeting to the final details.",
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

function LineIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="bg-[#f7f5f0] px-5 pb-34 text-[#172b3a]"
    >
      <div className="mx-auto max-w-7xl">

        {/* Compact section heading */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#bd9143]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#bd9143]">
                Why Choose Makyn
              </span>
            </div>

            <h2
              id="why-choose-us-heading"
              className="font-serif text-3xl leading-[1.08] font-semibold tracking-[-0.04em] sm:text-4xl lg:text-[2.8rem]"
            >
              Built on trust.
              <span className="ml-2 italic font-normal text-[#bd9143]">
                Defined by quality.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#172b3a]/65">
            Good construction takes experience, skill and a team
            committed to getting every detail right.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          {/* Introduction image panel */}
          <div className="group relative min-h-[370px] overflow-hidden bg-[#172b3a] md:min-h-[400px] lg:min-h-[420px]">
            <Image
              src="/images/Makynco/IMG-20261113-WA0069.jpg"
              alt="Modern building under construction"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 38vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#101f2b]/95 via-[#172b3a]/45 to-[#172b3a]/10" />

            {/* Decorative frame */}
            <div className="absolute inset-4 border border-white/20" />

            <div className="absolute left-8 top-8 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#d5b16b]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80">
                Our Promise
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d5b16b]">
                Your trusted construction partner
              </p>

              <h3 className="max-w-sm font-serif text-3xl font-medium leading-tight text-white">
                We build more than structures.
                <span className="block italic text-[#d5b16b]">
                  We build confidence.
                </span>
              </h3>

              
            </div>
          </div>

          {/* Four benefit cards */}
          <div className="grid grid-cols-1 gap-3 mt-14 md:mt-0 m:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="group relative flex h-[120px] min-h-[100px] overflow-hidden shadow-lg border-b border-[#172b3a]/10 bgwhite transition-all duration-300 hover:-translate-y-0.5 hover:border-[#bd9143]/60 hover:shadow-[0_10px_25px_rgba(23,43,58,0.07)]"
              >
                {/* Small image section */}
                <div className="hidden relative w-[88px] shrink-0 overflow-hidden sm:w-[95px]">
                  <Image
                    src={reason.image}
                    alt={reason.imageAlt}
                    fill
                    sizes="95px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-[#172b3a]/15 transition-colors group-hover:bg-[#172b3a]/0" />

                  <span className="absolute bottom-2 left-2 text-[9px] font-semibold tracking-widest text-white">
                    {reason.number}
                  </span>
                </div>

                {/* Card content */}
                <div className="flex min-w-0 flex-1 flex-col justify-center p-2">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-[#bd9143]">
                      <LineIcon>{reason.icon}</LineIcon>
                    </span>

                    <span className="text-[9px] font-medium tracking-widest text-[#172b3a]/30">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="text-sm font-serif font-semibold leading-snug text-[#172b3a] sm:text-[15px]">
                    {reason.title}
                  </h3>

                  <p className="mt-1.5 text-[13px] leading-[1.55] text-[#172b3a]/65">
                    {reason.description}
                  </p>

                  <div className="mt-2 h-[2px] w-6 bg-[#bd9143] transition-all duration-300 group-hover:w-12" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom signature */}
        <div className="hidden mt-5 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#bd9143]" />
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#172b3a]/45">
            MAKYN CONSTRUCTION COMPANY LIMITED
          </p>
          <span className="h-px flex-1 bg-[#172b3a]/10" />
        </div>
      </div>
    </section>
  );
}
