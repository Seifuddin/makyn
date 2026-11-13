
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
    <main className="bg-[#F7F5F0] text-[#172B3A]">
      {/* HERO */}
      <section className="relative isolate flex min-h-[410px] items-end overflow-hidden bg-[#172B3A] text-white lg:min-h-[460px]">
        <div className="absolute inset-0 -z-20">
          <Image
            src={category.image}
            alt={category.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101D27]/95 via-[#101D27]/80 to-[#101D27]/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101D27]/70 via-transparent to-[#172B3A]/15" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-24 sm:px-8 sm:pb-12 lg:px-12 lg:pb-14">
          <div className="mb-7 flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/65">
            <Link href="/" className="transition-colors hover:text-[#D5B16B]">
              Home
            </Link>
            <span className="text-[#BD9143]">/</span>
            <Link
              href="/projects"
              className="transition-colors hover:text-[#D5B16B]"
            >
              Building Categories
            </Link>
            <span className="text-[#BD9143]">/</span>
            <span className="text-[#D5B16B]">{category.shortTitle}</span>
          </div>

          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#D5B16B]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D5B16B] sm:text-xs">
                BUILDING CATEGORY {category.number}
              </p>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {category.title}
            </h1>

            <h2 className="mt-3 text-base font-light italic text-[#D5B16B] sm:text-xl">
              {category.subtitle}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              {category.description}
            </p>

            <div className="mt-6 flex w-full flex-row gap-3 sm:w-fit sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 bg-[#BD9143] px-3 text-center text-[10px] font-semibold uppercase tracking-[0.07em] text-[#172B3A] transition-colors hover:bg-[#D5B16B] sm:flex-none sm:px-6 sm:text-xs sm:tracking-[0.1em]"
              >
                Discuss Your Project
                <span className="text-base transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#overview"
                className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 border border-white/50 bg-white/5 px-3 text-center text-[10px] font-semibold uppercase tracking-[0.07em] text-white transition-all hover:border-[#D5B16B] hover:bg-white/10 sm:flex-none sm:px-6 sm:text-xs sm:tracking-[0.1em]"
              >
                Discover More
                <span>↓</span>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-6 right-8 hidden select-none font-serif text-[110px] font-light leading-none text-white/[0.08] xl:block">
            {category.number}
          </div>
        </div>
      </section>

      {/* CATEGORY INFORMATION STRIP */}
      <section className="border-b border-[#172B3A]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-3 px-5 py-4 sm:px-8 lg:grid-cols-4 lg:px-12">
          {[
            "Quality Focus",
            "Functional Design",
            "Careful Execution",
            "Lasting Value",
          ].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <span className="text-xs font-semibold tabular-nums text-[#BD9143]">
                0{index + 1}
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#172B3A] sm:text-[11px] sm:tracking-[0.13em]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section
        id="overview"
        className="scroll-mt-20 px-5 py-9 sm:px-8 sm:py-12 lg:px-12 lg:py-14"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#BD9143]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#98702F]">
                AN OVERVIEW
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
              Building with
              <br />
              <span className="font-normal italic text-[#BD9143]">
                purpose and precision.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#52606A] sm:text-base sm:leading-8">
              {category.overview}
            </p>

            <div className="mt-5 flex items-center gap-4 border-t border-[#172B3A]/15 pt-4">
              <span className="font-serif text-3xl font-light text-[#BD9143]">
                {category.number}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#172B3A]">
                  Makyn Construction
                </p>
                <p className="mt-1 text-xs text-[#52606A]">
                  Your trusted construction partner.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="group relative aspect-[5/4] max-h-[390px] overflow-hidden bg-[#172B3A]/10">
              <Image
                src={category.image}
                alt={`${category.shortTitle} construction`}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D5B16B]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  Makyn Construction
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-2 -left-2 hidden h-16 w-16 border-b-2 border-l-2 border-[#BD9143] sm:block" />
            <div className="pointer-events-none absolute -right-2 -top-2 hidden h-16 w-16 border-r-2 border-t-2 border-[#BD9143] sm:block" />
          </div>
        </div>
      </section>

      {/* PROJECT POSSIBILITIES */}
      <section className="border-y border-[#172B3A]/10 bg-[#EFEEE8] px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 grid gap-4 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-10">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-9 bg-[#BD9143]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#98702F]">
                  PROJECT POSSIBILITIES
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                What We Build
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#52606A] md:justify-self-end">
              Every project has its own purpose. Explore the different
              building types and possibilities within our{" "}
              {category.shortTitle.toLowerCase()} construction category.
            </p>
          </div>

          <div className="grid border-t border-[#172B3A]/20 sm:grid-cols-2 sm:gap-x-10">
            {category.examples.map((example, index) => (
              <div
                key={example}
                className="group flex min-w-0 items-center gap-4 border-b border-[#172B3A]/15 py-3.5 transition-colors hover:border-[#BD9143]"
              >
                <span className="w-7 shrink-0 font-serif text-sm font-medium tabular-nums text-[#BD9143]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="min-w-0 flex-1 font-serif text-base font-medium leading-snug text-[#172B3A] transition-colors group-hover:text-[#98702F] sm:text-lg">
                  {example}
                </h3>

                <span className="shrink-0 text-lg text-[#BD9143] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-9 bg-[#BD9143]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#98702F]">
                OUR APPROACH
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              What Defines Our{" "}
              <span className="font-normal italic text-[#BD9143]">
                Construction Approach
              </span>
            </h2>
          </div>

          <div className="grid border-t border-[#172B3A]/15 md:grid-cols-3">
            {category.features.map((feature, index) => (
              <article
                key={feature.title}
                className="flex gap-4 border-b border-[#172B3A]/15 py-5 md:border-b-0 md:px-5 md:py-5 md:first:pl-0 md:even:border-x md:even:border-[#172B3A]/15 lg:px-7"
              >
                <span className="shrink-0 pt-0.5 font-serif text-2xl font-light text-[#BD9143]">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#172B3A]">
                    {feature.title}
                  </h3>

                  <p className="mt-1.5 max-w-sm text-sm leading-6 text-[#52606A]">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONSTRUCTION PROCESS */}
      <section className="relative overflow-hidden bg-[#172B3A] px-5 py-9 text-white sm:px-8 sm:py-11 lg:px-12 lg:py-12">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 grid gap-3 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-10">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-9 bg-[#BD9143]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D5B16B]">
                  HOW WE WORK
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                From Vision to{" "}
                <span className="font-medium italic text-[#D5B16B]">
                  Reality.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-white/65 md:justify-self-end">
              {category.processIntro}
            </p>
          </div>

          <div className="grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className="border-b border-white/15 py-4 sm:px-5 sm:py-5 sm:odd:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-light text-[#D5B16B]">
                    {step.number}
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                    STEP {index + 1}
                  </span>
                </div>

                <div className="my-3 h-px w-9 bg-[#BD9143]" />

                <h3 className="font-serif text-base font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-xs text-xs leading-6 text-white/65">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER BUILDING CATEGORIES */}
      <section className="px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-9 bg-[#BD9143]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#98702F]">
                  EXPLORE MORE
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                Other Building Categories
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#98702F] transition-colors hover:text-[#172B3A]"
            >
              View All Categories
              <span>→</span>
            </Link>
          </div>

          <div className="grid border-t border-[#172B3A]/15 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCategories.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group flex items-center justify-between gap-4 border-b border-[#172B3A]/15 py-4 transition-colors hover:border-[#BD9143] sm:px-4 sm:first:pl-0 lg:px-5"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="shrink-0 text-sm font-medium text-[#BD9143]">
                    {item.number}
                  </span>

                  <span className="truncate font-serif text-sm font-semibold text-[#172B3A] transition-colors group-hover:text-[#98702F]">
                    {item.shortTitle}
                  </span>
                </div>

                <span className="shrink-0 text-lg text-[#BD9143] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="hidden px-5 pb-9 sm:px-8 sm:pb-12 lg:px-12 lg:pb-14">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#172B3A] px-6 py-7 sm:px-9 sm:py-8 lg:px-12">
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border border-[#D5B16B]/15" />
          <div className="pointer-events-none absolute -right-5 -top-16 h-52 w-52 rounded-full border border-[#D5B16B]/10" />

          <div className="relative flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D5B16B]">
                LET'S BUILD SOMETHING MEANINGFUL
              </span>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Have a project in mind?
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                Tell us about your vision, your requirements and what you
                would like to achieve. Let's take the first step towards
                making it happen.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-11 w-fit shrink-0 items-center justify-center gap-5 bg-[#BD9143] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#172B3A] transition-colors hover:bg-[#D5B16B]"
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
