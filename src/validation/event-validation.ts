import z from "zod";

export const createEventValidation = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  location: z.string().min(1),
  dateTime: z.string().min(1),
});

export const createParticipantValidation = z.object({
  name: z.string().min(1),
  email: z.email(),
  eventId: z.string().min(1),
});

export const updateEventValidation = createEventValidation.partial();

export const updateParticipantValidation = createParticipantValidation.partial();
