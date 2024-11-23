import express, { urlencoded } from 'express'
import { authRouter } from './router/index.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use("/api/v1")
app.use('/api/v1', authRouter)

export default app
