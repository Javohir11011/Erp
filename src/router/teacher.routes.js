import { Router } from 'express'
import {
    teacherAllController,
    teacherByIdController,
    teacherCreateController,
    teacherDeleteController,
} from '../controllers/index.js'
import { teacherSchema } from '../schema/teacher.schema.js'
import { validationMiddleware,roleGuard } from '../middleware/index.js'


export const teacherRouter = Router()

teacherRouter.get('/all', teacherAllController)
teacherRouter.get('/all/:id', teacherByIdController)
teacherRouter.post('/create',validationMiddleware(teacherSchema), teacherCreateController)
teacherRouter.delete('/delete/:id',roleGuard('admin') ,teacherDeleteController)
