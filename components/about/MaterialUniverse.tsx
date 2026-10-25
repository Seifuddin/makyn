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


/** 04 — Material universe */
export default function MaterialUniverse(){const [active,setActive]=useState(0);const items=[{name:"Concrete",tag:"THE STRENGTH BENEATH THE SURFACE",copy:"Strong outcomes begin with sound planning and attention to what holds everything together.",image:photos.site},{name:"Timber",tag:"CRAFTED WITH PURPOSE",copy:"A thoughtful balance of function, character, and carefully considered detail.",image:photos.home},{name:"Steel",tag:"STRENGTH IN EVERY CONNECTION",copy:"Precision and coordination turn individual elements into a structure that works as one.",image:photos.building},{name:"Stone",tag:"MADE TO ENDURE",copy:"Materials matter. So do the decisions and care behind how they are used.",image:photos.interior}];return <section id="material-universe" className="bg-[#172b3a] py-20 sm:py-28"><div className={wrap}><Heading n="04" title="Character is built into the details." copy="An editorial look at materials, craft, and the choices that influence a space." light/><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{items.map((item,i)=><button key={item.name} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>setActive(i)} className={`group relative min-h-[310px] overflow-hidden text-left sm:min-h-[390px] ${active===i?"ring-2 ring-[#bd9143] ring-offset-2 ring-offset-[#172b3a]":""}`}><img src={item.image} alt="Construction material and design" className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${active===i?"scale-105 opacity-90":"opacity-50 grayscale"}`}/><div className="absolute inset-0 bg-gradient-to-t from-[#172b3a] via-[#172b3a]/25 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-5"><span className="text-[9px] tracking-[.2em] text-[#d5b16b]">0{i+1} / MATERIAL STUDY</span><h3 className="mt-3 text-2xl text-white">{item.name}</h3><p className={`mt-3 text-xs leading-6 text-white/75 ${active===i?"block":"hidden"}`}>{item.copy}</p></div></button>)}</div><p className="mt-5 text-[9px] tracking-[.18em] text-white/40">SELECT A MATERIAL TO EXPLORE ITS STORY</p></div></section>}
