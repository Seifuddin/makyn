
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Roofing Installation",
    description:
      "Roofing work planned around the building design, suitable materials, and the requirements of the project.",
    details: [
      "Roof framing and structural coordination",
      "Roof covering installation or replacement",
      "Roofing repairs within the agreed scope",
    ],
  },
  {
    number: "02",
    title: "Ceiling Installation",
    description:
      "Ceiling installation and finishing that contribute to a clean, coordinated interior appearance.",
    details: [
      "Ceiling board installation",
      "Ceiling finishing and detailing",
      "Ceiling upgrades and repairs",
    ],
  },
];

export default function RoofingCeilings() {
  return (
    <main className="overflow-hidden bg-[#f7f5f0] text-[#172b3a]">
            {/* HERO */}
      <section className="relative bg-white text-[#172b3a]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-14 lg:py-16">
          <div className="grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#bd9143]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94702f] sm:text-sm">
                  04 / Roofing & Ceilings
                </p>
              </div>

              <h1 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                Protection above.
                <span className="mt-1 block text-[#bd9143]">
                  Finishing within.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#172b3a]/75 sm:text-base sm:leading-8">
                Roofing protects the building, while ceilings help define
                the character of its interior. Makyn provides roofing and
                ceiling installation services tailored to the requirements
                of your construction or renovation project.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#172b3a]/65 sm:text-base sm:leading-8">
                From roof covering to interior ceiling finishes, we focus
                on practical solutions, careful installation, and details
                that complement the building.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-[#bd9143] px-5 py-3.5 text-sm font-semibold text-[#172b3a] transition-colors duration-300 hover:bg-[#d5b16b]"
                >
                  Plan Your Project
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
                  Weather protection
                </p>
                <p className="text-xs text-[#172b3a]/65">
                  <span className="mr-2 font-semibold text-[#94702f]">02</span>
                  Interior finishing
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative mx-auto w-full max-w-2xl pb-5 pl-4 sm:pl-6">
              <div className="absolute bottom-0 left-0 h-24 w-24 bg-[#bd9143] sm:h-28 sm:w-28" />

              <div className="absolute right-0 top-0 z-10 h-16 w-16 border-r border-t border-[#bd9143] sm:h-20 sm:w-20" />

              <div className="relative aspect-[5/4] overflow-hidden bg-white/5">
                <Image
                  src="/images/services/roofing.jpg"
                  alt="Roofing work on a building"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 right-3 z-20 max-w-[210px] bg-[#f7f5f0] px-4 py-3 text-[#172b3a] shadow-lg sm:right-5 sm:px-5 sm:py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#94702f] sm:text-xs">
                  Our approach
                </p>
                <p className="mt-1 text-sm font-semibold sm:text-base">
                  Protection meets precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-14 lg:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#bd9143]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94702f] sm:text-sm">
                What we do
              </p>
            </div>

            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Essential details, carefully considered.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#172b3a]/65">
            We coordinate each stage around your building's needs, the
            selected materials, and the agreed project specifications.
          </p>
        </div>

        <div className="mt-8">
          {services.map((service, index) => (
            <article
              key={service.number}
              className={`grid gap-5 border-t border-[#172b3a]/15 py-6 sm:py-7 lg:grid-cols-[76px_0.95fr_1.05fr] lg:items-start lg:gap-10 ${
                index === 1 ? "lg:pl-10" : ""
              }`}
            >
              <span className="text-3xl font-light leading-none text-[#bd9143] sm:text-4xl">
                {service.number}
              </span>

              <div>
                <h3 className="text-xl font-semibold sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#172b3a]/70 sm:text-base">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3 lg:pt-1">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 border-b border-[#172b3a]/10 pb-3 text-sm leading-6 text-[#172b3a]/80 last:border-0"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#bd9143]"
                      aria-hidden="true"
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* NAVY CTA */}
      <section className="bg-[#172b3a] px-6 py-10 text-white sm:px-10 sm:py-12 lg:py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#d5b16b]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5b16b] sm:text-sm">
                Build with confidence
              </p>
            </div>

            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              Let's plan the details of your project.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
              Tell us about your roofing or ceiling requirements and let's
              discuss a suitable way forward.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 bg-[#bd9143] px-5 py-3.5 text-sm font-semibold text-[#172b3a] transition-colors duration-300 hover:bg-[#d5b16b]"
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

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
            MAKYN CONSTRUCTION COMPANY LIMITED
          </p>
        </div>
      </section>
    </main>
  );
}
