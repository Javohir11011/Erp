import { Router } from 'express'
import {
    sturdentAllController,
    sturdentByIdController,
    sturdentCreateController,
    sturdentDeleteController,
} from '../controllers/index.js'
import { validationMiddleware } from '../middleware/validation.middleware.js'
import { studentSchema } from '../schema/student.schema.js'
import { roleGuard } from '../middleware/checkrole.js'

export const studentRouter = Router()

studentRouter.get('/all', sturdentAllController)
studentRouter.get('/all/:id',validationMiddleware(studentSchema), sturdentByIdController)
studentRouter.post('/create', sturdentCreateController)
studentRouter.delete('/delete/:id',roleGuard('admin'), sturdentDeleteController)
