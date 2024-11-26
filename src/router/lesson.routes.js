import { Router } from 'express'
import { lessonSchema } from '../schema/index.js'
import { validationMiddleware, roleGuard } from '../middleware/index.js'
import {
    lessonAllController,
    lessonByIdController,
    lessonCreateController,
    lessonDeleteController,
    lessonUpdateController,
} from '../controllers/index.js'

export const lessonRouter = Router()

lessonRouter.get('/all', lessonAllController)
lessonRouter.get('/all/:id', lessonByIdController)
lessonRouter.post(
    '/create',
    validationMiddleware(lessonSchema),
    lessonCreateController,
)
lessonRouter.post(
    '/update/:id',
    validationMiddleware(lessonSchema),
    lessonUpdateController,
)
lessonRouter.delete('/delete/:id', roleGuard('admin'), lessonDeleteController)
