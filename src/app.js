import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import passport from 'passport'
import {
    // authRouter,
    studentRouter,
    teacherRouter,
    assignmentRouter,
    courseRouter,
    googleRouter,
    homewokrRouter,
    lessonRouter,
    examRouter,
} from './router/index.js'
import { createTable } from './database/tables.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cookieParser())
app.use(
    session({
        secret: 'asdvfbfgtre',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
        },
    }),
)

app.use(passport.initialize())
app.use(passport.session())
4
app.use('/api/v1/exam', examRouter)
app.use('/api/v1/lesson', lessonRouter)
app.use('/api/v1/homework', homewokrRouter)

app.use('/api/v1', googleRouter)
// app.use('/api/v1/auth', authRouter)
app.use('/api/v1/teacher', teacherRouter)
app.use('/api/v1/student', studentRouter)
// app.use('/api/v1', authRouter)
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/assignment', assignmentRouter)

app.get('/api/v1/setup', async (req, res) => {
    await createTable()
    res.send('create tables...')
})

export default app
