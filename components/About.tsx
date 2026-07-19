import Image from "next/image";
import CornerTicks from "./CornerTicks";

const facts = [
  { label: "Formation", value: "Licence 3 Génie Civil (en cours)" },
  { label: "Localisation", value: "Béthune · Mobilité nationale" },
  { label: "Spécialités", value: "Structure · Suivi de chantier" },
  { label: "Langues", value: "FR maternelle · EN scolaire" },
];

export default function About() {
  return (
    <section id="about" style={{ maxWidth: 1180, margin: "0 auto", padding: "var(--section-pad)" }}>
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
          01
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
          À propos
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "var(--grid-about)",
          gap: "var(--gap-two-col)",
          alignItems: "start",
        }}
      >
        <div
          style={{
            position: "relative",
            aspectRatio: "4/5",
            border: "1px solid #D6E0EE",
            background: "#EEF3FA",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/about-portrait.jpg"
            alt="Jordan Houenou — portrait"
            fill
            sizes="(max-width: 860px) 100vw, 500px"
            style={{ objectFit: "cover" }}
          />
          <CornerTicks color="#2E63C4" />
        </div>
        <div>
          <p
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 28,
              lineHeight: 1.4,
              fontWeight: 400,
              margin: "0 0 28px",
              color: "#11223D",
            }}
          >
            Étudiant en Licence 3 Génie Civil à l&apos;Université d&apos;Artois, à la recherche
            d&apos;une alternance — entre suivi de chantier, structures et méthode.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "#48566B", margin: "0 0 18px" }}>
            Mon parcours entre la France et le Maroc m&apos;a permis de développer une double
            compétence technique et terrain : dessin de structures, contrôle technique sur
            chantier, métré et quantification d&apos;ouvrages. Ce portfolio rassemble mes stages et
            expériences concrètes.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "#48566B", margin: "0 0 36px" }}>
            Esprit d&apos;équipe, compréhension rapide et motivation guident chacune de mes
            interventions, du bureau d&apos;études jusqu&apos;au pied de l&apos;ouvrage.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              background: "#E0E8F3",
              border: "1px solid #E0E8F3",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            {facts.map((fact) => (
              <div key={fact.label} style={{ background: "#fff", padding: 20 }}>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    color: "#2E63C4",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {fact.label}
                </div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>{fact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
