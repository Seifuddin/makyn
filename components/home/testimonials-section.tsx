
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

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-white px-5 py-9 text-[#172b3a] sm:px-8 sm:py-11 lg:px-12 lg:py-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Compact section heading */}
        <div className="grid gap-3 border-b border-[#172b3a]/10 pb-5 md:grid-cols-[1fr_0.75fr] md:items-end md:gap-8">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#bd9143]" />
              <p className="text-[10px] font-bold tracking-[0.18em] text-[#8d692e]">
                CLIENT EXPERIENCES
              </p>
            </div>

            <h2
              id="testimonials-heading"
              className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
            >
              Trust built on
              <span className="text-[#a77c35]"> every project.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#172b3a]/65 md:justify-self-end">
            Every project is an opportunity to build lasting
            relationships through communication, workmanship
            and attention to detail.
          </p>
        </div>

        {/* Testimonial list */}
        <div className="mt-2 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.initials}
              className="group flex flex-col border-b border-[#172b3a]/12 py-5 sm:px-3 sm:py-5 lg:px-4"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[0.15em] text-[#a77c35]">
                  0{index + 1}
                </span>

                <span
                  aria-hidden="true"
                  className="text-2xl leading-none text-[#bd9143]/70"
                >
                  “
                </span>
              </div>

              <blockquote className="flex-1 text-[13px] leading-6 text-[#172b3a]/80 sm:text-sm">
                {testimonial.quote}
              </blockquote>

              <div className="mt-5 flex items-center gap-3 border-t border-[#172b3a]/10 pt-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#172b3a] text-[10px] font-bold text-[#d5b16b]">
                  {testimonial.initials}
                </div>

                <div className="min-w-0">
                  <h3 className="text-xs font-bold text-[#172b3a] sm:text-sm">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-[#172b3a]/55 sm:text-xs">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
