import { Router } from 'express'
import {
    createPayment,
    deletePayment,
    getAllPayments,
    getPaymentById,
    updatePayment,
} from '../controllers/index.js'
import { validationMiddleware } from '../middleware/validation.middleware.js'
import { paymentSchema } from '../schema/payment.schema.js'

export const paymentRouter = Router()

paymentRouter.post('/payment', validationMiddleware(paymentSchema), createPayment)
paymentRouter.get('/payment', getAllPayments)
paymentRouter.get('/payments/:id', getPaymentById)
paymentRouter.put('/payment/:id', roleGuard("admin"), updatePayment)
paymentRouter.delete('/payment/:id', roleGuard("admin"), deletePayment)
