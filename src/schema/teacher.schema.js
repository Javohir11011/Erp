import {z} from "zod"

export const teacherSchema = z.object({
    id: z.number().optional(),
    user_id: z.number().int().positive({ message: "user_id must be a positive integer" }),
  });
  