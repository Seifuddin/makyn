import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import HeroSection from "@/components/home/hero-section";
import IntroSection from "@/components/home/intro-section";
import ServicesSection from "@/components/home/services-section";
import ProjectsSection from "@/components/home/projects-section";
import CommitmentSection from "@/components/home/commitment-section";
import ContactSection from "@/components/home/contact-section";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ProjectsSection />
      <CommitmentSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}