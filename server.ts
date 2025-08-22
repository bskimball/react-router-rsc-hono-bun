import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { compress } from "hono/compress";
import "@ungap/compression-stream/poly"; // Polyfill for streaming compression

// Dynamically import the RSC build output and type it as a handler
type BuildFunction = (request: Request) => Promise<Response>;
const build: BuildFunction = (
	await import("./dist/rsc/index.js" satisfies string)
).default;

// Create the Hono app instance
const app = new Hono();

// Serve static assets with compression for better performance
app.use("/assets/*", compress());
app.use("/assets/*", serveStatic({ root: "./dist/client" }));
app.use("/favicon.ico", serveStatic({ root: "./dist/client" }));

// Special route for Chrome DevTools integration (returns 404 for this template)
app.get("/.well-known/appspecific/com.chrome.devtools.json", (c) => {
	return c.text("Not Found", 404);
});

// Catch-all route: handle all other requests with the RSC build handler
// This will render your React Server Components app
app.use("*", (c) => {
	return build(c.req.raw);
});

// Export the server config for Bun (port and fetch handler)
export default {
	port: Number.parseInt(process.env.PORT || "3000", 10),
	fetch: app.fetch,
};
