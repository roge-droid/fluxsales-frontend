/** Venues slider — horizontal showcase of Fluxsales restaurants.
 *  Inspired by polotab.com's "Solo faltas tú" gallery.
 *  Each card uses <image-slot> so the user can drop real venue photos. */
function VenuesSlider({ lang }) {
  const t = window.COPY[lang].venues;
  const trackRef = React.useRef(null);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(onScroll);
    ro.observe(el);
    return () => { el.removeEventListener("scroll", onScroll); ro.disconnect(); };
  }, []);

  const nudge = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".venue-card");
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="venues">
      <div className="wrap venues-head">
        <div>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="display h2">{t.title}</h2>
          <p className="lead">{t.subtitle}</p>
        </div>
        <div className="venues-arrows">
          <button onClick={() => nudge(-1)} disabled={atStart} aria-label="prev">‹</button>
          <button onClick={() => nudge(1)} disabled={atEnd} aria-label="next">›</button>
        </div>
      </div>

      <div className="venues-track" ref={trackRef}>
        <div className="venues-pad-left" aria-hidden="true" />
        {t.items.map((v, i) => (
          <article className="venue-card" key={v.id}>
            <div
              className="venue-img"
              style={{
                width: "100%",
                aspectRatio: "9/16",
                borderRadius: 20,
                background: `linear-gradient(135deg, var(--green-wash) 0%, var(--cream-3) 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--serif)",
                fontSize: 28,
                color: "var(--green-ink)",
                letterSpacing: "-0.02em",
                fontVariationSettings: '"opsz" 144',
                boxShadow: "0 8px 28px rgba(31,81,66,.08)",
                overflow: "hidden",
              }}
            >
              {v.name.charAt(0)}
            </div>
            <div className="venue-meta">
              <div className="venue-name">{v.name}</div>
              {v.city && <div className="venue-city">{v.city}</div>}
            </div>
            {v.tag && <span className="venue-tag">{v.tag}</span>}
          </article>
        ))}
        <div className="venues-pad-right" aria-hidden="true" />
      </div>

      <div className="wrap venues-cta">
        <a className="btn btn-primary" href="#demo">{t.cta} <span className="arr">→</span></a>
        <span className="venues-count">{t.count}</span>
      </div>
    </section>
  );
}

window.VenuesSlider = VenuesSlider;
