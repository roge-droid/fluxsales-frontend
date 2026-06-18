#!/usr/bin/env node
// Regenerate the static card grids in the hub pages (/guias, /blog, /casos) from
// content/hubs.json. The hubs stay static HTML (crawlable) — this just automates the
// card list so a newly published page only needs one JSON entry, not hand-edited HTML.
//
// Usage:  node scripts/gen-hubs.mjs   (run from repo root after editing content/hubs.json)
//
// Each hub's index.html must contain the markers:
//   <!-- CARDS:START -->  ...generated...  <!-- CARDS:END -->
// Everything outside the markers is left untouched.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// Per-hub presentation (card/soon CSS classes match each hub's existing styles).
const HUBS = {
  guias: { file: "guias/index.html", cardClass: "gx-card",   soonClass: "gx-soon",   soon: "Más guías pronto." },
  blog:  { file: "blog/index.html",  cardClass: "blog-card", soonClass: "blog-soon", soon: "Más artículos pronto." },
  casos: { file: "casos/index.html", cardClass: "caso-card", soonClass: "casos-soon", soon: "Más casos pronto." },
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const manifest = JSON.parse(readFileSync(join(ROOT, "content/hubs.json"), "utf8"));

const card = (cls, it) =>
  `    <a class="${cls}" href="${esc(it.url)}">\n` +
  `      <span class="tag">${esc(it.tag)}</span>\n` +
  `      <h3>${esc(it.title)}</h3>\n` +
  `      <p>${esc(it.blurb)}</p>\n` +
  `      <span class="read">${esc(it.read || "Leer →")}</span>\n` +
  `    </a>`;

let changed = 0;
for (const [hub, cfg] of Object.entries(HUBS)) {
  const items = manifest[hub] || [];
  const path = join(ROOT, cfg.file);
  const html = readFileSync(path, "utf8");

  const start = "<!-- CARDS:START -->";
  const end = "<!-- CARDS:END -->";
  const i = html.indexOf(start);
  const j = html.indexOf(end);
  if (i === -1 || j === -1) {
    console.error(`✗ ${cfg.file}: missing ${start} / ${end} markers — skipped`);
    process.exitCode = 1;
    continue;
  }

  const cards = items.map((it) => card(cfg.cardClass, it)).join("\n");
  const soon = `    <div class="${cfg.soonClass}">${esc(cfg.soon)}</div>`;
  const block = `${start}\n${cards}\n${soon}\n    ${end}`;

  const next = html.slice(0, i) + block + html.slice(j + end.length);
  if (next !== html) { writeFileSync(path, next); changed++; }
  console.log(`✓ ${hub}: ${items.length} card(s) → ${cfg.file}`);
}
console.log(`Done. ${changed} file(s) updated.`);
