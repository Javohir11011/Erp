import { Router } from 'express'
import {
    deleteUser,
    getByIdUser,
    login,
    register,
    update,
} from '../controllers/index.js'

export const authRouter = Router()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.get('/all/:id', getByIdUser)
authRouter.put('/update/:id', update)
authRouter.delete('/delete/:id', deleteUser)
