/* ================================================================
   ProposalDoc — shared React components for the FluxSales proposal
   ================================================================
   Loaded via <script type="text/babel" src="../proposal/components.js">
   by both /proposal/index.html (AE form) and /p/index.html (client).

   NO ES modules. Everything on window.ProposalDoc.
   ================================================================ */

(function () {
  "use strict";

  /* ── Helpers ── */
  var fmtMXN = function (n, opts) {
    opts = opts || {};
    if (opts.short && Math.abs(n) >= 1000000) {
      return "$" + (n / 1000000).toFixed(2).replace(/\.?0+$/, "") + "M";
    }
    if (opts.short && Math.abs(n) >= 1000) {
      return "$" + Math.round(n / 1000) + "k";
    }
    return "$" + Math.round(n).toLocaleString("es-MX");
  };

  var fmtNum = function (n) {
    return Math.round(n).toLocaleString("es-MX");
  };

  var fmtPct = function (n) {
    return Math.round(n) + "%";
  };

  /* ── Style injection ── */
  var STYLES_INJECTED = false;
  var PD_STYLES = "\n\
/* ========== ProposalDoc component styles (pd- prefix) ========== */\n\
\n\
/* —— General section —— */\n\
.pd-section {\n\
  padding: 100px 0;\n\
  position: relative;\n\
}\n\
.pd-section.pd-cream { background: var(--cream-2, #fafaf7); }\n\
.pd-section.pd-dark {\n\
  background: var(--ink, #0e0d0c);\n\
  color: var(--cream, #fff);\n\
}\n\
\n\
/* —— Section label (eyebrow + rule) —— */\n\
.pd-sec-lbl {\n\
  display: flex; align-items: baseline; gap: 14px;\n\
  margin-bottom: 20px;\n\
}\n\
.pd-sec-lbl .pd-num {\n\
  font-family: var(--mono); font-size: 11px; letter-spacing: .1em;\n\
  color: var(--green-ink); text-transform: uppercase;\n\
  white-space: nowrap;\n\
}\n\
.pd-sec-lbl .pd-rule-line { flex: 1; height: 1px; background: var(--rule); }\n\
.pd-dark .pd-sec-lbl .pd-num { color: var(--green); }\n\
.pd-dark .pd-sec-lbl .pd-rule-line { background: rgba(247,242,233,.2); }\n\
\n\
/* —— Hero —— */\n\
.pd-hero { padding: 80px 0 64px; }\n\
.pd-hero-icon {\n\
  width: 56px; height: 56px; margin-bottom: 28px;\n\
  color: var(--green);\n\
}\n\
.pd-hero-icon svg { width: 100%; height: 100%; display: block; }\n\
.pd-hero h1 {\n\
  font-family: var(--serif);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 30;\n\
  font-size: clamp(40px, 5.8vw, 80px);\n\
  line-height: .98; letter-spacing: -0.028em;\n\
  color: var(--ink-soft); font-weight: 400;\n\
  margin: 0 0 28px; max-width: 20ch;\n\
}\n\
.pd-hero h1 em {\n\
  font-style: italic; color: var(--green-ink);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 80;\n\
}\n\
.pd-hero-sub {\n\
  font-size: clamp(17px, 1.3vw, 21px);\n\
  color: var(--ink-muted); max-width: 58ch; line-height: 1.55;\n\
  margin: 0 0 32px;\n\
}\n\
.pd-hero-tags {\n\
  font-family: var(--mono); font-size: 13px;\n\
  color: var(--green-ink); letter-spacing: .02em;\n\
  margin: 0 0 36px;\n\
}\n\
.pd-hero-callout {\n\
  background: var(--green-100, #ecf6f0);\n\
  border: 1px solid var(--green-wash, #d5ebe0);\n\
  border-radius: var(--radius, 14px);\n\
  padding: 20px 24px;\n\
  font-size: 15px; line-height: 1.55;\n\
  color: var(--green-deep, #1f5142);\n\
  max-width: 60ch;\n\
}\n\
.pd-hero-callout strong {\n\
  font-weight: 600; display: block; margin-bottom: 4px;\n\
}\n\
\n\
/* —— Problem section —— */\n\
.pd-problem { background: var(--cream-2, #fafaf7); }\n\
.pd-problem-head { max-width: 780px; margin-bottom: 48px; }\n\
.pd-problem-head h2 {\n\
  font-family: var(--serif);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 30;\n\
  font-size: clamp(36px, 4.6vw, 64px);\n\
  line-height: 1.02; letter-spacing: -0.025em;\n\
  font-weight: 400; color: var(--ink-soft);\n\
  margin: 12px 0 16px;\n\
}\n\
.pd-problem-head .pd-lead {\n\
  font-size: clamp(17px, 1.3vw, 20px);\n\
  color: var(--ink-muted); max-width: 58ch; line-height: 1.55;\n\
}\n\
.pd-problem-grid {\n\
  display: grid; grid-template-columns: repeat(3, 1fr);\n\
  gap: 24px;\n\
}\n\
.pd-problem-card {\n\
  background: var(--card); border: 1px solid var(--rule);\n\
  border-radius: var(--radius-lg); padding: 32px 28px;\n\
  display: flex; flex-direction: column;\n\
}\n\
.pd-problem-card .pd-picon {\n\
  width: 44px; height: 44px; margin-bottom: 20px;\n\
  color: var(--ink-muted);\n\
}\n\
.pd-problem-card .pd-picon svg { width: 100%; height: 100%; }\n\
.pd-problem-card h4 {\n\
  font-family: var(--serif);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 30;\n\
  font-size: 22px; font-weight: 400; letter-spacing: -0.015em;\n\
  margin: 0 0 10px; color: var(--ink);\n\
}\n\
.pd-problem-card p {\n\
  font-size: 14px; color: var(--ink-muted); line-height: 1.55;\n\
  margin: 0 0 auto;\n\
}\n\
.pd-problem-stat {\n\
  margin-top: 20px;\n\
  padding-top: 16px;\n\
  border-top: 1px solid var(--rule);\n\
  display: flex; align-items: baseline; gap: 10px;\n\
}\n\
.pd-problem-stat .pd-big {\n\
  font-family: var(--serif);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 40;\n\
  font-size: 36px; line-height: 1;\n\
  color: var(--tomato, #ed4a35); letter-spacing: -0.02em;\n\
}\n\
.pd-problem-stat .pd-stat-label {\n\
  font-family: var(--mono); font-size: 11px; letter-spacing: .06em;\n\
  color: var(--ink-muted); text-transform: uppercase;\n\
}\n\
\n\
/* —— Solution section —— */\n\
.pd-solution-head { max-width: 780px; margin-bottom: 48px; }\n\
.pd-solution-head h2 {\n\
  font-family: var(--serif);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 30;\n\
  font-size: clamp(36px, 4.6vw, 64px);\n\
  line-height: 1.02; letter-spacing: -0.025em;\n\
  font-weight: 400; color: var(--ink-soft);\n\
  margin: 12px 0 16px;\n\
}\n\
.pd-solution-grid {\n\
  display: grid;\n\
  grid-template-columns: repeat(3, 1fr);\n\
  gap: 20px;\n\
}\n\
.pd-solution-card {\n\
  background: var(--card); border: 1px solid var(--rule);\n\
  border-radius: var(--radius-lg); padding: 28px 24px;\n\
}\n\
.pd-solution-card .pd-sicon {\n\
  width: 40px; height: 40px; margin-bottom: 16px;\n\
  color: var(--green);\n\
}\n\
.pd-solution-card .pd-sicon svg { width: 100%; height: 100%; }\n\
.pd-solution-card h4 {\n\
  font-family: var(--serif);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 30;\n\
  font-size: 19px; font-weight: 400; letter-spacing: -0.01em;\n\
  margin: 0 0 8px; color: var(--ink);\n\
}\n\
.pd-solution-card p {\n\
  font-size: 14px; color: var(--ink-muted); line-height: 1.55; margin: 0;\n\
}\n\
\n\
/* —— Assumptions grid —— */\n\
.pd-assumptions { background: var(--cream-2, #fafaf7); }\n\
.pd-assumptions-head { max-width: 780px; margin-bottom: 40px; }\n\
.pd-assumptions-head h2 {\n\
  font-family: var(--serif);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 30;\n\
  font-size: clamp(32px, 3.8vw, 52px);\n\
  line-height: 1.02; letter-spacing: -0.025em;\n\
  font-weight: 400; color: var(--ink-soft);\n\
  margin: 12px 0 0;\n\
}\n\
.pd-metrics-row {\n\
  display: grid; grid-template-columns: repeat(4, 1fr);\n\
  gap: 16px; margin-bottom: 16px;\n\
}\n\
.pd-metric-card {\n\
  background: var(--card); border: 1px solid var(--rule);\n\
  border-radius: var(--radius, 14px); padding: 24px 20px;\n\
}\n\
.pd-metric-card .pd-mc-label {\n\
  font-family: var(--mono); font-size: 10px; letter-spacing: .1em;\n\
  text-transform: uppercase; color: var(--ink-muted);\n\
  margin-bottom: 10px;\n\
}\n\
.pd-metric-card .pd-mc-value {\n\
  font-family: var(--serif);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 30;\n\
  font-size: 28px; line-height: 1;\n\
  color: var(--ink); letter-spacing: -0.02em;\n\
}\n\
.pd-metric-card .pd-mc-unit {\n\
  font-family: var(--mono); font-size: 11px;\n\
  color: var(--ink-muted); margin-top: 6px; letter-spacing: .04em;\n\
}\n\
.pd-metric-card.pd-computed {\n\
  background: var(--ink); border-color: var(--ink);\n\
}\n\
.pd-metric-card.pd-computed .pd-mc-label { color: var(--green); }\n\
.pd-metric-card.pd-computed .pd-mc-value { color: var(--green); }\n\
.pd-metric-card.pd-computed .pd-mc-unit { color: rgba(247,242,233,.5); }\n\
.pd-metric-card .pd-mc-icon {\n\
  width: 32px; height: 32px; margin-bottom: 12px; color: var(--green);\n\
}\n\
.pd-metric-card .pd-mc-icon svg { width: 100%; height: 100%; }\n\
\n\
/* —— Growth projection —— */\n\
.pd-growth-head { max-width: 780px; margin-bottom: 40px; }\n\
.pd-growth-head h2 {\n\
  font-family: var(--serif);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 30;\n\
  font-size: clamp(32px, 3.8vw, 52px);\n\
  line-height: 1.02; letter-spacing: -0.025em;\n\
  font-weight: 400; color: var(--ink-soft);\n\
  margin: 12px 0 0;\n\
}\n\
.pd-growth-stats {\n\
  display: grid; grid-template-columns: repeat(3, 1fr);\n\
  gap: 24px; margin-bottom: 40px;\n\
}\n\
.pd-growth-stat {\n\
  padding: 24px 0;\n\
  border-top: 2px solid var(--green);\n\
}\n\
.pd-growth-stat .pd-gs-label {\n\
  font-family: var(--mono); font-size: 11px; letter-spacing: .08em;\n\
  text-transform: uppercase; color: var(--ink-muted); margin-bottom: 10px;\n\
}\n\
.pd-growth-stat .pd-gs-value {\n\
  font-family: var(--serif);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 30;\n\
  font-size: 36px; line-height: 1;\n\
  color: var(--ink); letter-spacing: -0.02em;\n\
}\n\
.pd-growth-stat .pd-gs-sub {\n\
  font-size: 13px; color: var(--ink-muted); margin-top: 6px;\n\
}\n\
.pd-chart-card {\n\
  background: var(--card); border: 1px solid var(--rule);\n\
  border-radius: var(--radius-lg); padding: 32px 36px;\n\
}\n\
.pd-chart-head {\n\
  display: flex; justify-content: space-between; align-items: baseline;\n\
  margin-bottom: 16px; flex-wrap: wrap; gap: 8px;\n\
}\n\
.pd-chart-head .pd-ch-label {\n\
  font-family: var(--mono); font-size: 11px; letter-spacing: .1em;\n\
  color: var(--ink-muted); text-transform: uppercase;\n\
}\n\
.pd-chart-head .pd-ch-peak {\n\
  font-family: var(--mono); font-size: 11px;\n\
  color: var(--green-ink); letter-spacing: .05em;\n\
}\n\
.pd-chart-svg {\n\
  width: 100%; height: 180px;\n\
}\n\
\n\
/* —— Comparison table —— */\n\
.pd-compare-head { max-width: 780px; margin-bottom: 48px; }\n\
.pd-compare-head h2 {\n\
  font-family: var(--serif);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 30;\n\
  font-size: clamp(36px, 4.6vw, 64px);\n\
  line-height: 1.02; letter-spacing: -0.025em;\n\
  font-weight: 400; color: var(--ink-soft);\n\
  margin: 0 0 16px;\n\
}\n\
.pd-compare-head .pd-lead {\n\
  font-size: clamp(17px, 1.3vw, 20px);\n\
  color: var(--ink-muted); max-width: 58ch; line-height: 1.55;\n\
}\n\
.pd-table-wrap {\n\
  background: var(--card); border: 1px solid var(--rule);\n\
  border-radius: var(--radius-lg); overflow: hidden;\n\
}\n\
.pd-table {\n\
  width: 100%; border-collapse: collapse;\n\
  font-size: 15px;\n\
}\n\
.pd-table thead th {\n\
  text-align: left;\n\
  font-family: var(--mono); font-size: 11px; letter-spacing: .1em;\n\
  text-transform: uppercase; color: var(--ink-muted);\n\
  padding: 18px 24px; font-weight: 500;\n\
  background: var(--cream-2, #fafaf7);\n\
  border-bottom: 1px solid var(--rule);\n\
}\n\
.pd-table thead th:first-child { padding-left: 28px; }\n\
.pd-table thead th:not(:first-child) { text-align: center; width: 160px; }\n\
.pd-table tbody td {\n\
  padding: 16px 24px;\n\
  border-bottom: 1px solid var(--rule);\n\
  color: var(--ink-soft);\n\
}\n\
.pd-table tbody td:first-child { padding-left: 28px; font-weight: 450; }\n\
.pd-table tbody td:not(:first-child) { text-align: center; }\n\
.pd-table tbody tr:last-child td { border-bottom: none; }\n\
.pd-check {\n\
  display: inline-flex; align-items: center; justify-content: center;\n\
  width: 28px; height: 28px; border-radius: 50%;\n\
  font-size: 14px; font-weight: 600;\n\
}\n\
.pd-check.pd-yes { background: var(--green-100, #ecf6f0); color: var(--green-ink); }\n\
.pd-check.pd-no { background: #fef2f0; color: var(--tomato, #ed4a35); }\n\
.pd-check.pd-partial {\n\
  background: #fffbe6; color: #b08800;\n\
  font-size: 11px; font-family: var(--mono); letter-spacing: .02em;\n\
  width: auto; border-radius: 99px; padding: 4px 12px;\n\
}\n\
\n\
/* —— Case study —— */\n\
.pd-case { background: var(--cream-2, #fafaf7); }\n\
.pd-case-head { max-width: 780px; margin-bottom: 48px; }\n\
.pd-case-head h2 {\n\
  font-family: var(--serif);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 30;\n\
  font-size: clamp(36px, 4.6vw, 64px);\n\
  line-height: 1.02; letter-spacing: -0.025em;\n\
  font-weight: 400; color: var(--ink-soft);\n\
  margin: 12px 0 16px;\n\
}\n\
.pd-case-head h2 em {\n\
  font-style: italic; color: var(--green-ink);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 80;\n\
}\n\
.pd-case-grid {\n\
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px;\n\
  margin-bottom: 36px;\n\
}\n\
.pd-case-card {\n\
  background: var(--card); border: 1px solid var(--rule);\n\
  border-radius: var(--radius-lg); padding: 32px 28px;\n\
}\n\
.pd-case-card.pd-before { border-left: 3px solid var(--tomato, #ed4a35); }\n\
.pd-case-card.pd-after { border-left: 3px solid var(--green); }\n\
.pd-case-card .pd-case-tag {\n\
  font-family: var(--mono); font-size: 11px; letter-spacing: .12em;\n\
  text-transform: uppercase; margin-bottom: 16px;\n\
}\n\
.pd-case-card.pd-before .pd-case-tag { color: var(--tomato, #ed4a35); }\n\
.pd-case-card.pd-after .pd-case-tag { color: var(--green-ink); }\n\
.pd-case-card p {\n\
  font-size: 15px; color: var(--ink-soft); line-height: 1.6; margin: 0 0 16px;\n\
}\n\
.pd-case-card p:last-child { margin-bottom: 0; }\n\
.pd-case-list {\n\
  list-style: none; margin: 0; padding: 0;\n\
}\n\
.pd-case-list li {\n\
  padding: 8px 0; font-size: 14px; color: var(--ink-muted);\n\
  display: flex; align-items: flex-start; gap: 10px;\n\
  line-height: 1.5;\n\
}\n\
.pd-case-list li::before {\n\
  content: \"\"; flex: none;\n\
  width: 6px; height: 6px; border-radius: 50%;\n\
  margin-top: 7px;\n\
}\n\
.pd-before .pd-case-list li::before { background: var(--tomato, #ed4a35); }\n\
.pd-after .pd-case-list li::before { background: var(--green); }\n\
.pd-case-link {\n\
  display: inline-flex; align-items: center; gap: 8px;\n\
  padding: 14px 24px;\n\
  background: var(--card); border: 1px solid var(--rule);\n\
  border-radius: 999px;\n\
  font-size: 14px; font-weight: 500; color: var(--green-ink);\n\
  transition: .2s;\n\
}\n\
.pd-case-link:hover {\n\
  background: var(--green-100, #ecf6f0);\n\
  border-color: var(--green-wash, #d5ebe0);\n\
}\n\
\n\
/* —— CTA section —— */\n\
.pd-cta {\n\
  background: var(--ink); color: var(--cream);\n\
  padding: 140px 0; text-align: center;\n\
}\n\
.pd-cta h2 {\n\
  font-family: var(--serif);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 40;\n\
  font-size: clamp(40px, 5.2vw, 72px);\n\
  line-height: 1.02; letter-spacing: -0.025em;\n\
  font-weight: 400; color: var(--cream);\n\
  margin: 0 auto 20px; max-width: 18ch;\n\
}\n\
.pd-cta h2 em {\n\
  font-style: italic; color: var(--green);\n\
  font-variation-settings: \"opsz\" 144, \"SOFT\" 80;\n\
}\n\
.pd-cta p {\n\
  color: rgba(247,242,233,.7); max-width: 54ch;\n\
  margin: 0 auto 36px; font-size: 17px; line-height: 1.55;\n\
}\n\
.pd-cta-btn {\n\
  display: inline-flex; align-items: center; gap: 8px;\n\
  padding: 16px 28px;\n\
  background: var(--green); color: var(--green-deep, #1f5142);\n\
  border-radius: 999px;\n\
  font-size: 16px; font-weight: 500;\n\
  text-decoration: none; transition: .2s;\n\
  border: none; cursor: pointer;\n\
  font-family: var(--sans);\n\
}\n\
.pd-cta-btn:hover {\n\
  background: var(--green-ink); color: var(--cream);\n\
  transform: translateY(-1px);\n\
}\n\
.pd-cta-ctx {\n\
  margin-top: 28px;\n\
  font-family: var(--mono); font-size: 11px; letter-spacing: .1em;\n\
  text-transform: uppercase; color: rgba(247,242,233,.45);\n\
}\n\
\n\
/* —— Responsive —— */\n\
@media (max-width: 1024px) {\n\
  .pd-problem-grid { grid-template-columns: 1fr; }\n\
  .pd-solution-grid { grid-template-columns: repeat(2, 1fr); }\n\
  .pd-metrics-row { grid-template-columns: repeat(2, 1fr); }\n\
  .pd-growth-stats { grid-template-columns: 1fr; }\n\
  .pd-case-grid { grid-template-columns: 1fr; }\n\
}\n\
@media (max-width: 768px) {\n\
  .pd-section { padding: 72px 0; }\n\
  .pd-hero { padding: 56px 0 48px; }\n\
  .pd-solution-grid { grid-template-columns: 1fr; }\n\
  .pd-metrics-row { grid-template-columns: 1fr; }\n\
  .pd-table-wrap { overflow-x: auto; }\n\
  .pd-table { min-width: 520px; }\n\
  .pd-cta { padding: 80px 0; }\n\
}\n\
";

  function injectStyles() {
    if (STYLES_INJECTED) return;
    STYLES_INJECTED = true;
    var tag = document.createElement("style");
    tag.setAttribute("data-pd", "proposal-doc");
    tag.textContent = PD_STYLES;
    document.head.appendChild(tag);
  }

  /* ── ProposalStyles component (also triggers injection via useEffect) ── */
  function ProposalStyles() {
    React.useEffect(function () { injectStyles(); }, []);
    return null;
  }

  /* =================================================================
     1. LogoMark
     ================================================================= */
  function LogoMark() {
    return React.createElement(
      "span",
      { className: "logo-mark", "aria-hidden": "true", style: { display: "inline-flex", width: 28, height: 28, color: "var(--green)", alignItems: "center", justifyContent: "center", flex: "none" } },
      React.createElement(
        "svg",
        { viewBox: "0 0 240 240", xmlns: "http://www.w3.org/2000/svg", style: { width: "100%", height: "100%", display: "block" } },
        React.createElement(
          "g",
          { fill: "currentColor" },
          React.createElement("rect", { x: "54", y: "40", width: "50", height: "172", rx: "6" }),
          React.createElement("rect", { x: "54", y: "40", width: "150", height: "46", rx: "6" }),
          React.createElement("rect", { x: "54", y: "108", width: "98", height: "38", rx: "6" }),
          React.createElement("path", { d: "M 148 94 Q 152 92 158 96 L 198 124 Q 202 128 198 132 L 158 160 Q 152 164 148 162 L 148 94 Z" })
        )
      )
    );
  }

  /* =================================================================
     2. Hero
     ================================================================= */
  function Hero(props) {
    var restaurantName = props.restaurantName || "Tu restaurante";
    var customMessage = props.customMessage;

    return React.createElement(
      "section",
      { className: "pd-hero" },
      React.createElement(
        "div",
        { className: "wrap" },
        /* Logo icon */
        React.createElement(
          "div",
          { className: "pd-hero-icon" },
          React.createElement(
            "svg",
            { viewBox: "0 0 240 240", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement(
              "g",
              { fill: "currentColor" },
              React.createElement("rect", { x: "54", y: "40", width: "50", height: "172", rx: "6" }),
              React.createElement("rect", { x: "54", y: "40", width: "150", height: "46", rx: "6" }),
              React.createElement("rect", { x: "54", y: "108", width: "98", height: "38", rx: "6" }),
              React.createElement("path", { d: "M 148 94 Q 152 92 158 96 L 198 124 Q 202 128 198 132 L 158 160 Q 152 164 148 162 L 148 94 Z" })
            )
          )
        ),
        /* Heading */
        React.createElement(
          "h1",
          null,
          restaurantName + ", ",
          React.createElement("em", null, "es momento de ser dueño de tu canal digital.")
        ),
        /* Subtitle */
        React.createElement(
          "p",
          { className: "pd-hero-sub" },
          "Deja de depender de plataformas de delivery. Con FluxSales recuperas el control de tus clientes, tus datos y tus márgenes."
        ),
        /* Feature tags */
        React.createElement(
          "p",
          { className: "pd-hero-tags" },
          "Pedidos directos · Programa de lealtad · Marketing automatizado · Todo bajo tu marca."
        ),
        /* Custom message callout */
        customMessage
          ? React.createElement(
              "div",
              { className: "pd-hero-callout" },
              React.createElement("strong", null, "Nota para " + restaurantName),
              customMessage
            )
          : null
      )
    );
  }

  /* =================================================================
     3. ProblemSection
     ================================================================= */
  function ProblemSection(props) {
    var commissionRate = props.commissionRate || 25;

    var cards = [
      {
        icon: React.createElement(
          "svg",
          { viewBox: "0 0 44 44", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          React.createElement("rect", { x: "2", y: "2", width: "40", height: "40", rx: "10", stroke: "currentColor", strokeWidth: "2" }),
          React.createElement("path", { d: "M12 16l8 12 8-12", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
          React.createElement("path", { d: "M22 28V14", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" })
        ),
        title: "Márgenes erosionados",
        desc: "Cada pedido que llega por apps de delivery pierde entre un 25% y 35% en comisiones. Ese margen debería estar en tu bolsillo, no en el de un intermediario.",
        stat: "~" + commissionRate + "%",
        statLabel: "comisión promedio"
      },
      {
        icon: React.createElement(
          "svg",
          { viewBox: "0 0 44 44", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          React.createElement("rect", { x: "2", y: "2", width: "40", height: "40", rx: "10", stroke: "currentColor", strokeWidth: "2" }),
          React.createElement("circle", { cx: "22", cy: "16", r: "5", stroke: "currentColor", strokeWidth: "2" }),
          React.createElement("path", { d: "M12 34c0-5.523 4.477-10 10-10s10 4.477 10 10", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
          React.createElement("line", { x1: "30", y1: "14", x2: "36", y2: "20", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
          React.createElement("line", { x1: "36", y1: "14", x2: "30", y2: "20", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
        ),
        title: "Clientes que no son tuyos",
        desc: "Las plataformas de delivery no comparten los datos de contacto de tus clientes. No puedes hacer remarketing, no puedes crear lealtad, no puedes crecer tu base.",
        stat: "0%",
        statLabel: "datos propios"
      },
      {
        icon: React.createElement(
          "svg",
          { viewBox: "0 0 44 44", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          React.createElement("rect", { x: "2", y: "2", width: "40", height: "40", rx: "10", stroke: "currentColor", strokeWidth: "2" }),
          React.createElement("polyline", { points: "12,30 18,24 24,28 32,16", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
          React.createElement("line", { x1: "32", y1: "16", x2: "32", y2: "30", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "2 2", opacity: "0.4" })
        ),
        title: "Crecimiento limitado",
        desc: "Si todo tu negocio digital depende de terceros, cualquier cambio en sus algoritmos, tarifas o políticas impacta directamente tu operación. Tu crecimiento está en manos ajenas.",
        stat: "100%",
        statLabel: "dependencia de terceros"
      }
    ];

    return React.createElement(
      "section",
      { className: "pd-section pd-problem" },
      React.createElement(
        "div",
        { className: "wrap" },
        React.createElement(
          "div",
          { className: "pd-sec-lbl" },
          React.createElement("span", { className: "pd-num" }, "El problema"),
          React.createElement("span", { className: "pd-rule-line" })
        ),
        React.createElement(
          "div",
          { className: "pd-problem-head" },
          React.createElement("h2", null, "El reto del FoodService hoy"),
          React.createElement("p", { className: "pd-lead" }, "La dependencia en plataformas de delivery erosiona tus márgenes, te aleja de tus clientes y limita tu crecimiento. Es hora de cambiar el modelo.")
        ),
        React.createElement(
          "div",
          { className: "pd-problem-grid" },
          cards.map(function (card, i) {
            return React.createElement(
              "div",
              { className: "pd-problem-card", key: i },
              React.createElement("div", { className: "pd-picon" }, card.icon),
              React.createElement("h4", null, card.title),
              React.createElement("p", null, card.desc),
              React.createElement(
                "div",
                { className: "pd-problem-stat" },
                React.createElement("span", { className: "pd-big" }, card.stat),
                React.createElement("span", { className: "pd-stat-label" }, card.statLabel)
              )
            );
          })
        )
      )
    );
  }

  /* =================================================================
     4. SolutionSection
     ================================================================= */
  function SolutionSection() {
    var features = [
      {
        icon: React.createElement(
          "svg",
          { viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          React.createElement("rect", { x: "4", y: "8", width: "32", height: "24", rx: "4", stroke: "currentColor", strokeWidth: "2" }),
          React.createElement("path", { d: "M4 16h32", stroke: "currentColor", strokeWidth: "2" }),
          React.createElement("circle", { cx: "12", cy: "24", r: "2", fill: "currentColor" }),
          React.createElement("rect", { x: "18", y: "22", width: "12", height: "4", rx: "2", fill: "currentColor", opacity: "0.4" })
        ),
        title: "Pedidos en línea directos",
        desc: "Tu propia plataforma de pedidos, sin comisiones. Cada venta es 100% tuya."
      },
      {
        icon: React.createElement(
          "svg",
          { viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          React.createElement("path", { d: "M20 6l4.5 9 9.5 1.5-7 6.8 1.7 9.7L20 28.5l-8.7 4.5 1.7-9.7-7-6.8 9.5-1.5L20 6z", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" })
        ),
        title: "Programa de lealtad",
        desc: "Sistema de recompensas que impulsa la frecuencia de visita y el ticket promedio."
      },
      {
        icon: React.createElement(
          "svg",
          { viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          React.createElement("rect", { x: "6", y: "10", width: "20", height: "16", rx: "3", stroke: "currentColor", strokeWidth: "2" }),
          React.createElement("path", { d: "M26 18l8-5v18l-8-5V18z", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" }),
          React.createElement("circle", { cx: "16", cy: "18", r: "3", stroke: "currentColor", strokeWidth: "1.5" })
        ),
        title: "Marketing automatizado",
        desc: "Campañas que venden solas mientras tú te concentras en la operación."
      },
      {
        icon: React.createElement(
          "svg",
          { viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          React.createElement("rect", { x: "4", y: "4", width: "32", height: "32", rx: "6", stroke: "currentColor", strokeWidth: "2" }),
          React.createElement("polyline", { points: "12,28 18,18 24,22 30,12", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
          React.createElement("circle", { cx: "30", cy: "12", r: "2.5", fill: "currentColor" })
        ),
        title: "Analytics y Dashboard",
        desc: "Métricas claras de ventas, clientes y operación. Decisiones basadas en datos reales."
      },
      {
        icon: React.createElement(
          "svg",
          { viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          React.createElement("rect", { x: "10", y: "4", width: "20", height: "32", rx: "4", stroke: "currentColor", strokeWidth: "2" }),
          React.createElement("line", { x1: "10", y1: "10", x2: "30", y2: "10", stroke: "currentColor", strokeWidth: "1.5" }),
          React.createElement("line", { x1: "10", y1: "30", x2: "30", y2: "30", stroke: "currentColor", strokeWidth: "1.5" }),
          React.createElement("circle", { cx: "20", cy: "33", r: "1.5", fill: "currentColor" }),
          React.createElement("rect", { x: "14", y: "14", width: "12", height: "6", rx: "1.5", fill: "currentColor", opacity: "0.3" }),
          React.createElement("rect", { x: "14", y: "22", width: "8", height: "4", rx: "1.5", fill: "currentColor", opacity: "0.3" })
        ),
        title: "Website + App móvil",
        desc: "Presencia digital completa bajo tu marca. SEO optimizado para que te encuentren en Google."
      }
    ];

    return React.createElement(
      "section",
      { className: "pd-section" },
      React.createElement(
        "div",
        { className: "wrap" },
        React.createElement(
          "div",
          { className: "pd-sec-lbl" },
          React.createElement("span", { className: "pd-num" }, "La solución"),
          React.createElement("span", { className: "pd-rule-line" })
        ),
        React.createElement(
          "div",
          { className: "pd-solution-head" },
          React.createElement("h2", { className: "display h2" }, "La plataforma integral para tu crecimiento")
        ),
        React.createElement(
          "div",
          { className: "pd-solution-grid" },
          features.map(function (f, i) {
            return React.createElement(
              "div",
              { className: "pd-solution-card", key: i },
              React.createElement("div", { className: "pd-sicon" }, f.icon),
              React.createElement("h4", null, f.title),
              React.createElement("p", null, f.desc)
            );
          })
        )
      )
    );
  }

  /* =================================================================
     5. AssumptionsGrid
     ================================================================= */
  function AssumptionsGrid(props) {
    var locations = props.locations || 1;
    var monthlyOrders = props.monthlyOrders || 1000;
    var avgTicket = props.avgTicket || 350;
    var commissionRate = props.commissionRate || 25;
    var migrationRate = props.migrationRate || 30;
    var monthlySavings = props.monthlySavings || 0;
    var annualSavings = props.annualSavings || 0;
    var totalAnnualBenefit = props.totalAnnualBenefit || 0;
    var monthlyLoyaltyRevenue = props.monthlyLoyaltyRevenue || 0;

    /* Icons for computed metrics */
    var iconSave = React.createElement(
      "svg", { viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      React.createElement("circle", { cx: "16", cy: "16", r: "13", stroke: "currentColor", strokeWidth: "2" }),
      React.createElement("path", { d: "M16 10v12M10 16h12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
    );
    var iconCalendar = React.createElement(
      "svg", { viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      React.createElement("rect", { x: "4", y: "6", width: "24", height: "22", rx: "4", stroke: "currentColor", strokeWidth: "2" }),
      React.createElement("line", { x1: "4", y1: "14", x2: "28", y2: "14", stroke: "currentColor", strokeWidth: "2" }),
      React.createElement("line", { x1: "10", y1: "4", x2: "10", y2: "8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
      React.createElement("line", { x1: "22", y1: "4", x2: "22", y2: "8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
    );
    var iconTrend = React.createElement(
      "svg", { viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      React.createElement("polyline", { points: "4,26 12,16 18,20 28,8", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
      React.createElement("polyline", { points: "22,8 28,8 28,14", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" })
    );
    var iconHeart = React.createElement(
      "svg", { viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      React.createElement("path", { d: "M16 28s-10-6.5-10-14a6 6 0 0112-1.5A6 6 0 0126 14c0 7.5-10 14-10 14z", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" })
    );

    var inputMetrics = [
      { label: "Pedidos mensuales", value: fmtNum(monthlyOrders), unit: "órdenes / mes" },
      { label: "Ticket promedio", value: fmtMXN(avgTicket), unit: "MXN por orden" },
      { label: "Comisión delivery apps", value: commissionRate + "%", unit: "promedio actual" },
      { label: "Migración esperada", value: migrationRate + "%", unit: "de órdenes a canal propio" }
    ];

    var computedMetrics = [
      { label: "Ahorro mensual en comisiones", value: fmtMXN(monthlySavings), unit: "MXN / mes", icon: iconSave },
      { label: "Ahorro anual proyectado", value: fmtMXN(annualSavings), unit: "MXN / año", icon: iconCalendar },
      { label: "Beneficio total anual", value: fmtMXN(totalAnnualBenefit), unit: "MXN incluyendo lealtad", icon: iconTrend },
      { label: "Ingreso lealtad mensual", value: fmtMXN(monthlyLoyaltyRevenue), unit: "MXN / mes estimado", icon: iconHeart }
    ];

    return React.createElement(
      "section",
      { className: "pd-section pd-assumptions" },
      React.createElement(
        "div",
        { className: "wrap" },
        React.createElement(
          "div",
          { className: "pd-sec-lbl" },
          React.createElement("span", { className: "pd-num" }, "Supuestos del modelo"),
          React.createElement("span", { className: "pd-rule-line" })
        ),
        React.createElement(
          "div",
          { className: "pd-assumptions-head" },
          React.createElement("h2", null, "Los números de tu operación")
        ),
        /* Input metrics row */
        React.createElement(
          "div",
          { className: "pd-metrics-row" },
          inputMetrics.map(function (m, i) {
            return React.createElement(
              "div",
              { className: "pd-metric-card", key: i },
              React.createElement("div", { className: "pd-mc-label" }, m.label),
              React.createElement("div", { className: "pd-mc-value" }, m.value),
              React.createElement("div", { className: "pd-mc-unit" }, m.unit)
            );
          })
        ),
        /* Computed metrics row */
        React.createElement(
          "div",
          { className: "pd-metrics-row" },
          computedMetrics.map(function (m, i) {
            return React.createElement(
              "div",
              { className: "pd-metric-card pd-computed", key: i },
              React.createElement("div", { className: "pd-mc-icon" }, m.icon),
              React.createElement("div", { className: "pd-mc-label" }, m.label),
              React.createElement("div", { className: "pd-mc-value" }, m.value),
              React.createElement("div", { className: "pd-mc-unit" }, m.unit)
            );
          })
        )
      )
    );
  }

  /* =================================================================
     6. GrowthProjection
     ================================================================= */
  function GrowthProjection(props) {
    var monthlySavings = props.monthlySavings || 0;
    var locations = props.locations || 1;
    var monthlyOrders = props.monthlyOrders || 1000;
    var avgTicket = props.avgTicket || 350;
    var migrationRate = props.migrationRate || 30;

    var monthlyRevenue = locations * monthlyOrders * avgTicket;
    var migratedOrders = Math.round(monthlyOrders * (migrationRate / 100)) * locations;
    var annualBenefit = monthlySavings * 12;

    /* 12-month ramp */
    var factors = [0.25, 0.60, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0];
    var cumul = [];
    var running = 0;
    factors.forEach(function (f) { running += f * monthlySavings; cumul.push(running); });

    var W = 800, H = 180, pL = 56, pR = 16, pT = 16, pB = 34;
    var max = cumul[cumul.length - 1] || 1;
    var xPos = function (i) { return pL + (i / 11) * (W - pL - pR); };
    var yPos = function (v) { return pT + (1 - v / max) * (H - pT - pB); };
    var linePath = cumul.map(function (v, i) {
      return (i === 0 ? "M" : "L") + xPos(i).toFixed(1) + " " + yPos(v).toFixed(1);
    }).join(" ");
    var areaPath = linePath + " L " + xPos(11).toFixed(1) + " " + (H - pB).toFixed(1) + " L " + xPos(0).toFixed(1) + " " + (H - pB).toFixed(1) + " Z";

    /* Grid lines */
    var gridFractions = [0.25, 0.5, 0.75, 1.0];
    /* Month labels */
    var monthLabels = [0, 2, 5, 8, 11];

    return React.createElement(
      "section",
      { className: "pd-section" },
      React.createElement(
        "div",
        { className: "wrap" },
        React.createElement(
          "div",
          { className: "pd-sec-lbl" },
          React.createElement("span", { className: "pd-num" }, "Proyección de crecimiento a 12 meses"),
          React.createElement("span", { className: "pd-rule-line" })
        ),
        React.createElement(
          "div",
          { className: "pd-growth-head" },
          React.createElement("h2", null, "Tu curva de recuperación")
        ),
        /* Summary stats */
        React.createElement(
          "div",
          { className: "pd-growth-stats" },
          React.createElement(
            "div",
            { className: "pd-growth-stat" },
            React.createElement("div", { className: "pd-gs-label" }, "Ingresos mensuales actuales"),
            React.createElement("div", { className: "pd-gs-value" }, fmtMXN(monthlyRevenue, { short: true })),
            React.createElement("div", { className: "pd-gs-sub" }, fmtNum(locations) + " suc. × " + fmtNum(monthlyOrders) + " órd. × " + fmtMXN(avgTicket) + " ticket")
          ),
          React.createElement(
            "div",
            { className: "pd-growth-stat" },
            React.createElement("div", { className: "pd-gs-label" }, "Órdenes migradas / mes"),
            React.createElement("div", { className: "pd-gs-value" }, fmtNum(migratedOrders)),
            React.createElement("div", { className: "pd-gs-sub" }, migrationRate + "% de tus órdenes actuales")
          ),
          React.createElement(
            "div",
            { className: "pd-growth-stat" },
            React.createElement("div", { className: "pd-gs-label" }, "Beneficio incremental anual"),
            React.createElement("div", { className: "pd-gs-value" }, fmtMXN(annualBenefit, { short: true })),
            React.createElement("div", { className: "pd-gs-sub" }, "Ahorro acumulado en 12 meses")
          )
        ),
        /* Chart */
        React.createElement(
          "div",
          { className: "pd-chart-card" },
          React.createElement(
            "div",
            { className: "pd-chart-head" },
            React.createElement("span", { className: "pd-ch-label" }, "Ahorro acumulado · 12 meses"),
            React.createElement("span", { className: "pd-ch-peak" }, "Mes 12 · " + fmtMXN(cumul[11], { short: true }))
          ),
          React.createElement(
            "svg",
            { className: "pd-chart-svg", viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "none" },
            React.createElement(
              "defs",
              null,
              React.createElement(
                "linearGradient",
                { id: "pd-grad", x1: "0", y1: "0", x2: "0", y2: "1" },
                React.createElement("stop", { offset: "0%", stopColor: "#57b990", stopOpacity: "0.3" }),
                React.createElement("stop", { offset: "100%", stopColor: "#57b990", stopOpacity: "0.02" })
              )
            ),
            /* Grid lines */
            gridFractions.map(function (f) {
              return React.createElement(
                "g",
                { key: f },
                React.createElement("line", {
                  x1: pL, x2: W - pR,
                  y1: yPos(f * max), y2: yPos(f * max),
                  stroke: "var(--rule)", strokeDasharray: "2 3", strokeOpacity: "0.7"
                }),
                React.createElement("text", {
                  x: pL - 8, y: yPos(f * max) + 4,
                  fill: "var(--ink-muted)", fontSize: "10",
                  fontFamily: "JetBrains Mono", textAnchor: "end"
                }, fmtMXN(f * max, { short: true }))
              );
            }),
            /* Base line */
            React.createElement("line", {
              x1: xPos(0), x2: xPos(11),
              y1: H - pB, y2: H - pB,
              stroke: "var(--rule)"
            }),
            /* Month labels */
            monthLabels.map(function (i) {
              return React.createElement("text", {
                key: i, x: xPos(i), y: H - pB + 18,
                fill: "var(--ink-muted)", fontSize: "10",
                fontFamily: "JetBrains Mono", textAnchor: "middle"
              }, "M" + (i + 1));
            }),
            /* Area fill */
            React.createElement("path", { d: areaPath, fill: "url(#pd-grad)" }),
            /* Line */
            React.createElement("path", { d: linePath, stroke: "#57b990", strokeWidth: "2.5", fill: "none" }),
            /* Dots */
            cumul.map(function (v, i) {
              return React.createElement("circle", {
                key: i, cx: xPos(i), cy: yPos(v),
                r: i === 11 ? 4.5 : 2.5, fill: "#57b990"
              });
            })
          )
        )
      )
    );
  }

  /* =================================================================
     7. ComparisonTable
     ================================================================= */
  function ComparisonTable() {
    var rows = [
      { feature: "0% comisiones por pedido", flux: true, delivery: false },
      { feature: "Datos del cliente son tuyos", flux: true, delivery: false },
      { feature: "Marketing directo automatizado", flux: true, delivery: false },
      { feature: "Programa de lealtad propio", flux: true, delivery: false },
      { feature: "App móvil con tu marca", flux: true, delivery: false },
      { feature: "SEO y reseñas en Google", flux: true, delivery: false },
      { feature: "Dashboard multi-sucursal", flux: true, delivery: false },
      { feature: "Contrato mes a mes", flux: true, delivery: false },
      { feature: "Soporte dedicado", flux: true, delivery: "partial" },
      { feature: "Sin dependencia de terceros", flux: true, delivery: false }
    ];

    function renderMark(val) {
      if (val === true) {
        return React.createElement("span", { className: "pd-check pd-yes" }, "✓");
      }
      if (val === "partial") {
        return React.createElement("span", { className: "pd-check pd-partial" }, "Limitado");
      }
      return React.createElement("span", { className: "pd-check pd-no" }, "✗");
    }

    return React.createElement(
      "section",
      { className: "pd-section pd-cream" },
      React.createElement(
        "div",
        { className: "wrap" },
        React.createElement(
          "div",
          { className: "pd-compare-head" },
          React.createElement("h2", { className: "display h2" }, "FluxSales vs Delivery Apps"),
          React.createElement("p", { className: "pd-lead" }, "Compara lo que obtienes con tu canal propio frente a depender de plataformas de terceros.")
        ),
        React.createElement(
          "div",
          { className: "pd-table-wrap" },
          React.createElement(
            "table",
            { className: "pd-table" },
            React.createElement(
              "thead",
              null,
              React.createElement(
                "tr",
                null,
                React.createElement("th", null, "Característica"),
                React.createElement("th", null, "FluxSales"),
                React.createElement("th", null, "Delivery Apps")
              )
            ),
            React.createElement(
              "tbody",
              null,
              rows.map(function (r, i) {
                return React.createElement(
                  "tr",
                  { key: i },
                  React.createElement("td", null, r.feature),
                  React.createElement("td", null, renderMark(r.flux)),
                  React.createElement("td", null, renderMark(r.delivery))
                );
              })
            )
          )
        )
      )
    );
  }

  /* =================================================================
     8. CaseStudy
     ================================================================= */
  function CaseStudy() {
    var painPoints = [
      "Pérdida de margen del 25% en cada orden por comisiones de plataformas",
      "Sin acceso a datos de contacto de sus clientes finales",
      "Sin capacidad de reenganche: no podían hacer remarketing ni recuperar clientes inactivos",
      "Sin notificaciones push ni comunicación directa con su base",
      "Sin infraestructura de lealtad para premiar a clientes frecuentes"
    ];

    var improvements = [
      "Canal propio de pedidos online sin comisiones por transacción",
      "Base de datos de clientes 100% propia con historial de compras",
      "Programa de lealtad activo que impulsa frecuencia de visita",
      "Notificaciones push y campañas de marketing automatizadas",
      "Dashboard de operación multi-sucursal con métricas en tiempo real"
    ];

    return React.createElement(
      "section",
      { className: "pd-section pd-case" },
      React.createElement(
        "div",
        { className: "wrap" },
        React.createElement(
          "div",
          { className: "pd-sec-lbl" },
          React.createElement("span", { className: "pd-num" }, "Caso de éxito"),
          React.createElement("span", { className: "pd-rule-line" })
        ),
        React.createElement(
          "div",
          { className: "pd-case-head" },
          React.createElement(
            "h2",
            null,
            "Carl’s Jr: ",
            React.createElement("em", null, "de delivery a canal propio")
          )
        ),
        React.createElement(
          "div",
          { className: "pd-case-grid" },
          /* Before card */
          React.createElement(
            "div",
            { className: "pd-case-card pd-before" },
            React.createElement("div", { className: "pd-case-tag" }, "Antes"),
            React.createElement(
              "p",
              null,
              "Carl’s Jr operaba con volumen de ventas sólido a través de plataformas de delivery (Uber Eats, Rappi, Didi). Sin embargo, el modelo presentaba vulnerabilidades estructurales que erosionaban la rentabilidad."
            ),
            React.createElement(
              "ul",
              { className: "pd-case-list" },
              painPoints.map(function (point, i) {
                return React.createElement("li", { key: i }, point);
              })
            )
          ),
          /* After card */
          React.createElement(
            "div",
            { className: "pd-case-card pd-after" },
            React.createElement("div", { className: "pd-case-tag" }, "Después"),
            React.createElement(
              "p",
              null,
              "Con FluxSales, Carl’s Jr activó su canal directo y recuperó el control sobre sus clientes, su data y sus márgenes. Los resultados hablan por sí solos."
            ),
            React.createElement(
              "ul",
              { className: "pd-case-list" },
              improvements.map(function (point, i) {
                return React.createElement("li", { key: i }, point);
              })
            )
          )
        ),
        /* Project link */
        React.createElement(
          "a",
          { href: "/case/carls-jr-celaya/", className: "pd-case-link" },
          "Proyecto en vivo: Carl’s Jr – Canal Directo powered by FluxSales →"
        )
      )
    );
  }

  /* =================================================================
     9. CTASection
     ================================================================= */
  function CTASection() {
    return React.createElement(
      "section",
      { className: "pd-section pd-cta", id: "pd-cta" },
      React.createElement(
        "div",
        { className: "wrap" },
        React.createElement(
          "div",
          { className: "pd-sec-lbl", style: { justifyContent: "center", maxWidth: 320, margin: "0 auto 24px" } },
          React.createElement("span", { className: "pd-num" }, "Siguiente paso"),
          React.createElement("span", { className: "pd-rule-line" })
        ),
        React.createElement(
          "h2",
          null,
          "Agenda tu demo. ",
          React.createElement("em", null, "20 minutos, tus números.")
        ),
        React.createElement(
          "p",
          null,
          "Revisamos tu propuesta, te mostramos la plataforma en vivo y creamos un plan de implementación a la medida de tu restaurante."
        ),
        React.createElement(
          "a",
          { href: "/demo", className: "pd-cta-btn" },
          "Agendar demo gratuita →"
        ),
        React.createElement(
          "div",
          { className: "pd-cta-ctx" },
          "Demo de 20 minutos · Sin compromiso"
        )
      )
    );
  }

  /* =================================================================
     10. ProposalDocument — master wrapper
     ================================================================= */
  function ProposalDocument(props) {
    var data = props.data || {};

    /* Derive computed values if not provided */
    var locations = data.locations || 1;
    var monthlyOrders = data.monthlyOrders || 1000;
    var avgTicket = data.avgTicket || 350;
    var commissionRate = data.commissionRate || 25;
    var migrationRate = data.migrationRate || 30;

    var monthlyRevenue = locations * monthlyOrders * avgTicket;
    var migratedRevenue = monthlyRevenue * (migrationRate / 100);
    var monthlySavings = data.monthlySavings != null ? data.monthlySavings : migratedRevenue * (commissionRate / 100);
    var annualSavings = data.annualSavings != null ? data.annualSavings : monthlySavings * 12;
    var monthlyLoyaltyRevenue = data.monthlyLoyaltyRevenue != null ? data.monthlyLoyaltyRevenue : migratedRevenue * 0.08;
    var totalAnnualBenefit = data.totalAnnualBenefit != null ? data.totalAnnualBenefit : annualSavings + (monthlyLoyaltyRevenue * 12);

    return React.createElement(
      React.Fragment,
      null,
      React.createElement(ProposalStyles, null),
      React.createElement(Hero, {
        restaurantName: data.restaurantName,
        customMessage: data.customMessage
      }),
      React.createElement(ProblemSection, {
        commissionRate: commissionRate
      }),
      React.createElement(SolutionSection, null),
      React.createElement(AssumptionsGrid, {
        locations: locations,
        monthlyOrders: monthlyOrders,
        avgTicket: avgTicket,
        commissionRate: commissionRate,
        migrationRate: migrationRate,
        monthlySavings: monthlySavings,
        annualSavings: annualSavings,
        totalAnnualBenefit: totalAnnualBenefit,
        monthlyLoyaltyRevenue: monthlyLoyaltyRevenue
      }),
      React.createElement(GrowthProjection, {
        monthlySavings: monthlySavings,
        locations: locations,
        monthlyOrders: monthlyOrders,
        avgTicket: avgTicket,
        migrationRate: migrationRate
      }),
      React.createElement(ComparisonTable, null),
      React.createElement(CaseStudy, null),
      React.createElement(CTASection, null)
    );
  }

  /* ── Export to window ── */
  window.ProposalDoc = {
    LogoMark: LogoMark,
    Hero: Hero,
    ProblemSection: ProblemSection,
    SolutionSection: SolutionSection,
    AssumptionsGrid: AssumptionsGrid,
    GrowthProjection: GrowthProjection,
    ComparisonTable: ComparisonTable,
    CaseStudy: CaseStudy,
    CTASection: CTASection,
    ProposalDocument: ProposalDocument,
    ProposalStyles: ProposalStyles,
    /* Utilities */
    fmtMXN: fmtMXN,
    fmtNum: fmtNum,
    fmtPct: fmtPct
  };

})();
