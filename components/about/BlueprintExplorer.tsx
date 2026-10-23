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


/** 08 — Blueprint explorer */
export default function BlueprintExplorer(){const [active,setActive]=useState(0);const points=[{name:"Planning",copy:"A clear brief helps align expectations, priorities, and practical requirements."},{name:"Structure",copy:"The structural approach should respond to the project's design and needs."},{name:"Materials",copy:"Material choices influence the character, performance, and finish of a space."},{name:"Finishing",copy:"Careful finishing brings the details together and supports the intended use."}];const positions=["left-[18%] top-[32%]","left-[54%] top-[18%]","left-[69%] top-[52%]","left-[37%] top-[70%]"];return <section id="blueprint-explorer" className="bg-[#172b3a] py-20 sm:py-28"><div className={wrap}><Heading n="08" title="Explore the thinking behind the build." copy="Select a point on the drawing to discover a few of the considerations behind a project." light/><div className="grid gap-0 border border-white/15 lg:grid-cols-[1.15fr_.85fr]"><div className="relative min-h-[300px] overflow-hidden bg-[#203a4b] p-5 sm:min-h-[430px] sm:p-10"><div className="absolute inset-0 opacity-20" style={{backgroundImage:"linear-gradient(#d5b16b 1px,transparent 1px),linear-gradient(90deg,#d5b16b 1px,transparent 1px)",backgroundSize:"25px 25px"}}/><div className="relative mx-auto max-w-xl"><Blueprint/><div className="absolute inset-0">{points.map((p,i)=><button key={p.name} onClick={()=>setActive(i)} aria-label={`Explore ${p.name}`} className={`absolute ${positions[i]} flex h-8 w-8 items-center justify-center rounded-full border text-[10px] transition ${active===i?"border-[#172b3a] bg-[#d5b16b] text-[#172b3a] ring-4 ring-[#d5b16b]/20":"border-[#d5b16b] bg-[#172b3a] text-[#d5b16b] hover:bg-[#bd9143] hover:text-[#172b3a]"}`}>{i+1}</button>)}</div></div><span className="absolute bottom-4 left-5 text-[8px] tracking-[.18em] text-white/45">ILLUSTRATIVE STUDY / NOT FOR CONSTRUCTION</span></div><div className="flex flex-col justify-center p-7 sm:p-10"><span className="text-[10px] tracking-[.2em] text-[#d5b16b]">DETAIL / 0{active+1}</span><h3 className="mt-5 text-3xl font-medium text-white sm:text-4xl">{points[active].name}<span className="text-[#bd9143]">.</span></h3><p className="mt-4 text-sm leading-7 text-white/65">{points[active].copy}</p><div className="mt-8 flex gap-2">{points.map((p,i)=><button key={p.name} onClick={()=>setActive(i)} aria-label={`Select ${p.name}`} className={`h-1 flex-1 ${active===i?"bg-[#bd9143]":"bg-white/20"}`}/>)}</div></div></div></div></section>}
