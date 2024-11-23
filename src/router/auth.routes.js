import { Router } from 'express'
import { login, profile, register } from '../controllers/index.js'

export const authRouter = Router()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.get('/profile', profile)
