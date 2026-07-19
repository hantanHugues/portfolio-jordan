const timeline = [
  {
    year: "2026",
    title: "Stage — Assistant ingénieur structure (en cours)",
    org: "JKF Structure, Roubaix, France",
    desc: "Rôle de dessinateur, suivi et dessin de structures au sein du bureau d'études.",
  },
  {
    year: "2026",
    title: "Licence 3 — Génie Civil (en cours)",
    org: "Faculté des Sciences Appliquées, Université d'Artois, 62400",
    desc: "Poursuite d'études en génie civil à l'Université d'Artois.",
  },
  {
    year: "2025",
    title: "Licence d'université — Génie Civil",
    org: "Kénitra, Maroc",
    desc: "Formation qualifiante en Qualité Hygiène et Sécurité (QHSE) à l'EMVIFBTP.",
  },
  {
    year: "2024",
    title: "Stage — Contrôleur technique de chantier",
    org: "HE Construction, Ben Guérir, Maroc",
    desc: "Contrôle technique sur chantier et vérification du respect des normes.",
  },
  {
    year: "2024",
    title: "Technicien Spécialisé — Génie Civil, option méthode",
    org: "EMVIFBTP",
    desc: "Spécialisation en méthodes de construction.",
  },
  {
    year: "2023",
    title: "Stage — Métreur, quantification",
    org: "Agence Nationale des Équipements Publics (ANEP), Settat, Maroc",
    desc: "Métré et quantification d'une maison d'habitation.",
  },
  {
    year: "2022",
    title: "Baccalauréat — Génie Civil (BAC F4)",
    org: "Diplôme du baccalauréat",
    desc: "Fondamentaux du génie civil.",
  },
];

export default function Timeline() {
  return (
    <section
      id="parcours"
      style={{ background: "#fff", borderTop: "1px solid #E0E8F3", borderBottom: "1px solid #E0E8F3" }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "var(--section-pad)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 18,
            borderBottom: "2px solid #E0E8F3",
            paddingBottom: 18,
            marginBottom: 56,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 30,
              lineHeight: 1,
              color: "#2E63C4",
            }}
          >
            04
          </span>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 500,
              fontSize: "clamp(34px,5vw,56px)",
              lineHeight: 1,
              margin: 0,
              color: "#11223D",
            }}
          >
            Parcours
          </h2>
        </div>
        <div style={{ maxWidth: 820 }}>
          {timeline.map((step) => (
            <div
              key={step.year + step.title}
              style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: "var(--grid-timeline-item)",
                gap: "var(--gap-timeline)",
                padding: "28px 0",
                borderTop: "1px solid #E0E8F3",
              }}
            >
              <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 14, color: "#2E63C4", paddingTop: 4 }}>
                {step.year}
              </div>
              <div style={{ position: "relative", paddingLeft: 28, borderLeft: "2px solid #DCE6F4" }}>
                <span
                  style={{
                    position: "absolute",
                    left: -7,
                    top: 6,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#2E63C4",
                    border: "2px solid #fff",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontWeight: 500,
                    fontSize: 26,
                    lineHeight: 1.2,
                    margin: "0 0 4px",
                    color: "#11223D",
                  }}
                >
                  {step.title}
                </h3>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#2E63C4",
                    marginBottom: 12,
                  }}
                >
                  {step.org}
                </div>
                <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#48566B", margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
