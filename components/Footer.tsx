const FOOTER_NAV = [
  { href: "#concept", label: "Concept" },
  { href: "#service", label: "Service" },
  { href: "#works", label: "Works" },
  { href: "#consulting", label: "Consulting" },
  { href: "#beforeafter", label: "Before / After" },
  { href: "#flow", label: "Flow" },
  { href: "#price", label: "Price" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="footer__brand-name">ShijimiWORKs</p>
            <p className="footer__brand-tag">
              Interior Design Consulting
              <br />
              色と素材で、空間の印象を整える。
            </p>
          </div>
          <nav className="footer__nav" aria-label="フッターナビゲーション">
            {FOOTER_NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} ShijimiWORKs Interior Design Consulting</span>
          <span>空間デザインコンサルティング ・ Portfolio Sample</span>
        </div>
      </div>
    </footer>
  );
}
