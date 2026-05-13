import {
  computeMonthlyCommission,
  computeAnnualRecovery,
  computeRecoveryCurve,
} from './calculator.js';

const NUM = new Intl.NumberFormat('es-MX');

function fmtMXN(n, { short = false } = {}) {
  if (short && Math.abs(n) >= 1_000_000) {
    return '$' + (n / 1_000_000).toFixed(2).replace(/\.?0+$/, '') + 'M';
  }
  if (short && Math.abs(n) >= 1_000) {
    return '$' + Math.round(n / 1_000) + 'k';
  }
  return '$' + Math.round(n).toLocaleString('es-MX');
}

function readInputs() {
  const get = (name) => {
    const raw = Number(document.querySelector(`[data-input="${name}"]`).value);
    return Number.isFinite(raw) ? raw : 0;
  };
  return {
    locations: get('locations'),
    ordersPerMonth: get('ordersPerMonth'),
    avgTicket: get('avgTicket'),
    commissionRate: get('commissionRatePercent') / 100,
  };
}

function updateDisplays(inputs) {
  document.querySelector('[data-display="ordersPerMonth"]').textContent =
    NUM.format(inputs.ordersPerMonth);

  document.querySelector('[data-display="locations"]').textContent = inputs.locations;
  document.querySelector('[data-display="locationsUnit"]').textContent =
    inputs.locations === 1 ? 'local' : 'locales';

  document.querySelector('[data-display="avgTicket"]').textContent =
    '$' + NUM.format(inputs.avgTicket);

  const pct = document.querySelector('[data-input="commissionRatePercent"]').value;
  document.querySelector('[data-display="commissionRatePercent"]').textContent = pct;
}

function updateOutputs(inputs, monthly, annual, peak) {
  document.querySelector('[data-output="monthlyToday"]').textContent = fmtMXN(monthly);
  document.querySelector('[data-output="monthlyRecovered"]').textContent = fmtMXN(monthly);
  document.querySelector('[data-output="annual"]').textContent = fmtMXN(annual);
  document.querySelector('[data-output="peak"]').textContent = fmtMXN(peak, { short: true });

  const pct = (inputs.commissionRate * 100).toFixed(1).replace(/\.0$/, '');
  document.querySelector('[data-formula="monthly"]').textContent =
    `A Uber Eats · ${inputs.locations}×${NUM.format(inputs.ordersPerMonth)}×$${NUM.format(inputs.avgTicket)}×${pct}%`;

  const breakdown = document.querySelector('[data-formula="breakdown"]');
  if (breakdown) {
    breakdown.textContent =
      `${inputs.locations} × ${NUM.format(inputs.ordersPerMonth)} × $${NUM.format(inputs.avgTicket)} × ${pct}% = ${fmtMXN(monthly)}/mes`;
  }
  const annualBreakdown = document.querySelector('[data-formula="annualBreakdown"]');
  if (annualBreakdown) {
    annualBreakdown.textContent = `${fmtMXN(annual)}/año`;
  }
}

function updatePresetStates(locations) {
  document.querySelectorAll('[data-preset-locations]').forEach((btn) => {
    const v = Number(btn.dataset.presetLocations);
    btn.classList.toggle('on', v === locations);
  });
}

function renderChart(curve) {
  const svg = document.querySelector('[data-chart="recovery"]');
  const W = 800, H = 180, pL = 50, pR = 16, pT = 16, pB = 34;
  const max = curve[curve.length - 1].cumulative || 1;
  const xAt = (i) => pL + (i / 11) * (W - pL - pR);
  const yAt = (v) => pT + (1 - v / max) * (H - pT - pB);

  const pathD = curve
    .map((p, i) => (i === 0 ? 'M' : 'L') + xAt(i).toFixed(1) + ' ' + yAt(p.cumulative).toFixed(1))
    .join(' ');
  const areaD = pathD +
    ` L ${xAt(11).toFixed(1)} ${(H - pB).toFixed(1)}` +
    ` L ${xAt(0).toFixed(1)} ${(H - pB).toFixed(1)} Z`;

  const gridlines = [0.25, 0.5, 0.75, 1]
    .map((f) => {
      const y = yAt(f * max);
      const label = fmtMXN(f * max, { short: true });
      return (
        `<line x1="${pL}" x2="${W - pR}" y1="${y.toFixed(1)}" y2="${y.toFixed(1)}" ` +
          `stroke="rgba(247,242,233,.1)" stroke-dasharray="2 3" />` +
        `<text x="${pL - 8}" y="${(y + 4).toFixed(1)}" fill="rgba(247,242,233,.4)" ` +
          `font-size="10" font-family="JetBrains Mono" text-anchor="end">${label}</text>`
      );
    })
    .join('');

  const months = [0, 2, 5, 8, 11]
    .map((i) =>
      `<text x="${xAt(i).toFixed(1)}" y="${H - pB + 18}" ` +
        `fill="rgba(247,242,233,.5)" font-size="10" font-family="JetBrains Mono" ` +
        `text-anchor="middle">M${i + 1}</text>`
    )
    .join('');

  const dots = curve
    .map((p, i) =>
      `<circle cx="${xAt(i).toFixed(1)}" cy="${yAt(p.cumulative).toFixed(1)}" ` +
        `r="${i === 11 ? 4 : 2.5}" fill="#57b990" />`
    )
    .join('');

  svg.innerHTML =
    `<defs>
      <linearGradient id="recGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#57b990" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#57b990" stop-opacity="0" />
      </linearGradient>
    </defs>` +
    gridlines +
    `<line x1="${xAt(0).toFixed(1)}" x2="${xAt(11).toFixed(1)}" ` +
      `y1="${H - pB}" y2="${H - pB}" stroke="rgba(247,242,233,.2)" />` +
    months +
    `<path d="${areaD}" fill="url(#recGrad)" />` +
    `<path d="${pathD}" stroke="#57b990" stroke-width="2.5" fill="none" />` +
    dots;
}

function render() {
  const inputs = readInputs();
  const monthly = computeMonthlyCommission(inputs);
  const annual = computeAnnualRecovery(monthly);
  const curve = computeRecoveryCurve({ monthlyFull: monthly, months: 12 });
  const peak = curve[curve.length - 1].cumulative;

  updateDisplays(inputs);
  updateOutputs(inputs, monthly, annual, peak);
  updatePresetStates(inputs.locations);
  renderChart(curve);
}

function bindEvents() {
  document.querySelectorAll('[data-input]').forEach((el) => {
    el.addEventListener('input', render);
  });
  document.querySelectorAll('[data-preset-locations]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const v = Number(btn.dataset.presetLocations);
      const locInput = document.querySelector('[data-input="locations"]');
      locInput.value = v;
      render();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  bindEvents();
  render();
});
