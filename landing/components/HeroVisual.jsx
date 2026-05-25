/** Hero visual — animated product dashboard cards */
function HeroVisual({ lang }) {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 2200);
    return () => clearInterval(i);
  }, []);

  const sales = [55, 38, 72, 48, 60, 80, 66, 88, 74, 92, 68, 96];
  const t = window.COPY[lang];

  return (
    <div className="hero-visual">
      <div className="hv-grid" />

      {/* Main dashboard card */}
      <div
        className="hv-card"
        style={{
          left: "6%",
          top: "8%",
          width: "62%",
          animation: "floatA 6s ease-in-out infinite",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div>
            <div className="lbl">{lang === "es" ? "Ventas · Esta semana" : "Sales · This week"}</div>
            <div className="big">$184,320 <span style={{ fontSize: 14, color: "var(--green-ink)", letterSpacing: 0 }}>+38%</span></div>
          </div>
          <div
            style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "var(--green-wash)", color: "var(--green-ink)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".05em",
              animation: "pulseGreen 2s infinite",
            }}
          >
            LIVE
          </div>
        </div>
        <div className="sparkline">
          {sales.map((v, i) => (
            <i key={i} style={{ "--h": `${v}%` }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-muted)" }}>
          <span>LUN</span><span>MAR</span><span>MIÉ</span><span>JUE</span><span>VIE</span><span>SÁB</span><span>DOM</span>
        </div>
      </div>

      {/* WhatsApp conversation card */}
      <div
        className="hv-card"
        style={{
          left: "36%",
          bottom: "8%",
          width: "60%",
          animation: "floatB 7s ease-in-out infinite",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--green)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green-deep)", fontSize: 12, fontFamily: "var(--mono)" }}>CM</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500 }}>Bora Bora Pizzas · WhatsApp</div>
            <div style={{ fontSize: 10, color: "var(--green-ink)", fontFamily: "var(--mono)" }}>● {lang === "es" ? "AUTOMÁTICO" : "AUTOMATED"}</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div className="msg out">
            {lang === "es"
              ? "Paulina, feliz cumpleaños 🎉 Tu postre de la casa está esperándote. Pide directo con 20% off este fin."
              : "Paulina, happy birthday 🎉 Your house dessert is waiting. Order direct with 20% off this weekend."}
          </div>
          <div className="msg">{lang === "es" ? "¡Gracias! Voy a pedir hoy mismo 🙌" : "Thank you! Ordering today 🙌"}</div>
        </div>
      </div>

      {/* Floating KPI chip */}
      <div
        className="hv-card"
        style={{
          right: "6%",
          top: "8%",
          width: "30%",
          padding: "14px 14px",
          animation: "floatA 5.5s ease-in-out infinite",
        }}
      >
        <div className="lbl">{lang === "es" ? "Recompra" : "Repeat rate"}</div>
        <div className="big" style={{ color: "var(--green-ink)" }}>3.2×</div>
        <div style={{ fontSize: 11, color: "var(--ink-muted)", marginTop: 2 }}>
          {lang === "es" ? "vs. antes de Fluxsales" : "vs. pre-Fluxsales"}
        </div>
      </div>
    </div>
  );
}

window.HeroVisual = HeroVisual;
