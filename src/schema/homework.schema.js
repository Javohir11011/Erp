import { z } from 'zod'

export const homeworkSchema = z.object({
    id: z.number().optional(),
    title: z.string().min(3),
    description: z.string().min(3),
    status: z.string().optional(),
})
