
import Image from "next/image";
import Link from "next/link";

const improvements = [
  {
    number: "01",
    title: "Interior Renovations",
    description:
      "Refresh living rooms, bedrooms, kitchens, bathrooms, and other interior spaces to better suit your needs.",
  },
  {
    number: "02",
    title: "Space Remodelling",
    description:
      "Improve the layout and use of available space through carefully planned alterations within the agreed project scope.",
  },
  {
    number: "03",
    title: "Repairs & Upgrades",
    description:
      "Address worn surfaces, outdated finishes, and areas that need repair or improvement.",
  },
  {
    number: "04",
    title: "Exterior Improvements",
    description:
      "Refresh external walls, finishes, and other building features to improve the overall appearance of your property.",
  },
];

export default function RenovationsRemodelling() {
  return (
    <main className="overflow-hidden bg-white text-[#172b3a]">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-14 lg:py-16">
        <div className="grid items-center gap-9 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#bd9143]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94702f] sm:text-sm">
                02 / Renovations & Remodelling
              </p>
            </div>

            <h1 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              A new perspective on your existing space.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#172b3a]/75 sm:text-base sm:leading-8">
              Your property does not always need to be rebuilt to feel new.
              Makyn offers renovation and remodelling solutions designed to
              improve functionality, refresh finishes, and make better use
              of the spaces you already have.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#172b3a]/70 sm:text-base sm:leading-8">
              Whether you are improving a home, updating an office, or
              refreshing a commercial property, we work with your priorities
              and the agreed project requirements.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#172b3a] px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#bd9143] hover:text-[#172b3a]"
              >
                Transform Your Space
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
                Thoughtful planning
              </p>
              <p className="text-xs font-medium text-[#172b3a]/65">
                <span className="mr-2 text-[#bd9143]">02</span>
                Quality finishes
              </p>
              <p className="text-xs font-medium text-[#172b3a]/65">
                <span className="mr-2 text-[#bd9143]">03</span>
                Practical solutions
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative mx-auto w-full max-w-2xl pb-5 pl-4 sm:pb-7 sm:pl-6">
            <div className="absolute bottom-0 left-0 h-3/4 w-3/4 border-b-2 border-l-2 border-[#bd9143]" />

            <div className="relative aspect-[5/4] overflow-hidden bg-[#e7e2d8]">
              <Image
                src="/images/services/renovations.webp"
                alt="Interior renovation and remodelling"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute right-0 top-5 max-w-[175px] bg-white p-4 shadow-lg sm:right-2 sm:top-7 sm:max-w-[195px] sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#94702f] sm:text-xs">
                Our focus
              </p>
              <p className="mt-2 text-base font-semibold leading-snug sm:text-lg">
                Better spaces. Better living.
              </p>
              <div className="mt-3 h-1 w-10 bg-[#bd9143]" />
            </div>
          </div>
        </div>
      </section>

      {/* IMPROVEMENT AREAS */}
      <section className="bg-[#f7f5f0] px-6 py-12 sm:px-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#bd9143]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94702f] sm:text-sm">
                  What we can improve
                </p>
              </div>

              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Make more of the space you have.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#172b3a]/65">
              From focused repairs to complete room transformations, we help
              you make considered improvements to your property.
            </p>
          </div>

          <div className="mt-8 grid gap-x-12 md:grid-cols-2">
            {improvements.map((item) => (
              <article
                key={item.number}
                className="group border-t border-[#172b3a]/15 py-5 sm:py-6"
              >
                <div className="flex items-start gap-5">
                  <span className="pt-1 text-sm font-semibold tabular-nums text-[#bd9143]">
                    {item.number}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#94702f] sm:text-xl">
                        {item.title}
                      </h3>

                      <span
                        aria-hidden="true"
                        className="text-lg text-[#bd9143] transition-transform duration-300 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-[#172b3a]/70 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NAVY CALL TO ACTION */}
      <section className="bg-[#172b3a] px-6 py-10 text-white sm:px-10 sm:py-12 lg:py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#d5b16b]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5b16b] sm:text-sm">
                Ready for a change?
              </p>
            </div>

            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              Tell us what you would like to improve.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
              Let's discuss your ideas, your priorities, and the right
              approach for your renovation project.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 bg-[#bd9143] px-5 py-3.5 text-sm font-semibold text-[#172b3a] transition-colors duration-300 hover:bg-[#d5b16b]"
          >
            Plan Your Renovation
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
