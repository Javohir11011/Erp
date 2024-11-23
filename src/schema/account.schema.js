import { z } from 'zod';

export const accountSchema = z.object({
    id: z.string().uuid(), 
    email: z.string().email(), 
    date_created: z.string().datetime(),
    stripe_customer_id: z.string().optional(),
    stripe_subscription_id: z.string().optional(), 
    plan: z.string().optional(), 
    referrer: z.string().nullable(), 
    active: z.boolean(), 
});
