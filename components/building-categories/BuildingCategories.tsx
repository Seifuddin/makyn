
import BuildingCategoryCard from "./BuildingCategoryCard";
import { buildingCategories } from "./buildingCategoriesData";

export default function BuildingCategories() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f0] px-5 py-24">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#bd9143]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Introduction */}
        <div className="mb-8 flex flex-col justify-between gap-5 lg:mb-9 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#bd9143]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#bd9143]">
                OUR CONSTRUCTION EXPERTISE
              </span>
            </div>

            <h2 className="font-serif text-3xl leading-[1.08] font-semibold tracking-[-0.04em] sm:text-4xl lg:text-[2.8rem]">
              Creating Spaces.
              <br />
              <span className="italic font-normal text-[#bd9143]">
                Building Possibilities.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-1">
            <p className="text-[13px] leading-7 text-[#172b3a]/70 sm:text-sm">
              From places we call home to spaces where businesses grow
              and communities thrive, we approach every project with
              a commitment to quality, functionality and lasting value.
            </p>

            <div className="mt-3 flex items-center gap-3">
              <span className="h-px w-7 bg-[#bd9143]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#172b3a]">
                BUILT WITH PURPOSE
              </span>
            </div>
          </div>
        </div>

        {/* Category Label */}
        <div className="mb-4 flex items-center justify-between border-b border-[#172b3a]/15 pb-3">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#172b3a]/60">
            BUILDING CATEGORIES
          </span>

          <span className="hidden text-[10px] font-medium text-[#bd9143]">
            08 PROJECT TYPES
          </span>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-6">
          {buildingCategories.map((category, index) => (
            <div
              key={category.slug}
              className={
                index < 2
                  ? "md:col-span-1 lg:col-span-3"
                  : "md:col-span-1 lg:col-span-2"
              }
            >
              <BuildingCategoryCard
                slug={category.slug}
                number={category.number}
                title={category.title}
                description={category.description}
                image={category.image}
                examples={category.examples}
                size={index < 2 ? "large" : "normal"}
              />
            </div>
          ))}
        </div>

        {/* Compact CTA */}
        <div className="hidden relative mt-8 overflow-hidden bg-[#172b3a] px-6 py-7 sm:px-8 lg:mt-10 lg:px-10">
          <div className="absolute -right-12 -top-20 h-52 w-52 rounded-full border border-[#d5b16b]/15" />

          <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.23em] text-[#d5b16b]">
                YOUR NEXT PROJECT STARTS HERE
              </span>

              <h3 className="text-2xl font-medium leading-tight text-white sm:text-3xl">
                Have a building project in mind?
              </h3>

              <p className="mt-2 text-xs leading-6 text-white/65">
                Let's discuss your vision and bring your construction
                project to life.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-4 border border-[#bd9143] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#bd9143]"
            >
              Discuss Your Project
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
