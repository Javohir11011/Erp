import { Router } from 'express'
import {
    createAccount,
    deleteAccount,
    getAccountById,
    getAllAccounts,
    updateAccount,
} from '../controllers/index.js'
import { roleGuard, validationMiddleware } from '../middleware/index.js'
import { accountSchema } from '../schema/index.js'

export const accountRouter = Router()

accountRouter.post('/account', validationMiddleware(accountSchema), createAccount)
accountRouter.get('/account', getAllAccounts)
accountRouter.get('/accounts/:id', getAccountById)
accountRouter.put('/account/:id', roleGuard("admin"), updateAccount)
accountRouter.delete('/account/:id', roleGuard("admin"), deleteAccount)
