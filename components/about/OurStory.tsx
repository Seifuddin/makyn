
import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="overflow-hidden bg-[#F7F5F0] py-24 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* Image composition */}
          <div className="relative pb-12 pr-7 sm:pr-12">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#E7E2D8]">
              <Image
                src="/images/services/masonry.jpg"
                alt="Construction craftsmanship and masonry work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/40 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                  Our Commitment
                </p>
                <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  Quality in Every Detail.
                </p>
              </div>
            </div>

            {/* Overlapping brand block */}
            <div className="absolute -bottom-1 right-0 max-w-[245px] bg-[#172B3A] p-6 text-white sm:max-w-[280px] sm:p-8">
              <span className="text-4xl font-light text-[#D5B16B]">
                M.
              </span>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Thoughtful solutions. Dependable workmanship.
                Lasting value.
              </p>
            </div>

            {/* Background accent */}
            <div className="absolute -left-5 -top-5 -z-0 h-32 w-32 border-l border-t border-[#BD9143]/60" />
          </div>

          {/* Story content */}
          <div className="relative">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#BD9143]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A7130]">
                01 / Who We Are
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#172B3A] sm:text-5xl lg:text-6xl">
              More Than
              <span className="block font-light italic">
                Construction.
              </span>
              <span className="block">A Lasting Legacy.</span>
            </h2>

            <div className="mt-8 h-1 w-16 bg-[#BD9143]" />

            <p className="mt-8 text-lg leading-8 text-[#4B5962]">
              At Makyn Construction Company Limited, we believe
              every successful project begins with a clear vision
              and is realised through careful planning, skilled
              execution, and attention to detail.
            </p>

            <p className="mt-5 text-base leading-8 text-[#657078]">
              Our approach brings together practical construction
              expertise, thoughtful design, and dependable service.
              Whether it is a new building, a renovation, or an
              improvement to an existing space, we aim to deliver
              solutions that reflect our clients&apos; needs and
              make the most of every project.
            </p>

            <p className="mt-5 text-base leading-8 text-[#657078]">
              We value honest communication, responsible
              workmanship, and the trust our clients place in us
              from the first conversation to project completion.
            </p>

            <div className="mt-10 border-t border-[#172B3A]/15 pt-7">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 text-sm font-bold text-[#172B3A]"
              >
                Let&apos;s Build Together
                <span className="flex h-10 w-10 items-center justify-center border border-[#BD9143] text-lg transition group-hover:bg-[#BD9143]">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
