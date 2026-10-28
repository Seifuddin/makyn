
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-lab" },
  { label: "Our Services", href: "/services" },
  { label: "Our Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  "Building Construction",
  "Renovations & Remodelling",
  "Masonry & Carpentry",
  "Roofing & Ceilings",
  "Painting & Finishing",
  "Construction Solutions",
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <path
        d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.6 1.6-1.6h1.7V3.5c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H7.5V13h2.7v8h3.3Z"
        fill="currentColor"
      />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.5" cy="6.8" r="1.1" fill="currentColor" />
      </>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/",
    icon: (
      <path
        d="M14 3v11.1a3.3 3.3 0 1 1-2.8-3.3V8a6.3 6.3 0 1 0 6 6.1V8.8a8.1 8.1 0 0 0 3.3.7V6.4A5.1 5.1 0 0 1 16 3H14Z"
        fill="currentColor"
      />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <>
        <path
          d="M5 8.5H2V21h3V8.5ZM3.5 3A1.8 1.8 0 1 0 3.5 6.6 1.8 1.8 0 0 0 3.5 3ZM22 13.2c0-3.8-2-5.5-4.6-5.5a4 4 0 0 0-3.6 2V8.5h-3V21h3v-6.2c0-1.6.3-3.2 2.3-3.2s2 1.9 2 3.3V21h3.1l.8-7.8Z"
          fill="currentColor"
        />
      </>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/",
    icon: (
      <>
        <path
          d="M20.1 3.9A10.2 10.2 0 0 0 4.1 16.2L2.7 21l4.9-1.3a10.2 10.2 0 0 0 12.5-15.8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8 7.5c-.3.2-.8.8-.8 1.7 0 1 .7 2.4 1.8 3.7 1.1 1.3 2.8 2.5 4.4 3 .8.3 1.5.2 2-.1.5-.3.8-1 .9-1.5.1-.3-.1-.5-.4-.6l-2-.9c-.3-.1-.5-.1-.7.2l-.8 1c-1.2-.5-2.2-1.4-2.8-2.5l.7-.8c.2-.2.2-.5.1-.7l-.9-2c-.2-.4-.7-.6-1.5-.5Z"
          fill="currentColor"
        />
      </>
    ),
  },
];

function BrandMark() {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#bd9143]/50 bg-[#bd9143]/10"
      aria-hidden="true"
    >
      <svg viewBox="0 0 44 44" fill="none" className="h-10 w-10">
        <path
          d="M8 34V10H13L22 22L31 10H36V34H30V20L22 31L14 20V34H8Z"
          fill="#d5b16b"
        />
        <path d="M7 38H37" stroke="#d5b16b" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function FooterArrow() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M4 10H16M10 4L16 10L10 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0d1c27] text-white">
      <div className="h-[3px] w-full bg-[#bd9143]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/[0.04] sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="/" className="inline-flex items-center gap-3">
              <BrandMark />
              <span>
                <span className="block text-lg font-bold uppercase tracking-[0.13em]">
                  MAKYN
                </span>
                <span className="mt-1 block text-[9px] uppercase tracking-[0.14em] text-white/55">
                  Construction Company Ltd.
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Building with purpose. Delivering with precision. We are
              committed to quality workmanship and practical construction
              solutions tailored to your vision.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#bd9143]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d5b16b]">
                Your trusted construction partner
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em]">
              Explore
            </h2>
            <div className="mb-5 mt-3 h-[2px] w-8 bg-[#bd9143]" />

            <ul className="space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#d5b16b]"
                  >
                    <span className="h-px w-0 bg-[#bd9143] transition-all group-hover:w-3" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em]">
              Our Expertise
            </h2>
            <div className="mb-5 mt-3 h-[2px] w-8 bg-[#bd9143]" />

            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#d5b16b]"
                  >
                    <span className="text-[10px] text-[#bd9143]"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media and CTA */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em]">
              Connect With Us
            </h2>
            <div className="mb-5 mt-3 h-[2px] w-8 bg-[#bd9143]" />

            <p className="max-w-xs text-sm leading-7 text-white/60">
              Follow our journey, discover our work, and stay connected as we
              build for the future.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Makyn on ${social.name}`}
                  title={social.name}
                  className="group flex h-11 w-11 items-center justify-center border border-white/15 bg-white/[0.03] text-white/65 transition-all duration-300 hover:-translate-y-1 hover:border-[#bd9143] hover:bg-[#bd9143] hover:text-[#122432] hover:shadow-lg hover:shadow-black/20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[19px] w-[19px] transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>

            <p className="mt-3 text-[11px] text-white/40">
              Facebook · Instagram · TikTok · LinkedIn · WhatsApp
            </p>

            <a
              href="/contact"
              className="group mt-6 inline-flex min-h-12 w-full max-w-[260px] items-center justify-between gap-4 bg-[#bd9143] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#122432] transition-colors hover:bg-[#d5b16b]"
            >
              Request a Quote
              <span className="transition-transform group-hover:translate-x-1">
                <FooterArrow />
              </span>
            </a>
          </div>
        </div>

       
        {/* Copyright and designer credit */}
        <div className="border-t border-white/10 py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-white/45">
              © 2026 Makyn Construction Company Limited. All rights reserved.
            </p>

            <a
              href="/"
              className="group inline-flex w-fit items-center gap-2 text-xs text-white/60 transition-colors hover:text-[#d5b16b]"
            >
              Back to top
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 transition-transform group-hover:-translate-y-1"
                aria-hidden="true"
              >
                <path
                  d="M10 16V4M4 10L10 4L16 10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Website designer credit */}
          <div className="mt-4 border-t border-white/[0.06] pt-4 text-center">
            <p className="text-[11px] tracking-wide text-white/45 sm:text-xs">
              Built and designed by{" "}
              <a
                href="https://lapsa.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#d5b16b] transition-colors duration-200 hover:text-white"
              >
                Lapsa Web and Graphics
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
