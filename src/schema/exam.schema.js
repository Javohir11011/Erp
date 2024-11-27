import { z } from 'zod'

export const examSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    file: z.string(),
    course_id: z.string().optional(),
    date_created: z.string().datetime(),
})
