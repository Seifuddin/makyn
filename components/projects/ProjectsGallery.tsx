
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/components/projects/projects-data";

const PROJECTS_PER_PAGE = 9;

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const categories = useMemo(
    () => [
      "All Projects",
      ...Array.from(new Set(projects.map((project) => project.category))),
    ],
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") return projects;

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  function handleCategoryChange(category: string) {
    setActiveCategory(category);
    setVisibleCount(PROJECTS_PER_PAGE);
  }

  return (
    <section
      id="featured-projects"
      className="bg-[#F7F5F0] px-5 py-9 sm:px-8 sm:py-12 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Compact heading */}
        <div className="mb-6 flex flex-col gap-3 border-b border-[#172B3A]/15 pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#BD9143]">
              Our Portfolio
            </p>

            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-[#172B3A] sm:text-3xl lg:text-4xl">
              A record of work.{" "}
              <span className="font-normal italic text-[#BD9143]">
                Built to last.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-[#172B3A]/70 sm:text-sm">
            Explore our construction projects and the quality behind
            every detail.
          </p>
        </div>

        {/* Compact category filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                aria-pressed={isActive}
                className={`border px-3 py-1.5 text-[11px] font-semibold transition-colors duration-200 sm:text-xs ${
                  isActive
                    ? "border-[#172B3A] bg-[#172B3A] text-white"
                    : "border-[#172B3A]/20 text-[#172B3A] hover:border-[#BD9143] hover:text-[#BD9143]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Flexible-height masonry gallery */}
        {visibleProjects.length > 0 ? (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {visibleProjects.map((project, index) => (
              <article
                key={project.id}
                className="group mb-4 break-inside-avoid"
              >
                <Link
  href={`/projects/${project.slug}`}
  aria-label={`View details about ${project.title}`}
  className="block"
>
                  <div className="relative overflow-hidden bg-[#172B3A]/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={900}
                      height={1100}
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#101D27]/90 via-[#101D27]/10 to-transparent opacity-90" />

                    {/* Project number */}
                    <span className="absolute left-3 top-3 border border-white/40 bg-[#172B3A]/50 px-2 py-1 text-[9px] font-semibold tracking-[0.15em] text-white backdrop-blur-sm">
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Compact project information */}
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                      <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D5B16B] sm:text-[10px]">
                        {project.category}
                      </p>

                      <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
                        {project.title}
                      </h3>

                      <p className="mt-1 line-clamp-2 text-xs leading-4 text-white/80">
                        {project.description}
                      </p>

                      <span className="mt-2 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white transition-colors group-hover:text-[#D5B16B]">
                        Enquire
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-[#172B3A]/15 px-5 py-8 text-center">
            <h3 className="text-lg font-semibold text-[#172B3A]">
              More projects coming soon
            </h3>
            <p className="mt-1 text-sm text-[#172B3A]/65">
              We are preparing projects for this category.
            </p>
          </div>
        )}

        {/* Compact Load More button */}
        {hasMore && (
          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((count) => count + PROJECTS_PER_PAGE)
              }
              className="inline-flex items-center gap-3 border border-[#172B3A] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172B3A] transition-colors duration-300 hover:bg-[#172B3A] hover:text-white"
            >
              Load More Projects
              <span aria-hidden="true">↓</span>
            </button>
          </div>
        )}

        {/* Compact gallery count */}
        <div className="mt-6 border-t border-[#172B3A]/15 pt-3 text-[10px] tracking-wide text-[#172B3A]/60">
          Showing {visibleProjects.length} of {filteredProjects.length} projects
        </div>
      </div>
    </section>
  );
}
