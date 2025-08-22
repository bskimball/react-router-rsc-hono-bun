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

app.use("*", (c) => {
  return build(c.req.raw);
});

export default {
  port: Number.parseInt(process.env.PORT || "3000", 10),
  fetch: app.fetch,
};
