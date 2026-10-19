
import ArrowIcon from "@/components/ui/arrow-icon";

const reasons = [
  {
    number: "01",
    title: "Quality Workmanship",
    description:
      "Careful material selection, precise execution and attention to detail for durable, well-finished results.",
  },
  {
    number: "02",
    title: "Reliable Project Delivery",
    description:
      "Clear communication and organised coordination keep your project moving from planning to completion.",
  },
  {
    number: "03",
    title: "Client-Focused Approach",
    description:
      "Your requirements and vision guide our decisions at every stage of the construction process.",
  },
  {
    number: "04",
    title: "Tailored Construction Solutions",
    description:
      "Practical services for new builds, renovations, remodelling and finishing, shaped around your needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="bg-[#f7f5f0] px-5 py-9 text-[#172b3a] sm:px-8 sm:py-11 lg:px-12 lg:py-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="grid gap-4 border-b border-[#172b3a]/15 pb-6 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-10">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#bd9143]" />
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#8d692e]">
                THE MAKYN DIFFERENCE
              </p>
            </div>

            <h2
              id="why-choose-us-heading"
              className="max-w-xl text-3xl leading-[1.12] font-semibold tracking-tight sm:text-4xl"
            >
              Built on trust.
              <span className="block text-[#a77c35]">
                Defined by quality.
              </span>
            </h2>
          </div>

          <div className="md:justify-self-end md:max-w-md">
            <p className="text-sm leading-6 text-[#172b3a]/70">
              Good construction takes more than materials. It takes
              careful planning, skilled workmanship and a team that
              understands your vision.
            </p>

            <a
              href="#contact"
              className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#8d692e] transition-colors hover:text-[#172b3a]"
            >
              Discuss your project
              <span className="transition-transform duration-200 hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>

        {/* Reasons */}
        <div className="grid gap-x-10 sm:grid-cols-2 sm:gap-x-12">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group flex gap-4 border-b border-[#172b3a]/12 py-5 sm:py-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#bd9143]/60 text-[10px] font-bold text-[#98702f] transition-colors duration-200 group-hover:bg-[#172b3a] group-hover:text-[#d5b16b]">
                {reason.number}
              </span>

              <div className="min-w-0">
                <h3 className="text-sm font-bold tracking-tight sm:text-base">
                  {reason.title}
                </h3>

                <p className="mt-1.5 max-w-md text-xs leading-5 text-[#172b3a]/65 sm:text-[13px]">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold tracking-tight">
            Your vision. Our commitment to quality.
          </p>

          <span className="text-[9px] font-semibold tracking-[0.16em] text-[#172b3a]/50">
            YOUR TRUSTED CONSTRUCTION PARTNER
          </span>
        </div>
      </div>
    </section>
  );
}
