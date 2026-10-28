
const stats = [
  {
    number: "25+",
    label: "Projects Completed",
    description: "From initial plans to completed structures.",
    index: "01",
  },
  {
    number: "10+",
    label: "Years of Experience",
    description: "Knowledge shaped through construction work.",
    index: "02",
  },
  {
    number: "20+",
    label: "Happy Clients",
    description: "Built on trust and lasting relationships.",
    index: "03",
  },
  {
    number: "100%",
    label: "Commitment to Quality",
    description: "Attention to detail at every stage.",
    index: "04",
  },
];

export default function StatsCounter() {
  return (
    <section
      aria-label="Makyn company statistics"
      className="relative isolate overflow-hidden bg-[#172B3A] text-white"
    >
      {/* Subtle architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative gold corner */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-24 w-24 border-r border-t border-[#BD9143]/40 sm:h-32 sm:w-32"
      />

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        {/* Compact section heading */}
        <div className="mb-6 flex flex-col justify-between gap-3 border-b border-white/15 pb-5 sm:mb-7 sm:flex-row sm:items-end sm:gap-6 sm:pb-6">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px w-7 bg-[#D5B16B]" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-[#D5B16B]">
                The Makyn Difference
              </p>
            </div>

            <h2 className="max-w-xl text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Experience you can build on.
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-white/65 sm:text-right sm:text-sm">
            Every project reflects our commitment to dependable workmanship,
            thoughtful planning and lasting quality.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className={`group relative min-w-0 border-b border-white/15 py-5 first:pt-0 last:border-b-0 sm:px-5 sm:py-5 sm:first:pl-0 sm:last:pr-0 lg:border-b-0 lg:border-r lg:px-5 lg:py-1 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0 ${
                index === 0 ? "lg:pt-1" : ""
              }`}
            >
              {/* Number and index */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="text-[9px] font-medium tracking-[0.2em] text-white/40">
                  {stat.index}
                </span>

                <span
                  aria-hidden="true"
                  className="mt-1 h-2 w-2 rotate-45 border border-[#BD9143] transition-colors duration-300 group-hover:bg-[#BD9143]"
                />
              </div>

              {/* Large statistic */}
              <p className="text-4xl font-medium leading-none tracking-[-0.055em] text-[#D5B16B] transition-transform duration-300 group-hover:translate-x-1 sm:text-5xl xl:text-6xl">
                {stat.number}
              </p>

              {/* Label */}
              <h3 className="mt-3 max-w-[210px] text-sm font-semibold leading-5 text-white">
                {stat.label}
              </h3>

              {/* Gold accent */}
              <div className="my-2.5 h-px w-8 bg-[#BD9143] transition-all duration-300 group-hover:w-14" />

              {/* Description */}
              <p className="max-w-[230px] text-xs leading-5 text-white/55">
                {stat.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom architectural line */}
        <div className="mt-5 flex items-center gap-3 border-t border-white/15 pt-4">
          <span className="h-1 w-9 shrink-0 bg-[#BD9143]" />
          <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/45 sm:text-[9px]">
            MAKYN CONSTRUCTION COMPANY LIMITED
          </p>
          <span className="hidden h-px flex-1 bg-white/10 sm:block" />
        </div>
      </div>
    </section>
  );
}
