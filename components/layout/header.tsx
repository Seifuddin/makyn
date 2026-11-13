
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-lab" },
  { label: "Our Services", href: "/services" },
  { label: "Build Guide", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu after navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu with Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/projects") {
      return pathname === "/projects" || pathname.startsWith("/projects/");
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#172b3a]/[0.97] text-white shadow-lg shadow-[#0d1c27]/10 backdrop-blur-xl">

      <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[82px] lg:px-12 xl:px-16">

        
{/* Company identity */}
<Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label="Makyn Construction Company Limited - Home"
        >
          <div className="relative flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-sm bg-white p-1 sm:h-[54px] sm:w-[54px]">
            <Image
              src="/images/makyn-logo.jpg"
              alt="Makyn Construction Company Limited logo"
              width={120}
              height={120}
              priority
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-[17px] font-bold leading-none tracking-[0.13em] text-white sm:text-[19px]">
              MAKYN
            </span>

            <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#d5b16b] sm:text-[9px]">
              Construction Company Ltd.
            </span>

            <span className="mt-1 hidden text-[9px] tracking-wide text-[#bd9143] smblock">
              Your Trusted Construction Partner
            </span>
          </div>
        </Link>


        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex 2xl:gap-7"
        >
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative whitespace-nowrap py-3 text-[11px] font-medium tracking-[0.035em] transition-colors duration-300 2xl:text-[12px] ${
                  active
                    ? "text-[#d5b16b]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}

                <span
                  className={`absolute inset-x-0 bottom-1 h-[2px] origin-left bg-[#bd9143] transition-transform duration-300 ${
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:flex">
          <Link
            href="/contact"
            className="group inline-flex h-10 items-center gap-3 rounded-sm bg-[#bd9143] px-4 text-[10px] font-bold uppercase tracking-[0.09em] text-[#122432] transition-all duration-300 hover:bg-[#d5b16b] hover:shadow-lg hover:shadow-black/10 2xl:h-11 2xl:px-5"
          >
            Request a Quote

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
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-white transition-all duration-300 hover:border-[#bd9143] hover:text-[#d5b16b] xl:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
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
              className="h-5 w-5"
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

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`overflow-hidden border-t border-white/[0.08] bg-[#122432] transition-[max-height,opacity,visibility] duration-300 ease-in-out xl:hidden ${
          menuOpen
            ? "visible max-h-[520px] opacity-100"
            : "invisible pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto max-w-[1600px] px-5 py-3 sm:px-8"
        >
          {navigation.map((item, index) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between border-b border-white/[0.07] py-3.5 text-[13px] font-medium transition-colors duration-200 ${
                  active
                    ? "text-[#d5b16b]"
                    : "text-white/75 hover:text-[#d5b16b]"
                }`}
              >
                <span className="flex items-center gap-3">
                  {active && (
                    <span className="h-4 w-[2px] bg-[#bd9143]" />
                  )}
                  {item.label}
                </span>

                <span className="text-[10px] tracking-wider text-[#bd9143]/70">
                  0{index + 1}
                </span>
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            className="group mt-4 flex min-h-11 items-center justify-between rounded-sm bg-[#bd9143] px-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#122432] transition-colors hover:bg-[#d5b16b]"
          >
            Request a Quote

            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>

          <div className="flex items-center justify-between pb-2 pt-5">
            <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
              Your trusted construction partner
            </p>

            <span className="h-px w-8 bg-[#bd9143]/60" />
          </div>
        </nav>
      </div>
    </header>
  );
}
