// Vercel serverless proxy for GET /api/proposals/prefill (proposal builder → the
// "Rellenar desde Google" auto-fill). Same key-injection pattern as
// ../proposals.js — the backend `GET /proposals/prefill` is auth-gated (it makes
// a paid Google Places lookup), so the static builder can't call it directly.
//
// Dormant until BOTH are live: (1) flux-automation v1.4.17.0+ deployed to the
// VPS (adds the /proposals/prefill route) and (2) the builder gains the place
// picker + "Rellenar desde Google" button. Until then nothing calls this path.
//
// REQUIRED: `SERVER_API_KEY` in the Vercel project env (shared with ../proposals.js).

const BACKEND = "http://93.188.165.81:3001/proposals/prefill";

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const key = process.env.SERVER_API_KEY;
  if (!key) {
    res.status(500).json({ error: "SERVER_API_KEY not configured in Vercel project env" });
    return;
  }

  const placeId = (req.query && req.query.place_id) || "";
  if (!placeId) {
    res.status(400).json({ error: "place_id is required" });
    return;
  }

  try {
    const url = `${BACKEND}?place_id=${encodeURIComponent(placeId)}`;
    const upstream = await fetch(url, { headers: { Authorization: `Bearer ${key}` } });

    const text = await upstream.text();
    res.status(upstream.status);
    res.setHeader("Content-Type", upstream.headers.get("content-type") || "application/json");
    res.send(text);
  } catch (err) {
    res.status(502).json({
      error: "Proxy to prefill backend failed",
      detail: String((err && err.message) || err),
    });
  }
};
