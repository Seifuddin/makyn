
import Image from "next/image";
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
  return (
    <section className="services-section section-padding" id="services">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" />
             OUR EXPERTISE
          </div>

          <h2>
            Built around
            <br />
            <span>your vision.</span>
          </h2>
        </div>

        <p>
          Practical solutions. Skilled workmanship. A commitment to getting
          the details right.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const image = serviceImages[service.title];

          return (
            <article
              key={service.number}
              className="group min-w-0 overflow-hidden rounded-md bg-white shadow-md shadow-[#172b3a]/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#172b3a]/[0.12]"
            >
              {/* Full-width image */}
              <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#172b3a]/10">
                {image ? (
                  <Image
                    src={image}
                    alt={service.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
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

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172b3a]/50 to-transparent" />

                <span className="absolute bottom-3 left-4 text-sm font-medium tracking-wider text-white">
                  {service.number}
                </span>

                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#172b3a] transition-colors duration-300 group-hover:bg-[#bd9143]">
                  <ArrowIcon />
                </span>
              </div>

              {/* Card content */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-[#172b3a]">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#172b3a]/70">
                  {service.description}
                </p>

                <div className="mt-4 h-0.5 w-8 bg-[#bd9143] transition-all duration-300 group-hover:w-14" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
