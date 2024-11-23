import { Router } from 'express'
import {
    teacherAllController,
    teacherByIdController,
    teacherCreateController,
    teacherDeleteController,
} from '../controllers/index.js'

export const teacherRouter = Router()

teacherRouter.get('/all', teacherAllController)
teacherRouter.get('/all/:id', teacherByIdController)
teacherRouter.post('/create', teacherCreateController)
teacherRouter.delete('/delete/:id', teacherDeleteController)
