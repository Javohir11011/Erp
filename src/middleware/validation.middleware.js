import { z } from 'zod'

export const validationMiddleware = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body)
            next()
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errorMessages = error.errors
                    .map((err) => err.message)
                    .join(', ')
                return res.status(400).json({
                    error: 'validationError',
                    details: error.errors.map((err) => err.message),
                })
            }
            next(error)
        }
    }
}
