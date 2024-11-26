import { z } from 'zod'

export const lessonSchema = z.object({
    id: z.number().optional(),
    title: z.string().min(3),
    lessonVideo: z.string().min(3),
    homework_id: z.number().int().positive({ message: "homework_id must be a positive integer" }),
    rainting: z.number(),
})
