/** HowItWorks — alternating rows of step + visual mockup.
 *  Mirrors owner.com/how-owner-works layout: 4 steps, each a big row
 *  with copy on one side and a UI mockup illustration on the other.
 *  Mockups are illustrative — not real screenshots — so the page reads
 *  as "complete" without faking product screens. */

function HiwSearchArt() {
  return (
    <div className="hiw-art hiw-art-search">
      <div className="hiw-search-bar">
        <span className="hiw-search-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7"/>
            <path d="M20 20l-3.5-3.5"/>
          </svg>
        </span>
        <span className="hiw-search-q">pizza cerca de mí</span>
        <span className="hiw-search-mic" aria-hidden="true">●</span>
      </div>
      <div className="hiw-search-tag">Mejores resultados — Celaya</div>
      <div className="hiw-search-card top">
        <div className="hsc-row">
          <div className="hsc-logo">
            <svg viewBox="0 0 240 240" width="22" height="22"><g fill="currentColor"><rect x="54" y="40" width="50" height="172" rx="6"/><rect x="54" y="40" width="150" height="46" rx="6"/><rect x="54" y="108" width="98" height="38" rx="6"/><path d="M 148 94 Q 152 92 158 96 L 198 124 Q 202 128 198 132 L 158 160 Q 152 164 148 162 L 148 94 Z"/></g></svg>
          </div>
          <div className="hsc-meta">
            <div className="hsc-title">Bora Bora Pizzas</div>
            <div className="hsc-sub">
              <span className="hsc-stars">★★★★★</span>
              <span className="hsc-rating">4.9 (1,247)</span>
              <span className="hsc-sep">·</span>
              <span className="hsc-open">Abierto · cierra 11pm</span>
            </div>
          </div>
        </div>
        <div className="hsc-actions">
          <button className="hsc-btn primary">Ordenar en línea</button>
          <button className="hsc-btn">Llamar</button>
          <button className="hsc-btn">Cómo llegar</button>
        </div>
      </div>
      <div className="hiw-search-rank">
        <span className="hsr-pos">#1</span>
        <span className="hsr-label">en tu zona</span>
      </div>
    </div>
  );
}

function HiwMenuArt() {
  const items = [
    { name: "Pizza Hawaiana familiar", price: "$289", img: "linear-gradient(135deg,#e8b86b,#c45a2a)" },
    { name: "Pizza Pepperoni mediana",  price: "$219", img: "linear-gradient(135deg,#d97757,#9b3a1f)" },
    { name: "Alitas BBQ — 12 pzs",      price: "$179", img: "linear-gradient(135deg,#c4a87a,#7a5832)" },
  ];
  return (
    <div className="hiw-art hiw-art-menu">
      <div className="hiw-menu-head">
        <div className="hmh-tabs">
          <span className="hmh-tab on">Más populares</span>
          <span className="hmh-tab">Pizzas</span>
          <span className="hmh-tab">Alitas</span>
          <span className="hmh-tab">Bebidas</span>
        </div>
      </div>
      <div className="hiw-menu-items">
        {items.map((it, i) => (
          <div className="hmi" key={i}>
            <div className="hmi-img" style={{ background: it.img }} />
            <div className="hmi-meta">
              <div className="hmi-name">{it.name}</div>
              <div className="hmi-price">{it.price}</div>
            </div>
            <button className="hmi-add">+</button>
          </div>
        ))}
      </div>
      <div className="hiw-menu-cart">
        <span className="hmc-count">3 artículos</span>
        <span className="hmc-total">$687</span>
        <button className="hmc-cta">Pagar <span>→</span></button>
      </div>
    </div>
  );
}

function HiwAppArt() {
  return (
    <div className="hiw-art hiw-art-app">
      <div className="hiw-phone">
        <div className="hiw-phone-notch" />
        <div className="hiw-phone-screen">
          <div className="hps-status">
            <span>9:41</span>
            <span className="hps-icons">●●●●</span>
          </div>
          <div className="hps-header">
            <div className="hps-hello">Hola, Ricardo</div>
            <div className="hps-greet">¡Bienvenido de vuelta!</div>
          </div>
          <div className="hps-rewards">
            <div className="hpr-row">
              <span className="hpr-label">Recompensas</span>
              <span className="hpr-points">340 / 500 pts</span>
            </div>
            <div className="hpr-bar"><span style={{ width: "68%" }} /></div>
            <div className="hpr-foot">Te faltan 160 pts para una pizza gratis</div>
          </div>
          <div className="hps-section">Vuelve a pedir</div>
          <div className="hps-reorder">
            <div className="hpro">
              <div className="hpro-img" style={{ background: "linear-gradient(135deg,#d97757,#9b3a1f)" }} />
              <div>
                <div className="hpro-name">Pepperoni mediana</div>
                <div className="hpro-meta">Pediste hace 3 días</div>
              </div>
              <button className="hpro-cta">Repetir</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hiw-app-badge">
        <div className="hab-stars">★★★★★</div>
        <div className="hab-rating">4.9 en App Store</div>
      </div>
    </div>
  );
}

function HiwAutomationArt() {
  return (
    <div className="hiw-art hiw-art-auto">
      <div className="hiw-auto-name">
        <span className="han-dot" /> Automatización · Cumpleaños
        <span className="han-status">Activa</span>
      </div>
      <div className="hiw-auto-flow">
        <div className="haf-node trigger">
          <span className="hafn-label">Disparador</span>
          <span className="hafn-title">Cumpleaños del cliente</span>
        </div>
        <div className="haf-edge"><span /></div>
        <div className="haf-node">
          <span className="hafn-label">Espera</span>
          <span className="hafn-title">3 días antes</span>
        </div>
        <div className="haf-edge"><span /></div>
        <div className="haf-node action">
          <span className="hafn-label">Acción · WhatsApp</span>
          <span className="hafn-title">"¡Feliz cumple, Ana! 🎂 Te invitamos un postre."</span>
        </div>
      </div>
      <div className="hiw-auto-stats">
        <div className="has-stat">
          <div className="has-val">68%</div>
          <div className="has-lbl">Tasa de apertura</div>
        </div>
        <div className="has-stat">
          <div className="has-val">$24,800</div>
          <div className="has-lbl">Ventas este mes</div>
        </div>
      </div>
    </div>
  );
}

function HiwArt({ kind }) {
  if (kind === "search")     return <HiwSearchArt />;
  if (kind === "menu")       return <HiwMenuArt />;
  if (kind === "app")        return <HiwAppArt />;
  if (kind === "automation") return <HiwAutomationArt />;
  return null;
}

function HowItWorks({ lang }) {
  const t = window.COPY[lang].howItWorks;
  return (
    <section className="how" id="how">
      <div className="wrap">
        <div className="how-head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="display h2">{t.title}</h2>
          {t.subtitle && <p className="lead">{t.subtitle}</p>}
        </div>
        <div className="hiw-rows">
          {t.steps.map((s, i) => (
            <div className={"hiw-row" + (i % 2 === 1 ? " reverse" : "")} key={i}>
              <div className="hiw-text">
                <div className="hiw-n">{s.n}.</div>
                <h3 className="hiw-title">{s.title}</h3>
                <p className="hiw-body">{s.body}</p>
                {s.link && <a href="#product" className="hiw-link">{s.link} <span className="arr">→</span></a>}
              </div>
              <div className="hiw-art-wrap">
                <HiwArt kind={s.art} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.HowItWorks = HowItWorks;
