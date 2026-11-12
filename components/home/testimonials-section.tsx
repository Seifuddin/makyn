
const testimonials = [
  {
    quote:
      "The team demonstrated professionalism, clear communication and great attention to detail throughout the project.",
    name: "Residential Client",
    project: "Residential Construction",
    number: "01",
  },
  {
    quote:
      "From planning to finishing, the process was handled with care. We appreciated the commitment to quality workmanship.",
    name: "Property Owner",
    project: "Renovation & Remodelling",
    number: "02",
  },
  {
    quote:
      "The finishing work made a real difference to the space. The team focused on the details and delivered a neat result.",
    name: "Business Client",
    project: "Painting & Finishing",
    number: "03",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="overflow-hidden bg-[#f7f5f0] px-6 py-16 text-[#172b3a] sm:px-10 lg:px-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#bd9143]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#98702f]">
                Words That Matter
              </span>
            </div>

            <h2
              id="testimonials-heading"
              className="font-serif font-semibold text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[54px]"
            >
              Built on trust.
              <br />
              <span className="italic font-normal text-[#b28743]">
                Remembered for quality.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#172b3a]/65 md:pb-1">
            Behind every successful project is a relationship
            built on trust, clear communication and a shared
            commitment to excellence.
          </p>
        </div>

        {/* Testimonials layout */}
        <div className="grid gap-10 border-t border-[#172b3a]/15 pt-9 md:grid-cols-3 md:gap-0">

          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.number}
              className={`flex flex-col justify-between ${
                index !== 0
                  ? "border-t border-[#172b3a]/15 pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0 lg:pl-10"
                  : "md:pr-9 lg:pr-12"
              }`}
            >
              {/* Number and quote */}
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#a77c35]">
                    {testimonial.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="font-serif text-5xl leading-none text-[#bd9143]/60"
                  >
                    “
                  </span>
                </div>

                <blockquote
                  className={`font-serif leading-[1.55] tracking-[-0.015em] ${
                    index === 0
                      ? "text-xl sm:text-[22px]"
                      : "text-lg text-[#172b3a]/85"
                  }`}
                >
                  {testimonial.quote}
                  <span className="text-[#b28743]"> ”</span>
                </blockquote>
              </div>

              {/* Client information */}
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-7 bg-[#bd9143]" />

                <div>
                  <p className="text-xs font-semibold text-[#172b3a]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-[11px] text-[#172b3a]/55">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            </article>
          ))}

        </div>

        {/* Closing detail */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#172b3a]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-serif text-lg italic text-[#172b3a]/75">
            Every project deserves exceptional care.
          </p>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 text-xs font-semibold text-[#98702f] transition-colors hover:text-[#172b3a]"
          >
            Let's discuss your project
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}
