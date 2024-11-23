import { z } from "zod"
export const paymentSchema = z.object({
    id: z.number().int(), 
    account_id: z.string().uuid(), 
    amount: z.number().positive(), 
    currency: z.string().length(3), 
    payment_date: z.string().datetime(), 
    status: z.string(), 
    stripe_payment_id: z.string().optional(),
});
