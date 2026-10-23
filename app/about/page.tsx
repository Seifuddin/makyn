import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurStandards from "@/components/about/OurStandards";
import AboutCTA from "@/components/about/AboutCTA";

export default function About() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <OurStandards />
      <ScrollThroughBuilding />
      <AboutCTA />
    </main>
  );
}