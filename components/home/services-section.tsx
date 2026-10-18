import ArrowIcon from "@/components/ui/arrow-icon";
import { services } from "@/components/data/home-data";

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
        {services.map((service) => (
          <article className="service-item" key={service.number}>
            <div className="service-top">
              <span className="service-number">{service.number}</span>
              <span className="service-arrow"><ArrowIcon /></span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
