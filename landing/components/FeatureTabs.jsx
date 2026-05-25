function FeatureTabs({ lang }) {
  const t = window.COPY[lang].features;
  const [idx, setIdx] = React.useState(0);
  const tab = t.tabs[idx];

  return (
    <>
      <div className="tabs" role="tablist">
        {t.tabs.map((tb, i) => (
          <button
            key={tb.key}
            role="tab"
            aria-selected={i === idx}
            className={i === idx ? "on" : ""}
            onClick={() => setIdx(i)}
          >
            {tb.label}
          </button>
        ))}
      </div>
      <div className="tab-panel" key={tab.key}>
        <div className="pbody">
          <span className="divider-label">{String(idx + 1).padStart(2, "0")} / {String(t.tabs.length).padStart(2, "0")}</span>
          <h3 className="display">{tab.headline}</h3>
          <p>{tab.body}</p>
          <ul>
            {tab.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
        <FeaturePreview key={tab.key} tab={tab.key} lang={lang} />
      </div>
    </>
  );
}

function FeaturePreview({ tab, lang }) {
  if (tab === "sitio") return <SitioPreview lang={lang} />;
  if (tab === "pedidos") return <PedidosPreview lang={lang} />;
  if (tab === "lealtad") return <LealtadPreview lang={lang} />;
  return <MarketingPreview lang={lang} />;
}

/* ——— Per-tab previews ——— */

function MarketingPreview({ lang }) {
  const L = lang === "es";
  return (
    <div className="feature-preview" style={{ padding: 24 }}>
      <div style={{ background: "var(--card)", border: "1px solid var(--rule)", borderRadius: 12, padding: 16, height: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
            {L ? "Borrador de campaña · IA" : "Campaign draft · AI"}
          </span>
          <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--green-ink)" }}>● {L ? "LISTA" : "READY"}</span>
        </div>
        <div style={{ fontFamily: "var(--serif)", fontSize: 22, letterSpacing: "-0.02em", color: "var(--ink)", fontVariationSettings: "\"opsz\" 144" }}>
          {L ? "Martes 2x1 en Bora Bora Pizzas" : "2-for-1 Tuesday at Bora Bora Pizzas"}
        </div>
        <div style={{ fontSize: 13, color: "var(--ink-muted)", lineHeight: 1.5 }}>
          {L
            ? "Hola {nombre}, este martes 2x1 en pizzas grandes, de 7 a 10 pm. Pide con un clic."
            : "Hi {name}, 2-for-1 on large pizzas this Tuesday, 7–10pm. Order in one click."}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" }}>
          {[
            L ? "WhatsApp · 1,240" : "WhatsApp · 1,240",
            L ? "Email · 3,120" : "Email · 3,120",
            L ? "SMS · 820" : "SMS · 820",
          ].map((x, i) => (
            <span key={i} style={{ fontSize: 11, fontFamily: "var(--mono)", background: "var(--green-wash)", color: "var(--green-ink)", padding: "4px 10px", borderRadius: 99 }}>{x}</span>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, paddingTop: 10, borderTop: "1px solid var(--rule)" }}>
          <div>
            <div style={{ fontSize: 11, color: "var(--ink-muted)", fontFamily: "var(--mono)" }}>{L ? "APERTURA" : "OPEN RATE"}</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--ink)", fontVariationSettings: "\"opsz\" 144" }}>62%</div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: "var(--ink-muted)", fontFamily: "var(--mono)" }}>{L ? "PEDIDOS" : "ORDERS"}</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--green-ink)", fontVariationSettings: "\"opsz\" 144" }}>+148</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SitioPreview({ lang }) {
  const L = lang === "es";
  return (
    <div className="feature-preview" style={{ padding: 24 }}>
      <div style={{ background: "var(--card)", border: "1px solid var(--rule)", borderRadius: 12, padding: 18, height: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Google search header */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 12, borderBottom: "1px solid var(--rule)" }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#ecf6f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>⌕</div>
          <div style={{ flex: 1, fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-soft)" }}>
            {L ? "pizza cerca de mí" : "pizza near me"}
          </div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-muted)", letterSpacing: ".08em" }}>GOOGLE</div>
        </div>

        {/* #1 result — Open Pizza */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4, position: "relative" }}>
          <div style={{ position: "absolute", top: -4, right: -4, fontFamily: "var(--mono)", fontSize: 10, background: "var(--green)", color: "var(--green-deep)", padding: "3px 8px", borderRadius: 99, letterSpacing: ".06em" }}>#1 {L ? "ORGÁNICO" : "ORGANIC"}</div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-muted)" }}>openpizza.mx</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 18, color: "#1a0dab", letterSpacing: "-0.01em", fontVariationSettings: "\"opsz\" 144" }}>
            {L ? "Open Pizza · Pizzas calientes recién hechas" : "Open Pizza · Hot fresh pizzas, ready now"}
          </div>
          <div style={{ fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.45 }}>
            {L
              ? "Pide en línea, recoge en 20 min o envío a domicilio. Lunes a domingo, 1pm – 11pm."
              : "Order online, ready in 20 min or delivery. Mon–Sun, 1pm – 11pm."}
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 4, fontSize: 11, color: "var(--ink-muted)", fontFamily: "var(--mono)" }}>
            <span style={{ color: "#e8a317" }}>★★★★★</span>
            <span>4.9 · 312 {L ? "reseñas" : "reviews"}</span>
          </div>
        </div>

        {/* Map / ranking chip */}
        <div style={{ marginTop: "auto", padding: 12, background: "var(--green-100)", borderRadius: 10, border: "1px solid var(--green-wash)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--green-ink)", letterSpacing: ".08em" }}>{L ? "POSICIÓN EN GOOGLE · 30 DÍAS" : "GOOGLE RANK · LAST 30 DAYS"}</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--green-ink)" }}>↑ 8 → 1</div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 28 }}>
            {[8, 7, 6, 6, 5, 4, 4, 3, 3, 2, 2, 1].map((r, i) => (
              <div key={i} style={{ flex: 1, height: `${(9 - r) * 11}%`, background: i === 11 ? "var(--green)" : "var(--green-wash)", borderRadius: 2 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReservasPreview({ lang }) {
  const L = lang === "es";
  const slots = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];
  const [sel, setSel] = React.useState(2);
  return (
    <div className="feature-preview" style={{ padding: 24 }}>
      <div style={{ background: "var(--card)", border: "1px solid var(--rule)", borderRadius: 12, padding: 18, height: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
            {L ? "Reserva directa · Cosi Fan Tutte" : "Direct booking · Cosi Fan Tutte"}
          </div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--ink)", marginTop: 4, fontVariationSettings: "\"opsz\" 144" }}>
            {L ? "Sábado 22 de marzo · 4 personas" : "Sat March 22 · party of 4"}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {slots.map((s, i) => (
            <button
              key={s}
              onClick={() => setSel(i)}
              style={{
                padding: "12px 0", fontSize: 13,
                borderRadius: 10,
                border: "1px solid " + (i === sel ? "var(--ink)" : "var(--rule)"),
                background: i === sel ? "var(--ink)" : "var(--card)",
                color: i === sel ? "var(--cream)" : "var(--ink)",
                fontFamily: "var(--mono)",
                letterSpacing: ".04em",
              }}
            >
              {s}
            </button>
          ))}
        </div>
        <div style={{ padding: 12, background: "var(--green-100)", borderRadius: 10, border: "1px solid var(--green-wash)", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)" }} />
          <div style={{ fontSize: 12, color: "var(--green-ink)" }}>
            {L ? "Confirmación por WhatsApp al instante" : "Instant WhatsApp confirmation"}
          </div>
        </div>
        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid var(--rule)" }}>
          <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>{L ? "Comisión" : "Fee"}</div>
          <div style={{ fontSize: 12, color: "var(--green-ink)", fontFamily: "var(--mono)" }}>$0 MXN · 0%</div>
        </div>
      </div>
    </div>
  );
}

function LealtadPreview({ lang }) {
  const L = lang === "es";
  return (
    <div className="feature-preview" style={{ padding: 24 }}>
      <div style={{ background: "linear-gradient(140deg, #0d2c20 0%, #1f5142 100%)", borderRadius: 14, padding: 22, height: "72%", color: "var(--cream)", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "var(--shadow)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--green)", letterSpacing: ".1em" }}>DOLCE BISQUET · {L ? "LEALTAD" : "LOYALTY"}</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22, marginTop: 6, fontVariationSettings: "\"opsz\" 144" }}>María Fernanda</div>
          </div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "rgba(247,242,233,.6)" }}>#00214</div>
        </div>
        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "rgba(247,242,233,.6)", letterSpacing: ".1em" }}>{L ? "PUNTOS" : "POINTS"}</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 52, color: "var(--green)", letterSpacing: "-0.03em", lineHeight: 1, fontVariationSettings: "\"opsz\" 144" }}>1,240</div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {[1,1,1,1,0,0,0,0,0,0].map((v, i) => (
            <div key={i} style={{ flex: 1, height: 4, borderRadius: 99, background: v ? "var(--green)" : "rgba(247,242,233,.2)" }} />
          ))}
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
        <div style={{ flex: 1, background: "var(--card)", border: "1px solid var(--rule)", borderRadius: 10, padding: 10 }}>
          <div style={{ fontSize: 10, fontFamily: "var(--mono)", color: "var(--ink-muted)" }}>{L ? "PRÓX. RECOMPENSA" : "NEXT REWARD"}</div>
          <div style={{ fontSize: 13, color: "var(--ink)", marginTop: 2 }}>{L ? "Postre de la casa" : "House dessert"}</div>
        </div>
        <div style={{ flex: 1, background: "var(--card)", border: "1px solid var(--rule)", borderRadius: 10, padding: 10 }}>
          <div style={{ fontSize: 10, fontFamily: "var(--mono)", color: "var(--ink-muted)" }}>{L ? "CUMPLEAÑOS" : "BIRTHDAY"}</div>
          <div style={{ fontSize: 13, color: "var(--green-ink)", marginTop: 2 }}>14 {L ? "mar" : "Mar"} · {L ? "regalo listo" : "gift ready"}</div>
        </div>
      </div>
    </div>
  );
}

function PedidosPreview({ lang }) {
  const L = lang === "es";
  const items = [
    { n: L ? "Smash burger doble" : "Double smash burger", p: 189 },
    { n: L ? "Papas con queso" : "Cheese fries", p: 95 },
    { n: L ? "Malteada de fresa" : "Strawberry shake", p: 78 },
  ];
  const total = items.reduce((a, b) => a + b.p, 0);
  return (
    <div className="feature-preview" style={{ padding: 24 }}>
      <div style={{ background: "var(--card)", border: "1px solid var(--rule)", borderRadius: 12, padding: 18, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink-muted)" }}>
            {L ? "Pedido directo · Brooklyn Burgers" : "Direct order · Brooklyn Burgers"}
          </div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--green-ink)" }}>● {L ? "EN COCINA" : "IN KITCHEN"}</div>
        </div>
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
          {items.map((it, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 10, borderBottom: "1px solid var(--rule)" }}>
              <span style={{ fontSize: 13, color: "var(--ink)" }}>{it.n}</span>
              <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-soft)" }}>${it.p}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", paddingTop: 14, display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 11, fontFamily: "var(--mono)", color: "var(--ink-muted)" }}>{L ? "COMISIÓN APP" : "APP FEE"}</div>
            <div style={{ fontSize: 14, color: "var(--ink-muted)", textDecoration: "line-through", fontFamily: "var(--mono)" }}>$99.90</div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontFamily: "var(--mono)", color: "var(--green-ink)" }}>{L ? "CON FLUXSALES" : "WITH FLUXSALES"}</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 28, color: "var(--green-ink)", fontVariationSettings: "\"opsz\" 144" }}>$0</div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontFamily: "var(--mono)", color: "var(--ink-muted)" }}>TOTAL</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 28, color: "var(--ink)", fontVariationSettings: "\"opsz\" 144" }}>${total}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { FeatureTabs, FeaturePreview });
