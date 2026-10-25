export default function AboutCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#172b3a]">
      {/* Decorative blueprint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content remains centered */}
      <div className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d5b16b]">
            Your trusted construction partner
          </p>

          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s build something worth building.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Have a project in mind? Let&apos;s discuss your plans and turn your
            vision into a lasting structure.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-[#bd9143] px-6 py-3 text-sm font-semibold text-[#172b3a] transition hover:bg-[#d5b16b]"
            >
              Discuss Your Project
              <span className="ml-3" aria-hidden="true">
                →
              </span>
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:border-[#d5b16b] hover:text-[#d5b16b]"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>MAKYN CONSTRUCTION COMPANY LIMITED</span>
          <span>Built on trust. Designed to last.</span>
        </div>
      </div>
    </section>
  );
}