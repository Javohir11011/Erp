import { Router } from 'express'
import { homeworkSchema } from '../schema/homework.schema.js'
import { validationMiddleware, roleGuard } from '../middleware/index.js'
import {
    homeworkAllController,
    homeworkByIdController,
    homeworkCreateController,
    homeworkDeleteController,
    homeworkUpdateController,
} from '../controllers/index.js'

export const homewokrRouter = Router()

homewokrRouter.get('/all', homeworkAllController)
homewokrRouter.get('/all/:id', homeworkByIdController)
homewokrRouter.post(
    '/create',
    validationMiddleware(homeworkSchema),
    homeworkCreateController,
)
homewokrRouter.post(
    '/update/:id',
    validationMiddleware(homeworkSchema),
    homeworkUpdateController,
)
homewokrRouter.delete(
    '/delete/:id',
    roleGuard('admin'),
    homeworkDeleteController,
)
