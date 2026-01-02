import { Hono } from "hono";
import { prisma } from "../utils/prisma.js";
import { zValidator } from "@hono/zod-validator";
import { createEventValidation } from "../validation/event-validation.js";

export const eventsRoute = new Hono()
  .get("/", async (c) => {
    const events = await prisma.event.findMany({
      include: {
        participants: true,
      },
    });
    return c.json({ event: events });
  })
  .get("/:id", async (c) => {
    const id = c.req.param("id");
    const event = await prisma.event.findFirst({
      where: {
        id: id,
      },
      include: {
        participants: true,
      },
    });
    return c.json({ event });
  })
  .post("/", zValidator("json", createEventValidation), async (c) => {
    const body = await c.req.valid("json");

    const newEvent = await prisma.event.create({
      data: {
        name: body.name,
        description: body.description,
        dateTime: body.dateTime,
        location: body.location,
      },
    });
    return c.json({ event: newEvent });
  })
  .patch("/:id", async (c) => {
    const id = c.req.param("id");
    const body = await c.req.json();

    const updateEvent = await prisma.event.update({
      where: {
        id: id,
      },
      data: {
        name: body.name,
        description: body.description,
        dateTime: body.date,
        location: body.location,
      },
    });
    return c.json({ event: updateEvent });
  })
  .delete("/:id", async (c) => {
    const id = c.req.param("id");

    await prisma.event.delete({
      where: {
        id: id,
      },
    });

    return c.json({ message: "Event deleted successfully" });
  });
