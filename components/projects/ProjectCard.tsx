
import Image from "next/image";
import Link from "next/link";

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href?: string;
  layout?: "large" | "standard";
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isLarge = project.layout === "large";

  return (
    <article className="group min-w-0">
      <Link
        href={project.href || "/contact"}
        aria-label={`Enquire about ${project.title}`}
        className="block"
      >
        <div
          className={`relative isolate overflow-hidden bg-[#E5E1D8] ${
            isLarge ? "aspect-[4/3] sm:aspect-[5/4]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={
              isLarge
                ? "(max-width: 768px) 100vw, 60vw"
                : "(max-width: 768px) 100vw, 40vw"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#101F2B]/75 via-transparent to-[#101F2B]/10 transition-opacity duration-500 group-hover:from-[#101F2B]/85" />

          <div className="absolute left-4 top-4 flex items-center gap-2 border border-white/35 bg-[#172B3A]/70 px-3 py-2 backdrop-blur-sm sm:left-5 sm:top-5">
            <span className="text-xs font-semibold tracking-[0.15em] text-[#D5B16B]">
              {project.number}
            </span>
            <span className="h-3 w-px bg-white/30" />
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white sm:text-xs">
              {project.category}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
            <p className="max-w-md text-xl font-medium leading-snug text-white sm:text-2xl">
              {project.title}
            </p>

            <span className="flex size-10 shrink-0 items-center justify-center border border-white/60 text-lg text-white transition-all duration-300 group-hover:border-[#D5B16B] group-hover:bg-[#BD9143] group-hover:text-[#172B3A]">
              ↗
            </span>
          </div>
        </div>
      </Link>

      <div className="flex items-start justify-between gap-4 border-b border-[#172B3A]/15 py-4 sm:py-5">
        <p className="max-w-lg text-sm leading-6 text-[#52606A]">
          {project.description}
        </p>

        <span
          aria-hidden="true"
          className="mt-1 h-2 w-2 shrink-0 bg-[#BD9143]"
        />
      </div>
    </article>
  );
}
