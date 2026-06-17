function Testimonials({ lang }) {
  const t = window.COPY[lang].testimonials;
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % t.items.length), 6500);
    return () => clearInterval(id);
  }, [t.items.length]);
  const go = (d) => setI((x) => (x + d + t.items.length) % t.items.length);

  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="testimonials-head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="display h2" style={{ marginTop: 16 }}>{t.title}</h2>
          {t.caseLink && (
            <a className="testimonials-case-link" href={t.caseLink.href}>
              {t.caseLink.label} <span className="arr">→</span>
            </a>
          )}
        </div>
        <div className="carousel">
          <div className="carousel-track" style={{ transform: `translateX(-${i * 100}%)` }}>
            {t.items.map((it, idx) => (
              <div className="t-card" key={idx}>
                <blockquote>{it.quote}</blockquote>
                <div>
                  <div className="t-meta">
                    <img
                      className="t-photo"
                      src={it.photo || ("assets/testimonial-" + idx + ".webp")}
                      alt={it.name}
                      style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                    />
                    <div>
                      <div className="nm">{it.name}</div>
                      <div className="rl">{it.role}{it.city ? ` · ${it.city}` : ""}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="t-nav">
          <div className="t-dots">
            {t.items.map((_, idx) => (
              <span key={idx} className={idx === i ? "on" : ""} onClick={() => setI(idx)} />
            ))}
          </div>
          <div className="t-arrows">
            <button onClick={() => go(-1)} aria-label="prev">‹</button>
            <button onClick={() => go(1)} aria-label="next">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing({ lang }) {
  const t = window.COPY[lang].pricing;
  const fmt = (n) =>
    new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);

  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="pricing-head">
          <span className="eyebrow" style={{ display: "inline-flex", marginBottom: 0 }}>{t.eyebrow}</span>
          <h2 className="display h2">{t.title}</h2>
          <p className="lead">{t.subtitle}</p>
          {t.valueAnchor && <p className="pricing-value-anchor">{t.valueAnchor}</p>}
        </div>
        <div className="plans plans-4">
          {t.plans.map((p, i) => (
            <div key={i} className={"plan" + (p.popular ? " pop" : "")}>
              {p.badge && <div className="plan-pop-badge">{p.badge}</div>}
              <div className="plan-name">{p.name}</div>
              <div className="plan-tag">{p.tag}</div>
              <div className="plan-price">
                {fmt(p.price)}<small>{t.perMonth}</small>
              </div>
              <div className="plan-price-meta">
                <div className="plan-fee">{p.fee}</div>
                <div className="plan-taxes">{p.taxes}</div>
              </div>
              {p.features && (
                <ul className="plan-feats">
                  {p.features.map((f, fi) => <li key={fi}>{f}</li>)}
                </ul>
              )}
              <a href="/demo" className={p.popular ? "btn btn-green" : "btn btn-secondary"}>
                {p.cta} <span className="arr">→</span>
              </a>
            </div>
          ))}
        </div>

        {t.multiNote && <div className="plans-multi-note">{t.multiNote}</div>}

        {(t.guarantee || t.scarcity) && (
          <div className="pricing-assurance">
            {t.guarantee && (
              <div className="assurance-guarantee">
                <span className="assurance-badge">
                  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M12 2l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V5l7-3z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M8.5 12l2.5 2.5 4.5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {t.guarantee.badge}
                </span>
                <span className="assurance-text">{t.guarantee.text}</span>
              </div>
            )}
            {t.scarcity && <div className="assurance-scarcity">{t.scarcity}</div>}
          </div>
        )}

        <div className="included">
          <h3 className="included-title">{t.includedTitle}</h3>
          <div className="included-grid">
            {t.included.map((it, i) => (
              <div className="included-item" key={i}>
                <span className="ii-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14"><path d="M5 12l4 4 10-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <div className="ii-t">{it.t}</div>
                  <div className="ii-d">{it.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ lang }) {
  const t = window.COPY[lang].faq;
  const [open, setOpen] = React.useState(0);
  return (
    <section className="faq" id="faq">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="display h2">{t.title}</h2>
        </div>
        <div className="faq-list">
          {t.items.map((it, i) => (
            <div key={i} className={"faq-item" + (open === i ? " open" : "")}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="plus">+</span>
              </button>
              <div className="faq-a">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Testimonials, Pricing, FAQ });
