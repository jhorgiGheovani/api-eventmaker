import { Hono } from "hono";
import { prisma } from "../utils/prisma.js";

export const partisipantRoute = new Hono()
  .get("/", (c) => {
    return c.json({ event: [] });
  })
  .get("/:id", (c) => {
    const id = c.req.param("id");
    return c.json({ event: id });
  })
  .post("/", async (c) => {
    const body = await c.req.json();

    const newParticipant = await prisma.participant.create({
      data: {
        name: body.name,
        email: body.email,
        eventId: body.eventId,
      },
    });
    return c.json({ event: newParticipant });
  })
  .patch("/:id", (c) => {
    const id = c.req.param("id");
    return c.json({ event: id });
  })
  .delete("/:id", (c) => {
    const id = c.req.param("id");
    return c.json({ event: id });
  });
