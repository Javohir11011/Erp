import { Router } from 'express'
import {
    deleteUser,
    getByIdUser,
    login,
    register,
    update,
} from '../controllers/index.js'
import { validationMiddleware } from '../middleware/validation.middleware.js'
import { userSchema } from '../schema/user.schema.js'
import { roleGuard } from '../middleware/checkrole.js'

export const authRouter = Router()

authRouter.post('/register',validationMiddleware(userSchema), register)
authRouter.post('/login', login)
authRouter.get('/all/:id', getByIdUser)
authRouter.put('/update/:id',roleGuard('admin'), update)
authRouter.delete('/delete/:id',roleGuard('admin'), deleteUser)
