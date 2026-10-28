
import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import { projects } from "@/components/projects/projects-data";
import { projectDetails } from "@/components/projects/project-details";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);
  const detail = projectDetails[slug];

  if (!project || !detail) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Makyn Construction`,
    description: detail.intro,
  };
}

function ProjectPageFallback() {
  return (
    <main className="min-h-[60vh] bg-[#f7f5f0] px-6 py-20">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="mb-5 h-3 w-32 rounded bg-[#d5b16b]/40" />
        <div className="mb-4 h-10 max-w-xl rounded bg-[#172b3a]/10" />
        <div className="mb-8 h-5 max-w-2xl rounded bg-[#172b3a]/10" />
        <div className="h-[320px] rounded-sm bg-[#172b3a]/10 sm:h-[420px]" />
      </div>
    </main>
  );
}

async function ProjectPageContent({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);
  const detail = projectDetails[slug];

  if (!project || !detail) {
    notFound();
  }

  return <ProjectDetailPage project={project} detail={detail} />;
}

export default function ProjectPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ProjectPageFallback />}>
      <ProjectPageContent params={params} />
    </Suspense>
  );
}
