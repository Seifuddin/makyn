
import Image from "next/image";

const reasons = [
  {
    number: "01",
    title: "Built to Last",
    description:
      "We emphasize quality materials, careful execution, and attention to the details that contribute to lasting results.",
  },
  {
    number: "02",
    title: "A Clear Process",
    description:
      "We value clear communication and a structured approach from the initial discussion through project completion.",
  },
  {
    number: "03",
    title: "Your Vision First",
    description:
      "Your goals and requirements guide our approach, helping us develop solutions around your project.",
  },
  {
    number: "04",
    title: "Solutions That Fit",
    description:
      "We consider your project scope, priorities, and practical requirements when planning the work.",
  },
];

export default function WhyMakyn() {
  return (
    <section className="relative overflow-hidden bg-[#172b3a] px-5 py-20 text-[#f7f5f0] sm:px-8 sm:py-14 lg:px-12 lg:py-16">
      {/* Restrained architectural background detail */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#d5b16b]/10" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-[#d5b16b]/10" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d5b16b] sm:text-xs">
            <span className="h-px w-7 bg-[#d5b16b]" />
            The Makyn difference
          </p>

          <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Good work is built on{" "}
            <span className="font-light italic text-[#d5b16b]">
              good decisions.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
            We believe successful construction starts with understanding the
            project, making considered decisions, and respecting the people who
            place their trust in us.
          </p>
        </div>

        {/* Equal two-column layout */}
        <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-7">
          {/* Image panel */}
          <div className="relative min-h-[280px] overflow-hidden bg-white/5 sm:min-h-[340px] lg:min-h-0">
            <Image
              src="/images/whyus.jpg"
              alt="Construction work and building solutions"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#172b3a]/85 via-[#172b3a]/10 to-transparent" />

            <div className="absolute bottom-0 left-0 flex items-center gap-3 p-5 sm:p-7">
              <span className="h-9 w-px bg-[#d5b16b]" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#d5b16b]">
                  Our approach
                </p>
                <p className="mt-1 text-sm font-medium sm:text-base">
                  Thoughtful work. Lasting value.
                </p>
              </div>
            </div>

            <span className="absolute right-4 top-4 border border-white/30 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/90">
              Makyn Construction
            </span>
          </div>

          {/* Four equal-height reason cards */}
          <div className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="group relative flex min-h-[175px] flex-col border border-white/10 bg-white/[0.035] p-5 transition-colors duration-300 hover:border-[#d5b16b]/55 hover:bg-white/[0.06] sm:min-h-[195px] sm:p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.18em] text-[#d5b16b]">
                    / {reason.number}
                  </span>
                  <span className="h-px w-8 bg-[#d5b16b]/50 transition-all duration-300 group-hover:w-12" />
                </div>

                <h3 className="text-xl font-medium tracking-tight transition-colors duration-300 group-hover:text-[#d5b16b]">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  {reason.description}
                </p>

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d5b16b] transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
