import CornerTicks from "./CornerTicks";

export default function Hero() {
  return (
    <section
      id="accueil"
      style={{
        position: "relative",
        background: "#0F2A57",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 56,
            alignItems: "center",
            minHeight: "calc(100vh - 71px)",
            padding: "64px 0",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <span style={{ width: 34, height: 2, background: "#3B7DDD" }} />
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 12,
                  letterSpacing: "0.22em",
                  color: "#8FB4EC",
                  textTransform: "uppercase",
                }}
              >
                Portfolio · Génie Civil
              </span>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 500,
                fontSize: "clamp(48px,7vw,88px)",
                lineHeight: 0.98,
                letterSpacing: "-0.01em",
                margin: "0 0 24px",
              }}
            >
              Bâtir avec
              <br />
              <em style={{ fontStyle: "italic", color: "#8FB4EC" }}>méthode</em> &amp; précision
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.78)",
                maxWidth: "31em",
                margin: "0 0 36px",
              }}
            >
              Étudiant en Licence Génie Civil, à la recherche d&apos;une alternance. Suivi de
              chantier, structures béton armé et métré — un aperçu de mes stages entre la France et
              le Maroc.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="#projets"
                className="hero-btn-primary"
                style={{
                  padding: "14px 26px",
                  fontSize: 14,
                  fontWeight: 600,
                  background: "#fff",
                  color: "#0F2A57",
                  borderRadius: 6,
                  textDecoration: "none",
                }}
              >
                Voir les réalisations
              </a>
              <a
                href="#contact"
                className="hero-btn-outline"
                style={{
                  padding: "14px 26px",
                  fontSize: 14,
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.45)",
                  color: "#fff",
                  borderRadius: 6,
                  textDecoration: "none",
                }}
              >
                Me contacter
              </a>
            </div>
            <div
              style={{
                display: "flex",
                gap: 40,
                marginTop: 56,
                paddingTop: 28,
                borderTop: "1px solid rgba(255,255,255,0.16)",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 36,
                    lineHeight: 1,
                    color: "#fff",
                  }}
                >
                  07
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: "#8FB4EC",
                    marginTop: 6,
                    textTransform: "uppercase",
                  }}
                >
                  Réalisations
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 36,
                    lineHeight: 1,
                    color: "#fff",
                  }}
                >
                  03
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: "#8FB4EC",
                    marginTop: 6,
                    textTransform: "uppercase",
                  }}
                >
                  Stages terrain
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 36,
                    lineHeight: 1,
                    color: "#fff",
                  }}
                >
                  04
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: "#8FB4EC",
                    marginTop: 6,
                    textTransform: "uppercase",
                  }}
                >
                  Logiciels DAO/BIM
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                border: "1px solid rgba(255,255,255,0.28)",
                background: "rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
              }}
            >
              <CornerTicks color="#8FB4EC" />
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  color: "#8FB4EC",
                  border: "1px solid rgba(143,180,236,0.5)",
                  padding: "7px 12px",
                  borderRadius: 4,
                }}
              >
                [ photo · portrait / chantier ]
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: -14,
                right: -14,
                background: "#2E63C4",
                color: "#fff",
                padding: "14px 18px",
                maxWidth: 210,
                borderRadius: 4,
                boxShadow: "0 12px 30px rgba(15,42,87,0.4)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontSize: 18,
                  lineHeight: 1.25,
                }}
              >
                « La précision sur le terrain. »
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
