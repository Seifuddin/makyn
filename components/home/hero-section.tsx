import ArrowIcon from "@/components/ui/arrow-icon";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-content">
        <div className="eyebrow hero-eyebrow">
          <span className="eyebrow-line" />
          BUILT ON TRUST. DEFINED BY QUALITY.
        </div>

        <h1>
          We build
          <br />
          <span>what matters.</span>
        </h1>

        <p className="hero-description">
          From the first foundation to the final finish, we bring your
          construction vision to life with care, precision and purpose.
        </p>

        <div className="hero-actions">
          <a className="button button-gold" href="#contact">
            Start Your Project <ArrowIcon />
          </a>
          <a className="button button-outline" href="#projects">
            Explore Our Work
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <span>YOUR TRUSTED CONSTRUCTION PARTNER</span>
        <a href="#about">
          DISCOVER MAKYN <span aria-hidden="true">↓</span>
        </a>
      </div>

      <span className="hero-index" aria-hidden="true">M / 001</span>
    </section>
  );
}
