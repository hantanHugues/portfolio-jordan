"use client";

export default function Contact() {
  return (
    <section id="contact" style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 40px" }}>
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
          05
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
          Contact
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.85fr 1.15fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 30,
              lineHeight: 1.35,
              margin: "0 0 36px",
              color: "#11223D",
            }}
          >
            Parlons de votre <em style={{ color: "#2E63C4" }}>projet</em> ou d&apos;une opportunité
            d&apos;alternance.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <a
              href="mailto:Sumason0704@gmail.com"
              className="contact-link"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 0",
                borderTop: "1px solid #E0E8F3",
                textDecoration: "none",
                color: "#11223D",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#5C6B82",
                }}
              >
                Email
              </span>
              <span style={{ fontSize: 15, fontWeight: 500 }}>Sumason0704@gmail.com</span>
            </a>
            <a
              href="tel:+33759872501"
              className="contact-link"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 0",
                borderTop: "1px solid #E0E8F3",
                textDecoration: "none",
                color: "#11223D",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#5C6B82",
                }}
              >
                Téléphone
              </span>
              <span style={{ fontSize: 15, fontWeight: 500 }}>+33 7 59 87 25 01</span>
            </a>
            <div
              className="contact-link"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 0",
                borderTop: "1px solid #E0E8F3",
                borderBottom: "1px solid #E0E8F3",
                color: "#11223D",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#5C6B82",
                }}
              >
                Adresse
              </span>
              <span style={{ fontSize: 15, fontWeight: 500, textAlign: "right" }}>
                1326 rue de l&apos;université, 62400 Béthune
              </span>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            background: "#fff",
            border: "1px solid #E0E8F3",
            borderRadius: 8,
            padding: 32,
            boxShadow: "0 1px 3px rgba(15,42,87,0.05)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#5C6B82",
                }}
              >
                Nom
              </span>
              <input
                type="text"
                placeholder="Votre nom"
                className="form-input"
                style={{
                  padding: "13px 14px",
                  border: "1px solid #D6E0EE",
                  background: "#F8FAFD",
                  fontSize: 15,
                  borderRadius: 6,
                  outline: "none",
                }}
              />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#5C6B82",
                }}
              >
                Email
              </span>
              <input
                type="email"
                placeholder="vous@email.com"
                className="form-input"
                style={{
                  padding: "13px 14px",
                  border: "1px solid #D6E0EE",
                  background: "#F8FAFD",
                  fontSize: 15,
                  borderRadius: 6,
                  outline: "none",
                }}
              />
            </label>
          </div>
          <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 10,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#5C6B82",
              }}
            >
              Message
            </span>
            <textarea
              rows={5}
              placeholder="Votre message…"
              className="form-textarea"
              style={{
                padding: "13px 14px",
                border: "1px solid #D6E0EE",
                background: "#F8FAFD",
                fontSize: 15,
                borderRadius: 6,
                outline: "none",
                resize: "vertical",
              }}
            />
          </label>
          <button
            type="submit"
            className="submit-btn"
            style={{
              alignSelf: "flex-start",
              padding: "14px 30px",
              fontSize: 14,
              fontWeight: 600,
              background: "#2E63C4",
              color: "#fff",
              borderRadius: 6,
            }}
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}
