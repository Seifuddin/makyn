import HeroSection from "@/components/home/hero-section";
import BuildingConstruction from "@/components/services/BuildingConstruction";
import ConstructionSolutions from "@/components/services/ConstructionSolutions";
import MasonryCarpentry from "@/components/services/MasonryCarpentry";
import PaintingFinishing from "@/components/services/PaintingFinishing";
import RenovationsRemodelling from "@/components/services/RenovationsRemodelling";
import RoofingCeilings from "@/components/services/RoofingCeilings";
import ServicesHero from "@/components/services/ServicesHero";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <BuildingConstruction />
      <RenovationsRemodelling />
      <MasonryCarpentry />
      <RoofingCeilings />
      <PaintingFinishing />
      <ConstructionSolutions />
    </main>
  );
}