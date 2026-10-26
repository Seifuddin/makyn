
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Project-Specific Support",
    description:
      "Discuss your construction requirements with us so the appropriate work, resources, and next steps can be identified for your project.",
  },
  {
    number: "02",
    title: "Building Maintenance",
    description:
      "Address agreed maintenance needs, repairs, and improvements to help keep your property functional and presentable.",
  },
  {
    number: "03",
    title: "Coordinated Construction Work",
    description:
      "Where the project requires multiple activities, work can be planned and coordinated around the agreed scope and responsibilities.",
  },
  {
    number: "04",
    title: "Residential & Commercial Improvements",
    description:
      "Explore practical improvements for homes, offices, and other properties based on their existing condition and intended use.",
  },
];

export default function ConstructionSolutions() {
  return (
    <main className="overflow-hidden bg-[#f7f5f0] text-[#172b3a]">
     
{/* HERO */}
<section className="bg-white text-[#172b3a]">
  <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-14 lg:py-16">
    <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-9 bg-[#bd9143]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94702f] sm:text-sm">
            06 / Construction Solutions
          </p>
        </div>

        <h1 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
          Your project.
          <span className="mt-1 block text-[#bd9143]">
            A practical way forward.
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-7 text-[#172b3a]/75 sm:text-base sm:leading-8">
          Every construction project has its own requirements.
          Makyn helps clients explore practical building, maintenance,
          and improvement solutions shaped around their property,
          priorities, and intended outcomes.
        </p>

        <p className="mt-3 max-w-xl text-sm leading-7 text-[#172b3a]/65 sm:text-base sm:leading-8">
          Tell us what you are planning, what needs attention, or
          which areas of your property you would like to improve.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-[#bd9143] px-5 py-3.5 text-sm font-semibold text-[#172b3a] transition-colors duration-300 hover:bg-[#d5b16b]"
          >
            Tell Us About Your Project
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              ↗
            </span>
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium text-[#172b3a]/80 underline decoration-[#bd9143] underline-offset-4 transition hover:text-[#94702f]"
          >
            Explore our services
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#172b3a]/15 pt-5">
          <p className="text-xs text-[#172b3a]/65">
            <span className="mr-2 font-semibold text-[#94702f]">01</span>
            Practical planning
          </p>
          <p className="text-xs text-[#172b3a]/65">
            <span className="mr-2 font-semibold text-[#94702f]">02</span>
            Coordinated work
          </p>
          <p className="text-xs text-[#172b3a]/65">
            <span className="mr-2 font-semibold text-[#94702f]">03</span>
            Clear next steps
          </p>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative mx-auto w-full max-w-2xl pb-5 pr-4 sm:pb-7 sm:pr-6">
        <div className="absolute bottom-0 right-0 h-3/4 w-3/4 bg-[#bd9143]" />

        <div className="absolute left-0 top-0 z-10 h-16 w-16 border-l border-t border-[#bd9143] sm:h-20 sm:w-20" />

        <div className="relative aspect-[5/4] overflow-hidden bg-[#f7f5f0]">
          <Image
            src="/images/services/ConstructionSolutions.jpg"
            alt="Construction planning and building project"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        <div className="absolute bottom-0 left-3 z-20 max-w-[210px] bg-[#f7f5f0] px-4 py-3 text-[#172b3a] shadow-lg sm:left-5 sm:px-5 sm:py-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#94702f] sm:text-xs">
            The Makyn approach
          </p>
          <p className="mt-1 text-sm font-semibold sm:text-base">
            One project. A clear direction.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* SOLUTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#bd9143]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94702f] sm:text-sm">
                Flexible support
              </p>
            </div>

            <h2 className="mt-4 max-w-lg text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Solutions shaped around your needs.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#172b3a]/70 sm:text-base sm:leading-8">
              Whether you are starting a new project or improving an existing
              property, the first step is understanding the work required.
              We can then discuss the appropriate services and the next steps
              for your particular situation.
            </p>

            <div className="mt-6 border-l-2 border-[#bd9143] py-1 pl-4 sm:pl-5">
              <p className="font-semibold">Start with a conversation.</p>
              <p className="mt-2 text-sm leading-7 text-[#172b3a]/70">
                Explain your objectives, current challenges, and priorities
                so the discussion can focus on your project.
              </p>

              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#94702f] transition hover:text-[#172b3a]"
              >
                Talk to our team <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div>
            {solutions.map((solution) => (
              <article
                key={solution.number}
                className="group border-t border-[#172b3a]/15 py-5 sm:py-6"
              >
                <div className="grid gap-3 sm:grid-cols-[48px_1fr] sm:gap-5">
                  <span className="pt-1 text-sm font-semibold tabular-nums text-[#bd9143]">
                    {solution.number}
                  </span>

                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#94702f] sm:text-xl">
                        {solution.title}
                      </h3>

                      <span
                        aria-hidden="true"
                        className="shrink-0 text-lg text-[#bd9143] transition-transform duration-300 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-7 text-[#172b3a]/70 sm:text-base">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NAVY CTA */}
      <section className="hidden bg-[#172b3a] px-6 py-10 text-white sm:px-10 sm:py-12 lg:py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#d5b16b]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5b16b] sm:text-sm">
                Every project starts somewhere
              </p>
            </div>

            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              Let's work out the right next step for your property.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
              Share your ideas and requirements with Makyn, and let's discuss
              the scope of your project and how to move forward.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 bg-[#bd9143] px-5 py-3.5 text-sm font-semibold text-[#172b3a] transition-colors duration-300 hover:bg-[#d5b16b]"
          >
            Start an Enquiry
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              ↗
            </span>
          </Link>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
            MAKYN CONSTRUCTION COMPANY LIMITED
          </p>
        </div>
      </section>
    </main>
  );
}
