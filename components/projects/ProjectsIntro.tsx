
export default function ProjectsIntro() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F0] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Section identifier */}
        <div className="mb-7 flex items-center justify-between border-b border-[#172B3A]/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#BD9143]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#172B3A] sm:text-xs">
              Makyn Construction
            </span>
          </div>

          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#172B3A]/50 sm:text-xs">
            Portfolio / 01
          </span>
        </div>

        {/* Editorial introduction */}
        <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#98702F]">
              Our Selected Projects
            </p>

            <h2 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-[#172B3A] sm:text-5xl lg:text-6xl">
              Ideas shaped.
              <br />

              <span className="font-normal text-[#BD9143]">
                Structures built.
              </span>
            </h2>
          </div>

          <div className="relative lg:mb-1">
            {/* Gold architectural accent */}
            <span
              aria-hidden="true"
              className="absolute -left-4 top-1 h-12 w-px bg-[#BD9143] sm:-left-5"
            />

            <p className="max-w-lg text-sm leading-7 text-[#52606A] sm:text-base sm:leading-7">
              Every project begins with a purpose. Through careful
              planning, skilled workmanship, and attention to detail,
              we turn construction ideas into practical spaces built
              for lasting value.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#BD9143]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172B3A] sm:text-xs">
                Explore our work
              </p>

              <span
                aria-hidden="true"
                className="text-sm text-[#BD9143]"
              >
                ↓
              </span>
            </div>
          </div>
        </div>

        {/* Bottom architectural rule */}
        <div className="mt-8 flex items-center gap-3 sm:mt-10">
          <span className="h-[3px] w-12 bg-[#BD9143]" />
          <span className="h-px flex-1 bg-[#172B3A]/15" />
          <span className="h-1.5 w-1.5 bg-[#172B3A]" />
        </div>
      </div>
    </section>
  );
}
