
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ArrowIcon from "@/components/ui/arrow-icon";
import { services } from "@/components/data/home-data";

const serviceImages: Record<string, string> = {
  "Building Construction": "/images/services/buildingconstruction.webp",
  "Renovations & Remodelling": "/images/services/renovations.webp",
  "Masonry & Carpentry": "/images/services/masonry.jpg",
  "Roofing & Ceilings": "/images/services/roofing.jpg",
  "Painting & Finishing": "/images/services/painting.jpg",
  "Construction Solutions": "/images/services/ConstructionSolutions.jpg",
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);

  return (
    <section
      className="relative overflow-hidden bg-[#f7f5f0] px-5 py-20"
      id="services"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-11 flex flex-col justify-between gap-7 border-b border-[#172b3a]/15 pb-8 md:mb-14 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#bd9143]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bd9143]">
                What we do
              </span>
            </div>

            <h2 className="font-serif text-3xl leading-[1.08] font-semibold tracking-[-0.04em] sm:text-4xl lg:text-[2.8rem]">
              Our Dedicated
              <br />
              <span className="italic font-normal text-[#bd9143]">
                Services.
              </span>
            </h2>
          </div>

          <div className="max-w-sm md:pb-1">
            <p className="text-sm leading-7 text-[#172b3a]/65 sm:text-base">
              Practical solutions. Skilled workmanship. A commitment to
              getting the details right, from the first foundation to
              the final finish.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#bd9143]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#172b3a]/55">
                Quality in every detail
              </span>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const image = serviceImages[service.title];

            return (
              <article
                key={service.number}
                className="group relative min-w-0 overflow-hidden border border-[#172b3a]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#bd9143]/50 hover:shadow-[0_18px_45px_rgba(23,43,58,0.10)]"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#172b3a]/10">
                  {image ? (
                    <Image
                      src={image}
                      alt={service.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div
                      role="img"
                      aria-label={`${service.title} image unavailable`}
                      className="flex h-full w-full items-center justify-center bg-[#172b3a] text-sm text-white/70"
                    >
                      Image unavailable
                    </div>
                  )}

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101f2b]/65 via-[#172b3a]/10 to-transparent" />

                  {/* Number */}
                  <span className="absolute bottom-4 left-5 text-xs font-semibold tracking-[0.2em] text-white">
                    {service.number}
                  </span>

                  {/* Arrow */}
                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/95 text-[#172b3a] transition-all duration-300 group-hover:border-[#bd9143] group-hover:bg-[#bd9143] group-hover:text-white">
                    <ArrowIcon />
                  </span>

                  {/* Gold image edge */}
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#bd9143] transition-all duration-500 group-hover:w-full" />
                </div>

                {/* Content */}
                <div className="relative flex min-h-[154px] flex-col p-5 sm:p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="max-w-[85%] text-[17px] font-serif font-semibold leading-snug tracking-tight text-[#172b3a]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-[13px] leading-[1.8] text-[#172b3a]/65">
                    {service.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-5 flex w-full flex-nowrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="flex min-w-0 flex-1 items-center justify-center px-2 py-3 text-[9px] font-semibold uppercase tracking-[0.08em] text-gray-900 transition-all duration-300 hoverborder-[#bd9143] bg-[#bd9143] textwhite sm:px-3 sm:text-[10px] sm:tracking-[0.12em]"
                    >
                      Quick View
                    </button>

                    <Link
                      href="/services"
                      className="flex min-w-0 flex-1 items-center justify-center gap-1 border border-[#172b3a]/20 px-2 py-3 text-[9px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#bd9143] sm:gap-2 sm:px-3 sm:text-[10px] sm:tracking-[0.12em]"
                    >
                      Explore Services
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>

                  {/* Bottom accent */}
                  <div className="hidden mt-auto flex items-center justify-between pt-5">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#172b3a]/35">
                      Makyn Construction
                    </span>

                    <span className="h-px w-9 bg-[#bd9143]/70 transition-all duration-300 group-hover:w-16" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Service Quick View Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101f2b]/80 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="relative w-full max-w-xl overflow-hidden border border-white/20 bg-[#f7f5f0] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#172b3a]/10">
              {serviceImages[selectedService.title] && (
                <Image
                  src={serviceImages[selectedService.title]}
                  alt={selectedService.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 576px"
                  className="object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#101f2b]/70 to-transparent" />

              <span className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                {selectedService.number} / Our Services
              </span>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Close service details"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/50 bg-[#101f2b]/60 text-2xl leading-none text-white transition-colors hover:bg-[#bd9143]"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#bd9143]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#bd9143]">
                  Makyn Construction
                </span>
              </div>

              <h3
                id="service-modal-title"
                className="font-serif text-2xl font-semibold leading-tight tracking-tight text-[#172b3a] sm:text-3xl"
              >
                {selectedService.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#172b3a]/70">
                {selectedService.description}
              </p>

              <div className="mt-7 flex flex-nowrap gap-3">
                <Link
                  href="/services"
                  onClick={() => setSelectedService(null)}
                  className="flex flex-1 items-center justify-center gap-2 px-3 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.1em] hover:text-white transition-colors bg-[#bd9143] sm:px-5"
                >
                  Explore Services
                  <span aria-hidden="true">→</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="flex flex-1 items-center justify-center border border-[#172b3a]/20 px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#172b3a] transition-colors hover:border-[#bd9143] hover:text-[#bd9143] sm:px-5"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
