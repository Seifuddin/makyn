"use client";

import { useState, type ReactNode } from "react";

const photos = {
  building: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
  interior: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  site: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
  home: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
};

const wrap = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12";
const eyebrow = "mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#bd9143]";
const buttonGold = "inline-flex items-center gap-4 bg-[#bd9143] px-5 py-3 text-xs font-bold uppercase tracking-[.12em] text-[#172b3a] transition hover:bg-[#d5b16b] focus:outline-none focus:ring-2 focus:ring-[#bd9143] focus:ring-offset-2";

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`${eyebrow} ${light ? "text-[#d5b16b]" : ""}`}><span className="h-px w-8 bg-current" />{children}</div>;
}
function Heading({ n, title, copy, light = false }: { n: string; title: string; copy: string; light?: boolean }) {
  return <div className="mb-10 max-w-3xl"><p className={`mb-4 text-[10px] font-bold uppercase tracking-[.22em] ${light ? "text-[#d5b16b]" : "text-[#bd9143]"}`}>{n} — MAKYN / ABOUT</p><h2 className={`text-3xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl ${light ? "text-[#f7f5f0]" : "text-[#172b3a]"}`}>{title}</h2><p className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${light ? "text-white/65" : "text-slate-600"}`}>{copy}</p></div>;
}
function Blueprint({ finished = false }: { finished?: boolean }) {
  return <svg viewBox="0 0 600 430" role="img" aria-label={finished ? "Illustrative completed house" : "Architectural house blueprint"} className="h-full w-full">
    <g fill="none" stroke="#d5b16b" strokeWidth="1.5" opacity={finished ? ".95" : ".72"}>
      <path d="M65 320V165L300 35L535 165V320Z"/><path d="M35 320H565M70 344H530M105 368H495" strokeDasharray="5 8"/><path d="M110 320V190L300 82L490 190V320Z"/><path d="M150 320V220H230V320M350 220H450V275H350Z"/><path d="M300 82V320M110 190H490" strokeDasharray="4 7"/><path d="M45 155V330M37 155H53M37 330H53M555 155V330M547 155H563M547 330H563"/>
    </g>
    {finished && <g><path d="M65 165L300 35L535 165V320H65Z" fill="#bd9143" fillOpacity=".16" stroke="#d5b16b" strokeWidth="2"/><path d="M42 165L300 20L558 165L535 178L300 48L65 178Z" fill="#bd9143"/><path d="M110 190L300 82L490 190V320H110Z" fill="#f7f5f0"/><path d="M150 220H230V320H150Z" fill="#172b3a"/><path d="M350 220H450V275H350Z" fill="#172b3a" stroke="#bd9143" strokeWidth="3"/><path d="M400 220V275M350 247H450" stroke="#d5b16b" strokeWidth="2"/><path d="M110 190L300 82L490 190" fill="none" stroke="#bd9143" strokeWidth="4"/></g>}
  </svg>;
}


/** 01 — Blueprint reveal */
export default function LivingBlueprint() {
  const [revealed, setRevealed] = useState(false);
  return <section id="living-blueprint" className="overflow-hidden bg-[#172b3a] py-20 sm:py-28"><div className={`${wrap} grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]`}><div><Eyebrow light>01 / THE LIVING BLUEPRINT</Eyebrow><h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tight text-[#f7f5f0] sm:text-6xl">Every great structure <em className="font-serif text-[#d5b16b]">starts as an idea.</em></h2><p className="mt-6 max-w-lg text-sm leading-7 text-white/65">Before a building takes shape, there is a vision to understand, a plan to consider, and details to bring together.</p><button className={`${buttonGold} mt-8`} onClick={() => setRevealed(v => !v)} aria-pressed={revealed}>{revealed ? "Return to blueprint" : "Reveal the vision"}<span aria-hidden="true">↗</span></button><div className="mt-8 flex gap-6 text-[10px] font-bold tracking-[.18em] text-white/40"><span className={!revealed ? "text-[#d5b16b]" : ""}>01 / VISION</span><span className={revealed ? "text-[#d5b16b]" : ""}>02 / REALITY</span></div></div><div className="relative border border-[#d5b16b]/30 bg-[#203a4b] p-4 sm:p-8"><div className="absolute left-5 top-5 text-[9px] tracking-[.2em] text-[#d5b16b]">MK / 001</div><div className="aspect-[6/4] pt-5 transition duration-700"> <Blueprint finished={revealed}/></div><div className="flex items-center justify-between border-t border-white/15 pt-4 text-[9px] tracking-[.18em] text-white/55"><span>{revealed ? "CONCEPT / REALISED FORM" : "CONCEPT / INITIAL STUDY"}</span><span className="text-[#d5b16b]">FROM LINE TO LEGACY</span></div></div></div></section>;
}
