export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "project-001",
    slug: "residential-building",
    title: "Building Construction",
    category: "Building Construction",
    description: "Add the verified project description here.",
    image: "/images/projects/homes.jpg",
  },
  {
    id: "project-002",
    slug: "renovations",
    title: "Renovations",
    category: "Renovations",
    description: "Add the verified project description here.",
    image: "/images/projects/finishing.jpeg",
  },
  {
    id: "project-003",
    slug: "architecture",
    title: "Architecture",
    category: "Architecture",
    description: "Add the verified project description here.",
    image: "/images/projects/Architecture.jpeg",
  },
  {
    id: "project-004",
    slug: "masonry",
    title: "Masonry",
    category: "Masonry",
    description: "Add the verified project description here.",
    image: "/images/projects/construction.jpg",
  },
  {
    id: "project-005",
    slug: "roofing",
    title: "Roofing and Ceilings",
    category: "Roofing",
    description: "Add the verified project description here.",
    image: "/images/projects/roofingceiling.jpg",
  },
  {
    id: "project-006",
    slug: "painting",
    title: "Painting and Finishings",
    category: "Paintings",
    description: "Add the verified project description here.",
    image: "/images/projects/painting.jpeg",
  },
];