
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/components/projects/projects-data";
import type { ProjectDetail } from "@/components/projects/project-details";

type ProjectDetailPageProps = {
  project: Project;
  detail: ProjectDetail;
};

export default function ProjectDetailPage({
  project,
  detail,
}: ProjectDetailPageProps) {
  return (
    <main className="bg-[#F7F5F0] text-[#172B3A]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#172B3A] text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101D27]/95 via-[#101D27]/80 to-[#101D27]/35" />

        <div className="mx-auto grid min-h-[420px] max-w-7xl items-end gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[490px] lg:grid-cols-[1fr_0.45fr] lg:items-center lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D5B16B]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D5B16B] sm:text-xs">
                {detail.eyebrow}
              </p>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {detail.headline}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              {detail.intro}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/contact?service=${encodeURIComponent(project.title)}`}
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#BD9143] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#172B3A] transition-colors hover:bg-[#D5B16B]"
              >
                Request a Quotation
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center border border-white/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Discuss Your Project
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="hidden border-l border-white/25 pl-6 lg:block">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
              Makyn Construction
            </p>
            <p className="mt-3 text-lg leading-7">
              Your trusted construction partner.
            </p>
          </div>
        </div>
      </section>

      {/* Overview / Understanding the Service */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Left column with image */}
          <div>
            <div className="group relative mb-6 aspect-[5/3] overflow-hidden bg-[#172B3A]/10">
              <Image
                src={project.image}
                alt={`${project.title} — service overview`}
                fill
                sizes="(max-width: 1023px) 100vw, 35vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/65 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <span className="h-px w-7 bg-[#D5B16B]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                  Our Approach
                </span>
              </div>
            </div>

            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#98702F]">
              Understanding the Service
            </p>

            <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Work that starts with a clear plan.
            </h2>

            <div className="mt-6 h-1 w-14 bg-[#BD9143]" />
          </div>

          {/* Right column: service information */}
          <div className="space-y-5">
            {detail.overview.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-7 text-[#52606A] sm:text-base sm:leading-8"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid gap-3 border-t border-[#172B3A]/15 pt-5 sm:grid-cols-2">
              {detail.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex gap-3 text-sm leading-6"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#BD9143]" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How the work is done */}
      <section
        id="process"
        className="bg-[#172B3A] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 max-w-2xl">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D5B16B]">
              From Planning to Completion
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              How the work is carried out.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/65">
              A clearly defined process helps align expectations, coordinate
              the work and identify important decisions before they become
              expensive problems.
            </p>
          </div>

          <div className="grid gap-0 border-t border-white/15 sm:grid-cols-2 lg:grid-cols-5">
            {detail.process.map((step, index) => (
              <article
                key={step.title}
                className="border-b border-white/15 py-5 sm:px-4 sm:odd:border-r sm:last:border-r-0 lg:border-b-0 lg:border-r lg:px-5 lg:py-6 lg:first:pl-0"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-[#D5B16B]">
                  STEP {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-base font-semibold leading-snug">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing guide / Budget Planning */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left column with image */}
          <div>
            <div className="group relative mb-6 aspect-[5/3] overflow-hidden bg-[#172B3A]/10">
              <Image
                src={project.image}
                alt={`${project.title} — project budget planning`}
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/75 via-[#172B3A]/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D5B16B]">
                  Plan with Confidence
                </p>

                <p className="mt-2 max-w-xs text-lg font-medium leading-snug text-white">
                  Quality, scope and cost — considered together.
                </p>
              </div>
            </div>

            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#98702F]">
              Budget Planning
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              {detail.priceHeading}
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#52606A]">
              Costs should be assessed against the actual scope and
              specification, rather than relying on a headline rate alone.
            </p>
          </div>

          {/* Right column: pricing information */}
          <div className="border border-[#172B3A]/15 bg-white/60 p-5 sm:p-7 lg:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#98702F]">
              Indicative price guide
            </p>

            <p className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {detail.priceRange}
            </p>

            <p className="mt-2 text-sm text-[#52606A]">
              {detail.priceUnit}
            </p>

            <div className="my-6 h-px bg-[#172B3A]/15" />

            <h3 className="text-base font-semibold">
              What affects the cost?
            </h3>

            <ul className="mt-4 space-y-3">
              {detail.priceFactors.map((factor) => (
                <li
                  key={factor}
                  className="flex gap-3 text-sm leading-6"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#BD9143]" />
                  <span className="text-[#52606A]">{factor}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 border-l-2 border-[#BD9143] pl-4 text-xs leading-6 text-[#52606A]">
              {detail.priceNote}
            </p>

            <Link
              href={`/contact?service=${encodeURIComponent(project.title)}`}
              className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#172B3A] transition-colors hover:text-[#98702F]"
            >
              Get a project-specific estimate
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional photographs */}
      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#98702F]">
                Visual Details
              </p>

              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Explore the work.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#52606A]">
              A closer look at the materials, details and stages involved
              in this type of service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {detail.gallery.map((image, index) => (
              <figure key={image} className="group">
                <div
                  className={`relative overflow-hidden bg-[#172B3A]/10 ${
                    index === 1
                      ? "aspect-[4/5]"
                      : index === 2
                        ? "aspect-square"
                        : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} — service detail ${index + 1}`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute bottom-3 left-3 bg-[#172B3A]/85 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white">
                    Detail {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </figure>
            ))}
          </div>

          <p className="mt-4 hidden text-xs leading-5 text-[#52606A]">
            Replace these gallery placeholders with Makyn's actual project
            photographs before publishing.
          </p>
        </div>
      </section>

      {/* Frequently asked questions */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#98702F]">
              Common Questions
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Before you get started.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#52606A]">
              Every project is different. These answers cover common
              considerations, but your site and scope will determine
              the final approach.
            </p>
          </div>

          <div className="divide-y divide-[#172B3A]/15 border-t border-[#172B3A]/15">
            {detail.faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold leading-6 sm:text-base">
                  <span>{faq.question}</span>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl font-normal text-[#BD9143] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="max-w-3xl pt-3 pr-6 text-sm leading-7 text-[#52606A]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="bg-[#172B3A] px-5 py-12 text-white sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D5B16B]">
              Let's Discuss Your Project
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/70">
              Tell us what you want to build, improve or finish.
              Let's discuss the scope, timeline and next steps.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href={`/contact?service=${encodeURIComponent(project.title)}`}
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#BD9143] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#172B3A] transition-colors hover:bg-[#D5B16B]"
            >
              Request a Quotation
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center border border-white/35 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10"
            >
              Contact Makyn
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
