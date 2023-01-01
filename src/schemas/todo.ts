import { boolean, string, z } from "zod";

export const todoSchema = z.object({
  userId: z.string(),
  id: z.string(),
  title: z.string(),
  completed: z.boolean(),
});
