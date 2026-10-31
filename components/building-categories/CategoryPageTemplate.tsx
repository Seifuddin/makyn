import Image from "next/image";
import Link from "next/link";
import type { BuildingCategory } from "./buildingCategoriesData";

interface CategoryPageTemplateProps {
  category: BuildingCategory;
  relatedCategories: BuildingCategory[];
}

export default function CategoryPageTemplate({
  category,
  relatedCategories,
}: CategoryPageTemplateProps) {
  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "Understanding your vision, requirements, priorities and project objectives.",
    },
    {
      number: "02",
      title: "Planning & Design",
      description:
        "Establishing the project scope, coordinating plans and considering technical requirements.",
    },
    {
      number: "03",
      title: "Construction",
      description:
        "Executing the agreed construction works with attention to quality and workmanship.",
    },
    {
      number: "04",
      title: "Review & Handover",
      description:
        "Reviewing the completed works and coordinating the project handover.",
    },
  ];

  return (
    <main className="bg-[#f7f5f0]">

      {/* ==========================================
          HERO SECTION
      ========================================== */}

      <section className="relative flex min-h-[430px] items-end overflow-hidden bg-[#172b3a] lg:min-h-[510px]">

        <Image
          src={category.image}
          alt={category.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101e29]/95 via-[#172b3a]/65 to-[#172b3a]/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#101e29]/80 via-transparent to-[#172b3a]/15" />

        {/* Hero Content */}
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-12 pt-32 sm:px-8 lg:px-12 lg:pb-16">

          {/* Breadcrumb */}
          <div className="mb-10 flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.17em] text-white/65">

            <Link
              href="/"
              className="transition-colors hover:text-[#d5b16b]"
            >
              Home
            </Link>

            <span className="text-[#bd9143]">/</span>

            <Link
              href="/projects"
              className="transition-colors hover:text-[#d5b16b]"
            >
              Building Categories
            </Link>

            <span className="text-[#bd9143]">/</span>

            <span className="text-[#d5b16b]">
              {category.shortTitle}
            </span>
          </div>

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#bd9143]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d5b16b]">
                BUILDING CATEGORY {category.number}
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[66px]">
              {category.title}
            </h1>

            <h2 className="mt-4 text-lg font-light italic text-[#d5b16b] sm:text-xl">
              {category.subtitle}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              {category.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-[#bd9143] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#a77d35]"
              >
                Discuss Your Project

                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#overview"
                className="inline-flex items-center gap-3 border border-white/35 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:border-[#d5b16b] hover:text-[#d5b16b]"
              >
                Discover More

                <span>↓</span>
              </Link>

            </div>
          </div>
        </div>

        {/* Category Number */}
        <div className="absolute bottom-8 right-8 hidden select-none text-[100px] font-light leading-none text-white/[0.08] xl:block">
          {category.number}
        </div>
      </section>


      {/* ==========================================
          CATEGORY INFORMATION STRIP
      ========================================== */}

      <section className="border-b border-[#172b3a]/10 bg-white">

        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-5 px-5 py-6 sm:px-8 lg:grid-cols-4 lg:px-12">

          {[
            "Quality Focus",
            "Functional Design",
            "Careful Execution",
            "Lasting Value",
          ].map((item, index) => (
            <div key={item} className="flex items-center gap-3">

              <span className="text-xs font-semibold text-[#bd9143]">
                0{index + 1}
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#172b3a] sm:text-xs">
                {item}
              </span>

            </div>
          ))}

        </div>
      </section>


      {/* ==========================================
          OVERVIEW SECTION
      ========================================== */}

      <section
        id="overview"
        className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      >

        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">

          {/* Text */}
          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#bd9143]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#bd9143]">
                AN OVERVIEW
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-tight tracking-tight text-[#172b3a] sm:text-4xl lg:text-[45px]">
              Building with
              <br />
              <span className="font-light italic text-[#bd9143]">
                purpose and precision.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#172b3a]/70">
              {category.overview}
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-[#172b3a]/15 pt-6">

              <span className="text-3xl font-light text-[#bd9143]">
                {category.number}
              </span>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#172b3a]">
                  Makyn Construction
                </p>

                <p className="mt-1 text-xs text-[#172b3a]/55">
                  Your trusted construction partner.
                </p>
              </div>

            </div>
          </div>

          {/* Image */}
          <div className="relative">

            <div className="relative h-[330px] overflow-hidden sm:h-[400px] lg:h-[460px]">

              <Image
                src={category.image}
                alt={`${category.shortTitle} construction`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172b3a]/35 to-transparent" />
            </div>

            <div className="absolute -bottom-5 -left-3 hidden h-24 w-24 border-b-2 border-l-2 border-[#bd9143] sm:block" />

            <div className="absolute -right-4 -top-4 hidden h-24 w-24 border-r-2 border-t-2 border-[#bd9143] sm:block" />

          </div>
        </div>
      </section>


      {/* ==========================================
          PROJECT TYPES
      ========================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-9 bg-[#bd9143]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#bd9143]">
                  PROJECT POSSIBILITIES
                </span>
              </div>

              <h2 className="text-3xl font-medium tracking-tight text-[#172b3a] sm:text-4xl">
                What We Build
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#172b3a]/60">
              Explore the different building types and project possibilities
              within our {category.shortTitle.toLowerCase()} construction category.
            </p>

          </div>

          {/* Project Types Grid */}
          <div className="grid grid-cols-2 gap-px bg-[#172b3a]/10 md:grid-cols-3 lg:grid-cols-6">

            {category.examples.map((example, index) => (
              <div
                key={example}
                className="group flex min-h-[125px] flex-col justify-between bg-[#f7f5f0] p-5 transition-colors duration-300 hover:bg-[#172b3a] sm:min-h-[145px] sm:p-6"
              >

                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-semibold tracking-widest text-[#bd9143]">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-[#bd9143] transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>

                </div>

                <h3 className="mt-7 text-sm font-medium leading-6 text-[#172b3a] transition-colors group-hover:text-white">
                  {example}
                </h3>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ==========================================
          CONSTRUCTION HIGHLIGHTS
      ========================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="mb-10 max-w-2xl">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#bd9143]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#bd9143]">
                OUR APPROACH
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-tight text-[#172b3a] sm:text-4xl">
              What Defines Our
              <span className="font-light italic text-[#bd9143]">
                {" "}Construction Approach
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            {category.features.map((feature, index) => (
              <div
                key={feature.title}
                className="group border border-[#172b3a]/10 bg-white p-6 transition-all duration-300 hover:border-[#bd9143] hover:shadow-[0_12px_35px_rgba(23,43,58,0.07)] sm:p-8"
              >

                <div className="mb-8 flex items-center justify-between">

                  <span className="text-3xl font-light text-[#bd9143]">
                    0{index + 1}
                  </span>

                  <span className="h-px w-12 bg-[#bd9143]/50 transition-all duration-300 group-hover:w-20" />

                </div>

                <h3 className="mb-3 text-lg font-medium text-[#172b3a]">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-[#172b3a]/65">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ==========================================
          CONSTRUCTION PROCESS
      ========================================== */}

      <section className="relative overflow-hidden bg-[#172b3a] py-16 sm:py-20 lg:py-24">

        {/* Blueprint Decoration */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="mb-12 max-w-2xl">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#bd9143]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#d5b16b]">
                HOW WE WORK
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl">
              From Vision to
              <span className="font-light italic text-[#d5b16b]">
                {" "}Reality.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60">
              {category.processIntro}
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {processSteps.map((step) => (
              <div
                key={step.number}
                className="border border-white/15 bg-white/[0.035] p-6 transition-all duration-300 hover:border-[#bd9143]/70 hover:bg-white/[0.07] sm:p-7"
              >

                <span className="text-3xl font-light text-[#d5b16b]">
                  {step.number}
                </span>

                <div className="my-5 h-px w-10 bg-[#bd9143]" />

                <h3 className="mb-3 text-base font-medium text-white">
                  {step.title}
                </h3>

                <p className="text-xs leading-7 text-white/60">
                  {step.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ==========================================
          OTHER BUILDING CATEGORIES
      ========================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>

              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-9 bg-[#bd9143]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#bd9143]">
                  EXPLORE MORE
                </span>
              </div>

              <h2 className="text-3xl font-medium text-[#172b3a] sm:text-4xl">
                Other Building Categories
              </h2>
            </div>

            <Link
              href="/projects"
              className="text-xs font-semibold uppercase tracking-[0.15em] text-[#bd9143] transition-colors hover:text-[#172b3a]"
            >
              View All Categories →
            </Link>

          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {relatedCategories.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group flex items-center justify-between border border-[#172b3a]/10 bg-white p-5 transition-all duration-300 hover:border-[#bd9143] hover:bg-[#172b3a] sm:p-6"
              >

                <div className="flex items-center gap-4">

                  <span className="text-sm font-medium text-[#bd9143]">
                    {item.number}
                  </span>

                  <span className="text-sm font-medium text-[#172b3a] transition-colors group-hover:text-white">
                    {item.shortTitle}
                  </span>

                </div>

                <span className="text-lg text-[#bd9143] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </Link>
            ))}

          </div>
        </div>
      </section>


      {/* ==========================================
          FINAL CTA
      ========================================== */}

      <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-20">

        <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#172b3a] px-7 py-12 sm:px-12 lg:px-16 lg:py-14">

          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -right-20 -top-36 h-[380px] w-[380px] rounded-full border border-[#d5b16b]/15" />

          <div className="pointer-events-none absolute -right-5 -top-20 h-[270px] w-[270px] rounded-full border border-[#d5b16b]/10" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">

              <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d5b16b]">
                LET'S BUILD SOMETHING MEANINGFUL
              </span>

              <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-[46px]">
                Have a project in mind?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                Tell us about your vision, your requirements and what
                you would like to achieve. Let's take the first step
                towards making it happen.
              </p>

            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-5 bg-[#bd9143] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#a77d35]"
            >
              Start Your Project

              <span className="text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}