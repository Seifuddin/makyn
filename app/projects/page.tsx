
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsIntro from "@/components/projects/ProjectsIntro";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0]">
      <ProjectsHero />
      <ProjectsIntro />
      <ProjectsGallery />
    </main>
  );
}
