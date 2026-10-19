
import BrandMark from "@/components/ui/brand-mark";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Projects", href: "#projects" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  "Building Construction",
  "Renovations & Remodelling",
  "Masonry & Carpentry Works",
  "Roofing & Ceiling Installation",
  "Painting & Finishing",
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/", symbol: "f" },
  { name: "Instagram", href: "https://www.instagram.com/", symbol: "◎" },
  { name: "TikTok", href: "https://www.tiktok.com/", symbol: "♪" },
  { name: "LinkedIn", href: "https://www.linkedin.com/", symbol: "in" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#122432] text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Column 1: Brand */}
          <div className="min-w-0">
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <BrandMark />
              <span className="flex flex-col">
                <strong className="text-lg leading-tight tracking-wide">
                  MAKYN
                </strong>
                <span className="mt-1 text-[9px] font-semibold leading-tight tracking-[0.12em] text-[#d5b16b]">
                  CONSTRUCTION COMPANY LTD.
                </span>
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
              Your trusted construction partner. We create lasting spaces
              through skilled workmanship and attention to detail.
            </p>

            <h2 className="mt-5 text-xs font-bold uppercase tracking-widest text-[#d5b16b]">
              Follow Us
            </h2>

            <div className="mt-3 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Makyn Construction on ${social.name}`}
                  title={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs font-semibold text-white/80 transition hover:border-[#d5b16b] hover:bg-[#d5b16b] hover:text-[#122432]"
                >
                  {social.symbol}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="min-w-0">
            <h2 className="border-b border-white/10 pb-3 text-xs font-bold uppercase tracking-widest text-[#d5b16b]">
              Explore
            </h2>

            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-[#d5b16b]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="min-w-0">
            <h2 className="border-b border-white/10 pb-3 text-xs font-bold uppercase tracking-widest text-[#d5b16b]">
              Our Services
            </h2>

            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2 text-sm leading-5 text-white/65"
                >
                  <span className="shrink-0 text-[#d5b16b]" aria-hidden="true">
                    ↗
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="min-w-0">
            <h2 className="border-b border-white/10 pb-3 text-xs font-bold uppercase tracking-widest text-[#d5b16b]">
              Contact Us
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/65">
              Have a project in mind? Let&apos;s talk about how we can bring
              your vision to life.
            </p>

            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                  Phone
                </p>
                <p className="mt-1 break-words text-white/80">
                  Add company phone number
                </p>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                  Email
                </p>
                <p className="mt-1 break-words text-white/80">
                  Add company email
                </p>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                  Location
                </p>
                <p className="mt-1 text-white/80">
                  Add company location
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center justify-center gap-2 bg-[#bd9143] px-4 py-2.5 text-xs font-semibold text-[#122432] transition hover:bg-[#d5b16b]"
            >
              Discuss Your Project <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#0d1c27]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-4 text-center sm:px-8 md:flex-row md:text-left lg:px-10">
          <p className="text-xs leading-5 text-white/50">
            © 2026 Makyn Construction Company Limited. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-[10px] font-semibold tracking-widest text-white/60 transition hover:text-[#d5b16b]"
          >
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
