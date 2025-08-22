import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { compress } from "hono/compress";
import "@ungap/compression-stream/poly";

import build from "./dist/rsc/index.js";

const app = new Hono();

app.use(compress());

app.use("*", serveStatic({ root: "dist/client" }));

app.get("/.well-known/appspecific/com.chrome.devtools.json", (c) => {
  c.text("Not Found", 404);
});

app.use("*", (c) => {
  return build(c.req.raw);
});

const PORT = Number.parseInt(process.env.PORT || "3000", 10);

serve(
  {
    fetch: app.fetch,
    port: PORT,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
