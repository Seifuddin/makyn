
const stats = [
  {
    value: "25+",
    label: "Projects Completed",
    description: "Turning plans into reality.",
  },
  {
    value: "10+",
    label: "Years of Experience",
    description: "Experience across construction.",
  },
  {
    value: "20+",
    label: "Happy Clients",
    description: "Relationships built on trust.",
  },
  {
    value: "100%",
    label: "Commitment to Quality",
    description: "Quality in every detail.",
  },
];

export default function StatsCounter() {
  return (
    <section
      aria-label="Makyn company statistics"
      className="relative overflow-hidden bg-[#172b3a] px-4 py-5 text-white sm:px-6 sm:py-6 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-0.5 w-16 bg-[#bd9143]"
      />

      <div className="mx-auto max-w-6xl py-10">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-px w-5 bg-[#d5b16b]" />
          <p className="text-[9px] font-semibold tracking-[0.18em] text-white/60">
            MAKYN AT A GLANCE
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="border-l-2 border-[#bd9143] bg-white/[0.04] px-3 py-3 transition-colors duration-200 hover:bg-white/[0.08] sm:px-4 sm:py-3"
            >
              <p className="text-2xl font-semibold leading-none tracking-tight text-[#d5b16b] sm:text-3xl">
                {stat.value}
              </p>

              <h3 className="mt-2 text-xs font-semibold leading-4 text-white sm:text-sm">
                {stat.label}
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-white/55 sm:text-xs">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
