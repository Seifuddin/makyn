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


/** 07 — Golden thread */
export default function GoldenThread(){const [active,setActive]=useState(0);const moments=[{title:"Vision",copy:"We start by understanding what you want to create and why it matters."},{title:"Decisions",copy:"We turn the brief into priorities, choices, and a clearer direction."},{title:"Craft",copy:"The plan moves into coordinated work and considered workmanship."},{title:"Lasting value",copy:"The goal is a finished space shaped around its intended use."}];return <section id="golden-thread" className="bg-[#f7f5f0] py-20 sm:py-28"><div className={wrap}><Heading n="07" title="One clear thread, from start to finish." copy="A project is a series of connected decisions. Explore how each moment informs the next."/><div className="relative grid gap-7 md:grid-cols-4">{moments.map((m,i)=><button key={m.title} onClick={()=>setActive(i)} className="relative text-left"><div className="relative mb-7 flex h-12 items-center"><div className={`z-10 flex h-11 w-11 items-center justify-center rounded-full border text-xs ${active===i?"border-[#bd9143] bg-[#bd9143] text-[#172b3a]":"border-[#172b3a]/25 bg-[#f7f5f0] text-[#172b3a]"}`}>0{i+1}</div><div className={`absolute left-11 right-0 h-px ${i<active?"bg-[#bd9143]":"bg-[#172b3a]/15"} ${i===3?"hidden":""}`}/></div><h3 className="text-xl font-medium text-[#172b3a]">{m.title}<span className="text-[#bd9143]">.</span></h3><p className="mt-3 text-sm leading-6 text-slate-600">{m.copy}</p></button>)}</div><div className="mt-10 border-l-2 border-[#bd9143] bg-white px-6 py-5"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#bd9143]">THE CONNECTING IDEA / 0{active+1}</p><p className="mt-2 text-sm leading-6 text-[#172b3a]">{moments[active].copy}</p></div></div></section>}
