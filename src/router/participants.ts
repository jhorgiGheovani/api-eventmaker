import { Hono } from "hono";
import { prisma } from "../utils/prisma.js";
import { zValidator } from "@hono/zod-validator";
import { createParticipantValidation, updateParticipantValidation } from "../validation/event-validation.js";

export const partisipantRoute = new Hono()
  .get("/", async (c) => {
    const participants = await prisma.participant.findMany();
    return c.json({ participants: participants });
  })
  .get("/:id", async (c) => {
    const id = c.req.param("id");
    const participant = await prisma.participant.findFirst({
      where: {
        id: id,
      },
      include: {
        event: true,
      },
    });
    return c.json({ participant });
  })
  .post("/", zValidator("json", createParticipantValidation), async (c) => {
    const body = await c.req.valid("json");

    const newParticipant = await prisma.participant.create({
      data: {
        name: body.name,
        email: body.email,
        eventId: body.eventId,
      },
    });
    return c.json({ participant: newParticipant });
  })
  .patch("/:id", zValidator("json", updateParticipantValidation), async (c) => {
    const id = c.req.param("id");
    const body = c.req.valid("json");

    const updateParticipant = await prisma.participant.update({
      where: {
        id: id,
      },
      data: {
        name: body.name,
        email: body.email,
        eventId: body.eventId,
      },
    });
    return c.json({ participant: updateParticipant });
  })
  .delete("/:id", async (c) => {
    const id = c.req.param("id");

    await prisma.participant.delete({
      where: {
        id: id,
      },
    });

    return c.json({ message: "Participant deleted successfully" });
  });
