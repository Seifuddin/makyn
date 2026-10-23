"use client";

import { useState } from "react";
import LivingBlueprint from "@/components/about/LivingBlueprint";
import ConstructionDNA from "@/components/about/ConstructionDNA";
import ScrollThroughBuilding from "@/components/about/ScrollThroughBuilding";
import MaterialUniverse from "@/components/about/MaterialUniverse";
import PrecisionEngine from "@/components/about/PrecisionEngine";
import ArchitecturalXRay from "@/components/about/ArchitecturalXRay";
import GoldenThread from "@/components/about/GoldenThread";
import BlueprintExplorer from "@/components/about/BlueprintExplorer";
import ValuesThatBuildUs from "@/components/about/ValuesThatBuildUs";
import ProjectDecisionRoom from "@/components/about/ProjectDecisionRoom";
import TimelineWithoutDates from "@/components/about/TimelineWithoutDates";
import LivingArchitectureFinale from "@/components/about/LivingArchitectureFinale";
import IntroSection from "@/components/home/intro-section";
import AboutHero from "@/components/about/AboutHero";

const entries = [
  { n: "01", name: "LivingBlueprint", id: "living-blueprint" },
  { n: "02", name: "ConstructionDNA", id: "construction-d-n-a" },
  { n: "03", name: "ScrollThroughBuilding", id: "scroll-journey" },
  { n: "04", name: "MaterialUniverse", id: "material-universe" },
  { n: "05", name: "PrecisionEngine", id: "precision-engine" },
  { n: "06", name: "ArchitecturalXRay", id: "architectural-x-ray" },
  { n: "07", name: "GoldenThread", id: "golden-thread" },
  { n: "08", name: "BlueprintExplorer", id: "blueprint-explorer" },
  { n: "09", name: "ValuesThatBuildUs", id: "values-build-us" },
  { n: "10", name: "ProjectDecisionRoom", id: "project-decision-room" },
  { n: "11", name: "TimelineWithoutDates", id: "timeline-no-dates" },
  { n: "12", name: "LivingArchitectureFinale", id: "living-architecture-finale" }
];

export default function AboutLabPage() {
  const [showIndex, setShowIndex] = useState(true);
  return (
    <main className="min-h-screen bg-[#f7f5f0] font-sans text-[#172b3a]">
      <header className="hidden sticky top-0 z-40 border-b border-white/10 bg-[#172b3a]/95 text-white backdrop-blur">
        <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <a href="/" className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center border border-[#bd9143] text-lg font-semibold text-[#d5b16b]">M</span><span className="text-sm font-bold tracking-[.15em]">MAKYN<small className="mt-1 block text-[8px] font-normal tracking-[.12em] text-white/55">CONSTRUCTION COMPANY LTD.</small></span></a>
          <span className="hidden text-[9px] tracking-[.16em] text-white/60 sm:block">ABOUT PAGE COMPONENT LAB</span>
        </div>
      </header>
      <section className="hidden bg-[#172b3a] py-16 text-white sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[.24em] text-[#d5b16b]">MAKYN / DESIGN EXPLORATION</p>
          <h1 className="text-5xl font-medium leading-[.95] tracking-tight sm:text-7xl">From line to <em className="font-serif text-[#d5b16b]">legacy.</em></h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65">Twelve independent concepts. Edit each component in its own file without needing a shared stylesheet.</p>
        </div>
      </section>
      <section className="hidden bg-white py-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <button onClick={() => setShowIndex(v => !v)} className="border border-[#172b3a]/20 px-4 py-3 text-xs font-bold uppercase tracking-[.12em] hover:border-[#bd9143]">{showIndex ? "Hide component index −" : "Show component index +"}</button>
          {showIndex && <div className="mt-6 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">{entries.map(entry => <a key={entry.n} href={`#${entry.id}`} className="border-t border-[#172b3a]/15 py-4 text-sm hover:text-[#a7792e]"><span className="mr-3 text-[#bd9143]">{entry.n}</span>{entry.name}</a>)}</div>}
        </div>
      </section>
      <AboutHero />
      <ValuesThatBuildUs />
      <TimelineWithoutDates />
      <ScrollThroughBuilding />
      <MaterialUniverse />
      <ArchitecturalXRay />
      <footer className="bg-[#101f2a] py-6 text-center text-[9px] tracking-[.16em] text-white/50">MAKYN / CONSTRUCTION COMPANY LIMITED · COMPONENT LAB</footer>
    </main>
  );
}
