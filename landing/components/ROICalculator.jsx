function ROICalculator({ lang }) {
  const t = window.COPY[lang].roi;
  const L = lang === "es";

  const [orders, setOrders] = React.useState(280);
  const [avg, setAvg] = React.useState(310);
  const [commission, setCommission] = React.useState(30);
  const [movePct, setMovePct] = React.useState(50);

  // Model
  const weeklyAppsRevenue = orders * avg;
  const annualAppsRevenue = weeklyAppsRevenue * 52;
  const currentCommissionAnnual = Math.round(annualAppsRevenue * (commission / 100));
  const annualSavings = Math.round(currentCommissionAnnual * (movePct / 100));
  const monthlySavings = Math.round(annualSavings / 12);
  const newDirectOrders = Math.round(orders * 52 * (movePct / 100));

  const fmt = (n) =>
    new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);
  const fmtN = (n) => new Intl.NumberFormat("es-MX").format(n);

  return (
    <div className="wrap roi-grid">
      <div className="roi-head">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2 className="display h2">{t.title}</h2>
        <p className="lead">{t.subtitle}</p>

        <div className="roi-controls">
          <div className="slider-row">
            <label>
              <span>{t.ordersWeek}</span>
              <span className="val">{fmtN(orders)}</span>
            </label>
            <input type="range" min="40" max="1500" step="10" value={orders} onChange={(e) => setOrders(+e.target.value)} />
          </div>
          <div className="slider-row">
            <label>
              <span>{t.avgTicket}</span>
              <span className="val">${fmtN(avg)}</span>
            </label>
            <input type="range" min="120" max="900" step="10" value={avg} onChange={(e) => setAvg(+e.target.value)} />
          </div>
          <div className="slider-row">
            <label>
              <span>{t.commission}</span>
              <span className="val">{commission}%</span>
            </label>
            <input type="range" min="18" max="35" step="1" value={commission} onChange={(e) => setCommission(+e.target.value)} />
          </div>
          <div className="slider-row">
            <label>
              <span>{t.movePct}</span>
              <span className="val">{movePct}%</span>
            </label>
            <input type="range" min="10" max="80" step="5" value={movePct} onChange={(e) => setMovePct(+e.target.value)} />
          </div>
        </div>

        {/* Real client case card */}
        <div className="roi-case">
          <img
            src="https://i.pravatar.cc/240?img=12"
            alt={t.caseName}
            style={{ width: 96, height: 96, borderRadius: 14, objectFit: "cover", flexShrink: 0 }}
          />
          <div className="roi-case-body">
            <div className="roi-case-label">{t.caseLabel}</div>
            <div className="roi-case-quote">"{t.caseQuote}"</div>
            <div className="roi-case-meta">
              <strong>{t.caseName}</strong> · {t.caseCity}
            </div>
            <div className="roi-case-stats">
              <div>
                <div className="v">{t.caseStat1}</div>
                <div className="k">{t.caseStat1L}</div>
              </div>
              <div>
                <div className="v">{t.caseStat2}</div>
                <div className="k">{t.caseStat2L}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="roi-result">
        {/* Current cost line */}
        <div className="roi-now">
          <div className="roi-now-row">
            <span className="k">{t.payingNow}</span>
            <span className="v strike">{fmt(currentCommissionAnnual)}<small>/{L ? "año" : "yr"}</small></span>
          </div>
        </div>

        <div className="roi-divider">
          <span>{L ? "CON FLUXSALES" : "WITH FLUXSALES"}</span>
        </div>

        {/* Hero savings */}
        <div className="roi-hero">
          <div className="divider-label">{t.saveYearly}</div>
          <div className="big">{fmt(annualSavings)}</div>
          <div className="roi-monthly">{fmt(monthlySavings)} {t.saveMonthly}</div>
        </div>

        {/* Comparison bar */}
        <div className="roi-bar">
          <div className="roi-bar-track">
            <div className="roi-bar-fill" style={{ width: `${Math.min(100, movePct)}%` }} />
            <div className="roi-bar-labels">
              <span style={{ color: "var(--cream)" }}>{movePct}% {L ? "directo" : "direct"}</span>
              <span style={{ color: "var(--ink-soft)" }}>{100 - movePct}% {L ? "vía apps" : "via apps"}</span>
            </div>
          </div>
        </div>

        <div className="roi-stats">
          <div className="roi-stat">
            <div className="k">{t.directOrders}</div>
            <div className="v">{fmtN(newDirectOrders)}</div>
          </div>
          <div className="roi-stat">
            <div className="k">{L ? "Comisión Fluxsales" : "Fluxsales fee"}</div>
            <div className="v" style={{ color: "var(--green-ink)" }}>0%</div>
          </div>
        </div>

        <p className="roi-note">{t.note}</p>

        <a href="/demo" className="btn btn-primary" style={{ marginTop: 18, alignSelf: "flex-start" }}>
          {t.cta} <span className="arr">→</span>
        </a>
      </div>
    </div>
  );
}

window.ROICalculator = ROICalculator;
