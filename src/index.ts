import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { eventsRoute } from "./router/events.js";
import { partisipantRoute } from "./router/participants.js";

const app = new Hono();

app.route("/events", eventsRoute);
app.route("/participants", partisipantRoute);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
