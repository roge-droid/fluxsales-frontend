/**
 * Monthly Uber Eats commission paid, or equivalently, monthly margin recovered
 * when UE is fully replaced. Per spec §7: monthly = L * O * T * C.
 *
 * @param {{locations: number, ordersPerMonth: number, avgTicket: number, commissionRate: number}} inputs
 * @returns {number} MXN per month
 */
export function computeMonthlyCommission({ locations, ordersPerMonth, avgTicket, commissionRate }) {
  return locations * ordersPerMonth * avgTicket * commissionRate;
}

/**
 * Annual recovery = monthly * 12. Per spec §7.
 *
 * @param {number} monthly MXN per month
 * @returns {number} MXN per year
 */
export function computeAnnualRecovery(monthly) {
  return monthly * 12;
}

/**
 * 12-month cumulative recovery curve per spec §7. Approximates the Brooklyn
 * 90-day ramp: 25% of full run rate at month 1, 60% at month 2, 100% from
 * month 3 onward. Flagged assumption in spec §8.
 *
 * @param {{monthlyFull: number, months: number}} args
 * @returns {Array<{month: number, monthly: number, cumulative: number}>}
 */
export function computeRecoveryCurve({ monthlyFull, months }) {
  const rampFactors = [0.25, 0.60];
  const curve = [];
  let cumulative = 0;
  for (let i = 0; i < months; i++) {
    const factor = rampFactors[i] ?? 1.0;
    const monthly = monthlyFull * factor;
    cumulative += monthly;
    curve.push({ month: i + 1, monthly, cumulative });
  }
  return curve;
}

/**
 * Defaults pre-fill the calculator with the prospect's own numbers (spec §5).
 */
export const DEFAULT_INPUTS = {
  locations: 2,
  ordersPerMonth: 1000,
  avgTicket: 350,
  commissionRate: 0.24,
};

/**
 * Baseline preview: the Celaya pilot (2 locations) with all other defaults.
 */
const pilotMonthly = computeMonthlyCommission(DEFAULT_INPUTS);
export const CELAYA_PILOT_PREVIEW = {
  monthly: pilotMonthly,
  annual: computeAnnualRecovery(pilotMonthly),
};

/**
 * Full-network preview: slider pulled to 80 locations.
 */
const networkMonthly = computeMonthlyCommission({ ...DEFAULT_INPUTS, locations: 80 });
export const FULL_NETWORK_PREVIEW = {
  monthly: networkMonthly,
  annual: computeAnnualRecovery(networkMonthly),
};
