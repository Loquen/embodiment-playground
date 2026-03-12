export default function ThemePreview() {
  const t = {
    bg: "#090E0B",
    bgSurface: "#111A13",
    bgCard: "#182419",
    text: "#E8F0E9",
    textMuted: "#7A9B7C",
    primary: "#3D7A52",
    primaryHover: "#4D8A62",
    secondary: "#C97B3A",
    secondaryHover: "#D98B4A",
    accent: "#C4A35A",
    headingFont: "Playfair Display",
    bodyFont: "Source Sans 3",
    headingWeight: "400",
  };

  return (
    <div style={{ fontFamily: "system-ui", background: "#111", minHeight: "100vh", padding: "2rem", color: "#eee" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Source+Sans+3:wght@300;400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.1rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa", marginBottom: "2rem" }}>
          The Embodiment Playground — Forest Dark
        </h1>

        <div style={{ background: t.bg, borderRadius: "16px", overflow: "hidden", border: "1px solid #222" }}>
          {/* Hero */}
          <div style={{ padding: "3.5rem 3rem", borderBottom: `1px solid ${t.bgCard}` }}>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
              {["Movement", "Mindfulness", "Community"].map(tag => (
                <span key={tag} style={{
                  background: t.bgCard, color: t.accent,
                  padding: "0.3rem 0.85rem", borderRadius: "2rem",
                  fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase",
                  fontFamily: `'${t.bodyFont}', sans-serif`,
                }}>
                  {tag}
                </span>
              ))}
            </div>
            <h1 style={{
              fontFamily: `'${t.headingFont}', serif`,
              fontWeight: t.headingWeight,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: t.text,
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}>
              Move. Play. Belong.
            </h1>
            <p style={{
              fontFamily: `'${t.bodyFont}', sans-serif`,
              color: t.textMuted,
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "480px",
              marginBottom: "2rem",
              fontWeight: "300",
            }}>
              A monthly gathering exploring the edges of movement, presence, and human potential — outdoors, in community.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button style={{
                background: t.primary,
                color: "#fff",
                border: "none",
                padding: "0.85rem 2rem",
                borderRadius: "4px",
                fontFamily: `'${t.bodyFont}', sans-serif`,
                fontSize: "0.95rem",
                fontWeight: "500",
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}>
                Join the Next Gathering
              </button>
              <button style={{
                background: "transparent",
                color: t.text,
                border: `1.5px solid ${t.secondary}`,
                padding: "0.85rem 2rem",
                borderRadius: "4px",
                fontFamily: `'${t.bodyFont}', sans-serif`,
                fontSize: "0.95rem",
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}>
                Explore Practices
              </button>
            </div>
          </div>

          {/* Practice Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: t.bgCard }}>
            {[
              { label: "Tai Chi & Qi Gong", icon: "☯" },
              { label: "Rope Flow", icon: "〰" },
              { label: "Functional Patterns", icon: "⚡" },
              { label: "Slack Line", icon: "⟿" },
            ].map(item => (
              <div key={item.label} style={{ background: t.bgSurface, padding: "1.75rem 1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <div style={{
                  fontFamily: `'${t.bodyFont}', sans-serif`,
                  color: t.text,
                  fontSize: "0.9rem",
                  fontWeight: "500",
                }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Accent color bar */}
          <div style={{ display: "flex", height: "6px" }}>
            <div style={{ flex: 1, background: t.primary }} />
            <div style={{ flex: 1, background: t.secondary }} />
            <div style={{ flex: 1, background: t.accent }} />
          </div>

          {/* Swatches + Typography */}
          <div style={{ padding: "2rem 3rem", background: t.bgSurface }}>
            <p style={{ color: t.textMuted, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", fontFamily: `'${t.bodyFont}', sans-serif` }}>Color Tokens</p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {[
                { name: "Background", value: t.bg },
                { name: "Surface", value: t.bgSurface },
                { name: "Card", value: t.bgCard },
                { name: "Text", value: t.text },
                { name: "Muted", value: t.textMuted },
                { name: "Primary", value: t.primary },
                { name: "Secondary", value: t.secondary },
                { name: "Accent", value: t.accent },
              ].map(s => (
                <div key={s.name} style={{ textAlign: "center" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "8px",
                    background: s.value,
                    border: "1px solid rgba(255,255,255,0.08)",
                    marginBottom: "0.4rem",
                  }} />
                  <div style={{ color: t.textMuted, fontSize: "0.65rem", fontFamily: `'${t.bodyFont}', sans-serif` }}>{s.name}</div>
                  <div style={{ color: t.textMuted, fontSize: "0.6rem", fontFamily: "monospace" }}>{s.value}</div>
                </div>
              ))}
            </div>
            <p style={{ color: t.textMuted, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem", fontFamily: `'${t.bodyFont}', sans-serif` }}>Typography</p>
            <p style={{ color: t.textMuted, fontSize: "0.85rem", fontFamily: `'${t.bodyFont}', sans-serif` }}>
              Headings: <span style={{ color: t.text }}>Playfair Display</span> &nbsp;·&nbsp; Body: <span style={{ color: t.text }}>Source Sans 3</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
