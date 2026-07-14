#!/usr/bin/env node
// Local dev server for /canal-propio (Campaign F, funnel=volume).
//
// Plain Node, no dependencies. Serves this worktree's static files on port 8080 and
// proxies any /api/* request to http://localhost:3001/* — this replicates the
// vercel.json rewrite ("/api/:path*" -> "https://api.fluxsales.co/:path*") against a
// local flux-automation server instead of production.
//
// Usage:
//   node scripts/local-canal-propio.js
//   (then, in another terminal, run the flux-automation backend on :3001 if you want
//    the form submit / calendar calls to actually resolve — the static page itself
//    serves fine without it)
//
// Open:
//   http://localhost:8080/canal-propio/
//
// Env overrides:
//   PORT=8080            — port to listen on
//   BACKEND_PORT=3001     — local flux-automation port to proxy /api/* to

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..");
const PORT = Number(process.env.PORT || 8080);
const BACKEND_PORT = Number(process.env.BACKEND_PORT || 3001);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

function proxyToBackend(req, res) {
  const targetPath = req.url.replace(/^\/api/, "") || "/";
  const options = {
    hostname: "localhost",
    port: BACKEND_PORT,
    path: targetPath,
    method: req.method,
    headers: { ...req.headers, host: "localhost:" + BACKEND_PORT },
  };
  const proxyReq = http.request(options, (backendRes) => {
    res.writeHead(backendRes.statusCode || 502, backendRes.headers);
    backendRes.pipe(res);
  });
  proxyReq.on("error", (err) => {
    res.writeHead(502, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: false, error: "backend_unreachable", detail: err.message }));
  });
  req.pipe(proxyReq);
}

function serveStatic(req, res) {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath.endsWith("/")) urlPath += "index.html";
  // Match vercel.json's clean-URL routes for local testing convenience.
  if (urlPath === "/canal-propio") urlPath = "/canal-propio/index.html";
  if (urlPath === "/diagnostico") urlPath = "/diagnostico/index.html";
  if (urlPath === "/diagnostico-google") urlPath = "/diagnostico-google/index.html";
  if (urlPath === "/calificador") urlPath = "/calificador/index.html";

  const filePath = path.join(ROOT, urlPath);
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end("Forbidden"); return; }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found: " + urlPath);
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/api/")) return proxyToBackend(req, res);
  return serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log("[local-canal-propio] serving " + ROOT + " on http://localhost:" + PORT);
  console.log("[local-canal-propio] proxying /api/* -> http://localhost:" + BACKEND_PORT + "/*");
  console.log("[local-canal-propio] open: http://localhost:" + PORT + "/canal-propio/");
});
