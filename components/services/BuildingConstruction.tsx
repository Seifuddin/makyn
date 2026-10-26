
import Image from "next/image";
import Link from "next/link";

const stages = [
  {
    number: "01",
    title: "Planning & Preparation",
    description:
      "We understand your requirements, define the project scope, and prepare for the work ahead.",
  },
  {
    number: "02",
    title: "Structural Development",
    description:
      "From foundations and walling to the main structure, we focus on careful execution and agreed specifications.",
  },
  {
    number: "03",
    title: "Finishing & Handover",
    description:
      "We coordinate the remaining construction and finishing activities to bring your vision closer to reality.",
  },
];

export default function BuildingConstruction() {
  return (
    <main className="overflow-hidden bg-[#f7f5f0] text-[#172b3a]">
      
{/* Compact Hero */}
<section className="relative bg-white text-[#172b3a]">
  <div className="mx-auto grid max-w-7xl items-center gap-9 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-2 lg:gap-14 lg:py-16">
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#94702f] sm:text-sm">
        01 / Building Construction
      </p>

      <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        Strong foundations.
        <span className="mt-1 block text-[#bd9143]">
          Lasting structures.
        </span>
      </h1>

      <p className="mt-5 max-w-xl text-sm leading-7 text-[#172b3a]/75 sm:text-base sm:leading-8">
        From the earliest stages of construction to the final details,
        Makyn helps bring residential and commercial building projects
        to life through thoughtful planning and careful execution.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-[#bd9143] px-5 py-3.5 text-sm font-semibold text-[#172b3a] transition duration-300 hover:bg-[#d5b16b]"
        >
          Discuss Your Project
          <span aria-hidden="true">↗</span>
        </Link>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-[#172b3a]/80 transition hover:text-[#94702f]"
        >
          Explore Services
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="mt-7 flex items-center gap-3 border-t border-[#172b3a]/15 pt-5">
        <span className="h-8 w-1 bg-[#bd9143]" />
        <p className="text-xs leading-5 text-[#172b3a]/65 sm:text-sm">
          Your trusted construction partner.
        </p>
      </div>
    </div>

    <div className="relative mx-2 mb-3 sm:mx-3 lg:mx-0">
      <div className="absolute -bottom-3 -left-3 h-20 w-20 border-b border-l border-[#bd9143]/80 sm:h-24 sm:w-24" />

      <div className="relative aspect-[5/3] overflow-hidden sm:aspect-[4/3]">
        <Image
          src="/images/services/buildingconstruction.webp"
          alt="Building construction project"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="absolute -bottom-3 right-0 bg-[#bd9143] px-4 py-3 text-xs font-semibold text-[#172b3a] sm:right-3 sm:px-5">
        Built with purpose.
      </div>
    </div>
  </div>
</section>


      {/* Our Approach */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-14 lg:py-16">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94702f] sm:text-sm">
              Our Approach
            </p>

            <h2 className="mt-3 max-w-md text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              Every stage matters.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#172b3a]/70 sm:text-base sm:leading-8">
              Successful construction depends on clear expectations,
              coordinated work, and attention to detail. We approach each
              stage with the aim of delivering a dependable finished structure.
            </p>
          </div>

          <div>
            {stages.map((stage) => (
              <article
                key={stage.number}
                className="grid gap-3 border-t border-[#172b3a]/15 py-5 sm:grid-cols-[46px_1fr] sm:gap-4"
              >
                <span className="pt-1 text-xs font-semibold tracking-wider text-[#bd9143]">
                  {stage.number}
                </span>

                <div>
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {stage.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#172b3a]/70 sm:leading-7">
                    {stage.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Navy CTA */}
      <section className="bg-[#172b3a] px-6 py-9 text-white sm:px-10 sm:py-11">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5b16b] sm:text-sm">
              Have a Building Project?
            </p>

            <h2 className="mt-2 text-xl font-semibold leading-snug sm:text-2xl lg:text-3xl">
              Let&apos;s build something meaningful together.
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/65">
              Tell us about your plans and let&apos;s discuss the next steps.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 border border-[#d5b16b] bg-[#bd9143] px-5 py-3.5 text-sm font-semibold text-[#172b3a] transition duration-300 hover:bg-[#d5b16b]"
          >
            Request a Consultation
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              ↗
            </span>
          </Link>
        </div>

        <div className="mx-auto mt-7 max-w-7xl border-t border-white/15 pt-4">
          <p className="text-[11px] tracking-wide text-white/45">
            MAKYN CONSTRUCTION COMPANY LIMITED
            <span className="mx-2 text-[#bd9143]">/</span>
            YOUR TRUSTED CONSTRUCTION PARTNER
          </p>
        </div>
      </section>
    </main>
  );
}
