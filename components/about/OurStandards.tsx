
import Image from "next/image";

const standards = [
  {
    number: "01",
    title: "Understand",
    description:
      "We listen to your goals, requirements, budget, and expectations before shaping a suitable approach.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We establish the project scope, discuss design requirements, and organise the work ahead.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We focus on skilled execution, attention to detail, and clear communication throughout the work.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We work towards a completed project that reflects the agreed scope and your expectations.",
  },
];

const principles = [
  {
    number: "01",
    title: "Quality First",
    description:
      "Careful workmanship and attention to the details that matter.",
  },
  {
    number: "02",
    title: "Integrity Always",
    description:
      "Straightforward communication and responsible project handling.",
  },
  {
    number: "03",
    title: "Client Focused",
    description:
      "Solutions shaped around your needs, priorities, and vision.",
  },
];

export default function OurStandards() {
  return (
    <section className="bg-[#172B3A] py-24 text-white sm:py-32 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#BD9143]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5B16B]">
                02 / Our Approach
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Strong Foundations.
              <span className="block font-light italic text-[#D5B16B]">
                Higher Standards.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/65 lg:pb-2">
            Great construction is about more than the finished
            structure. It is about the decisions, care, and
            workmanship that go into every stage of the journey.
          </p>
        </div>

        {/* Photography */}
        <div className="relative mt-14 aspect-[16/7] min-h-[240px] overflow-hidden sm:mt-20">
          <Image
            src="/images/services/ConstructionSolutions.jpg"
            alt="Construction work and building project"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#172B3A]/80 via-[#172B3A]/20 to-transparent" />

          <div className="absolute bottom-6 left-6 max-w-md sm:bottom-10 sm:left-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5B16B]">
              The Makyn Standard
            </p>
            <p className="mt-3 text-2xl font-medium leading-snug sm:text-3xl">
              Every detail contributes to the bigger picture.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="mt-20 sm:mt-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <h3 className="text-2xl font-semibold sm:text-3xl">
              How We Bring Ideas to Life
            </h3>
            <p className="text-sm text-white/50">
              A considered approach at every stage.
            </p>
          </div>

          <div className="grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((step) => (
              <article
                key={step.number}
                className="group border-b border-r border-white/15 p-6 transition hover:bg-white/[0.04] sm:p-8 lg:p-7 xl:p-8"
              >
                <span className="text-sm font-medium tracking-[0.2em] text-[#D5B16B]">
                  {step.number}
                </span>

                <div className="my-7 h-px w-full bg-white/15 transition group-hover:bg-[#BD9143]" />

                <h4 className="text-xl font-semibold">
                  {step.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Core principles */}
        <div className="mt-20 grid gap-10 border-t border-white/15 pt-12 sm:mt-24 sm:grid-cols-3 sm:gap-8">
          {principles.map((principle) => (
            <article key={principle.number} className="flex gap-5">
              <span className="pt-1 text-sm font-semibold text-[#D5B16B]">
                {principle.number}
              </span>

              <div>
                <h4 className="text-lg font-semibold">
                  {principle.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  {principle.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
