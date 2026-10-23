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


/** 11 — Timeline without invented dates */
export default function TimelineWithoutDates(){const [active,setActive]=useState(0);const stages=[{title:"An idea",label:"THE START",copy:"A possibility takes shape. What should the space do, feel like, and make possible?"},{title:"A plan",label:"THE THINKING",copy:"The ambition becomes a clearer brief, with priorities and decisions to work through."},{title:"A structure",label:"THE MAKING",copy:"The work takes physical form through coordinated effort and careful workmanship."},{title:"A finished space",label:"THE OUTCOME",copy:"The details come together and the space moves closer to its intended purpose."}];return <section id="timeline-no-dates" className="bg-[#f7f5f0] py-20 sm:py-28"><div className={wrap}><Heading n="11" title="A journey, not just a job." copy="Every project has its own details, but the journey often begins with the same thing: a conversation."/><div className="relative grid gap-8 md:grid-cols-4"><div className="absolute left-0 right-0 top-5 hidden h-px bg-[#172b3a]/15 md:block"><div className="h-px bg-[#bd9143] transition-all" style={{width:`${active/3*100}%`}}/></div>{stages.map((s,i)=><button key={s.title} onClick={()=>setActive(i)} className="relative text-left"><span className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border text-xs ${active===i?"border-[#bd9143] bg-[#bd9143] text-[#172b3a]":"border-[#172b3a]/25 bg-[#f7f5f0] text-[#172b3a]"}`}>0{i+1}</span><span className="mt-5 block text-[9px] font-bold tracking-[.18em] text-[#bd9143]">{s.label}</span><strong className="mt-2 block text-xl font-medium text-[#172b3a]">{s.title}</strong><p className="mt-3 text-sm leading-6 text-slate-600">{s.copy}</p></button>)}</div><div className="mt-10 border-t border-[#172b3a]/15 pt-5 text-xs text-slate-500">SELECT A STAGE TO EXPLORE THE JOURNEY <span className="ml-2 text-[#bd9143]">/ 0{active+1}</span></div></div></section>}
