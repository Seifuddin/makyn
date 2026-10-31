
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
      className="relative isolate overflow-hidden bg-[#172b3a] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12"
    >
      {/* Subtle architectural background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="mx-auto max-w-7xl">

        {/* Compact heading */}
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px w-7 bg-[#d5b16b]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#d5b16b]">
                The Makyn Difference
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Experience you can{" "}
              <span className="font-normal italic text-[#d5b16b]">
                build on.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-white/55 sm:text-right">
            A record of dependable workmanship, lasting relationships
            and commitment to quality.
          </p>
        </div>

        {/* Statistics cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.index}
              className="group relative overflow-hidden border border-white/10 bg-white/[0.045] p-5 transition-all duration-300 hover:border-[#bd9143]/60 hover:bg-white/[0.075] sm:p-5"
            >
              {/* Top detail */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[9px] font-semibold tracking-[0.2em] text-white/35">
                  {stat.index}
                </span>

                <span className="h-2 w-2 rotate-45 border border-[#bd9143] transition-colors group-hover:bg-[#bd9143]" />
              </div>

              {/* Statistic */}
              <p className="text-4xl font-semibold leading-none tracking-[-0.055em] text-[#d5b16b] sm:text-[2.7rem]">
                {stat.number}
              </p>

              {/* Label */}
              <h3 className="mt-3 text-sm font-semibold text-white">
                {stat.label}
              </h3>

              {/* Accent */}
              <div className="my-3 h-px w-8 bg-[#bd9143] transition-all duration-300 group-hover:w-14" />

              {/* Description */}
              <p className="text-[11px] leading-5 text-white/50">
                {stat.description}
              </p>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#bd9143] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Small brand signature */}
        <div className="mt-5 flex items-center gap-3">
          <span className="h-[2px] w-7 bg-[#bd9143]" />
          <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/40">
            MAKYN CONSTRUCTION COMPANY LIMITED
          </p>
        </div>
      </div>
    </section>
  );
}
