
const principles = [
  {
    number: "01",
    title: "Our Mission",
    description:
      "To deliver thoughtful construction and design solutions through quality workmanship, responsible planning, and a client-focused approach.",
  },
  {
    number: "02",
    title: "Our Vision",
    description:
      "To build lasting value and earn trust through dependable construction solutions that serve people and communities.",
  },
  {
    number: "03",
    title: "Our Values",
    description:
      "Integrity, quality, accountability, collaboration, and a commitment to understanding every client's needs.",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="bg-[#f7f5f0] px-5 py-16 text-[#172b3a] sm:px-8 sm:py-20 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Compact section heading */}
        <div className="mb-5 flex flex-col justify-between gap-3 sm:mb-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bd9143] sm:text-[10px]">
              <span className="h-px w-5 bg-[#bd9143]" />
              What guides us
            </p>

            <h2 className="text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Strong principles.{" "}
              <span className="font-light text-[#bd9143]">
                Lasting results.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-xs leading-5 text-[#172b3a]/70 sm:text-sm sm:leading-6">
            The way we plan, communicate, and approach our work matters just as
            much as the structures we help create.
          </p>
        </div>

        {/* Shorter principle cards */}
        <div className="grid gap-3 md:grid-cols-3">
          {principles.map((item) => (
            <article
              key={item.number}
              className="group relative flex flex-col overflow-hidden border border-[#172b3a]/10 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#bd9143]/60 hover:shadow-md hover:shadow-[#172b3a]/5 sm:p-5"
            >
              {/* Gold top accent */}
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#bd9143] transition-all duration-300 group-hover:w-full" />

              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#bd9143]">
                  {item.number}
                </span>

                <span className="flex h-7 w-7 items-center justify-center border border-[#bd9143]/40 text-base font-light text-[#bd9143] transition-colors duration-300 group-hover:bg-[#172b3a] group-hover:text-[#d5b16b]">
                  +
                </span>
              </div>

              <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#172b3a]/70 sm:text-sm sm:leading-6">
                {item.description}
              </p>

              <div className="mt-4 h-px w-8 bg-[#bd9143]/70 transition-all duration-300 group-hover:w-14" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
