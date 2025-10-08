import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { compress } from "hono/compress";

// Dynamically import the RSC build output and type it as a handler
type BuildFunction = (request: Request) => Promise<Response>;
const build = (await import("./dist/rsc/index.js" as any))
  .default as BuildFunction;

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

// Start the Node server
const port = Number.parseInt(process.env.PORT || "3000", 10);
serve({ fetch: app.fetch, port }, (info) => {
  console.log(`Server running on http://localhost:${info.port}`);
});
