import ArrowIcon from "@/components/ui/arrow-icon";
import { projects } from "@/components/data/home-data";

export default function ProjectsSection() {
  return (
    <section className="projects-section section-padding" id="projects">
      <div className="section-heading projects-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" />
             OUR WORK
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
  );
}
