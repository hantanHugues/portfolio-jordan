const skillGroups = [
  {
    idx: "a",
    title: "Logiciels",
    items: ["AutoCAD", "Revit", "Graitec", "Robot", "Word", "Excel", "PowerPoint"],
  },
  {
    idx: "b",
    title: "Compétences techniques",
    items: [
      "Suivi de chantier",
      "Résistance des matériaux (RDM)",
      "Dimensionnement béton armé",
      "Métrés & quantification",
      "Dessins techniques",
      "Estimation des coûts & devis",
    ],
  },
  {
    idx: "c",
    title: "Savoir-être",
    items: ["Esprit d'équipe", "Compréhension rapide", "Gestion du temps", "Motivé et actif"],
  },
  {
    idx: "d",
    title: "Langues",
    items: ["Français — langue maternelle", "Anglais — niveau scolaire", "Fon — langue locale"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ maxWidth: 1180, margin: "0 auto", padding: "var(--section-pad)" }}>
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
          03
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
          Compétences
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "var(--grid-2col)", gap: "var(--gap-cards)" }}>
        {skillGroups.map((group) => (
          <div
            key={group.idx}
            style={{
              background: "#fff",
              border: "1px solid #E0E8F3",
              borderRadius: 6,
              padding: 32,
              boxShadow: "0 1px 3px rgba(15,42,87,0.05)",
              borderTop: "3px solid #2E63C4",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 20 }}>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  color: "#2E63C4",
                  textTransform: "uppercase",
                }}
              >
                {group.idx}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 500,
                  fontSize: 26,
                  margin: 0,
                  color: "#11223D",
                }}
              >
                {group.title}
              </h3>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: 14,
                    color: "#1F3559",
                    background: "#EEF3FA",
                    border: "1px solid #DCE6F4",
                    padding: "7px 13px",
                    borderRadius: 20,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
