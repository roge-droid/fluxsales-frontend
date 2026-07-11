import { next } from "@vercel/edge";
import { waitUntil } from "@vercel/functions";
import { trackAICrawlerRequest } from "@datafast/ai-crawl";

/**
 * Vercel Edge Middleware — DataFast AI-crawler ("bot traffic") tracking.
 *
 * Server-side only; there is NO frontend/script change (the browser DataFast
 * tag lives in each page's <head> and tracks humans; this tracks crawlers).
 *
 * @datafast/ai-crawl classifies the User-Agent at the edge and only calls
 * DataFast for likely AI/search/training crawlers (ChatGPT, Claude, Perplexity,
 * Googlebot, GPTBot, etc.). It also tracks robots.txt / llms.txt / sitemap.xml
 * hits, which is useful for AEO. See https://datafa.st/docs/bot-traffic-tracking
 */
export const config = {
  // Skip the /api proxy, Vercel internals, and obvious static assets — but keep
  // extensionless page routes AND crawler-facing files (.txt / .xml) in scope.
  matcher:
    "/((?!api/|_vercel/|.*\\.(?:css|js|mjs|jsx|map|json|png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf|eot|mp4|webm)$).*)",
};

export default function middleware(request: Request) {
  // Best-effort and non-blocking: hand the tracking promise to waitUntil and
  // return immediately. Tracking must never delay or break page delivery.
  try {
    trackAICrawlerRequest(request, waitUntil, {
      websiteId: "dfid_1JeiKjY2XiNRknZfezthH",
    });
  } catch {
    // no-op — crawler tracking is never allowed to affect the response
  }
  return next();
}
