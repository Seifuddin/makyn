import BrandMark from "@/components/ui/brand-mark";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <a href="#home" className="brand footer-brand">
        <BrandMark />
        <span className="brand-copy">
          <strong>MAKYN</strong>
          <span>CONSTRUCTION COMPANY LTD.</span>
        </span>
      </a>

      <p>Your trusted construction partner.</p>

      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Makyn Construction Company Limited.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
