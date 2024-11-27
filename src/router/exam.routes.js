import { Router } from 'express'

import { examSchema } from '../schema/exam.schema.js'
import { validationMiddleware, roleGuard } from '../middleware/index.js'
import {
    examAllController,
    examByIdController,
    examCreateController,
    examDeleteController,
    examUpdateController,
} from '../controllers/index.js'

export const examRouter = Router()

examRouter.get('/all', examAllController)
examRouter.get('/all/:id', validationMiddleware(examSchema), examByIdController)
examRouter.post('/create', examCreateController)
examRouter.post('/upadate/:id', roleGuard('admin', 'teacher'), examUpdateController)
examRouter.delete('/delete/:id', roleGuard('admin'), examDeleteController)
