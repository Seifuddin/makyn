import Image from "next/image";
import ArrowIcon from "@/components/ui/arrow-icon";

export default function IntroSection() {
  return (
    <section className="intro-section section-padding" id="about">
      <div className="intro-label">
        <span className="eyebrow-line" />
        <span>01 / WHO WE ARE</span>
      </div>

      <div className="intro-content !grid !grid-cols-1 md:!grid-cols-2 !gap-10 lg:!gap-16 !items-center">
        {/* Left column */}
        <div className="relative w-full aspect-[4/3] md:aspect-[4/5] lg:aspect-[4/3] overflow-hidden">
          <Image
            src="/images/IT-Technician.jpg"
            alt="Makyn Construction Company Limited construction project"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover rounded-md"
          />
        </div>

        {/* Right column */}
        <div className="min-w-0">
          <h2>
            Strong foundations.
            <br />
            <span>Exceptional results.</span>
          </h2>

          <div className="intro-copy">
            <p>
              At Makyn Construction Company Limited, we believe every great
              project begins with trust and is realised through quality
              workmanship.
            </p>
            <p>
              We are committed to delivering dependable construction,
              renovation and finishing solutions with attention to the
              details that matter.
            </p>
            <a className="text-link" href="#services">
              Discover what we do <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}