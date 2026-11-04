
"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
  title: string;
};

type ArticleTableOfContentsProps = {
  sections: Section[];
};

export default function ArticleTableOfContents({
  sections,
}: ArticleTableOfContentsProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);

      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Table of contents"
      className="border-l-2 border-[#172b3a]/10 pl-5"
    >
      <div className="mb-5">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#bd9143]">
          On This Page
        </span>

        <h3 className="mt-2 text-lg font-bold text-[#172b3a]">
          Table of Contents
        </h3>
      </div>

      <ul className="space-y-3">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`flex items-start gap-3 text-sm leading-6 transition-colors ${
                  isActive
                    ? "font-semibold text-[#bd9143]"
                    : "text-[#172b3a]/60 hover:text-[#172b3a]"
                }`}
              >
                <span className="shrink-0 text-[10px] font-bold opacity-60">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{section.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
