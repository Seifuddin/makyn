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


/** 10 — Project decision room */
export default function ProjectDecisionRoom(){const [selected,setSelected]=useState(0);const types=[{title:"A new building",services:"Building construction · Architectural design · Finishing",copy:"Explore support for a new-build project, from early planning through construction and finishing."},{title:"A renovation",services:"Renovations · Masonry · Painting and finishing",copy:"Refresh, improve, or reconfigure an existing property with a considered renovation plan."},{title:"Roofing",services:"Roofing · Ceiling installation · Carpentry",copy:"Discuss the right roofing and ceiling approach for your building and its requirements."},{title:"An interior transformation",services:"Interior design · Painting · Finishing",copy:"Shape a more functional, comfortable space with coordinated interior and finishing work."},{title:"Finishing work",services:"Painting · Plumbing · Electrical installations",copy:"Bring the final details together with a clear plan for the finishing work your space needs."}];const item=types[selected];const message=encodeURIComponent(`Hello Makyn Construction Company Limited, I'd like to discuss a project: ${item.title}. Please let me know how we can proceed.`);return <section id="project-decision-room" className="bg-[#172b3a] py-20 sm:py-28"><div className={wrap}><Eyebrow light>10 / THE PROJECT DECISION ROOM</Eyebrow><div className="mb-10 grid gap-5 lg:grid-cols-[1fr_.7fr] lg:items-end"><h2 className="text-4xl font-medium leading-tight text-[#f7f5f0] sm:text-6xl">What are you <em className="font-serif text-[#d5b16b]">planning to build?</em></h2><p className="max-w-md text-sm leading-7 text-white/60">Choose the direction closest to your project. We'll show you a starting point for the conversation.</p></div><div className="grid gap-0 lg:grid-cols-[.8fr_1.2fr]"><div className="border-y border-white/15">{types.map((t,i)=><button key={t.title} onClick={()=>setSelected(i)} className={`flex w-full items-center gap-4 border-b border-white/10 px-3 py-5 text-left transition ${selected===i?"bg-white/10 text-white":"text-white/55 hover:text-white"}`}><span className="text-xs text-[#d5b16b]">0{i+1}</span><strong className="flex-1 text-sm font-medium sm:text-base">{t.title}</strong><span>{selected===i?"↗":"+"}</span></button>)}</div><div className="bg-[#f7f5f0] p-6 sm:p-10"><div className="flex items-center justify-between text-[9px] tracking-[.2em] text-slate-500"><span>YOUR PROJECT / 0{selected+1}</span><span className="h-2 w-2 rounded-full bg-[#bd9143]"/></div><div className="mt-6 grid gap-6 sm:grid-cols-[.8fr_1.2fr] sm:items-center"><div className="flex aspect-square items-center justify-center bg-[#172b3a]"><div className="w-full p-3"><Blueprint finished/></div></div><div><h3 className="text-2xl font-medium text-[#172b3a] sm:text-3xl">{item.title}<span className="text-[#bd9143]">.</span></h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p><p className="mt-5 text-[9px] font-bold uppercase tracking-[.16em] text-[#bd9143]">RELATED AREAS</p><p className="mt-2 text-xs leading-6 text-[#172b3a]">{item.services}</p><a href={`https://wa.me/?text=${message}`} target="_blank" rel="noreferrer" className={`${buttonGold} mt-6`}>Discuss this project ↗</a></div></div><p className="mt-6 text-[10px] leading-5 text-slate-500">This selection starts a conversation; the final scope and services are confirmed with Makyn.</p></div></div></div></section>}
