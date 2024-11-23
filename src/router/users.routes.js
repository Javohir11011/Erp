import { Router } from 'express'

export const userRouter = Router()

userRouter.get('/all')
userRouter.get('/:id')
userRouter.post('/create')
userRouter.put('/update/:id')
userRouter.delete('/delete/:id')
