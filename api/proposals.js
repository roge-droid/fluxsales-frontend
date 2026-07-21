// Vercel serverless proxy for POST /api/proposals (proposal builder → create).
//
// Why this exists: the /proposal builder is a static, in-browser React page — it
// cannot safely hold the backend's SERVER_API_KEY. But flux-automation's
// `POST /proposals` is an authenticated write route, so the builder's keyless
// POST was getting 401 and every "Generar propuesta" click failed. This function
// runs server-side, injects the key, and forwards to the backend.
//
// Routing: Vercel matches filesystem functions in /api BEFORE the `/api/:path*`
// rewrite (afterFiles) in vercel.json, so this intercepts ONLY `/api/proposals`.
// The public read `GET /api/proposals/:code` has no function and still falls
// through to the backend rewrite unchanged.
//
// REQUIRED: set `SERVER_API_KEY` in the Vercel project's Environment Variables
// (Production + Preview). Without it this returns 500.

const BACKEND = "http://93.188.165.81:3001/proposals";

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const key = process.env.SERVER_API_KEY;
  if (!key) {
    res.status(500).json({ error: "SERVER_API_KEY not configured in Vercel project env" });
    return;
  }

  try {
    const upstream = await fetch(BACKEND, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      // Vercel parses JSON bodies into req.body for application/json requests.
      body: JSON.stringify(req.body ?? {}),
    });

    const text = await upstream.text();
    res.status(upstream.status);
    res.setHeader("Content-Type", upstream.headers.get("content-type") || "application/json");
    res.send(text);
  } catch (err) {
    res.status(502).json({
      error: "Proxy to proposals backend failed",
      detail: String((err && err.message) || err),
    });
  }
};
