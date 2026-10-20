
const testimonials = [
  {
    quote:
      "The team demonstrated professionalism, clear communication and great attention to detail throughout the project.",
    name: "Residential Client",
    project: "Residential Construction",
    initials: "RC",
  },
  {
    quote:
      "From planning to finishing, the process was handled with care. We appreciated the commitment to quality workmanship.",
    name: "Property Owner",
    project: "Renovation & Remodelling",
    initials: "PO",
  },
  {
    quote:
      "The finishing work made a real difference to the space. The team focused on the details and delivered a neat result.",
    name: "Business Client",
    project: "Painting & Finishing",
    initials: "BC",
  },
];

function QuoteMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7 21.5C7 13.5 11.2 8.8 19 7v5.2c-4.2 1.3-6.1 3.8-6.2 7.1H19V33H7V21.5ZM23 21.5C23 13.5 27.2 8.8 35 7v5.2c-4.2 1.3-6.1 3.8-6.2 7.1H35V33H23V21.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M3.5 10H16M10 4L16 10L10 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="overflow-hidden bg-[#f7f5f0] px-5 py-10 text-[#172b3a] sm:px-8 sm:py-12 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Section introduction */}
        <div className="mb-7 flex flex-col gap-4 sm:mb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#bd9143]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8d692e]">
                Client Experiences
              </p>
            </div>

            <h2
              id="testimonials-heading"
              className="max-w-xl font-serif text-3xl leading-[1.08] font-semibold tracking-[-0.04em] sm:text-4xl lg:text-[2.8rem]"
            >
              Good work speaks.
              <span className="block italic text-[#b28743]">
                Trust makes it last.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-[13px] leading-6 text-[#172b3a]/65 md:pb-1">
            Every project is an opportunity to build lasting relationships
            through communication, workmanship and attention to detail.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          {/* Featured testimonial */}
          <article className="relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#172b3a] p-6 text-white sm:min-h-[320px] sm:p-8 lg:p-9">
            {/* Decorative architectural rings */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-14 -top-16 h-56 w-56 rounded-full border border-white/[0.08] sm:h-72 sm:w-72"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-7 -top-9 h-44 w-44 rounded-full border border-[#bd9143]/25 sm:h-56 sm:w-56"
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#d5b16b]">
                  01 / Client feedback
                </span>

                <QuoteMark className="h-9 w-9 text-[#d5b16b]/80" />
              </div>

              <blockquote className="mt-7 max-w-lg font-serif text-xl leading-relaxed tracking-[-0.02em] text-white sm:mt-8 sm:text-2xl lg:text-[1.8rem]">
                “{testimonials[0].quote}”
              </blockquote>
            </div>

            <div className="relative mt-8 flex items-center justify-between gap-4 border-t border-white/15 pt-5">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d5b16b]/50 bg-white/[0.04] text-xs font-semibold text-[#d5b16b]">
                  {testimonials[0].initials}
                </div>

                <div className="min-w-0">
                  <h3 className="text-xs font-semibold text-white sm:text-sm">
                    {testimonials[0].name}
                  </h3>

                  <p className="mt-1 text-[10px] text-white/55 sm:text-xs">
                    {testimonials[0].project}
                  </p>
                </div>
              </div>

              <span className="hidden h-8 w-8 shrink-0 items-center justify-center border border-[#d5b16b]/40 text-[#d5b16b] sm:flex">
                <ArrowRight />
              </span>
            </div>
          </article>

          {/* Supporting testimonials */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {testimonials.slice(1).map((testimonial, index) => (
              <article
                key={testimonial.initials}
                className="group flex flex-col justify-between border border-[#172b3a]/10 bg-white p-5 transition-colors duration-300 hover:border-[#bd9143]/50 sm:p-6 lg:p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#a77c35]">
                      0{index + 2} / Client feedback
                    </span>

                    <QuoteMark className="h-7 w-7 text-[#bd9143]/65" />
                  </div>

                  <blockquote className="mt-4 text-[13px] leading-6 text-[#172b3a]/80 sm:text-sm">
                    “{testimonial.quote}”
                  </blockquote>
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-[#172b3a]/10 pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#f7f5f0] text-[10px] font-bold text-[#98702f] transition-colors group-hover:bg-[#172b3a] group-hover:text-[#d5b16b]">
                    {testimonial.initials}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xs font-bold text-[#172b3a] sm:text-sm">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-[10px] text-[#172b3a]/55 sm:text-xs">
                      {testimonial.project}
                    </p>
                  </div>

                  <span className="ml-auto h-5 w-[2px] shrink-0 bg-[#bd9143] transition-all duration-300 group-hover:h-8" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-6 flex flex-col gap-3 border-t border-[#172b3a]/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-7 w-[3px] bg-[#bd9143]" />

            <p className="text-sm font-semibold tracking-tight">
              Your project deserves the same care.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#8d692e] transition-colors hover:text-[#172b3a] sm:text-xs"
          >
            Start a conversation

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
