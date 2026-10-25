
import Image from "next/image";

export default function CompanyStory() {
  return (
    <section
      id="our-story"
      className="overflow-hidden bg-[#f7f5f0] px-6 py-14 text-[#172b3a] sm:px-10 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Architectural image */}
        <div className="relative pb-6 pr-4 sm:pb-8 sm:pr-8">
          <div className="absolute bottom-0 right-0 top-8 w-[72%] border border-[#bd9143]/70" />

          <div className="relative aspect-[5/4] overflow-hidden bg-[#e5e0d5] sm:aspect-[4/3]">
            <Image
              src="/images/about.avif"
              alt="Construction and renovation work"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* Commitment label */}
          <div className="absolute -bottom-1 left-0 bg-[#172b3a] px-4 py-3 text-[#f7f5f0] sm:px-6 sm:py-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#d5b16b] sm:text-xs">
              Our commitment
            </p>
            <p className="mt-1 text-base font-medium sm:text-lg">
              Quality in every detail.
            </p>
          </div>
        </div>

        {/* Company story */}
        <div>
          <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#bd9143] sm:text-xs">
            <span className="h-px w-7 bg-[#bd9143]" />
            Who we are
          </div>

          <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            More than construction.
            <span className="mt-1 block font-light text-[#bd9143]">
              A foundation for the future.
            </span>
          </h2>

          <div className="mt-5 space-y-3 text-sm leading-7 text-[#172b3a]/75 sm:text-base sm:leading-7">
            <p>
              Makyn Construction Company Limited is committed to delivering
              thoughtful construction solutions shaped around our clients'
              needs, aspirations, and project goals.
            </p>

            <p>
              From building construction and renovations to roofing, finishing,
              installations, and design, we approach every project with an
              emphasis on careful planning, clear communication, and quality
              workmanship.
            </p>

            <p>
              We believe a successful project is about more than the finished
              structure. It is about the process, the people, and the trust
              built along the way.
            </p>
          </div>

          {/* Closing statement */}
          <div className="mt-6 flex items-center gap-3">
            <span className="h-10 w-px shrink-0 bg-[#bd9143]" />
            <p className="max-w-sm text-sm font-medium leading-6 text-[#172b3a]">
              Your vision matters. Our responsibility is to help bring it to
              life with care and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
