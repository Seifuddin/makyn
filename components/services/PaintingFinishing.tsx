
import Image from "next/image";
import Link from "next/link";

const finishingSteps = [
  {
    number: "01",
    title: "Surface Preparation",
    description:
      "Prepare surfaces appropriately before painting or applying the specified finish, helping achieve a consistent result.",
  },
  {
    number: "02",
    title: "Painting & Application",
    description:
      "Apply suitable paint and finishing materials according to the selected products, surface requirements, and agreed specifications.",
  },
  {
    number: "03",
    title: "Final Detailing",
    description:
      "Review the completed surfaces, attend to agreed touch-ups, and ensure the finishing work meets the expected scope.",
  },
];

export default function PaintingFinishing() {
  return (
    <main className="overflow-hidden bg-white text-[#172b3a]">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-14 lg:py-16">
        <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#bd9143]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94702f] sm:text-sm">
                05 / Painting & Finishing
              </p>
            </div>

            <h1 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              The finishing touches make the difference.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#172b3a]/75 sm:text-base sm:leading-8">
              A well-finished space brings the entire project together.
              Makyn provides painting and finishing services that help
              improve the appearance of interiors and exteriors while
              complementing the overall design of the property.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#172b3a]/70 sm:text-base sm:leading-8">
              From surface preparation to the final review, we pay attention
              to consistency, neatness, and the details that complete a space.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#172b3a] px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#bd9143] hover:text-[#172b3a]"
              >
                Discuss Your Finishing Needs
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </Link>

              <Link
                href="/services"
                className="text-sm font-semibold text-[#172b3a] underline decoration-[#bd9143] underline-offset-4 transition hover:text-[#94702f]"
              >
                Explore our services
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#172b3a]/15 pt-5">
              <p className="text-xs font-medium text-[#172b3a]/65">
                <span className="mr-2 text-[#bd9143]">01</span>
                Careful preparation
              </p>
              <p className="text-xs font-medium text-[#172b3a]/65">
                <span className="mr-2 text-[#bd9143]">02</span>
                Consistent application
              </p>
              <p className="text-xs font-medium text-[#172b3a]/65">
                <span className="mr-2 text-[#bd9143]">03</span>
                Refined details
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative mx-auto w-full max-w-2xl pb-5 pl-4 sm:pb-7 sm:pl-6">
            <div className="absolute bottom-0 left-0 h-3/4 w-3/4 border-b-2 border-l-2 border-[#bd9143]" />

            <div className="absolute right-0 top-0 z-10 h-16 w-16 border-r border-t border-[#bd9143] sm:h-20 sm:w-20" />

            <div className="relative aspect-[5/4] overflow-hidden bg-[#e7e2d8]">
              <Image
                src="/images/services/painting.jpg"
                alt="Painting and finishing work on an interior wall"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 right-2 z-20 max-w-[205px] bg-[#172b3a] px-4 py-3 text-white shadow-lg sm:right-4 sm:px-5 sm:py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d5b16b] sm:text-xs">
                The final impression
              </p>
              <p className="mt-1 text-sm font-semibold sm:text-base">
                Finish with intention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f7f5f0] px-6 py-12 sm:px-10 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#bd9143]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94702f] sm:text-sm">
                Our process
              </p>
            </div>

            <h2 className="mt-4 max-w-lg text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              From prepared surfaces to polished spaces.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#172b3a]/70 sm:text-base sm:leading-8">
              Finishing work requires more than applying a coat of paint.
              Appropriate preparation, careful application, and attention
              to detail all contribute to the final appearance.
            </p>

            <div className="mt-6 flex items-center gap-3 border-l-2 border-[#bd9143] py-1 pl-4">
              <p className="text-sm font-medium leading-6 text-[#172b3a]/80">
                Every stage contributes to the final result.
              </p>
            </div>
          </div>

          <div>
            {finishingSteps.map((step) => (
              <article
                key={step.number}
                className="grid gap-3 border-t border-[#172b3a]/15 py-5 sm:grid-cols-[54px_1fr] sm:gap-5 sm:py-6"
              >
                <span className="text-sm font-semibold tabular-nums text-[#bd9143]">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#172b3a]/70 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NAVY CTA */}
      <section className="bg-[#172b3a] px-6 py-10 text-white sm:px-10 sm:py-12 lg:py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#d5b16b]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5b16b] sm:text-sm">
                Bring your space together
              </p>
            </div>

            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              Let's create a finish that feels right.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
              Tell us about your property and finishing requirements. We'll
              discuss your ideas and the scope of work with you.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 bg-[#bd9143] px-5 py-3.5 text-sm font-semibold text-[#172b3a] transition-colors duration-300 hover:bg-[#d5b16b]"
          >
            Contact Makyn
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
