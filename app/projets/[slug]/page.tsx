import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Jordan Houenou`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <section style={{ background: "#0F2A57", color: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "var(--detail-hero-pad)" }}>
            <Link
              href="/#projets"
              className="contact-link"
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 12,
                letterSpacing: "0.1em",
                color: "#8FB4EC",
                textDecoration: "none",
              }}
            >
              ← Retour aux projets
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "24px 0 16px" }}>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 12,
                  color: "#fff",
                  background: "#2E63C4",
                  padding: "5px 10px",
                  borderRadius: 3,
                }}
              >
                {project.num}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#8FB4EC",
                  border: "1px solid rgba(143,180,236,0.5)",
                  padding: "4px 9px",
                  borderRadius: 3,
                }}
              >
                {project.type}
              </span>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 500,
                fontSize: "clamp(32px,5vw,52px)",
                lineHeight: 1.05,
                margin: "0 0 20px",
              }}
            >
              {project.title}
            </h1>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                    marginBottom: 4,
                  }}
                >
                  Lieu
                </div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>{project.location}</div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                    marginBottom: 4,
                  }}
                >
                  Année
                </div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>{project.year}</div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                    marginBottom: 4,
                  }}
                >
                  Outils
                </div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>{project.tools.join(" · ")}</div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 900, margin: "0 auto", padding: "var(--detail-section-pad-top0)" }}>
          <h2
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#2E63C4",
              margin: "0 0 20px",
            }}
          >
            Plans &amp; extraits techniques
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: project.gallery.length > 1 ? "var(--grid-2col)" : "1fr",
              gap: "var(--gap-cards)",
            }}
          >
            {project.gallery.map((item) => (
              <div key={item.src}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    background: "#fff",
                    border: "1px solid #E0E8F3",
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 900px) 100vw, 420px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 12,
                    color: "#5C6B82",
                    marginTop: 10,
                  }}
                >
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: 900, margin: "0 auto", padding: "var(--detail-section-pad)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "var(--grid-detail)", gap: "var(--gap-detail-grid)", alignItems: "start" }}>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#2E63C4",
                  margin: "0 0 14px",
                }}
              >
                Contexte
              </h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "#48566B", margin: 0 }}>{project.context}</p>

              <div
                style={{
                  marginTop: 32,
                  background: "#EEF3FA",
                  border: "1px solid #DCE6F4",
                  borderLeft: "3px solid #2E63C4",
                  borderRadius: 4,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#2E63C4",
                    marginBottom: 8,
                  }}
                >
                  Point technique clé
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "#1F3559", margin: 0 }}>{project.highlight}</p>
              </div>
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#2E63C4",
                  margin: "0 0 14px",
                }}
              >
                Mission
              </h2>
              <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 18 }}>
                {project.mission.map((step, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 12 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: 12,
                        color: "#2E63C4",
                        paddingTop: 2,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#48566B", margin: 0 }}>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section style={{ background: "#fff", borderTop: "1px solid #E0E8F3", borderBottom: "1px solid #E0E8F3" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "var(--gallery-section-pad)" }}>
            <h2
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#2E63C4",
                margin: "0 0 20px",
              }}
            >
              Livrables &amp; preuves
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {project.deliverables.map((item, i) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "16px 0",
                    borderTop: i === 0 ? "1px solid #E0E8F3" : "1px solid #E0E8F3",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: 11,
                      color: "#2E63C4",
                      border: "1px solid #C3D4EC",
                      borderRadius: 4,
                      padding: "4px 8px",
                      flexShrink: 0,
                    }}
                  >
                    PDF
                  </span>
                  <span style={{ fontSize: 15, color: "#11223D" }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "#5C6B82", marginTop: 20 }}>
              Extraits de plans ci-dessus ; dossier complet disponible sur demande (données de
              localisation et de maîtrise d&apos;ouvrage anonymisées ici par confidentialité).
            </p>
          </div>
        </section>

        <section style={{ maxWidth: 900, margin: "0 auto", padding: "var(--detail-footer-pad)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <Link
              href={`/projets/${prev.slug}`}
              className="contact-link"
              style={{ fontSize: 14, color: "#11223D", textDecoration: "none" }}
            >
              ← {prev.title}
            </Link>
            <Link
              href={`/projets/${next.slug}`}
              className="contact-link contact-row-value"
              style={{ fontSize: 14, color: "#11223D", textDecoration: "none" }}
            >
              {next.title} →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
