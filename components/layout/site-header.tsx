import ArrowIcon from "@/components/ui/arrow-icon";
import BrandMark from "@/components/ui/brand-mark";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Makyn home">
        <BrandMark />
        <span className="brand-copy">
          <strong>MAKYN</strong>
          <span>CONSTRUCTION COMPANY LTD.</span>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        <a className="nav-active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="header-cta" href="#contact">
        Let&apos;s Talk <ArrowIcon />
      </a>
    </header>
  );
}
