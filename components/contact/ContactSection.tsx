
"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "your-email@example.com"; // Replace with Makyn's real email

const services = [
  "Building Construction",
  "Renovations & Remodelling",
  "Masonry & Carpentry",
  "Roofing & Ceiling Installation",
  "Painting & Finishing",
  "Plumbing & Drain Systems",
  "Electrical Installations",
  "Interior & Exterior Design",
  "Architectural Design & Drawings",
  "Other Enquiry",
];

const inputClass =
  "w-full border-0 border-b border-[#172B3A]/20 bg-transparent px-0 py-3.5 text-sm text-[#172B3A] outline-none transition placeholder:text-[#172B3A]/40 focus:border-[#BD9143] focus:ring-0";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const budget = String(data.get("budget") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(
      `Project Enquiry — ${service}`
    );

    const body = encodeURIComponent(
      `Hello Makyn Construction Company Limited,

I would like to make a project enquiry.

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Estimated Budget: ${budget || "Not specified"}

Project Details:
${message}

I look forward to hearing from you.

Regards,
${name}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F7F5F0] py-20 sm:py-28 lg:py-32"
    >
      {/* Subtle decorative detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#BD9143]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#BD9143]/15"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="mb-14 max-w-3xl sm:mb-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#BD9143]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#94702F]">
              Let's Talk Construction
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#172B3A] sm:text-5xl md:text-6xl lg:text-7xl">
            Have a Project
            <span className="block font-light italic text-[#BD9143]">
              in Mind?
            </span>
            Let's Talk.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#172B3A]/65 sm:text-lg">
            Whether you're planning a new build, renovating an
            existing space, or exploring design ideas, we'd love
            to hear about your project. Tell us what you have in
            mind, and let's discuss the next steps.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid overflow-hidden border border-[#172B3A]/10 bg-white lg:grid-cols-[0.78fr_1.22fr]">
          {/* Left: contact information */}
          <aside className="relative isolate overflow-hidden bg-[#172B3A] px-7 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            {/* Architectural lines */}
            <div
              aria-hidden="true"
              className="absolute -bottom-28 -right-24 -z-10 h-80 w-80 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-12 -z-10 h-56 w-56 rounded-full border border-[#BD9143]/30"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D5B16B]">
              Contact Information
            </p>

            <h3 className="mt-5 text-3xl font-semibold leading-snug sm:text-4xl">
              Let's turn your
              <span className="block font-light italic text-[#D5B16B]">
                vision into reality.
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/65">
              Have a question or need help planning your next
              project? Reach out to our team and let's start
              the conversation.
            </p>

            <div className="my-10 h-px bg-white/15" />

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D5B16B]/40 text-[#D5B16B]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="1" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Email Us
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-2 block break-all text-sm font-medium text-white transition hover:text-[#D5B16B]"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D5B16B]/40 text-[#D5B16B]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                  >
                    <path
                      d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Call Us
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    Add your business phone number
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D5B16B]/40 text-[#D5B16B]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Our Location
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    Add your office location
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/15 pt-7">
              <p className="text-xs uppercase tracking-[0.15em] text-[#D5B16B]">
                Your Trusted Construction Partner
              </p>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Building with purpose. Creating lasting value.
              </p>
            </div>
          </aside>

          {/* Right: enquiry form */}
          <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="mb-9 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94702F]">
                  Project Enquiry
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#172B3A] sm:text-3xl">
                  Tell us about your project.
                </h3>
              </div>

              <span className="hidden text-4xl font-light text-[#BD9143]/60 sm:block">
                M.
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and email */}
              <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1 block text-xs font-semibold text-[#172B3A]"
                  >
                    Full Name <span className="text-[#BD9143]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1 block text-xs font-semibold text-[#172B3A]"
                  >
                    Email Address <span className="text-[#BD9143]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Phone and service */}
              <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-1 block text-xs font-semibold text-[#172B3A]"
                  >
                    Phone Number <span className="text-[#BD9143]">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+254 ..."
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="mb-1 block text-xs font-semibold text-[#172B3A]"
                  >
                    Service Required <span className="text-[#BD9143]">*</span>
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    defaultValue=""
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="contact-budget"
                  className="mb-1 block text-xs font-semibold text-[#172B3A]"
                >
                  Estimated Budget
                  <span className="ml-2 font-normal text-[#172B3A]/45">
                    (Optional)
                  </span>
                </label>

                <select
                  id="contact-budget"
                  name="budget"
                  defaultValue=""
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="">Prefer to discuss</option>
                  <option value="Below KSh 500,000">
                    Below KSh 500,000
                  </option>
                  <option value="KSh 500,000 – 2 million">
                    KSh 500,000 – 2 million
                  </option>
                  <option value="KSh 2 million – 5 million">
                    KSh 2 million – 5 million
                  </option>
                  <option value="Above KSh 5 million">
                    Above KSh 5 million
                  </option>
                </select>
              </div>

              {/* Project description */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1 block text-xs font-semibold text-[#172B3A]"
                >
                  Tell Us About Your Project{" "}
                  <span className="text-[#BD9143]">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  minLength={10}
                  required
                  placeholder="Describe your project, location, requirements, or ideas..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              {/* Submit */}
              <div className="border-t border-[#172B3A]/10 pt-7">
                <button
                  type="submit"
                  className="group inline-flex min-h-14 w-full items-center justify-between gap-4 bg-[#172B3A] px-6 py-4 text-left text-sm font-semibold text-white transition hover:bg-[#24445A] sm:w-auto sm:min-w-[240px]"
                >
                  <span>
                    {submitted
                      ? "Open Email Again"
                      : "Send Project Enquiry"}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center bg-[#BD9143] text-[#172B3A] transition group-hover:bg-[#D5B16B]">
                    ↗
                  </span>
                </button>

                <p className="mt-4 text-xs leading-6 text-[#172B3A]/50">
                  Your project details will be prepared in your
                  default email application for you to send.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
