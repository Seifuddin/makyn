
const highlights = [
  {
    number: "01",
    title: "Quality Focus",
    detail:
      "Attention to workmanship, materials, and the details that make a difference.",
  },
  {
    number: "02",
    title: "Client First",
    detail:
      "Solutions shaped around your vision, priorities, and project requirements.",
  },
  {
    number: "03",
    title: "End-to-End",
    detail:
      "A considered approach from initial planning through construction and completion.",
  },
  {
    number: "04",
    title: "Built to Last",
    detail:
      "A commitment to lasting value, thoughtful execution, and dependable results.",
  },
];

export default function CompanyHighlights() {
  return (
    <section className="relative isolate overflow-hidden bg-[#172b3a] px-6 py-12 text-[#f7f5f0] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
      {/* Architectural grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d5b16b 1px, transparent 1px),
            linear-gradient(to bottom, #d5b16b 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Soft architectural lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[400px] w-[400px] rounded-full bg-[#bd9143]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[300px] w-[300px] rounded-full bg-[#d5b16b]/[0.06] blur-[90px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Compact section heading */}
        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d5b16b]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d5b16b] sm:text-xs">
                The Makyn standard
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              Good work is never
              <span className="block font-light italic text-[#d5b16b]">
                left to chance.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-lg text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
              Every project deserves more than a finished structure. It
              deserves careful thinking, clear communication, and a commitment
              to getting the details right.
            </p>
          </div>
        </div>

        {/* Compact highlight panels */}
        <div className="grid grid-cols-1 border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.number}
              className="group relative flex min-h-[205px] flex-col overflow-hidden border-b border-r border-white/15 p-5 transition-colors duration-300 hover:bg-white/[0.045] sm:min-h-[215px] sm:p-6 lg:min-h-[225px] lg:p-6"
            >
              {/* Gold top accent */}
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#d5b16b] transition-all duration-500 group-hover:w-full" />

              {/* Decorative number */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 top-2 select-none text-7xl font-light tracking-tighter text-white/[0.045] transition-colors duration-300 group-hover:text-[#d5b16b]/10"
              >
                {item.number}
              </span>

              <div className="relative flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.2em] text-[#d5b16b]">
                  / {item.number}
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-sm text-[#d5b16b] transition-all duration-300 group-hover:border-[#d5b16b] group-hover:bg-[#bd9143] group-hover:text-[#172b3a]">
                  ↗
                </span>
              </div>

              <div className="relative mt-auto pt-7">
                <h3 className="text-lg font-medium tracking-tight text-[#f7f5f0] transition-colors duration-300 group-hover:text-[#d5b16b] sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60 transition-colors duration-300 group-hover:text-white/80">
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Compact closing brand statement */}
        <div className="mt-5 flex flex-col gap-3 border-t border-white/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">
            Makyn Construction Company Limited
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#bd9143]" />
            <p className="text-xs text-white/70 sm:text-sm">
              Your trusted construction partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
