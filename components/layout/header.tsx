
"use client";

import { useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#172b3a]/[0.97] text-white shadow-lg shadow-[#0d1c27]/10 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[84px] lg:px-12 xl:px-16">
        {/* Company identity */}
        <a
          href="#home"
          aria-label="Makyn Construction Company Limited - Home"
          className="group flex min-w-0 shrink-0 items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-[#bd9143]/60 bg-[#bd9143]/10 transition-colors duration-300 group-hover:bg-[#bd9143]/20">
            <svg
              viewBox="0 0 44 44"
              fill="none"
              className="h-9 w-9"
              aria-hidden="true"
            >
              <path
                d="M8 34V10H13L22 22L31 10H36V34H30V20L22 31L14 20V34H8Z"
                fill="#d5b16b"
              />
              <path
                d="M7 38H37"
                stroke="#d5b16b"
                strokeWidth="1.5"
              />
            </svg>
          </span>

          <span className="flex min-w-0 flex-col">
            <span className="truncate text-[15px] font-bold uppercase leading-tight tracking-[0.11em] sm:text-[17px]">
              MAKYN
            </span>
            <span className="mt-1 text-[8px] font-medium uppercase leading-tight tracking-[0.16em] text-white/65 sm:text-[9px]">
              Construction Company Ltd.
            </span>
            <span className="mt-1 hidden text-[10px] tracking-wide text-[#d5b16b] sm:block">
              Your trusted construction partner
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 xl:flex 2xl:gap-9"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative py-3 text-[12px] font-medium tracking-wide text-white/75 transition-colors duration-200 hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-1 h-[2px] origin-left scale-x-0 bg-[#bd9143] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Desktop call to action */}
        <div className="hidden items-center xl:flex">
          <a
            href="#contact"
            className="group inline-flex h-11 items-center gap-3 rounded-sm bg-[#bd9143] px-5 text-[11px] font-bold uppercase tracking-[0.09em] text-[#122432] transition-all duration-300 hover:bg-[#d5b16b] hover:shadow-lg hover:shadow-black/10 2xl:px-6"
          >
            <span>Request a Quote</span>
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path
                d="M4 10H16M10 4L16 10L10 16"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-white/15 text-white transition-colors hover:border-[#bd9143] hover:text-[#d5b16b] xl:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation panel */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#122432] transition-[max-height,opacity] duration-300 ease-in-out xl:hidden ${
          menuOpen
            ? "max-h-[440px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto max-w-[1440px] px-5 py-3 sm:px-8"
        >
          {navigation.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-white/[0.07] py-4 text-sm font-medium text-white/80 transition-colors hover:text-[#d5b16b]"
            >
              <span>{item.label}</span>
              <span className="text-xs text-[#bd9143]">
                0{index + 1}
              </span>
            </a>
          ))}

          <a
            href="#contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex min-h-12 items-center justify-between rounded-sm bg-[#bd9143] px-5 text-xs font-bold uppercase tracking-wider text-[#122432] transition-colors hover:bg-[#d5b16b]"
          >
            Request a Quote
            <span aria-hidden="true">↗</span>
          </a>

          <p className="pb-2 pt-5 text-[10px] uppercase tracking-[0.15em] text-white/40">
            Your trusted construction partner
          </p>
        </nav>
      </div>
    </header>
  );
}
