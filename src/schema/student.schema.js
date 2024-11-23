import { z } from 'zod';

export const studentSchema = z.object({
  id: z.number().optional(),
  user_id: z.number().int().positive({ message: "user_id must be a positive integer" }),
  permisson: z.boolean({ message: "permisson must be true or false" }),
});
