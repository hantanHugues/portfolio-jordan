export default function Header() {
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
          padding: "16px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a
          href="#accueil"
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
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <a
            href="#about"
            className="nav-link"
            style={{
              padding: "8px 14px",
              fontSize: 13.5,
              fontWeight: 500,
              color: "rgba(255,255,255,0.82)",
              textDecoration: "none",
            }}
          >
            À propos
          </a>
          <a
            href="#projets"
            className="nav-link"
            style={{
              padding: "8px 14px",
              fontSize: 13.5,
              fontWeight: 500,
              color: "rgba(255,255,255,0.82)",
              textDecoration: "none",
            }}
          >
            Projets
          </a>
          <a
            href="#skills"
            className="nav-link"
            style={{
              padding: "8px 14px",
              fontSize: 13.5,
              fontWeight: 500,
              color: "rgba(255,255,255,0.82)",
              textDecoration: "none",
            }}
          >
            Compétences
          </a>
          <a
            href="#parcours"
            className="nav-link"
            style={{
              padding: "8px 14px",
              fontSize: 13.5,
              fontWeight: 500,
              color: "rgba(255,255,255,0.82)",
              textDecoration: "none",
            }}
          >
            Parcours
          </a>
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
      </div>
    </header>
  );
}
