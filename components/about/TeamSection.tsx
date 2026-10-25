
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9.5H7v11H3.4v-11Zm5.8 0h3.5V11h.1a3.9 3.9 0 0 1 3.5-1.9c3.7 0 4.4 2.4 4.4 5.5v5.9h-3.6v-5.2c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.3H9.2v-11Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V21h3.4Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.7" cy="6.5" r=".9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 3H22l-6.8 7.8L23.2 21h-6.3L12 14.7 6.5 21H3.4l7.3-8.4L3 3h6.5l4.5 6 4.9-6Zm-1.1 16h1.7L8.5 4.9H6.7L17.8 19Z" />
      </svg>
    ),
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#f7f5f0] px-5 py-10 text-[#172b3a] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10 lg:gap-14">
          {/* CEO portrait */}
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="absolute -bottom-3 -left-3 h-2/3 w-2/3 border border-[#bd9143]/70" />

            <div className="relative aspect-[4/4.2] overflow-hidden bg-[#e5e0d5]">
              <Image
                src="/images/markceo.jpg"
                alt="Chief Executive Officer of Makyn Construction Company Limited"
                fill
                sizes="(max-width: 768px) 90vw, 35vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172b3a]/65 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4">
                <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#d5b16b]">
                  Leadership
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Makyn Construction
                </p>
              </div>
            </div>
          </div>

          {/* CEO details */}
          <div className="py-1">
            <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#bd9143] sm:text-xs">
              <span className="h-px w-7 bg-[#bd9143]" />
              Meet our leadership
            </p>

            <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Leadership with
              <span className="block font-light italic text-[#bd9143]">
                purpose and vision.
              </span>
            </h2>

            <div className="mt-5 border-l-2 border-[#bd9143] pl-4">
              {/* Replace with the CEO's actual name */}
              <h3 className="text-lg font-semibold sm:text-xl">
                Chief Executive Officer
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#172b3a]/55">
                Makyn Construction Company Limited
              </p>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#172b3a]/70">
              At Makyn, our focus is on turning our clients' ideas into
              practical, well-considered spaces. We value integrity, thoughtful
              planning, quality workmanship, and relationships built on trust.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#172b3a]/70">
              Every project is an opportunity to listen, collaborate, and work
              towards results that reflect our clients' vision and needs.
            </p>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#172b3a]/50">
                Connect
              </span>

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.name}`}
                  title={social.name}
                  className="group flex h-10 w-10 items-center justify-center border border-[#172b3a]/15 bg-white text-[#172b3a] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#bd9143] hover:bg-[#172b3a] hover:text-[#d5b16b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd9143] focus-visible:ring-offset-2"
                >
                  <span className="h-[17px] w-[17px]">
                    {social.icon}
                  </span>
                </a>
              ))}

              <Link
                href="/contact"
                className="ml-auto inline-flex items-center gap-2 border-b border-[#bd9143] pb-1 text-xs font-semibold transition-colors hover:text-[#bd9143] sm:text-sm"
              >
                Contact us
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
