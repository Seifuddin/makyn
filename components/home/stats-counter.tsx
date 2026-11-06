
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
      className="bg-[#172b3a] px-5 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Compact heading */}
        <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <div className="mb-1.5 flex items-center gap-2">
              <span className="h-px w-6 bg-[#d5b16b]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d5b16b]">
                The Makyn Difference
              </span>
            </div>

            <h2 className="font-serif text-3xl leading-[1.08] font-semibold tracking-[-0.04em] sm:text-4xl lg:text-[2.8rem]">
              Experience you can{" "}
              <span className="italic text-[#d5b16b]">
                build on.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-[13px] leading-4 text-white/55 sm:text-right">
            A record of dependable workmanship, lasting relationships
            and commitment to quality.
          </p>
        </div>

        {/* Statistics grid */}
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4 lg:gap-3">
          {stats.map((stat) => (
            <article
              key={stat.index}
              className="group relative border border-white/10 bg-white/[0.04] p-3 transition-all duration-300 hover:border-[#bd9143]/60 hover:bg-white/[0.07] sm:p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[8px] font-semibold tracking-[0.18em] text-white/35">
                  {stat.index}
                </span>

                <span className="h-1.5 w-1.5 rotate-45 border border-[#bd9143] transition-colors group-hover:bg-[#bd9143]" />
              </div>

              <p className="text-3xl font-semibold leading-none tracking-tight text-[#d5b16b] sm:text-4xl">
                {stat.number}
              </p>

              <h3 className="mt-2 text-[11px] font-semibold leading-4 text-white sm:text-sm">
                {stat.label}
              </h3>

              <div className="my-2 h-px w-6 bg-[#bd9143] transition-all duration-300 group-hover:w-10" />

              <p className="text-[9px] leading-4 text-white/50 sm:text-[10px]">
                {stat.description}
              </p>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#bd9143] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Brand signature */}
        <div className="hidden mt-4 flex items-center gap-2">
          <span className="h-[2px] w-5 bg-[#bd9143]" />
          <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-white/40">
            MAKYN CONSTRUCTION COMPANY LIMITED
          </p>
        </div>

      </div>
    </section>
  );
}
