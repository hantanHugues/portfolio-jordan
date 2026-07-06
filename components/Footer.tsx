export default function Footer() {
  return (
    <footer style={{ background: "#0F2A57", color: "#fff" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 20 }}>
          Jordan Houenou — <span style={{ color: "#8FB4EC", fontStyle: "italic" }}>Génie Civil</span>
        </div>
        <div
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          © {new Date().getFullYear()} · Portfolio professionnel
        </div>
      </div>
    </footer>
  );
}
