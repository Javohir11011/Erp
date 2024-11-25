import { Router } from 'express'
import {
    deleteUser,
    getByIdUser,
    login,
    register,
    update,
} from '../controllers/index.js'
import { validationMiddleware,roleGuard } from '../middleware/index.js'
import { userSchema } from '../schema/user.schema.js'

export const authRouter = Router()

authRouter.post('/register',validationMiddleware(userSchema), register)
authRouter.post('/login', login)
authRouter.get('/all/:id', getByIdUser)
authRouter.put('/update/:id',roleGuard('admin'), update)
authRouter.delete('/delete/:id',roleGuard('admin'), deleteUser)
