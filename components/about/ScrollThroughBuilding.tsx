"use client";

import { useState, type ReactNode } from "react";

const photos = {
  building: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
  interior: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  site: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
  home: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
};

const wrap = "mx-auto w-full max-w-7xl px-5";
const eyebrow = "hidden mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#bd9143]";
const buttonGold = "inline-flex items-center gap-4 bg-[#bd9143] px-5 py-3 text-xs font-bold uppercase tracking-[.12em] text-[#172b3a] transition hover:bg-[#d5b16b] focus:outline-none focus:ring-2 focus:ring-[#bd9143] focus:ring-offset-2";

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`${eyebrow} ${light ? "text-[#d5b16b]" : ""}`}><span className="h-px w-8 bg-current" />{children}</div>;
}
function Heading({ n, title, copy, light = false }: { n: string; title: string; copy: string; light?: boolean }) {
  return <div className="mb-10 max-w-3xl"><p className={`mb-4 text-[10px] font-bold uppercase tracking-[.22em] ${light ? "text-[#d5b16b]" : "text-[#bd9143]"}`}></p><h2 className={`text-3xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl ${light ? "text-[#f7f5f0]" : "text-[#172b3a]"}`}>{title}</h2><p className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${light ? "text-white/65" : "text-slate-600"}`}>{copy}</p></div>;
}
function Blueprint({ finished = false }: { finished?: boolean }) {
  return <svg viewBox="0 0 600 430" role="img" aria-label={finished ? "Illustrative completed house" : "Architectural house blueprint"} className="h-full w-full">
    <g fill="none" stroke="#d5b16b" strokeWidth="1.5" opacity={finished ? ".95" : ".72"}>
      <path d="M65 320V165L300 35L535 165V320Z"/><path d="M35 320H565M70 344H530M105 368H495" strokeDasharray="5 8"/><path d="M110 320V190L300 82L490 190V320Z"/><path d="M150 320V220H230V320M350 220H450V275H350Z"/><path d="M300 82V320M110 190H490" strokeDasharray="4 7"/><path d="M45 155V330M37 155H53M37 330H53M555 155V330M547 155H563M547 330H563"/>
    </g>
    {finished && <g><path d="M65 165L300 35L535 165V320H65Z" fill="#bd9143" fillOpacity=".16" stroke="#d5b16b" strokeWidth="2"/><path d="M42 165L300 20L558 165L535 178L300 48L65 178Z" fill="#bd9143"/><path d="M110 190L300 82L490 190V320H110Z" fill="#f7f5f0"/><path d="M150 220H230V320H150Z" fill="#172b3a"/><path d="M350 220H450V275H350Z" fill="#172b3a" stroke="#bd9143" strokeWidth="3"/><path d="M400 220V275M350 247H450" stroke="#d5b16b" strokeWidth="2"/><path d="M110 190L300 82L490 190" fill="none" stroke="#bd9143" strokeWidth="4"/></g>}
  </svg>;
}


/** 03 — Scroll journey */
export default function ScrollThroughBuilding(){const [step,setStep]=useState(0);const stages=[{name:"Imagine",copy:"A conversation turns an early idea into a clearer direction."},{name:"Design",copy:"Requirements and design decisions begin to take a coherent shape."},{name:"Construct",copy:"People, materials, and workmanship come together on site."},{name:"Complete",copy:"The final details bring the intended space into view."}];return <section id="scroll-journey" className="bg-white py-20 sm:py-28"><div className={wrap}><Heading n="03" title="From first thought to finished space." copy="Move through the moments that shape a project. Every build has its own story."/><div className="grid overflow-hidden bg-[#172b3a] text-white lg:grid-cols-[.8fr_1.2fr]"><div className="flex flex-col justify-between p-7 sm:p-10"><div><p className="text-[10px] tracking-[.2em] text-[#d5b16b]">PROJECT JOURNEY / 0{step+1}</p><h3 className="mt-8 text-4xl font-medium sm:text-5xl">{stages[step].name}<span className="text-[#bd9143]">.</span></h3><p className="mt-5 max-w-sm text-sm leading-7 text-white/65">{stages[step].copy}</p></div><div className="mt-10 flex gap-2">{stages.map((s,i)=><button key={s.name} onClick={()=>setStep(i)} aria-label={`Show ${s.name}`} className={`h-1.5 flex-1 ${i===step?"bg-[#bd9143]":"bg-white/20"}`}/>)}</div></div><div className="relative min-h-[280px] sm:min-h-[390px]"><img src={[photos.building,photos.interior,photos.site,photos.home][step]} alt={`${stages[step].name} stage`} className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-[#172b3a]/70 to-transparent"/><span className="absolute bottom-6 left-6 text-[10px] tracking-[.2em]">MAKYN / {stages[step].name.toUpperCase()}</span></div></div></div></section>}
