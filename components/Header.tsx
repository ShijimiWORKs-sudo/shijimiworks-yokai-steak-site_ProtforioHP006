"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#concept", label: "Concept" },
  { href: "#service", label: "Service" },
  { href: "#works", label: "Works" },
  { href: "#consulting", label: "Consulting" },
  { href: "#flow", label: "Flow" },
  { href: "#price", label: "Price" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#top" className="brand" aria-label="ShijimiWORKs ホームへ">
          <span className="brand__name">ShijimiWORKs</span>
          <span className="brand__tag">Interior Design Consulting</span>
        </a>

        <nav
          className={`nav ${open ? "is-open" : ""}`}
          aria-label="グローバルナビゲーション"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav__cta"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
