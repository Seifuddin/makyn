
import Image from "next/image";
import ArrowIcon from "@/components/ui/arrow-icon";
import { services } from "@/components/data/home-data";

const serviceImages: Record<string, string> = {
  "Building Construction": "/images/services/networkings.jpg",
  "Renovations & Remodelling": "/images/IT-Technician.jpg",
  "Masonry & Carpentry": "/images/services/computing-uws-5.jpg",
  "Roofing & Ceilings": "/images/services/networkings.jpg",
  "Painting & Finishing": "/images/IT-Technician.jpg",
  "Construction Solutions": "/images/services/computing-uws-5.jpg",
};

export default function ServicesSection() {
  return (
    <section className="services-section section-padding" id="services">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" />
            02 / OUR EXPERTISE
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

      <div className="services-grid">
        {services.map((service, index) => {
          const image = serviceImages[service.title];

          return (
            <article
              className="service-item group overflow-hidden"
              key={service.number}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded -sm bg-[#172b3a]/10">
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
                    className="flex h-full items-center justify-center bg-[#172b3a] text-sm text-white/70"
                  >
                    Image unavailable
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172b3a]/50 to-transparent" />

                <span className="absolute bottom-3 left-3 text-sm font-medium tracking-wider text-white">
                  {service.number}
                </span>

                <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#172b3a] transition-colors group-hover:bg-[#bd9143]">
                  <ArrowIcon />
                </span>
              </div>

              <div className="hidden service-top">
                <span className="hidden service-number">{service.number}</span>
                <span className="hidden servicearrow">
                  <ArrowIcon />
                </span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
