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
    description: "Thoughtfully executed construction solutions, from foundations to the finishing touches.",
    image: "/images/projects/homes.jpg",
  },
  {
    id: "project-002",
    slug: "renovations",
    title: "Renovations",
    category: "Renovations",
    description: "Transforming existing spaces into modern, functional and beautifully finished environments.",
    image: "/images/projects/finishing.jpeg",
  },
  {
    id: "project-003",
    slug: "architecture",
    title: "Architecture",
    category: "Architecture",
    description: "Creative architectural designs and detailed drawings that transform your vision into practical, functional and beautifully planned spaces.",
    image: "/images/projects/Architecture.jpeg",
  },
  {
    id: "project-004",
    slug: "masonry",
    title: "Masonry",
    category: "Masonry",
    description: "Quality masonry and skilled carpentry delivered with precision and attention to detail.",
    image: "/images/projects/construction.jpg",
  },
  {
    id: "project-005",
    slug: "roofing",
    title: "Roofing and Ceilings",
    category: "Roofing",
    description: "Reliable roofing and ceiling installations designed for durability and a refined finish.",
    image: "/images/projects/roofingceiling.jpg",
  },
  {
    id: "project-006",
    slug: "painting",
    title: "Painting and Finishings",
    category: "Paintings",
    description: "Professional finishing that brings character, consistency and a polished look to every space.",
    image: "/images/projects/painting.jpeg",
  },
];