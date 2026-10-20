
"use client";

import { useState } from "react";
import ArrowIcon from "@/components/ui/arrow-icon";

const faqs = [
  {
    question: "What construction services does Makyn offer?",
    answer:
      "Makyn Construction Company Limited offers building construction, renovations and remodelling, masonry and carpentry, roofing and ceiling installation, painting and finishing, and plumbing and electrical works.",
  },
  {
    question: "Do you handle both new builds and renovations?",
    answer:
      "Yes. We cater to new construction projects as well as renovation, remodelling and finishing work. Contact us to discuss the scope and requirements of your project.",
  },
  {
    question: "How do I get a quotation for my project?",
    answer:
      "Get in touch with our team and share your project location, type of work, approximate size and requirements. We can discuss the details needed to prepare an appropriate quotation.",
  },
  {
    question: "How long does a construction project take?",
    answer:
      "The timeline depends on the project's size, complexity, materials and site conditions. Once we understand your requirements, we can discuss a realistic schedule for the work.",
  },
  {
    question: "Can I customise the design to suit my needs and budget?",
    answer:
      "We welcome discussions about your preferred design, priorities and budget. The scope, materials and proposed solutions can then be considered to help align the project with your requirements.",
  },
  {
    question: "How do I get started with Makyn?",
    answer:
      "Start by contacting us with a brief description of your project. We can discuss your goals, understand the work required and explain the next steps.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-[#f7f5f0] px-5 py-24 text-[#172b3a] sm:px-8 sm:py-24 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Left introduction */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#bd9143]" />
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#8d692e]">
                FREQUENTLY ASKED QUESTIONS
              </p>
            </div>

            <h2
              id="faq-heading"
              className="max-w-md text-3xl leading-[1.15] font-semibold tracking-tight sm:text-4xl"
            >
              Good projects
              <span className="block text-[#a77c35]">
                start with clarity.
              </span>
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#172b3a]/65">
              Find answers to common questions about our construction
              services, project planning and getting started.
            </p>

            <div className="mt-5 border-l-2 border-[#bd9143] py-1 pl-4">
              <p className="text-sm font-semibold">
                Have a project in mind?
              </p>
              <p className="mt-1 text-xs leading-5 text-[#172b3a]/60">
                Talk to us about what you want to build.
              </p>

              <a
                href="#contact"
                className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#8d692e] transition-colors hover:text-[#172b3a]"
              >
                Talk to our team
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Right accordion */}
          <div className="border-t border-[#172b3a]/15">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              const questionId = `faq-question-${index}`;

              return (
                <article
                  key={faq.question}
                  className="border-b border-[#172b3a]/15"
                >
                  <h3>
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="group flex w-full items-center gap-3 py-4 text-left sm:py-[18px]"
                    >
                      <span className="w-6 shrink-0 text-[10px] font-bold tracking-wider text-[#a77c35]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`flex-1 text-sm font-semibold leading-5 transition-colors sm:text-[15px] ${
                          isOpen
                            ? "text-[#98702f]"
                            : "text-[#172b3a] group-hover:text-[#98702f]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`flex h-7 w-7 shrink-0 items-center justify-center border transition-all duration-200 ${
                          isOpen
                            ? "border-[#172b3a] bg-[#172b3a] text-[#d5b16b]"
                            : "border-[#172b3a]/15 text-[#172b3a] group-hover:border-[#bd9143]"
                        }`}
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="h-3.5 w-3.5"
                        >
                          <path
                            d={
                              isOpen
                                ? "M4 10H16"
                                : "M4 10H16M10 4V16"
                            }
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="square"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    hidden={!isOpen}
                    className="pb-4 pl-9 pr-8 sm:pb-5"
                  >
                    <p className="max-w-xl text-xs leading-6 text-[#172b3a]/70 sm:text-[13px]">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom brand detail */}
        <div className="mt-7 flex items-center justify-between border-t border-[#172b3a]/10 pt-4">
          <span className="text-[9px] font-bold tracking-[0.16em] text-[#172b3a]/45">
            MAKYN CONSTRUCTION COMPANY LIMITED
          </span>

          <span className="h-1.5 w-1.5 bg-[#bd9143]" />
        </div>
      </div>
    </section>
  );
}
