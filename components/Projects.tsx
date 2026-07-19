import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projets" style={{ background: "#0F2A57", color: "#fff" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "var(--section-pad)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 18,
            borderBottom: "2px solid rgba(255,255,255,0.16)",
            paddingBottom: 18,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 30,
              lineHeight: 1,
              color: "#8FB4EC",
            }}
          >
            02
          </span>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontWeight: 500,
              fontSize: "clamp(34px,5vw,56px)",
              lineHeight: 1,
              margin: 0,
              color: "#fff",
            }}
          >
            Projets &amp; réalisations
          </h2>
        </div>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.7)",
            maxWidth: "44em",
            margin: "0 0 56px",
          }}
        >
          Sept études structurelles réalisées en bureau d&apos;études durant mon stage chez JKF
          Structure : fondations, coupes, ferraillage et charpente bois — du croquis à la
          validation. Détails de localisation et clients anonymisés par confidentialité.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "var(--grid-2col)", gap: "var(--gap-project-cards)" }}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projets/${project.slug}`}
              className="project-card"
              style={{
                display: "block",
                background: "#16336A",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 6,
                overflow: "hidden",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16/10",
                  background: "#fff",
                  overflow: "hidden",
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <Image
                  src={project.cardImage}
                  alt={`${project.title} — extrait de plan technique`}
                  fill
                  sizes="(max-width: 900px) 100vw, 530px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 11,
                    color: "#fff",
                    background: "#2E63C4",
                    padding: "6px 10px",
                  }}
                >
                  {project.num}
                </span>
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#8FB4EC",
                      border: "1px solid rgba(143,180,236,0.5)",
                      padding: "3px 8px",
                      borderRadius: 3,
                    }}
                  >
                    {project.type}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: 11,
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {project.location} · {project.year}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontWeight: 500,
                    fontSize: 25,
                    lineHeight: 1.15,
                    margin: "0 0 8px",
                    color: "#fff",
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,0.66)", margin: "0 0 14px" }}>
                  {project.summary}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    color: "#8FB4EC",
                  }}
                >
                  Voir le dossier →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
