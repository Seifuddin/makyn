
import Link from "next/link";

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
                Clients Testimonials
              </span>
            </div>

            <h2
              id="testimonials-heading"
              className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[54px]"
            >
              Built on trust.
              <br />
              <span className="font-normal italic text-[#b28743]">
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

        {/* Testimonial cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            
<article
  key={testimonial.number}
  className="group relative flex min-h-[245px] flex-col justify-between overflow-hidden border border-[#172b3a]/10 bg-white/70 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#bd9143]/50 hover:bg-white hover:shadow-[0_18px_45px_rgba(23,43,58,0.07)] sm:p-6"
>
  {/* Card top */}
  <div>
    <div className="mb-4 flex items-center justify-between">
      <span className="text-[10px] font-semibold tracking-[0.22em] text-[#a77c35]">
        TESTIMONIAL / {testimonial.number}
      </span>

      <span
        aria-hidden="true"
        className="font-serif text-5xl leading-[0.7] text-[#bd9143]/50 transition-colors duration-500 group-hover:text-[#bd9143]"
      >
        “
      </span>
    </div>

    <blockquote className="font-serif text-base leading-[1.6] tracking-[-0.015em] text-[#172b3a]/85 sm:text-lg">
      {testimonial.quote}
      <span className="text-[#b28743]"> ”</span>
    </blockquote>
  </div>

  {/* Client information */}
  <div className="mt-6 border-t border-[#172b3a]/10 pt-4">
    <div className="flex items-center gap-3">
      <span className="h-8 w-[3px] bg-[#bd9143] transition-all duration-500 group-hover:h-10" />

      <div>
        <p className="font-serif text-sm font-semibold text-[#172b3a]">
          {testimonial.name}
        </p>

        <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#172b3a]/50">
          {testimonial.project}
        </p>
      </div>
    </div>
  </div>

  {/* Decorative number */}
  <span
    aria-hidden="true"
    className="pointer-events-none absolute -bottom-6 -right-2 font-serif text-[90px] leading-none text-[#172b3a]/[0.025] transition-colors duration-500 group-hover:text-[#bd9143]/[0.07]"
  >
    {testimonial.number}
  </span>
</article>

          ))}
        </div>

        {/* Closing detail */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#172b3a]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-lg italic text-[#172b3a]/75">
            Every project deserves exceptional care.
          </p>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 text-xs font-semibold text-[#98702f] transition-colors hover:text-[#172b3a]"
          >
            Let's discuss your project
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
