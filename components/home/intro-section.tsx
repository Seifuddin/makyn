import ArrowIcon from "@/components/ui/arrow-icon";

export default function IntroSection() {
  return (
    <section className="intro-section section-padding" id="about">
      <div className="intro-label">
        <span className="eyebrow-line" />
        <span>01 / WHO WE ARE</span>
      </div>

      <div className="intro-content">
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
    </section>
  );
}
