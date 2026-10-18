
const services = [
  {
    number: "01",
    title: "Building Construction",
    description:
      "Thoughtfully executed construction solutions, from foundations to the finishing touches.",
  },
  {
    number: "02",
    title: "Renovations & Remodelling",
    description:
      "Transforming existing spaces into modern, functional and beautifully finished environments.",
  },
  {
    number: "03",
    title: "Masonry & Carpentry",
    description:
      "Quality masonry and skilled carpentry delivered with precision and attention to detail.",
  },
  {
    number: "04",
    title: "Roofing & Ceilings",
    description:
      "Reliable roofing and ceiling installations designed for durability and a refined finish.",
  },
  {
    number: "05",
    title: "Painting & Finishing",
    description:
      "Professional finishing that brings character, consistency and a polished look to every space.",
  },
  {
    number: "06",
    title: "Construction Solutions",
    description:
      "Practical construction support tailored to your project requirements and ambitions.",
  },
];

const projects = [
  {
    number: "01",
    category: "RESIDENTIAL",
    title: "Spaces built for living",
    description: "Residential construction",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=85",
    className: "project-image-one",
  },
  {
    number: "02",
    category: "ARCHITECTURE",
    title: "A lasting impression",
    description: "Modern architectural design",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85",
    className: "project-image-two",
  },
  {
    number: "03",
    category: "CRAFTSMANSHIP",
    title: "Every detail matters",
    description: "Construction in progress",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=85",
    className: "project-image-three",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      M
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Makyn home">
          <BrandMark />
          <span className="brand-copy">
            <strong>MAKYN</strong>
            <span>CONSTRUCTION COMPANY LTD.</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a className="nav-active" href="#home">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#contact">
          Let&apos;s Talk <ArrowIcon />
        </a>
      </header>

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

        <span className="hero-index" aria-hidden="true">
          M / 001
        </span>
      </section>

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
                <span className="service-arrow">
                  <ArrowIcon />
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section section-padding" id="projects">
        <div className="section-heading projects-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              03 / OUR WORK
            </div>
            <h2>
              The vision.
              <br />
              <span>The craft.</span>
            </h2>
          </div>
          <p>
            Every project deserves careful planning, considered execution and
            a result built to stand the test of time.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div
                className={`project-image ${project.className}`}
                role="img"
                aria-label={project.description}
                style={{ backgroundImage: `url("${project.image}")` }}
              >
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-caption">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ArrowIcon />
              </div>
            </article>
          ))}
        </div>
        <p className="portfolio-note">
          Illustrative photography — replace with Makyn&apos;s actual projects
          as they become available.
        </p>
      </section>

      <section className="commitment-section" id="commitment">
        <div className="commitment-image" aria-hidden="true" />
        <div className="commitment-content">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            04 / THE MAKYN STANDARD
          </div>
          <h2>
            More than
            <br />
            structures.
            <br />
            <span>We build trust.</span>
          </h2>
          <p>
            A successful project is about more than what gets built. It is
            about communication, workmanship, attention to detail and the
            confidence you have in the people building it.
          </p>
          <a className="button button-gold" href="#contact">
            Work With Us <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="contact-section section-padding" id="contact">
        <div className="contact-top">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            05 / YOUR NEXT PROJECT
          </div>
          <p>Have a project in mind?</p>
        </div>

        <h2>
          Let&apos;s build
          <br />
          <span>something lasting.</span>
        </h2>

        <p className="contact-description">
          Tell us what you have in mind. Let&apos;s take the first step towards
          bringing your vision to life.
        </p>

        <a className="button button-gold" href="mailto:">
          Discuss Your Project <ArrowIcon />
        </a>
      </section>

      <footer className="site-footer">
        <a href="#home" className="brand footer-brand">
          <BrandMark />
          <span className="brand-copy">
            <strong>MAKYN</strong>
            <span>CONSTRUCTION COMPANY LTD.</span>
          </span>
        </a>

        <p>Your trusted construction partner.</p>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Makyn Construction Company Limited.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
