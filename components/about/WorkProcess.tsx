
const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We discuss your vision, requirements, priorities, and intended outcomes.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "We define the project scope and coordinate the relevant plans and design requirements.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "The agreed work moves into execution with attention to coordination, workmanship, and communication.",
  },
  {
    number: "04",
    title: "Review & Handover",
    description:
      "We review the completed scope and coordinate the handover in line with the agreed project requirements.",
  },
];

export default function WorkProcess() {
  return (
    <section className="relative py-20 px-5 w-full overflow-hidden bg-[#172b3a] text-[#f7f5f0]">
      {/* Full-width blueprint background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(213,177,107,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(213,177,107,0.45) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      {/* Centered content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        {/* Header */}
        <div className="flex flex-col gap-3 border-b border-white/15 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#d5b16b] sm:text-[10px]">
              <span className="h-px w-5 bg-[#d5b16b]" />
              Our working Process
            </p>

            <h2 className="text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              From concept
              <span className="font-light italic text-[#d5b16b]">
                {" "}to completion.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-white/60 sm:text-right sm:text-sm">
            Four considered stages. One clear direction.
          </p>
        </div>

        
    
        {/* Process stages */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/15 bg-[#1c3445]/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#d5b16b]/70 hover:bg-[#203b4e] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
            >
              {/* Gold top accent */}
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#d5b16b] transition-all duration-300 group-hover:w-full" />

              {/* Step number */}
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#d5b16b]/35 bg-[#d5b16b]/10 text-[11px] font-semibold tabular-nums text-[#d5b16b] transition-colors duration-300 group-hover:bg-[#d5b16b] group-hover:text-[#172b3a]">
                  {step.number}
                </span>

                <span className="h-px flex-1 bg-white/15">
                  <span className="block h-px w-0 bg-[#d5b16b] transition-all duration-500 group-hover:w-full" />
                </span>

                <span className="text-[9px] tracking-widest text-white/40">
                  {String(index + 1).padStart(2, "0")}/04
                </span>
              </div>

              {/* Step content */}
              <h3 className="text-base font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-[#d5b16b] sm:text-lg">
                {step.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/60 sm:text-[13px]">
                {step.description}
              </p>
            </article>
          ))}
        </div>




        {/* Footer note */}
        <div className="flex flex-col gap-2 border-t border-white/15 pt-4 sm:flex-row sm:items-start sm:gap-3">
          <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#d5b16b]">
            Project note
          </span>

          <p className="text-[10px] leading-5 text-white/50 sm:text-xs">
            Project stages and approvals depend on the agreed scope and any
            applicable design, regulatory, and construction requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
