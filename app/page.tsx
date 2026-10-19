import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import HeroSection from "@/components/home/hero-section";
import IntroSection from "@/components/home/intro-section";
import ServicesSection from "@/components/home/services-section";
import ProjectsSection from "@/components/home/projects-section";
import CommitmentSection from "@/components/home/commitment-section";
import ContactSection from "@/components/home/contact-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import FAQSection from "@/components/home/faq-section";
import StatsCounter from "@/components/home/stats-counter";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <IntroSection />
      <StatsCounter />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
      <ProjectsSection />
      <TestimonialsSection />
      <CommitmentSection />
      <FAQSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}