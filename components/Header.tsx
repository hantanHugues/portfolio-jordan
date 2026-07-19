"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#projets", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(15,42,87,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "var(--header-pad)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a
          href="#accueil"
          onClick={() => setOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <span
            style={{
              width: 34,
              height: 34,
              background: "#2E63C4",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 600,
              fontSize: 18,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            J
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              lineHeight: 1.05,
            }}
          >
            <span style={{ fontWeight: 600, fontSize: 14, letterSpacing: "0.02em" }}>
              Jordan Houenou
            </span>
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 10,
                letterSpacing: "0.18em",
                color: "#8FB4EC",
                textTransform: "uppercase",
              }}
            >
              Génie Civil
            </span>
          </span>
        </a>
        <nav className="desktop-nav" style={{ alignItems: "center", gap: 4 }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{
                padding: "8px 14px",
                fontSize: 13.5,
                fontWeight: 500,
                color: "rgba(255,255,255,0.82)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-contact"
            style={{
              marginLeft: 8,
              padding: "9px 18px",
              fontSize: 13,
              fontWeight: 600,
              background: "#2E63C4",
              color: "#fff",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            flexShrink: 0,
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.24)",
            borderRadius: 6,
          }}
        >
          <span style={{ position: "relative", width: 18, height: 14, display: "block" }}>
            <span
              style={{
                position: "absolute",
                top: open ? 6 : 0,
                left: 0,
                width: 18,
                height: 2,
                background: "#fff",
                transform: open ? "rotate(45deg)" : "none",
                transition: "all 0.2s",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: 6,
                left: 0,
                width: 18,
                height: 2,
                background: "#fff",
                opacity: open ? 0 : 1,
                transition: "all 0.2s",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: open ? 6 : 12,
                left: 0,
                width: 18,
                height: 2,
                background: "#fff",
                transform: open ? "rotate(-45deg)" : "none",
                transition: "all 0.2s",
              }}
            />
          </span>
        </button>
      </div>
      {open && (
        <nav
          className="mobile-nav"
          style={{
            flexDirection: "column",
            padding: "4px 20px 20px",
            gap: 2,
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setOpen(false)}
              style={{
                padding: "13px 4px",
                fontSize: 15,
                fontWeight: 500,
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 10,
              padding: "13px 16px",
              textAlign: "center",
              fontSize: 14,
              fontWeight: 600,
              background: "#2E63C4",
              color: "#fff",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
