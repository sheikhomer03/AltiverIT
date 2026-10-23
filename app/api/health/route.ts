import { connection } from "next/server";
import { siteConfig } from "@/lib/site-config";

/*
 * Backend endpoints live under app/api as Route Handlers: each folder is a
 * URL segment and its route.ts exports the HTTP methods it supports
 * (GET, POST, ...). This one backs GET /api/health.
 */

/** Liveness check for uptime monitors and deployment smoke tests. */
export async function GET() {
  // Run at request time so the timestamp is current, not frozen at build.
  await connection();

  return Response.json({
    status: "ok",
    service: siteConfig.name,
    timestamp: new Date().toISOString(),
  });
}
