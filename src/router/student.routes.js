import { Router } from 'express'
import {
    sturdentAllController,
    sturdentByIdController,
    sturdentCreateController,
    sturdentDeleteController,
} from '../controllers/index.js'

export const studentRouter = Router()

studentRouter.get('/all', sturdentAllController)
studentRouter.get('/all/:id', sturdentByIdController)
studentRouter.post('/create', sturdentCreateController)
studentRouter.delete('/delete/:id', sturdentDeleteController)
