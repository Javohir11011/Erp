import { z } from 'zod'

export const courseSchema = z.object({
    name: z.string().min(2),
    description: z.string(),
})
