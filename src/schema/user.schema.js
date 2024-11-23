import { z } from 'zod'

export const userSchema = z.object({
    name: z.string().min(1),
    email: z
        .string()
        .min(1, { message: 'emailni togri kiriting...' })
        .email('bu email mos emas...'),
    password: z.string().min(8),
    role: z.string().optional(),
})
