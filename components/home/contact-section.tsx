import ArrowIcon from "@/components/ui/arrow-icon";

export default function ContactSection() {
  return (
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

      {/* Replace the empty mailto with Makyn's actual email address. */}
      <a className="button button-gold" href="mailto:">
        Discuss Your Project <ArrowIcon />
      </a>
    </section>
  );
}
