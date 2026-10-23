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


/** 02 — Construction DNA */
export default function ConstructionDNA() {
 const [active,setActive]=useState(0); const layers=[{name:"Foundation",detail:"The principles beneath the work",copy:"Integrity, clear communication, and a considered understanding of each client's needs."},{name:"Structure",detail:"The thinking that holds it together",copy:"Planning, coordination, and workmanship aligned around the project's requirements."},{name:"Exterior",detail:"The form people first experience",copy:"Design choices and finishing details that help a building feel purposeful and complete."},{name:"Interior",detail:"Spaces shaped around people",copy:"Functional spaces designed around comfort, use, and the people who occupy them."},{name:"Roofline",detail:"The final silhouette",copy:"Each part of a building contributes to the performance and character of the whole."}];
 return <section id="construction-dna" className="bg-[#f7f5f0] py-20 sm:py-28"><div className={wrap}><Heading n="02" title="A building is more than its surface." copy="Explore the layers of thinking behind a considered construction project."/><div className="grid gap-10 lg:grid-cols-2"><div className="relative flex min-h-[320px] items-end overflow-hidden bg-[#172b3a] p-7 sm:min-h-[430px] sm:p-10"><div className="absolute inset-0 opacity-20" style={{backgroundImage:"linear-gradient(#d5b16b 1px, transparent 1px),linear-gradient(90deg,#d5b16b 1px,transparent 1px)",backgroundSize:"28px 28px"}}/><div className="relative mx-auto w-full max-w-sm"><div className="mx-auto h-14 w-40 -skew-x-12 border-2 border-[#d5b16b] bg-[#bd9143]/20"/><div className="mx-auto mt-2 grid grid-cols-3 gap-2 border-2 border-[#d5b16b] p-3">{[0,1,2].map(i=><div key={i} className={`h-20 border ${active===2||active===3?"border-[#d5b16b] bg-[#bd9143]/35":"border-white/30"}`}/>)}</div><div className={`mx-auto mt-2 h-12 w-[90%] border-2 ${active===0?"border-[#d5b16b] bg-[#bd9143]/30":"border-white/35"}`}/><div className="mt-4 text-center text-[9px] tracking-[.2em] text-[#d5b16b]">LAYER STUDY / 0{active+1}</div></div></div><div className="flex flex-col justify-center"><div className="border-y border-[#172b3a]/15">{layers.map((l,i)=><button key={l.name} onClick={()=>setActive(i)} className={`flex w-full items-center gap-5 border-b border-[#172b3a]/10 px-1 py-5 text-left transition last:border-0 ${active===i?"text-[#172b3a]":"text-slate-400 hover:text-[#172b3a]"}`}><span className="text-xs text-[#bd9143]">0{i+1}</span><span className="flex-1 text-lg font-medium">{l.name}</span><span className="text-xl">{active===i?"−":"+"}</span></button>)}</div><div className="pt-7"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#bd9143]">{layers[active].detail}</p><p className="mt-3 max-w-lg text-sm leading-7 text-slate-600">{layers[active].copy}</p></div></div></div></div></section>;
}
