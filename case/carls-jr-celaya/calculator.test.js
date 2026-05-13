import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  computeMonthlyCommission,
  computeAnnualRecovery,
  computeRecoveryCurve,
  DEFAULT_INPUTS,
  CELAYA_PILOT_PREVIEW,
  FULL_NETWORK_PREVIEW,
} from './calculator.js';

test('computeMonthlyCommission: prospect defaults (2 Celaya locations)', () => {
  const result = computeMonthlyCommission({
    locations: 2,
    ordersPerMonth: 1000,
    avgTicket: 350,
    commissionRate: 0.24,
  });
  // 2 * 1000 * 350 * 0.24 = 168000
  assert.equal(result, 168000);
});

test('computeMonthlyCommission: full network slider (80 locations)', () => {
  const result = computeMonthlyCommission({
    locations: 80,
    ordersPerMonth: 1000,
    avgTicket: 350,
    commissionRate: 0.24,
  });
  // 80 * 1000 * 350 * 0.24 = 6720000
  assert.equal(result, 6720000);
});

test('computeMonthlyCommission: zero locations → zero', () => {
  const result = computeMonthlyCommission({
    locations: 0,
    ordersPerMonth: 1000,
    avgTicket: 350,
    commissionRate: 0.24,
  });
  assert.equal(result, 0);
});

test('computeAnnualRecovery: pilot baseline', () => {
  assert.equal(computeAnnualRecovery(168000), 2016000);
});

test('computeAnnualRecovery: full network', () => {
  assert.equal(computeAnnualRecovery(6720000), 80640000);
});

test('computeRecoveryCurve: 12-month shape with 25/60/100 ramp', () => {
  const monthlyFull = 100; // easy to reason about
  const curve = computeRecoveryCurve({ monthlyFull, months: 12 });

  assert.equal(curve.length, 12);

  // Month 1: 25% of full run rate = 25
  assert.equal(curve[0].monthly, 25);
  assert.equal(curve[0].cumulative, 25);

  // Month 2: 60% of full run rate = 60
  assert.equal(curve[1].monthly, 60);
  assert.equal(curve[1].cumulative, 85);

  // Month 3 onward: 100% of full run rate = 100
  assert.equal(curve[2].monthly, 100);
  assert.equal(curve[2].cumulative, 185);

  // Month 12 cumulative: 25 + 60 + (100 * 10) = 1085
  assert.equal(curve[11].cumulative, 1085);
});

test('computeRecoveryCurve: zero monthlyFull → all zeros', () => {
  const curve = computeRecoveryCurve({ monthlyFull: 0, months: 12 });
  assert.equal(curve.length, 12);
  curve.forEach(point => {
    assert.equal(point.monthly, 0);
    assert.equal(point.cumulative, 0);
  });
});

test('DEFAULT_INPUTS: matches prospect-provided numbers per spec §5', () => {
  assert.deepEqual(DEFAULT_INPUTS, {
    locations: 2,
    ordersPerMonth: 1000,
    avgTicket: 350,
    commissionRate: 0.24,
  });
});

test('CELAYA_PILOT_PREVIEW: computed from defaults', () => {
  assert.equal(CELAYA_PILOT_PREVIEW.monthly, 168000);
  assert.equal(CELAYA_PILOT_PREVIEW.annual, 2016000);
});

test('FULL_NETWORK_PREVIEW: 80 locations with other defaults', () => {
  assert.equal(FULL_NETWORK_PREVIEW.monthly, 6720000);
  assert.equal(FULL_NETWORK_PREVIEW.annual, 80640000);
});
