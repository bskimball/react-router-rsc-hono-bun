import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { compress } from "hono/compress";
import "@ungap/compression-stream/poly";

import build from "./dist/rsc/index.js";

const app = new Hono();

app.use("/assets/*", compress());
app.use("/assets/*", serveStatic({ root: "./dist/client" }));
app.use("/favicon.ico", serveStatic({ root: "./dist/client" }));

app.get("/.well-known/appspecific/com.chrome.devtools.json", (c) => {
  return c.text("Not Found", 404);
});

app.use("*", async (c) => {
  const response = await build(c.req.raw);

  // Create a new Response with the content to ensure proper finalization
  return response;
});
const PORT = Number.parseInt(process.env.PORT || "3000", 10);

export default {
  port: PORT,
  fetch: app.fetch,
};
