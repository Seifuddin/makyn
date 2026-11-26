
import type { MetadataRoute } from "next";

import { blogArticles } from "@/lib/blog";
import { buildingCategories } from "@/components/building-categories/buildingCategoriesData";
import { projects } from "@/components/projects/projects-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://makynconstruction.co.ke";

  const staticRoutes = [
    "",
    "/about-lab",
    "/services",
    "/projects",
    "/gallery",
    "/blog",
    "/contact",
  ];

  const projectSlugs = [
    ...buildingCategories.map((item) => item.slug),
    ...projects.map((item) => item.slug),
  ];

  const uniqueProjectSlugs = [...new Set(projectSlugs)];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const projectPages: MetadataRoute.Sitemap = uniqueProjectSlugs.map(
    (slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
