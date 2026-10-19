
import ArrowIcon from "@/components/ui/arrow-icon";

export default function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-[#172b3a] px-5 py-7 text-white sm:px-8 sm:py-8 lg:px-12"
    >
      {/* Subtle gold accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-1 bg-[#bd9143]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        {/* CTA message */}
        <div className="max-w-xl">
          <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-[#d5b16b]">
            LET&apos;S BUILD SOMETHING GREAT
          </p>

          <h2
            id="cta-heading"
            className="text-2xl leading-tight font-semibold tracking-tight sm:text-3xl"
          >
            Planning your next project?
          </h2>

          <p className="mt-2 max-w-lg text-xs leading-5 text-white/65 sm:text-sm">
            From new builds to renovations, let&apos;s discuss your vision
            and take the next step together.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex min-h-10 items-center justify-center gap-2 bg-[#bd9143] px-4 py-2.5 text-xs font-bold text-[#172b3a] transition-colors hover:bg-[#d5b16b]"
          >
            Get a Quotation
            <ArrowIcon />
          </a>

          <a
            href="#services"
            className="inline-flex min-h-10 items-center justify-center border border-white/25 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#d5b16b] hover:text-[#d5b16b]"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
