import ArrowIcon from "@/components/ui/arrow-icon";

export default function CommitmentSection() {
  return (
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
  );
}
