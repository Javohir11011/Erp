import express from 'express'
import { assignmentRouter, authRouter, courseRouter } from './router/index.js'
import { createTable } from './database/tables.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use("/api/v1")
app.use('/api/v1', authRouter)
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/assignment', assignmentRouter)

app.get('/api/v1/setup', async (req, res) => {
    await createTable()
    res.send('create tables...')
})

export default app
