
import Image from "next/image";
import Link from "next/link";

const crafts = [
  {
    number: "01",
    title: "Masonry Works",
    description:
      "Bricklaying, blockwork, wall construction, plastering, and masonry repairs carried out according to the agreed project requirements.",
    items: [
      "Brick and block laying",
      "Wall construction",
      "Plastering and repairs",
    ],
  },
  {
    number: "02",
    title: "Carpentry Works",
    description:
      "Practical timber work, installations, fittings, and finishing details that contribute to a functional and well-finished space.",
    items: [
      "Timber framing",
      "Doors and frames",
      "Woodwork and fittings",
    ],
  },
];

export default function MasonryCarpentry() {
  return (
    <main className="overflow-hidden bg-[#f7f5f0] text-[#172b3a]">
      {/* HERO */}
<section className="bg-white text-[#172b3a]">
  <div className="mx-auto grid max-w-7xl items-center gap-9 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:py-16">
    <div>
      <div className="flex items-center gap-3">
        <span className="h-px w-9 bg-[#bd9143]" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94702f] sm:text-sm">
          03 / Masonry & Carpentry
        </p>
      </div>

      <h1 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
        Built by skill.
        <span className="mt-1 block text-[#bd9143]">
          Defined by detail.
        </span>
      </h1>

      <p className="mt-5 max-w-xl text-sm leading-7 text-[#172b3a]/75 sm:text-base sm:leading-8">
        The strength and appearance of a building depend on the quality
        of its workmanship. Makyn provides masonry and carpentry
        services for construction, improvement, and finishing projects.
      </p>

      <p className="mt-3 max-w-xl text-sm leading-7 text-[#172b3a]/65 sm:text-base sm:leading-8">
        From carefully laid walls to neatly fitted timber elements,
        we focus on accuracy, practicality, and attention to detail.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-5">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 bg-[#bd9143] px-5 py-3.5 text-sm font-semibold text-[#172b3a] transition-colors duration-300 hover:bg-[#d5b16b]"
        >
          Discuss Your Requirements
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
          Skilled workmanship
        </p>
        <p className="text-xs text-[#172b3a]/65">
          <span className="mr-2 font-semibold text-[#94702f]">02</span>
          Careful execution
        </p>
        <p className="text-xs text-[#172b3a]/65">
          <span className="mr-2 font-semibold text-[#94702f]">03</span>
          Quality finishing
        </p>
      </div>
    </div>

    {/* IMAGE */}
    <div className="relative mx-auto w-full max-w-2xl pb-5 pr-3">
      <div className="absolute -right-0 top-0 h-20 w-20 border-r border-t border-[#bd9143] sm:h-24 sm:w-24" />

      <div className="relative aspect-[5/4] overflow-hidden bg-white/5">
        <Image
          src="/images/services/masonry.jpg"
          alt="Masonry workmanship on a building project"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 52vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className="absolute -bottom-1 left-4 max-w-[230px] bg-[#f7f5f0] px-4 py-3 text-[#172b3a] shadow-lg sm:left-7 sm:px-5 sm:py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#94702f] sm:text-xs">
          Our principle
        </p>
        <p className="mt-1 text-sm font-semibold sm:text-base">
          Precision in every detail.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CRAFT AREAS */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-14 lg:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#bd9143]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94702f] sm:text-sm">
                Our areas of work
              </p>
            </div>

            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              The craft behind a well-finished building.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#172b3a]/65">
            We approach each task according to its purpose, materials,
            specifications, and place within the wider construction project.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {crafts.map((craft) => (
            <article
              key={craft.number}
              className="group border-t-2 border-[#bd9143] pt-5 sm:pt-6"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#94702f]">
                  {craft.number} / Our craft
                </p>

                <span
                  aria-hidden="true"
                  className="text-lg text-[#bd9143] transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </div>

              <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                {craft.title}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#172b3a]/70 sm:text-base">
                {craft.description}
              </p>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {craft.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[#172b3a]/80"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#bd9143]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* NAVY AND GOLD CTA */}
      <section className="bg-[#172b3a] px-6 py-10 text-white sm:px-10 sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#172b3a]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5b16b] sm:text-sm">
                Let's build with purpose
              </p>
            </div>

            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              Need dependable workmanship for your project?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
              Share your plans with Makyn and let's discuss the right approach
              for your construction or carpentry requirements.
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
