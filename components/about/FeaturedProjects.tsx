
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Building Construction",
    category: "Construction",
    image: "/images/construction.jpg",
    description:
      "Construction solutions shaped around the requirements and scope of each building project.",
  },
  {
    number: "02",
    title: "Renovation & Remodelling",
    category: "Renovation",
    image: "/images/featured2.jpeg",
    description:
      "Reworking existing spaces to support changing needs, functionality, and appearance.",
  },
  {
    number: "03",
    title: "Roofing & Finishing",
    category: "Building Works",
    image: "/images/roofing.jpeg",
    description:
      "Roofing, finishing, and related works that contribute to a complete building.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#f7f5f0] px-6 py-24 text-[#172b3a] sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#bd9143]">
              Our Featured Projects
            </p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              Spaces. Structures.
              <span className="block font-light text-[#bd9143]">
                Possibilities.
              </span>
            </h2>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-3 self-start border-b border-[#bd9143] pb-2 text-sm font-medium sm:self-auto"
          >
            Explore our services
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#e5e0d5]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#172b3a]/75 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 border border-white/50 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white">
                  {project.category}
                </span>

                <span className="absolute bottom-5 right-5 text-sm text-[#d5b16b]">
                  {project.number}
                </span>
              </div>

              <div className="border-b border-[#172b3a]/15 py-5">
                <h3 className="text-2xl font-medium">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#172b3a]/65">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
