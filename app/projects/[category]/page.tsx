
import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import CategoryPageTemplate from "@/components/building-categories/CategoryPageTemplate";

import {
  buildingCategories,
} from "@/components/building-categories/buildingCategoriesData";

import { projects } from "@/components/projects/projects-data";
import { projectDetails } from "@/components/projects/project-details";
import ProjectDetailPage from "@/components/projects/ProjectDetailPage";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

// Generate routes for both categories and individual projects
export function generateStaticParams() {
  const slugs = [
    ...buildingCategories.map((item) => item.slug),
    ...projects.map((item) => item.slug),
  ];

  return [...new Set(slugs)].map((category) => ({
    category,
  }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: slug } = await params;

  const buildingCategory = buildingCategories.find(
    (item) => item.slug === slug
  );

  if (buildingCategory) {
    return {
      title: buildingCategory.title,
      description: buildingCategory.description,
    };
  }

  const project = projects.find(
    (item) => item.slug === slug
  );

  const detail = projectDetails[slug];

  if (!project || !detail) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `${project.title} | Makyn Construction`,
    description: detail.intro,
  };
}

// Shared loading fallback
function PageFallback() {
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

// All URL-dependent rendering happens inside this component
async function ProjectsDynamicPageContent({
  params,
}: PageProps) {
  const { category: slug } = await params;

  // Check building categories first
  const category = buildingCategories.find(
    (item) => item.slug === slug
  );

  if (category) {
    const relatedCategories = buildingCategories.filter(
      (item) => item.slug !== category.slug
    );

    return (
      <CategoryPageTemplate
        category={category}
        relatedCategories={relatedCategories}
      />
    );
  }

  // Otherwise, check individual projects
  const project = projects.find(
    (item) => item.slug === slug
  );

  const detail = projectDetails[slug];

  if (!project || !detail) {
    notFound();
  }

  return (
    <ProjectDetailPage
      project={project}
      detail={detail}
    />
  );
}

// Suspense now wraps the component BEFORE params are accessed
export default function ProjectsDynamicPage({
  params,
}: PageProps) {
  return (
    <Suspense fallback={<PageFallback />}>
      <ProjectsDynamicPageContent params={params} />
    </Suspense>
  );
}
